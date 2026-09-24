// Where the business actually works, as distinct from where the map happens to
// draw a shape. This is business fact, not geometry, which is why it lives here
// and not in the generated src/data/londonMap.ts — regenerating the map must
// never quietly change what the site claims about coverage.
//
// Greater London is covered in full (all 33 boroughs). Beyond it, only the
// districts named below.

/**
 * Councils outside Greater London that Ninja Plumbers covers today, confirmed
 * by the owner (Sept 2026): Guildford and the towns around it.
 *
 *   Guildford     Guildford, Burpham, Merrow, Shalford, Send, Ripley, Ash
 *   Woking        Woking, Knaphill, Pyrford
 *   Surrey Heath  Camberley, Frimley, Bagshot, Lightwater, Windlesham
 *   Mole Valley   Dorking (and Leatherhead, Bookham in the same council)
 *   Waverley      Godalming, Farnham, Cranleigh, Milford
 *   Rushmoor      Aldershot, Farnborough
 *
 * Names are the council names postcodes.io returns as admin_district, which
 * is what the enquiry form and the lead lookup test a postcode against.
 *
 * COVERED_OUTSIDE_LONDON are the ones drawn on the admin map (they must match
 * OUTER_DISTRICTS in src/data/londonMap.ts exactly, and are shaded as covered).
 * Waverley and Rushmoor are covered too but have no boundary in this repo, so
 * they cannot be shaded; their postcode districts still have dots.
 * The Tamesis codebase this admin came from listed St Albans; that was
 * Tamesis's coverage, not Ninja's, so it is not here.
 */
export const COVERED_OUTSIDE_LONDON: readonly string[] = ['Guildford', 'Woking', 'Surrey Heath', 'Mole Valley'];
export const COVERED_NOT_DRAWN: readonly string[] = ['Waverley', 'Rushmoor'];
/** Every council outside Greater London that counts as in our service area. */
export const COVERED_COUNCILS: readonly string[] = [...COVERED_OUTSIDE_LONDON, ...COVERED_NOT_DRAWN];

/** Planned expansion: how far either side of the M25 the corridor band is drawn. */
export const CORRIDOR_MILES = 3;

/**
 * Share of the outer districts' combined area that actually lies within the
 * corridor: 589 of 1484 square miles. The districts are drawn unfilled partly
 * because of this — shading them whole would paint the corridor about two and
 * a half times larger than it is.
 */
export const CORRIDOR_AREA_SHARE_PCT = 40;
