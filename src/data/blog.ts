// Blog posts, under /blog. Unlike every other data file in src/data, this one
// is not a hand-authored literal — posts are written and published from
// /admin/blog (by hand or with an AI provider) and live in Supabase. This
// module is the BUILD-TIME read of published posts, for the static pages that
// cross-link into the blog (service/appliance/damp pages, the site map, the
// search index) and so only reflects what was published as of the last
// deploy. The blog's own pages (/blog and /blog/[slug]) read Supabase directly
// at request time instead, so a newly published post is live immediately even
// though it takes a redeploy to show up in those cross-links.
//
// With no Supabase credentials (local dev today — see supabaseAdmin.ts) this
// resolves to an empty array, the same accepted limitation as the reviews
// carousel.
import { getSupabaseAdmin } from '../lib/supabaseAdmin';
import { services } from './services';
import { appliances } from './appliances';
import { dampPages } from './damp';

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  body: string; // HTML
  heroImageUrl: string | null;
  relatedServices: string[];
  relatedAppliances: string[];
  relatedDamp: string[];
  generatedBy: string;
  date: string; // ISO date, from published_at
};

async function loadPublishedPosts(): Promise<BlogPost[]> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from('blog_posts')
    .select(
      'id, slug, title, h1, meta_title, meta_description, excerpt, body, hero_image_url, related_services, related_appliances, related_damp, generated_by, published_at'
    )
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error || !data) return [];

  const serviceSlugs = new Set(services.map((s) => s.slug));
  const applianceSlugs = new Set(appliances.map((a) => a.slug));
  const dampSlugs = new Set(dampPages.map((d) => d.slug));

  return data.map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    h1: p.h1,
    metaTitle: p.meta_title,
    metaDescription: p.meta_description,
    excerpt: p.excerpt,
    body: p.body,
    heroImageUrl: p.hero_image_url,
    // Dropped silently rather than failing the build: this content is edited
    // at runtime by an admin (or an AI provider), not reviewed as code, so a
    // stray slug should not be able to take the whole site down.
    relatedServices: (p.related_services ?? []).filter((s: string) => serviceSlugs.has(s)),
    relatedAppliances: (p.related_appliances ?? []).filter((s: string) => applianceSlugs.has(s)),
    relatedDamp: (p.related_damp ?? []).filter((s: string) => dampSlugs.has(s)),
    generatedBy: p.generated_by,
    date: (p.published_at ?? '').slice(0, 10),
  }));
}

export const blogPosts: BlogPost[] = await loadPublishedPosts();
