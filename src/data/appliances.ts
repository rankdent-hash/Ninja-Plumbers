// One entry per appliance and fixture page, under /appliances. These are the
// installation jobs people search for by the thing itself rather than by
// trade — "water softener installation", "power flush", "boiling water tap".
//
// The room-based equivalents ("kitchen plumbing", "garage plumbing") were
// measured and are not built; see rejected.ts for the figures. Rooms turn out
// to have no search behind them, appliances do.
//
// Search volumes in `target` are UK monthly figures from Semrush, recorded
// when these pages were written. They explain why each page exists and are
// not published.
import type { Faq } from './services';

export type ApplianceGroup = 'heating' | 'kitchen' | 'bathroom' | 'water';

export type Appliance = {
  slug: string;
  title: string;            // short label: nav, cards, footer
  h1: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  icon: string;
  group: ApplianceGroup;
  target: string;           // why this page exists
  summary: string;          // card copy on the hub
  intro: string;
  does: string[];
  guidance: { title: string; body: string }[];
  aside: { title: string; body: string };
  faqs: Faq[];
  related: string[];        // services.ts slugs this page links back to
};

export const applianceGroups: { slug: ApplianceGroup; label: string; blurb: string; icon: string }[] = [
  {
    slug: 'heating',
    label: 'Heating & hot water',
    blurb: 'Radiators, underfloor loops and cylinders — the parts of the system that are not the boiler.',
    icon: 'heating',
  },
  {
    slug: 'kitchen',
    label: 'Kitchen & laundry',
    blurb: 'Appliances plumbed in properly, so the leak shows up in the shop rather than under your floor.',
    icon: 'appliance',
  },
  {
    slug: 'bathroom',
    label: 'Bathrooms & pumps',
    blurb: 'Pressure, pumping and waste where gravity alone will not do it.',
    icon: 'bathroom',
  },
  {
    slug: 'water',
    label: 'Water supply & treatment',
    blurb: 'What arrives at the property, and what London’s hard water does to everything downstream of it.',
    icon: 'water',
  },
];

