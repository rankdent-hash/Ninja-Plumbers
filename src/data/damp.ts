// Damp and condensation pages, under /damp. A category the site did not
// cover at all until this was measured against a competitor's sitemap:
// damp proofing (5,400/mo), damp survey (2,900/mo), penetrating damp
// (1,600/mo) and condensation control (480/mo) — real, substantial demand,
// confirmed as work Ninja carries out before any page was written.
//
// Three pages rather than the competitor's five: "damp proofing" and
// "penetrating damp" are the same job from two different search angles
// (the treatment, and the specific damp type it treats), so one page
// carries both rather than splitting into near-duplicates.
import type { Faq } from './services';

export type DampPage = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  icon: string;
  target: string;
  summary: string;
  intro: string;
  does: string[];
  guidance: { title: string; body: string }[];
  aside: { title: string; body: string };
  faqs: Faq[];
  related: string[]; // services.ts slugs this page links back to
};

export const dampPages: DampPage[] = [
  {
    slug: 'damp-survey-and-diagnosis',
    title: 'Damp Survey & Diagnosis',
    h1: 'Damp survey and diagnosis in London',
    metaTitle: 'Damp Survey London | Diagnosis & Written Report | Ninja Plumbers',
    metaDescription:
      'Ninja Plumbers surveys damp across London, identifies the real cause and gives you a written report before any treatment is proposed. Call 020 3576 5825.',
    eyebrow: 'Diagnosis first',
    icon: 'water',
    target: 'damp survey (2,900/mo)',
    summary:
      'Before Ninja Plumbers proposes any treatment, we work out exactly what kind of damp it is and what’s causing it.',
    intro:
      'On a wall, rising damp, penetrating damp and condensation can look almost identical, yet each needs a completely different fix — get it wrong and you’ve wasted money without touching the real problem. Our survey uses a moisture meter, a visual inspection and, where it’s relevant, a look outside for the source, and it ends with a written report before anyone talks about treatment.',
    does: [
      'Moisture meter readings and visual inspection',
      'Identifying rising, penetrating or condensation damp',
      'Tracing the external cause — guttering, render, ground level, DPC',
      'Written report with findings and recommended action',
      'Pre-purchase damp surveys for house buyers',
      'Independent second opinion on an existing damp report',
    ],
    guidance: [
      {
        title: 'A damp-proofing quote without a survey is a guess',
        body: 'If a company offers a fixed-price damp-proofing course before inspecting the property, that is a sales process, not a diagnosis. The treatment for rising damp, penetrating damp and condensation are all different, and using the wrong one does not fix anything.',
      },
      {
        title: 'A moisture meter reading needs interpreting, not just reading',
        body: 'Plaster, paint and even some modern building materials read as "damp" on a surface meter for reasons that have nothing to do with actual moisture ingress. A reading on its own is not a diagnosis — what matters is the pattern, the height, and whether it matches an external cause.',
      },
      {
        title: 'True rising damp is rarer than it is diagnosed',
        body: 'Most old buildings without a damage-proof course cope fine for decades. A lot of what gets labelled rising damp is actually penetrating damp from a defect above ground, or condensation from poor ventilation — both cheaper to fix and easier to prevent recurring.',
      },
      {
        title: 'A pre-purchase survey pays for itself once',
        body: 'A period property survey that misses a damp issue is a cost discovered after completion. Commissioning your own damp survey alongside a building survey is a small outlay against that risk.',
      },
    ],
    aside: {
      title: 'We separate the survey from the treatment',
      body: 'The survey establishes what is actually wrong with the wall. Deciding what to do about it — and whether Ninja Plumbers carries out that work — comes afterwards, as a separate decision rather than something bundled into the same visit.',
    },
    faqs: [
      {
        q: 'How long does a survey take?',
        a: 'Typically an hour to ninety minutes for a single property, depending on how many rooms are affected and whether the external walls need checking too.',
      },
      {
        q: 'Do you charge for the survey if I don’t go ahead with treatment?',
        a: 'The survey is a standalone service and is priced as such — you are not committed to any further work by having one done.',
      },
      {
        q: 'Can you survey a property before I buy it?',
        a: 'Yes, and it does not need to wait for exchange — many buyers commission this alongside their building survey during the offer stage.',
      },
      {
        q: 'I already have a damp report from another company. Can you check it?',
        a: 'Yes, a second opinion on an existing report or quoted treatment is a normal request and we are glad to do it.',
      },
    ],
    related: ['general-plumbing', 'leak-detection'],
  },

  {
    slug: 'damp-proofing-and-penetrating-damp',
    title: 'Damp Proofing & Penetrating Damp',
    h1: 'Damp proofing and penetrating damp treatment in London',
    metaTitle: 'Damp Proofing London | Penetrating Damp Treatment | Ninja Plumbers',
    metaDescription:
      'Damp proofing and penetrating damp treatment across London from Ninja Plumbers: the cause fixed at source, not masked with a coating. Call 020 3576 5825.',
    eyebrow: 'Treatment',
    icon: 'water',
    target: 'damp proofing (5,400/mo) · penetrating damp (1,600/mo)',
    summary:
      'Rather than papering over the symptom from inside, we trace penetrating damp back to the outside defect that is letting the water in.',
    intro:
      'Water gets into a wall horizontally with penetrating damp, and there is always a specific defect behind it — cracked render, a gutter overflowing down the brickwork, a perished pointing joint, or ground built up over the damp-proof course. Fixing it means finding that defect and dealing with it, rather than slapping a waterproof coating on the inside and hoping for the best.',
    does: [
      'Tracing and fixing the external entry point',
      'Damp-proof course installation and repair',
      'Repointing, render repair and defect remediation',
      'Internal replastering with the correct system, post-fix',
      'Ground level and drainage corrections against a wall',
      'Guttering and downpipe faults that feed penetrating damp',
    ],
    guidance: [
      {
        title: 'A waterproof coating without fixing the cause just moves the problem',
        body: 'Tanking or a waterproof paint on the inside of a wall stops the symptom showing, but the water is still getting in — it tends to travel sideways instead and shows up somewhere new. Fix the external defect first.',
      },
      {
        title: 'Guttering is the single most common cause',
        body: 'A blocked or leaking gutter running water down an external wall for months produces exactly the pattern people call rising damp. Checking the guttering above the affected wall costs nothing and rules out the commonest cause.',
      },
      {
        title: 'Ground level matters more than people expect',
        body: 'A path, patio or flower bed built up against a wall above the damp-proof course bridges it, letting ground moisture straight into the brickwork above. Lowering the ground level is sometimes the actual fix, not anything done to the wall itself.',
      },
      {
        title: 'Replastering needs the right system, and needs the wall to dry first',
        body: 'Replastering over a wall that has not been allowed to dry out, or with an ordinary plaster rather than a breathable or salt-retardant system where needed, brings the problem back. This is agreed as part of the job, not left to whoever tiles or decorates afterwards.',
      },
    ],
    aside: {
      title: 'A defect fixed outside is cheaper than internal work repeated',
      body: 'Pointing, render and guttering repairs on the outside usually cost less than the alternative. Replaster inside before the actual cause is dealt with, and you are paying for the same job twice.',
    },
    faqs: [
      {
        q: 'How is penetrating damp different from rising damp?',
        a: 'Penetrating damp comes in horizontally through a specific defect and can appear at any height. Rising damp travels up from the ground through the wall itself and is limited to roughly the height groundwater can wick to — usually under a metre.',
      },
      {
        q: 'Will the patch on my wall go away once the cause is fixed?',
        a: 'The wall needs time to dry out afterwards, which can take weeks depending on the wall’s thickness and how long it was wet. Redecorating too soon traps the remaining moisture behind the new finish.',
      },
      {
        q: 'Do you install damp-proof courses?',
        a: 'Yes, both new installation and repair of an existing one that has failed or been bridged.',
      },
      {
        q: 'Can this wait, or does it get worse?',
        a: 'Left alone, penetrating damp typically gets worse — timber can be affected, and the area of wall involved grows. It is worth dealing with once identified rather than monitoring it.',
      },
    ],
    related: ['general-plumbing', 'leak-detection'],
  },

  {
    slug: 'condensation-and-ventilation-control',
    title: 'Condensation & Ventilation Control',
    h1: 'Condensation and ventilation control in London',
    metaTitle: 'Condensation Control London | Ventilation Solutions | Ninja Plumbers',
    metaDescription:
      'Ninja Plumbers tackles condensation and mould across London: extractor fans and ventilation fixed at the cause, not just cleaned off the surface. Call 020 3576 5825.',
    eyebrow: 'Ventilation',
    icon: 'water',
    target: 'condensation control (480/mo)',
    summary:
      'Steamed-up windows and black mould are usually a ventilation fault, not a cleaning job, and Ninja Plumbers deals with the cause rather than the symptom.',
    intro:
      'Warm, moist air meeting a cold surface — a bathroom wall, a window, a poorly ventilated bedroom corner — is what produces condensation. Scrubbing the black mould that follows only ever treats what you can see, never what caused it. The actual fix is two-fold: get the moisture out of the building before it condenses, and remove the cold spots giving it somewhere to settle.',
    does: [
      'Extractor fan installation and repair, bathrooms and kitchens',
      'Humidity-triggered and timer-run fan upgrades',
      'Positive input ventilation (PIV) systems',
      'Trickle vents and passive ventilation checks',
      'Identifying cold-bridging and cold-spot causes',
      'Mould treatment following the ventilation fix, not instead of it',
    ],
    guidance: [
      {
        title: 'Black mould is a symptom, the moisture is the cause',
        body: 'Cleaning mould off without dealing with the humidity behind it means it returns within weeks. Every job here starts with why the air is that damp before anything gets treated on the surface.',
      },
      {
        title: 'An extractor fan that switches off with the light is often the problem',
        body: 'Steam and moisture keep circulating for a good while after a shower ends. A humidity-triggered fan, or one on a timer that runs on after the light goes off, clears it properly instead of stopping the moment the switch does.',
      },
      {
        title: 'Drying laundry indoors is a major, avoidable source',
        body: 'A single load of washing drying indoors releases a genuinely large amount of water into the air. Where there is no outside space or tumble dryer, that moisture needs somewhere to go — proper extraction or a dehumidifier, not a closed window.',
      },
      {
        title: 'Trickle vents get painted shut more often than people realise',
        body: 'Passive vents built into window frames are routinely painted or sealed over during redecoration, quietly removing the background ventilation the room was designed around. Checking they still open is a two-minute job worth doing.',
      },
    ],
    aside: {
      title: 'Fix the ventilation before you redecorate',
      body: 'Paint over a mould patch without addressing the cause and you will likely be doing it again inside a year. Get the airflow sorted first, then decorate.',
    },
    faqs: [
      {
        q: 'How do I know if it is condensation rather than penetrating or rising damp?',
        a: 'Condensation typically appears on cold surfaces — windows, north-facing walls, corners with poor airflow — and worsens in cold weather with cooking, showering or drying laundry. A damp survey settles it where it is not obvious.',
      },
      {
        q: 'Will a dehumidifier fix it on its own?',
        a: 'It helps in the short term but does not address the underlying ventilation, and running one constantly costs more over time than fixing the extraction properly.',
      },
      {
        q: 'Do I need an electrician as well for a new extractor fan?',
        a: 'Only if new wiring or a new switched supply is needed. Many replacements use the existing wiring and are a straightforward swap.',
      },
      {
        q: 'Can you treat the mould as well as fix the ventilation?',
        a: 'Yes, but always alongside the ventilation fix — treating mould without it is a temporary result, and we will say so rather than sell it as a standalone job.',
      },
    ],
    related: ['general-plumbing', 'leak-detection'],
  },
];

// Every damp page must point back at core services that exist.
import { services } from './services';
{
  const slugs = services.map((s) => s.slug);
  const bad = dampPages.flatMap((d) =>
    d.related.filter((r) => !slugs.includes(r)).map((r) => `${d.slug} -> ${r}`)
  );
  if (bad.length) throw new Error(`damp.ts: unknown related service: ${bad.join(', ')}`);

  const dupes = dampPages.map((d) => d.slug).filter((s, i, arr) => arr.indexOf(s) !== i);
  if (dupes.length) throw new Error(`damp.ts: duplicate slugs: ${dupes.join(', ')}`);
}
