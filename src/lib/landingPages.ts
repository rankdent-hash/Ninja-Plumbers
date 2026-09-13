import type { SupabaseClient } from '@supabase/supabase-js';
import type { Landing, PremiumArt, PremiumIcon } from '../data/landing';
import { ICON } from '../data/premium-icons';

// Landing pages an AI/MCP client creates or edits, stored in Supabase — kept
// entirely separate from the 10 hand-written campaigns in src/data/landing.ts,
// which are untouched by any of this. A published row here is merged into
// /lp/[slug] and /lp (the internal directory) at build time, so it renders
// through the exact same Landing/LandingPremium template as every other
// landing page — same illustrations, same icons, same layout.
//
// rating and trustExtra are never accepted from a caller: every existing
// landing page carries the same confirmed, live figures, so new ones reuse
// them rather than risk an invented number ever reaching a page.
export const REAL_RATING = { score: '4.6', count: '535+' };
export const REAL_TRUST_EXTRA = [
  '4.6 stars from 535+ Google reviews',
  'Directly employed engineers, never subcontracted',
  'Part of Tamesis Development Ltd, established 2019',
];

export const PREMIUM_ART_VALUES: PremiumArt[] = [
  'tap', 'gauge', 'toilet', 'certificate', 'leak', 'pipes', 'burst', 'boiler', 'drain', 'bathroom',
];
export const PREMIUM_ICON_VALUES = Object.keys(ICON) as PremiumIcon[];

export function isPremiumArt(v: unknown): v is PremiumArt {
  return typeof v === 'string' && (PREMIUM_ART_VALUES as string[]).includes(v);
}
export function isPremiumIcon(v: unknown): v is PremiumIcon {
  return typeof v === 'string' && (PREMIUM_ICON_VALUES as string[]).includes(v);
}

export type LandingPageRow = {
  id: string;
  slug: string;
  status: 'draft' | 'published';
  campaign: string | null;
  head_term: string | null;
  meta_title: string;
  meta_description: string;
  h1: string;
  sub: string;
  urgent: boolean;
  form_label: string | null;
  related_service: string | null;
  covers: string[] | null;
  card_icon: PremiumIcon | null;
  eyebrow: string;
  proof: { label: string; note: string; icon: PremiumIcon }[];
  form: { title: string; sub: string; submit: string; note: string };
  fixes: { eyebrow: string; title: string; lead: string; items: { title: string; note: string; icon: PremiumIcon }[] };
  diagnosis: { eyebrow: string; title: string; intro: string; tag: string; art: PremiumArt };
  steps: { title: string; body: string }[];
  close: { title: string; body: string };
  bullets: string[];
  reassure: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  cross_link: { href: string; label: string; body: string } | null;
  rating: { score: string; count: string };
  trust_extra: string[];
  offer: { disclaimer: string } | null;
  generated_by: string | null;
  generation_prompt: string | null;
  created_at: string;
  updated_at: string;
  published_at: string | null;
};

/** Reshapes a DB row into exactly the `Landing` type the template already
 * renders, so LandingPremium.astro needs no changes at all to render one. */
export function rowToLanding(row: LandingPageRow): Landing {
  return {
    slug: row.slug,
    campaign: row.campaign ?? `AI-drafted — ${row.h1}`,
    headTerm: row.head_term ?? '—',
    cpc: '—',
    metaTitle: row.meta_title,
    metaDescription: row.meta_description,
    h1: row.h1,
    sub: row.sub,
    urgent: row.urgent,
    formLabel: row.form_label ?? undefined,
    relatedService: row.related_service ?? undefined,
    covers: row.covers ?? undefined,
    cardIcon: row.card_icon ?? undefined,
    bullets: row.bullets,
    reassure: row.reassure,
    faqs: row.faqs,
    offer: row.offer ?? undefined,
    trustExtra: row.trust_extra,
    crossLink: row.cross_link ?? undefined,
    premium: {
      eyebrow: row.eyebrow,
      rating: row.rating,
      proof: row.proof,
      form: row.form,
      fixes: row.fixes,
      diagnosis: row.diagnosis,
      steps: row.steps,
      close: row.close,
    },
  };
}

/** Published landing pages, reshaped and ready to merge into the static
 * `landings` array at build time. Empty array (never throws) with no
 * Supabase credentials or on any query error, matching the same
 * fails-empty-not-broken rule the blog sitemap fetch already follows. */
export async function publishedLandingPages(supabase: SupabaseClient | null): Promise<Landing[]> {
  if (!supabase) return [];
  const { data } = await supabase.from('landing_pages').select('*').eq('status', 'published');
  return (data ?? []).map((row) => rowToLanding(row as LandingPageRow));
}
