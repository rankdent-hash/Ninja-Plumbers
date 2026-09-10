// Paid-search landing pages. These are noindex and excluded from the sitemap
// so they never compete with the organic service pages for the same terms.
//
// `cpc` is the UK cost-per-click Semrush reported for the head term when these
// were written — it is why each page exists and roughly what a wasted click
// costs. Headlines are written to match the ad copy, because message match is
// most of what determines Quality Score.
import site from './site.json';

export type Landing = {
  slug: string;
  campaign: string;
  headTerm: string;
  cpc: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  sub: string;
  urgent: boolean;      // lead with the phone rather than the form
  bullets: string[];
  reassure: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  // Optional: most early landing pages point at an existing service page
  // whose `does` list doubles as "what the job covers". A page with no real
  // service-page match (e.g. a repair-only campaign for a topic the site only
  // covers as part of a broader service) sets `covers` itself instead.
  relatedService?: string;
  covers?: string[];
  // Preselects the enquiry form's "What do you need?" dropdown with a label
  // that isn't in services.ts/appliances.ts at all — for a page whose topic
  // genuinely has no catalog entry (see `covers` above for the same case).
  formLabel?: string;
  // Set only on pages built for a live, confirmed promotion — never add this
  // to a page without an explicit go-ahead, since it's a real discount shown
  // to real customers.
  offer?: { disclaimer: string };
  // The extra claims beyond the site-wide TrustBar four (a review figure,
  // employment status, company info) — set only where each has been
  // separately confirmed as current, not assumed from another page.
  trustExtra?: string[];
  // A single "you might actually want this other page" callout, for when the
  // ad's search intent overlaps a real service/appliance page without being
  // the same job (e.g. repair vs. installation).
  crossLink?: { href: string; label: string; body: string };

  // ---- Premium layout (opt-in per page) ----
  // A page that sets `premium` renders the higher-end template: rating badge
  // and proof tiles in the hero, the offer as a ticket on the form, a
  // credibility strip in place of the "Why choose us" block, an icon grid
  // of what the job covers, and the diagnosis panel with an illustration.
  // Every figure in here must already be confirmed elsewhere on the page
  // (rating and count are the same claim as trustExtra) — nothing new.
  premium?: {
    eyebrow: string;
    rating: { score: string; count: string };
    whatsappLabel?: string; // defaults to "WhatsApp us a photo"
    proof: { label: string; note: string; icon: PremiumIcon }[];
    form: { title: string; sub: string; submit: string; note: string };
    fixes: { eyebrow: string; title: string; lead: string; items: { title: string; note: string; icon: PremiumIcon }[] };
    // `art` picks the animated illustration; `tag` is the caption under it.
    // The three points shown beside it are the page's own `reassure` list.
    diagnosis: { eyebrow: string; title: string; intro: string; tag: string; art: PremiumArt };
    steps: { title: string; body: string }[];
    close: { title: string; body: string };
  };
};

export type PremiumArt = 'tap' | 'gauge' | 'toilet' | 'certificate';

export type PremiumIcon =
  | 'calendar' | 'price' | 'visit' | 'shield'
  | 'kitchen' | 'bath' | 'mixer' | 'shower' | 'garden' | 'swap'
  | 'gauge' | 'home' | 'boiler' | 'pipe' | 'valve' | 'drop'
  | 'toilet' | 'cistern' | 'flush' | 'plunger' | 'pump' | 'seal'
  | 'certificate' | 'key' | 'building' | 'clipboard' | 'phone' | 'wrench';

