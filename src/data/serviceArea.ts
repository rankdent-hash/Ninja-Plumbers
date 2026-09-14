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
 * Guildford and St Albans are here because the business covers them, not
 * because of where the M25 runs: St Albans happens to fall inside the planned
 * 3-mile corridor (its centre is 2.9 miles from the motorway), but Guildford
 * town centre is 7.5 miles outside it. Neither is part of the planned
 * expansion — they are already served.
 */
export const COVERED_OUTSIDE_LONDON: readonly string[] = ['Guildford', 'St Albans'];

/** Planned expansion: how far either side of the M25 the corridor band is drawn. */
export const CORRIDOR_MILES = 3;
