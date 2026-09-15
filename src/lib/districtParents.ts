// Which shape on the map each postcode district sits inside.
//
// Worked out here rather than stored in src/data/londonMap.ts, because it is
// derived from that file and would otherwise be a second copy that could fall
// out of step with the geometry it describes. Node caches modules, so this
// runs once per server instance, not once per request.
//
// A caveat that matters when reading the result: a postcode district is not a
// subdivision of a borough and the two boundaries genuinely disagree. SW11
// straddles Wandsworth and Lambeth; E1 straddles Tower Hamlets and the City.
// What is computed here is which shape the district's CENTRE falls in, so it
// answers "which borough is this district mostly in", not "which borough owns
// it". For choosing where to advertise that is the useful question; for
// anything that has to be exact it is not good enough.
import { BOROUGHS, OUTER_DISTRICTS, POINTS } from '../data/londonMap';

type Ring = [number, number][];

/** Split an SVG path of straight segments back into its rings. */
function ringsOf(d: string): Ring[] {
  return d
    .split('M')
    .filter(Boolean)
    .map((seg) =>
      seg
        .replace(/Z$/, '')
        .split('L')
        .map((p) => p.split(',').map(Number) as [number, number])
        .filter((p) => p.length === 2 && !Number.isNaN(p[0]) && !Number.isNaN(p[1]))
    )
    .filter((r) => r.length >= 3);
}

/** Even-odd ray cast, so a shape with holes or several islands still works. */
function inside(pt: [number, number], rings: Ring[]): boolean {
  let hit = false;
  for (const r of rings) {
    for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
      const [xi, yi] = r[i];
      const [xj, yj] = r[j];
      if (yi > pt[1] !== yj > pt[1] && pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi) hit = !hit;
    }
  }
  return hit;
}

// Boroughs first: where a district's centre falls inside both a borough and an
// outer district, the borough wins, because Greater London is the part of this
// map the business actually works in.
const SHAPES = [
  ...BOROUGHS.map((b) => ({ name: b.name, rings: ringsOf(b.d) })),
  ...OUTER_DISTRICTS.map((o) => ({ name: o.name, rings: ringsOf(o.d) })),
];

/** Postcode district code -> the name of the shape its centre sits in. */
export const DISTRICT_PARENT: Record<string, string> = {};
for (const [code, xy] of Object.entries(POINTS)) {
  const shape = SHAPES.find((s) => inside(xy, s.rings));
  if (shape) DISTRICT_PARENT[code] = shape.name;
}

/** Shape name -> the postcode districts whose centre sits in it, sorted. */
export const DISTRICTS_BY_SHAPE: Record<string, string[]> = {};
for (const [code, name] of Object.entries(DISTRICT_PARENT)) {
  (DISTRICTS_BY_SHAPE[name] ??= []).push(code);
}
for (const list of Object.values(DISTRICTS_BY_SHAPE)) list.sort();