export const landings: Landing[] = [
  {
    slug: 'emergency-plumber',
    campaign: 'Emergency Plumber — London',
    headTerm: '24 hour plumber london',
    cpc: '£43.86',
    metaTitle: 'Emergency Plumber London | Ninja Plumbers 24 Hour Callout',
    metaDescription: 'Ninja Plumbers covers London 24 hours a day for burst pipes, major leaks and no water. Gas Safe registered and fully insured.',
    h1: 'Emergency plumber in London, 24 hours a day',
    sub: 'Water through the ceiling, no water at all, or a pipe that has burst — call Ninja Plumbers and we will tell you what to do while an engineer is already on the way.',
    urgent: true,
    bullets: [
      'Callout available 24 hours, including weekends',
      'Gas Safe registered and fully insured',
      'DBS-checked engineers',
      'Price agreed before work starts',
    ],
    reassure: [
      {
        title: 'Turn your stopcock off first',
        body: 'Look under the kitchen sink or near the front door. Turn it clockwise as far as it goes, then open the cold taps — nothing else you can do before we arrive limits the damage as much.',
      },
      {
        title: 'You speak to someone who can dispatch',
        body: 'The booking line is answered by a person who can actually get an engineer to you, not a message service that promises a callback.',
      },
      {
        title: 'No surprise invoice',
        body: 'You get a price before an engineer starts work, out of hours included. We will not begin the job and tell you the cost afterwards.',
      },
    ],
    faqs: [
      { q: 'Do you really answer at night?', a: 'Emergency callout is available 24/7. Outside office hours the booking line goes to whoever is on call.' },
      { q: 'What areas do you cover?', a: 'Greater London — all 32 boroughs and the City of London. Our office is in Fulham.' },
      { q: 'How much is an emergency callout?', a: 'You are given a price before work starts, including out of hours. Call and describe the problem and we will tell you.' },
    ],
    relatedService: 'emergency-plumbing',
  },

  {
    slug: 'boiler-repair',
    campaign: 'Boiler Repair — London',
    headTerm: 'boiler repair london',
    cpc: '£17.46',
    metaTitle: 'Boiler Repair London | Ninja Plumbers Gas Safe Engineers',
    metaDescription: 'Ninja Plumbers repairs, services and replaces boilers across London with Gas Safe registered engineers. Honest advice, repair vs replace.',
    h1: 'Boiler repair in London by Gas Safe engineers',
    sub: 'No heating, no hot water, or a boiler locked out on a fault code — Ninja Plumbers diagnoses it first, then gives you an honest answer on whether repairing or replacing is the better spend.',
    urgent: true,
    bullets: [
      'Gas Safe registered engineers',
      'Breakdowns, servicing and full replacements',
      'Both prices quoted so you can compare',
      'Fully insured, DBS-checked engineers',
    ],
    reassure: [
      {
        title: 'Send us the fault code',
        body: 'If your boiler is showing a code, photograph it and send it on WhatsApp with the make and model. It often means the engineer arrives with the right part rather than coming back.',
      },
      {
        title: 'We will not push you at a new boiler',
        body: 'You get a quote for both the repair and the replacement, side by side. If the boiler is under about twelve years old, repair usually wins on cost, and we will tell you that straight.',
      },
      {
        title: 'Ask to see the Gas Safe card',
        body: 'Gas work legally requires a registered engineer. Ours carry the card and are glad to show it on the doorstep. You are entitled to ask.',
      },
    ],
    faqs: [
      { q: 'Is my boiler worth repairing?', a: 'It depends on age and which part has failed. We quote both options so you can decide on real numbers rather than a sales pitch.' },
      { q: 'Can you service it at the same time?', a: 'Usually yes. Say so when you book and the engineer will come prepared.' },
      { q: 'Do you install new boilers?', a: 'Yes, supply, install and remove the old unit, priced before anything is disconnected.' },
    ],
    relatedService: 'boiler-repair',
  },

  {
    slug: 'blocked-drains',
    campaign: 'Blocked Drains — London',
    headTerm: 'drain unblocking london',
    cpc: '£18.40',
    metaTitle: 'Blocked Drain London | Ninja Plumbers Same-Day Unblocking',
    metaDescription: 'Ninja Plumbers clears blocked drains, toilets and sinks across London with rods, jetting and CCTV, and tells you what caused it.',
    h1: 'Blocked drains cleared across London',
    sub: 'A blocked toilet, a slow sink, a drain backing up outside — Ninja Plumbers clears it with rods and jetting equipment, and brings a camera along when the cause is not obvious.',
    urgent: true,
    bullets: [
      'Toilets, sinks, showers and outside drains',
      'High-pressure jetting and CCTV survey',
      'We show you what caused it',
      'Domestic and commercial premises',
    ],
    reassure: [
      {
        title: 'Stop flushing',
        body: 'Each flush into a blocked pan adds more water with nowhere to go — that is exactly how a blockage turns into a flood. A level that is dropping slowly means it is only partial, and can usually wait for a normal appointment.',
      },
      {
        title: 'Please skip the caustic cleaner',
        body: 'It rarely clears a real blockage, damages older pipework, and means an engineer is reaching into a trap full of caustic liquid. If you have already used some, tell us when you call.',
      },
      {
        title: 'If it keeps happening, we find out why',
        body: 'Roots, fat, or a collapsed section. Clearing the same drain repeatedly costs more over a year than surveying it once.',
      },
    ],
    faqs: [
      { q: 'Can you come today?', a: 'Usually. Call the booking line, describe what is happening, and we will tell you honestly when we can be there.' },
      { q: 'Is the drain my responsibility?', a: 'Broadly, pipework inside your boundary is yours and the shared sewer beyond it is Thames Water’s. We will tell you which it is rather than charge you for their problem.' },
      { q: 'Do you work on blocks of flats?', a: 'Yes, including shared soil stacks and communal drainage for managing agents.' },
    ],
    relatedService: 'drain-unblocking',
  },

  {
    slug: 'bathroom-installation',
    campaign: 'Bathroom Installation — London',
    headTerm: 'bathroom fitters london',
    cpc: '£6.29',
    metaTitle: 'Bathroom Fitters London | Ninja Plumbers Installation &amp; Refits',
    metaDescription: 'Ninja Plumbers fits bathrooms across London — a single fixture swap or a full refit, en-suite or wet room. Scope and price agreed upfront.',
    h1: 'Bathroom installation across London',
    sub: 'Whether it is one tired toilet or a full strip-out and start again, Ninja Plumbers handles the plumbing and coordinates whichever trades come in after us.',
    urgent: false,
    bullets: [
      'Full refits, en-suites and wet rooms',
      'Accessible and level-access bathrooms',
      'Scope and price agreed in writing first',
      'Tiling and finishing coordinated for you',
    ],
    reassure: [
      {
        title: 'Priced before anyone lifts a floorboard',
        body: 'You agree the scope and the price before work starts. If something behind the wall changes the job, we stop and talk to you rather than press on and bill for it.',
      },
      {
        title: 'Buy your own suite if you prefer',
        body: 'Plenty of customers choose and order their own bathroom and have us fit it. That is completely fine and often works out better for you.',
      },
      {
        title: 'We will tell you what will actually work',
        body: 'A powerful mixer shower on a low-pressure gravity system will disappoint you. Tell us what system you have before you buy anything and we will save you the money.',
      },
    ],
    faqs: [
      { q: 'How long does a bathroom take?', a: 'It depends on scope and what is behind the existing one. You get a realistic timescale with the quote, and what could extend it.' },
      { q: 'Do you supply the bathroom?', a: 'Either way. Many customers buy their own suite and have us install it.' },
      { q: 'I am in a leasehold flat. Any issues?', a: 'Check your lease first — many require freeholder consent and some restrict working hours. Worth knowing before you commit.' },
    ],
    relatedService: 'bathroom-installation',
  },

  // ---- Plumbing - East campaign (Google Ads), built from the agency brief ----
  {
    slug: 'tap-repair',
    formLabel: 'Tap Repair',
    campaign: 'Plumbing - East / Dripping & Leaking Taps',
    headTerm: 'leaking tap repair london',
    cpc: '—',
    metaTitle: 'Tap Repair London | Dripping & Leaking Taps Fixed',
    metaDescription: `Dripping and leaking taps fixed across London — kitchen, bathroom, mixer, outdoor and shower taps. Same-week appointments. Call ${site.booking.display}.`,
    h1: 'Dripping tap? Fixed fast, fixed properly',
    sub: 'Kitchen, bathroom, mixer, shower and outdoor taps — dripping, leaking, low flow or won’t turn off. Same-week appointments, and most repairs are finished in a single visit.',
    urgent: false,
    premium: {
      eyebrow: 'Tap repair across London',
      rating: { score: '5.0', count: '8' },
      proof: [
        { label: 'Same-week appointments', note: 'Usually within days, not weeks', icon: 'calendar' },
        { label: 'Price agreed before we start', note: 'No surprise invoice, ever', icon: 'price' },
        { label: 'Most repairs in one visit', note: 'We carry washers and cartridges', icon: 'visit' },
        { label: 'Insured, DBS-checked engineers', note: 'Directly employed, not subcontracted', icon: 'shield' },
      ],
      form: {
        title: 'Book your tap repair',
        sub: 'Tell us which tap and what it’s doing. We come back with a price, not a sales call.',
        submit: 'Get Booked In',
        note: 'No obligation. Nothing is booked until you’ve agreed the price.',
      },
      fixes: {
        eyebrow: 'What we fix',
        title: 'Any tap, any room',
        lead: 'Dripping, leaking, seized, low flow or won’t turn off — whichever tap it is, it’s a job we do every week.',
        items: [
          { title: 'Kitchen taps', note: 'Dripping, stiff or leaking at the base', icon: 'kitchen' },
          { title: 'Bathroom & basin taps', note: 'Pillar taps, monoblocs and bath fillers', icon: 'bath' },
          { title: 'Mixer taps', note: 'Cartridge and valve replacement', icon: 'mixer' },
          { title: 'Shower mixers', note: 'Dripping heads and failed mixer valves', icon: 'shower' },
          { title: 'Outdoor & garden taps', note: 'Leaks fixed, check valve fitted where needed', icon: 'garden' },
          { title: 'Tap replacement', note: 'When a repair isn’t worth it, priced honestly', icon: 'swap' },
        ],
      },
      diagnosis: {
        eyebrow: 'Honest diagnosis',
        title: 'We tell you what’s actually wrong before we touch it',
        intro: 'A dripping tap is usually a small part, not a big job. We diagnose it properly, explain what we found, and agree the price before starting — whichever way it goes.',
        tag: 'Usually a washer, O-ring or cartridge — a short visit, not a big job',
        art: 'tap',
      },
      steps: [
        { title: 'Tell us about the tap', body: 'Call, send the form, or WhatsApp us a photo of the tap and where it’s leaking. It helps us arrive with the right parts.' },
        { title: 'We agree the price first', body: 'You get a price for the repair before an engineer starts. If it turns out to be more than a washer, we stop and tell you.' },
        { title: 'Repaired, tested, tidied', body: 'The tap is repaired or replaced, tested under pressure, and the area left as we found it.' },
      ],
      close: {
        title: '£25 off your first call-out',
        body: 'Book your tap repair today and the discount comes off the first visit.',
      },
    },
    bullets: [
      'Gas Safe registered and fully insured',
      'DBS-checked engineers',
      'Price agreed before work starts',
      'Directly employed engineers, not subcontracted',
    ],
    reassure: [
      {
        title: 'Often just a washer or cartridge',
        body: 'Most dripping taps come down to a worn washer, O-ring or cartridge — a straightforward part and a short visit. We tell you which it is before starting, not after.',
      },
      {
        title: 'If it is not just a washer',
        body: 'Occasionally the tap body or valve itself has failed, particularly on older mixer taps. We will tell you honestly whether it is worth repairing or better replaced, and price both.',
      },
      {
        title: 'Outdoor taps need a check valve',
        body: 'A leaking outdoor or garden tap is often the seal, but a replacement is also the point to make sure a check valve is fitted — a water regulations requirement that stops a hose siphoning back into the mains.',
      },
    ],
    faqs: [
      { q: 'How much does it cost to fix a dripping tap?', a: 'It depends on the tap and what has actually failed — a washer or cartridge is a short, inexpensive visit; a full tap replacement costs more. We agree the price before starting either way.' },
      { q: 'Can you replace a tap the same day?', a: 'Often, yes, if we are carrying a compatible replacement. Same-week appointments are standard, and many repairs are finished in a single visit.' },
      { q: 'Do you fix outdoor or garden taps?', a: 'Yes, including fitting a check valve where one is missing, which UK water regulations require on an outside tap.' },
      { q: 'What if it is not just a washer?', a: 'Some taps need a new cartridge or valve, or in a few cases the whole tap is worth replacing. We diagnose it properly rather than guessing, and tell you before any work starts.' },
    ],
    covers: [
      'Dripping and leaking taps, any room',
      'Mixer tap repairs',
      'Outdoor and garden tap leaks, with a check valve fitted where needed',
      'Shower mixer valve repairs',
      'Tap replacement',
      'Washer and cartridge replacement',
    ],
    offer: { disclaimer: 'New customers only. Cannot be combined with other offers.' },
    trustExtra: [
      `${site.name} rated 5.0 stars on Google`,
      'Directly employed engineers, never subcontracted',
      `Part of ${site.legalName}, established ${site.established}`,
    ],
  },

  {
    slug: 'low-water-pressure',
    formLabel: 'Low Water Pressure',
    campaign: 'Plumbing - East / Low Water Pressure',
    headTerm: 'low water pressure london',
    cpc: '—',
    metaTitle: 'Low Water Pressure London | Diagnosed & Fixed',
    metaDescription: `Weak water pressure diagnosed properly across London — pipework, limescale, pressure valves and boiler pressure checked. Call ${site.booking.display}.`,
    h1: 'Weak water pressure? We’ll find the real cause',
    sub: 'A new shower head will not fix a limescale-furred pipe or a failing pressure valve. We test the pressure properly and diagnose the actual cause before recommending anything.',
    urgent: false,
    premium: {
      eyebrow: 'Low water pressure across London',
      rating: { score: '5.0', count: '8' },
      proof: [
        { label: 'Proper pressure test', note: 'Measured at the mains and the fixture', icon: 'gauge' },
        { label: 'Price agreed before we start', note: 'No surprise invoice, ever', icon: 'price' },
        { label: 'Same-week appointments', note: 'Usually within days, not weeks', icon: 'calendar' },
        { label: 'Insured, DBS-checked engineers', note: 'Directly employed, not subcontracted', icon: 'shield' },
      ],
      form: {
        title: 'Book a pressure diagnosis',
        sub: 'Tell us whether it’s one shower or the whole house, and whether it dropped suddenly or slowly. We come back with a price for the visit.',
        submit: 'Get Booked In',
        note: 'No obligation. Nothing is booked until you’ve agreed the price.',
      },
      fixes: {
        eyebrow: 'What we check',
        title: 'We test, we don’t guess',
        lead: 'Low pressure has a handful of usual causes. We work through them in order rather than swapping parts and hoping.',
        items: [
          { title: 'Whole-house pressure test', note: 'Static and flow pressure at the incoming mains', icon: 'home' },
          { title: 'Pressure-reducing valve', note: 'A PRV drifted out of spec is a common London cause', icon: 'valve' },
          { title: 'Boiler pressure & flow', note: 'Combi boilers checked for pressure and hot-water flow', icon: 'boiler' },
          { title: 'Pipework & limescale', note: 'Furred or undersized pipework restricting flow', icon: 'pipe' },
          { title: 'Shower-specific problems', note: 'A single weak shower points at the valve or head', icon: 'shower' },
          { title: 'Stopcocks & isolation valves', note: 'Part-closed or seized valves throttling the supply', icon: 'drop' },
        ],
      },
      diagnosis: {
        eyebrow: 'Honest diagnosis',
        title: 'The cause decides the fix, not the other way round',
        intro: 'It is rarely one obvious thing. We measure the pressure, find where it is being lost, and tell you what it will take to put right — before recommending anything.',
        tag: 'Measured at the mains and at the fixture, so we know where the pressure is being lost',
        art: 'gauge',
      },
      steps: [
        { title: 'Tell us what you’re seeing', body: 'One weak shower or the whole house? Sudden or gradual? Call, send the form, or WhatsApp us — it points us at the likely cause before we arrive.' },
        { title: 'We test and agree the price', body: 'The engineer measures the pressure properly and explains what is causing the drop. You get a price for the fix before any work starts.' },
        { title: 'Fixed and checked', body: 'The valve, pipework or boiler issue is put right and the pressure re-tested so you can see the difference.' },
      ],
      close: {
        title: '£25 off your first call-out',
        body: 'Book a pressure diagnosis today and the discount comes off the first visit.',
      },
    },
    bullets: [
      'Gas Safe registered and fully insured',
      'DBS-checked engineers',
      'Price agreed before work starts',
      'Directly employed engineers, not subcontracted',
    ],
    reassure: [
      {
        title: 'Common in older London properties',
        body: 'Older pipework, combi boiler systems, and a pressure-reducing valve that has drifted out of spec are all common causes in London’s housing stock. It is rarely one single obvious thing.',
      },
      {
        title: 'Shower-only vs. whole-house is the first question',
        body: 'A problem in one shower points at that fixture or its valve. Weak pressure everywhere points at the incoming supply, the boiler, or a PRV — a different diagnosis and a different fix.',
      },
      {
        title: 'A new shower head is sometimes the answer, sometimes not',
        body: 'A low-pressure shower head can genuinely help on a gravity-fed system. It does nothing for a PRV set too low or pipework furred with limescale, so we test before recommending one.',
      },
    ],
    faqs: [
      { q: 'Why has my water pressure dropped?', a: 'Commonly limescale build-up in pipework, a pressure-reducing valve that has drifted out of spec, a boiler pressure problem, or occasionally a mains supply issue. We test rather than guess.' },
      { q: 'Is low pressure a boiler problem or a pipework problem?', a: 'It could be either, which is why we check both — boiler pressure and flow, and the pipework and valves feeding the affected fixture.' },
      { q: 'Can a new shower head actually fix low pressure?', a: 'Sometimes, on a gravity-fed system. It will not fix a faulty pressure valve or furred pipework, so we diagnose first rather than sell you one and hope.' },
      { q: 'How much does a pressure diagnosis cost?', a: 'Call the booking line and describe what is happening — whole-house or one fixture, gradual or sudden — and we will tell you what a visit costs before booking it.' },
    ],
    covers: [
      'Whole-house water pressure test',
      'Pressure-reducing valve (PRV) inspection',
      'Boiler pressure diagnosis',
      'Pipework and limescale build-up checked',
      'Shower-specific vs. whole-house pressure problems',
    ],
    offer: { disclaimer: 'New customers only. Cannot be combined with other offers.' },
    trustExtra: [
      `${site.name} rated 5.0 stars on Google`,
      'Directly employed engineers, never subcontracted',
      `Part of ${site.legalName}, established ${site.established}`,
    ],
  },

  {
    slug: 'toilet-repair',
    formLabel: 'Toilet Repair',
    campaign: 'Plumbing - East / Toilet Repairs',
    headTerm: 'toilet repair london',
    cpc: '—',
    metaTitle: 'Toilet Repair London | Same-Week Toilet Fixes',
    metaDescription: `Running toilets, leaking cisterns, weak flush and blocked toilets fixed across London. Most repairs done in one visit. Call ${site.booking.display}.`,
    h1: 'Toilet problem? Fixed the same week',
    sub: 'A toilet that keeps running, a leaking cistern, a weak or failed flush, or one that will not clear. Most toilet repairs are completed in a single visit.',
    urgent: false,
    premium: {
      eyebrow: 'Toilet repair across London',
      rating: { score: '5.0', count: '8' },
      proof: [
        { label: 'Same-week appointments', note: 'Usually within days, not weeks', icon: 'calendar' },
        { label: 'Price agreed before we start', note: 'No surprise invoice, ever', icon: 'price' },
        { label: 'Most repairs in one visit', note: 'We carry flush and fill valves', icon: 'visit' },
        { label: 'Insured, DBS-checked engineers', note: 'Directly employed, not subcontracted', icon: 'shield' },
      ],
      form: {
        title: 'Book your toilet repair',
        sub: 'Tell us what the toilet is doing — running, leaking, weak flush or blocked. We come back with a price, not a sales call.',
        submit: 'Get Booked In',
        note: 'No obligation. Nothing is booked until you’ve agreed the price.',
      },
      fixes: {
        eyebrow: 'What we fix',
        title: 'Every common toilet fault',
        lead: 'Running, leaking, weak, blocked or silent — most of these come down to one part, and most are done in a single visit.',
        items: [
          { title: 'Running toilets', note: 'Flush and fill valves that won’t stop refilling', icon: 'cistern' },
          { title: 'Leaking cisterns', note: 'Seals, washers and cracked internals', icon: 'drop' },
          { title: 'Weak or no flush', note: 'Flush mechanisms, siphons and push buttons', icon: 'flush' },
          { title: 'Blocked toilets', note: 'Cleared properly, not just pushed further down', icon: 'plunger' },
          { title: 'Macerator toilets', note: 'Saniflo and similar pump units', icon: 'pump' },
          { title: 'Seals & pan connectors', note: 'Leaks at the base and behind the pan', icon: 'seal' },
        ],
      },
      diagnosis: {
        eyebrow: 'Honest diagnosis',
        title: 'Usually one part, not a new toilet',
        intro: 'A running or leaking toilet is nearly always a worn valve or seal. We tell you which it is, agree the price, and only suggest replacing the toilet when a repair genuinely isn’t worth it.',
        tag: 'A running cistern can waste hundreds of litres a day — usually a cheap part and a short visit',
        art: 'toilet',
      },
      steps: [
        { title: 'Tell us about the toilet', body: 'Call, send the form, or WhatsApp us a photo. If it’s a macerator, say so, and the engineer arrives with the right parts.' },
        { title: 'We agree the price first', body: 'You get a price for the repair before an engineer starts. If it turns out to need more than a valve, we stop and tell you.' },
        { title: 'Repaired, tested, tidied', body: 'The fault is fixed, the flush and fill tested, and the bathroom left as we found it.' },
      ],
      close: {
        title: '£25 off your first call-out',
        body: 'Book your toilet repair today and the discount comes off the first visit.',
      },
    },
    bullets: [
      'Gas Safe registered and fully insured',
      'DBS-checked engineers',
      'Price agreed before work starts',
      'Directly employed engineers, not subcontracted',
    ],
    reassure: [
      {
        title: 'A running toilet is not harmless',
        body: 'A cistern that keeps refilling can waste hundreds of litres a day, which shows up on a water meter. It is usually a cheap part and a short visit to fix.',
      },
      {
        title: 'Macerator toilets are a different job',
        body: 'A Saniflo or macerator toilet fails differently to a standard gravity flush — often the pump rather than the pan. Tell us it is a macerator when you call so the right parts come with the engineer.',
      },
      {
        title: 'Want a new toilet rather than a repair?',
        body: 'If the toilet is old, cracked, or simply due an upgrade rather than a fix, that is an installation rather than a repair — see the link below.',
      },
    ],
    faqs: [
      { q: 'Why does my toilet keep running?', a: 'Usually a worn flush valve or fill valve that is not sealing properly, letting the cistern keep topping up. It is normally an inexpensive part and a short visit.' },
      { q: 'Can a leaking cistern cause water damage?', a: 'Yes, particularly on an upstairs bathroom, where a slow cistern leak can go unnoticed until it marks the ceiling below. Worth fixing promptly rather than waiting.' },
      { q: 'Do you fix macerator toilets?', a: 'Yes, including Saniflo and similar macerator units — tell us it is a macerator when you call so the engineer arrives with the right parts.' },
      { q: 'How much does a toilet repair cost?', a: 'It depends what has failed — call the booking line and describe the problem and we will tell you before booking.' },
    ],
    covers: [
      'Running or won’t-stop-filling toilets',
      'Leaking cisterns',
      'Weak or no flush',
      'Blocked or clogged toilets',
      'Macerator toilet repairs',
      'Toilet seal and flush mechanism replacement',
    ],
    offer: { disclaimer: 'New customers only. Cannot be combined with other offers.' },
    trustExtra: [
      `${site.name} rated 5.0 stars on Google`,
      'Directly employed engineers, never subcontracted',
      `Part of ${site.legalName}, established ${site.established}`,
    ],
    crossLink: {
      href: '/services/toilet-installation',
      label: 'Looking for a new toilet, not a repair?',
      body: 'Fitting a new toilet, swapping an old one, or moving a WC is a different job to a repair — see toilet installation.',
    },
  },

  {
    slug: 'landlord-plumbing',
    formLabel: 'Landlord & Compliance Plumbing',
    campaign: 'Plumbing - East / Landlord & Compliance Plumbing',
    headTerm: 'landlord plumber london',
    cpc: '—',
    metaTitle: 'Plumbing & Gas Safety for Landlords | London',
    metaDescription: `Plumbing and gas safety compliance for landlords and letting agents across London — tenant repairs and annual gas safety certificates. Call ${site.booking.display}.`,
    h1: 'Plumbing and gas safety for landlords and letting agents',
    sub: 'One point of contact for tenant repair call-outs and annual gas safety compliance across your rental properties, rather than a different tradesperson for every job.',
    urgent: false,
    premium: {
      eyebrow: 'Landlords & letting agents · London',
      rating: { score: '5.0', count: '8' },
      whatsappLabel: 'WhatsApp us',
      proof: [
        { label: 'Gas Safe registered', note: 'Landlord gas safety certificates (CP12)', icon: 'certificate' },
        { label: 'We deal with tenants directly', note: 'Access and updates without you in the loop', icon: 'key' },
        { label: 'Price agreed before we start', note: 'No surprise invoice, ever', icon: 'price' },
        { label: 'Insured, DBS-checked engineers', note: 'Directly employed, not subcontracted', icon: 'shield' },
      ],
      form: {
        title: 'Set up your properties',
        sub: 'Tell us about the property or portfolio and what you need — a tenant repair, a gas safety certificate, or both on an ongoing basis.',
        submit: 'Get Booked In',
        note: 'No obligation. Every job is priced and agreed before it is booked.',
      },
      fixes: {
        eyebrow: 'What we cover',
        title: 'Repairs and compliance under one contact',
        lead: 'Reactive repairs and annual compliance, handled by the same directly employed engineers.',
        items: [
          { title: 'Gas safety certificates', note: 'Annual CP12 checks worked to your renewal dates', icon: 'certificate' },
          { title: 'Tenant repair call-outs', note: 'Leaks, blockages, taps, toilets and no hot water', icon: 'wrench' },
          { title: 'Boiler repairs & servicing', note: 'Gas Safe registered engineers, certificated', icon: 'boiler' },
          { title: 'Portfolio compliance', note: 'Several properties tracked under one contact', icon: 'clipboard' },
          { title: 'Direct tenant liaison', note: 'We arrange access and keep the tenant informed', icon: 'phone' },
          { title: 'Flats and houses', note: 'Rented homes across the London boroughs', icon: 'building' },
        ],
      },
      diagnosis: {
        eyebrow: 'How we work with landlords',
        title: 'Less admin for you, a proper record for your file',
        intro: 'You introduce us once. After that, repairs and gas safety renewals run without every message going back through you, and you get the paperwork you need to keep.',
        tag: 'A CP12 is renewed every 12 months and given to a new tenant before they move in',
        art: 'certificate',
      },
      steps: [
        { title: 'Tell us about the property', body: 'Send the form or call with the address, the tenant’s number, and what you need — a one-off repair or ongoing compliance.' },
        { title: 'We agree the price first', body: 'You get a price before an engineer starts. If a repair turns into something bigger, we stop and tell you before going further.' },
        { title: 'Done, and documented', body: 'The job is finished and tested, and the certificate or record comes to you for your file.' },
      ],
      close: {
        title: '£25 off your first call-out',
        body: 'Book a repair or gas safety check today and the discount comes off the first visit.',
      },
    },
    bullets: [
      'Gas Safe registered and fully insured',
      'DBS-checked engineers',
      'Price agreed before work starts',
      'Directly employed engineers, not subcontracted',
    ],
    reassure: [
      {
        title: 'We deal directly with tenants',
        body: 'Give us the tenant’s number alongside yours and we will arrange access and keep them informed directly, rather than everything routing back through you first.',
      },
      {
        title: 'Gas safety certificates on your renewal date',
        body: 'A CP12 has to be renewed every 12 months and produced to a new tenant before they move in. We can work to your existing renewal dates across a portfolio rather than starting from scratch.',
      },
      {
        title: 'One call for the whole rental relationship',
        body: 'A blocked drain, a broken tap, and the annual gas safety check do not need three different contacts. Being Gas Safe registered and set up for reactive repairs covers both under one number.',
      },
    ],
    faqs: [
      { q: 'How often do I need a gas safety certificate?', a: 'Every 12 months for a rented property, and a new tenant must be given a copy before moving in. Our gas safety certificate page covers what is involved.' },
      { q: 'Can you manage compliance across several rental properties?', a: 'Yes — tell us the properties and their renewal dates and we will work to them, rather than treating each one as a one-off.' },
      { q: 'Do you deal directly with tenants?', a: 'Yes, we can arrange access and updates directly with a tenant once you have introduced us, so a repair does not have to go through you at every step.' },
      { q: 'How fast can you respond to a tenant repair request?', a: 'It depends on the nature of the repair — call the booking line and describe it and we will tell you honestly.' },
    ],
    covers: [
      'Tenant repair call-outs',
      'Annual gas safety certificates (CP12)',
      'General reactive plumbing maintenance',
      'Working to your existing certificate renewal dates',
    ],
    offer: { disclaimer: 'New customers only. Cannot be combined with other offers.' },
    trustExtra: [
      `${site.name} rated 5.0 stars on Google`,
      'Directly employed engineers, never subcontracted',
      `Part of ${site.legalName}, established ${site.established}`,
    ],
    crossLink: {
      href: '/services/gas-safety-certificate',
      label: 'Just need the certificate?',
      body: 'If it’s only the annual CP12 you need and not the wider repairs relationship, see gas safety certificates.',
    },
  },
];

export default landings;
