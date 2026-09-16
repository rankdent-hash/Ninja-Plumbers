// Logging a lead that never touched the website: a phone call, a WhatsApp
// message, an email. Google Ads calls in particular are invisible here — the
// ad sends someone straight to a phone dialler and the site is never loaded —
// so until the office can type one in, the busiest source of work does not
// appear in any of our own numbers.
//
// Two rules this endpoint keeps, both of which matter more than convenience:
//
//   * It cannot write channel = 'form'. Only src/pages/api/enquiry.ts may do
//     that, because /admin/activity's conversion rates count exactly the rows
//     carrying it. A logged call pretending to be a form submission would
//     silently change the measured performance of whichever page the office
//     happened to have open.
//
//   * It writes consent = false, always. The person who rang never saw the
//     form's privacy notice, and a stored `true` would be a false record of
//     consent — the kind of untruth that is only discovered when it matters.
import type { APIRoute } from 'astro';
import { getSupabaseAdmin, LEAD_STATUSES } from '../../../../lib/supabaseAdmin';
import { MANUAL_CHANNELS, isLeadSource } from '../../../../lib/leadChannels';
import { splitPostcode, lookupPostcode } from '../../../../lib/postcodeArea';

export const prerender = false;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export const POST: APIRoute = async ({ request, locals }) => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return json({ ok: false, message: 'Not connected to Supabase.' }, 503);

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, message: 'Could not read that request.' }, 400);
  }

  const channel = str(body.channel, 20);
  const name = str(body.name, 120);
  const phone = str(body.phone, 40);
  const email = str(body.email, 200);
  const postcode = str(body.postcode, 12);
  const addressLine = str(body.address_line, 250);
  const service = str(body.service, 80);
  const urgency = str(body.urgency, 40);
  const description = str(body.description, 4000);
  const leadSource = str(body.lead_source, 40);
  const status = str(body.status, 20) || 'new';

  const errors: Record<string, string> = {};
  if (!(MANUAL_CHANNELS as readonly string[]).includes(channel)) {
    errors.channel = 'Choose how they got in touch.';
  }
  // A phone number is the one thing every one of these channels leaves behind,
  // including a missed call with no name attached. Everything else can be
  // filled in later from the lead's own page.
  if (!phone) errors.phone = 'A phone number is needed — it is the only way back to them.';
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'That email address does not look right.';
  if (leadSource && !isLeadSource(leadSource)) errors.lead_source = 'That is not one of the sources on the list.';
  if (!(LEAD_STATUSES as readonly string[]).includes(status)) errors.status = 'That is not a valid status.';

  if (Object.keys(errors).length) {
    return json({ ok: false, errors, message: 'Please check the highlighted fields.' }, 400);
  }

  // The postcode is optional on the way in. When one is given it goes through
  // exactly the same lookup as a website submission, so a logged call lands on
  // the same dot of the map as a form from the same street. When it is not,
  // the district stays null and /admin/areas reports it under
  // "(not recorded)" rather than guessing a place for it.
  let district: string | null = null;
  let borough: string | null = null;
  let inServiceArea: boolean | null = null;
  if (postcode) {
    const lookup = await lookupPostcode(postcode);
    if (!lookup.valid) {
      return json({ ok: false, errors: { postcode: 'That postcode does not exist. Check it, or leave it blank for now.' } }, 400);
    }
    district = splitPostcode(postcode).outward;
    borough = lookup.borough ?? null;
    inServiceArea = lookup.inServiceArea;
  }

  const admin = locals.admin;
  const { data, error } = await supabase
    .from('enquiries')
    .insert({
      name: name || null,
      phone,
      email: email || null,
      postcode: postcode ? postcode.toUpperCase() : null,
      address_line: addressLine || null,
      service: service || null,
      urgency: urgency || null,
      description: description || null,
      consent: false,
      channel,
      lead_source: leadSource || null,
      postcode_district: district,
      borough,
      in_service_area: inServiceArea,
      status,
      // Who typed it in and when, kept apart from created_at. A call logged on
      // Monday morning that came in over the weekend has two different times
      // worth knowing, and conflating them would quietly move work between
      // reporting weeks.
      logged_by: admin?.email ?? null,
      logged_at: new Date().toISOString(),
    })
    .select('id')
    .single();

  if (error) {
    console.error('manual lead insert failed', error);
    return json({ ok: false, message: 'Could not save that lead.' }, 500);
  }

  return json({ ok: true, id: data.id }, 200);
};
