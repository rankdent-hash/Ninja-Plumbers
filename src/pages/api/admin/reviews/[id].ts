import type { APIRoute } from 'astro';
import { getSupabaseAdmin } from '../../../../lib/supabaseAdmin';

export const prerender = false;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

export const PATCH: APIRoute = async ({ params, request }) => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return json({ ok: false, message: 'Not connected to Supabase.' }, 503);

  const id = params.id;
  if (!id) return json({ ok: false, message: 'Missing review id.' }, 400);

  let body: Record<string, any>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, message: 'Could not read that request.' }, 400);
  }

  // The only field this route changes is approved — editing the text of a
  // scraped or typed-in review is a delete-and-re-add, so there is never a
  // version of a review live on the site that does not match what is on
  // record here.
  if (typeof body.approved !== 'boolean') {
    return json({ ok: false, message: 'Expected an approved true/false value.' }, 400);
  }

  const { error } = await supabase.from('testimonials').update({ approved: body.approved }).eq('id', id);
  if (error) return json({ ok: false, message: 'Could not save that.' }, 500);

  return json({ ok: true }, 200);
};

export const DELETE: APIRoute = async ({ params }) => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return json({ ok: false, message: 'Not connected to Supabase.' }, 503);

  const id = params.id;
  if (!id) return json({ ok: false, message: 'Missing review id.' }, 400);

  const { error } = await supabase.from('testimonials').delete().eq('id', id);
  if (error) return json({ ok: false, message: 'Could not delete that.' }, 500);

  return json({ ok: true }, 200);
};
