import type { APIRoute } from 'astro';
import { getSupabaseAdmin } from '../../lib/supabaseAdmin';
import { hashIp } from '../../lib/hashIp';

export const prerender = false;

// Records a page view on the public site.
//
// Same shape as /api/track: sent with sendBeacon, always answers 204, never
// tells the caller anything. No cookies and no browser storage.
//
// HOW A VISITOR IS COUNTED, and what that does and does not support:
// the visitor id is a salted hash of IP + user agent where the salt contains
// today's date, so it changes at midnight. Within a day the same person is one
// visitor; across days their hash is a different value on purpose, so this is
// not a persistent identifier and nothing here follows anyone around.
//
// The honest consequence, surfaced in the admin panel rather than hidden:
// visitor counts over a week or a month are the sum of daily uniques. Someone
// who visits on three days counts three times. True cross-day uniques need a
// persistent id stored in the browser, which under UK PECR would need consent.

const MAX_PER_VISITOR_PER_HOUR = 300;

// Crawlers and preview fetchers. Not exhaustive — nothing is — but it keeps
// the obvious automated traffic out of numbers meant to describe customers.
const BOT_RE =
  /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|whatsapp|telegram|preview|monitor|pingdom|uptime|lighthouse|headless|curl|wget|python-requests|axios|node-fetch|postman|semrush|ahrefs|mj12|dotbot|petalbot|gptbot|claudebot|ccbot|bytespider|applebot|duckduckbot|yandex|baidu/i;

const noContent = () => new Response(null, { status: 204 });

function deviceFrom(ua: string): 'mobile' | 'tablet' | 'desktop' {
  if (/ipad|tablet|playbook|silk|(android(?!.*mobile))/i.test(ua)) return 'tablet';
  if (/mobi|iphone|ipod|android|blackberry|iemobile|opera mini/i.test(ua)) return 'mobile';
  return 'desktop';
}

/** Host only, so we keep "google.com" without the full referring URL. */
function referrerHost(raw: string): string | null {
  if (!raw) return null;
  try {
    const host = new URL(raw).hostname.replace(/^www\./, '');
    return host ? host.slice(0, 120) : null;
  } catch {
    return null;
  }
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return noContent();

  const ua = (request.headers.get('user-agent') || '').slice(0, 400);
  if (!ua || BOT_RE.test(ua)) return noContent();

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return noContent();
  }

  const path = typeof body.path === 'string' ? body.path.trim().slice(0, 200) : '';
  if (!path || !path.startsWith('/')) return noContent();
  // The admin panel does not load the tracker, but never count it even if that
  // changes — these numbers are about customers, not about us.
  if (path.startsWith('/admin')) return noContent();

  // Date is part of the salt, so the hash is only stable within a single day.
  const today = new Date().toISOString().slice(0, 10);
  const visitorHash = await hashIp(
    `${clientAddress || request.headers.get('x-forwarded-for') || 'unknown'}:${ua}`,
    `${import.meta.env.IP_SALT || 'tamesis-fallback-salt'}:${today}`
  );

  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { count } = await supabase
    .from('page_views')
    .select('id', { count: 'exact', head: true })
    .eq('visitor_hash', visitorHash)
    .gte('created_at', since);

  if ((count ?? 0) >= MAX_PER_VISITOR_PER_HOUR) return noContent();

  const { error } = await supabase.from('page_views').insert({
    path,
    visitor_hash: visitorHash,
    referrer_host: referrerHost(typeof body.referrer === 'string' ? body.referrer : ''),
    device: deviceFrom(ua),
    is_paid: body.paid === true,
  });

  if (error) console.error('page_views insert failed', error);

  return noContent();
};
