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
  'churches-and-community-halls': '<path d="M12 2v4M10 4h4"/><path d="M6 21V11l6-5 6 5v10"/><path d="M3 21h18"/><path d="M10 21v-3.5a2 2 0 0 1 4 0V21"/>',
  'blocks-of-flats-and-managing-agents': '<rect x="5" y="2" width="14" height="20" rx="1"/><path d="M9 6h1M14 6h1M9 10h1M14 10h1M9 14h1M14 14h1"/><path d="M10 22v-4h4v4"/>',
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
