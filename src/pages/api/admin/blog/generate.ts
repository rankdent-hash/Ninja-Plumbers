import type { APIRoute } from 'astro';
import { getSupabaseAdmin } from '../../../../lib/supabaseAdmin';
import { getSetting } from '../../../../lib/adminSettings';
import { generateBlogDraft, type Provider } from '../../../../lib/aiProviders';
import { services } from '../../../../data/services';
import { appliances } from '../../../../data/appliances';
import { dampPages } from '../../../../data/damp';

export const prerender = false;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

const PROVIDER_SETTING: Record<Provider, 'openai_api_key' | 'anthropic_api_key' | 'gemini_api_key'> = {
  openai: 'openai_api_key',
  claude: 'anthropic_api_key',
  gemini: 'gemini_api_key',
};

const PROVIDER_LABEL: Record<Provider, string> = { openai: 'OpenAI (ChatGPT)', claude: 'Anthropic (Claude)', gemini: 'Google Gemini' };

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || 'post';
}

export const POST: APIRoute = async ({ request }) => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return json({ ok: false, message: 'Not connected to Supabase.' }, 503);

  let body: Record<string, any>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, message: 'Could not read that request.' }, 400);
  }

  const provider = body.provider as Provider;
  if (!['openai', 'claude', 'gemini'].includes(provider)) {
    return json({ ok: false, message: 'Choose a provider: ChatGPT, Claude or Gemini.' }, 400);
  }

  const topic = String(body.topic || '').trim().slice(0, 300);
  if (!topic) return json({ ok: false, message: 'A topic or target keyword is required.' }, 400);

  const tone = body.tone ? String(body.tone).trim().slice(0, 60) : undefined;

  const apiKey = await getSetting(supabase, PROVIDER_SETTING[provider]);
  if (!apiKey) {
    return json({ ok: false, message: `No API key set for ${PROVIDER_LABEL[provider]} — add one in Settings first.` }, 400);
  }

  let draft;
  try {
    draft = await generateBlogDraft(provider, apiKey, {
      topic,
      tone,
      validServices: services.map((s) => ({ slug: s.slug, title: s.title })),
      validAppliances: appliances.map((a) => ({ slug: a.slug, title: a.title })),
      validDamp: dampPages.map((d) => ({ slug: d.slug, title: d.title })),
    });
  } catch (err) {
    return json({ ok: false, message: `${PROVIDER_LABEL[provider]} request failed: ${(err as Error).message}` }, 502);
  }

  if (!draft.title || !draft.body) {
    return json({ ok: false, message: `${PROVIDER_LABEL[provider]} did not return a usable draft — try again.` }, 502);
  }

  // Guard against the model naming a slug outside the list it was given.
  const serviceSlugs = new Set(services.map((s) => s.slug));
  const applianceSlugs = new Set(appliances.map((a) => a.slug));
  const dampSlugs = new Set(dampPages.map((d) => d.slug));

  const baseSlug = slugify(draft.title);
  let slug = baseSlug;
  for (let i = 2; i < 50; i++) {
    const { data: existing } = await supabase.from('blog_posts').select('id').eq('slug', slug).maybeSingle();
    if (!existing) break;
    slug = `${baseSlug}-${i}`;
  }

  const { data, error } = await supabase
    .from('blog_posts')
    .insert({
      slug,
      title: draft.title,
      h1: draft.h1 || draft.title,
      meta_title: draft.metaTitle || draft.title,
      meta_description: draft.metaDescription || draft.excerpt,
      excerpt: draft.excerpt,
      body: draft.body,
      status: 'draft',
      related_services: draft.relatedServices.filter((s) => serviceSlugs.has(s)),
      related_appliances: draft.relatedAppliances.filter((s) => applianceSlugs.has(s)),
      related_damp: draft.relatedDamp.filter((s) => dampSlugs.has(s)),
      generated_by: provider,
      generation_prompt: topic,
    })
    .select('id')
    .single();

  if (error) return json({ ok: false, message: 'Draft was generated but could not be saved.' }, 500);
  return json({ ok: true, id: data.id }, 200);
};
