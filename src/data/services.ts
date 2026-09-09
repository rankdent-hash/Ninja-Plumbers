// One entry per service page. Drives /services, /services/[slug], the nav
// dropdown and the footer, so those can never drift out of sync.
//
// Search volumes in the `target` field are UK monthly figures from Semrush,
// recorded when these pages were written. They are there to explain why each
// page exists and what its H1 is aimed at — not to be published.

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;          // short label: nav, cards, footer
  h1: string;             // page heading, keyword-led
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  icon: string;
  target: string;         // why this page exists
  summary: string;        // card copy on the hub
  intro: string;          // lead paragraph on the page
  does: string[];
  guidance: { title: string; body: string }[];
  aside: { title: string; body: string };
  faqs: Faq[];
  // Types of premises this service covers, where they differ enough to be
  // worth spelling out. Only commercial work uses this so far: the three
  // spaces below were measured as standalone pages and had no search behind
  // them (see rejected.ts), but they are what commercial callers ask about.
  spaces?: { title: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: 'emergency-plumbing',
    title: 'Emergency Plumbing',
    h1: 'Emergency plumber in London',
    metaTitle: 'Emergency Plumber London | 24/7 Callout | Tamesis Plumbers',
    metaDescription:
      'Emergency plumber covering London, 24 hours a day. Burst pipes, major leaks, no water and overflowing toilets. Gas Safe registered. Call 020 3488 3737.',
    eyebrow: '24/7 callout',
    icon: 'emergency',
    target: 'emergency plumber london (2,400/mo) · emergency plumber (12,100/mo)',
    summary:
      'Burst pipes, major leaks and no water. We take calls around the clock and get an engineer moving.',
    intro:
      'A burst pipe, water coming through a ceiling, or no water at all. Plumbing emergencies do not wait for office hours, so neither does the booking line. Call and we will tell you what to do while an engineer is on the way.',
    does: [
      'Burst and leaking pipes',
      'Water shut-off and damage limitation',
      'Leaks coming through ceilings and walls',
      'Overflowing toilets and failed stopcocks',
      'No water, or a sudden loss of pressure',
      'Out of hours, weekends and bank holidays',
    ],
    guidance: [
      {
        title: 'Water is pouring in',
        body: 'Turn off the stopcock. In most London homes it is under the kitchen sink, in a downstairs cupboard, or near the front door in a flat. Turn it clockwise until it stops. Then open the cold taps to drain the pipes. This is the single thing that most limits the damage.',
      },
      {
        title: 'Water is coming through a ceiling',
        body: 'Do not stand under a bulging ceiling and do not touch light fittings in the room. If water is anywhere near electrics, turn the power off at the consumer unit and leave it off. Then call.',
      },
      {
        title: 'You cannot find the leak',
        body: 'Turn the stopcock off and watch the water meter if you have one. If it keeps ticking, the leak is before the stopcock and is likely the water company’s responsibility rather than yours. Tell us that when you call and it saves everyone a trip.',
      },
      {
        title: 'No water at all',
        body: 'Check whether the neighbours have water before calling us. If the whole street is out it is a mains problem for Thames Water, not something a plumber can fix, and we will say so rather than charge you for a visit.',
      },
    ],
    aside: {
      title: 'Know where your stopcock is',
      body: 'Find it now, while nothing is wrong, and check it actually turns. A seized stopcock is a common and expensive discovery to make at two in the morning.',
    },
    faqs: [
      {
        q: 'Do you really answer at night?',
        a: 'Emergency callout is available 24/7. The office is open Monday to Friday, 8:00 to 17:30, and outside those hours the booking line goes to whoever is on call.',
      },
      {
        q: 'What counts as an emergency?',
        a: 'Anything where water is actively causing damage, or where you have no water or no heating and cannot wait. A dripping tap is not an emergency, and we would rather book that in normally than charge you emergency rates for it.',
      },
      {
        q: 'How much does an emergency callout cost?',
        a: 'We give you a price before an engineer starts work, including out of hours. What we will not do is start the job and tell you the cost afterwards.',
      },
      {
        q: 'Should I call or use the form?',
        a: 'For an emergency, call. The form is checked during office hours and is better suited to quotes and non-urgent work.',
      },
    ],
  },

  {
    slug: 'boiler-repair',
    title: 'Boiler Repair',
    h1: 'Boiler repair in London',
    metaTitle: 'Boiler Repair London | Gas Safe Engineers | Tamesis Plumbers',
    metaDescription:
      'Gas Safe registered boiler repair across London. Breakdowns diagnosed properly and honest advice on repair versus replacement. Call 020 3488 3737.',
    eyebrow: 'Heating and hot water',
    icon: 'boiler',
    target: 'boiler repair london (1,600/mo)',
    summary:
      'No heat, no hot water, or a boiler locked out on a fault code. Diagnosed first, then fixed.',
    intro:
      'No heating, no hot water, or a boiler that has locked out and is showing a fault code. We diagnose the fault before quoting, then tell you straight whether a repair or a replacement is the better spend — with both numbers, so you decide rather than being steered.',
    does: [
      'Breakdown diagnosis and fault finding',
      'Boilers locked out on a fault code',
      'No heating or no hot water',
      'Central heating and radiator faults',
      'Thermostats and heating controls',
      'Pressure loss and repeated refilling',
    ],
    guidance: [
      {
        title: 'Before you call, check three things',
        body: 'Is the pressure gauge between roughly 1 and 1.5 bar? Is the thermostat calling for heat? Has the gas gone off elsewhere in the house, for example the hob? Two of the three most common callouts are low pressure and a thermostat problem, and both are worth ruling out first.',
      },
      {
        title: 'Fault codes are worth photographing',
        body: 'If your boiler is showing a code on its display, take a photo and send it on WhatsApp with the make and model. It often tells the engineer what part to bring, which is the difference between one visit and two.',
      },
      {
        title: 'Repair or replace',
        body: 'A boiler over about twelve years old, needing an expensive part, is usually worth replacing rather than repairing. Under that, a repair normally wins. We will give you both numbers and let you decide.',
      },
      {
        title: 'Pressure that keeps dropping',
        body: 'A boiler you have to refill every few weeks is losing water somewhere. That is a leak on the system or a failed expansion vessel, not something topping up will fix — and it is worth finding before it stains a ceiling.',
      },
    ],
    aside: {
      title: 'Gas Safe registered',
      body: 'Gas work is carried out by Gas Safe registered engineers. Ask to see the card on the doorstep. Any engineer worth having will be glad to show it, and you are entitled to ask.',
    },
    faqs: [
      {
        q: 'Is my boiler worth repairing?',
        a: 'It depends on age and the part that has failed. We will quote for both the repair and a replacement so you can compare the two honestly, rather than being told only one number.',
      },
      {
        q: 'My boiler is showing a fault code. What does it mean?',
        a: 'Codes differ by manufacturer, so we would rather see it than guess. Send a photo of the display with the make and model on WhatsApp and we can usually tell you what is likely before an engineer sets off.',
      },
      {
        q: 'Why does my boiler keep losing pressure?',
        a: 'Usually a leak somewhere on the system or a failed expansion vessel. Repeatedly topping it up masks the problem rather than fixing it, and a slow leak in a ceiling void gets expensive.',
      },
      {
        q: 'Are your engineers Gas Safe registered?',
        a: 'Yes. Gas work is legally required to be carried out by a Gas Safe registered engineer, and ours are.',
      },
    ],
  },
  {
    slug: 'boiler-service',
    title: 'Boiler Service',
    h1: 'Boiler service in London',
    metaTitle: 'Boiler Service London | Annual Servicing | Tamesis Plumbers',
    metaDescription:
      'Annual boiler service across London by Gas Safe registered engineers. Safety checks, cleaning and maintenance to keep your warranty valid. Call 020 3488 3737.',
    eyebrow: 'Heating and hot water',
    icon: 'boiler',
    target: 'boiler service london (1,900/mo)',
    summary:
      'The annual check that keeps a boiler safe, efficient and inside its warranty terms.',
    intro:
      'An annual service is the cheapest thing you can do for a boiler. It catches the parts that are on their way out before they strand you in January, and most manufacturer warranties require it — a skipped service is one of the commonest reasons a warranty claim gets refused.',
    does: [
      'Annual boiler service and safety check',
      'Combustion analysis and flue check',
      'Cleaning and component inspection',
      'Seals, pressures and controls checked',
      'Servicing to keep manufacturer warranties valid',
      'Service records for landlords and managing agents',
    ],
    guidance: [
      {
        title: 'Book it before the cold, not during it',
        body: 'Everyone discovers their boiler has a problem on the first genuinely cold week of the year, which is exactly when engineers are hardest to get. A service in late summer or early autumn costs the same and is far easier to book.',
      },
      {
        title: 'A service is not the same as a repair',
        body: 'A service is an inspection and clean. If it finds a failed part, replacing that part is separate work and we will price it before doing anything. Nobody should be presenting you with a bill you did not agree to.',
      },
      {
        title: 'Keep the paperwork',
        body: 'Manufacturers ask for evidence of annual servicing when a warranty claim is made. Keep the record somewhere you can find it — the difference between a free repair and a paid one can be a piece of paper.',
      },
      {
        title: 'What a service will not tell you',
        body: 'A service checks the boiler, not the whole system. If your radiators are cold at the bottom or the system is full of sludge, that is a separate problem and needs a flush rather than a service.',
      },
    ],
    aside: {
      title: 'Gas Safe registered',
      body: 'Servicing on a gas appliance is carried out by Gas Safe registered engineers. Ask to see the card on the doorstep — you are entitled to.',
    },
    faqs: [
      {
        q: 'How often should a boiler be serviced?',
        a: 'Once a year. Most manufacturer warranties require it, and a service that has been skipped is a common reason a warranty claim gets refused.',
      },
      {
        q: 'How long does a boiler service take?',
        a: 'Usually under an hour for a straightforward domestic boiler, longer if the engineer finds something that needs investigating. We would rather take the extra time than sign off something that is not right.',
      },
      {
        q: 'What is the difference between a service and a repair?',
        a: 'A service is a scheduled inspection and clean. A repair fixes a specific fault. If a service turns up a failed part, we price that separately and get your agreement before replacing it.',
      },
      {
        q: 'Do you service boilers you did not install?',
        a: 'Yes. It makes no difference to us who fitted it.',
      },
    ],
  },
  {
    slug: 'boiler-installation',
    title: 'Boiler Installation',
    h1: 'Boiler installation in London',
    metaTitle: 'Boiler Installation London | New Boilers | Tamesis Plumbers',
    metaDescription:
      'New boiler installation across London by Gas Safe registered engineers. System sizing, a clear quote and the old unit removed. Call 020 3488 3737.',
    eyebrow: 'Heating and hot water',
    icon: 'boiler',
    target: 'boiler installation london (1,600/mo) · combi boiler installation london (170)',
    summary:
      'A new boiler sized for the property, fitted properly, with the price agreed first.',
    intro:
      'Putting a new boiler into a property — whether that is a first installation, a change of system type, or moving the boiler somewhere more sensible. The important decisions happen before anything is fitted: what size, what type, and where it goes.',
    does: [
      'New boiler supply and installation',
      'Combi, system and heat-only boilers',
      'Converting between system types',
      'Relocating a boiler to a better position',
      'Flue routing and condensate arrangements',
      'Old unit removed and taken away',
    ],
    guidance: [
      {
        title: 'Size matters more than brand',
        body: 'A boiler too big for the property cycles on and off and wears itself out; one too small never quite keeps up. The right size depends on the number of radiators, bathrooms and occupants, not on what was there before — the previous boiler may well have been the wrong size too.',
      },
      {
        title: 'Combi is not automatically the answer',
        body: 'A combi suits most flats and smaller houses. A house with two or more bathrooms in simultaneous use is usually better on a system boiler with a cylinder, because a combi cannot serve two showers at once without both suffering.',
      },
      {
        title: 'Where it goes is a real decision',
        body: 'Moving a boiler adds pipework and flue routing but often solves problems that would otherwise persist for years — noise in a bedroom wall, a flue terminating somewhere it should not, or a unit buried behind a fitted kitchen where servicing means dismantling cupboards.',
      },
      {
        title: 'Listed and conservation properties',
        body: 'Where a flue can terminate is constrained in listed buildings and conservation areas, and it is worth establishing that before choosing a boiler rather than after. We look at this first in parts of London where it comes up often.',
      },
    ],
    aside: {
      title: 'Price agreed before we start',
      body: 'You get the figure before anything is disconnected, including removal of the old unit. If something unexpected turns up behind the old boiler we tell you before carrying on, not afterwards.',
    },
    faqs: [
      {
        q: 'How long does a boiler installation take?',
        a: 'A straightforward like-for-like swap is usually a day. Changing system type, or moving the boiler, typically takes two. We will tell you which yours is when we quote.',
      },
      {
        q: 'Should I get a combi or a system boiler?',
        a: 'Combi for most flats and smaller houses. System boiler with a cylinder if you have two or more bathrooms likely to be in use at once, because a combi cannot supply two showers properly at the same time.',
      },
      {
        q: 'Can you move the boiler somewhere else?',
        a: 'Usually yes. It adds pipework and flue routing to the job, but it is often worth it — particularly to get a boiler out of a bedroom wall or out from behind fitted kitchen units.',
      },
      {
        q: 'Do you take the old boiler away?',
        a: 'Yes, removal and disposal of the old unit is part of the job and is included in the figure we quote.',
      },
    ],
  },
  {
    slug: 'boiler-replacement',
    title: 'Boiler Replacement',
    h1: 'Boiler replacement in London',
    metaTitle: 'Boiler Replacement London | New Boiler Quotes | Tamesis Plumbers',
    metaDescription:
      'Boiler replacement across London. Honest advice on whether yours is worth replacing, a clear quote, and the old unit removed. Call 020 3488 3737.',
    eyebrow: 'Heating and hot water',
    icon: 'boiler',
    target: 'boiler replacement london (480/mo) · new boiler london (260)',
    summary:
      'Replacing a boiler that has reached the end, with a straight answer on whether it has.',
    intro:
      'Replacing a boiler that is past economic repair, unreliable, or expensive to run. The first question is whether it actually needs replacing — plenty of boilers get condemned by whoever wants to sell a new one. We will tell you if yours has years left in it.',
    does: [
      'Replacing an old or failed boiler',
      'Repair-versus-replace assessment, with both figures',
      'Like-for-like swaps and system changes',
      'Replacing boilers no longer supported by parts',
      'Old unit removed and taken away',
      'Advice on sizing the replacement correctly',
    ],
    guidance: [
      {
        title: 'When replacement is genuinely the better spend',
        body: 'Broadly: the boiler is over about twelve years old, the failed part is an expensive one, or parts are no longer available for the model. Below that threshold, a repair usually wins — and we will say so even though the replacement is the bigger job.',
      },
      {
        title: 'Get both numbers before deciding',
        body: 'Any quote for a replacement should sit next to the cost of repairing what you have. If nobody has offered you the repair figure, ask for it. A decision made on one number is not a decision.',
      },
      {
        title: 'Do not just replace like for like',
        body: 'A replacement is the one chance to correct a boiler that was the wrong size, the wrong type, or in the wrong place. If the old one never quite kept up, or was buried somewhere awkward, fitting the same thing again repeats the problem.',
      },
      {
        title: 'Parts availability is a real factor',
        body: 'Some boilers are perfectly serviceable but no longer supported. If a common failure on your model can no longer be sourced, that changes the maths regardless of how old the unit is.',
      },
    ],
    aside: {
      title: 'We will tell you not to',
      body: 'If your boiler is worth repairing, we will say so. A replacement is a bigger job for us and a much bigger bill for you, and recommending one you do not need is how a company gets one job instead of twenty years of them.',
    },
    faqs: [
      {
        q: 'How do I know if my boiler needs replacing?',
        a: 'Age, the cost of the part that has failed, and whether parts are still available. Over roughly twelve years old with an expensive failure usually points to replacement; under that, repair normally wins.',
      },
      {
        q: 'Will you quote for a repair as well?',
        a: 'Yes, always, where a repair is possible. You should be comparing two numbers, not being handed one.',
      },
      {
        q: 'Can I put the new boiler somewhere different?',
        a: 'Yes, and a replacement is the natural moment to do it. Moving it adds pipework and flue work to the job, but it is often the fix for a problem you have lived with for years.',
      },
      {
        q: 'Do I need the same type of boiler I have now?',
        a: 'No. A replacement is a good point to reconsider — a house that has grown a second bathroom since the last boiler went in may be better on a system boiler and cylinder than on another combi.',
      },
    ],
  },
  {
    slug: 'drain-unblocking',
    title: 'Drain Unblocking',
    h1: 'Drain unblocking in London',
    metaTitle: 'Drain Unblocking London | Blocked Drains | Tamesis Plumbers',
    metaDescription:
      'Blocked drains, toilets, sinks and showers cleared across London using rods, jetting and CCTV. We tell you what caused it. Call 020 3488 3737.',
    eyebrow: 'Drainage',
    icon: 'drain',
    target: 'drain unblocking london (1,000) · blocked drain london (590) · blocked toilet london (480)',
    summary:
      'Sinks, toilets and outside drains cleared with proper equipment, not a bottle of chemicals.',
    intro:
      'Slow sinks, a toilet that will not clear, or a drain backing up outside. We clear it with rods and jetting equipment, and where the cause is not obvious a drain camera finds it before we start guessing.',
    does: [
      'Blocked sinks, baths and showers',
      'Blocked toilets and soil stacks',
      'External drains, gullies and manholes',
      'High-pressure jetting',
      'CCTV drain surveys',
      'Recurring blockages traced to their cause',
    ],
    guidance: [
      {
        title: 'Please do not use caustic drain cleaner',
        body: 'It rarely clears a real blockage, it damages older pipework, and it means an engineer is reaching into a trap full of caustic liquid. If you have already poured some in, say so when you call so we come prepared.',
      },
      {
        title: 'A blocked toilet, first move',
        body: 'Stop flushing. Each flush adds more water to a pan that cannot drain and is how a blockage becomes a flood. If the water level is dropping slowly on its own, it is a partial blockage and can usually wait for a normal appointment.',
      },
      {
        title: 'More than one thing draining slowly',
        body: 'If the sink, bath and toilet are all slow at once, the blockage is in the shared soil stack or the drain outside, not under any one fixture. That is useful to know before anyone starts taking a trap apart.',
      },
      {
        title: 'If it keeps coming back',
        body: 'A drain that blocks repeatedly has a reason: root ingress, fat build-up, a collapsed section, or a badly laid pipe. Clearing it again and again costs more over a year than surveying it once and fixing the cause.',
      },
    ],
    aside: {
      title: 'We will tell you what caused it',
      body: 'Clearing a blockage and saying nothing is easy. We would rather show you what came out and what we found, so you can decide whether the underlying problem is worth fixing.',
    },
    faqs: [
      {
        q: 'Who is responsible for the drain, me or the water company?',
        a: 'Broadly, pipework inside your property boundary is yours, and the shared sewer beyond it is Thames Water’s. We will tell you which side of that line the problem is on, and if it is theirs we will say so rather than charge you to fix it.',
      },
      {
        q: 'Do you do CCTV surveys?',
        a: 'Yes, for recurring blockages, for pre-purchase checks, and where an insurer wants evidence of what is actually wrong.',
      },
      {
        q: 'Can you clear a blocked toilet the same day?',
        a: 'Usually. Call the booking line and describe what is happening and we will tell you honestly when we can get to you.',
      },
      {
        q: 'What about drains in a block of flats?',
        a: 'We work on shared stacks and communal drainage for managing agents and freeholders. Speak to the management line for that work.',
      },
    ],
  },

  {
    slug: 'leak-detection',
    title: 'Leak Detection',
    h1: 'Leak detection in London',
    metaTitle: 'Leak Detection London | Hidden Water Leaks | Tamesis Plumbers',
    metaDescription:
      'Non-invasive leak detection across London. Damp patches, rising water bills and hidden pipe leaks traced before anything is opened up. Call 020 3488 3737.',
    eyebrow: 'Detection',
    icon: 'leak',
    target: 'leak detection london (1,000, low competition) · water leak detection (2,900)',
    summary:
      'Hidden leaks traced with acoustic and thermal equipment, before floors come up.',
    intro:
      'A damp patch that keeps returning, a stain creeping across a ceiling, or a water bill that has climbed with no explanation. We find the source first, so the repair is targeted rather than exploratory.',
    does: [
      'Hidden pipe leaks under floors and behind walls',
      'Damp and water-damage investigation',
      'Unexplained increases in water usage',
      'Leaks under solid and tiled floors',
      'Heating system pressure loss',
      'Pre-purchase and pre-refurbishment checks',
    ],
    guidance: [
      {
        title: 'The meter test',
        body: 'Turn off every tap and appliance, then read your water meter. Leave it an hour with nothing running and read it again. If it has moved, you have a leak somewhere on your supply. That one test tells us a great deal before we arrive.',
      },
      {
        title: 'Losing boiler pressure',
        body: 'A boiler that needs topping up every few weeks is usually leaking somewhere in the heating circuit, often a pinhole in pipework under a floor. It is worth finding, because it corrodes the system from the inside as it refills.',
      },
      {
        title: 'A damp patch is rarely above the leak',
        body: 'Water travels along joists and under floors before it appears. The stain on your ceiling is often nowhere near the failed pipe, which is exactly why guessing and cutting is such an expensive way to find it.',
      },
      {
        title: 'Talk to your insurer first',
        body: 'Many home insurance policies cover trace and access, meaning the cost of finding the leak and making good afterwards. Worth a call before booking the work, and we can provide a report if they want one.',
      },
    ],
    aside: {
      title: 'Find it before you open it up',
      body: 'Acoustic and thermal methods locate a leak without lifting floors on a hunch. You pay to fix the pipe, rather than to make good three holes in the wrong places.',
    },
    faqs: [
      {
        q: 'Will you have to lift my floor?',
        a: 'Detection itself is non-invasive. Once the leak is located, the repair may need access at that one point, but that is a targeted opening rather than exploratory work across a room.',
      },
      {
        q: 'How accurate is it?',
        a: 'Acoustic and thermal equipment will normally narrow a leak down to a small area. Nothing is perfect through solid concrete, and we will tell you honestly if a site is difficult rather than overpromising.',
      },
      {
        q: 'My water bill has doubled. Is that a leak?',
        a: 'Very often, yes, particularly if usage has not changed. Do the meter test above and tell us the result when you call.',
      },
      {
        q: 'Can you give me a report for my insurer?',
        a: 'Yes. Tell us at the point of booking that you need one, so the engineer documents the job properly on the visit.',
      },
    ],
  },

  {
    slug: 'bathroom-installation',
    title: 'Bathroom Installation',
    h1: 'Bathroom installation in London',
    metaTitle: 'Bathroom Fitters London | Installation | Tamesis Plumbers',
    metaDescription:
      'Bathroom installation across London, from swapping a single toilet to a full refit, en-suite or wet room. Priced before work starts. Call 020 3488 3737.',
    eyebrow: 'Installation',
    icon: 'bathroom',
    target: 'bathroom fitters london (1,000) · bathroom installation london (720)',
    summary:
      'A single fixture swap through to a full strip-out and refit, priced up front.',
    intro:
      'Swapping a tired toilet or basin, or stripping a bathroom back to brick and starting again. We handle the plumbing and coordinate the trades that follow, so you are not project managing it yourself.',
    does: [
      'Full bathroom and en-suite refits',
      'Bath, shower and toilet installation',
      'Wet rooms and level-access showers',
      'Accessible and mobility bathrooms',
      'Basins, vanity units and heated towel rails',
      'Bidets and bidet taps, plumbed and waste-connected',
      'Tiling and finishing coordination',
    ],
    guidance: [
      {
        title: 'Check your water pressure before choosing a shower',
        body: 'A powerful-looking mixer shower on a low-pressure gravity system will disappoint you. Tell us what system you have and we will tell you what will actually perform, before you buy anything.',
      },
      {
        title: 'Moving the toilet is the expensive decision',
        body: 'Relocating a WC means moving the soil connection, which drives cost more than almost any other change. Keeping it where it is, and moving everything else around it, is usually the better value layout.',
      },
      {
        title: 'Order everything before we start',
        body: 'The most common reason a bathroom overruns is a back-ordered item discovered halfway through. Have the suite, tiles and brassware on site before day one and the job runs to plan.',
      },
      {
        title: 'Flats have extra rules',
        body: 'If you are in a leasehold flat, check your lease before committing. Many require freeholder consent for bathroom work, and some restrict working hours or ban moving wet areas over habitable rooms below.',
      },
    ],
    aside: {
      title: 'Priced before we start',
      body: 'The scope and the price are agreed with you before anyone lifts a floorboard. If something behind the wall changes the job, we stop and talk to you rather than press on and bill for it afterwards.',
    },
    faqs: [
      {
        q: 'How long does a bathroom take?',
        a: 'It depends entirely on the scope and the condition of what is behind the existing one. We will give you a realistic timescale with the quote, and tell you what could extend it.',
      },
      {
        q: 'Do you supply the bathroom, or do I?',
        a: 'Either. Many customers prefer to choose and buy their own suite and have us fit it, and that is completely fine.',
      },
      {
        q: 'Do you tile as well?',
        a: 'We handle the plumbing and coordinate tiling and finishing as part of the job, so it is one point of contact rather than several.',
      },
      {
        q: 'Can I use the bathroom while the work is happening?',
        a: 'For a full refit, no, not for the duration. That is worth planning for if it is the only bathroom in the property, and we will be straight with you about how long that will be.',
      },
    ],
  },

  {
    slug: 'toilet-installation',
    title: 'Toilet Installation',
    h1: 'Toilet installation in London',
    metaTitle: 'Toilet Installation London | New & Replacement WCs | Tamesis Plumbers',
    metaDescription:
      'Toilet installation and replacement across London: close-coupled, back-to-wall, wall-hung and concealed cisterns. Call 020 3488 3737.',
    eyebrow: 'New and replacement WCs',
    icon: 'bathroom',
    target: 'toilet plumber (480/mo) · new toilet installation (110/mo) · toilet installation london (90/mo)',
    summary:
      'A new toilet fitted, an old one swapped, or a WC moved to somewhere it has never been.',
    intro:
      'Replacing a toilet is usually a morning’s work. Moving one, fitting a wall-hung pan on a frame, or putting a WC where there has never been a soil connection is a different job with different questions — and it is worth asking them before the suite is bought rather than after it arrives.',
    does: [
      'New and replacement toilets, supplied or your own',
      'Close-coupled, back-to-wall and wall-hung pans',
      'Concealed cisterns and support frames',
      'Moving a toilet to a new position',
      'Soil pipe and waste alterations',
      'Cloakroom and en-suite WCs',
      'Flush mechanism and cistern repairs, no new suite needed',
    ],
    guidance: [
      {
        title: 'Measure before you buy the suite',
        body: 'The distance from the wall to the centre of the waste, and the height and width of the cistern, decide whether a given toilet fits your existing pipework. Photograph the current one from the side and send it with the model you are considering, and we can tell you before you order.',
      },
      {
        title: 'Wall-hung means a frame and a wall that can take it',
        body: 'The pan hangs off a steel frame carrying the weight, not off the plasterboard. It looks better and cleans more easily, and it takes up more space behind than people expect. In a small cloakroom that is the deciding factor.',
      },
      {
        title: 'Concealed cisterns still need access',
        body: 'Everything behind the panel will need reaching one day — the flush valve and the inlet valve are the parts that fail. An access panel is not optional, and tiling over the whole thing is a decision that gets undone expensively.',
      },
      {
        title: 'A rocking toilet will leak eventually',
        body: 'Movement works the waste seal loose over months, and by the time it shows on the ceiling below it has usually been going a while. If yours moves when you sit down, it is worth dealing with now.',
      },
    ],
    aside: {
      title: 'It may only need a part',
      body: 'A toilet that runs, will not flush or fills slowly is very often a flush valve or an inlet valve rather than a new suite. We will tell you that even though it is the smaller job.',
    },
    faqs: [
      {
        q: 'Can you fit a toilet I have already bought?',
        a: 'Yes, and most people do. Send us the model beforehand so we can check the waste position and whether any adaptors are needed.',
      },
      {
        q: 'How long does a straight swap take?',
        a: 'A like-for-like replacement is usually a morning. Anything involving moving the waste, a concealed cistern or a wall-hung frame is longer and gets quoted after a look.',
      },
      {
        q: 'Can you move the toilet across the room?',
        a: 'Sometimes. It depends on getting a fall on the waste run to the soil stack. Where that is not possible the alternative is a macerator, which we will explain honestly rather than default to.',
      },
      {
        q: 'Do you take the old one away?',
        a: 'Yes, that is included. Old ceramics go for recycling rather than into a skip where we can.',
      },
    ],
  },

  {
    slug: 'general-plumbing',
    title: 'General Plumbing',
    h1: 'General plumbing in London',
    metaTitle: 'Plumber in London | Taps, Toilets & Repairs | Tamesis Plumbers',
    metaDescription:
      'Everyday plumbing across London: taps, toilets, radiators, stopcocks and pipework. For homeowners, landlords and agents. Call 020 3488 3737.',
    eyebrow: 'Everyday plumbing',
    icon: 'general',
    target: 'plumber london (3,600) · leaking tap repair (1,300) · radiator repair (1,000)',
    summary:
      'Taps, toilets, radiators and pipework. The jobs that never quite get done.',
    intro:
      'The dripping tap, the toilet that runs all night, the radiator that never gets warm. Small jobs are quoted the same way as large ones, and are often done on the first visit.',
    does: [
      'Taps, mixers and washer replacement',
      'Toilets, cisterns and running overflows',
      'Radiators fitted, moved and balanced',
      'Stopcocks and isolation valves',
      'Washing machine and dishwasher connections',
      'Pipework repairs, alterations and repiping',
      'Low water pressure diagnosed and fixed',
    ],
    guidance: [
      {
        title: 'Low pressure is usually one of three things',
        body: 'A scaled shower head or tap aerator, a partly closed valve somewhere on the run, or — in older London stock — an undersized supply pipe from the street that was never a problem until modern appliances asked more of it. We check in that order, cheapest first.',
      },
      {
        title: 'A running toilet is not harmless',
        body: 'A cistern that keeps refilling can waste hundreds of litres a day. On a water meter that shows up on the bill, and it is usually a cheap part and a short visit to fix.',
      },
      {
        title: 'Know your isolation valves',
        body: 'Most taps and toilets have a small isolation valve on the supply pipe beneath them. A flat-head screwdriver turned a quarter turn shuts off that one fixture without turning off the whole house.',
      },
      {
        title: 'Radiator cold at the bottom',
        body: 'Cold at the top means air, and bleeding it works. Cold at the bottom means sludge sitting in the bottom of the radiator, and bleeding will do nothing at all. That one needs flushing.',
      },
      {
        title: 'Old taps in old flats',
        body: 'In a lot of London housing stock the tap is fine and the isolation valve behind it has seized. Worth knowing that the small job occasionally uncovers a slightly larger one, and we will tell you before doing it, not after.',
      },
    ],
    aside: {
      title: 'No job too small',
      body: 'A dripping tap is worth a call. We would rather do the ten-minute job well and be the people you call for the big one.',
    },
    faqs: [
      {
        q: 'Will you come out for one small job?',
        a: 'Yes. Small jobs are quoted the same way as large ones and are often done on the first visit.',
      },
      {
        q: 'Do you work for landlords and agents?',
        a: 'Regularly. Repairs, tenancy turnarounds and reactive maintenance across managed properties. The management line is the best number for ongoing arrangements.',
      },
      {
        q: 'Can you fit an outside tap?',
        a: 'Yes, that is a common job. It needs a check valve fitted to comply with water regulations, which is included as standard.',
      },
      {
        q: 'Do you charge a callout fee on top?',
        a: 'You get a price for the work before an engineer starts. Whatever that price includes or excludes will be clear to you at the point you agree it.',
      },
    ],
  },

  {
    slug: 'commercial-plumbing',
    title: 'Commercial Plumbing',
    h1: 'Commercial plumbing in London',
    metaTitle: 'Commercial Plumber London | Offices & Shops | Tamesis Plumbers',
    metaDescription:
      'Commercial plumbing and drainage across London for offices, restaurants, retail and blocks of flats. Out-of-hours work available. Call 020 3592 0042.',
    eyebrow: 'Commercial',
    icon: 'commercial',
    target: 'commercial plumber london (260, low competition)',
    summary:
      'Offices, restaurants, retail and blocks of flats, worked around your opening hours.',
    intro:
      'Commercial premises cannot simply stop trading while a plumber works. We schedule around opening hours and tenants, and report back to whoever has to sign the work off.',
    does: [
      'Washroom installation, repair and maintenance',
      'Office kitchens, tea points and boiling taps',
      'Commercial kitchen plumbing',
      'Retail unit fit-outs and shopfront washrooms',
      'Commercial drain clearance and CCTV survey',
      'Reactive repairs for managing agents and landlords',
      'Communal systems in blocks of flats',
      'Out-of-hours and overnight work',
    ],
    spaces: [
      {
        title: 'Office kitchens and washrooms',
        body: 'Tea points, boiling taps, dishwashers and the washrooms everyone in the building depends on. The constraint is almost always access rather than difficulty: we work early, late or at weekends so a floor of desks is not standing idle while a tap is changed.',
      },
      {
        title: 'Commercial kitchens',
        body: 'Grease traps, high-demand hot water, dishwasher and glasswasher connections, and drainage built for volume rather than for a domestic sink. A kitchen that cannot open loses a service, so these are scheduled around your covers and we carry the parts that fail most often.',
      },
      {
        title: 'Retail units',
        body: 'Fit-outs, staff washrooms and customer WCs, and the reactive work that comes with a shared stack in a parade or a shopping centre. Where a landlord or centre management has to approve the work, we produce the paperwork they need rather than leaving you to chase it.',
      },
    ],
    guidance: [
      {
        title: 'We work around trading hours',
        body: 'For restaurants and retail, that usually means early mornings, evenings or overnight. Tell us your trading pattern at the point of enquiry and we will schedule to it rather than around it.',
      },
      {
        title: 'Paperwork that satisfies whoever signs it off',
        body: 'Managing agents, freeholders and landlords generally need more than a verbal all-clear. Tell us who needs to see what, and the engineer will document the job accordingly on the visit.',
      },
      {
        title: 'Shared stacks in blocks',
        body: 'A blockage reported by one flat is frequently a problem in the shared stack affecting several. Getting access to the right flats first time is usually the difference between fixing it and returning twice.',
      },
      {
        title: 'Backed by a property firm',
        body: 'Tamesis Plumbers is the plumbing arm of Tamesis Development Ltd, a London property maintenance and refurbishment company established in 2019. Commercial buildings are familiar ground rather than an occasional job.',
      },
    ],
    aside: {
      title: 'Speak to management directly',
      body: 'For commercial work, ongoing maintenance and account arrangements, the management line is the better number. It reaches the people who can agree terms.',
    },
    faqs: [
      {
        q: 'Can you work outside our opening hours?',
        a: 'Yes. For restaurants, shops and offices that is often the only sensible way to do it, and we schedule around your trading rather than through it.',
      },
      {
        q: 'Do you take on ongoing maintenance?',
        a: 'Yes. Speak to the management line about reactive and planned arrangements across a property or portfolio.',
      },
      {
        q: 'Do you work for managing agents?',
        a: 'Regularly, including reactive repairs across managed blocks and communal drainage.',
      },
      {
        q: 'Which number should I use?',
        a: 'For a one-off repair, the booking line is fastest. For anything ongoing, commercial or account-related, use the management line.',
      },
    ],
  },

  {
    slug: 'gas-safety-certificate',
    title: 'Gas Safety Certificates',
    h1: 'Gas safety certificates (CP12) in London',
    metaTitle: 'Gas Safety Certificate London | CP12 | Tamesis Plumbers',
    metaDescription:
      'Gas safety certificates (CP12) for landlords and homeowners across London, issued by Gas Safe registered engineers. Same-week appointments. Call 020 3488 3737.',
    eyebrow: 'CP12',
    icon: 'general',
    target: 'gas safety certificate (9,900/mo) · landlord gas safety certificate (varies by area)',
    summary:
      'Landlord gas safety certificates issued by a Gas Safe registered engineer, with the paperwork sent the same day.',
    intro:
      'A gas safety certificate — still widely called a CP12, though that is the old form number — is a legal requirement for landlords in England and Wales, renewed every twelve months. Our Gas Safe registered engineers check every gas appliance, flue and piece of pipework in the property and issue the certificate on the spot.',
    does: [
      'Landlord gas safety certificates (CP12), annual renewal',
      'Checks on boilers, gas fires, hobs and any other gas appliance',
      'Flue performance and ventilation checks',
      'Certificate issued and emailed the same day',
      'Portfolio and multi-property scheduling for landlords and agents',
      'Follow-up repairs where a check identifies a fault',
    ],
    guidance: [
      {
        title: 'It has to be a Gas Safe registered engineer',
        body: 'Only an engineer registered for the specific appliance types in the property can legally carry out the check. Ask to see the Gas Safe ID card — every engineer should be glad to show it, and checking the register yourself takes thirty seconds.',
      },
      {
        title: 'The certificate covers what is there on the day',
        body: 'It is a check of the appliances and pipework as installed, not a guarantee against future faults. If something is added or changed afterwards — a new gas hob, for instance — it needs to be checked too.',
      },
      {
        title: 'A fail on one appliance does not fail the whole certificate',
        body: 'If one appliance is unsafe, it gets capped off or condemned and noted, and the rest of the property can still pass. We would rather isolate the one fault and get the paperwork issued than delay the whole job.',
      },
      {
        title: 'Tenants must get a copy within 28 days',
        body: 'Landlords are required to give tenants a copy of the current certificate within 28 days of the check, and to new tenants before they move in. We email it the same day specifically so this is never the thing that slips.',
      },
    ],
    aside: {
      title: 'Book it before it lapses, not after',
      body: 'A lapsed certificate is a compliance gap a letting agent will flag immediately. We can set a reminder so renewals happen on schedule rather than being noticed when it is already overdue.',
    },
    faqs: [
      {
        q: 'How long does a gas safety check take?',
        a: 'Usually thirty to forty-five minutes for a typical property, longer with more appliances. The certificate is issued at the end of the visit.',
      },
      {
        q: 'What happens if an appliance fails?',
        a: 'An immediately dangerous appliance is isolated on the spot for safety. We will tell you what is needed to put it right, and the certificate can usually still be issued for the rest of the property.',
      },
      {
        q: 'Do I need one as a homeowner, not a landlord?',
        a: 'It is a legal requirement for landlords specifically. As a homeowner it is not mandatory, but an annual check is still a sound idea, particularly before winter.',
      },
      {
        q: 'Can you do several properties in a portfolio on the same visit?',
        a: 'Yes — tell us the addresses and how many appliances at each, and we can usually route a day around a cluster of properties.',
      },
    ],
  },

  {
    slug: 'cctv-drain-survey',
    title: 'CCTV Drain Surveys',
    h1: 'CCTV drain surveys in London',
    metaTitle: 'CCTV Drain Survey London | Drain Camera Inspection | Tamesis Plumbers',
    metaDescription:
      'CCTV drain surveys across London: camera inspection, recorded footage and a written report for house purchases, insurance claims and recurring blockages. Call 020 3488 3737.',
    eyebrow: 'Diagnostics',
    icon: 'drain',
    target: 'cctv drain survey (2,900/mo)',
    summary:
      'A camera down the drain shows what is actually wrong, rather than guessing from what keeps happening above ground.',
    intro:
      'A drain that blocks repeatedly, a smell that will not go away, or a survey requirement before buying a house — all the same answer. A waterproof camera goes down the line and shows the actual condition of the pipe: a collapse, root ingress, a misaligned joint, or nothing at all. You get the footage and a written report either way.',
    does: [
      'CCTV camera inspection of drains and sewers',
      'Recorded footage and a written report',
      'Pre-purchase drain surveys for house buyers',
      'Insurance claim surveys and evidence',
      'Locating the exact position and depth of a fault',
      'Root ingress, collapses and misaligned joints identified',
    ],
    guidance: [
      {
        title: 'A survey is diagnosis, not a fix',
        body: 'The camera tells you what is wrong and where. If it turns out to be a blockage, that is a separate job to clear it; if it is a collapsed section, that is an excavation and repair. We will quote the survey and the likely next step separately, since one does not commit you to the other.',
      },
      {
        title: 'Recurring blockages are usually structural',
        body: 'If the same drain blocks every few months despite clearing it properly each time, something is causing debris to catch — a root, a dip in the pipe, a partial collapse. A survey is what finds the actual cause instead of clearing the same symptom repeatedly.',
      },
      {
        title: 'Pre-purchase surveys are worth commissioning yourself',
        body: 'A seller’s own drain survey is not always independent. Commissioning your own, particularly on a period property with clay drains, is a small cost against the risk of a collapsed run discovered after completion.',
      },
      {
        title: 'The report is what an insurer or solicitor actually wants',
        body: 'A written report with timestamped, located footage is what gets accepted for an insurance claim or a house purchase — a verbal description of what was seen is not. We provide the report as standard, not as an extra.',
      },
    ],
    aside: {
      title: 'Footage settles an argument fast',
      body: 'Whether it is a dispute with a neighbour over a shared drain or a query from an insurer, footage with a location and a date on it ends the back-and-forth quickly.',
    },
    faqs: [
      {
        q: 'How long does a survey take?',
        a: 'A single domestic run is usually under an hour. A full property survey with several runs, or a longer commercial line, takes longer.',
      },
      {
        q: 'Can you survey a drain I do not have easy access to?',
        a: 'Usually, through the nearest manhole or gully rather than needing to dig anything up first. If access genuinely is not possible, we will say so before charging for the visit.',
      },
      {
        q: 'Will I get to see the footage?',
        a: 'Yes, the recording and the written report both come with the survey, not as a paid extra.',
      },
      {
        q: 'What if the survey finds a serious problem?',
        a: 'We will explain exactly what was found, whereabouts, and what fixing it would involve, and quote that as a separate job so you can decide with the full picture.',
      },
    ],
  },

  {
    slug: 'drain-repairs',
    title: 'Drain Repairs',
    h1: 'Drain repairs in London',
    metaTitle: 'Drain Repairs London | Excavation & No-Dig Relining | Tamesis Plumbers',
    metaDescription:
      'Drain repairs across London: collapsed pipes, root damage and cracked joints fixed by excavation or no-dig relining. Call 020 3488 3737.',
    eyebrow: 'Repairs',
    icon: 'drain',
    target: 'drain repair (1,900/mo)',
    summary:
      'A drain that is actually broken, not just blocked — repaired by digging it up or, where the run allows, without digging at all.',
    intro:
      'Unblocking clears what is stuck in a drain that still works. A drain repair is for one that is physically damaged — collapsed, cracked, root-split or badly misaligned — found and confirmed by a camera survey first. Depending on the fault and the run, that means excavation or a no-dig lining that goes in through the existing pipe.',
    does: [
      'Excavation and replacement of collapsed or badly damaged drains',
      'No-dig relining for cracks and root damage where the run allows it',
      'Root cutting and root-barrier installation',
      'Reinstating misaligned or displaced joints',
      'Reinstatement of the surface afterwards — paving, tarmac or garden',
      'Shared-drain repairs and liaising with the water company where it applies',
    ],
    guidance: [
      {
        title: 'It always starts with a survey, not a guess',
        body: 'We will not quote an excavation without a camera survey confirming exactly where the damage is and how bad it is. Digging up the wrong section, or more than needed, is an expensive mistake to avoid.',
      },
      {
        title: 'No-dig relining is not always possible',
        body: 'A resin liner works for a crack or a split section with the pipe still roughly in shape. A genuinely collapsed section, or one with a bad misalignment, physically cannot be relined and needs excavation instead.',
      },
      {
        title: 'A shared drain may not be entirely your responsibility',
        body: 'For a drain shared with a neighbouring property, the water company is often responsible for the shared section under the Water Industry Act. We will tell you where that boundary sits before you pay for a repair that was never yours to fund.',
      },
      {
        title: 'Reinstatement is part of the job, not an afterthought',
        body: 'If we excavate through a patio or a driveway, putting it back properly is agreed as part of the quote up front, not negotiated after the hole is already open.',
      },
    ],
    aside: {
      title: 'Ask whether it can be relined',
      body: 'No-dig repair is faster, causes no mess above ground, and is often cheaper than excavation. It is worth asking specifically, since not every company offers it.',
    },
    faqs: [
      {
        q: 'How do you know if a drain needs repair rather than unblocking?',
        a: 'A CCTV survey shows the difference clearly — debris sitting in an intact pipe is a blockage; a cracked, collapsed or root-split pipe wall is a repair. We will not recommend a repair without that evidence.',
      },
      {
        q: 'Will you need to dig up my garden or driveway?',
        a: 'Only if the damage cannot be relined. Where relining is possible, nothing above ground needs to be disturbed at all.',
      },
      {
        q: 'Is a shared drain the water company’s responsibility?',
        a: 'Often, for the shared section beyond your boundary. We will identify where that line falls and can refer a genuinely shared fault to the water company rather than quote you for their repair.',
      },
      {
        q: 'How long does a repair take?',
        a: 'A no-dig reline is typically a day. An excavation depends on depth and access, and we will give you a realistic timeframe once the survey confirms the extent of it.',
      },
    ],
  },

  {
    slug: 'wet-rooms-and-walk-in-showers',
    title: 'Wet Rooms & Walk-In Showers',
    h1: 'Wet room and walk-in shower installation in London',
    metaTitle: 'Wet Room & Walk-In Shower Installation London | Tamesis Plumbers',
    metaDescription:
      'Wet rooms and walk-in showers installed across London: tanking, level-access floors and drainage done properly. Call 020 3488 3737.',
    eyebrow: 'Level access',
    icon: 'bathroom',
    target: 'wet room installation (720/mo) · walk in shower installation (480/mo)',
    summary:
      'Level-access showers and full wet rooms, with the tanking and falls that decide whether it leaks in five years or never.',
    intro:
      'A wet room or a walk-in shower looks like a simple job from the outside — no tray, no enclosure, just a floor that drains. What actually makes it work is underneath: waterproof tanking taken up the walls, a floor built to a fall towards the drain, and a gully sized for the flow. Get that wrong and the leak shows up two floors down, long after the tiler has gone.',
    does: [
      'Full wet room conversions, tanked and floor-formed',
      'Walk-in and level-access showers without a full wet room',
      'Falls formed correctly to the drain, not guessed at by eye',
      'Tanking taken up walls and around penetrations',
      'Linear and point drains, sized for the shower’s flow',
      'Accessible and wheelchair-accessible wet rooms',
    ],
    guidance: [
      {
        title: 'The waterproofing is the job, the tiling is finishing',
        body: 'Tanking membrane, taken properly up the walls and sealed around every pipe penetration, is what actually stops water getting into the floor and the flat below. Tiling on top of poor tanking still leaks — it just takes longer to show.',
      },
      {
        title: 'A wet room needs a joist depth check first, in a flat especially',
        body: 'Forming a fall to the drain usually means dropping the floor level, which needs depth in the joists or slab to do properly. In a top-floor flat with limited build-up, that is the first thing worth checking, not the last.',
      },
      {
        title: 'Flats need the freeholder involved',
        body: 'A wet room floor build-up and drainage change in a leasehold flat often needs the freeholder’s consent, and sometimes affects the flat below’s ceiling void. Worth raising early rather than after the floor is already open.',
      },
      {
        title: 'A walk-in shower is not automatically a wet room',
        body: 'A walk-in shower with a tray and glass panel gets most of the look without lowering the floor, and is a smaller job. A full wet room is the right answer for genuine level access; a walk-in tray is often the right answer for everyone else.',
      },
    ],
    aside: {
      title: 'Get the drain size right for the shower',
      body: 'A linear drain sized for a low-flow shower head will not keep up with a rainfall head at full flow. Tell us what you are fitting before the drain is chosen, not after.',
    },
    faqs: [
      {
        q: 'Do I need planning permission or building control sign-off?',
        a: 'Not planning permission for a like-for-like bathroom. Building regulations do apply to the waterproofing and drainage, and we work to them as standard.',
      },
      {
        q: 'Can a wet room go in a flat, not just a house?',
        a: 'Yes, though floor depth and the freeholder’s consent are worth checking early — both can affect what is possible before you commit to a design.',
      },
      {
        q: 'How long does a full wet room take?',
        a: 'Typically one to two weeks depending on the extent of floor forming and finishing, longer than a standard bathroom refit because of the drying time tanking needs at each stage.',
      },
      {
        q: 'Will it smell or let damp through eventually?',
        a: 'Not if the tanking and falls are done properly and given time to cure before tiling. Rushed drying time is the most common cause of an eventual failure, not the wet room concept itself.',
      },
    ],
  },

  {
    slug: 'air-conditioning-repair',
    title: 'Air Conditioning Repair',
    h1: 'Air conditioning repair in London',
    metaTitle: 'Air Conditioning Repair London | F-Gas Registered | Tamesis Plumbers',
    metaDescription:
      'Air conditioning repair across London: units not cooling, leaking indoors, tripping breakers or showing a fault code. Diagnosed by F-Gas registered engineers. Call 020 3488 3737.',
    eyebrow: 'Cooling',
    icon: 'ac',
    target: 'air conditioning repair london (480/mo) · air conditioning repair (6,600/mo)',
    summary:
      'A system that has stopped cooling, is leaking indoors, or is tripping the breaker — diagnosed before anything is quoted.',
    intro:
      'An air conditioning unit that has stopped cooling, is dripping water indoors, or trips the electrics as soon as it starts is rarely obvious from the outside. We diagnose the actual fault — refrigerant, drainage, electrics or the unit itself — before pricing the repair, so you are not paying for a guess.',
    does: [
      'Units not cooling, or barely cooling',
      'Indoor unit leaking or dripping water',
      'Outdoor condenser not starting or cutting out',
      'Tripping breakers and electrical faults',
      'Fault codes and error displays',
      'F-Gas leak detection and repair',
    ],
    guidance: [
      {
        title: 'Check the basics before booking a callout',
        body: 'Is the unit actually receiving power, and is the remote or wall control set to cool rather than fan or heat? Is the outdoor unit clear of anything blocking the airflow around it? These sound obvious and still explain a fair number of "it has stopped working" calls.',
      },
      {
        title: 'Water indoors is usually drainage, not a leak',
        body: 'Water dripping from an indoor unit is almost always a blocked or poorly fallen condensate drain rather than the refrigerant system itself. It is a straightforward fix once found, but left alone it can mark a ceiling or a wall the same way a plumbing leak would.',
      },
      {
        title: 'A unit that trips the breaker should not be reset repeatedly',
        body: 'An electrical fault that keeps tripping the circuit is not solved by resetting it and hoping. Repeated tripping usually means a fault getting worse, and continuing to run it can turn a repair into a replacement.',
      },
      {
        title: 'Refrigerant leaks are F-Gas regulated work',
        body: 'If the fault is a loss of refrigerant, finding and repairing the leak — and handling the refrigerant itself — is legally restricted to F-Gas registered engineers. It is not a job for a general handyman regardless of what they charge.',
      },
    ],
    aside: {
      title: 'F-Gas registered',
      body: 'Any fault involving refrigerant is diagnosed and repaired by F-Gas registered engineers, as UK regulations require. Ask to see it on the doorstep, the same as you would for Gas Safe.',
    },
    faqs: [
      {
        q: 'Why has my air conditioning stopped cooling?',
        a: 'Commonly a refrigerant leak, a fault with the outdoor unit, or in some cases just a filter so clogged it restricts airflow. We check the straightforward causes first before assuming the worst.',
      },
      {
        q: 'Why is my indoor unit leaking water?',
        a: 'Almost always a blocked or badly fallen condensate drain rather than the refrigerant system. It is usually a quick fix once we can see the actual drain run.',
      },
      {
        q: 'Can you repair a system you did not install?',
        a: 'Yes, whoever fitted it makes no difference to us.',
      },
      {
        q: 'Is a refrigerant leak expensive to fix?',
        a: 'It depends on where the leak is and how accessible the pipework is. We find and confirm the leak first, then quote for the repair — never the other way round.',
      },
    ],
  },
  {
    slug: 'air-conditioning-maintenance',
    title: 'Air Conditioning Maintenance',
    h1: 'Air conditioning maintenance in London',
    metaTitle: 'Air Conditioning Maintenance London | Annual Servicing | Tamesis Plumbers',
    metaDescription:
      'Annual air conditioning maintenance across London: filters, refrigerant and F-Gas leak checks by F-Gas registered engineers. Call 020 3488 3737.',
    eyebrow: 'Cooling',
    icon: 'ac',
    target: 'air conditioning maintenance london (480/mo) · air conditioning servicing london (210/mo)',
    summary:
      'Annual maintenance that keeps a system cooling efficiently and catches a refrigerant leak before it becomes a breakdown.',
    intro:
      'A system that is never serviced runs harder than it needs to and fails sooner than it should. Annual maintenance covers the filters, the drainage, the electrics and — because it is a legal requirement above a certain refrigerant charge — an F-Gas leak check, carried out by F-Gas registered engineers.',
    does: [
      'Filters cleaned or replaced',
      'Condensate drain checked and cleared',
      'Refrigerant charge and pressures checked',
      'F-Gas leak checks, where required by law',
      'Electrical connections and controls checked',
      'Outdoor condenser cleaned and inspected',
    ],
    guidance: [
      {
        title: 'F-Gas leak checks are a legal requirement, not an upsell',
        body: 'Systems holding a refrigerant charge above a set threshold must have periodic leak checks under F-Gas regulations. It is not something we invented to sell a service plan — it is the law, and only F-Gas registered engineers can carry it out.',
      },
      {
        title: 'A dirty filter is the most common reason for weak cooling',
        body: 'A filter clogged with dust makes the whole system work harder for less cooling, and is the single easiest thing maintenance catches. Simple to fix, and it is usually why a system that used to cool a room properly no longer quite manages it.',
      },
      {
        title: 'Once a year, before the weather asks anything of it',
        body: 'Booking maintenance in spring, before the first warm spell, means any fault gets fixed while it is inconvenient rather than while the system is needed. Booking it in the middle of a heatwave means joining everyone else who left it too late.',
      },
      {
        title: 'Maintenance is not the same as a repair',
        body: 'A maintenance visit is a scheduled check and clean. If it finds a fault — a refrigerant leak, a failing part — fixing that is separate work, priced and agreed before anything is done.',
      },
    ],
    aside: {
      title: 'F-Gas registered',
      body: 'Refrigerant checks are carried out by F-Gas registered engineers, as UK regulations require. Ask to see it on the doorstep, the same as you would for Gas Safe.',
    },
    faqs: [
      {
        q: 'How often should air conditioning be serviced?',
        a: 'Once a year is standard. Systems above a certain refrigerant charge also need periodic F-Gas leak checks by law, which a routine maintenance visit covers.',
      },
      {
        q: 'What does a maintenance visit actually cover?',
        a: 'Filters, the condensate drain, refrigerant pressures, electrical connections and controls, and the outdoor condenser — plus an F-Gas leak check where the system requires one.',
      },
      {
        q: 'Will maintenance stop my system from breaking down?',
        a: 'It catches most of the common causes — a clogged filter, a slow refrigerant leak, a blocked drain — before they become a breakdown, though it cannot guarantee against every fault.',
      },
      {
        q: 'Can you maintain a system installed by someone else?',
        a: 'Yes, including F-Gas leak checks on existing systems, whoever fitted them.',
      },
    ],
  },
  {
    slug: 'air-conditioning-installation',
    title: 'Air Conditioning Installation',
    h1: 'Air conditioning installation in London',
    metaTitle: 'Air Conditioning Installation London | F-Gas Registered | Tamesis Plumbers',
    metaDescription:
      'Air conditioning installation across London: split and multi-split systems, fitted by F-Gas registered engineers. Call 020 3488 3737.',
    eyebrow: 'Cooling',
    icon: 'ac',
    target: 'air conditioning installation london (1,300/mo) · air con installation (1,900/mo)',
    summary:
      'Split and multi-split air conditioning, sized and sited properly, fitted by F-Gas registered engineers.',
    intro:
      'A split system cools one room, a multi-split runs several indoor units off one outdoor condenser — the right choice depends on how many rooms, where the outdoor unit can go, and what the walls and cabling will allow. Refrigerant work is handled by F-Gas registered engineers, as the law requires, not left as an assumption.',
    does: [
      'Split system installation, room by room',
      'Multi-split systems for several rooms off one outdoor unit',
      'Siting the outdoor condenser and pipework runs',
      'Condensate drainage done properly, not just run to the nearest gutter',
      'Replacing an existing system, same spec or upgraded',
      'Electrical connection and isolation for the new unit',
    ],
    guidance: [
      {
        title: 'Split or multi-split depends on the rooms, not just the budget',
        body: 'One room is a straightforward split system. Several rooms can often share one outdoor condenser as a multi-split, which is tidier and usually cheaper than separate systems — provided the outdoor unit has somewhere sensible to go and the pipe runs are realistic.',
      },
      {
        title: 'Where the outdoor unit goes is usually the real decision',
        body: 'It needs airflow around it, a sensible route for the pipework and drain back inside, and in a flat or a conservation area it may need the freeholder’s or the council’s consent. Worth checking before the indoor unit is chosen.',
      },
      {
        title: 'Condensate has to go somewhere planned',
        body: 'Every indoor unit produces water as it cools. That needs a proper drain route, not a pipe left dripping onto a flat roof or a neighbour’s wall. It is decided at installation, not fixed afterwards.',
      },
      {
        title: 'F-Gas registration is not optional',
        body: 'Installing, servicing or decommissioning a system that uses refrigerant is regulated work, and only F-Gas registered engineers are legally permitted to handle the refrigerant side of it. Ask to see the certification — it is a fair question and we are glad to show it.',
      },
    ],
    aside: {
      title: 'F-Gas registered',
      body: 'Refrigerant work is carried out by F-Gas registered engineers, as UK regulations require. Ask to see it on the doorstep, the same as you would for Gas Safe.',
    },
    faqs: [
      {
        q: 'Do I need planning permission for an outdoor unit?',
        a: 'Usually not for a house, though flats, listed buildings and conservation areas can need consent for where the outdoor unit sits. We will tell you if that applies before booking a survey.',
      },
      {
        q: 'How many rooms can one outdoor unit cool?',
        a: 'A multi-split typically runs two to five indoor units off one outdoor condenser, depending on the make and the combined capacity needed. We size it to the rooms rather than fit whatever is on the van.',
      },
      {
        q: 'Is the installation certified?',
        a: 'Refrigerant work is carried out by F-Gas registered engineers, which is a legal requirement, not an optional extra. We can show the certification on request.',
      },
      {
        q: 'Do you also maintain the system after installation?',
        a: 'Yes — annual maintenance and F-Gas leak checks are a separate service, covered on our air conditioning maintenance page, and available whether we installed your system or not.',
      },
    ],
  },
  {
    slug: 'air-conditioning-replacement',
    title: 'Air Conditioning Replacement',
    h1: 'Air conditioning replacement in London',
    metaTitle: 'Air Conditioning Replacement London | F-Gas Registered | Tamesis Plumbers',
    metaDescription:
      'Replacing an old or failing air conditioning system across London. Honest advice on repair versus replacement, old refrigerant systems assessed. Call 020 3488 3737.',
    eyebrow: 'Cooling',
    icon: 'ac',
    target: 'air conditioning replacement (1,000/mo) · air conditioning unit replacement (210/mo)',
    summary:
      'Replacing a system that has reached the end — including old units still running a refrigerant that can no longer be topped up.',
    intro:
      'Replacing an air conditioning system that is old, unreliable, or running a refrigerant that is no longer supported. The first question is the same one we ask about a boiler: does it actually need replacing, or would a repair do the job for less. We will tell you which, even when replacement is the bigger job.',
    does: [
      'Replacing an old or failed system',
      'Repair-versus-replace assessment, with both figures',
      'Systems still running an obsolete refrigerant',
      'Like-for-like swaps and upgrades to a larger or multi-split system',
      'Old unit and outdoor condenser removed and taken away',
      'Resizing a system that never quite kept up',
    ],
    guidance: [
      {
        title: 'Old refrigerant is often the real reason to replace',
        body: 'Older systems were charged with a refrigerant that has not been legally available to top up for years. If one of those systems develops a leak, there is no legal repair that keeps it running on the same gas — replacement is usually the only real option, whatever the rest of the unit is like.',
      },
      {
        title: 'Get both numbers before deciding',
        body: 'Any quote for a replacement should sit next to the cost of repairing what you have, where a repair is genuinely possible. If nobody has offered you the repair figure, ask for it.',
      },
      {
        title: 'A replacement is the chance to correct the original sizing',
        body: 'If a system has never quite cooled the room properly, or a single split has become inadequate as the space changed, a replacement is the point to size it properly or move to a multi-split — not to fit the same undersized unit again.',
      },
      {
        title: 'The outdoor unit and pipework may not need full replacement',
        body: 'Depending on age and condition, some replacements can reuse existing pipework runs, which keeps the job smaller and the walls untouched. We tell you which applies before quoting, not after.',
      },
    ],
    aside: {
      title: 'We will tell you if it does not need replacing',
      body: 'If your system is worth repairing rather than replacing, we will say so. A replacement is a bigger job for us and a bigger bill for you, and there is no reason to recommend one you do not need.',
    },
    faqs: [
      {
        q: 'How do I know if my air conditioning needs replacing rather than repairing?',
        a: 'Age, what has actually failed, and whether it still runs a refrigerant that can legally be topped up. A system on an obsolete refrigerant with a leak usually has to be replaced; most other faults are worth repairing first.',
      },
      {
        q: 'Will you quote for a repair as well as a replacement?',
        a: 'Yes, wherever a repair is genuinely possible. You should be comparing two figures, not being handed one.',
      },
      {
        q: 'Can I upgrade to a bigger or multi-split system when I replace?',
        a: 'Yes, and replacement is the natural point to do it — particularly if the existing system has never quite kept up with the room, or you want to add more rooms onto one outdoor unit.',
      },
      {
        q: 'Do you remove the old unit?',
        a: 'Yes, removal and disposal of the old system, including the outdoor condenser, is part of the job.',
      },
    ],
  },
];

export default services;
