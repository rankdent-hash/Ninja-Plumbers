// Filling in what was not known when the lead was taken.
//
// On a phone call the postcode usually arrives second: the caller describes
// the problem, and the address only gets pinned down when a visit is booked.
// Forcing it at the point of logging gets it answered with a guess, and a
// guessed postcode is worse than a blank one — it puts a dot on the map in a
// place no job ever happened.
//
// What may be changed depends on where the lead came from, and the line is
// drawn deliberately:
//
//   * The postcode and the lead source can be edited on any lead. Both are
//     facts about the job that get established after the fact, and a website
//     submission can have a mistyped postcode as easily as a call can have a
//     missing one.
//
//   * Everything else — the name, the email, what they said — can only be
//     edited on a lead the office logged by hand. On a website submission
//     those fields are the customer's own words, and this panel has no
//     business rewriting them.
//
// The channel itself can be corrected but never set to 'form': see
// src/pages/api/admin/leads/index.ts for why that value is reserved.
import type { APIRoute } from 'astro';
import { getSupabaseAdmin } from '../../../../../lib/supabaseAdmin';
import { MANUAL_CHANNELS, isLeadSource } from '../../../../../lib/leadChannels';
import { splitPostcode, lookupPostcode } from '../../../../../lib/postcodeArea';

export const prerender = false;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

/** Fields only editable on a lead somebody here typed in. */
const MANUAL_ONLY = {
  name: 120,
  email: 200,
  phone: 40,
  address_line: 250,
  service: 80,
  urgency: 40,
  description: 4000,
} as const;

export const PATCH: APIRoute = async ({ params, request }) => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return json({ ok: false, message: 'Not connected to Supabase.' }, 503);

  const id = params.id;
  if (!id) return json({ ok: false, message: 'Missing lead id.' }, 400);

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, message: 'Could not read that request.' }, 400);
  }

  const { data: existing, error: loadError } = await supabase
    .from('enquiries')
    .select('id, channel')
    .eq('id', id)
    .maybeSingle();
  if (loadError) return json({ ok: false, message: 'Could not load that lead.' }, 500);
  if (!existing) return json({ ok: false, message: 'That lead does not exist.' }, 404);

  const isManual = existing.channel !== 'form';
  const patch: Record<string, unknown> = {};
  const errors: Record<string, string> = {};

  // Present and empty means "clear it"; absent means "leave it alone". The two
  // are different requests and a falsy check would collapse them.
  if ('postcode' in body) {
    const postcode = str(body.postcode, 12);
    if (!postcode) {
      patch.postcode = null;
      patch.postcode_district = null;
      patch.borough = null;
      patch.in_service_area = null;
    } else {
      const lookup = await lookupPostcode(postcode);
      if (!lookup.valid) {
        errors.postcode = 'That postcode does not exist. Check it, or leave it blank for now.';
      } else {
        // Re-derived, never carried over. A corrected postcode that kept the
        // old borough would show the job in the wrong place on the map and
        // look authoritative doing it.
        patch.postcode = postcode.toUpperCase();
        patch.postcode_district = splitPostcode(postcode).outward;
        patch.borough = lookup.borough ?? null;
        patch.in_service_area = lookup.inServiceArea;
      }
    }
  }

  if ('lead_source' in body) {
    const leadSource = str(body.lead_source, 40);
    if (!leadSource) patch.lead_source = null;
    else if (!isLeadSource(leadSource)) errors.lead_source = 'That is not one of the sources on the list.';
    else patch.lead_source = leadSource;
  }

  if ('channel' in body) {
    const channel = str(body.channel, 20);
    if (!isManual) errors.channel = 'A website submission cannot be relabelled.';
    else if (!(MANUAL_CHANNELS as readonly string[]).includes(channel)) {
      errors.channel = 'Choose how they got in touch.';
    } else patch.channel = channel;
  }

  for (const [field, max] of Object.entries(MANUAL_ONLY)) {
    if (!(field in body)) continue;
    if (!isManual) {
      errors[field] = 'This came from the website form and is the customer’s own wording.';
      continue;
    }
    const value = str(body[field], max);
    if (field === 'phone' && !value) {
      errors.phone = 'A phone number is needed — it is the only way back to them.';
      continue;
    }
    if (field === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errors.email = 'That email address does not look right.';
      continue;
    }
    patch[field] = value || null;
  }

  if (Object.keys(errors).length) {
    return json({ ok: false, errors, message: 'Please check the highlighted fields.' }, 400);
  }
  if (Object.keys(patch).length === 0) {
    return json({ ok: false, message: 'Nothing to change.' }, 400);
  }

  const { error } = await supabase.from('enquiries').update(patch).eq('id', id);
  if (error) {
    console.error('lead details update failed', error);
    return json({ ok: false, message: 'Could not save that.' }, 500);
  }

  return json({ ok: true, changed: patch }, 200);
};
