// Visual helpers for the sector pages: a line pictogram per business type,
// the service "badges" a sector's links map to, and an icon for each card.
// Pictograms follow the same 24x24, 2px-stroke style as ServiceIcon.
import { serviceGroups } from './nav';
import { services } from './services';
import { appliances } from './appliances';
import type { Sector } from './sectors';

export const SECTOR_PICTOGRAMS: Record<string, string> = {
  'offices': '<rect x="3" y="4" width="18" height="12" rx="1.5"/><line x1="12" y1="16" x2="12" y2="20"/><line x1="8" y1="20" x2="16" y2="20"/>',
  'shops-and-retail': '<path d="M3 10l1.5-6h15L21 10"/><path d="M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M5 13v8h14v-8"/><path d="M10 21v-5h4v5"/>',
  'cafes-and-restaurants': '<path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"/><line x1="7" y1="2" x2="7" y2="5"/><line x1="11" y1="2" x2="11" y2="5"/><line x1="15" y1="2" x2="15" y2="5"/>',
  'salons-and-barbers': '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.1" y2="15.9"/><line x1="14.5" y1="14.5" x2="20" y2="20"/><line x1="8.1" y1="8.1" x2="12" y2="12"/>',
  'beauty-and-tattoo-studios': '<rect x="7" y="10" width="10" height="11" rx="2"/><path d="M10 10V7h4v3"/><rect x="9" y="2.5" width="6" height="4.5" rx="1"/><line x1="10" y1="15" x2="14" y2="15"/>',
  'clinics-and-dental-practices': '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 7.5v9M7.5 12h9"/>',
  'landlords-and-letting-agents': '<path d="M3 11l9-7 9 7"/><path d="M5 9.5V20h14V9.5"/><circle cx="12" cy="13" r="2"/><path d="M12 15v3.5"/>',
  'holiday-lets-and-serviced-apartments': '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V4h6v3"/><line x1="8" y1="11" x2="8" y2="16"/><line x1="16" y1="11" x2="16" y2="16"/>',
  'guest-houses-and-small-hotels': '<path d="M3 19V6"/><path d="M3 16h18v3"/><path d="M21 16v-3a3 3 0 0 0-3-3h-7v6"/><circle cx="7" cy="12.5" r="2"/>',
  'pubs-and-bars': '<path d="M6 3h12l-1.6 17.1a1 1 0 0 1-1 .9H8.6a1 1 0 0 1-1-.9z"/><path d="M6.4 8h11.2"/>',
  'gyms-and-fitness-studios': '<rect x="2" y="9" width="3" height="6" rx="1"/><rect x="19" y="9" width="3" height="6" rx="1"/><rect x="5" y="6.5" width="3.5" height="11" rx="1"/><rect x="15.5" y="6.5" width="3.5" height="11" rx="1"/><line x1="8.5" y1="12" x2="15.5" y2="12"/>',
  'nurseries-and-childcare': '<rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/><rect x="8" y="4" width="8" height="8" rx="1.5"/><path d="M11 9.5l1-3 1 3M11.4 8.3h1.2"/>',
  'dog-groomers-and-pet-businesses': '<circle cx="6.5" cy="10" r="2"/><circle cx="10" cy="5.5" r="2"/><circle cx="14" cy="5.5" r="2"/><circle cx="17.5" cy="10" r="2"/><path d="M12 11.5c-3 0-5.2 3.1-5.2 5.6 0 1.6 1.4 2.6 3 2.3l2.2-.5 2.2.5c1.6.3 3-.7 3-2.3 0-2.5-2.2-5.6-5.2-5.6z"/>',
  'food-shops-and-takeaways': '<path d="M5 8h14l-1.2 13H6.2z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/><path d="M9.5 13h5"/>',
  'garages-and-workshops': '<path d="M3 16v-3l2-5h14l2 5v3z"/><path d="M3 13h18"/><circle cx="7.5" cy="16.5" r="2"/><circle cx="16.5" cy="16.5" r="2"/>',
  'sports-clubs-and-studios': '<path d="M8 21h8M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v1.5a3.5 3.5 0 0 1-3.5 3.5M7 5H4v1.5A3.5 3.5 0 0 0 7.5 10"/>',
  'places-of-worship-and-community-halls': '<path d="M2 10l10-6 10 6z"/><path d="M5 10v9M9.5 10v9M14.5 10v9M19 10v9"/><path d="M3 21h18"/>',
  'schools-and-colleges': '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/><path d="M22 9v6"/>',
  'blocks-of-flats-and-managing-agents': '<rect x="5" y="2" width="14" height="20" rx="1"/><path d="M9 6h1M14 6h1M9 10h1M14 10h1M9 14h1M14 14h1"/><path d="M10 22v-4h4v4"/>',
  'hmos-and-shared-houses': '<path d="M3 11l9-7 9 7"/><path d="M5 9.5V20h14V9.5"/><path d="M7.5 20v-4.5h3V20M13.5 20v-4.5h3V20"/><path d="M7.5 11.5h3M13.5 11.5h3"/>',
  'care-homes-and-supported-living': '<path d="M3 11l9-7 9 7"/><path d="M5 9.5V20h14V9.5"/><path d="M12 17.8l-2.9-2.8a1.8 1.8 0 0 1 2.9-2.2 1.8 1.8 0 0 1 2.9 2.2z"/>',
  'launderettes-and-dry-cleaners': '<rect x="4" y="2.5" width="16" height="19" rx="2"/><line x1="4" y1="7" x2="20" y2="7"/><circle cx="12" cy="14" r="4.5"/><path d="M9.6 14.6c.8-.7 1.6-.7 2.4 0s1.6.7 2.4 0"/><line x1="7" y1="4.8" x2="8.5" y2="4.8"/>',
  'art-and-pottery-studios': '<path d="M9 3h6"/><path d="M10 3v3c-3 1.5-5 4.5-5 8 0 4 3 7 7 7s7-3 7-7c0-3.5-2-6.5-5-8V3"/><path d="M6.2 12.5h11.6"/>',
  'garden-centres-and-farm-shops': '<path d="M12 21v-9"/><path d="M12 12c0-4-3-6.5-7-6.5 0 4 3 6.5 7 6.5z"/><path d="M12 14.5c0-3.5 2.6-5.5 6.5-5.5 0 3.5-2.6 5.5-6.5 5.5z"/><path d="M7 21h10"/>',
  'veterinary-practices': '<path d="M12 21s-7-3.5-7-9V5l7-2.5L19 5v7c0 5.5-7 9-7 9z"/><circle cx="9.3" cy="9" r="1"/><circle cx="12" cy="7.6" r="1"/><circle cx="14.7" cy="9" r="1"/><path d="M12 11.5c-1.6 0-2.7 1.4-2.7 2.6 0 .9.8 1.4 1.6 1.2l1.1-.3 1.1.3c.8.2 1.6-.3 1.6-1.2 0-1.2-1.1-2.6-2.7-2.6z"/>',
  'pharmacies': '<rect x="2.5" y="8.5" width="19" height="7" rx="3.5" transform="rotate(-45 12 12)"/><line x1="9.5" y1="9.5" x2="14.5" y2="14.5"/>',
  'physio-and-osteopathy-clinics': '<rect x="9" y="2.5" width="6" height="3.5" rx="1"/><rect x="9" y="8" width="6" height="3.5" rx="1"/><rect x="9" y="13.5" width="6" height="3.5" rx="1"/><path d="M12 19v2.5"/><path d="M6.5 4.2H9M15 4.2h2.5M6.5 9.8H9M15 9.8h2.5M6.5 15.3H9M15 15.3h2.5"/>',
  'co-working-spaces': '<rect x="3" y="4" width="8" height="6" rx="1"/><rect x="13" y="4" width="8" height="6" rx="1"/><path d="M7 10v3M17 10v3"/><path d="M2 13h20"/><path d="M4 13v7M20 13v7"/>',
  'estate-agents': '<path d="M4 21V3"/><path d="M4 5h15"/><path d="M9 5v3M17 5v3"/><rect x="7.5" y="8" width="11" height="8" rx="1"/><path d="M10.5 12h5"/>',
  'solicitors-and-accountants': '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 12.5h18"/><path d="M10.5 12.5v2h3v-2"/>',
  'airbnb-and-short-lets': '<circle cx="7.5" cy="15.5" r="4"/><path d="M10.4 12.6L20 3"/><path d="M15.5 7.5l2.5 2.5M18 5l2.5 2.5"/>',
  'hostels': '<path d="M4 3v18M20 3v18"/><path d="M4 10h16M4 18h16"/><rect x="6" y="7" width="5" height="3" rx="1"/><rect x="6" y="15" width="5" height="3" rx="1"/>',
  'dark-kitchens': '<circle cx="10" cy="14.5" r="6"/><path d="M16 14.5h6"/><path d="M8 6c0-1 1.2-1.2 1.2-2.4M12 6c0-1 1.2-1.2 1.2-2.4"/>',
  'nail-bars': '<rect x="5" y="11" width="11" height="10" rx="2"/><path d="M8.5 11V8h4v3"/><path d="M9.5 8V3h2v5"/><path d="M20 6.5c0 1-.7 1.8-1.5 1.8S17 7.5 17 6.5 18.5 3.5 18.5 3.5 20 5.5 20 6.5z"/>',
  'yoga-and-pilates-studios': '<circle cx="12" cy="4.5" r="2"/><path d="M12 7.5v6"/><path d="M5 10.5l7 2 7-2"/><path d="M4 19.5c3-3 5-3.5 8-3.5s5 .5 8 3.5"/>',
  'dance-schools-and-studios': '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
  'warehouses-and-industrial-units': '<path d="M2 9.5L12 4l10 5.5V21H2z"/><rect x="7" y="12" width="10" height="9"/><path d="M7 15h10M7 18h10"/>',
};

