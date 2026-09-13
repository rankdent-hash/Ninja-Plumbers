import type { SupabaseClient } from '@supabase/supabase-js';
import type { Service } from '../data/services';

// Service pages an AI/MCP client creates or edits, stored in Supabase —
// kept entirely separate from the 19 real trade services in
// src/data/services.ts, which are untouched by any of this. A published row
// is merged into /services/[slug] and the /services hub at build time, so
// it renders through the exact same template as every other service page —
// including "we also handle" cross-links from every existing service, since
// that section is generated from the same array this merges into.
//
// Publishing one of these is a bigger claim than publishing a landing page:
// it's a real, Google-indexed statement that this is a service Tamesis now
// offers. It is never wired into the header mega menu or footer automatically
// — those are hand-curated lists (src/data/nav.ts), and adding a new service
// there stays a deliberate edit a person makes, not something a publish
// button does on its own.
export const SERVICE_ICON_VALUES = [
  'emergency', 'boiler', 'drain', 'leak', 'bathroom', 'general', 'commercial',
  'ac', 'heating', 'water', 'tap', 'pump', 'appliance',
] as const;
export type ServiceIconValue = (typeof SERVICE_ICON_VALUES)[number];

export function isServiceIcon(v: unknown): v is ServiceIconValue {
  return typeof v === 'string' && (SERVICE_ICON_VALUES as readonly string[]).includes(v);
}

export type ServicePageRow = {
  id: string;
  slug: string;
  status: 'draft' | 'published';
  title: string;
  h1: string;
  meta_title: string;
  meta_description: string;
  eyebrow: string;
  icon: ServiceIconValue;
  summary: string;
  intro: string;
  does: string[];
  guidance: { title: string; body: string }[];
  aside: { title: string; body: string };
  faqs: { q: string; a: string }[];
  spaces: { title: string; body: string }[] | null;
  internal_note: string | null;
  generated_by: string | null;
  generation_prompt: string | null;
  created_at: string;
  updated_at: string;
  published_at: string | null;
};

/** Reshapes a DB row into exactly the `Service` type the template already
 * renders, so /services/[slug].astro needs no changes to render one. */
export function rowToService(row: ServicePageRow): Service {
  return {
    slug: row.slug,
    title: row.title,
    h1: row.h1,
    metaTitle: row.meta_title,
    metaDescription: row.meta_description,
    eyebrow: row.eyebrow,
    icon: row.icon,
    target: row.internal_note ?? '—',
    summary: row.summary,
    intro: row.intro,
    does: row.does,
    guidance: row.guidance,
    aside: row.aside,
    faqs: row.faqs,
    spaces: row.spaces ?? undefined,
  };
}

/** Published service pages, reshaped and ready to merge into the static
 * `services` array at build time. Empty array (never throws) with no
 * Supabase credentials or on any query error. */
export async function publishedServicePages(supabase: SupabaseClient | null): Promise<Service[]> {
  if (!supabase) return [];
  const { data } = await supabase.from('service_pages').select('*').eq('status', 'published');
  return (data ?? []).map((row) => rowToService(row as ServicePageRow));
}
