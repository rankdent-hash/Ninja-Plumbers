// Service x location combinations that were measured and deliberately not
// built, with the figure that made the call. Kept so the reasoning survives:
// without it, the obvious future instinct is "we should add drain unblocking
// for Clapham" — and the answer is that it returns zero searches a month.
//
// The bar is 140 monthly UK searches (Semrush). Below that, the service page
// and the area page already cover the term between them.

export type Rejected = { service: string; area: string; volume: number };

export const rejected: Rejected[] = [
  // Boiler repair
  { service: 'boiler-repair', area: 'balham', volume: 110 },
  { service: 'boiler-repair', area: 'islington', volume: 90 },

  // Bathroom installation
  { service: 'bathroom-installation', area: 'ealing', volume: 110 },
  { service: 'bathroom-installation', area: 'wandsworth', volume: 110 },
  { service: 'bathroom-installation', area: 'islington', volume: 90 },
  { service: 'bathroom-installation', area: 'balham', volume: 20 },
  { service: 'bathroom-installation', area: 'hackney', volume: 20 },
  { service: 'bathroom-installation', area: 'clapham', volume: 20 },
  { service: 'bathroom-installation', area: 'brixton', volume: 20 },

  // Drain unblocking — almost nothing clears the bar
  { service: 'drain-unblocking', area: 'fulham', volume: 70 },
  { service: 'drain-unblocking', area: 'harrow', volume: 70 },
  { service: 'drain-unblocking', area: 'islington', volume: 70 },
  { service: 'drain-unblocking', area: 'wandsworth', volume: 50 },
  { service: 'drain-unblocking', area: 'balham', volume: 40 },
  { service: 'drain-unblocking', area: 'hackney', volume: 40 },
  { service: 'drain-unblocking', area: 'brixton', volume: 40 },
  { service: 'drain-unblocking', area: 'ealing', volume: 20 },
  { service: 'drain-unblocking', area: 'clapham', volume: 0 },
];

// Terms tested at London level and found not worth a page of their own.
export const rejectedTerms: { term: string; volume: number; note: string }[] = [
  { term: 'kitchen plumber london', volume: 0, note: 'Room-based sub-service — no demand at all' },
  { term: 'plumber sw6 / sw11 / w6 / nw3', volume: 20, note: 'Postcode pages — the whole category is dead' },
  { term: 'garden drainage london', volume: 20, note: 'Room-based sub-service' },
  { term: 'overflow pipe repair', volume: 20, note: 'Too narrow to sustain a page' },
  { term: 'tap repair london', volume: 30, note: 'Covered by General Plumbing' },
  { term: 'toilet repair london', volume: 70, note: 'Beaten by "blocked toilet london" at 480' },
];

// A full "plumbing by room" section was proposed and measured before being
// dropped. The finding, consistent across every room tested: rooms have no
// search behind them and appliances do. Figures are UK monthly (Semrush),
// tested without the London suffix as well, which is what exposed the real
// demand behind the appliance pages that were built instead.
//
// Kept because the instinct to add "kitchen plumbing" and "garage plumbing"
// pages will come back, and this is the answer to it.
export const rejectedRooms: { term: string; volume: number; note: string }[] = [
  { term: 'cellar plumbing', volume: 0, note: 'Nothing at all' },
  { term: 'bathroom plumber london', volume: 0, note: '"bathroom plumber" is 260, but Bathroom Installation already holds that intent' },
  { term: 'garage plumbing', volume: 10, note: 'Room page' },
  { term: 'granny flat plumbing', volume: 10, note: 'Room page; "annexe plumbing" returns no data at all' },
  { term: 'loft plumbing', volume: 20, note: 'Room page — the real demand is Saniflo, which was built' },
  { term: 'utility room plumbing', volume: 20, note: 'Room page — the real demand is Washing Machine Plumbing, which was built' },
  { term: 'office plumbing', volume: 20, note: 'Folded into Commercial Plumbing as a named section' },
  { term: 'commercial kitchen plumbing', volume: 20, note: 'Folded into Commercial Plumbing as a named section' },
  { term: 'retail unit plumbing', volume: 0, note: 'No data; folded into Commercial Plumbing as a named section' },
  { term: 'conservatory plumbing', volume: 0, note: 'No data' },
  { term: 'basement plumbing', volume: 40, note: 'Room page — the real demand is Sump Pumps at 480, which was built' },
  { term: 'kitchen plumbing london', volume: 30, note: 'Re-tested. Still nothing. "kitchen plumber" is 50' },
  { term: 'bidet installation london', volume: 20, note: 'Folded into Bathroom Installation' },
  { term: 'american fridge freezer plumbing', volume: 40, note: 'Folded into Washing Machine Plumbing' },
  { term: 'under sink water filter installation', volume: 20, note: 'Folded into Water Filtration & Limescale' },
  { term: 'limescale removal system', volume: 20, note: 'Folded into Water Filtration & Limescale' },
  { term: 'macerator pump installation', volume: 20, note: 'Built, but under "saniflo installation" at 260 — that is the term people use' },
];

