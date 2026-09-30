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
  heroTitle?: string;   // short landing-page H1
  heroSub?: string;     // one-line subtitle under it
  h1: string;           // longer keyword heading, opens the page body as an H2
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

// How the sector pages are grouped wherever they are listed together. With
// close to forty of them, one flat list is a wall of names; a reader looks
// for their kind of business first. Every sector must sit in exactly one
// group, and the build fails if one is missed or doubled, so a new sector
// cannot silently drop off the Commercial Plumbing page.
export const SECTOR_GROUPS: { label: string; slugs: string[] }[] = [
  { label: 'Food and drink', slugs: ['cafes-and-restaurants', 'food-shops-and-takeaways', 'pubs-and-bars', 'dark-kitchens'] },
  { label: 'Shops and local services', slugs: ['shops-and-retail', 'launderettes-and-dry-cleaners', 'estate-agents', 'dog-groomers-and-pet-businesses', 'garden-centres-and-farm-shops'] },
  { label: 'Hair and beauty', slugs: ['salons-and-barbers', 'beauty-and-tattoo-studios', 'nail-bars'] },
  { label: 'Health and care', slugs: ['clinics-and-dental-practices', 'physio-and-osteopathy-clinics', 'pharmacies', 'veterinary-practices', 'care-homes-and-supported-living'] },
  { label: 'Fitness, dance and the arts', slugs: ['gyms-and-fitness-studios', 'sports-clubs-and-studios', 'yoga-and-pilates-studios', 'dance-schools-and-studios', 'art-and-pottery-studios'] },
  { label: 'Offices and workplaces', slugs: ['offices', 'co-working-spaces', 'solicitors-and-accountants', 'garages-and-workshops', 'warehouses-and-industrial-units'] },
  { label: 'Property and places to stay', slugs: ['landlords-and-letting-agents', 'hmos-and-shared-houses', 'blocks-of-flats-and-managing-agents', 'holiday-lets-and-serviced-apartments', 'airbnb-and-short-lets', 'guest-houses-and-small-hotels', 'hostels'] },
  { label: 'Education and community', slugs: ['nurseries-and-childcare', 'schools-and-colleges', 'places-of-worship-and-community-halls'] },
];

{
  const grouped = SECTOR_GROUPS.flatMap((g) => g.slugs);
  const known = new Set(sectors.map((s) => s.slug));
  const missing = sectors.filter((s) => !grouped.includes(s.slug)).map((s) => s.slug);
  const unknown = grouped.filter((slug) => !known.has(slug));
  const doubled = grouped.filter((slug, i) => grouped.indexOf(slug) !== i);
  if (missing.length || unknown.length || doubled.length) {
    throw new Error(`SECTOR_GROUPS out of step with sectors.json — missing: ${missing.join(', ') || 'none'}; unknown: ${unknown.join(', ') || 'none'}; doubled: ${doubled.join(', ') || 'none'}`);
  }
}

export const groupedSectors = SECTOR_GROUPS.map((g) => ({
  label: g.label,
  sectors: g.slugs.map((slug) => sectors.find((s) => s.slug === slug)!),
}));