export type Badge = { label: string; icon: string };

const GROUP_BADGE: Record<string, Badge> = {
  plumbing: { label: 'Plumbing', icon: 'general' },
  heating: { label: 'Heating', icon: 'boiler' },
  drainage: { label: 'Drainage', icon: 'drain' },
  bathrooms: { label: 'Washrooms', icon: 'bathroom' },
  'air-conditioning': { label: 'Air con', icon: 'ac' },
  electrical: { label: 'Electrics', icon: 'electrical' },
};
const APPLIANCE_BADGE: Record<string, Badge> = {
  heating: { label: 'Hot water', icon: 'water' },
  kitchen: { label: 'Kitchen', icon: 'appliance' },
  bathroom: { label: 'Pumps', icon: 'pump' },
  water: { label: 'Water supply', icon: 'tap' },
};
const HUB_BADGE: Record<string, Badge> = {
  '/heating': GROUP_BADGE.heating,
  '/boilers': GROUP_BADGE.heating,
  '/drainage': GROUP_BADGE.drainage,
  '/electrical': GROUP_BADGE.electrical,
};

function badgeFor(href: string): Badge | null {
  if (HUB_BADGE[href]) return HUB_BADGE[href];
  if (href.startsWith('/services/')) {
    const slug = href.slice('/services/'.length);
    const g = serviceGroups.find((x) => x.services.includes(slug));
    return g ? GROUP_BADGE[g.slug] ?? null : null;
  }
  if (href.startsWith('/appliances/')) {
    const a = appliances.find((x) => `/appliances/${x.slug}` === href);
    return a ? APPLIANCE_BADGE[a.group] ?? null : null;
  }
  if (href.startsWith('/damp/')) return { label: 'Ventilation', icon: 'ac' };
  return null;
}

