// Where the business actually works, as distinct from where the map happens to
// draw a shape. This is business fact, not geometry, which is why it lives here
// and not in the generated src/data/londonMap.ts — regenerating the map must
// never quietly change what the site claims about coverage.
//
// Greater London is covered in full (all 33 boroughs). Beyond it, only the
// districts named below.

/**
 * Local authority districts outside Greater London that are covered today.
 * Names must match OUTER_DISTRICTS in src/data/londonMap.ts exactly.
 *
 * Both are here because the business covers them, not because of where the M25
 * runs. Measured to the motorway centreline:
 *   - Guildford town centre is 7.53 miles out, so roughly 4.5 miles beyond the
 *     edge of the 3-mile band. Nowhere near it, on any published coordinate
 *     for the town centre (they range 7.1-7.7 miles).
 *   - St Albans city centre is 2.85 miles out, which is inside the band by
 *     about 250 metres. That verdict is not robust: St Peter's Church, an
 *     equally standard reference for the city centre, measures 3.08 miles and
 *     falls outside. Do not state flatly that St Albans is in the corridor.
 * Neither is part of the planned expansion — they are already served.
 */
export const COVERED_OUTSIDE_LONDON: readonly string[] = ['Guildford', 'St Albans'];

/** Planned expansion: how far either side of the M25 the corridor band is drawn. */
export const CORRIDOR_MILES = 3;

/**
 * Share of the outer districts' combined area that actually lies within the
 * corridor: 589 of 1484 square miles. The districts are drawn unfilled partly
 * because of this — shading them whole would paint the corridor about two and
 * a half times larger than it is.
 */
export const CORRIDOR_AREA_SHARE_PCT = 40;
