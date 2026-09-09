import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import site from '../../data/site.json';

export const prerender = false;

// Postcode areas we explicitly do not serve. These come up in enquiries often
// enough to be worth naming; see /areas-we-cover.
const EXCLUDED_AREAS = ['SG', 'NG'];

const MAX_PER_IP_PER_HOUR = 5;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });

/** Salted hash, so we can rate-limit without retaining a raw IP address. */
async function hashIp(ip: string, salt: string): Promise<string> {
  const data = new TextEncoder().encode(`${ip}:${salt}`);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

/** Outward code of a UK postcode: "SW6 3LQ" -> "SW6". Area: "SW6" -> "SW". */
function splitPostcode(raw: string) {
  const clean = raw.toUpperCase().replace(/\s+/g, '');
  const outward = clean.length > 3 ? clean.slice(0, clean.length - 3) : clean;
  const area = outward.replace(/[0-9].*$/, '');
  return { outward, area };
}

type Lookup = {
  valid: boolean;
  inServiceArea: boolean;
  borough?: string;
  region?: string;
};

/** postcodes.io is free and needs no key. Never trust the client's own verdict. */
async function lookupPostcode(postcode: string): Promise<Lookup> {
  const { area } = splitPostcode(postcode);
  if (EXCLUDED_AREAS.includes(area)) {
    return { valid: true, inServiceArea: false };
  }
  try {
    const res = await fetch(
      `https://api.postcodes.io/postcodes/${encodeURIComponent(postcode.trim())}`,
      { signal: AbortSignal.timeout(4000) }
    );
    // 404 means the postcode genuinely does not exist, which is worth telling
    // the customer. Any other failure is the lookup service's problem, not
    // theirs, and must not cost us the lead.
    if (res.status === 404) return { valid: false, inServiceArea: false };
    if (!res.ok) return { valid: true, inServiceArea: true };
    const body = await res.json();
    const r = body?.result;
    if (!r) return { valid: true, inServiceArea: true };
    return {
      valid: true,
      inServiceArea: r.region === 'London',
      borough: r.admin_district ?? undefined,
      region: r.region ?? undefined,
    };
  } catch {
    // A postcodes.io outage must not cost us a lead. Accept it and let the
    // office check the address by hand.
    return { valid: true, inServiceArea: true };
  }
}

async function notify(enquiry: Record<string, any>) {
  const key = import.meta.env.RESEND_API_KEY;
  // NOTIFY_EMAIL is comma-separated, so a submission can reach more than one
  // inbox (a test address alongside the business's real one) without a code
  // change — just edit the env var.
  const to = (import.meta.env.NOTIFY_EMAIL || site.email)
    .split(',')
    .map((e: string) => e.trim())
    .filter(Boolean);
  if (!key) return { sent: false, reason: 'RESEND_API_KEY not set' };

  const lines = [
    `Name:     ${enquiry.name}`,
    `Phone:    ${enquiry.phone}`,
    `Email:    ${enquiry.email || '-'}`,
    `Postcode: ${enquiry.postcode}${enquiry.borough ? ` (${enquiry.borough})` : ''}`,
    `Address:  ${enquiry.address_line || '-'}`,
    `Service:  ${enquiry.service || '-'}`,
    `Urgency:  ${enquiry.urgency || '-'}`,
    '',
    enquiry.description || '(no description given)',
  ];
  if (enquiry.in_service_area === false) {
    lines.unshift('*** OUTSIDE SERVICE AREA ***', '');
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
      body: JSON.stringify({
        from: import.meta.env.NOTIFY_FROM || 'Tamesis Website <onboarding@resend.dev>',
        to,
        reply_to: enquiry.email || undefined,
        subject: `New enquiry — ${enquiry.name}, ${enquiry.postcode} (${enquiry.urgency || 'no urgency given'})`,
        text: lines.join('\n'),
      }),
      signal: AbortSignal.timeout(5000),
    });
    if (res.ok) return { sent: true };
    // Resend's body names the exact reason (e.g. a sandbox sender restricted
    // to the account's own address) — log it, not just the status code.
    const detail = await res.text().catch(() => '');
    return { sent: false, reason: `resend ${res.status}${detail ? `: ${detail.slice(0, 300)}` : ''}` };
  } catch (e) {
    return { sent: false, reason: String(e) };
  }
}

/**
 * Forwards the lead to the business's GoHighLevel account via an inbound
 * webhook trigger, so it lands in their CRM alongside leads from other
 * sources. Optional and never allowed to cost us the lead: with no URL
 * configured, or on any failure, the enquiry still saves to Supabase and the
 * customer still gets their confirmation.
 */
