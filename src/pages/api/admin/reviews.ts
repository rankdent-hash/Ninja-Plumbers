import type { APIRoute } from 'astro';
import { getSupabaseAdmin } from '../../../lib/supabaseAdmin';

export const prerender = false;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

export const GET: APIRoute = async () => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return json({ ok: false, message: 'Not connected to Supabase.' }, 503);

  const { data, error } = await supabase
    .from('testimonials')
    .select('id, created_at, name, rating, text, source, approved')
    .order('created_at', { ascending: false });

  if (error) return json({ ok: false, message: 'Could not load reviews.' }, 500);
  return json({ ok: true, rows: data ?? [] }, 200);
};

/** Manual entry only — a scrape lands rows straight in the table itself. */
export const POST: APIRoute = async ({ request }) => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return json({ ok: false, message: 'Not connected to Supabase.' }, 503);

  let body: Record<string, any>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, message: 'Could not read that request.' }, 400);
  }

  const name = String(body.name || '').trim().slice(0, 120);
  const text = String(body.text || '').trim().slice(0, 2000);
  const rating = Number(body.rating);

  if (!name) return json({ ok: false, message: 'Reviewer name is required.' }, 400);
  if (!text) return json({ ok: false, message: 'Review text is required.' }, 400);
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return json({ ok: false, message: 'Rating must be a whole number from 1 to 5.' }, 400);
  }

  // New rows always start unapproved — added here so a review only ever goes
  // live after someone deliberately switches it on, never at the moment of entry.
  const { data, error } = await supabase
    .from('testimonials')
    .insert({ name, text, rating, source: 'manual', approved: false })
    .select('id')
    .single();

  if (error) return json({ ok: false, message: 'Could not save that review.' }, 500);
  return json({ ok: true, id: data.id }, 200);
};
