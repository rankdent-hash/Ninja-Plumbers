// Damp and condensation pages, under /damp. A category the site did not
// cover at all until this was measured against a competitor's sitemap:
// damp proofing (5,400/mo), damp survey (2,900/mo), penetrating damp
// (1,600/mo) and condensation control (480/mo) — real, substantial demand,
// confirmed as work Tamesis carries out before any page was written.
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
    metaTitle: 'Damp Survey London | Diagnosis & Written Report | Tamesis Plumbers',
    metaDescription:
      'Damp surveys across London, with the actual cause identified and a written report — before/instead of a treatment. Call 020 3488 3737.',
    eyebrow: 'Diagnosis first',
    icon: 'water',
    target: 'damp survey (2,900/mo)',
    summary:
      'Finding out what kind of damp it actually is, and what caused it, before anyone proposes treating it.',
    intro:
      'Rising damp, penetrating damp and condensation look similar on a wall and need completely different fixes — treating the wrong one wastes money and leaves the actual problem untouched. A survey finds the cause with a moisture meter, a visual inspection and, where it matters, checking outside for the source, and gives you a written report before any treatment is proposed.',
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
      body: 'The survey tells you what is actually wrong. What to do about it — and whether to use us for that — is a decision made afterwards, not bundled into the same visit.',
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
    metaTitle: 'Damp Proofing London | Penetrating Damp Treatment | Tamesis Plumbers',
    metaDescription:
      'Damp proofing and penetrating damp treatment across London: the actual cause fixed at source, not just masked with a coating. Call 020 3488 3737.',
    eyebrow: 'Treatment',
    icon: 'water',
    target: 'damp proofing (5,400/mo) · penetrating damp (1,600/mo)',
    summary:
      'Penetrating damp fixed at its source — a defect letting water in from outside — rather than papered over from within.',
    intro:
      'Penetrating damp comes in horizontally, through a specific defect: a cracked render, a blocked gutter overflowing down a wall, a perished pointing joint, ground built up above the damp-proof course. Treating it means finding and fixing that defect, not just applying a waterproof coating to the inside of the wall and hoping.',
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
      body: 'External repairs — pointing, render, guttering — are usually the smaller cost. Internal replastering done before the cause is fixed is money spent twice.',
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
    metaTitle: 'Condensation Control London | Ventilation Solutions | Tamesis Plumbers',
    metaDescription:
      'Condensation and mould control across London: extractor fans, ventilation and the cause of black mould fixed, not just cleaned off. Call 020 3488 3737.',
    eyebrow: 'Ventilation',
    icon: 'water',
    target: 'condensation control (480/mo)',
    summary:
      'Black mould and steamed-up windows are a ventilation problem, not a cleaning problem — dealt with at the cause.',
    intro:
      'Condensation forms when warm, moist air meets a cold surface — a cold bathroom wall, a window, a cold bedroom corner with poor airflow. Bleaching off the black mould that follows treats what you can see, not what is causing it. The fix is getting the moisture out of the building before it condenses, and stopping the cold spots that give it somewhere to land.',
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
      body: 'Repainting over a mould patch without dealing with the cause means doing it again within a year. Sort the airflow first.',
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
