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
 * Guildford: confirmed by the owner for Ninja Plumbers (Sept 2026). It is well
 * outside the M25 corridor (town centre about 7.5 miles beyond the motorway),
 * so it is here as a place already served, not as part of the planned
 * expansion. The Tamesis codebase this admin came from also lists St Albans;
 * that was Tamesis's coverage, not confirmed for Ninja, so it is not listed.
 */
export const COVERED_OUTSIDE_LONDON: readonly string[] = ['Guildford'];

/** Planned expansion: how far either side of the M25 the corridor band is drawn. */
export const CORRIDOR_MILES = 3;

/**
 * Share of the outer districts' combined area that actually lies within the
 * corridor: 589 of 1484 square miles. The districts are drawn unfilled partly
 * because of this — shading them whole would paint the corridor about two and
 * a half times larger than it is.
 */
export const CORRIDOR_AREA_SHARE_PCT = 40;
