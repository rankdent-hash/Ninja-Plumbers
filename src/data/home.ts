// Homepage additions (Sept 2026 content round). Copy only: the page markup
// that renders these lives in src/pages/index.astro.
//
// Links: /services/water-through-ceiling, /services/toilet-repair and
// /services/leak-repair are planned pages being written in this round; the
// rest already exist.
//
// Safety copy: 0800 111 999 is the National Gas Emergency Service number
// (public, free). The electrics advice deliberately says to switch off at the
// consumer unit only if it can be reached without standing in water.

export const home = {
  problemFinder: {
    eyebrow: 'Where to start',
    heading: 'What are you dealing with?',
    intro:
      'You don\'t need to know what the part is called. Pick whichever line sounds closest to what\'s happening and you\'ll get the page that covers it — what to check first, and when to ring us.',
    items: [
      {
        label: 'Water is coming through the ceiling',
        hint: 'What to switch off first, and finding where it\'s from',
        href: '/services/water-through-ceiling',
      },
      {
        label: 'No heating or hot water',
        hint: 'Boiler faults diagnosed by Gas Safe registered engineers',
        href: '/services/boiler-repair',
      },
      {
        label: 'Toilet won\'t flush or keeps running',
        hint: 'Cistern and flush faults, including that constant trickle',
        href: '/services/toilet-repair',
      },
      {
        label: 'Drain or sink keeps blocking',
        hint: 'Cleared, then we find out why it keeps happening',
        href: '/services/drain-unblocking',
      },
      {
        label: 'Water pressure has dropped',
        hint: 'One tap or the whole house? That\'s the first clue',
        href: '/services/low-water-pressure',
      },
      {
        label: 'A pipe or joint is dripping',
        hint: 'Leaks you can see, on pipes, valves and fittings',
        href: '/services/leak-repair',
      },
      {
        label: 'Damp patch but no visible leak',
        hint: 'Traced to its source before anything gets opened up',
        href: '/services/leak-detection',
      },
      {
        label: 'Need something fitted',
        hint: 'Bathrooms, boilers, showers, taps and toilets, priced before we start',
        href: '/services',
      },
    ],
  },

  safety: {
    heading: 'The first few minutes',
    items: [
      {
        title: 'You can smell gas',
        body: 'Get everyone outside, opening doors and windows on the way if you can. Don\'t use light switches, the doorbell or anything that could spark, and don\'t light a match or cigarette. Once you\'re out, call the National Gas Emergency Service free on 0800 111 999.',
      },
      {
        title: 'Water is pouring in',
        body: 'Shut the stopcock off — clockwise, like any tap. In a Victorian terrace, try under the kitchen sink first, then near the front door; it\'s sometimes under a hall floorboard or in the cellar. In converted flats, check kitchen units, airing cupboards and behind the bath panel.',
      },
      {
        title: 'Water is near the electrics',
        body: 'Don\'t touch any switch, socket or light that\'s wet, and keep out of rooms where the water is reaching them. If you can get to the fuse box (the consumer unit) without standing in water, turn the main switch off. If you can\'t, leave it alone.',
      },
    ],
    note: 'Once everyone is safe, call us on 020 3576 5825 — emergency callout runs 24/7.',
  },

  faq: {
    heading: 'Things people ask before they book',
    items: [
      {
        q: 'Which parts of London do you cover?',
        a: 'All of Greater London, north and south of the river. Wherever you are, you book through the same office on Fulham High Street. If you\'re near the edge of London, give us your postcode when you ring and we\'ll tell you there and then whether we cover it.',
      },
      {
        q: 'When are you open?',
        a: 'The office is open every day, weekends included, from 7am to 10pm — call then for quotes and everyday bookings. Emergency callout runs 24/7, so for a burst pipe, a flood or no heating in the depths of winter, the same number works through the night.',
      },
      {
        q: 'How do your prices work?',
        a: 'You get a price before any work starts, so you can decide before anything is done. It depends on the job, the parts, how easy the pipes are to reach and whether it\'s out of hours. There is a call-out charge — ask when you ring and we\'ll tell you straight.',
      },
      {
        q: 'Is there a discount for new customers?',
        a: 'Yes. £25 comes off your first call-out with Ninja Plumbers. It\'s for new customers only, on that first visit, and can\'t be combined with any other offer. Mention it when you book so it\'s on the job from the start, not something to sort out on the doorstep.',
      },
      {
        q: 'How can I pay?',
        a: 'Card or cash, whichever is easier on the day. If someone else is paying — a landlord, a relative, a managing agent — tell us when you book, so the engineer knows who has agreed the price and the paperwork goes to the right person.',
      },
      {
        q: 'Is gas work done by Gas Safe registered engineers?',
        a: 'Yes. By law, anyone working on gas boilers, hobs, fires or gas pipework must be on the Gas Safe Register, and our gas work is done by registered engineers. Each carries an ID card listing the gas work they\'re qualified for — you\'re welcome to check it before they start.',
      },
      {
        q: 'Do you work for landlords, managing agents and tenants?',
        a: 'Yes, all three. If you rent, check with your landlord or letting agent before booking non-urgent work — they may have someone already and will usually be paying. In blocks and converted houses, leaks from shared pipework are often the freeholder\'s to fix, so let the managing agent know too.',
      },
      {
        q: 'What should I have ready when I call?',
        a: 'Your postcode, and what\'s going on — a photo on WhatsApp saves a lot of explaining. Know where your stopcock is and whether it turns. Then tell us how we get in: parking or permit bays, entry codes, a concierge or key safe. On plenty of London streets, parking is what slows an engineer down.',
      },
    ],
  },

  guides: {
    eyebrow: 'Guides',
    heading: 'Latest from the blog',
    intro:
      'Plain-English reads on everyday plumbing and heating problems, and the checks you can safely make yourself before anyone comes out.',
  },

  // Replacement lead for the "What we do" section. The current one repeats the
  // no-subcontractor point that the "See us at work" section directly below
  // already makes; this one says what the cards lead to instead.
  // The existing areas intro is fine as it is, so no replacement is offered:
  // keep the current sentence in index.astro.
  intros: {
    services:
      'Small repairs and full installations, done by the same people. Open any of these to see what the job involves and how we go about it.',
  } as { services: string; areas?: string },
};
