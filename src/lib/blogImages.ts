import type { SupabaseClient } from '@supabase/supabase-js';
import { generateHeroImage } from './aiProviders';

const BUCKET = 'blog-images';

// The slug rather than the row id, so the stored file (and its public URL)
// carries the post's actual title/keywords instead of an opaque id — useful
// for image search, and readable if anyone inspects the URL directly.
export function blogImagePath(slug: string): string {
  return `${slug}.png`;
}

export function defaultHeroImagePrompt(title: string, excerpt: string): string {
  return `A clean, realistic editorial photo illustrating a UK home plumbing/heating blog post titled "${title}". ${excerpt} No text or logos in the image.`;
}

export async function generateAndStoreHeroImage(
  supabase: SupabaseClient,
  apiKey: string,
  post: { id: string; slug: string; title: string; excerpt: string },
  promptOverride?: string
): Promise<{ ok: true; url: string } | { ok: false; message: string }> {
  const prompt = promptOverride?.trim() || defaultHeroImagePrompt(post.title, post.excerpt);

  let image;
  try {
    image = await generateHeroImage(apiKey, prompt);
  } catch (err) {
    return { ok: false, message: `Image generation failed: ${(err as Error).message}` };
  }

  const path = blogImagePath(post.slug);
  const bytes = Buffer.from(image.base64, 'base64');
  const { error: uploadError } = await supabase.storage
    .from(BUCKET)
    .upload(path, bytes, { contentType: image.mimeType, upsert: true });
  if (uploadError) return { ok: false, message: 'Image generated but could not be stored.' };

  const { data: publicUrl } = supabase.storage.from(BUCKET).getPublicUrl(path);
  const { error: updateError } = await supabase
    .from('blog_posts')
    .update({ hero_image_url: publicUrl.publicUrl, updated_at: new Date().toISOString() })
    .eq('id', post.id);
  if (updateError) return { ok: false, message: 'Image stored but could not be linked to the post.' };

  return { ok: true, url: publicUrl.publicUrl };
}

// Removes both the current (slug-based) filename and the old id-based one
// this bucket used before slugs became the naming convention, so deleting a
// pre-existing post still cleans up its image rather than leaving an orphan.
export async function removeHeroImage(supabase: SupabaseClient, post: { id: string; slug: string }): Promise<void> {
  await supabase.storage.from(BUCKET).remove([`${post.id}.png`, blogImagePath(post.slug)]);
}
