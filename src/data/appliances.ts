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
    metaTitle: 'Water Softener Installation London | Sized, Fitted & Serviced | Ninja Plumbers',
    metaDescription:
      'Water softener installation across London, sized to your household with bypass valves, drainage and salt sorted. Call Ninja Plumbers on 020 3576 5825.',
    eyebrow: 'Hard water',
    icon: 'water',
    group: 'water',
    target: 'water softener installation (2,400/mo) · water softener installation london (140/mo)',
    summary:
      'London water is hard, and it costs you slowly. Softeners sized, fitted and serviced.',
    intro:
      'London sits on a bed of chalk, which is why the water reaching most taps is hard enough to shorten a boiler\'s life, fur up a shower head and leave a white crust on anything it dries on. A water softener tackles that at the source instead of just wiping away the mess it leaves behind. The Ninja Plumbers team sizes softeners correctly, fits them, and keeps servicing the units already sitting under people\'s sinks.',
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
        body: 'The unit needs to sit on the rising main, positioned after the stopcock but before anything else takes water, and it has to be within reach of a drain. Most houses end up with it under the kitchen sink; a garage or utility room works out simpler wherever the main pipe already runs through one. Let us know roughly where your stopcock sits and we can normally give you an answer over the phone.',
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
      body: 'Sometimes the whole problem is one furred-up shower head or a single scaled tap, and that is a far smaller job than fitting a softener. Ninja Plumbers would rather sort the small thing cheaply and get asked back than sell you more than the problem needs.',
    },
    faqs: [
      {
        q: 'Will a softener protect my boiler?',
        a: 'Yes, in the sense that it stops fresh scale building up inside the heat exchanger, which is the component hard water damages most expensively to replace. What it cannot do is strip out scale that is already there — that needs a separate descale.',
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
    metaTitle: 'Underfloor Heating Installation London | Wet Systems Fitted | Ninja Plumbers',
    metaDescription:
      'Wet underfloor heating fitted across London: manifolds, zoning, screed and low-profile boards, plus repairs to loops gone cold. Call 020 3576 5825.',
    eyebrow: 'Wet systems',
    icon: 'heating',
    group: 'heating',
    target: 'underfloor heating installation (1,600/mo) · underfloor heating installation london (140/mo)',
    summary:
      'Wet underfloor heating for extensions and refurbishments, plus repairs to loops that have stopped working.',
    intro:
      'This kind of underfloor heating is powered off the boiler rather than the mains electricity supply: loops of pipe run in or under the floor, feeding into a manifold, with controls that let every room sit at its own temperature. It is a far better fit for an extension or a full refurbishment than for topping up heat in a single existing room, and the Ninja Plumbers team will tell you honestly which situation yours is before any pipe goes down.',
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
        body: 'A traditional screed floor raises the level by a fair amount, whereas low-profile boards add much less height but cost more for every square metre they cover. In a London flat, where the door heights and the floor level are already fixed, that height difference often ends up deciding which system is realistic before any other factor gets a look-in.',
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
      body: 'Bring Ninja Plumbers in at the drawing stage of an extension or refit rather than once the screed is already poured. It genuinely is the cheapest hour of advice in the whole job.',
    },
    faqs: [
      {
        q: 'Can I have it under wood or engineered flooring?',
        a: 'Engineered wood and most tile finishes cope with it well. Solid timber moves as it warms, so it needs a careful choice of board and a flow temperature kept on the lower side. Deep carpet and thick underlay both trap the heat before it reaches the room, although a thin underlay usually still works fine.',
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
    metaTitle: 'Power Flush London | Radiator Installation & System Cleaning | Ninja Plumbers',
    metaDescription:
      'Power flushing and radiator installation across London: sludge cleared properly, new radiators fitted, systems balanced. Call Ninja Plumbers 020 3576 5825.',
    eyebrow: 'System cleaning',
    icon: 'heating',
    group: 'heating',
    target: 'central heating power flush (1,300/mo) · radiator power flush (590/mo) · powerflushing (260/mo)',
    summary:
      'Radiators fitted and moved, and sludged systems flushed properly rather than topped up with chemicals.',
    intro:
      'A radiator that stays cold near the bottom, a house where some rooms heat up and others never quite do, black water spitting out when you bleed a valve — these are all signs of sludge, which is just corrosion debris drifting around the system and settling wherever the flow is weakest. A power flush is how you get rid of it. The other job we cover here is more straightforward: fitting a new radiator, or unbolting and refitting one so a decorator can get behind it.',
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
        body: 'Fitting a magnetic filter on the return pipe catches new debris as it forms after the flush, and simply emptying it out once a year is enough to keep the system clean going forward. Skip the filter and a freshly flushed system starts collecting sludge again almost straight away.',
      },
      {
        title: 'Be careful flushing an old system with a tired boiler',
        body: 'A hard flush through pipework and a heat exchanger already near the end of their life can turn a slow problem into an immediate one. If that is where you are, we will tell you before we start rather than after.',
      },
    ],
    aside: {
      title: 'Black water is the tell',
      body: 'Try bleeding a radiator into a white cup or jug. Clear water is fine, but if what comes out is black, the system is carrying sludge and no amount of bleeding is ever going to fix those stubborn cold patches — Ninja Plumbers would be flushing rather than bleeding at that point.',
    },
    faqs: [
      {
        q: 'How do I know if I need a power flush?',
        a: 'Watch out for radiators that stay cold near the bottom, rooms that never quite warm up, black water when you bleed a valve, or a boiler that keeps tripping out on overheat. Any one of those alone could be something else entirely, but three of them showing up together usually points straight to sludge.',
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
      'Boiling and instant hot water taps fitted across London: tank siting, power, filters and servicing sorted. Call Ninja Plumbers on 020 3576 5825.',
    eyebrow: 'Kitchen taps',
    icon: 'tap',
    group: 'kitchen',
    target: 'instant boiling water tap (1,300/mo) · boiling water tap installation (260/mo)',
    summary:
      'Instant boiling taps fitted, plumbed and filtered — including the bits the brochure does not mention.',
    intro:
      'Fitting a boiling water tap is a simple enough job, but two things rarely make it onto the brochure before people buy one: there has to be a power socket under the sink, and the storage tank eats into cupboard space you were probably already using for something else. Neither is a real problem provided you know about it before the kitchen goes in, which is where Ninja Plumbers comes in early. We fit new taps, swap out old ones, and keep servicing whatever is already installed.',
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
        body: 'Because London\'s water is hard, the filter cartridge is doing the real work of keeping scale out of the tank. Letting cartridge changes slide is by far the most common reason these units fail early, and a replacement tank ends up costing more than years\' worth of the filters that would have prevented it.',
      },
      {
        title: 'They are safe with children, with a caveat',
        body: 'Every make has a child-resistant action on the boiling side. It is a deliberate two-step movement rather than a lock, so it is worth showing children how it works rather than assuming they will never reach it.',
      },
    ],
    aside: {
      title: 'Ask us before you buy the tap',
      body: 'A quick phone call about your sink, your cupboard space and your socket situation is usually enough for Ninja Plumbers to tell you whether the tap you have your eye on will actually fit. It costs nothing and it saves you an awkward return.',
    },
    faqs: [
      {
        q: 'Do I need an electrician as well?',
        a: 'Only if there is not already a socket or fused spur under the sink. Where one exists, we can handle the whole job ourselves; where it does not, that part is electrical work for an electrician, and we will flag that clearly before any work starts rather than after.',
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
    metaTitle: 'Washing Machine Plumbing London | Plumbed In, Moved & Fixed | Ninja Plumbers',
    metaDescription:
      'Washing machines plumbed in, relocated and repaired across London: valves, standpipes and waste leaks sorted properly. Call 020 3576 5825.',
    eyebrow: 'Appliances',
    icon: 'appliance',
    group: 'kitchen',
    target: 'washing machine plumber (720/mo) · washing machine installation london (110/mo)',
    summary:
      'Machines plumbed in properly, moved to a new room, or stopped from leaking where they stand.',
    intro:
      'It looks like a small job, but plumbing in a washing machine can go wrong in surprisingly expensive ways: a waste hose forced into a pipe with no trap behind it, a valve that was already dripping before anyone noticed, a machine sitting on a floor that is not quite level. Ninja Plumbers does this properly rather than quickly, and we can also relocate a machine to another room wherever the pipework can realistically reach it.',
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
        body: 'The waste hose belongs in a standpipe fitted with a trap, sitting with a gap of air above the water line inside it. Push it straight into a sink waste or a bare length of pipe instead, and you risk drain smells drifting back into the kitchen, or the drum siphoning itself empty partway through a cycle.',
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
      body: 'Calling Ninja Plumbers out to plumb in just the one machine is entirely normal — it is priced the same straightforward way as anything larger, and we agree the figure with you before any work begins.',
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
        a: 'That points to the waste side rather than the water supply feeding it — most often a hose pushed too far down the standpipe, or a partial blockage that only overflows once the drain is under full flow. Either way it is a quick fault to track down.',
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
    metaTitle: 'Water Meter Installation London | Pipework & Relocation | Ninja Plumbers',
    metaDescription:
      'Water meter pipework, relocation and shared-supply separation across London, plus honest advice on what your supplier fits free. Call 020 3576 5825.',
    eyebrow: 'Supply',
    icon: 'water',
    group: 'water',
    target: 'water meter installation (720/mo) · water main connection (170/mo)',
    summary:
      'The pipework side of going metered — including the shared supplies that stop it happening.',
    intro:
      'Here is the thing most people selling meter installation will not lead with: your water company will fit the meter itself free of charge, provided your supply allows it. What they will not do is alter your internal pipework, split a shared supply between flats, or move a meter to suit a kitchen refit. That is the work Ninja Plumbers actually handles, and where the free option would cover you, we will point you straight there instead of quoting for it.',
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
        body: 'A Victorian house carved up into flats very often has just one supply pipe feeding every home in the building. Nobody can get an individual meter until that shared pipe is separated into one run per flat, and that separation work is the real job here — worth understanding upfront before you decide whether metering is even worth pursuing.',
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
      body: 'Where your water company can do the job at no charge, that is exactly what Ninja Plumbers will tell you to do first. We would much rather be the people you come back to for the parts of the job they cannot touch.',
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
        a: 'The shared pipe has to be split into separate runs before individual metering becomes possible. It is a genuine piece of work, and it usually needs sign-off from the freeholder too, so get it priced before making promises to the other flats in the building.',
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
      'Sump pump installation, replacement and servicing for London basements and cellars, with backup pumps and alarms. Call Ninja Plumbers 020 3576 5825.',
    eyebrow: 'Groundwater',
    icon: 'pump',
    group: 'bathroom',
    target: 'sump pump installation (480/mo)',
    summary:
      'Basements and cellars kept dry — pumps, backups, alarms and somewhere legal for the water to go.',
    intro:
      'London clay holds onto water, so a basement sitting below the water table is going to take some in no matter what the walls are built from. A sump chamber with a pump gives that water somewhere controlled to collect and a controlled route back out again, rather than letting it find its own way across the floor. Ninja Plumbers installs these systems, replaces the ones that have failed, and services units already sitting quietly under a cover most homeowners have never once lifted.',
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
        body: 'Rely on a single pump in a basement nobody checks daily, and the water itself is usually how you find out it has stopped working. Adding a second pump set on a higher float switch, or at the very least a high-water alarm, is a small extra cost against the damage it prevents.',
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
      body: 'Heavy rain and a power cut have an unfortunate habit of arriving on the same night. A battery backup that keeps the pump running for a few hours afterwards is, page for page, about the cheapest insurance Ninja Plumbers can fit for you.',
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
        a: 'Sometimes yes, but sometimes water is getting in somewhere it genuinely should not, and a pump would only be masking that rather than fixing it. We will tell you honestly which situation you are in, even when the honest answer means a bigger job than just fitting a pump.',
      },
    ],
    related: ['drain-unblocking', 'emergency-plumbing'],
  },

  {
    slug: 'shower-pumps',
    title: 'Shower Pumps',
    h1: 'Shower pump installation in London',
    metaTitle: 'Shower Pump Installation London | Fitted, Matched & Replaced | Ninja Plumbers',
    metaDescription:
      'Shower pump installation across London: correctly matched positive/negative head pumps, plus honest advice on whether a pump helps. Call 020 3576 5825.',
    eyebrow: 'Pressure',
    icon: 'pump',
    group: 'bathroom',
    target: 'shower pump installation (390/mo)',
    summary:
      'Weak gravity-fed showers pumped properly — with an honest answer about whether a pump is the fix at all.',
    intro:
      'A shower running off a cold water tank up in the loft can be boosted with a pump into something genuinely worth standing under. A shower running straight off a combi boiler cannot be pumped at all, full stop, and anyone telling you otherwise is about to sell you the wrong product. So the first thing Ninja Plumbers does on this page is work out which of the two systems your house actually has.',
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
        body: 'Which type you need comes down to exactly how far above the shower outlet the cold tank is sitting. Get that wrong and the pump either refuses to start or never switches off — and it is the single most common reason a replacement pump packs in within a few months.',
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
      body: 'On a mains-fed system, no pump will help, and Ninja Plumbers would rather say so on the phone up front than turn up and fit something we already know cannot work.',
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
        a: 'Think years rather than decades. How well it was installed matters more than how much you spent on it — the feed pipework, the mounting and getting the head type right do most of the work in deciding how long it survives.',
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
    metaTitle: 'Electric Shower Installation London | Fitted Properly First Time | Ninja Plumbers',
    metaDescription:
      'Electric shower installation across London: new units fitted, old ones swapped, cable and kW load checked before the shower goes up. Call 020 3576 5825.',
    eyebrow: 'Self-contained showers',
    icon: 'tap',
    group: 'bathroom',
    target: 'electric shower installation (was: electric shower repair, 260/mo)',
    summary:
      'A different thing from a shower pump — a self-contained unit that heats mains water on demand, fitted properly first time.',
    intro:
      'An electric shower heats the water itself as it flows through, using cold water straight off the mains and its own built-in heating element — it has nothing to do with a shower pump, which only boosts the pressure of water that is already hot. That is exactly why it suits a flat with weak water pressure: there is no hot supply and no boost required at all. Ninja Plumbers fits new units, replaces old ones, and always checks the electrics can genuinely carry the load before anything goes near the wall.',
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
        body: 'Moving up from something like an 8.5kW unit to a 10.5kW or above pulls significantly more current, and the cable and breaker already in place might not be rated to handle it. Ninja Plumbers checks that before you spend money on the higher-power unit, not after it has already gone up on the wall.',
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
      body: 'We look at the existing cable and breaker against the specific unit you want rather than just assuming it will cope. It takes about five minutes and it stops you buying the wrong shower for your circuit.',
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
        a: 'We can supply one, or simply fit a unit you have already bought — both routes work fine, and buying the shower yourself tends to end up cheaper than one supplied through a trade markup.',
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
    metaTitle: 'Saniflo & Macerator Installation London | Fitted & Serviced | Ninja Plumbers',
    metaDescription:
      'Macerator and Saniflo installation, servicing and unblocking across London: basement and loft WCs, blockages and descaling. Call 020 3576 5825.',
    eyebrow: 'Pumped waste',
    icon: 'pump',
    group: 'bathroom',
    target: 'saniflo installation (260/mo) · macerator pump installation (20/mo)',
    summary:
      'A WC where there is no gravity waste — fitted, serviced and unblocked, with honest advice on whether you need one.',
    intro:
      'A macerator (a small grinding pump built into or behind the WC) lets you site a toilet somewhere ordinary gravity waste pipework simply cannot reach — a basement, a loft conversion, the space under a staircase. It is a genuinely good solution when there is no other option, and a poor one when it gets chosen just to dodge a slightly harder plumbing job. Ninja Plumbers fits, services and unblocks these units, and we will tell you honestly which of those two situations describes your project.',
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
        body: 'A conventional gravity waste running down to the soil stack has nothing mechanical to break, needs no electricity and makes no noise at all. Wherever that kind of ordinary run is achievable at a sensible cost, take it — and we will tell you when it is, even though it means less work for us.',
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
      body: 'A macerator that hums instead of properly running, or that seems to run a little longer on each use, is telling you it is starting to clog. Call Ninja Plumbers at that point and it is a service; leave it running like that and it usually ends up a replacement.',
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
        a: 'Treated well and descaled regularly, a decent number of years. Fed a diet of wipes, sometimes only months. What goes down the toilet matters far more to its lifespan than which make you bought.',
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
    metaTitle: 'Water Filtration Systems London | Filters & Limescale | Ninja Plumbers',
    metaDescription:
      'Whole-house filtration, under-sink drinking filters and scale reducers fitted across London, with a straight answer on which one you need. 020 3576 5825.',
    eyebrow: 'Water quality',
    icon: 'water',
    group: 'water',
    target: 'water filtration system installation (210/mo) · under sink water filter installation (20/mo)',
    summary:
      'Filters, scale reducers and drinking water taps — and a straight answer about which one solves your problem.',
    intro:
      'Filtration, softening and scale reduction get marketed as though they were basically the same product, but they are three genuinely different things. A filter improves the taste and quality of what comes out of the tap for drinking. A softener changes the mineral makeup of the water flowing through the whole house. A scale reducer does something more limited than either of them claims. Ninja Plumbers covers the first two properly here, and gives you the honest version of the third rather than the sales pitch.',
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
        body: 'Magnetic and electronic conditioners get marketed with big claims attached, but the plain fact is they do not actually remove hardness from the water. Some households find them mildly useful further down the pipework, but nobody should buy one expecting the results a proper softener would give — that is the honest answer even though it costs us the bigger sale.',
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
      body: 'For most households, a single under-sink filter feeding a dedicated drinking tap solves the actual complaint for a fraction of what a whole-house system would cost — and Ninja Plumbers will say so rather than push the bigger job.',
    },
    faqs: [
      {
        q: 'Filter or softener?',
        a: 'Filter for taste and what you drink. Softener for scale in the boiler, the shower and the kettle. Plenty of London households end up with both, with a filtered hard tap for drinking.',
      },
      {
        q: 'Do I need filtration in London?',
        a: 'The tap water is already safe to drink exactly as supplied. Filtering it is about improving taste, chlorine smell and sediment rather than making it safer, though in an older building with ageing internal pipework a sediment filter can genuinely make a visible difference to what comes out of the tap.',
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
      'Outside taps fitted across London with the required check valve, an isolation valve inside, and a neat run through the wall. Call 020 3576 5825.',
    eyebrow: 'Garden',
    icon: 'tap',
    group: 'water',
    target: 'outside tap installation (210/mo)',
    summary:
      'A garden tap fitted properly: isolated inside, check valve fitted, and able to survive a winter.',
    intro:
      'An outside tap only takes a couple of hours to fit, and it is one of the more genuinely useful additions you can make to a house. Doing it properly means three things: a check valve so garden water can never get drawn back into the drinking supply, an isolation valve inside the house so it can be shut off and drained every winter, and a tidy run of pipe through the wall. Ninja Plumbers fits all three as standard, not as extras.',
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
        body: 'Shut the isolation valve indoors and leave the outside tap itself open through the cold months. Any water left standing in the exposed section will freeze, expand and split the pipe — and that damage usually only shows up behind the wall come spring.',
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
      body: 'It is a small, cheap part, and it is the one thing that makes proper winterising possible at all. A tap fitted without it cannot be drained down properly beforehand, which is exactly what leaves pipes split by spring.',
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
        a: 'Yes, fitted as a standpipe fed by a buried pipe run. It works out a bigger job than a tap mounted straight on the house wall, mainly because of the trenching and getting the pipe below frost depth, but it is a common request and one Ninja Plumbers handles regularly.',
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
      'Dishwashers plumbed in, relocated and repaired across London: integrated units, waste connections and leaks sorted. Call Ninja Plumbers 020 3576 5825.',
    eyebrow: 'Appliances',
    icon: 'appliance',
    group: 'kitchen',
    target: 'dishwasher installation london (170/mo) · dishwasher plumber (70/mo)',
    summary:
      'Dishwashers connected properly — including the integrated ones that have to go in before the door does.',
    intro:
      'Every dishwasher needs three things: a cold water feed, its own isolating valve, and a waste connection with an air break built in. Most of the callouts Ninja Plumbers gets on this front come down to that last one — a waste hose fitted without the required high loop, which lets sink water siphon back into the machine or lets the machine drain itself empty partway through filling.',
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
        body: 'The drain hose has to rise into a loop above the machine before it drops away down to the trap. Skip that loop and dirty water from the sink can travel back into the dishwasher, or the machine ends up siphoning itself empty and never actually washing anything properly.',
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
      body: 'While a kitchen is still being fitted, spending ten minutes with Ninja Plumbers getting the valve and waste positioned in the right void saves a whole afternoon of remedial work later.',
    },
    faqs: [
      {
        q: 'Can you fit an integrated dishwasher?',
        a: 'Yes, including fitting the decor door where the hinges and template allow. Send us the model and the opening size and we can tell you what is involved.',
      },
      {
        q: 'Why will my dishwasher not drain?',
        a: 'Nine times out of ten it is a blocked filter or the waste hose at fault rather than the machine itself. If the kitchen sink is also draining slowly at the same time, the shared waste pipe is the real culprit, which makes it a drainage job rather than an appliance repair.',
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
      'Hot water cylinder replacement and servicing across London, vented and unvented, with immersion heaters and controls sorted. Call 020 3576 5825.',
    eyebrow: 'Hot water',
    icon: 'heating',
    group: 'heating',
    target: 'hot water cylinder installation london (70/mo)',
    summary:
      'Cylinders replaced, sized and serviced — the tank in the airing cupboard that everyone forgets until it fails.',
    intro:
      'The cylinder is the one part of a hot water system nobody gives a moment\'s thought to until there suddenly is no hot water. Some are vented, fed from a tank up in the loft; others are unvented, running straight at mains pressure; and both types come with their own controls and immersion heaters attached. Ninja Plumbers replaces them, sizes new ones correctly for the household, and services the cylinders that are still doing their job.',
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
        body: 'On a vented system, the culprit is very often the immersion heater or its thermostat rather than the cylinder itself, and both of those are inexpensive to sort. Before anyone replaces a whole cylinder, those two should be ruled out first, and that is exactly the order Ninja Plumbers works through them in.',
      },
      {
        title: 'The airing cupboard is not always the best place now',
        body: 'Modern insulated cylinders lose very little heat, which is why an airing cupboard around one is no longer the drying space it used to be. If space is tight, a cylinder can often go somewhere more useful.',
      },
    ],
    aside: {
      title: 'Serviced yearly, unvented systems last',
      body: 'It is the expansion vessel and the relief valves that tend to fail on an unvented cylinder, and Ninja Plumbers checks both in a service visit that generally takes under an hour.',
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
        a: 'The usual suspects are a failed cylinder thermostat, an immersion element on its way out, or a heating coil that has scaled up over time. All three can be diagnosed without needing to replace the cylinder itself.',
      },
      {
        q: 'How often should a cylinder be serviced?',
        a: 'An unvented cylinder should be checked annually — the expansion vessel and safety valves are the reason. A vented cylinder needs far less, though the immersion and stat are worth checking with the boiler service.',
      },
    ],
    related: ['boiler-installation', 'boiler-service'],
  },

  {
    slug: 'kitchen-sink-installation',
    title: 'Kitchen Sink Installation',
    h1: 'Kitchen sink installation in London',
    metaTitle: 'Kitchen Sink Installation London | Ninja Plumbers',
    metaDescription:
      'Kitchen sink installation across London: inset, undermount and Belfast sinks fitted, wastes and traps done properly. Call Ninja Plumbers 020 3576 5825.',
    eyebrow: 'Sinks & wastes',
    icon: 'tap',
    group: 'kitchen',
    target: 'kitchen sink installation (210/mo)',
    summary:
      'New sinks fitted and old ones swapped, with the waste and trap sorted out underneath rather than bodged.',
    intro:
      'Fitting a kitchen sink is two jobs, and only one of them is the sink. Above the worktop it is a matter of the right cut-out, the right seal and taps that reach. Below it is the waste, the trap and whatever else has been fed into them over the years. Ninja Plumbers does both ends of it, whether that is dropping a new sink into an existing worktop or rebuilding the whole arrangement underneath during a refit.',
    does: [
      'New kitchen sink fitted, sealed and connected',
      'Like-for-like swaps into an existing worktop',
      'Inset, undermount and Belfast sink installation',
      'Waste, trap and overflow reworked to suit the new sink',
      'Washing machine or dishwasher connected into the same waste',
      'Slow-draining and leaking sinks put right',
    ],
    guidance: [
      {
        title: 'Inset, undermount or Belfast',
        body: 'An inset sink drops into a hole in the worktop and sits on a rim, which is the simplest and most forgiving option. An undermount is fixed beneath the worktop, so the cut edge is on show and the material has to be able to take it — granite and quartz can, most laminate cannot. A Belfast or butler sink sits exposed at the front with the worktop built around it, and the tap goes into the worktop rather than the sink.',
      },
      {
        title: 'The worktop decides more than the sink does',
        body: 'A cut-out cannot be moved once it is made, and a new sink is rarely the same size as the old one. A ceramic Belfast sink is heavy before you put any water in it, so it needs a proper supporting base underneath rather than the sides of a standard cabinet. Worth settling all of that before the sink is bought.',
      },
      {
        title: 'Appliances can share the waste, within limits',
        body: 'A washing machine or dishwasher normally connects into a spigot on the sink trap, with the hose looped up high before it drops away. Two appliances plus a sink on one small trap is where it starts to gurgle and back up, and at that point the honest answer is a second trap or a standpipe rather than another adaptor.',
      },
      {
        title: 'A slow new sink is almost never the sink',
        body: 'If a brand new sink drains slowly, the sink is not the problem. It is usually the trap — the wrong depth, the wrong type, or a flexible pipe left sagging so water sits in it. Beyond that it is the waste run itself: not enough fall, or an old blockage that the previous sink was quietly living with.',
      },
    ],
    aside: {
      title: 'Measure the cut-out before you buy',
      body: 'Most of the awkward sink jobs start in a shop. Sink dimensions, worktop material and the position of the existing waste all interact, and five minutes checking them beforehand avoids a worktop that has to be replaced.',
    },
    faqs: [
      {
        q: 'Can I put a Belfast sink in my existing kitchen?',
        a: 'Often, but not always. The cabinet has to be modified or replaced to carry the weight, the worktop has to be cut back around it, and the tap moves into the worktop. It is a bigger job than a straight swap and worth pricing as one.',
      },
      {
        q: 'Why is my new sink draining slowly?',
        a: 'Look at the trap and the pipe run before blaming the sink. A trap of the wrong depth, a sagging flexible waste or a pipe with too little fall will all hold water back. If the washing machine or dishwasher is also on that waste, it may simply be carrying more than it can take.',
      },
      {
        q: 'Can a washing machine and a dishwasher share the sink waste?',
        a: 'Two appliances on one sink waste is possible but it is the point where problems start. If both run at once and the sink is in use, a standpipe for one of them is the more reliable arrangement.',
      },
      {
        q: 'Do you supply the sink?',
        a: 'No. Buy the sink and tap you actually want and we will fit them. Send us the model and a photo of what is under the current sink and we can tell you what the job involves before anyone commits to anything.',
      },
    ],
    related: ['general-plumbing', 'bathroom-installation'],
  },

  {
    slug: 'immersion-heater-replacement',
    title: 'Immersion Heater Replacement',
    h1: 'Immersion heater replacement in London',
    metaTitle: 'Immersion Heater Replacement London | Ninja Plumbers',
    metaDescription:
      'Immersion heater replacement across London: failed elements, faulty thermostats and scaled-up cylinders diagnosed and sorted. Call 020 3576 5825.',
    eyebrow: 'Hot water',
    icon: 'heating',
    group: 'heating',
    target: 'immersion heater replacement (260/mo)',
    summary:
      'The electric element in the hot water cylinder — replaced when it fails, and checked before anyone talks about a new cylinder.',
    intro:
      'An immersion heater is an electric element that screws into the side or the top of a hot water cylinder and heats the water directly, much like a very large kettle element. In some homes it is the backup for when the boiler is off or broken. In others, usually converted flats with no gas, it is the only thing heating the water at all. Ninja Plumbers replaces failed elements and thermostats, and checks both before anybody starts discussing a new cylinder.',
    does: [
      'Failed immersion heater elements replaced',
      'Immersion thermostats tested and replaced',
      'No hot water on a cylinder diagnosed',
      'Scaled and seized elements removed',
      'Cylinder drained down and refilled',
      'Honest view on whether the cylinder itself is worth keeping',
    ],
    guidance: [
      {
        title: 'What it is, in plain terms',
        body: 'It is an electric heating element sitting inside the cylinder, with its own switch on the wall and its own thermostat. It is wired independently of the boiler, which is why it still works when the heating does not, and why it can fail while everything else in the house is fine.',
      },
      {
        title: 'How to tell it has failed',
        body: 'The clearest sign is no hot water from the immersion while the heating still runs perfectly well. Lukewarm water that never gets properly hot points the same way, as does an immersion switch that trips the electrics as soon as it is turned on. A tripping circuit means the element has broken down internally and should be left switched off until it is looked at.',
      },
      {
        title: 'London water is what usually kills them',
        body: 'Hard water leaves limescale, and an element sitting in it gets caked in the stuff. The scale acts as insulation, so the element works harder, runs hotter and eventually fails. It also makes an old element awkward to remove, because scale and corrosion effectively weld it into the cylinder boss.',
      },
      {
        title: 'Thermostat or element, and a drain-down either way',
        body: 'A failed thermostat and a failed element look identical from the tap, so both get tested rather than guessed at. Replacing the element means draining the cylinder down first and refilling it afterwards, which is the bulk of the time on the job. The connection at the element is electrical work, and it must be done by someone competent to do it — we will say plainly if what you have needs an electrician rather than us.',
      },
    ],
    aside: {
      title: 'Check this before replacing a cylinder',
      body: 'No hot water often turns out to be a failed element or thermostat rather than a failed cylinder, and those are far smaller jobs. If the cylinder really is at the end of its life, our hot water cylinder installation page covers what replacing it involves.',
    },
    faqs: [
      {
        q: 'My heating works but there is no hot water from the immersion. Why?',
        a: 'That combination usually points at the immersion itself rather than the boiler or the cylinder, because the two run on separate circuits. It is most often the element or its thermostat, and both are tested before anything is replaced.',
      },
      {
        q: 'Why does my immersion heater trip the electrics?',
        a: 'An element that trips the circuit when switched on has broken down inside and is letting current where it should not go. Leave it switched off and have it replaced. Do not keep resetting the trip to get one more tank of hot water out of it.',
      },
      {
        q: 'Is it the thermostat or the element?',
        a: 'You cannot tell from the tap — both give you cold or lukewarm water. A thermostat is the cheaper part, so it gets tested first, but on an old scaled element in a hard water area it is frequently both.',
      },
      {
        q: 'Do you do the electrical side of it?',
        a: 'The connection at the element is electrical work and has to be done by someone competent to carry it out. We are Gas Safe registered and fully insured, our engineers are DBS-checked and directly employed rather than subcontracted, and we will tell you straight if your job needs an electrician instead. Either way the price is agreed before any work starts.',
      },
    ],
    related: ['boiler-repair', 'general-plumbing'],
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
