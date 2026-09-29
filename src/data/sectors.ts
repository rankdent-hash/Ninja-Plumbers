// Small-business sector pages under /commercial/[slug]. Each one tells a
// particular kind of business what we do for premises like theirs, and links
// through to the service pages that matter to it. Copy lives in
// sectors.json; this module types it and checks it at build time.
//
// Search volumes in `target` are UK monthly figures from Semrush (Sept 2026)
// and explain why each page exists. They are not published. Sector searches
// are small on their own; these pages mainly serve visitors and ads, and pass
// links to the service pages.
import data from './sectors.json';

export type Sector = {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  icon: string;
  target: string;
  summary: string;
  intro: string;
  needs: { title: string; body: string; icon?: string }[];  // icon: a ServiceIcon name for the card
  does: string[];
  guidance: { title: string; body: string }[];
  links: { href: string; label: string; why: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const sectors: Sector[] = data as Sector[];

// Reverse index: which sectors link to a given page, so service and
// appliance pages can link back ("we also do this for salons, cafés...").
export function sectorsLinkingTo(href: string): Sector[] {
  return sectors.filter((s) => s.links.some((l) => l.href === href));
}
