// Turning a postcode into a district, a borough and a yes/no on the service
// area. Lifted out of src/pages/api/enquiry.ts unchanged when the admin panel
// gained a way to log a phone call by hand: a lead typed in by the office and
// a lead sent through the website must land on the map in exactly the same
// place, and two copies of this logic would eventually disagree about where
// that is.
import { COVERED_OUTSIDE_LONDON } from '../data/serviceArea';

// Postcode areas we explicitly do not serve. These come up in enquiries often
// enough to be worth naming; see /areas-we-cover.
export const EXCLUDED_AREAS = ['SG', 'NG'];

/** Outward code of a UK postcode: "SW6 3LQ" -> "SW6". Area: "SW6" -> "SW". */
export function splitPostcode(raw: string) {
  const clean = raw.toUpperCase().replace(/\s+/g, '');
  const outward = clean.length > 3 ? clean.slice(0, clean.length - 3) : clean;
  const area = outward.replace(/[0-9].*$/, '');
  return { outward, area };
}

export type Lookup = {
  valid: boolean;
  inServiceArea: boolean;
  borough?: string;
  region?: string;
};

/** postcodes.io is free and needs no key. Never trust the client's own verdict. */
export async function lookupPostcode(postcode: string): Promise<Lookup> {
  const { area } = splitPostcode(postcode);
  if (EXCLUDED_AREAS.includes(area)) {
    return { valid: true, inServiceArea: false };
  }
  try {
    const res = await fetch(
      `https://api.postcodes.io/postcodes/${encodeURIComponent(postcode.trim())}`,
      { signal: AbortSignal.timeout(4000) }
    );
    // 404 means the postcode genuinely does not exist, which is worth telling
    // the customer. Any other failure is the lookup service's problem, not
    // theirs, and must not cost us the lead.
    if (res.status === 404) return { valid: false, inServiceArea: false };
    if (!res.ok) return { valid: true, inServiceArea: true };
    const body = await res.json();
    const r = body?.result;
    if (!r) return { valid: true, inServiceArea: true };
    // Greater London, plus the districts we cover beyond it. Testing the region
    // alone used to flag a Guildford or St Albans job as out of area and put
    // "*** OUTSIDE SERVICE AREA ***" at the top of the notification email for a
    // customer we do in fact serve. COVERED_OUTSIDE_LONDON is the same list the
    // admin map draws as covered, so the two cannot disagree.
    const district = r.admin_district ?? undefined;
    return {
      valid: true,
      inServiceArea: r.region === 'London' || COVERED_OUTSIDE_LONDON.includes(district ?? ''),
      borough: district,
      region: r.region ?? undefined,
    };
  } catch {
    // A postcodes.io outage must not cost us a lead. Accept it and let the
    // office check the address by hand.
    return { valid: true, inServiceArea: true };
  }
}
