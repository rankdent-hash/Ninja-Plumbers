// Schematic subdivisions of each area on the /admin/areas map.
//
// WHAT THESE ARE NOT: real postcode district boundaries. Those are not in this
// repo and the only source reachable from here carries a licence the rest of
// the map does not use. Drawing them would be pretending to a precision this
// map does not have.
//
// WHAT THEY ARE: each area is divided up between the district centres it
// contains, giving every point to whichever centre is nearest, and the result
// is trimmed to the area's own outline. That is a Voronoi partition, and it is
// the honest schematic answer to "roughly where in this borough is SW18" —
// right in the middle of each district, approximate at the seams, and never
// claiming to be a surveyed line. The page says so where it is drawn.
//
// Built here rather than stored, so it cannot drift from the geometry it
// divides. Node caches modules, so it runs once per server instance.
import { BOROUGHS, OUTER_DISTRICTS, POINTS } from '../data/londonMap';
import { DISTRICTS_BY_SHAPE } from './districtParents';

type Pt = [number, number];
type Ring = Pt[];

function ringsOf(d: string): Ring[] {
  return d
    .split('M')
    .filter(Boolean)
    .map((seg) =>
      seg
        .replace(/Z$/, '')
        .split('L')
        .map((p) => p.split(',').map(Number) as Pt)
        .filter((p) => p.length === 2 && !Number.isNaN(p[0]) && !Number.isNaN(p[1]))
    )
    .filter((r) => r.length >= 3);
}

const area = (r: Ring) => {
  let a = 0;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) a += (r[j][0] + r[i][0]) * (r[j][1] - r[i][1]);
  return Math.abs(a / 2);
};

/**
 * Sutherland–Hodgman clip of a ring against one half-plane: keep the side of
 * the perpendicular bisector of (p, q) that is nearer to p.
 *
 * The test is dot(X - midpoint, q - p) <= 0, which is |X-p| <= |X-q| with the
 * squares cancelled — no square roots in the inner loop.
 */
function clipToBisector(ring: Ring, p: Pt, q: Pt): Ring {
  const dx = q[0] - p[0];
  const dy = q[1] - p[1];
  const mx = (p[0] + q[0]) / 2;
  const my = (p[1] + q[1]) / 2;
  const side = (X: Pt) => (X[0] - mx) * dx + (X[1] - my) * dy;

  const out: Ring = [];
  for (let i = 0; i < ring.length; i++) {
    const A = ring[i];
    const B = ring[(i + 1) % ring.length];
    const sa = side(A);
    const sb = side(B);
    const aIn = sa <= 0;
    const bIn = sb <= 0;
    if (aIn) out.push(A);
    if (aIn !== bIn) {
      const t = sa / (sa - sb);
      out.push([A[0] + t * (B[0] - A[0]), A[1] + t * (B[1] - A[1])]);
    }
  }
  return out;
}

const MIN_CELL_AREA = 4; // drop slivers that would render as a hairline

export type DistrictCell = { code: string; parent: string; d: string };

function cellsForShape(name: string, shapeD: string): DistrictCell[] {
  const codes = (DISTRICTS_BY_SHAPE[name] ?? []).filter((c) => POINTS[c]);
  if (!codes.length) return [];
  // Only the substantial rings: an offshore sliver would contribute nothing but
  // a speck under every cell.
  const rings = ringsOf(shapeD).filter((r) => area(r) > 40);
  if (!rings.length) return [];

  return codes
    .map((code) => {
      const site = POINTS[code] as Pt;
      const parts: string[] = [];
      for (const ring of rings) {
        let poly: Ring = ring;
        for (const other of codes) {
          if (other === code) continue;
          poly = clipToBisector(poly, site, POINTS[other] as Pt);
          if (poly.length < 3) break;
        }
        if (poly.length >= 3 && area(poly) >= MIN_CELL_AREA) {
          parts.push('M' + poly.map((pt) => `${pt[0].toFixed(1)},${pt[1].toFixed(1)}`).join('L') + 'Z');
        }
      }
      return { code, parent: name, d: parts.join('') };
    })
    .filter((c) => c.d);
}

export const DISTRICT_CELLS: DistrictCell[] = [
  ...BOROUGHS.flatMap((b) => cellsForShape(b.name, b.d)),
  ...OUTER_DISTRICTS.flatMap((o) => cellsForShape(o.name, o.d)),
];
