import type { APIRoute } from 'astro';
import { getSupabaseAdmin } from '../../lib/supabaseAdmin';
import { hashIp } from '../../lib/hashIp';

export const prerender = false;

// Records a contact-intent click (tel:, wa.me, sms:) from the public site.
//
// Called by /track.js with navigator.sendBeacon, so the request survives the
// browser immediately navigating away to the dialler or WhatsApp. sendBeacon
// gives us no response to read, which shapes the rules below: every reply is
// 204, nothing is echoed back, and a bad payload is dropped silently rather
// than reported. There is nothing here for a caller to learn.
//
// No cookies and no browser storage are involved. The IP is only ever stored
// as a salted hash, and only so one machine cannot flood the table.

const KINDS = new Set(['phone', 'whatsapp', 'sms']);
const MAX_PER_IP_PER_HOUR = 60;

const noContent = () => new Response(null, { status: 204 });

/** Coarse device class from the UA string. Read server-side so the beacon payload stays tiny. */
function deviceFrom(ua: string): 'mobile' | 'tablet' | 'desktop' {
  if (/ipad|tablet|playbook|silk|(android(?!.*mobile))/i.test(ua)) return 'tablet';
  if (/mobi|iphone|ipod|android|blackberry|iemobile|opera mini/i.test(ua)) return 'mobile';
  return 'desktop';
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const supabase = getSupabaseAdmin();
  // Nothing to write to. A dropped click is not worth an error the caller
  // cannot read anyway.
  if (!supabase) return noContent();

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return noContent();
  }

  const kind = typeof body.kind === 'string' ? body.kind : '';
  if (!KINDS.has(kind)) return noContent();

  const str = (v: unknown, max: number) =>
    typeof v === 'string' && v.trim() ? v.trim().slice(0, max) : null;

  const ua = (request.headers.get('user-agent') || '').slice(0, 400);

  // Date is part of the salt, same rule as /api/view: the hash is stable for
  // an hour's rate limiting but not across days, so a click history cannot be
  // stitched together over time — nor, since enquiries hash the same way,
  // tied back to a named customer beyond the day they enquired.
  const today = new Date().toISOString().slice(0, 10);
  const ipHash = await hashIp(
    clientAddress || request.headers.get('x-forwarded-for') || 'unknown',
    `${import.meta.env.IP_SALT || 'tamesis-fallback-salt'}:${today}`
  );

  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { count } = await supabase
    .from('click_events')
    .select('id', { count: 'exact', head: true })
    .eq('ip_hash', ipHash)
    .gte('created_at', since);

  if ((count ?? 0) >= MAX_PER_IP_PER_HOUR) return noContent();

  const { error } = await supabase.from('click_events').insert({
    kind,
    source_page: str(body.page, 200),
    zone: str(body.zone, 60),
    label: str(body.label, 120),
    device: deviceFrom(ua),
    gclid: str(body.gclid, 200),
    referrer: str(body.referrer, 300),
    user_agent: ua || null,
    ip_hash: ipHash,
  });

  // Logged, not surfaced: the page has already navigated to the dialler and a
  // missed click must never interrupt someone trying to call.
  if (error) console.error('click_events insert failed', error);

  return noContent();
};