// Appliance-page equivalent of the local combo pages in combos.ts: service ×
// area, tested the same way and against the same 140/month bar. Tested across
// the highest-volume appliances and the highest-volume areas, on the theory
// that if the best case does not clear the bar, nothing further down does
// either — the same reasoning already used for postcode combos above.
//
// Result: 25 of 29 tested combinations returned 0 or no data at all, and the
// single highest ("power flush fulham") still falls under the bar. Appliance
// searches are UK-national in a way area searches are not — nobody adds a
// borough to "water softener installation" the way they do to "emergency
// plumber". So: no appliance × area or appliance × postcode pages. Local
// intent for appliance work is served by cross-links from the area and
// postcode pages instead — see the "Appliances & fixtures" section on both
// page templates — rather than by 400+ near-duplicate URLs with nothing
// behind them.
export const rejectedApplianceAreas: { term: string; volume: number }[] = [
  { term: 'power flush fulham', volume: 90 },
  { term: 'power flush croydon', volume: 50 },
  { term: 'power flush islington', volume: 50 },
  { term: 'washing machine installation croydon', volume: 40 },
  { term: 'power flush wandsworth', volume: 40 },
  { term: 'water softener installation croydon', volume: 0 },
  { term: 'underfloor heating installation croydon', volume: 0 },
  { term: 'radiator power flush croydon', volume: 0 },
  { term: 'toilet installation croydon', volume: 0 },
  { term: 'dishwasher installation croydon', volume: 0 },
  { term: 'sump pump installation croydon', volume: 0 },
  { term: 'saniflo installation croydon', volume: 0 },
  { term: 'water meter installation croydon', volume: 0 },
  { term: 'water softener installation wandsworth, islington, bromley, fulham', volume: 0 },
  { term: 'washing machine plumber croydon, wandsworth, islington', volume: 0 },
];

// Measured, has real demand, and deliberately not built pending a business
// decision rather than an SEO one.
export const blocked: { term: string; volume: number; reason: string }[] = [
  // Confirmed and built: see services.ts "gas-safety-certificate". These two
  // stayed blocked for weeks pending exactly this confirmation — the
  // business does issue CP12s — before a page could honestly go up.
];

// A competitor's sitemap (barnesplumber.uk) was checked against this site to
// find real gaps, the same way everything else here gets decided — measured
// first, not copied. Two genuine categories came out of it: Gas Safety
// Certificates and the whole Damp & Condensation section, both built. These
// terms were tested alongside them and did not clear the bar.
//
// Also worth recording: that competitor runs 9 separate power-flushing pages
// and 8 separate leak-detection pages, split by every room and system —
// exactly the doorway-page pattern the note at the top of this file warns
// against. Not copied; both stay as the single, better page each already is.
export const rejectedCompetitorGaps: { term: string; volume: number; note: string }[] = [
  { term: 'smart heating controls installation', volume: 20, note: 'Not built' },
  { term: 'thermostatic radiator valve installation', volume: 70, note: 'Combined with "trv installation" still under the bar' },
  { term: 'trv installation', volume: 50, note: 'See above' },
  { term: 'waste disposal unit installation', volume: 20, note: 'Not built' },
  { term: 'why choose us plumber', volume: 0, note: 'A page concept, not a search term — already served by the trust bar and About' },
];
