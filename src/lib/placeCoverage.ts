// Which named places inside our service area have a page, and which do not.
//
// WHY THIS EXISTS
// The map at /admin/areas plots 329 postcode districts, and a district is not
// a place: N22 is Wood Green, Turnpike Lane, Bowes Park and part of Tottenham.
// Opening N22 on the map shows those four names, and the obvious next question
// is "which of them do we have a page for?" — because that is the question that
// turns the map into a content plan.
//
// The answer, across the whole map, is 51 of 627.
//
// WHAT THIS IS NOT
// It is not a list of 576 pages to build. The repo already records, twice, why
// that would be a mistake:
//   - src/data/combos.ts sets a 140 monthly-searches bar and builds 85 of a
//     possible 84*n matrix, because "templated near-duplicates with no audience
//     is the doorway pattern Google demotes".
//   - src/data/postcodes.ts measures its own district pages at 40.9% unique
//     against their closest sibling and explains the arithmetic: ~25 words of
//     genuinely per-page data cannot make a half-unique page.
// A place name is worth a page when there is measured demand for it and
// something true and specific to say. This module supplies the inventory and
// the evidence; it deliberately does not supply a verdict, and it carries no
// search volumes because none have been measured for these names.
//
// The one demand signal that IS real here is our own enquiries, and it is
// district-level, not place-level — a customer typing "N22 8HQ" tells us the
// district, never which of the four names they would use for where they live.
// The page that renders this must say so; see /admin/places.
import { areas } from '../data/areas';
import { postcodes } from '../data/postcodes';
import { combos } from '../data/combos';
import { POINTS } from '../data/londonMap';
import { DISTRICT_PLACES } from './districtPlaces';
import { DISTRICT_PARENT } from './districtParents';

// The URL a page for this place would get. Not slugify() from slugify.ts:
// that turns every non-alphanumeric run into a hyphen, so "St John's Wood"
// becomes "st-john-s-wood". Apostrophes are dropped rather than hyphenated,
// which is what the existing /areas slugs do ("earl's court" is not one of
// them, but "st-johns-wood" is the form the rest of the web uses).
const placeSlug = (s: string) =>
  s
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export type PlaceCoverage = {
  name: string;
  slug: string;
  /** Postcode districts this name appears in, in map order. */
  districts: string[];
  /** Boroughs (or outer authorities) those districts sit in. */
  boroughs: string[];
  /** North London, South East London, ... where the workbook says. */
  regions: string[];
  /** True where this is a district's headline name rather than one of its others. */
  isPrimary: boolean;
  /** /areas/[slug] page for this exact name, where one exists. */
  areaSlug: string | null;
  /** Monthly searches for "plumber [name]", from areas.ts. Only ever measured names. */
  volume: number | null;
  /** How many service x location pages the area page already carries. */
  comboCount: number;
  /** /postcodes/[slug] pages that mention this name. Thin by design, but they exist. */
  districtPageSlugs: string[];
};

const norm = (s: string) => s.trim().toLowerCase();

const areaByName = new Map(areas.map((a) => [norm(a.name), a]));
const comboCountByArea = new Map<string, number>();
for (const c of combos) comboCountByArea.set(c.area, (comboCountByArea.get(c.area) ?? 0) + 1);

const regionByDistrict = new Map(postcodes.map((p) => [p.district.toUpperCase(), p.region]));
const districtPageByCode = new Map(postcodes.map((p) => [p.district.toUpperCase(), p.slug]));

// A district's first name is its primary; POINTS order is the map's order and
// keeps the output stable between builds.
const primaryNames = new Set<string>();
for (const code of Object.keys(DISTRICT_PLACES)) {
  const first = DISTRICT_PLACES[code][0];
  if (first) primaryNames.add(norm(first));
}

const built = new Map<string, PlaceCoverage>();
for (const code of Object.keys(POINTS)) {
  const names = DISTRICT_PLACES[code];
  if (!names?.length) continue;
  for (const name of names) {
    const key = norm(name);
    let entry = built.get(key);
    if (!entry) {
      const area = areaByName.get(key) ?? null;
      entry = {
        name,
        slug: placeSlug(name),
        districts: [],
        boroughs: [],
        regions: [],
        isPrimary: primaryNames.has(key),
        areaSlug: area?.slug ?? null,
        volume: area?.volume ?? null,
        comboCount: area ? (comboCountByArea.get(area.slug) ?? 0) : 0,
        districtPageSlugs: [],
      };
      built.set(key, entry);
    }
    entry.districts.push(code);
    const borough = DISTRICT_PARENT[code];
    if (borough && !entry.boroughs.includes(borough)) entry.boroughs.push(borough);
    const region = regionByDistrict.get(code);
    if (region && !entry.regions.includes(region)) entry.regions.push(region);
    const pageSlug = districtPageByCode.get(code);
    if (pageSlug && !entry.districtPageSlugs.includes(pageSlug)) entry.districtPageSlugs.push(pageSlug);
  }
}

/** Every named place on the map, one row each, alphabetical. */
export const PLACE_COVERAGE: PlaceCoverage[] = [...built.values()].sort((a, b) =>
  a.name.localeCompare(b.name, 'en-GB')
);

/** The places inside one district, in the order the map lists them. */
export function placesInDistrict(code: string): PlaceCoverage[] {
  const names = DISTRICT_PLACES[code.toUpperCase()] ?? [];
  return names.map((n) => built.get(norm(n))).filter((p): p is PlaceCoverage => Boolean(p));
}

/** How many of a district's names have an area page of their own. */
export function districtPageGap(code: string): { total: number; withPage: number } {
  const list = placesInDistrict(code);
  return { total: list.length, withPage: list.filter((p) => p.areaSlug).length };
}

export const PLACE_TOTALS = {
  places: PLACE_COVERAGE.length,
  withAreaPage: PLACE_COVERAGE.filter((p) => p.areaSlug).length,
  withoutAreaPage: PLACE_COVERAGE.filter((p) => !p.areaSlug).length,
  districts: Object.keys(DISTRICT_PLACES).length,
};
