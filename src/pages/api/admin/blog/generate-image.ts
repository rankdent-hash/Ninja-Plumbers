import type { APIRoute } from 'astro';
import { getSupabaseAdmin } from '../../../../lib/supabaseAdmin';
import { getSetting } from '../../../../lib/adminSettings';
import { generateAndStoreHeroImage } from '../../../../lib/blogImages';

export const prerender = false;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

export const POST: APIRoute = async ({ request }) => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return json({ ok: false, message: 'Not connected to Supabase.' }, 503);

  let body: Record<string, any>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, message: 'Could not read that request.' }, 400);
  }

  const id = String(body.id || '');
  if (!id) return json({ ok: false, message: 'Missing post id.' }, 400);

  const apiKey = await getSetting(supabase, 'openai_api_key');
  if (!apiKey) return json({ ok: false, message: 'No OpenAI API key set — add one in Settings first.' }, 400);

  const { data: post } = await supabase.from('blog_posts').select('id, slug, title, excerpt').eq('id', id).maybeSingle();
  if (!post) return json({ ok: false, message: 'Post not found.' }, 404);

  const prompt = String(body.prompt || '').trim() || undefined;
  const result = await generateAndStoreHeroImage(supabase, apiKey, post, prompt);
  if (!result.ok) return json({ ok: false, message: result.message }, result.message.startsWith('Image generation failed') ? 502 : 500);

  return json({ ok: true, url: result.url }, 200);
};
