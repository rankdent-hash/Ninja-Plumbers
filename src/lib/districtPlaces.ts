// One place to ask "what is this postcode district called".
//
// Three sources, in order of authority:
//   1. src/data/postcodes.ts  — the client's workbook: a primary name plus the
//      neighbourhoods the district covers. Used wherever it has the district.
//   2. src/data/areas.ts      — the neighbourhood pages, which list the
//      districts each area covers. Fills in where the workbook stops.
//   3. src/data/districtNames.ts — ordinary public place names for everything
//      else, which is most of outer London and the central sub-districts.
//
// Before this existed the map asked only the first of those, so 200 of the 329
// districts it plots had no name at all and a borough either looked labelled or
// looked bare depending on which half of London it was in.
//
// A district usually covers more than one named place and the list says so
// rather than picking one and hiding the rest.
import { postcodes } from '../data/postcodes';
import { areas } from '../data/areas';
import { DISTRICT_NAMES } from '../data/districtNames';
import { POINTS } from '../data/londonMap';

function dedupe(list: string[]): string[] {
  const seen = new Set<string>();
  return list.filter((s) => {
    const k = s.trim().toLowerCase();
    if (!s.trim() || seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

const fromWorkbook: Record<string, string[]> = {};
for (const p of postcodes) {
  const names = dedupe([p.primary, ...(p.neighbourhoods ?? [])]);
  if (names.length) fromWorkbook[p.district.toUpperCase()] = names;
}

const fromAreas: Record<string, string[]> = {};
for (const a of areas) {
  for (const code of a.postcodes ?? []) {
    (fromAreas[code.toUpperCase()] ??= []).push(a.name);
  }
}

/** District code -> the places it covers, most recognisable first. */
export const DISTRICT_PLACES: Record<string, string[]> = {};
for (const code of Object.keys(POINTS)) {
  const merged = dedupe([
    ...(fromWorkbook[code] ?? []),
    ...(fromAreas[code] ?? []),
    ...(DISTRICT_NAMES[code] ?? []),
  ]);
  if (merged.length) DISTRICT_PLACES[code] = merged;
}

/** The single best name for a district, for a label with room for one line. */
export const districtPrimary = (code: string): string => DISTRICT_PLACES[code]?.[0] ?? '';

/** All of them, for a tooltip. */
export const districtPlaceList = (code: string): string => (DISTRICT_PLACES[code] ?? []).slice(0, 4).join(', ');

// --- guards, so this cannot rot quietly ---
// districtNames.ts exists to fill gaps. If a district it names is also in the
// workbook, the workbook has grown and that entry should be deleted rather than
// left to shadow it.
const redundant = Object.keys(DISTRICT_NAMES).filter((c) => fromWorkbook[c]);
if (redundant.length) {
  throw new Error(
    `districtNames.ts duplicates districts that src/data/postcodes.ts now covers: ${redundant.join(', ')}. ` +
      `Delete them there — the workbook is the authority.`
  );
}
const strays = Object.keys(DISTRICT_NAMES).filter((c) => !POINTS[c]);
if (strays.length) {
  throw new Error(`districtNames.ts names districts the map does not plot: ${strays.join(', ')}`);
}
