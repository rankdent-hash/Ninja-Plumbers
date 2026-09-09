// Navigation. One source for the header, the footer and the site map, so
// they cannot disagree about how the services are organised.
//
// Each group lists service slugs from services.ts; the build fails if a slug
// does not exist, so a renamed service cannot leave a dead link in the
// navigation.
import { services } from './services';

export type ServiceGroup = {
  slug: string;
  label: string;
  navLabel?: string;        // shorter header label, where the full one crowds
  blurb: string;            // one line in the menu panel and the site map
  services: string[];       // services.ts slugs, in display order
  extra?: { label: string; href: string }[];  // non-service links in the group
};

export const serviceGroups: ServiceGroup[] = [
  {
    slug: 'plumbing',
    label: 'Plumbing',
    blurb: 'Leaks, bursts, taps, toilets and pipework, from an emergency callout to a planned repair.',
    services: ['emergency-plumbing', 'general-plumbing', 'leak-detection', 'commercial-plumbing', 'gas-safety-certificate'],
  },
  {
    slug: 'heating',
    label: 'Heating',
    blurb: 'Boilers, radiators, cylinders and hot water — installed, serviced and kept running by Gas Safe engineers.',
    services: ['boiler-repair', 'boiler-service', 'boiler-installation', 'boiler-replacement'],
    extra: [
      { label: 'Boiler brands we work on', href: '/boilers' },
      { label: 'Radiators & power flushing', href: '/appliances/radiator-installation-and-power-flushing' },
      { label: 'Underfloor heating', href: '/appliances/underfloor-heating-installation' },
      { label: 'Hot water cylinders', href: '/appliances/hot-water-cylinder-installation' },
    ],
  },
  {
    slug: 'drainage',
    label: 'Drainage',
    blurb: 'Blockages cleared with proper equipment, CCTV surveys and repairs to the run itself.',
    services: ['drain-unblocking', 'cctv-drain-survey', 'drain-repairs'],
  },
  {
    slug: 'bathrooms',
    label: 'Bathrooms',
    blurb: 'Full bathrooms, WCs and wet rooms fitted with the price agreed before anyone starts.',
    services: ['bathroom-installation', 'toilet-installation', 'wet-rooms-and-walk-in-showers'],
    extra: [
      { label: 'Shower pumps', href: '/appliances/shower-pumps' },
      { label: 'Saniflo & macerator pumps', href: '/appliances/saniflo-macerator-pumps' },
    ],
  },
  {
    slug: 'air-conditioning',
    label: 'Air Conditioning',
    navLabel: 'Air Con',
    blurb: 'Split and multi-split systems, fitted, maintained, repaired and replaced by F-Gas registered engineers.',
    services: ['air-conditioning-repair', 'air-conditioning-maintenance', 'air-conditioning-installation', 'air-conditioning-replacement'],
  },
];

// The header, in order. A group item opens a panel of its services; a link
// with children opens a small panel of related pages beside the link itself,
// so the word still navigates. A link with `mega` opens the full icon+blurb
// treatment instead, built directly from appliances.ts in Header.astro
// rather than from a list of slugs here.
export type NavItem =
  | {
      label: string;
      href: string;
      children?: { label: string; href: string }[];
      // Extra path prefixes that should light this item as the current
      // section, where the pages do not sit under href itself.
      match?: string[];
      mega?: 'appliances';
    }
  | { group: string };

export const mainNav: NavItem[] = [
  {
    label: 'Home',
    href: '/',
    children: [
      { label: 'About us', href: '/about' },
      { label: 'Reviews', href: '/reviews' },
    ],
  },
  { group: 'plumbing' },
  { group: 'heating' },
  { group: 'drainage' },
  { group: 'bathrooms' },
  { label: 'Appliances', href: '/appliances', mega: 'appliances' },
  { group: 'air-conditioning' },
  { label: 'Contact', href: '/contact' },
];

// Resolve slugs to service records once, in order.
export const groupedServices = serviceGroups.map((g) => ({
  ...g,
  items: g.services.map((slug) => {
    const s = services.find((x) => x.slug === slug);
    if (!s) throw new Error(`nav.ts: group "${g.slug}" lists unknown service "${slug}"`);
    return s;
  }),
}));

// Every service must appear in exactly one group, or the menu silently hides
// a page that exists.
{
  const listed = serviceGroups.flatMap((g) => g.services);
  const missing = services.map((s) => s.slug).filter((s) => !listed.includes(s));
  const dupes = listed.filter((s, i) => listed.indexOf(s) !== i);
  if (missing.length || dupes.length) {
    throw new Error(
      `nav.ts: services not in any group: [${missing.join(', ')}]; listed twice: [${dupes.join(', ')}]`
    );
  }
}

// And every group must be in the header, or a whole group of pages loses its
// place in the navigation.
{
  const slugs = serviceGroups.map((g) => g.slug);
  const inNav = mainNav.flatMap((i) => ('group' in i ? [i.group] : []));
  const unknown = inNav.filter((s) => !slugs.includes(s));
  const hidden = slugs.filter((s) => !inNav.includes(s));
  if (unknown.length || hidden.length) {
    throw new Error(
      `nav.ts: header names unknown groups [${unknown.join(', ')}]; groups missing from the header [${hidden.join(', ')}]`
    );
  }
}
