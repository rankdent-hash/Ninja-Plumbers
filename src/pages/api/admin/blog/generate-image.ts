import type { APIRoute } from 'astro';
import { getSupabaseAdmin } from '../../../../lib/supabaseAdmin';
import { getSetting } from '../../../../lib/adminSettings';
import { generateHeroImage } from '../../../../lib/aiProviders';

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

  let prompt = String(body.prompt || '').trim();
  if (!prompt) {
    const { data: post } = await supabase.from('blog_posts').select('title, excerpt').eq('id', id).maybeSingle();
    if (!post) return json({ ok: false, message: 'Post not found.' }, 404);
    prompt = `A clean, realistic editorial photo illustrating a UK home plumbing/heating blog post titled "${post.title}". ${post.excerpt} No text or logos in the image.`;
  }

  let image;
  try {
    image = await generateHeroImage(apiKey, prompt);
  } catch (err) {
    return json({ ok: false, message: `Image generation failed: ${(err as Error).message}` }, 502);
  }

  const path = `${id}.png`;
  const bytes = Buffer.from(image.base64, 'base64');
  const { error: uploadError } = await supabase.storage
    .from('blog-images')
    .upload(path, bytes, { contentType: image.mimeType, upsert: true });
  if (uploadError) return json({ ok: false, message: 'Image generated but could not be stored.' }, 500);

  const { data: publicUrl } = supabase.storage.from('blog-images').getPublicUrl(path);
  const { error: updateError } = await supabase
    .from('blog_posts')
    .update({ hero_image_url: publicUrl.publicUrl, updated_at: new Date().toISOString() })
    .eq('id', id);
  if (updateError) return json({ ok: false, message: 'Image stored but could not be linked to the post.' }, 500);

  return json({ ok: true, url: publicUrl.publicUrl }, 200);
};
