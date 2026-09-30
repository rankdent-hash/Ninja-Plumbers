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
    metaTitle: 'Damp Survey London | Diagnosis & Report | Ninja Plumbers',
    metaDescription:
      'Damp in a London home? Ninja Plumbers finds what is really causing it and puts the findings in a written report before suggesting any treatment. 020 3576 5825.',
    eyebrow: 'Survey first',
    icon: 'water',
    target: 'damp survey (2,900/mo)',
    summary:
      'We pin down which type of damp you have, and where the moisture comes from, before Ninja Plumbers suggests any treatment.',
    intro:
      'Condensation, rising damp and penetrating damp can leave much the same mark on a wall. Each one calls for a different remedy, though, and a wrong guess spends your money while the real fault carries on. Our survey combines moisture meter readings with a close visual check and, when it helps, a look at the outside of the building for the source. You get a written report first. Treatment is only discussed after that.',
    does: [
      'Visual inspection backed by moisture meter readings',
      'Telling rising damp, penetrating damp and condensation apart',
      'Finding the outside cause — guttering, render, ground level, DPC',
      'A written report setting out findings and the action we advise',
      'Damp surveys for buyers before they purchase',
      'An independent second look at a damp report you already hold',
    ],
    guidance: [
      {
        title: 'No survey means the damp-proofing quote is guesswork',
        body: 'When a firm names a fixed price for a damp-proof course without looking at the property, you are being sold to, not diagnosed. Rising damp, penetrating damp and condensation each need their own treatment. Pick the wrong one and nothing gets better.',
      },
      {
        title: 'Meter readings only mean something once they are interpreted',
        body: 'Paint, plaster and certain modern materials can show "damp" on a surface meter even when no water is getting in at all. So one number proves very little. The useful clues are the pattern of readings, how high they reach and whether an outside fault lines up with them.',
      },
      {
        title: 'Rising damp gets diagnosed far more often than it occurs',
        body: 'Plenty of older buildings have no damp-proof course and stay sound for decades. Much of the damp called rising damp turns out to be penetrating damp from a fault higher up, or condensation caused by weak ventilation. Both cost less to put right and are simpler to stop coming back.',
      },
      {
        title: 'One pre-purchase survey can cover its own cost',
        body: 'If a survey on a period home overlooks damp, you find the bill after completion. Booking a separate damp survey to sit beside your building survey costs little compared with that risk.',
      },
    ],
    aside: {
      title: 'The survey and the treatment are kept apart',
      body: 'First, the survey shows what is really wrong with the wall. What to do next, and whether Ninja Plumbers is the one to do it, is a separate choice you make later. It is never folded into the survey visit.',
    },
    faqs: [
      {
        q: 'How long will the survey take?',
        a: 'For one property, usually between an hour and ninety minutes. It depends on how many rooms show damp and whether we also need to check the outside walls.',
      },
      {
        q: 'Is there a charge for the survey if I decide against treatment?',
        a: 'Yes, because the survey is its own service with its own price. Having it done does not tie you to any further work.',
      },
      {
        q: 'Can you survey a home I am thinking of buying?',
        a: 'Yes. There is no need to wait until exchange, and plenty of buyers book it at the offer stage, next to their building survey.',
      },
      {
        q: 'Another company has already given me a damp report. Will you review it?',
        a: 'Yes. People often ask us for a second opinion on a report or a treatment quote, and we are happy to give one.',
      },
    ],
    related: ['general-plumbing', 'leak-detection'],
  },

  {
    slug: 'damp-proofing-and-penetrating-damp',
    title: 'Penetrating Damp & Damp Proofing',
    h1: 'Penetrating damp treatment and damp proofing in London',
    metaTitle: 'Damp Proofing & Penetrating Damp London | Ninja Plumbers',
    metaDescription:
      'Ninja Plumbers treats penetrating damp and carries out damp proofing across London, curing the fault where it starts rather than hiding it. Call 020 3576 5825.',
    eyebrow: 'Fixing the cause',
    icon: 'water',
    target: 'damp proofing (5,400/mo) · penetrating damp (1,600/mo)',
    summary:
      'We follow penetrating damp back to the outside fault that lets water in, instead of covering up the mark on the inside wall.',
    intro:
      'Penetrating damp pushes sideways into a wall, and a particular defect is always to blame. It might be cracked render, a gutter spilling down the brickwork, pointing that has crumbled, or soil heaped above the damp-proof course. The cure is to locate that fault and repair it. Painting a waterproof layer on the inside and hoping it holds does not solve anything.',
    does: [
      'Finding and repairing where water gets in from outside',
      'Installing new damp-proof courses and repairing old ones',
      'Repointing, render repairs and fixing other defects',
      'Replastering inside with the right system once the cause is fixed',
      'Correcting ground levels and drainage next to a wall',
      'Gutter and downpipe faults that lead to penetrating damp',
    ],
    guidance: [
      {
        title: 'Coat the inside without curing the cause and the damp simply moves',
        body: 'Waterproof paint or tanking on an inside wall hides the mark, yet water keeps coming in. Often it spreads sideways and appears in a fresh spot. Deal with the outside defect before anything else.',
      },
      {
        title: 'Faulty guttering tops the list of causes',
        body: 'When a leaking or blocked gutter sends water down an outside wall for months, the result looks just like what people call rising damp. Looking at the gutter above the damp patch is free and rules out the most frequent culprit.',
      },
      {
        title: 'The height of the ground matters more than you might think',
        body: 'Build a patio, path or flower bed up a wall past the damp-proof course and it bridges the course, so moisture from the soil passes straight into the bricks above. Sometimes lowering that ground is the real fix, with no work on the wall at all.',
      },
      {
        title: 'New plaster needs a dry wall and the correct system',
        body: 'Plaster a wall before it has dried out, or use standard plaster where a breathable or salt-retardant system is called for, and the damp comes back. We agree this within the job instead of leaving it to the decorator or tiler who follows.',
      },
    ],
    aside: {
      title: 'Outside repairs cost less than redoing the inside',
      body: 'Repairing pointing, render or guttering on the outside is normally the cheaper route. If you replaster indoors while the true cause is still there, you end up paying for that job a second time.',
    },
    faqs: [
      {
        q: 'What is the difference between penetrating damp and rising damp?',
        a: 'Penetrating damp enters sideways through one particular defect and may show at any height. Rising damp climbs from the ground up through the wall, and only as far as groundwater can wick, which is normally less than a metre.',
      },
      {
        q: 'Once the cause is fixed, will the mark on my wall disappear?',
        a: 'Give the wall time to dry. That can take weeks, depending on how thick it is and how long it stayed wet. Decorate too early and the moisture still inside gets trapped under the new finish.',
      },
      {
        q: 'Can you fit a damp-proof course?',
        a: 'Yes. We install new ones and repair existing ones that have failed or been bridged.',
      },
      {
        q: 'Is it safe to leave it, or will it get worse?',
        a: 'Penetrating damp usually worsens if ignored. Timber can suffer and the wet area of wall spreads. Once it has been identified, fixing it is better than keeping an eye on it.',
      },
    ],
    related: ['general-plumbing', 'leak-detection'],
  },

  {
    slug: 'condensation-and-ventilation-control',
    title: 'Condensation Control & Ventilation',
    h1: 'Condensation control and ventilation in London',
    metaTitle: 'Condensation Control London | Ventilation | Ninja Plumbers',
    metaDescription:
      'We tackle condensation and mould at the source across London with extractor fans, trickle vents and better ventilation, not cleaning. Call 020 3576 5825.',
    eyebrow: 'Airflow and ventilation',
    icon: 'water',
    target: 'condensation control (480/mo)',
    summary:
      'Misted windows and black mould nearly always point to poor ventilation rather than a need for cleaning, so Ninja Plumbers fixes what causes them.',
    intro:
      'Condensation forms when warm, damp air hits something cold, such as a window, a bathroom wall or a bedroom corner with little airflow. Scrubbing off the black mould that grows there deals only with the visible part and leaves the cause in place. A lasting fix has two parts. Remove the moisture from the house before it can condense, and get rid of the cold spots where it collects.',
    does: [
      'Fitting and repairing extractor fans in kitchens and bathrooms',
      'Upgrading to fans run by a humidity sensor or timer',
      'Positive input ventilation (PIV) systems',
      'Checking trickle vents and passive ventilation',
      'Finding cold spots and cold bridging that cause condensation',
      'Mould treatment after the ventilation fix, never in place of it',
    ],
    guidance: [
      {
        title: 'Moisture causes black mould, and the mould is only the sign',
        body: 'Wipe mould away but leave the humidity behind it, and it is back within weeks. So each job begins by asking why the air is so damp, before any surface gets treated.',
      },
      {
        title: 'The trouble is often a fan that stops when the light goes off',
        body: 'After a shower finishes, steam hangs in the air for quite some time. A fan with a humidity sensor, or a timer that keeps it going once the light is off, clears that moisture instead of cutting out with the switch.',
      },
      {
        title: 'Washing dried indoors adds a lot of avoidable moisture',
        body: 'Just one load of laundry dried inside puts a surprisingly large amount of water into the air. With no garden or tumble dryer, that moisture has to be taken out by good extraction or a dehumidifier. Keeping the window shut does the opposite.',
      },
      {
        title: 'Trickle vents are often painted shut without anyone noticing',
        body: 'The small vents in window frames are regularly painted or sealed during decorating, which quietly takes away the background airflow the room was designed to rely on. It takes two minutes to check they still open, and it is worth doing.',
      },
    ],
    aside: {
      title: 'Sort out ventilation before decorating',
      body: 'If you paint over mould without dealing with its cause, you will probably be repainting within a year. Put the airflow right first and decorate afterwards.',
    },
    faqs: [
      {
        q: 'How can I tell condensation apart from penetrating or rising damp?',
        a: 'Condensation tends to form on cold surfaces such as windows, north-facing walls and corners where air barely moves. It gets worse in cold spells and with cooking, showers or laundry drying. If it is not clear, a damp survey will decide it.',
      },
      {
        q: 'Is a dehumidifier enough by itself?',
        a: 'In the short term it helps, but it leaves the ventilation problem untouched. Running one all the time also works out dearer over the years than sorting the extraction properly.',
      },
      {
        q: 'Does fitting a new extractor fan also mean calling an electrician?',
        a: 'Only when the job needs new wiring or a switched supply that is not there yet. Plenty of replacement fans run off the existing wiring and are a simple swap.',
      },
      {
        q: 'Do you treat mould as well as fixing the ventilation?',
        a: 'Yes, though only together with the ventilation fix. Mould treatment on its own gives a short-lived result, and we will tell you that instead of selling it as a separate job.',
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