export const appliances: Appliance[] = [
  {
    slug: 'water-softener-installation',
    title: 'Water Softener Installation',
    h1: 'Water softener installation in London',
    metaTitle: 'Water Softener Installation London | Fitted & Serviced | Ninja Plumbers',
    metaDescription:
      'Water softener installation and servicing across London. Sizing, siting, bypass valves and salt. Hard water is a London problem. Call 020 3488 3737.',
    eyebrow: 'Hard water',
    icon: 'water',
    group: 'water',
    target: 'water softener installation (2,400/mo) · water softener installation london (140/mo)',
    summary:
      'London water is hard, and it costs you slowly. Softeners sized, fitted and serviced.',
    intro:
      'Most of London sits on chalk, and the water that comes out of the tap is hard enough to shorten the life of a boiler, fur up a shower and leave scale on everything it touches. A softener deals with the cause rather than the symptoms. We size them, fit them and service the ones already in place.',
    does: [
      'Water softener installation, sized to the household',
      'Bypass valve so the house still has water during servicing',
      'Drain and overflow connections done to regulations',
      'A separate hard tap kept for drinking and cooking',
      'Servicing, resin checks and repairs to existing units',
      'Scale reducers where a full softener will not fit',
    ],
    guidance: [
      {
        title: 'London water really is hard',
        body: 'Across most of the Thames Water supply area the water is classed as hard to very hard. That is why kettles fur up in months and shower screens never look clean. It is not your cleaning — it is the water.',
      },
      {
        title: 'Where it goes decides how easy the job is',
        body: 'A softener has to go on the rising main, after the stopcock and before everything else, and it needs a drain within reach. Under the kitchen sink is the usual spot; a garage or utility room is easier if the main passes through it. Tell us where your stopcock is and we can usually tell you the answer on the phone.',
      },
      {
        title: 'You should keep one tap unsoftened',
        body: 'Softened water carries more sodium, so the guidance is to leave one drinking tap on the hard supply for drinking, cooking and filling a kettle. We fit that as standard rather than as an extra.',
      },
      {
        title: 'Salt is the running cost, and it is small',
        body: 'Block salt is easier to handle than tablet salt and most machines take either. A typical household gets through a few pounds a month. If someone quotes you a softener that never needs salt, they are selling you a scale reducer, which is a different product.',
      },
    ],
    aside: {
      title: 'We will tell you if you do not need one',
      body: 'If your problem is a single furred shower head or one scaled tap, that is a much smaller job than a softener. We would rather do the small one and be asked back.',
    },
    faqs: [
      {
        q: 'Will a softener protect my boiler?',
        a: 'It stops new scale forming in the heat exchanger, which is the part hard water damages most expensively. It cannot remove scale that has already built up — that is a separate job.',
      },
      {
        q: 'Does it need a drain?',
        a: 'Yes. Softeners flush themselves on a cycle and that water has to go somewhere. It is the constraint that usually decides where the unit can be installed.',
      },
      {
        q: 'Can you service a softener I already have?',
        a: 'Yes, including ones we did not fit. Most problems are salt bridging, a blocked injector or a valve rather than the resin, and those are all repairable.',
      },
      {
        q: 'Will I notice a difference?',
        a: 'Most people notice soap lathering more and the shower screen staying clear. If you have very sensitive skin you may notice that too. What you will not notice is the scale that stops forming inside the boiler.',
      },
    ],
    related: ['general-plumbing', 'boiler-service'],
  },

  {
    slug: 'underfloor-heating-installation',
    title: 'Underfloor Heating',
    h1: 'Underfloor heating installation in London',
    metaTitle: 'Underfloor Heating Installation London | Wet Systems | Ninja Plumbers',
    metaDescription:
      'Wet underfloor heating installed across London: manifolds, zones, screed and low-profile systems, and repairs to existing loops. Call 020 3488 3737.',
    eyebrow: 'Wet systems',
    icon: 'heating',
    group: 'heating',
    target: 'underfloor heating installation (1,600/mo) · underfloor heating installation london (140/mo)',
    summary:
      'Wet underfloor heating for extensions and refurbishments, plus repairs to loops that have stopped working.',
    intro:
      'Underfloor heating run off the boiler rather than off electricity — pipe loops in or under the floor, a manifold, and controls that let each room have its own temperature. It suits an extension or a full refurbishment far better than it suits a room-by-room retrofit, and we will say which one you have.',
    does: [
      'Wet underfloor heating in extensions and refurbishments',
      'Manifold installation, flow setting and balancing',
      'Screed systems and low-profile boards where height is tight',
      'Zone valves, thermostats and wiring centres',
      'Connecting to an existing boiler, cylinder or heat pump',
      'Fault-finding and repairs on loops that have gone cold',
    ],
    guidance: [
      {
        title: 'Wet systems, not electric mats',
        body: 'Electric underfloor mats are an electrician’s job and are usually only worth it in a small bathroom. Everything on this page is wet — water through pipe loops, fed by your heating system. If you have been quoted electric for a whole floor, get a second opinion on the running cost.',
      },
      {
        title: 'Floor height is usually the real constraint',
        body: 'A traditional screed system adds a meaningful amount of build-up. Low-profile boards add far less but cost more per square metre. In a London flat with existing door heights and a fixed floor level, that decision is often made for you before anything else is.',
      },
      {
        title: 'It wants a low flow temperature',
        body: 'Underfloor heating runs at a much lower temperature than radiators. Mixing it into a system built for radiators needs a blending valve and proper controls, otherwise you get a warm floor upstairs and nothing downstairs, or a boiler that short-cycles itself to death.',
      },
      {
        title: 'Retrofitting the whole house is rarely the answer',
        body: 'Lifting every floor in an occupied house to fit underfloor heating almost never pays back against simply improving the radiators and controls. Where it makes sense is where the floor is coming up anyway.',
      },
    ],
    aside: {
      title: 'Best decided before the floor goes down',
      body: 'If you are planning an extension or a refit, ask us at the drawing stage rather than after the screed. It is the cheapest hour of advice in the job.',
    },
    faqs: [
      {
        q: 'Can I have it under wood or engineered flooring?',
        a: 'Engineered wood and most tiles are fine. Solid timber moves and needs care over the choice of board and the flow temperature. Deep carpet and thick underlay work against you, though a thin underlay is usually workable.',
      },
      {
        q: 'Will my boiler cope with it?',
        a: 'Usually, with the right controls. What matters is whether the boiler can modulate down far enough and whether the system can be zoned properly. We check that before quoting rather than after.',
      },
      {
        q: 'How long does it take to warm up?',
        a: 'Hours rather than minutes — a screed floor is a large slow mass. That is why it is set to a schedule and left, not switched on and off like a radiator.',
      },
      {
        q: 'One of my loops has gone cold. Can you fix it?',
        a: 'Usually. It is normally air, a stuck actuator or a blocked loop rather than a burst pipe. We can test the loops at the manifold without lifting the floor.',
      },
    ],
    related: ['boiler-installation', 'boiler-service'],
  },

  {
    slug: 'radiator-installation-and-power-flushing',
    title: 'Radiators & Power Flushing',
    h1: 'Radiator installation and power flushing in London',
    metaTitle: 'Power Flush & Radiator Installation London | Ninja Plumbers',
    metaDescription:
      'Central heating power flushing, system cleansing and radiator installation across London. Cold radiators, sludge and uneven heating. Call 020 3488 3737.',
    eyebrow: 'System cleaning',
    icon: 'heating',
    group: 'heating',
    target: 'central heating power flush (1,300/mo) · radiator power flush (590/mo) · powerflushing (260/mo)',
    summary:
      'Radiators fitted and moved, and sludged systems flushed properly rather than topped up with chemicals.',
    intro:
      'Radiators cold at the bottom, a system that heats some rooms and not others, black water when you bleed it. That is sludge — corrosion debris circulating through the system and settling where the flow is slowest. A power flush shifts it. Fitting a new radiator, or moving one for a decorator, is the other half of this page.',
    does: [
      'Power flushing a sludged central heating system',
      'Chemical cleanse and fresh inhibitor',
      'Magnetic system filter fitted at the same time',
      'New radiators fitted, and old ones swapped like for like',
      'Radiators moved, removed for decorating and refitted',
      'Balancing a system that heats unevenly',
    ],
    guidance: [
      {
        title: 'Cold at the bottom means sludge',
        body: 'Cold at the top means air and bleeding fixes it. Cold at the bottom while the top is hot means debris sitting in the bottom of the radiator, and bleeding will do absolutely nothing. That is the one that needs flushing.',
      },
      {
        title: 'A power flush is not always the answer',
        body: 'If one radiator is cold and the rest are fine, the problem is usually that radiator or its valve, not the whole system. Flushing an entire house to fix one radiator is an expensive way to do it, and we will say so.',
      },
      {
        title: 'A filter is worth more than a second flush',
        body: 'A magnetic filter on the return catches the debris that forms after the flush, and emptying it once a year keeps the system clean. Without one, a flushed system starts filling up again immediately.',
      },
      {
        title: 'Be careful flushing an old system with a tired boiler',
        body: 'A hard flush through pipework and a heat exchanger already near the end of their life can turn a slow problem into an immediate one. If that is where you are, we will tell you before we start rather than after.',
      },
    ],
    aside: {
      title: 'Black water is the tell',
      body: 'Bleed a radiator into a white container. If what comes out is black rather than clear, the system has sludge in it and no amount of bleeding will fix the cold patches.',
    },
    faqs: [
      {
        q: 'How do I know if I need a power flush?',
        a: 'Radiators cold at the bottom, rooms that never get warm, black water when bleeding, or a boiler that keeps cutting out on overheat. One of those on its own may be something else; three of them together is usually sludge.',
      },
      {
        q: 'How long does a power flush take?',
        a: 'Most houses are a day. It depends on the number of radiators and how bad the system is, and we would rather do it properly in a day than badly in three hours.',
      },
      {
        q: 'Will it fix a cold radiator?',
        a: 'If the cause is debris, yes. If the cause is a seized valve, an airlock or a system that has never been balanced, a flush will not touch it — which is why we check first.',
      },
      {
        q: 'Do you fit designer and column radiators?',
        a: 'Yes. Heavy cast-iron and tall column radiators need the wall and the fixings checked properly, and sometimes the pipework moved, so those are quoted after a look rather than over the phone.',
      },
    ],
    related: ['boiler-service', 'general-plumbing'],
  },

  {
    slug: 'boiling-water-taps',
    title: 'Boiling Water Taps',
    h1: 'Boiling water tap installation in London',
    metaTitle: 'Boiling Water Tap Installation London | Instant Hot Taps | Ninja Plumbers',
    metaDescription:
      'Boiling and instant hot water taps installed across London. Tank siting, filters, isolation and servicing of existing taps. Call 020 3488 3737.',
    eyebrow: 'Kitchen taps',
    icon: 'tap',
    group: 'kitchen',
    target: 'instant boiling water tap (1,300/mo) · boiling water tap installation (260/mo)',
    summary:
      'Instant boiling taps fitted, plumbed and filtered — including the bits the brochure does not mention.',
    intro:
      'A boiling water tap is a straightforward install with two things people are not told when they buy one: it needs a power socket under the sink, and the tank takes up cupboard space you were probably using. Neither is a problem if you know before the kitchen goes in. We fit new ones, replace old ones and service what is already there.',
    does: [
      'Boiling water tap installation, most makes',
      'Tank siting and cupboard planning under the sink',
      'Isolation valves so the tap can be serviced without draining the house',
      'Filter fitting and scheduled cartridge changes',
      'Replacing an existing boiling tap, or reverting to a standard mixer',
      'Combined boiling, filtered and chilled units',
    ],
    guidance: [
      {
        title: 'You will need a socket under the sink',
        body: 'The tank is electric and needs a switched fused spur or socket in the cupboard. If there is not one there, that is an electrician’s job and worth arranging before we come rather than after.',
      },
      {
        title: 'The tank takes real cupboard space',
        body: 'It is roughly the size of a small bin and it needs air around it. In a small kitchen that is often the space the bin was in. Worth deciding where everything goes before the tap is bought.',
      },
      {
        title: 'Filters are a running cost, not an optional extra',
        body: 'In London’s hard water the filter is what keeps scale out of the tank. Skipping cartridge changes is the most common reason these fail early, and a replacement tank costs far more than years of filters.',
      },
      {
        title: 'They are safe with children, with a caveat',
        body: 'Every make has a child-resistant action on the boiling side. It is a deliberate two-step movement rather than a lock, so it is worth showing children how it works rather than assuming they will never reach it.',
      },
    ],
    aside: {
      title: 'Ask us before you buy the tap',
      body: 'Five minutes on the phone about your sink, your cupboard and your socket will tell you whether the tap you are looking at will actually fit. It is free, and it saves returns.',
    },
    faqs: [
      {
        q: 'Do I need an electrician as well?',
        a: 'Only if there is no socket or fused spur under the sink already. If there is, we can do the whole job. If there is not, the electrical work needs an electrician and we will tell you that up front.',
      },
      {
        q: 'How much space does the tank need?',
        a: 'Allow for a unit around the size of a small kitchen bin plus clearance for airflow and for the filter to be changed. Exact figures vary by make, so send us the model and we will check it.',
      },
      {
        q: 'Can you service a tap I already have?',
        a: 'Yes. Filter changes, descaling and valve faults are all routine, whichever make it is and whoever fitted it.',
      },
      {
        q: 'Are they expensive to run?',
        a: 'They use standby electricity to keep the tank hot, offset against not boiling a full kettle for one cup. The bigger running cost is the filter cartridges, and those are unavoidable in hard water.',
      },
    ],
    related: ['general-plumbing', 'bathroom-installation'],
  },

  {
    slug: 'washing-machine-plumbing',
    title: 'Washing Machine Plumbing',
    h1: 'Washing machine plumbing in London',
    metaTitle: 'Washing Machine Plumbing London | Plumbed In & Moved | Ninja Plumbers',
    metaDescription:
      'Washing machines plumbed in, moved and repaired across London. Valves, standpipes, waste connections and leaks. Call 020 3488 3737.',
    eyebrow: 'Appliances',
    icon: 'appliance',
    group: 'kitchen',
    target: 'washing machine plumber (720/mo) · washing machine installation london (110/mo)',
    summary:
      'Machines plumbed in properly, moved to a new room, or stopped from leaking where they stand.',
    intro:
      'Plumbing in a washing machine is a small job that goes wrong in expensive ways: a waste hose pushed into a pipe with no trap, a valve that was already weeping, a machine on a floor that is not level. We do it properly, and we will also move one to another room if the pipework can be got there.',
    does: [
      'New washing machine plumbed in and tested',
      'Hot and cold valves fitted where there are none',
      'Standpipe and trap installation for the waste',
      'Moving a machine to a utility room, garage or another wall',
      'Leaks from the machine, the valves or the waste',
      'Cold feeds for American-style fridge freezers and ice makers',
    ],
    guidance: [
      {
        title: 'Most leaks are the hose, not the machine',
        body: 'Fill hoses perish where they bend and the rubber washer inside hardens. If there is water under the machine and the machine itself is not old, look at the hose ends and the valve before you look at the appliance.',
      },
      {
        title: 'A washing machine needs a proper standpipe',
        body: 'The waste hose should go into a standpipe with a trap, with an air gap above the water line. Pushing it straight into a sink waste or a bare pipe lets smells back into the room and can siphon the drum empty mid-cycle.',
      },
      {
        title: 'Moving it to the garage is not always simple',
        body: 'The pipework has to be got there and it has to be protected from freezing. In a lot of London terraces that is a longer run than people expect. Ask before you buy the machine, not after.',
      },
      {
        title: 'Turn the valve off if you go away',
        body: 'The valves behind the machine are the one thing between mains pressure and your kitchen floor for the fortnight you are not there. Turning them off costs nothing.',
      },
    ],
    aside: {
      title: 'The small jobs are still jobs',
      body: 'Plumbing in one machine is a perfectly normal thing to call us for. It is priced the same way as everything else, and agreed before we start.',
    },
    faqs: [
      {
        q: 'Can you plumb one in where there is no existing point?',
        a: 'Usually yes. It means running a supply and a waste to the spot, which is straightforward in most kitchens and more involved in a flat with concrete floors. We will look and tell you which one you have.',
      },
      {
        q: 'Can you connect the water line for an American-style fridge freezer?',
        a: 'Yes. It needs a cold feed and an isolation valve, and it is usually done at the same visit as anything else in the kitchen.',
      },
      {
        q: 'Why does my machine leak only on a spin cycle?',
        a: 'That is usually the waste rather than the supply — a hose pushed too far into the standpipe, or a blockage that only overflows at full flow. It is a quick thing to diagnose.',
      },
      {
        q: 'Do you take the old machine away?',
        a: 'We can disconnect and move it out for you. Disposal is normally arranged with the retailer delivering the new one, since they usually offer it as part of the delivery.',
      },
    ],
    related: ['general-plumbing', 'drain-unblocking'],
  },

  {
    slug: 'water-meter-installation',
    title: 'Water Meter Installation',
    h1: 'Water meter installation and relocation in London',
    metaTitle: 'Water Meter Installation & Relocation London | Ninja Plumbers',
    metaDescription:
      'Water meter pipework, relocation and shared-supply separation across London. Honest advice on what your water company does free. Call 020 3488 3737.',
    eyebrow: 'Supply',
    icon: 'water',
    group: 'water',
    target: 'water meter installation (720/mo) · water main connection (170/mo)',
    summary:
      'The pipework side of going metered — including the shared supplies that stop it happening.',
    intro:
      'Start here with the thing nobody selling this tells you: your water company will fit a meter free of charge if it can. What they will not do is alter your pipework, separate a shared supply or move a meter for a kitchen refit. That is the part we do, and if the free option covers you we will send you to it.',
    does: [
      'Pipework alterations so a meter can be fitted',
      'Moving an existing internal meter',
      'Separating shared supplies in converted flats',
      'Boundary box access and repairs',
      'Stopcock replacement at the same time',
      'Supply pipe replacement where the old one is the blocker',
      'New water main connections for extensions and new builds',
    ],
    guidance: [
      {
        title: 'Your water company fits the meter free',
        body: 'Thames Water and the other suppliers will install a meter at no charge where the supply allows it. Ask them first. We are the people to call when they have been out and said they cannot, or when you need something moved.',
      },
      {
        title: 'Shared supplies are the usual blocker',
        body: 'Victorian houses split into flats very often share one supply pipe between several homes. A meter cannot be fitted per flat until that is separated, and that is the real job — worth understanding before deciding whether metering is worth it for you.',
      },
      {
        title: 'It is the right moment to replace the stopcock',
        body: 'If the pipework is open anyway, a stopcock that is stiff, weeping or seized should be changed then. Doing it later means draining everything down a second time.',
      },
      {
        title: 'Check for a leak before you go metered',
        body: 'If there is an existing underground leak on your supply, going metered means paying for it. Watch the meter with everything off before you commit — or ask us to trace it first.',
      },
    ],
    aside: {
      title: 'We will send you to the free option',
      body: 'If your water company can do what you need at no cost, that is what we will tell you. We would rather be the people you call back for the job they cannot do.',
    },
    faqs: [
      {
        q: 'Can you fit the meter itself?',
        a: 'The meter belongs to the water company and they install it. We do the pipework that lets them, and we move meters that are already installed inside the property.',
      },
      {
        q: 'Should I switch to a meter?',
        a: 'Broadly, if there are fewer people in the house than bedrooms, metering usually costs less. Most suppliers publish a calculator, and they also let you switch back within a set period.',
      },
      {
        q: 'My flat shares a supply with the rest of the building. What now?',
        a: 'The supply needs separating into individual runs before anyone can be metered individually. It is a real job and usually needs the freeholder’s agreement, so it is worth pricing before promising anything to the other flats.',
      },
      {
        q: 'Can you move the meter for a kitchen refit?',
        a: 'Yes, where the new position is reasonable and accessible for reading. Tell us where the units are going and we will tell you what is possible.',
      },
    ],
    related: ['general-plumbing', 'leak-detection'],
  },

  {
    slug: 'sump-pumps',
    title: 'Sump Pumps',
    h1: 'Sump pump installation in London',
    metaTitle: 'Sump Pump Installation London | Basements & Cellars | Ninja Plumbers',
    metaDescription:
      'Sump pump installation, replacement and servicing for London basements and cellars. Backup pumps, alarms and discharge pipework. Call 020 3488 3737.',
    eyebrow: 'Groundwater',
    icon: 'pump',
    group: 'bathroom',
    target: 'sump pump installation (480/mo)',
    summary:
      'Basements and cellars kept dry — pumps, backups, alarms and somewhere legal for the water to go.',
    intro:
      'London clay holds water, and a basement below the water table will take some in whatever the walls are made of. A sump and pump gives that water a controlled place to arrive and a controlled way out. We install them, replace failed ones and service the ones already sitting under a cover you have never lifted.',
    does: [
      'Sump chamber and pump installation',
      'Replacing failed or undersized pumps',
      'Dual-pump systems and battery backup',
      'Discharge pipework and non-return valves',
      'Float switch faults and high-water alarms',
      'Annual testing and servicing',
    ],
    guidance: [
      {
        title: 'A sump pump is not a damp-proofing system',
        body: 'It manages water that gets in. It does not stop it getting in. If the basement is being converted into living space, the pump is one part of a tanking and drainage design, not a substitute for one.',
      },
      {
        title: 'One pump is one point of failure',
        body: 'A single pump in an unattended basement means the first thing you learn about a failure is the water. Either a second pump on a higher float, or at the very least a high-water alarm, is worth far more than the difference in cost.',
      },
      {
        title: 'Where the water goes matters legally',
        body: 'Groundwater should not be discharged into the foul sewer. It needs to go to a surface water drain or a soakaway, and getting that wrong can land you with a bill from the water company rather than a fine from anyone else.',
      },
      {
        title: 'Test it before the wet season, not during it',
        body: 'Pour a bucket into the sump in September and watch it run. A pump that has sat dry all summer with a stuck float is a very common autumn callout.',
      },
    ],
    aside: {
      title: 'Battery backup earns its keep',
      body: 'Heavy rain and a power cut arrive together more often than the odds suggest. A backup that runs the pump for a few hours is the cheapest insurance on this page.',
    },
    faqs: [
      {
        q: 'Do I really need a backup pump?',
        a: 'If the basement is habitable, storage you care about, or somewhere you cannot check daily, yes. If it is an empty cellar with a concrete floor, an alarm may be enough.',
      },
      {
        q: 'How often should it be serviced?',
        a: 'Once a year, and tested by hand a couple of times besides. Servicing is mostly cleaning the chamber, checking the float travel and confirming the non-return valve still holds.',
      },
      {
        q: 'Can it discharge into the drain outside?',
        a: 'Into a surface water drain, usually yes. Into the foul drain, generally not. Which one you have outside is the first thing we check.',
      },
      {
        q: 'My basement floods in heavy rain. Is a pump enough?',
        a: 'Sometimes, and sometimes the answer is that water is arriving somewhere it should not and the pump is treating a symptom. We will tell you which, even where that means a bigger job than a pump.',
      },
    ],
    related: ['drain-unblocking', 'emergency-plumbing'],
  },

  {
    slug: 'shower-pumps',
    title: 'Shower Pumps',
    h1: 'Shower pump installation in London',
    metaTitle: 'Shower Pump Installation London | Fitted & Replaced | Ninja Plumbers',
    metaDescription:
      'Shower pump installation and replacement across London. Positive and negative head pumps, whole-house pressure and noise problems. Call 020 3488 3737.',
    eyebrow: 'Pressure',
    icon: 'pump',
    group: 'bathroom',
    target: 'shower pump installation (390/mo)',
    summary:
      'Weak gravity-fed showers pumped properly — with an honest answer about whether a pump is the fix at all.',
    intro:
      'A shower fed from a tank in the loft can be pumped up to something worth standing under. A shower fed straight off a combi boiler cannot be pumped at all, and anyone who says otherwise is about to sell you the wrong thing. The first job on this page is telling you which system you have.',
    does: [
      'Shower pump installation on gravity-fed systems',
      'Replacing failed and noisy pumps',
      'Positive and negative head pumps correctly matched',
      'Whole-house pressure pumps and accumulators',
      'Vibration, noise and mounting problems',
      'Fault-finding on pumps that run on or cut out',
    ],
    guidance: [
      {
        title: 'You cannot pump a combi boiler',
        body: 'A combi heats mains water on demand, and pumping the mains supply into a house is not permitted. If your shower runs off a combi and the pressure is poor, the answer is somewhere else entirely — the supply pipe, a partly closed valve, or a scaled shower head.',
      },
      {
        title: 'Positive or negative head is not a detail',
        body: 'It depends on how far the cold tank sits above the shower outlet. Fit the wrong type and the pump either never starts or never stops. It is the single most common reason a replacement pump fails within months.',
      },
      {
        title: 'Pumps are noisy, so where it goes matters',
        body: 'A pump bolted to a joist under a bedroom will be heard through the whole house. On a solid base, on anti-vibration feet, with flexible hoses either side, it is a hum in an airing cupboard.',
      },
      {
        title: 'Air is what kills them',
        body: 'Most pumps that fail early have been running with air pulled in through the tank feed. Getting the feed right at installation matters more than the make of pump.',
      },
    ],
    aside: {
      title: 'We will tell you if a pump will not help',
      body: 'On a mains-fed system it will not, and we would rather say that on the phone than fit something that cannot work.',
    },
    faqs: [
      {
        q: 'Can I pump the shower in my flat?',
        a: 'Only if it is fed from a stored cold tank and a hot cylinder. If it is combi or mains-pressure unvented, no — and there is usually another way to improve it.',
      },
      {
        q: 'Why does my pump keep running after I turn the shower off?',
        a: 'Usually a passing valve or a dripping outlet keeping the flow switch active. Occasionally the pump itself. It is worth fixing quickly because running on is what burns them out.',
      },
      {
        q: 'How long should a shower pump last?',
        a: 'Years rather than decades, and how it was installed matters more than what was paid for it — the feed, the mounting and the head type do most of the deciding.',
      },
      {
        q: 'Can you make an existing one quieter?',
        a: 'Often, yes. Anti-vibration mounts, flexible hoses and moving it off a resonant surface deal with most of it without replacing anything.',
      },
    ],
    related: ['bathroom-installation', 'general-plumbing'],
  },

  {
    slug: 'electric-shower-installation',
    title: 'Electric Shower Installation',
    h1: 'Electric shower installation in London',
    metaTitle: 'Electric Shower Installation London | Fitted Properly | Ninja Plumbers',
    metaDescription:
      'Electric shower installation across London: new units fitted, old ones replaced, kW and cable requirements checked first. Call 020 3488 3737.',
    eyebrow: 'Self-contained showers',
    icon: 'tap',
    group: 'bathroom',
    target: 'electric shower installation (was: electric shower repair, 260/mo)',
    summary:
      'A different thing from a shower pump — a self-contained unit that heats mains water on demand, fitted properly first time.',
    intro:
      'An electric shower heats water as it passes through, using mains cold water and its own heating element — nothing to do with a shower pump, which boosts pressure on a system that is already hot. It suits a flat with poor pressure precisely because it needs no hot supply and no boost. We fit new units and replace old ones, and we check the electrics can actually take the load before anything goes on the wall.',
    does: [
      'New electric shower installation, most makes',
      'Replacing an existing unit, same spec or a higher kW',
      'Cold water isolation valve fitted where there is none',
      'Checking existing cable and breaker against the new unit’s load',
      'Siting and pipework for a shower where there was none before',
      'Coordinating the dedicated circuit with an electrician where one is needed',
    ],
    guidance: [
      {
        title: 'It is not the same thing as a shower pump',
        body: 'An electric shower heats mains water itself and needs no hot supply or pump — that is exactly why it works in a flat with poor pressure where a pumped shower cannot. If yours needs boosting rather than heating, that is the Shower Pumps page, not this one.',
      },
      {
        title: 'A higher kW rating needs the cable checked, not just the shower',
        body: 'Stepping up from an 8.5kW to a 10.5kW-plus unit increases the current draw, and the existing cable and breaker may not be rated for it. We check that before you buy the higher-power unit, not after it is on the wall.',
      },
      {
        title: 'The circuit is an electrician’s job, the shower is ours',
        body: 'A dedicated fused circuit back to the consumer unit is notifiable electrical work. Where one already exists and is adequate for the new unit, we connect straight to it. Where it does not, that circuit needs an electrician first — we will tell you plainly rather than fit it regardless.',
      },
      {
        title: 'Mains pressure and flow decide what is realistic',
        body: 'A higher kW unit needs a decent cold flow rate to deliver it. On a poor mains supply, fitting the biggest unit available can leave you with lukewarm water at full flow rather than hot water — worth checking before choosing the spec.',
      },
    ],
    aside: {
      title: 'We check the electrics before we quote',
      body: 'The cable and breaker are looked at against the unit you actually want, not assumed adequate. It is a five-minute check that avoids buying the wrong shower.',
    },
    faqs: [
      {
        q: 'Can you fit a shower with a higher kW rating than the old one?',
        a: 'Often, once the existing cable and breaker are checked against the new load. If they are not adequate, that is an electrician’s job to upgrade first, and we will tell you plainly rather than fit it regardless.',
      },
      {
        q: 'Do I need an electrician as well as a plumber?',
        a: 'Only if there is no adequate dedicated circuit already there. If there is, we connect to it directly. If there is not, the circuit is an electrician’s job and we will say so before quoting, not after.',
      },
      {
        q: 'Can you supply the shower as well as fit it?',
        a: 'We can, or fit one you have already bought — either way works, and buying it yourself often costs less than a trade-supplied unit.',
      },
      {
        q: 'Can you fit one where there has never been a shower before?',
        a: 'Yes, provided the wall can take the fixings and a route exists for the pipework and cable. We will look and tell you what is involved rather than quote blind.',
      },
    ],
    related: ['bathroom-installation', 'general-plumbing'],
  },

  {
    slug: 'saniflo-macerator-pumps',
    title: 'Saniflo & Macerator Pumps',
    h1: 'Saniflo and macerator pump installation in London',
    metaTitle: 'Saniflo & Macerator Installation London | Fitted & Repaired | Ninja Plumbers',
    metaDescription:
      'Macerator and Saniflo installation, servicing and repairs across London. Basement and loft WCs, blockages and descaling. Call 020 3488 3737.',
    eyebrow: 'Pumped waste',
    icon: 'pump',
    group: 'bathroom',
    target: 'saniflo installation (260/mo) · macerator pump installation (20/mo)',
    summary:
      'A WC where there is no gravity waste — fitted, serviced and unblocked, with honest advice on whether you need one.',
    intro:
      'A macerator lets you put a toilet somewhere the soil pipe does not reach: a basement, a loft conversion, under the stairs. It works well when it is the only option and badly when it was chosen to avoid a slightly harder job. We fit them, service them and unblock them, and we will tell you which of those two situations you are in.',
    does: [
      'Macerator installation with a new WC',
      'Replacing failed units, most makes',
      'Basement, loft and under-stairs bathrooms',
      'Descaling and routine servicing',
      'Clearing blockages and jammed units',
      'Pumped waste for basins, showers and utility rooms',
    ],
    guidance: [
      {
        title: 'Three things go in it, and nothing else',
        body: 'Waste, water and toilet paper. Not wipes — including ones sold as flushable — not sanitary products, not cotton buds, not kitchen roll. Nearly every macerator we are called to has been stopped by something on that list.',
      },
      {
        title: 'A macerator is a last resort, not a first choice',
        body: 'Gravity waste to a soil stack has nothing to break, needs no power and makes no noise. If a conventional run is possible at reasonable cost, take it. We will tell you when it is, even though it is the smaller job for us.',
      },
      {
        title: 'It needs power, access and a warm room',
        body: 'A fused spur, a way to get the unit out for servicing, and somewhere that will not freeze. Boxing one in permanently behind tiling is a decision that gets regretted the first time it needs opening.',
      },
      {
        title: 'Descaling is what makes them last',
        body: 'In London’s hard water, scale on the blades and the pressure switch is what finishes most units off. A descale once or twice a year is cheap and roughly doubles the working life.',
      },
    ],
    aside: {
      title: 'A humming unit is a warning',
      body: 'A macerator that hums without running, or runs longer each time, is telling you it is partly blocked. Dealt with then, it is a service. Left alone, it is a replacement.',
    },
    faqs: [
      {
        q: 'What can I actually flush?',
        a: 'Human waste, water and toilet paper only. Wipes labelled flushable are the single most common cause of failure we see — they do not break down the way paper does.',
      },
      {
        q: 'Why does it keep running or start on its own?',
        a: 'Usually a leaking WC flush valve trickling water into the unit, or a scaled pressure switch. Both are fixable and both waste electricity and life if ignored.',
      },
      {
        q: 'How long do they last?',
        a: 'Well-treated and descaled, a good many years. Fed with wipes, sometimes months. What goes into it matters far more than which make it is.',
      },
      {
        q: 'Can I put a toilet in a loft conversion with one?',
        a: 'Yes, and it is one of the situations they genuinely suit. The pumped waste needs to reach a soil stack and the unit needs power and access, both of which are easier to plan before the room is finished.',
      },
    ],
    related: ['bathroom-installation', 'drain-unblocking'],
  },

  {
    slug: 'whole-house-water-filtration',
    title: 'Water Filtration & Limescale',
    h1: 'Water filtration and limescale systems in London',
    metaTitle: 'Water Filtration & Limescale Systems London | Ninja Plumbers',
    metaDescription:
      'Whole-house filtration, under-sink drinking water filters and scale reducers installed across London. Straight answers on what each one does. Call 020 3488 3737.',
    eyebrow: 'Water quality',
    icon: 'water',
    group: 'water',
    target: 'water filtration system installation (210/mo) · under sink water filter installation (20/mo)',
    summary:
      'Filters, scale reducers and drinking water taps — and a straight answer about which one solves your problem.',
    intro:
      'Filtration, softening and scale reduction are three different things that get sold as if they were one. A filter improves what you drink. A softener changes the water chemistry throughout the house. A scale reducer does something more modest than either. This page is the first two and the honest version of the third.',
    does: [
      'Whole-house filtration on the incoming main',
      'Under-sink drinking water filters and dedicated taps',
      'Sediment filters where the mains runs dirty',
      'Scale reducers and inhibitors',
      'Cartridge changes and filter servicing',
      'Filtration combined with a softener, done in the right order',
    ],
    guidance: [
      {
        title: 'Filtering and softening are not the same thing',
        body: 'A filter takes things out of the water — sediment, chlorine, taste. A softener changes the minerals that cause scale. If your complaint is furred kettles and scaled taps, a drinking filter will not touch it. If your complaint is the taste, a softener will not fix that either.',
      },
      {
        title: 'A scale reducer is not a softener',
        body: 'Magnetic and electronic conditioners are sold hard and claim a lot. They do not remove hardness. Some people find they help downstream of the unit; nobody should buy one expecting softener results. That is the honest position and it costs us the bigger sale.',
      },
      {
        title: 'Cartridges are the running cost',
        body: 'Every filter has a service life, and one left in past it is worse than no filter. Whatever gets installed, agree at the outset what changing it costs and how often.',
      },
      {
        title: 'Know what you are trying to fix first',
        body: 'Taste, sediment, scale and smell all have different answers. Tell us what the actual complaint is and we will tell you which of these does something about it — sometimes the answer is none of them.',
      },
    ],
    aside: {
      title: 'The cheapest fix is often the right one',
      body: 'A single under-sink filter and a dedicated drinking tap solves most people’s actual complaint for a fraction of a whole-house system.',
    },
    faqs: [
      {
        q: 'Filter or softener?',
        a: 'Filter for taste and what you drink. Softener for scale in the boiler, the shower and the kettle. Plenty of London households end up with both, with a filtered hard tap for drinking.',
      },
      {
        q: 'Do I need filtration in London?',
        a: 'The water is safe to drink as supplied. Filtration is about taste, chlorine and sediment rather than safety, and in an older building with old internal pipework a sediment filter can make a visible difference.',
      },
      {
        q: 'How often do cartridges need changing?',
        a: 'Typically every six to twelve months depending on the type and your usage. We can set it up as a scheduled visit so it is not something you have to remember.',
      },
      {
        q: 'Will it help with limescale?',
        a: 'A standard filter, no. A softener, yes. A scale reducer, to a limited extent and not everywhere in the house. We will not tell you otherwise to sell you one.',
      },
    ],
    related: ['general-plumbing', 'boiler-service'],
  },

  {
    slug: 'outside-tap-installation',
    title: 'Outside Tap Installation',
    h1: 'Outside tap installation in London',
    metaTitle: 'Outside Tap Installation London | Garden Taps Fitted | Ninja Plumbers',
    metaDescription:
      'Outside taps installed across London with the required check valve and isolation. Frost-proof taps, standpipes and winterising. Call 020 3488 3737.',
    eyebrow: 'Garden',
    icon: 'tap',
    group: 'water',
    target: 'outside tap installation (210/mo)',
    summary:
      'A garden tap fitted properly: isolated inside, check valve fitted, and able to survive a winter.',
    intro:
      'An outside tap is a couple of hours’ work and one of the most useful things you can add to a house. It does need doing properly: a check valve to stop garden water being drawn back into the drinking supply, an isolation valve inside so it can be shut off and drained each winter, and a neat run through the wall.',
    does: [
      'New outside tap fitted, front or rear',
      'Double check valve to meet water regulations',
      'Isolation valve inside for winter shut-off',
      'Frost-proof taps where the run is exposed',
      'Garden and patio standpipes further from the house',
      'Replacing leaking or seized existing taps',
    ],
    guidance: [
      {
        title: 'A check valve is a legal requirement, not an upsell',
        body: 'Water regulations require backflow protection on an outside tap, because a hose left in a water butt or a bucket of garden chemicals can otherwise siphon back into the drinking supply. Any tap fitted without one is not compliant.',
      },
      {
        title: 'Turn it off and drain it every winter',
        body: 'Close the inside isolation valve and leave the outside tap open over winter. Water left in the exposed section freezes, expands and splits the pipe — and you find out in spring, usually behind the wall.',
      },
      {
        title: 'Getting through the wall is the job',
        body: 'The tap itself is quick. The core drill through a solid wall, in the right place, missing the cables and the pipework on the other side, is the part that takes the care.',
      },
      {
        title: 'Flats and leaseholds may need permission',
        body: 'Drilling through an external wall in a leasehold flat, or on a listed or conservation-area property, may need the freeholder’s or the council’s consent. Worth a check before we come out.',
      },
    ],
    aside: {
      title: 'Ask for the isolation valve inside',
      body: 'It is a small part and it is what makes winterising possible. A tap fitted without one cannot be drained down properly, and that is what splits pipes.',
    },
    faqs: [
      {
        q: 'Do I need permission to have one fitted?',
        a: 'In a freehold house, normally not. In a leasehold flat, or a listed or conservation-area building, check with the freeholder or the council first — it is drilling through the external wall that needs the consent.',
      },
      {
        q: 'Can it feed a hose reel or an irrigation system?',
        a: 'Yes. Tell us what it is feeding, because a permanently connected irrigation system needs a higher level of backflow protection than a hose used occasionally.',
      },
      {
        q: 'Will it freeze in winter?',
        a: 'Not if it is isolated and drained, which is what the inside valve is for. Frost-proof taps add more protection where the run is particularly exposed.',
      },
      {
        q: 'Can the tap go at the far end of the garden?',
        a: 'Yes, as a standpipe with a buried run. It is a bigger job than a tap on the house wall because of the trench and the frost depth, but it is a common one.',
      },
    ],
    related: ['general-plumbing', 'emergency-plumbing'],
  },

  {
    slug: 'dishwasher-plumbing',
    title: 'Dishwasher Plumbing',
    h1: 'Dishwasher plumbing in London',
    metaTitle: 'Dishwasher Plumbing London | Plumbed In & Repaired | Ninja Plumbers',
    metaDescription:
      'Dishwashers plumbed in, moved and fixed across London. Integrated units, waste connections, leaks and drainage faults. Call 020 3488 3737.',
    eyebrow: 'Appliances',
    icon: 'appliance',
    group: 'kitchen',
    target: 'dishwasher installation london (170/mo) · dishwasher plumber (70/mo)',
    summary:
      'Dishwashers connected properly — including the integrated ones that have to go in before the door does.',
    intro:
      'A dishwasher needs a cold feed, an isolating valve and a waste connection with an air break. Most of the callouts we get are about the last one: a waste hose fitted without a high loop, which lets sink water back into the machine or lets the machine empty itself as it fills.',
    does: [
      'New dishwasher plumbed in and tested',
      'Isolating valve fitted where there is none',
      'Waste connection to a sink trap or standpipe, done properly',
      'Integrated and built-under appliance installation',
      'Moving a dishwasher during a kitchen refit',
      'Leaks, drainage faults and standing water',
    ],
    guidance: [
      {
        title: 'The waste is where they go wrong',
        body: 'The drain hose needs a high loop above the machine before it drops to the trap. Without it, dirty water from the sink can run back into the dishwasher, or the machine siphons itself empty and never washes properly.',
      },
      {
        title: 'Integrated units need the opening right',
        body: 'Built-in machines have very little tolerance, and the services have to sit in the void behind rather than where the machine goes. If the kitchen is being fitted, get the pipework placed before the units go in.',
      },
      {
        title: 'It should have its own isolating valve',
        body: 'A small valve on the cold feed means the machine can be pulled out or swapped without draining anything. Every dishwasher should have one and a surprising number do not.',
      },
      {
        title: 'Standing water is not always a blockage',
        body: 'Water left in the bottom can be a blocked filter, a kinked hose or the waste connection rather than the drain itself. Worth checking the cheap things first — we will tell you how before booking a visit.',
      },
    ],
    aside: {
      title: 'Best done before the kitchen goes in',
      body: 'If a kitchen is being fitted, the ten minutes spent placing the valve and the waste in the right void saves an afternoon later.',
    },
    faqs: [
      {
        q: 'Can you fit an integrated dishwasher?',
        a: 'Yes, including fitting the decor door where the hinges and template allow. Send us the model and the opening size and we can tell you what is involved.',
      },
      {
        q: 'Why will my dishwasher not drain?',
        a: 'Most often the filter or the waste hose rather than the machine. If the sink also drains slowly, the problem is the shared waste and that is a drain job rather than an appliance one.',
      },
      {
        q: 'Can it share a waste with the sink?',
        a: 'Yes, that is the normal arrangement — into a spigot on the sink trap, with the high loop above it. What it should never do is discharge below the water line in the trap.',
      },
      {
        q: 'Do you supply the machine?',
        a: 'No. Buy the machine wherever it is cheapest and we will plumb it in — that usually works out better for you than an appliance supplied through a trade markup.',
      },
    ],
    related: ['general-plumbing', 'drain-unblocking'],
  },

  {
    slug: 'hot-water-cylinder-installation',
    title: 'Hot Water Cylinders',
    h1: 'Hot water cylinder installation in London',
    metaTitle: 'Hot Water Cylinder Installation London | Vented & Unvented | Ninja Plumbers',
    metaDescription:
      'Hot water cylinder replacement and servicing across London. Vented and unvented, immersion heaters, expansion vessels and controls. Call 020 3488 3737.',
    eyebrow: 'Hot water',
    icon: 'heating',
    group: 'heating',
    target: 'hot water cylinder installation london (70/mo)',
    summary:
      'Cylinders replaced, sized and serviced — the tank in the airing cupboard that everyone forgets until it fails.',
    intro:
      'The cylinder is the part of the hot water system nobody thinks about until there is no hot water. Vented cylinders fed from a loft tank, unvented cylinders running at mains pressure, and the controls and immersion heaters attached to both. We replace them, size them properly and service the ones still working.',
    does: [
      'Vented and unvented cylinder replacement',
      'Cylinder sizing based on bathrooms and usage',
      'Immersion heater and thermostat replacement',
      'Expansion vessel and pressure relief valve faults',
      'Annual servicing of unvented systems',
      'Controls, timers and cylinder stats',
    ],
    guidance: [
      {
        title: 'Unvented cylinders are notifiable work',
        body: 'An unvented cylinder is a pressurised vessel and installing or servicing one requires a specific qualification on top of general plumbing competence. Ask whoever you are considering to show you theirs — for this work it is a fair question and a reasonable installer will not mind being asked.',
      },
      {
        title: 'Size is about bathrooms, not floor area',
        body: 'What decides the cylinder is how many outlets might run at once and how many people shower in the same hour. A big house with one bathroom needs less than a small house with three.',
      },
      {
        title: 'No hot water is often not the cylinder',
        body: 'On a vented system it is very often the immersion heater or its thermostat, both of which are cheap. Before replacing a cylinder, those should be ruled out — and we will rule them out first.',
      },
      {
        title: 'The airing cupboard is not always the best place now',
        body: 'Modern insulated cylinders lose very little heat, which is why an airing cupboard around one is no longer the drying space it used to be. If space is tight, a cylinder can often go somewhere more useful.',
      },
    ],
    aside: {
      title: 'Serviced yearly, unvented systems last',
      body: 'The expansion vessel and the relief valves are the parts that fail, and both are checked in a service that takes under an hour.',
    },
    faqs: [
      {
        q: 'Vented or unvented — which should I have?',
        a: 'Unvented gives mains pressure at every tap and needs no loft tank, which suits most modern refits. Vented is simpler, cheaper to maintain and fine where the existing tank and pressure already work.',
      },
      {
        q: 'Should I just switch to a combi instead?',
        a: 'Sometimes. A combi frees up the cupboard and the loft tank, but struggles where two showers run at once. For a one-bathroom flat it is often the better answer; for a family house with three bathrooms it usually is not.',
      },
      {
        q: 'Why is my hot water only lukewarm?',
        a: 'Commonly a failed cylinder thermostat, a failing immersion element, or a heating coil that is scaled up. All three are diagnosable without replacing the cylinder.',
      },
      {
        q: 'How often should a cylinder be serviced?',
        a: 'An unvented cylinder should be checked annually — the expansion vessel and safety valves are the reason. A vented cylinder needs far less, though the immersion and stat are worth checking with the boiler service.',
      },
    ],
    related: ['boiler-installation', 'boiler-service'],
  },
];

// Every appliance page must point back at core services that exist, or the
// cross-links quietly rot. Checked at build time rather than trusted.
import { services } from './services';
{
  const slugs = services.map((s) => s.slug);
  const bad = appliances.flatMap((a) =>
    a.related.filter((r) => !slugs.includes(r)).map((r) => `${a.slug} -> ${r}`)
  );
  if (bad.length) throw new Error(`appliances.ts: unknown related service: ${bad.join(', ')}`);

  const groups = applianceGroups.map((g) => g.slug);
  const orphan = appliances.filter((a) => !groups.includes(a.group)).map((a) => a.slug);
  if (orphan.length) throw new Error(`appliances.ts: unknown group on: ${orphan.join(', ')}`);

  const dupes = appliances.map((a) => a.slug).filter((s, i, arr) => arr.indexOf(s) !== i);
  if (dupes.length) throw new Error(`appliances.ts: duplicate slugs: ${dupes.join(', ')}`);
}
