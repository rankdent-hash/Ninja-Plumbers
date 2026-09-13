import type { APIRoute } from 'astro';
import { getSupabaseAdmin } from '../../../../lib/supabaseAdmin';

export const prerender = false;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

// Every column a human can edit here — unlike the MCP tools, this trusts the
// signed-in admin completely: no icon/art enum check, no rating/trustExtra
// lock, and offer (a real discount) can be set, because a person reviewing
// their own site is the same trust level the rest of /admin already runs at.
const EDITABLE_FIELDS = [
  'h1', 'sub', 'meta_title', 'meta_description', 'campaign', 'head_term', 'urgent',
  'form_label', 'related_service', 'covers', 'card_icon', 'eyebrow',
  'proof', 'form', 'fixes', 'diagnosis', 'steps', 'close',
  'bullets', 'reassure', 'faqs', 'cross_link', 'rating', 'trust_extra', 'offer', 'slug',
] as const;

export const PATCH: APIRoute = async ({ params, request }) => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return json({ ok: false, message: 'Not connected to Supabase.' }, 503);

  const id = params.id;
  if (!id) return json({ ok: false, message: 'Missing page id.' }, 400);

  let body: Record<string, any>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, message: 'Could not read that request.' }, 400);
  }

  const update: Record<string, any> = { updated_at: new Date().toISOString() };
  for (const field of EDITABLE_FIELDS) {
    if (field in body) update[field] = body[field];
  }

  if (typeof body.status === 'string') {
    if (!['draft', 'published'].includes(body.status)) {
      return json({ ok: false, message: 'Status must be draft or published.' }, 400);
    }
    update.status = body.status;
    if (body.status === 'published') {
      const { data: existing } = await supabase.from('landing_pages').select('published_at').eq('id', id).maybeSingle();
      if (!existing?.published_at) update.published_at = new Date().toISOString();
    }
  }

  if (Object.keys(update).length === 1) return json({ ok: false, message: 'Nothing to update.' }, 400);

  const { error } = await supabase.from('landing_pages').update(update).eq('id', id);
  if (error) return json({ ok: false, message: 'Could not save that — check the JSON fields are valid.' }, 500);

  return json({ ok: true }, 200);
};

export const DELETE: APIRoute = async ({ params }) => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return json({ ok: false, message: 'Not connected to Supabase.' }, 503);

  const id = params.id;
  if (!id) return json({ ok: false, message: 'Missing page id.' }, 400);

  const { error } = await supabase.from('landing_pages').delete().eq('id', id);
  if (error) return json({ ok: false, message: 'Could not delete that.' }, 500);

  return json({ ok: true }, 200);
};
