import type { APIRoute } from 'astro';
import { getSupabaseAdmin, LEAD_STATUSES } from '../../../../../lib/supabaseAdmin';

export const prerender = false;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

export const PATCH: APIRoute = async ({ params, request }) => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return json({ ok: false, message: 'Not connected to Supabase.' }, 503);

  const id = params.id;
  if (!id) return json({ ok: false, message: 'Missing lead id.' }, 400);

  let body: Record<string, any>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, message: 'Could not read that request.' }, 400);
  }

  const status = body.status;
  if (!(LEAD_STATUSES as readonly string[]).includes(status)) {
    return json({ ok: false, message: 'Not a valid status.' }, 400);
  }

  const { error } = await supabase.from('enquiries').update({ status }).eq('id', id);
  if (error) return json({ ok: false, message: 'Could not save that.' }, 500);

  return json({ ok: true }, 200);
};
