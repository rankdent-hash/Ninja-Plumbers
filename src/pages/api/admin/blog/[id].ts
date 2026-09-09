import type { APIRoute } from 'astro';
import { getSupabaseAdmin } from '../../../../lib/supabaseAdmin';

export const prerender = false;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

const EDITABLE_FIELDS = [
  'title', 'h1', 'meta_title', 'meta_description', 'excerpt', 'body', 'slug',
  'related_services', 'related_appliances', 'related_damp',
] as const;

export const PATCH: APIRoute = async ({ params, request }) => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return json({ ok: false, message: 'Not connected to Supabase.' }, 503);

  const id = params.id;
  if (!id) return json({ ok: false, message: 'Missing post id.' }, 400);

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
      const { data: existing } = await supabase.from('blog_posts').select('published_at').eq('id', id).maybeSingle();
      if (!existing?.published_at) update.published_at = new Date().toISOString();
    }
  }

  if (Object.keys(update).length === 1) return json({ ok: false, message: 'Nothing to update.' }, 400);

  const { error } = await supabase.from('blog_posts').update(update).eq('id', id);
  if (error) return json({ ok: false, message: 'Could not save that.' }, 500);

  return json({ ok: true }, 200);
};

export const DELETE: APIRoute = async ({ params }) => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return json({ ok: false, message: 'Not connected to Supabase.' }, 503);

  const id = params.id;
  if (!id) return json({ ok: false, message: 'Missing post id.' }, 400);

  await supabase.storage.from('blog-images').remove([`${id}.png`]);
  const { error } = await supabase.from('blog_posts').delete().eq('id', id);
  if (error) return json({ ok: false, message: 'Could not delete that.' }, 500);

  return json({ ok: true }, 200);
};
