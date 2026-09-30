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
    blurb: 'Everything in your heating and hot water apart from the boiler: radiators, underfloor loops and cylinders.',
    icon: 'heating',
  },
  {
    slug: 'kitchen',
    label: 'Kitchen & laundry',
    blurb: 'Machines connected with care, so any leak is found at the shop and never beneath your floorboards.',
    icon: 'appliance',
  },
  {
    slug: 'bathroom',
    label: 'Bathrooms & pumps',
    blurb: 'Pumps, pressure and pumped waste for the spots gravity cannot manage alone.',
    icon: 'bathroom',
  },
  {
    slug: 'water',
    label: 'Water supply & treatment',
    blurb: 'The supply coming into your home, and the toll London’s hard water takes on everything it feeds.',
    icon: 'water',
  },
];

export const appliances: Appliance[] = [
  {
    slug: 'water-softener-installation',
    title: 'Water Softener Installation',
    h1: 'Water softener installation across London',
    metaTitle: 'Water Softener Installation in London | Ninja Plumbers',
    metaDescription:
      'Water softener installation in London, sized for your household and fitted with a bypass valve, drain and salt set-up. Call Ninja Plumbers on 020 3576 5825.',
    eyebrow: 'Hard water',
    icon: 'water',
    group: 'water',
    target: 'water softener installation (2,400/mo) · water softener installation london (140/mo)',
    summary:
      'Hard London water wears your home down slowly. We size, fit and service softeners to stop it.',
    intro:
      'Most of London draws its water from chalk, so the water from most London taps is hard enough to cut a boiler’s working life, clog a shower head and leave a white crust wherever it dries. Rather than cleaning up after the scale, a water softener stops it forming in the first place. Ninja Plumbers works out the right size of softener for your home, installs it, and services the units already tucked away under kitchen sinks.',
    does: [
      'Water softeners fitted at the right size for your household',
      'A bypass valve, so you keep running water while the unit is serviced',
      'Drain and overflow pipework connected in line with regulations',
      'One tap left on hard water for drinking and cooking',
      'Repairs, resin checks and servicing on units already in place',
      'Scale reducers for homes without room for a full softener',
    ],
    guidance: [
      {
        title: 'Yes, London’s water is hard',
        body: 'Over most of the area Thames Water supplies, the water is rated hard or very hard. It is the reason a kettle furs up within months and a shower screen never looks clear. Your cleaning is not at fault; the water is.',
      },
      {
        title: 'Where it sits shapes the work',
        body: 'The unit belongs on the rising main, just past the stopcock and ahead of every other point that draws water, and it needs a drain close by. In most homes that puts it under the kitchen sink. If the main already passes through a garage or utility room, that is often the easier spot. Give us a rough idea of where the stopcock is and we can often answer by phone.',
      },
      {
        title: 'Leave one tap on hard water',
        body: 'Softening raises the sodium level, so the advice is to leave a single tap unsoftened for drinking, cooking and the kettle. We include that tap as standard, not as an add-on.',
      },
      {
        title: 'The running cost is salt, and not much of it',
        body: 'Most machines accept block or tablet salt, and blocks are the easier of the two to lift. An average household goes through a few pounds a month. A softener sold as needing no salt at all is really a scale reducer, and that is a different product.',
      },
    ],
    aside: {
      title: 'If you do not need one, we will say so',
      body: 'Now and then the trouble is just one scaled shower head or a single furred tap, and dealing with that costs far less than fitting a softener. Ninja Plumbers would rather fix the small problem at a small price and be asked back than sell you more than you need.',
    },
    faqs: [
      {
        q: 'Is a softener good for my boiler?',
        a: 'Yes. It keeps fresh scale out of the heat exchanger, which suffers most from hard water and costs the most to replace. Scale that has already built up stays put, though; removing it takes a separate descale.',
      },
      {
        q: 'Does a softener need a drain?',
        a: 'It does. A softener rinses itself on a regular cycle, and that rinse water has to drain away. This need is usually what fixes where the unit can go.',
      },
      {
        q: 'Can you look after a softener fitted by someone else?',
        a: 'Yes, whoever installed it. The fault is usually a valve, a blocked injector or salt bridging, not the resin, and each of those can be repaired.',
      },
      {
        q: 'What difference will I see?',
        a: 'Soap lathers more easily and the shower screen stays clear, which most people spot quickly. Those with very sensitive skin often feel a change as well. The part you will not see is the scale no longer collecting inside the heat exchanger.',
      },
    ],
    related: ['general-plumbing', 'boiler-service'],
  },

  {
    slug: 'underfloor-heating-installation',
    title: 'Underfloor Heating',
    h1: 'Underfloor heating installation across London',
    metaTitle: 'Underfloor Heating Installation in London | Ninja Plumbers',
    metaDescription:
      'Underfloor heating installation in London: wet systems with manifolds, zoning, screed or low-profile boards, and cold loops repaired. Call 020 3576 5825.',
    eyebrow: 'Wet systems',
    icon: 'heating',
    group: 'heating',
    target: 'underfloor heating installation (1,600/mo) · underfloor heating installation london (140/mo)',
    summary:
      'Water-fed underfloor heating for extensions and refits, and repairs when a loop stops giving out heat.',
    intro:
      'Wet underfloor heating takes its heat from the boiler, not from the electricity supply. Pipe loops are laid in or beneath the floor and fed from a manifold, and the controls let each room run at a temperature of its own. The system makes most sense in an extension or full refurbishment, and much less in a single existing room that needs a little extra warmth, and Ninja Plumbers will say plainly which of those describes your project before a single pipe is laid.',
    does: [
      'Water-fed underfloor heating for extensions and refits',
      'Manifolds fitted, flow rates set and loops balanced',
      'Screed systems, or low-profile boards where height is limited',
      'Thermostats, zone valves and wiring centres',
      'Connection to your existing boiler, cylinder or heat pump',
      'Tracing and repairing faults on loops that no longer heat',
    ],
    guidance: [
      {
        title: 'We fit water-fed loops, not electric mats',
        body: 'Electric mats count as electrical work, not plumbing, and tend to make sense only in a small bathroom. This page covers wet systems alone, where water from your heating circulates through pipe loops. Been quoted electric for an entire floor? Ask someone else to check the running costs.',
      },
      {
        title: 'Height is often what decides it',
        body: 'Traditional screed lifts the floor noticeably. Low-profile boards add far less height, but each square metre costs more. In a London flat, door heights and floor levels are already set, so that difference in build-up tends to settle which system will work long before anything else is weighed up.',
      },
      {
        title: 'It needs water at a lower temperature',
        body: 'Underfloor loops work far cooler than radiators do. Adding them to a radiator system calls for a blending valve and the right controls. Without those, you end up with a warm floor on one level and a cold one on the other, or a boiler that wears itself out short-cycling.',
      },
      {
        title: 'A whole-house retrofit seldom pays',
        body: 'Taking up every floor in a lived-in home for underfloor heating hardly ever pays for itself compared with better radiators and controls. It earns its place when the floor is being lifted for other reasons.',
      },
    ],
    aside: {
      title: 'Settle it before the floor is laid',
      body: 'Involve Ninja Plumbers while the extension or refit is still on paper, not after the screed has gone down. An hour of advice at that stage is the cheapest part of the whole project.',
    },
    faqs: [
      {
        q: 'Does it work under wooden or engineered floors?',
        a: 'Engineered boards and most tiles sit over it happily. Solid timber shifts as it heats up, so the board needs choosing with care and the flow temperature should stay low. Thick carpet and heavy underlay hold the heat back before it gets into the room, while a thin underlay is normally fine.',
      },
      {
        q: 'Can my boiler run underfloor heating?',
        a: 'In most cases, provided the controls are right. The questions are how far the boiler can turn itself down and whether the system can be split into proper zones. We check both before we quote, not afterwards.',
      },
      {
        q: 'How quickly does it heat up?',
        a: 'Expect hours, not minutes, because a screed floor is a big, slow mass to warm. For that reason it runs on a schedule and is left alone, instead of being switched on and off the way a radiator is.',
      },
      {
        q: 'A loop has stopped heating. Can it be fixed?',
        a: 'In most cases. The usual cause is a blocked loop, a stuck actuator or trapped air, not a burst pipe. We test each loop at the manifold, so the floor stays down.',
      },
    ],
    related: ['boiler-installation', 'boiler-service'],
  },

  {
    slug: 'radiator-installation-and-power-flushing',
    title: 'Radiators & Power Flushing',
    h1: 'Radiator installation and power flushing across London',
    metaTitle: 'Power Flushing & Radiators in London | Ninja Plumbers',
    metaDescription:
      'Power flushing and radiator installation in London: sludge flushed out, new radiators hung and the whole system balanced. Call Ninja Plumbers 020 3576 5825.',
    eyebrow: 'System cleaning',
    icon: 'heating',
    group: 'heating',
    target: 'central heating power flush (1,300/mo) · radiator power flush (590/mo) · powerflushing (260/mo)',
    summary:
      'New and relocated radiators, and sludged systems flushed out properly instead of dosed with more chemicals.',
    intro:
      'Radiators with a cold band along the bottom, rooms that warm up while others stay chilly, black water spurting out when you open a bleed valve: each of these points to sludge. Sludge is simply corrosion debris carried round the pipes until it drops out where the flow is slowest, and a power flush is the way to clear it. The second job on this page is simpler. We fit new radiators, and take existing ones off the wall and put them back so a decorator can work behind them.',
    does: [
      'Power flushing central heating clogged with sludge',
      'Chemical clean followed by fresh inhibitor',
      'A magnetic filter added during the same visit',
      'New radiators hung, and old ones replaced like for like',
      'Radiators relocated, or taken down for decorating and rehung',
      'Balancing a system where some rooms heat and others lag',
    ],
    guidance: [
      {
        title: 'A cold bottom edge points to sludge',
        body: 'A radiator cold across the top has air in it, and bleeding sorts that out. One that is hot at the top and cold along the bottom has debris settled inside, and bleeding it achieves nothing. That second kind is the one to flush.',
      },
      {
        title: 'Flushing is not the fix for everything',
        body: 'When a single radiator is cold and the others heat normally, the fault usually lies with that radiator or its valve, not with the system. Flushing a whole house to cure one radiator costs far more than it should, and we will tell you so.',
      },
      {
        title: 'Add a filter instead of flushing twice',
        body: 'Fitted on the return pipe, a magnetic filter traps fresh debris as it forms after the flush, and a yearly clean-out of the filter keeps the water clear from then on. Leave it out, and a newly cleaned system begins gathering sludge again almost at once.',
      },
      {
        title: 'Take care with old pipes and a worn boiler',
        body: 'Pushing a strong flush through old pipes and a heat exchanger that are nearly worn out can turn gradual decline into sudden failure. If your system is in that state, we will warn you before we begin, not after.',
      },
    ],
    aside: {
      title: 'The colour of the water gives it away',
      body: 'Bleed a radiator into a white mug or jug and look at what comes out. Clear water is nothing to worry about. Black water means sludge is circulating, and bleeding will never shift those stubborn cold patches. At that stage Ninja Plumbers would flush the system, not bleed it.',
    },
    faqs: [
      {
        q: 'What are the signs a power flush is needed?',
        a: 'Look for radiators that stay cold along the bottom, rooms that never get properly warm, black water when you bleed, or a boiler that keeps cutting out because it overheats. On its own, any of these might have another cause. When three turn up at once, sludge is almost always behind them.',
      },
      {
        q: 'How long will a power flush take?',
        a: 'A day covers most homes. The number of radiators and the state of the system both play a part, and we would rather spend a full day doing it well than three hours doing it poorly.',
      },
      {
        q: 'Can a flush cure a cold radiator?',
        a: 'Yes, when debris is to blame. If the real cause is an airlock, a seized valve or a system never balanced in the first place, flushing will make no difference, so we check before we start.',
      },
      {
        q: 'Can you hang column and designer radiators?',
        a: 'We can. Tall column models and heavy cast-iron ones need the wall and fixings properly checked, and sometimes the pipes rerouted, so we price those after seeing them in person.',
      },
    ],
    related: ['boiler-service', 'general-plumbing'],
  },

  {
    slug: 'boiling-water-taps',
    title: 'Boiling Water Taps',
    h1: 'Boiling water tap installation across London',
    metaTitle: 'Boiling Water Tap Installation in London | Ninja Plumbers',
    metaDescription:
      'Boiling water tap installation in London, for instant hot taps too, with the tank, power supply, filter and servicing all covered. Call 020 3576 5825.',
    eyebrow: 'Kitchen taps',
    icon: 'tap',
    group: 'kitchen',
    target: 'instant boiling water tap (1,300/mo) · boiling water tap installation (260/mo)',
    summary:
      'Boiling taps for instant hot water, plumbed in and filtered, with the details the brochure leaves out dealt with too.',
    intro:
      'The installation itself is straightforward. What catches people out are two points the brochure rarely spells out: you need a power socket beneath the sink, and the storage tank takes up cupboard space you were most likely using already. Neither causes trouble if it is planned for before the kitchen is fitted, and that is why it pays to bring Ninja Plumbers in early. We install new boiling water taps, replace old ones and look after existing installations.',
    does: [
      'Boiling water taps fitted, most makes covered',
      'Planning the under-sink cupboard and where the tank will sit',
      'Isolation valves, so servicing never means draining the house',
      'Filters fitted, with cartridges changed on a schedule',
      'Swapping an old boiling tap, or going back to a plain mixer',
      'Units that combine boiling, filtered and chilled water',
    ],
    guidance: [
      {
        title: 'Plan for a socket in the sink cupboard',
        body: 'Because the tank runs on electricity, the cupboard needs a switched fused spur or a socket. If yours has neither, our electricians can add one during the same visit, so let us know when you book.',
      },
      {
        title: 'Expect to lose some cupboard space',
        body: 'The tank is about as big as a small bin and needs room to breathe. In a compact kitchen, it often ends up where the bin used to live. Decide on the layout before you buy the tap.',
      },
      {
        title: 'Budget for filters from day one',
        body: 'With London’s hard water, the cartridge stops scale building up in the tank. Missing cartridge changes is the leading reason these units fail before their time, and a new tank costs more than several years of the filters that would have saved it.',
      },
      {
        title: 'Child safety comes with one proviso',
        body: 'All makes have a child-resistant action on the boiling outlet. It works as a deliberate two-step movement, not a lock, so show children how it operates instead of trusting that it is out of their reach.',
      },
    ],
    aside: {
      title: 'Call us before you order',
      body: 'Tell Ninja Plumbers about your sink, the cupboard and whether there is a socket, and one short phone call is normally enough to say if the tap you like will fit. There is no charge for that, and it spares you the hassle of sending one back.',
    },
    faqs: [
      {
        q: 'Will I need an electrician too?',
        a: 'Only when the cupboard has no socket or fused spur yet. If there is one, we wire straight into it. If there is not, our electricians can fit one during the same job, and that is part of the price agreed before work begins. There is no second trade for you to arrange.',
      },
      {
        q: 'How big is the tank?',
        a: 'Plan for something roughly as big as a small kitchen bin, and leave room around it for air and for changing the filter. Sizes differ between makes, so send us the model number and we will confirm.',
      },
      {
        q: 'Do you service boiling taps fitted by others?',
        a: 'We do. Changing filters, descaling and fixing valve faults are everyday work for us, whatever the brand and whoever put it in.',
      },
      {
        q: 'What do they cost to run?',
        a: 'Keeping the tank hot draws some standby power, balanced against not boiling a whole kettle for a single cup. Filter cartridges are the larger cost, and in hard water there is no avoiding them.',
      },
    ],
    related: ['general-plumbing', 'bathroom-installation'],
  },

  {
    slug: 'washing-machine-plumbing',
    title: 'Washing Machine Plumbing',
    h1: 'Washing machine plumbing across London',
    metaTitle: 'Washing Machine Plumbing in London | Ninja Plumbers',
    metaDescription:
      'Washing machine plumbing in London: new machines connected, moved or cured of leaks, with valves, standpipes and wastes fitted properly. Call 020 3576 5825.',
    eyebrow: 'Appliances',
    icon: 'appliance',
    group: 'kitchen',
    target: 'washing machine plumber (720/mo) · washing machine installation london (110/mo)',
    summary:
      'Washing machines connected the right way, moved to another room, or stopped leaking where they already sit.',
    intro:
      'Connecting a washing machine seems minor, yet it can fail in costly ways. A waste hose gets jammed into an untrapped pipe, a valve has been dripping for months unnoticed, or the machine sits on a floor that is slightly out of level. Ninja Plumbers takes the time to get it right instead of rushing it, and we can move a machine to a different room as long as the pipes can sensibly be run there.',
    does: [
      'New washing machines connected and tested',
      'Hot and cold valves added where none exist',
      'A standpipe and trap fitted for the waste',
      'Relocating a machine to a garage, utility room or different wall',
      'Leaks from the valves, the waste or the machine itself',
      'Cold water feeds for ice makers and American-style fridge freezers',
    ],
    guidance: [
      {
        title: 'The hose usually leaks before the machine does',
        body: 'Fill hoses break down at the bend, and the rubber washer inside goes hard. When you find water beneath a machine that is fairly new, check the valve and both hose ends before suspecting the appliance.',
      },
      {
        title: 'Give the waste a proper standpipe',
        body: 'The hose should drop into a trapped standpipe, with an air gap left above the water inside. Feed it directly into a sink waste or an open pipe and you invite drain odours back into the kitchen, or a drum that siphons empty halfway through a wash.',
      },
      {
        title: 'A garage move can be harder than it looks',
        body: 'Pipes have to be run out to it and kept safe from frost. In many London terraces, the route is longer than you would guess. Check with us before buying the machine, not afterwards.',
      },
      {
        title: 'Close the valves before a holiday',
        body: 'While you are away for a fortnight, those valves behind the machine are all that stands between mains pressure and the kitchen floor. Shutting them off is free.',
      },
    ],
    aside: {
      title: 'One machine is a perfectly good reason to call',
      body: 'Plenty of people ask Ninja Plumbers to connect a single machine. It is priced in the same plain way as a bigger job, and we settle the figure with you before we start.',
    },
    faqs: [
      {
        q: 'What if there is no existing connection point?',
        a: 'In most homes we can add one. That involves taking a supply and a waste to the new spot, which is simple in most kitchens and harder in a concrete-floored flat. After a look, we will tell you which applies.',
      },
      {
        q: 'Can you connect the water to an American-style fridge freezer?',
        a: 'We can. The fridge needs its own cold supply and an isolation valve, and we usually fit it during the same visit as any other kitchen work.',
      },
      {
        q: 'My machine only leaks during the spin. Why?',
        a: 'The waste is the likely culprit, not the supply. Often the hose sits too deep in the standpipe, or a partial blockage only spills over when the drain is taking full flow. Both are quick to find.',
      },
      {
        q: 'Will you remove the old machine?',
        a: 'We can disconnect it and carry it out. Disposal is usually best left to the shop delivering the new one, as most offer that when they deliver.',
      },
    ],
    related: ['general-plumbing', 'drain-unblocking'],
  },

  {
    slug: 'water-meter-installation',
    title: 'Water Meter Installation',
    h1: 'Water meter installation and relocation across London',
    metaTitle: 'Water Meter Installation in London | Ninja Plumbers',
    metaDescription:
      'Water meter installation in London: pipework, moved meters and split shared supplies, plus a straight word on what your supplier fits free. Call 020 3576 5825.',
    eyebrow: 'Supply',
    icon: 'water',
    group: 'water',
    target: 'water meter installation (720/mo) · water main connection (170/mo)',
    summary:
      'Plumbing work for a switch to a meter, including the shared supplies that hold it up.',
    intro:
      'Few firms selling meter installation mention this first, but your water company fits the meter at no cost as long as your supply allows it. It will not change the pipes inside your home, divide a supply shared between flats, or shift a meter to make room for a new kitchen. Those jobs are what Ninja Plumbers takes on. If the free route would do the job for you, we will send you there rather than quote.',
    does: [
      'Changes to pipework so a meter can go in',
      'Relocating a meter already fitted indoors',
      'Splitting shared supplies in converted flats',
      'Getting into and repairing boundary boxes',
      'Replacing the stopcock during the same work',
      'New supply pipes where the old one is what stands in the way',
      'Water main connections for new builds and extensions',
    ],
    guidance: [
      {
        title: 'The meter itself costs you nothing',
        body: 'Thames Water and other suppliers fit meters free of charge wherever the supply allows. Contact them before anyone else. Call us once they have visited and said it cannot be done, or when something has to be moved.',
      },
      {
        title: 'A shared supply is what usually holds things up',
        body: 'In many Victorian houses split into flats, one supply pipe serves every flat. No single flat can be metered until that pipe is divided into a run for each one. That division is the real work, so it helps to understand it early, before deciding whether a meter is worth chasing at all.',
      },
      {
        title: 'Swap the stopcock while the pipes are open',
        body: 'With the pipework already exposed, a stopcock that is stiff, seeping or seized should be replaced then and there. Leaving it for later means a second full drain-down.',
      },
      {
        title: 'Rule out a leak before you switch',
        body: 'An underground leak on your supply becomes your bill once a meter is in. Before committing, turn everything off and watch whether the meter moves, or have us trace the leak first.',
      },
    ],
    aside: {
      title: 'Free where free is possible',
      body: 'If your water company can handle it at no cost, Ninja Plumbers will point you to them before anything else. We are happy to be the ones you call back for the work they are unable to do.',
    },
    faqs: [
      {
        q: 'Do you install the meter itself?',
        a: 'No. The meter is the water company’s property, and fitting it is their job. We carry out the pipework that makes it possible, and we relocate meters already installed indoors.',
      },
      {
        q: 'Is a meter worth switching to?',
        a: 'As a rough rule, with fewer occupants than bedrooms a meter tends to be cheaper. Most suppliers offer an online calculator and allow you to switch back within a fixed period.',
      },
      {
        q: 'Our building has one shared supply. What happens next?',
        a: 'Before any flat can have its own meter, the shared pipe must be divided into separate runs. That is a proper job, and the freeholder normally has to approve it, so get a price before promising anything to your neighbours.',
      },
      {
        q: 'Can the meter be moved as part of a new kitchen?',
        a: 'Yes, if the new spot is sensible and still easy to read. Let us know where the units will go and we will explain the options.',
      },
    ],
    related: ['general-plumbing', 'leak-detection'],
  },

  {
    slug: 'sump-pumps',
    title: 'Sump Pumps',
    h1: 'Sump pump installation across London',
    metaTitle: 'Sump Pump Installation for London Basements | Ninja Plumbers',
    metaDescription:
      'Sump pump installation for London basements and cellars, plus replacements, servicing, backup pumps and high-water alarms. Call Ninja Plumbers 020 3576 5825.',
    eyebrow: 'Groundwater',
    icon: 'pump',
    group: 'bathroom',
    target: 'sump pump installation (480/mo)',
    summary:
      'Dry basements and cellars: pumps, backups and alarms, with the water sent somewhere it is allowed to go.',
    intro:
      'London clay keeps hold of water, so any basement below the water table will let some in, whatever its walls are made of. A sump chamber and pump collect that water in one place and send it back out along a set route, instead of leaving it to spread across the floor. Ninja Plumbers fits these systems, replaces pumps that have given up, and services the ones sitting out of sight under covers that most owners have never opened.',
    does: [
      'Sump chambers and pumps installed',
      'Swapping out failed or undersized pumps',
      'Twin-pump set-ups and battery backup',
      'Non-return valves and discharge pipework',
      'High-water alarms and float switch faults',
      'Yearly testing and servicing',
    ],
    guidance: [
      {
        title: 'A pump does not waterproof a basement',
        body: 'The pump deals with water once it is inside. Keeping water out is a separate matter. If you are turning the basement into living space, the pump is one element of a full tanking and drainage scheme, and it cannot stand in for one.',
      },
      {
        title: 'A single pump can fail without warning',
        body: 'With only one pump in a basement no one looks at every day, a flooded floor is often the first sign it has stopped. Adding a backup pump set on a higher float, or failing that a high-water alarm, costs little next to the damage it saves.',
      },
      {
        title: 'The law cares where the water ends up',
        body: 'Groundwater must not go into the foul sewer. It must discharge to a soakaway or a surface water drain, and a mistake here can bring a bill from the water company, not a fine from somebody else.',
      },
      {
        title: 'Check it before the rain arrives',
        body: 'In September, tip a bucket of water into the sump and make sure it pumps out. A pump left dry all summer with its float stuck is a very familiar autumn call-out.',
      },
    ],
    aside: {
      title: 'A battery backup pays for itself',
      body: 'Storms and power cuts tend to turn up together. A battery that keeps the pump going for several hours after the power fails is, pound for pound, close to the cheapest protection Ninja Plumbers can install.',
    },
    faqs: [
      {
        q: 'Is a backup pump really necessary?',
        a: 'Yes, if people live in the basement, it holds things you value, or you cannot check on it every day. For a concrete-floored cellar that stands empty, an alarm may do.',
      },
      {
        q: 'How often does it need a service?',
        a: 'Every year, plus a manual test two or three times in between. A service mainly involves cleaning the chamber, checking how freely the float moves and making sure the non-return valve still seals.',
      },
      {
        q: 'Can the pump empty into the drain outside?',
        a: 'A surface water drain is usually fine. The foul drain generally is not. Our first check is which kind you have outside.',
      },
      {
        q: 'Heavy rain floods my basement. Will a pump solve it?',
        a: 'It can, but sometimes water is entering where it really should not, and a pump would only hide the problem instead of solving it. We will give you a straight answer about which applies, even if that means more work than a pump alone.',
      },
    ],
    related: ['drain-unblocking', 'emergency-plumbing'],
  },

  {
    slug: 'shower-pumps',
    title: 'Shower Pumps',
    h1: 'Shower pump installation across London',
    metaTitle: 'Shower Pump Installation in London | Ninja Plumbers',
    metaDescription:
      'Shower pump installation in London, with positive or negative head pumps matched to your system and a frank view on whether pumping helps. Call 020 3576 5825.',
    eyebrow: 'Pressure',
    icon: 'pump',
    group: 'bathroom',
    target: 'shower pump installation (390/mo)',
    summary:
      'Feeble gravity-fed showers given a proper pump, and a frank answer on whether a pump will fix yours.',
    intro:
      'If your shower draws from a cold tank in the loft, a pump can turn it into one you actually enjoy using. If it runs directly from a combi boiler, no pump can be added, and anyone who claims otherwise is selling you something that will not work. That is why Ninja Plumbers starts every shower pump job by finding out which of those two systems your home has.',
    does: [
      'Pumps fitted to gravity-fed shower systems',
      'Swapping out noisy or failed pumps',
      'Positive and negative head pumps matched to the system',
      'Accumulators and whole-house pressure pumps',
      'Mounting, vibration and noise problems',
      'Diagnosing pumps that cut out or keep running',
    ],
    guidance: [
      {
        title: 'A combi system cannot take a pump',
        body: 'Combis heat mains water as you use it, and pumping directly off the mains is not allowed. When a combi-fed shower is weak, the cause lies elsewhere: the supply pipe, a valve left half shut, or a shower head full of scale.',
      },
      {
        title: 'Head type matters more than it sounds',
        body: 'Whether you need a positive or negative head pump depends on the exact height of the cold tank above the shower outlet. Choose wrongly and the pump will not start, or will not stop. That mistake is the most frequent reason a new pump fails within months.',
      },
      {
        title: 'Pumps make noise, so placement counts',
        body: 'Screw a pump to a joist beneath a bedroom and the whole house will hear it. Set on a solid base with anti-vibration feet and flexible hoses on both sides, it becomes a quiet hum in the airing cupboard.',
      },
      {
        title: 'Trapped air ruins pumps',
        body: 'Pumps that die young have usually been drawing air through the tank feed. A correctly installed feed does more for its lifespan than the brand you choose.',
      },
    ],
    aside: {
      title: 'If a pump cannot help, we will say so',
      body: 'No pump will improve a mains-fed shower, and Ninja Plumbers would sooner explain that on the phone than arrive and install something we know will not work.',
    },
    faqs: [
      {
        q: 'Will a pump work on my flat’s shower?',
        a: 'Only when the shower is supplied by a stored cold tank and a hot water cylinder. On a combi or an unvented mains-pressure system, it cannot, though there is normally some other way to improve it.',
      },
      {
        q: 'My pump carries on after the shower is off. Why?',
        a: 'Most often a valve letting by or a dripping outlet is holding the flow switch on. Now and then the pump is at fault. Get it seen to soon, as running on is what burns pumps out.',
      },
      {
        q: 'What lifespan should I expect from a shower pump?',
        a: 'Years, not decades. Installation counts for more than the price you paid: the feed pipes, the mounting and the correct head type largely decide how long it keeps going.',
      },
      {
        q: 'Can a noisy pump be made quieter?',
        a: 'Often it can. Flexible hoses, anti-vibration mounts and relocating it away from a surface that resonates cure most noise without any new parts.',
      },
    ],
    related: ['bathroom-installation', 'general-plumbing'],
  },

  {
    slug: 'electric-shower-installation',
    title: 'Electric Shower Installation',
    h1: 'Electric shower installation across London',
    metaTitle: 'Electric Shower Installation in London | Ninja Plumbers',
    metaDescription:
      'Electric shower installation in London: new units fitted and old ones replaced, with the cable and kW load checked before anything goes up. Call 020 3576 5825.',
    eyebrow: 'Self-contained showers',
    icon: 'tap',
    group: 'bathroom',
    target: 'electric shower installation (was: electric shower repair, 260/mo)',
    summary:
      'Not a shower pump but a standalone unit that heats mains water as you use it, installed right the first time.',
    intro:
      'Inside an electric shower is a heating element that warms cold mains water as it passes through. A shower pump is a different product altogether: it only raises the pressure of water that has already been heated. Because an electric shower needs no hot supply and no boost, it is a good match for a flat with low water pressure. Ninja Plumbers installs new units, replaces worn ones, and checks that your wiring can really handle the load before we start on the wall.',
    does: [
      'Electric showers installed, most makes covered',
      'Swapping an old unit for the same rating or a higher kW',
      'An isolation valve on the cold feed where one is missing',
      'Existing cable and breaker checked against the new unit’s load',
      'Position and pipework for a shower in a brand-new spot',
      'A dedicated circuit added or upgraded when required',
    ],
    guidance: [
      {
        title: 'Electric showers and shower pumps are different things',
        body: 'Because an electric shower heats mains water itself, it needs neither a hot supply nor a pump. That is why it copes in a low-pressure flat where a pumped shower will not. If your shower needs more pressure rather than more heat, the Shower Pumps page is the one to read.',
      },
      {
        title: 'More kW means checking the cable, not only the unit',
        body: 'Stepping up from around 8.5kW to 10.5kW or more draws a lot more current, and the cable and breaker you already have may not be rated for it. Ninja Plumbers checks this before you pay for the more powerful unit, rather than once it has been fitted.',
      },
      {
        title: 'One team for the wiring and the plumbing',
        body: 'Running a dedicated fused circuit from the consumer unit is notifiable electrical work. If a suitable circuit is already there for the new shower, we connect to it. If not, our electricians fit or upgrade it first, and that cost is in the price agreed before work starts, so there is no second trade to arrange.',
      },
      {
        title: 'Your mains flow sets the limits',
        body: 'A more powerful unit relies on a good cold flow rate to perform. With a weak mains supply, the largest model can give you lukewarm water at full flow instead of a hot shower, so check this before settling on a rating.',
      },
    ],
    aside: {
      title: 'Electrics checked before any quote',
      body: 'Rather than assume your cable and breaker will cope, we check them against the exact unit you have chosen. It takes around five minutes and saves you from buying a shower your circuit cannot run.',
    },
    faqs: [
      {
        q: 'Can I upgrade to a higher kW shower than my old one?',
        a: 'Often, after the cable and breaker have been checked against the extra load. If they fall short, the circuit needs upgrading first, and our electricians can handle that within the same job. You will know before the quote, not afterwards.',
      },
      {
        q: 'Will I need an electrician and a plumber?',
        a: 'Only when there is no suitable dedicated circuit in place. If one exists, we connect straight to it. If not, our electricians can fit one, and that is covered by the price agreed before work begins.',
      },
      {
        q: 'Can you provide the shower as well?',
        a: 'Either works. We can supply a unit, or fit one you have bought already, and buying it yourself usually costs less than paying a trade markup.',
      },
      {
        q: 'Can you add an electric shower to a room that has never had one?',
        a: 'Yes, as long as the wall will hold the fixings and there is a route for the pipes and cable. We will come and look, then explain what it involves, instead of quoting without seeing it.',
      },
    ],
    related: ['bathroom-installation', 'general-plumbing'],
  },

  {
    slug: 'saniflo-macerator-pumps',
    title: 'Saniflo & Macerator Pumps',
    h1: 'Saniflo and macerator pump installation across London',
    metaTitle: 'Saniflo & Macerator Installation in London | Ninja Plumbers',
    metaDescription:
      'Saniflo and macerator installation in London, plus servicing, unblocking and descaling for basement and loft toilets. Call Ninja Plumbers on 020 3576 5825.',
    eyebrow: 'Pumped waste',
    icon: 'pump',
    group: 'bathroom',
    target: 'saniflo installation (260/mo) · macerator pump installation (20/mo)',
    summary:
      'Toilets in places gravity waste cannot reach, fitted, serviced and unblocked, and a frank view on whether one is right for you.',
    intro:
      'Built into or behind the toilet, a macerator is a compact grinding pump. It lets you put a WC where normal gravity waste pipes cannot go, such as a basement, a loft conversion or the space beneath the stairs. When nothing else will work, it is a sound choice. When it is picked only to avoid a slightly trickier plumbing job, it is a weak one. Ninja Plumbers installs, services and unblocks these units, and will tell you frankly which case yours is.',
    does: [
      'Macerators fitted along with a new WC',
      'Replacement of failed units, most makes',
      'Bathrooms in basements, lofts and under the stairs',
      'Routine servicing and descaling',
      'Jammed units and blockages cleared',
      'Pumped waste for showers, basins and utility rooms',
    ],
    guidance: [
      {
        title: 'Only three things belong in it',
        body: 'Human waste, water and toilet paper, full stop. No wipes, even those labelled flushable, and no sanitary items, cotton buds or kitchen roll. Almost every macerator we are asked to fix has been jammed by one of those.',
      },
      {
        title: 'Use one only when gravity will not work',
        body: 'An ordinary gravity waste down to the soil stack has no moving parts to fail, uses no power and runs in silence. If a run like that can be done at a reasonable cost, choose it. We will tell you when it can, even though it means a smaller job for us.',
      },
      {
        title: 'Plan for power, access and warmth',
        body: 'The unit needs a fused spur, a way to lift it out for servicing, and a spot that stays above freezing. Tiling it in for good is something people regret the first time it has to come out.',
      },
      {
        title: 'Regular descaling keeps them going',
        body: 'With London’s hard water, scale building up on the blades and pressure switch is what ends most units. Descaling once or twice a year costs little and can roughly double how long it works.',
      },
    ],
    aside: {
      title: 'Humming means trouble is coming',
      body: 'If your macerator hums rather than runs, or runs slightly longer each time, it is beginning to clog. Ring Ninja Plumbers then and a service will usually sort it. Let it carry on and you are likely to need a new unit.',
    },
    faqs: [
      {
        q: 'What is safe to flush?',
        a: 'Only human waste, water and toilet paper. So-called flushable wipes cause more failures than anything else we see, because unlike paper they never break up.',
      },
      {
        q: 'What makes it run on or start up by itself?',
        a: 'Most often the WC flush valve is leaking water into the unit, or the pressure switch has scaled up. Both can be repaired, and left alone both waste power and shorten its life.',
      },
      {
        q: 'What lifespan can I expect?',
        a: 'Looked after and descaled on schedule, a good number of years. Given a steady supply of wipes, it may last only months. What you flush affects its life far more than the brand you chose.',
      },
      {
        q: 'Can one serve a toilet in a loft conversion?',
        a: 'Yes, and that is exactly the sort of place they work well. The pumped waste must be taken to a soil stack, and the unit must have power and be reachable for servicing. Both are simpler to arrange while the room is still being built.',
      },
    ],
    related: ['bathroom-installation', 'drain-unblocking'],
  },

  {
    slug: 'whole-house-water-filtration',
    title: 'Water Filtration & Limescale',
    h1: 'Water filtration and limescale systems across London',
    metaTitle: 'Water Filtration Systems in London | Ninja Plumbers',
    metaDescription:
      'Water filtration systems in London: whole-house units, under-sink drinking filters and scale reducers, and a plain answer on which suits you. 020 3576 5825.',
    eyebrow: 'Water quality',
    icon: 'water',
    group: 'water',
    target: 'water filtration system installation (210/mo) · under sink water filter installation (20/mo)',
    summary:
      'Drinking water taps, filters and scale reducers, with a plain answer on which one deals with your problem.',
    intro:
      'Filters, softeners and scale reducers are often sold as if they did much the same job. They do not. A filter improves the taste and quality of the water you drink. A softener alters the minerals in the water supplying the whole house. A scale reducer achieves less than the claims made for either. Ninja Plumbers fits the first two properly, and on the third we give you the realistic picture, not the sales patter.',
    does: [
      'Whole-house filters on the incoming main',
      'Under-sink drinking filters with their own taps',
      'Sediment filters where the mains water arrives dirty',
      'Inhibitors and scale reducers',
      'Filter servicing and cartridge changes',
      'A filter and a softener together, fitted in the correct sequence',
    ],
    guidance: [
      {
        title: 'A filter does not soften water',
        body: 'Filters remove things from the water, such as sediment, chlorine and off tastes. Softeners alter the minerals behind limescale. A drinking filter will do nothing for a furred kettle or scaled taps, and a softener will do nothing for the taste.',
      },
      {
        title: 'Scale reducers and softeners work differently',
        body: 'Electronic and magnetic conditioners come with bold promises, yet they do not take any hardness out of the water. A few households find they help a little further along the pipes, but do not expect softener-level results from one. We tell you that even though it loses us the larger job.',
      },
      {
        title: 'Budget for replacement cartridges',
        body: 'Each filter lasts only so long, and one kept past that point does more harm than having none. Whatever you choose, settle up front how often it needs changing and what that costs.',
      },
      {
        title: 'Start with the problem you want solved',
        body: 'Taste, smell, sediment and scale each have their own fix. Describe what is actually bothering you and we will say which option addresses it. Sometimes none of them does.',
      },
    ],
    aside: {
      title: 'The simple option is often enough',
      body: 'In most homes, one under-sink filter supplying its own drinking tap deals with the real complaint for a fraction of the price of a whole-house system. Ninja Plumbers will tell you that instead of steering you towards the bigger job.',
    },
    faqs: [
      {
        q: 'Should I choose a filter or a softener?',
        a: 'A filter is for taste and drinking water. A softener is for scale in the kettle, the shower and the boiler. Many London homes have both, with a filtered hard-water tap for drinking.',
      },
      {
        q: 'Is filtration necessary in London?',
        a: 'London tap water is safe to drink straight from the supply. A filter improves the taste, cuts the chlorine smell and catches sediment; it does not make the water safer. In an older building with tired internal pipes, though, a sediment filter can make a clear difference to what reaches the tap.',
      },
      {
        q: 'How often should cartridges be replaced?',
        a: 'Usually every six to twelve months; the exact interval depends on the filter and how much water you use. We can book it in as a regular visit, so you do not need to remember.',
      },
      {
        q: 'Does filtration help with limescale?',
        a: 'An ordinary filter does not. A softener does. A scale reducer helps a little, and only in parts of the house. We will not pretend otherwise to make a sale.',
      },
    ],
    related: ['general-plumbing', 'boiler-service'],
  },

  {
    slug: 'outside-tap-installation',
    title: 'Outside Tap Installation',
    h1: 'Outside tap installation across London',
    metaTitle: 'Outside Tap Installation in London | Ninja Plumbers',
    metaDescription:
      'Outside tap installation in London with the check valve the rules require, an indoor isolation valve and a tidy pipe run through the wall. Call 020 3576 5825.',
    eyebrow: 'Garden',
    icon: 'tap',
    group: 'water',
    target: 'outside tap installation (210/mo)',
    summary:
      'Garden taps done right: a check valve, an isolation valve indoors, and nothing to split in the frost.',
    intro:
      'Putting in an outside tap takes a couple of hours, and few additions to a home are as handy. A proper job has three parts. A check valve stops garden water being pulled back into your drinking supply. An isolation valve indoors lets you turn the tap off and drain it each winter. And the pipe passes neatly through the wall. Ninja Plumbers includes all three as standard, with none of them charged as extras.',
    does: [
      'Outside taps fitted to the front or back of the house',
      'A double check valve to satisfy water regulations',
      'An indoor isolation valve for shutting off in winter',
      'Frost-proof taps for exposed pipe runs',
      'Standpipes for gardens and patios away from the house',
      'Seized or leaking outside taps replaced',
    ],
    guidance: [
      {
        title: 'The check valve is the law, not an extra',
        body: 'Under water regulations an outside tap must have backflow protection. Without it, a hose lying in a water butt, or in a bucket of garden chemicals, could siphon back into the water you drink. A tap without one does not comply.',
      },
      {
        title: 'Isolate and drain it before winter',
        body: 'Close the valve indoors and leave the outside tap open for the cold months. Water left sitting in the exposed pipe freezes, expands and splits it, and you often only find the damage behind the wall in spring.',
      },
      {
        title: 'The wall is where the skill goes',
        body: 'Fitting the tap takes no time. Core drilling through solid masonry in exactly the right spot, clear of cables and pipes on the inside, is what needs the care.',
      },
      {
        title: 'Leasehold flats may need consent',
        body: 'Leaseholders may need the freeholder’s permission to drill through an outside wall, and listed buildings or homes in a conservation area may need the council’s. Check before we visit.',
      },
    ],
    aside: {
      title: 'Insist on an indoor isolation valve',
      body: 'It is a cheap little part, yet without it you cannot winterise the tap properly. A tap that cannot be drained down in autumn is precisely the kind that leaves you with split pipes in spring.',
    },
    faqs: [
      {
        q: 'Is permission needed to fit an outside tap?',
        a: 'Not usually for a freehold house. Leaseholders, and owners of listed or conservation-area properties, should ask the freeholder or council first, since the consent is about drilling the external wall.',
      },
      {
        q: 'Can it supply a hose reel or irrigation?',
        a: 'Yes. Let us know what it will supply, as a permanently connected irrigation system calls for stronger backflow protection than a hose used now and then.',
      },
      {
        q: 'Could it freeze over winter?',
        a: 'Not when it has been isolated and drained, which is the job of the indoor valve. Where the pipe run is especially exposed, a frost-proof tap adds extra protection.',
      },
      {
        q: 'Can a tap be put in at the bottom of the garden?',
        a: 'It can, as a standpipe supplied by a buried pipe. It is more work than a tap fixed to the house wall, largely because of digging the trench and laying the pipe deep enough to escape frost, but people ask for it often and Ninja Plumbers fits them regularly.',
      },
    ],
    related: ['general-plumbing', 'emergency-plumbing'],
  },

  {
    slug: 'dishwasher-plumbing',
    title: 'Dishwasher Plumbing',
    h1: 'Dishwasher plumbing across London',
    metaTitle: 'Dishwasher Plumbing in London | Plumbed In | Ninja Plumbers',
    metaDescription:
      'Dishwasher plumbing in London: machines connected, moved or repaired, integrated units included, with wastes and leaks put right. Call 020 3576 5825.',
    eyebrow: 'Appliances',
    icon: 'appliance',
    group: 'kitchen',
    target: 'dishwasher installation london (170/mo) · dishwasher plumber (70/mo)',
    summary:
      'Proper connections for your dishwasher, including integrated models, which have to go in before the door is hung.',
    intro:
      'A dishwasher relies on three connections: a cold supply, an isolating valve of its own, and a waste with a built-in air break. When Ninja Plumbers is called out to one, the waste is usually to blame. Without the high loop it needs, sink water can siphon into the machine, or the machine drains itself empty while still filling.',
    does: [
      'New dishwashers connected and tested',
      'An isolating valve added where none exists',
      'A proper waste connection to a standpipe or sink trap',
      'Built-under and integrated machines installed',
      'Relocating a dishwasher as part of a kitchen refit',
      'Standing water, drainage faults and leaks',
    ],
    guidance: [
      {
        title: 'Most faults start at the waste',
        body: 'Before dropping down to the trap, the drain hose must climb into a loop higher than the machine. Leave that out and dirty water from the sink can find its way into the dishwasher, or the dishwasher empties itself by siphoning and never cleans anything properly.',
      },
      {
        title: 'Get the opening right for an integrated model',
        body: 'Built-in dishwashers leave very little margin, and the connections need to sit in the space behind, not where the machine itself goes. If your kitchen is being fitted, have the pipework set out before the units arrive.',
      },
      {
        title: 'Give it an isolating valve of its own',
        body: 'With a small valve on the cold supply, the machine can be pulled out or replaced without draining anything down. Every dishwasher ought to have one, yet a surprising number are missing it.',
      },
      {
        title: 'Water left in the base may not mean a blocked drain',
        body: 'Standing water is often down to the waste connection, a kinked hose or a clogged filter, not the drain. Check the inexpensive things first, and we will talk you through how before arranging a visit.',
      },
    ],
    aside: {
      title: 'Plan it while the kitchen is being fitted',
      body: 'Ten minutes with Ninja Plumbers while the kitchen is going in, placing the valve and waste in the correct void, saves an afternoon of putting things right afterwards.',
    },
    faqs: [
      {
        q: 'Do you install integrated dishwashers?',
        a: 'We do, and we hang the decor door too where the template and hinges allow. Send the model number and the size of the opening, and we will explain what the job involves.',
      },
      {
        q: 'My dishwasher will not drain. What is wrong?',
        a: 'In nine cases out of ten the waste hose or a blocked filter is to blame, not the machine. If the kitchen sink is slow to empty as well, the fault lies in the shared waste pipe, so it becomes a drainage job instead of an appliance repair.',
      },
      {
        q: 'Can the dishwasher and sink share a waste?',
        a: 'Yes, and that is the usual set-up. The hose goes to the trap’s spigot, with a high loop above. It must never discharge below the water level in the trap.',
      },
      {
        q: 'Will you supply the dishwasher?',
        a: 'No. Buy it from whoever sells it cheapest and we will connect it. That usually saves you more than paying the markup on a trade-supplied machine.',
      },
    ],
    related: ['general-plumbing', 'drain-unblocking'],
  },

  {
    slug: 'hot-water-cylinder-installation',
    title: 'Hot Water Cylinders',
    h1: 'Hot water cylinder installation across London',
    metaTitle: 'Hot Water Cylinder Installation in London | Ninja Plumbers',
    metaDescription:
      'Hot water cylinder installation in London: vented and unvented cylinders replaced and serviced, with immersions and controls put right. Call 020 3576 5825.',
    eyebrow: 'Hot water',
    icon: 'heating',
    group: 'heating',
    target: 'hot water cylinder installation london (70/mo)',
    summary:
      'The airing cupboard tank nobody thinks about until it stops, sized, replaced and serviced.',
    intro:
      'Nobody pays much attention to the hot water cylinder until the taps run cold. Vented cylinders are supplied from a tank in the loft, while unvented ones run directly at mains pressure, and each kind has its own immersion heaters and controls. Ninja Plumbers replaces cylinders, works out the correct size of new one for your household, and services those that are still working well.',
    does: [
      'Replacing vented and unvented cylinders',
      'Sizing a cylinder to your bathrooms and daily use',
      'New immersion heaters and thermostats',
      'Pressure relief valve and expansion vessel faults',
      'Yearly servicing for unvented systems',
      'Timers, controls and cylinder stats',
    ],
    guidance: [
      {
        title: 'Unvented cylinders count as notifiable work',
        body: 'Because an unvented cylinder is a pressurised vessel, fitting or servicing one calls for a dedicated qualification over and above general plumbing skills. Ask anyone you are thinking of hiring to show you theirs. It is a reasonable request, and a good installer will be glad to.',
      },
      {
        title: 'Bathrooms, not square metres, set the size',
        body: 'The right cylinder depends on how many outlets could be running together and how many people shower within the same hour. A large home with a single bathroom needs a smaller one than a small home with three.',
      },
      {
        title: 'A cold tap does not always mean a dead cylinder',
        body: 'With a vented system, the immersion heater or its thermostat is frequently to blame, not the cylinder, and both are cheap to fix. They should be ruled out before anyone replaces the whole cylinder, and that is the order in which Ninja Plumbers checks them.',
      },
      {
        title: 'It no longer has to live in the airing cupboard',
        body: 'Today’s well-insulated cylinders give off very little heat, so the airing cupboard around one no longer dries clothes as it once did. Where space is short, the cylinder can often be moved somewhere more practical.',
      },
    ],
    aside: {
      title: 'An annual service keeps unvented systems going',
      body: 'On unvented cylinders, the parts that usually fail are the expansion vessel and the relief valves. Ninja Plumbers checks both during a service that normally takes less than an hour.',
    },
    faqs: [
      {
        q: 'Should I choose a vented or an unvented cylinder?',
        a: 'An unvented cylinder delivers mains pressure to every tap with no tank in the loft, which fits most modern refits. A vented one is simpler and cheaper to maintain, and perfectly good where the current tank and pressure already do the job.',
      },
      {
        q: 'Would a combi be a better idea?',
        a: 'In some homes. Going combi gives you back the cupboard and gets rid of the loft tank, but it struggles when two showers run together. In a flat with one bathroom it is often the better choice; in a family home with three bathrooms it rarely is.',
      },
      {
        q: 'Why does my hot water only get lukewarm?',
        a: 'Most often the cylinder thermostat has failed, the immersion element is on its last legs, or the heating coil has scaled up over the years. Each can be diagnosed with the cylinder left in place.',
      },
      {
        q: 'Does a cylinder need regular servicing?',
        a: 'An unvented cylinder needs an annual check because of its expansion vessel and safety valves. A vented one needs much less, although the immersion and stat are worth looking at when the boiler is serviced.',
      },
    ],
    related: ['boiler-installation', 'boiler-service'],
  },

  {
    slug: 'kitchen-sink-installation',
    title: 'Kitchen Sink Installation',
    h1: 'Kitchen sink installation across London',
    metaTitle: 'Kitchen Sink Installation in London | Ninja Plumbers',
    metaDescription:
      'Kitchen sink installation in London for inset, undermount and Belfast sinks, with the waste and trap below fitted properly. Call Ninja Plumbers 020 3576 5825.',
    eyebrow: 'Sinks & wastes',
    icon: 'tap',
    group: 'kitchen',
    target: 'kitchen sink installation (210/mo)',
    summary:
      'Sinks fitted new or swapped, with the trap and waste below done properly instead of patched up.',
    intro:
      'A new kitchen sink involves two jobs, and the sink is only half of it. On top, you need the correct cut-out, a sound seal and taps that reach far enough. Underneath sit the waste, the trap and anything else plumbed into them over time. Ninja Plumbers handles both halves, from setting a new sink into the worktop you already have to rebuilding everything below it as part of a refit.',
    does: [
      'New kitchen sinks fitted, sealed and plumbed in',
      'Straight swaps into the worktop already in place',
      'Belfast, undermount and inset sinks installed',
      'Trap, waste and overflow altered to fit the new sink',
      'A dishwasher or washing machine joined to the same waste',
      'Leaking and slow-draining sinks fixed',
    ],
    guidance: [
      {
        title: 'Choosing between inset, undermount and Belfast',
        body: 'Inset sinks rest on a rim inside a hole cut in the worktop, making them the easiest and most forgiving choice. Undermount sinks are fixed below the worktop, which leaves the cut edge visible, so the surface must be up to it: granite and quartz are, most laminates are not. A Belfast or butler sink is exposed at the front with the worktop fitted round it, and the tap is mounted in the worktop, not the sink.',
      },
      {
        title: 'Your worktop matters more than the sink',
        body: 'Once a cut-out is made, it is fixed, and new sinks are seldom the same size as the ones they replace. A ceramic Belfast is heavy even when empty, so it needs a proper base to rest on, not just the sides of an ordinary cabinet. Settle all of this before buying the sink.',
      },
      {
        title: 'Sharing the waste works up to a point',
        body: 'A dishwasher or washing machine is usually joined to the trap’s spigot, its hose looped high before it falls away. Put two machines and a sink on a single small trap and it begins to gurgle and back up. By then, the right fix is a standpipe or a second trap, not yet another adaptor.',
      },
      {
        title: 'When a new sink drains slowly, look below it',
        body: 'A slow-draining new sink is rarely at fault itself. The trap is the usual cause: too deep or too shallow, the wrong kind, or a flexible pipe sagging so water collects in it. After that, suspect the waste run, with too little fall or an old blockage the last sink had been coping with unnoticed.',
      },
    ],
    aside: {
      title: 'Check the cut-out before buying',
      body: 'Many difficult sink jobs begin at the shop counter. The sink’s size, the worktop material and where the current waste sits all affect one another, and a few minutes checking them first can save you replacing a worktop.',
    },
    faqs: [
      {
        q: 'Can a Belfast sink go into my current kitchen?',
        a: 'Often, though not every time. The cabinet must be adapted or swapped to take the weight, the worktop trimmed back round the sink, and the tap moved into the worktop. It is more than a simple swap, so price it as the bigger job it is.',
      },
      {
        q: 'Why does my new sink drain so slowly?',
        a: 'Check the trap and the pipe run before you blame the sink. A trap at the wrong depth, a drooping flexible waste or a pipe without enough fall will each hold water back. And if a dishwasher or washing machine shares that waste, it may just be taking more than it can cope with.',
      },
      {
        q: 'Can the dishwasher and washing machine both use the sink waste?',
        a: 'It can be done, but two machines on one sink waste is where trouble begins. If both are running while the sink is being used, giving one of them its own standpipe is the more dependable set-up.',
      },
      {
        q: 'Will you supply the sink?',
        a: 'No. Choose the sink and tap you really want and we will install them. Send the model and a photo of the space under your current sink, and we can explain the job before anybody commits.',
      },
    ],
    related: ['general-plumbing', 'bathroom-installation'],
  },

  {
    slug: 'immersion-heater-replacement',
    title: 'Immersion Heater Replacement',
    h1: 'Immersion heater replacement across London',
    metaTitle: 'Immersion Heater Replacement in London | Ninja Plumbers',
    metaDescription:
      'Immersion heater replacement in London: dead elements, faulty thermostats and scaled-up cylinders diagnosed and put right. Call Ninja Plumbers on 020 3576 5825.',
    eyebrow: 'Hot water',
    icon: 'heating',
    group: 'heating',
    target: 'immersion heater replacement (260/mo)',
    summary:
      'The electric element inside your hot water cylinder, replaced when it fails and tested before any talk of a new cylinder.',
    intro:
      'An immersion heater is an electric element, screwed into the top or side of the hot water cylinder, that heats the water directly, rather like an oversized kettle element. Some homes keep it as a backup for times when the boiler is off or broken. In others, often converted flats without gas, it is the sole source of hot water. Ninja Plumbers replaces faulty elements and thermostats, and tests both before anyone raises the idea of a new cylinder.',
    does: [
      'Replacement of failed immersion elements',
      'Immersion thermostats tested and swapped',
      'Diagnosing a cylinder with no hot water',
      'Removing elements that are scaled up or seized',
      'Draining and refilling the cylinder',
      'A frank opinion on whether the cylinder is worth keeping',
    ],
    guidance: [
      {
        title: 'Put simply, what is it?',
        body: 'It is a heating element inside the cylinder, run from its own wall switch and controlled by its own thermostat. Because it is wired separately from the boiler, it keeps working when the heating fails, and it can break down while everything else in the house carries on as normal.',
      },
      {
        title: 'Signs that it has stopped working',
        body: 'The most obvious one is no hot water from the immersion while your heating works normally. Water that stays lukewarm and never gets properly hot suggests the same, and so does an immersion switch that trips the power the moment it is turned on. If it trips, the element has failed inside and should stay off until someone has checked it.',
      },
      {
        title: 'Hard London water usually finishes them off',
        body: 'Limescale from hard water coats an element until it is encrusted. That layer insulates it, so the element has to work harder, gets hotter and in the end burns out. Scale and corrosion also make an old element hard to get out, as they all but weld it into the cylinder boss.',
      },
      {
        title: 'Element or thermostat, the cylinder still gets drained',
        body: 'From the tap, a dead thermostat and a dead element look exactly alike, so we test both instead of guessing. Fitting a new element means draining the cylinder beforehand and refilling it after, and that takes up most of the job. Connecting the element is electrical work, which our electricians carry out, so a single visit deals with both sides.',
      },
    ],
    aside: {
      title: 'Rule this out before a new cylinder',
      body: 'When the hot water stops, the culprit is often the element or thermostat, not the cylinder, and those are much smaller jobs. If your cylinder genuinely has reached the end of its life, our hot water cylinder installation page explains what replacing it involves.',
    },
    faqs: [
      {
        q: 'The heating works, but the immersion gives no hot water. Why?',
        a: 'Because the immersion runs on its own circuit, that pattern usually points to the immersion, not the boiler or the cylinder. The element or its thermostat is most often at fault, and we test both before replacing either.',
      },
      {
        q: 'Why does the immersion trip my electrics?',
        a: 'If it trips as soon as it is switched on, the element has failed internally and current is leaking where it should not. Keep it off and get it replaced. Do not keep resetting the switch to squeeze out one more tank of hot water.',
      },
      {
        q: 'Element or thermostat: which has failed?',
        a: 'From the tap you cannot, as either fault leaves the water cold or lukewarm. The thermostat is the less expensive part, so we test it first, but with an old, scaled element in a hard water area both have often failed.',
      },
      {
        q: 'Can you handle the electrical work as well?',
        a: 'Connecting the element is electrical work and must be carried out by someone competent to do it. We cover the plumbing and the electrics alike, we are fully insured, and our engineers are DBS-checked and employed directly, not subcontracted. In every case the price is agreed before any work begins.',
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
