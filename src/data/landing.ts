// Paid-search landing pages. These are noindex and excluded from the sitemap
// so they never compete with the organic service pages for the same terms.
//
// `cpc` is the UK cost-per-click Semrush reported for the head term when these
// were written — it is why each page exists and roughly what a wasted click
// costs. Headlines are written to match the ad copy, because message match is
// most of what determines Quality Score.

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
  relatedService: string;
};

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
];

export default landings;