async function notifyGHL(enquiry: Record<string, any>) {
  const url = import.meta.env.GHL_WEBHOOK_URL;
  if (!url) return { sent: false, reason: 'GHL_WEBHOOK_URL not set' };

  const [firstName, ...restName] = String(enquiry.name).trim().split(/\s+/);
  const lastName = restName.join(' ');

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        // Field names and casing match the payload already flowing into this
        // GHL workflow from the business's other lead source (their Jotform
        // bridge), so both land on the same contact-field mapping.
        firstName: firstName || enquiry.name,
        lastName,
        email: enquiry.email || '',
        phone: enquiry.phone,
        source: 'Tamesis Plumbers Website',
        formType: 'website-enquiry',
        service: enquiry.service || '',
        message: enquiry.description || '',
        // Extra job detail the booking office needs, alongside the fields above.
        address1: enquiry.address_line || '',
        city: enquiry.borough || '',
        postalCode: enquiry.postcode,
        country: 'GB',
        urgency: enquiry.urgency || '',
        inServiceArea: enquiry.in_service_area,
        sourcePage: enquiry.source_page || '',
        submittedAt: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(5000),
    });
    return { sent: res.ok, reason: res.ok ? undefined : `ghl ${res.status}` };
  } catch (e) {
    return { sent: false, reason: String(e) };
  }
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const url = import.meta.env.SUPABASE_URL;
  const key = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

  // Without credentials there is nowhere to put the enquiry. Say so plainly
  // rather than accepting it and dropping it on the floor.
  if (!url || !key) {
    return json(
      {
        ok: false,
        code: 'not_configured',
        message: 'The enquiry form is not connected yet. Please call us instead.',
      },
      503
    );
  }

  let body: Record<string, any>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, message: 'Could not read that submission.' }, 400);
  }

  // Honeypot: a real person never fills a field they cannot see.
  if (body.company) {
    return json({ ok: true }, 200);
  }

  const str = (v: unknown, max: number) =>
    typeof v === 'string' ? v.trim().slice(0, max) : '';

  const name = str(body.name, 120);
  const phone = str(body.phone, 40);
  const postcode = str(body.postcode, 12);
  const email = str(body.email, 200);
  const addressLine = str(body.address_line, 250);
  const service = str(body.service, 80);
  const urgency = str(body.urgency, 40);
  const description = str(body.description, 4000);
  const sourcePage = str(body.source_page, 200);

  const errors: Record<string, string> = {};
  if (!name) errors.name = 'Please tell us your name.';
  if (!phone) errors.phone = 'We need a phone number to call you back.';
  else if (phone.replace(/\D/g, '').length < 10) errors.phone = 'That phone number looks too short.';
  if (!postcode) errors.postcode = 'Please give us the postcode of the job.';
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'That email address does not look right.';

  if (Object.keys(errors).length) {
    return json({ ok: false, errors, message: 'Please check the highlighted fields.' }, 400);
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } });

  const ipHash = await hashIp(
    clientAddress || request.headers.get('x-forwarded-for') || 'unknown',
    import.meta.env.IP_SALT || 'tamesis-fallback-salt'
  );

  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { count } = await supabase
    .from('enquiries')
    .select('id', { count: 'exact', head: true })
    .eq('ip_hash', ipHash)
    .gte('created_at', since);

  if ((count ?? 0) >= MAX_PER_IP_PER_HOUR) {
    return json(
      {
        ok: false,
        code: 'rate_limited',
        message: `You have sent several enquiries already. Please call us on ${site.booking.display} and we will pick it up straight away.`,
      },
      429
    );
  }

  const lookup = await lookupPostcode(postcode);
  if (!lookup.valid) {
    return json(
      { ok: false, errors: { postcode: 'We could not find that postcode. Please check it.' } },
      400
    );
  }

  const { outward } = splitPostcode(postcode);

  const { error } = await supabase.from('enquiries').insert({
    name,
    phone,
    email: email || null,
    postcode: postcode.toUpperCase(),
    address_line: addressLine || null,
    service: service || null,
    urgency: urgency || null,
    description: description || null,
    // The form shows its privacy notice beside the submit button rather than
    // a checkbox. The column is CHECK (consent = true), so this records that
    // the notice was on screen when the enquiry was sent.
    consent: true,
    postcode_district: outward,
    borough: lookup.borough ?? null,
    in_service_area: lookup.inServiceArea,
    source_page: sourcePage || null,
    user_agent: (request.headers.get('user-agent') || '').slice(0, 400) || null,
    ip_hash: ipHash,
  });

  if (error) {
    console.error('enquiry insert failed', error);
    return json(
      {
        ok: false,
        message: `Something went wrong saving that. Please call us on ${site.booking.display}.`,
      },
      500
    );
  }

  // Neither of these can fail the submission: the lead is already saved.
  const [mail, ghl] = await Promise.all([
    notify({
      name, phone, email, postcode, address_line: addressLine,
      service, urgency, description, borough: lookup.borough,
      in_service_area: lookup.inServiceArea,
    }),
    notifyGHL({
      name, phone, email, postcode, address_line: addressLine,
      service, urgency, description, borough: lookup.borough,
      in_service_area: lookup.inServiceArea, source_page: sourcePage,
    }),
  ]);
  if (!mail.sent) console.warn('enquiry notification not sent:', mail.reason);
  if (!ghl.sent) console.warn('enquiry not forwarded to GoHighLevel:', ghl.reason);

  return json({ ok: true, inServiceArea: lookup.inServiceArea, borough: lookup.borough ?? null }, 200);
};