// Up to six distinct service badges for a sector, in link order, always
// starting with plumbing.
export function sectorBadges(sector: Sector): Badge[] {
  const out: Badge[] = [GROUP_BADGE.plumbing];
  for (const l of sector.links) {
    const b = badgeFor(l.href);
    if (b && !out.some((x) => x.label === b.label)) out.push(b);
  }
  // A sector whose links are mostly plumbing still gets a rounded picture.
  for (const extra of [GROUP_BADGE.heating, GROUP_BADGE.drainage, GROUP_BADGE.electrical]) {
    if (out.length >= 4) break;
    if (!out.some((x) => x.label === extra.label)) out.push(extra);
  }
  return out.slice(0, 6);
}

// Icon for a linked page card: the page's own icon where it has one.
export function iconForHref(href: string): string {
  if (href.startsWith('/services/')) return services.find((s) => `/services/${s.slug}` === href)?.icon ?? 'general';
  if (href.startsWith('/appliances/')) return appliances.find((a) => `/appliances/${a.slug}` === href)?.icon ?? 'appliance';
  if (href.startsWith('/blog/')) return 'certificate';
  return badgeFor(href)?.icon ?? 'general';
}

// Icon for a "what premises like yours need" card, from its wording.
const NEED_RULES: [RegExp, string][] = [
  [/cellar|flood|sump|dry\b/i, 'pump'],
  [/drain|waste|grease|trap|stack|blockage|block/i, 'drain'],
  [/electric|circuit|fuse|socket|wiring|eicr/i, 'electrical'],
  [/hot water|cylinder|water heater|scald|tmv|temperature/i, 'water'],
  [/heat|boiler|radiator|warm|frost|cold/i, 'boiler'],
  [/toilet|washroom|wc|basin|shower|backwash|changing/i, 'bathroom'],
  [/leak|burst|flood/i, 'leak'],
  [/air con|cooling|ventilat|fan|condensation/i, 'ac'],
  [/gas safety|certificate|record|compliance|licen/i, 'certificate'],
  [/tap|mains|pressure|supply/i, 'tap'],
];
export function iconForNeed(title: string, body: string): string {
  for (const [re, icon] of NEED_RULES) if (re.test(title)) return icon;
  for (const [re, icon] of NEED_RULES) if (re.test(body)) return icon;
  return 'general';
}
