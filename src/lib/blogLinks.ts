// Shared rules for linking blog posts to the rest of the site, used by the
// post template (server-rendered) and the hub pages (build time).
//
// A post declares which service, appliance and damp pages it relates to in
// the admin. From those we work out which pages a post "covers" (as hrefs),
// which category hubs it belongs under, and how related two posts are.
import { hubs } from '../data/hubs';

export type PostLinks = {
  related_services?: string[] | null;
  related_appliances?: string[] | null;
  related_damp?: string[] | null;
};

export function postHrefs(p: PostLinks): string[] {
  return [
    ...(p.related_services ?? []).map((s) => `/services/${s}`),
    ...(p.related_appliances ?? []).map((s) => `/appliances/${s}`),
    ...(p.related_damp ?? []).map((s) => `/damp/${s}`),
  ];
}

// Every page a hub links down to, so a post about one of them can be shown
// on the hub and can link back up to it.
const HUB_PAGES: { href: string; label: string; covers: Set<string> }[] = [
  ...hubs.map((h) => ({
    href: `/${h.slug}`,
    label: h.slug === 'heating' ? 'heating services' : 'drainage services',
    covers: new Set([...h.children.map((c) => c.href), ...h.problems.map((p) => p.href)]),
  })),
];

export function hubCovers(slug: 'heating' | 'drainage'): string[] {
  return [...(HUB_PAGES.find((h) => h.href === `/${slug}`)?.covers ?? [])];
}

// The category pages a post sits under, most specific first.
export function postHubs(p: PostLinks): { href: string; label: string }[] {
  const hrefs = postHrefs(p);
  const out: { href: string; label: string }[] = [];
  if ((p.related_services ?? []).some((s) => s.startsWith('boiler-') || s === 'gas-safety-certificate')) {
    out.push({ href: '/boilers', label: 'boiler engineers' });
  }
  for (const h of HUB_PAGES) {
    if (hrefs.some((x) => h.covers.has(x))) out.push({ href: h.href, label: h.label });
  }
  if ((p.related_damp ?? []).length > 0) out.push({ href: '/damp', label: 'damp and condensation' });
  if (out.length === 0 && (p.related_appliances ?? []).length > 0) {
    out.push({ href: '/appliances', label: 'appliance and fixture plumbing' });
  }
  if (out.length === 0) out.push({ href: '/services', label: 'plumbing services' });
  return out;
}

// How many linked pages two posts share. Used to pick "related advice".
export function overlap(a: PostLinks, b: PostLinks): number {
  const set = new Set(postHrefs(a));
  return postHrefs(b).filter((h) => set.has(h)).length;
}

// Posts that relate to any of the given pages, best match first.
export function postsCovering<T extends PostLinks>(posts: T[], pages: string[], limit = 3): T[] {
  const want = new Set(pages);
  return posts
    .map((p, i) => ({ p, i, n: postHrefs(p).filter((h) => want.has(h)).length }))
    .filter((x) => x.n > 0)
    .sort((a, b) => b.n - a.n || a.i - b.i)
    .slice(0, limit)
    .map((x) => x.p);
}
