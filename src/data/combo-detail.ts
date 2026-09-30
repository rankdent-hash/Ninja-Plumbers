// Per-combination detail, keyed "service|area".
//
// The angle in combos.ts was not enough on its own: with the service blocks and
// the area blocks both recycled from their parent pages, two combos measured
// 87% word overlap, which is the near-duplicate pattern these pages exist to
// avoid. This file carries what is genuinely specific to each pairing — the
// jobs that actually come up, and a question only someone in that area asks.
//
// None of it claims a job history we cannot evidence. It describes what the
// building stock implies, which is the same basis as the area pages.

export type ComboDetail = {
  points: string[];
  faq: { q: string; a: string };
};

export const comboDetail: Record<string, ComboDetail> = {
  // ---------- Emergency plumbing ----------
  'emergency-plumbing|bromley': {
    points: [
      'Pipes splitting in loft spaces, garages and outbuildings with no heating once a cold spell hits',
      'Old cast iron waste pipes that crack instead of splitting, leaving a slow leak nobody can see',
      'Garden taps left on through winter, which split the pipe inside the wall behind them',
    ],
    faq: {
      q: 'A pipe in my garage has frozen. Is it safe to leave it until the morning?',
      a: 'While the ice is still in it, nothing is escaping, but it will leak as soon as it thaws. Shut the stopcock now and ring us in the morning. If it has thawed already and you can see water running, that needs an engineer tonight.',
    },
  },
  'emergency-plumbing|croydon': {
    points: [
      'Flat leaks that the neighbours downstairs spot before the people in the flat causing them do',
      'Shared supply pipes and communal risers in blocks around the town centre',
      'Ageing heating in interwar semis giving up once the first proper cold arrives',
    ],
    faq: {
      q: 'The flat above is leaking through my ceiling. What should I do?',
      a: 'Switch off the electrics for that room first. Then contact the upstairs neighbour or the building manager: the stopcock that will stop it is nearly always inside their flat, not yours. Ring us at the same time and we will guide you through the next steps.',
    },
  },
  'emergency-plumbing|wimbledon': {
    points: [
      'Failed loft tanks and cylinders sending water down through the house from the top',
      'Older vented systems in which closing the mains stopcock is not enough to stop the water',
      'Bigger houses where water has spread a long way before anyone spots it',
    ],
    faq: {
      q: 'Why is water still coming through after I shut off the mains?',
      a: 'Most likely a loft tank is still draining out through the leak. The tank outlet normally has its own gate valve. Close that, then open every hot tap so the system drains down, and the flow will stop.',
    },
  },
  'emergency-plumbing|islington': {
    points: [
      'Leaks hidden beneath the original floorboards of Georgian and early Victorian houses',
      'Limited access where you cannot just cut into the floor, panelling or plaster',
      'Lower-ground and basement flats that end up with water from every floor above',
    ],
    faq: {
      q: 'Can you still work on my house if it is listed?',
      a: 'We can, though the approach is different. We find the leak before opening anything, since trial holes in listed fabric cause far more trouble than they would in a newer building. Mention it when you book so the engineer knows before arriving.',
    },
  },
  'emergency-plumbing|clapham': {
    points: [
      'House shares where none of the tenants know where to find the stopcock',
      'Burst washing machine and dishwasher hoses in kitchens that get heavy use',
      'Calls from landlords and letting agents whose tenant needs someone out tonight',
    ],
    faq: {
      q: 'I am a tenant. Do I ring you or my landlord?',
      a: 'When water is doing damage right now, shut it off and deal with that before anything else, then let your landlord or agent know. Plenty of them already use us. In an emergency you can ring us yourself and we will come out and bill whoever is responsible, as long as you explain the arrangement at the start.',
    },
  },
  'emergency-plumbing|hackney': {
    points: [
      'Estate communal systems with the isolating valve somewhere outside your own flat',
      'Warehouse conversions whose long, flat waste runs back up',
      'Leaks in commercial kitchens that force the business to shut',
    ],
    faq: {
      q: 'What do I do if the stopcock is not inside my flat?',
      a: 'On estates and in conversions that is normal. Look in a shared cupboard, a riser or on the landing. Ring the caretaker or building manager while you ring us, because getting into that cupboard is usually what sets how quickly the water can be stopped.',
    },
  },
  'emergency-plumbing|fulham': {
    points: [
      'Basement and lower-ground conversions flooding when the sump pump fails',
      'A shared soil stack backing up into whichever flat is lowest',
      'Water finding its way down through a converted terrace into the flat underneath',
    ],
    faq: {
      q: 'The pump has stopped and water is rising in my basement. What can I do straight away?',
      a: 'First make sure the pump is getting power, then check the float switch has not stuck. Those two cause most failures and each takes minutes to put right. If the level keeps climbing after that, leave it and ring us. Fulham High Street is where we are based.',
    },
  },
  'emergency-plumbing|wandsworth': {
    points: [
      'Leaking pipes buried inside side-return and rear extensions',
      'Water appearing well away from the pipe that has actually failed',
      'Sudden pressure loss on sealed systems in the riverside blocks',
    ],
    faq: {
      q: 'Can a damp patch appear far from any pipework?',
      a: 'Easily. Before it shows, water follows joists and runs beneath floors, and in an extended house it can end up a long way from the source. That is why we trace the leak instead of cutting in where the stain happens to be.',
    },
  },
  'emergency-plumbing|ealing': {
    points: [
      'Big houses where a single branch can be shut off while the rest keeps its water',
      'Several bathrooms, added over the decades, on long pipe runs',
      'Shared cold water storage in purpose-built blocks of flats',
    ],
    faq: {
      q: 'Does the water to the whole house need to go off?',
      a: 'Not always. Under most kitchen and bathroom fittings the supply pipe has a small isolation valve, with a screwdriver slot that needs a quarter turn. Close the one feeding the leaking fitting and everywhere else stays on.',
    },
  },
  'emergency-plumbing|brixton': {
    points: [
      'Breakdowns in commercial kitchens that keep a business shut until they are repaired',
      'Visits outside opening hours so service carries on and no trade is lost',
      'Shared systems in converted terraces and on estates',
    ],
    faq: {
      q: 'Can you come to our restaurant once we have closed?',
      a: 'We can, and for most kitchen jobs it is the only time that makes sense. Give us your service hours when you ring and we will plan the visit to avoid them.',
    },
  },
  'emergency-plumbing|harrow': {
    points: [
      'Joints failing where newer pipe has been connected to the original',
      'Old galvanised pipe that rusts from within until it eventually splits',
      'Bathrooms in loft conversions fed by pipe runs the first system was never designed for',
    ],
    faq: {
      q: 'Should I worry that my pipes are the old grey metal kind?',
      a: 'That is galvanised steel, which rusts internally. The bore narrows slowly for years, then the pipe gives way without warning. If you still have it, plan to replace it before it turns into an emergency.',
    },
  },
  'emergency-plumbing|balham': {
    points: [
      'Leaks from the upstairs flat showing up first in the one below',
      'One soil stack shared by two separate households',
      'Response time set by how quickly someone can get into the flat above',
    ],
    faq: {
      q: 'Water is coming into my downstairs flat. Is it my responsibility?',
      a: 'In most cases, no. In Balham conversions the leak usually starts somewhere above you. Contact the upstairs flat while you ring us, as we will need to get in there to stop it, not just to deal with the mess below.',
    },
  },

  // ---------- Boiler repair ----------
  'boiler-repair|wimbledon': {
    points: [
      'Vented systems running a hot water cylinder instead of a combi',
      'Hot water problems traced to the cylinder rather than the boiler',
      'A boiler-only repair priced side by side with replacing the whole system',
    ],
    faq: {
      q: 'Should I swap my hot water tank for a combi?',
      a: 'Not as a matter of course. Where a house has several bathrooms, a cylinder often gives better hot water than any combi. We will give you a straight answer on what suits your home, not just pick whichever is simpler to fit.',
    },
  },
  'boiler-repair|ealing': {
    points: [
      'Boilers expected to supply more bathrooms than their sizing allowed',
      'Complaints about flow and pressure caused by the system, not the boiler itself',
      'Top floors of large houses that the heating never fully warms',
    ],
    faq: {
      q: 'Why does my shower run cold when someone turns on a tap? Is the boiler faulty?',
      a: 'Unlikely. It is the textbook symptom of a combi trying to feed two outlets together. The issue is size, not a fault, so fitting another boiler of the same output will not help.',
    },
  },
  'boiler-repair|croydon': {
    points: [
      'Modern boilers connected to the pipework of the original system',
      'Faults that keep coming back because of sludge in an ageing circuit',
      'Power flushing when a repair on its own will not last',
    ],
    faq: {
      q: 'My boiler is new. Why does it keep failing?',
      a: 'Often the system was not cleaned out when the boiler went in. Decades of debris from the old pipes then collect in a modern unit built to far tighter tolerances. A flush tends to cure what a third repair cannot.',
    },
  },
  'boiler-repair|harrow': {
    points: [
      'Bathrooms in loft conversions beyond the reach of the system’s pressure',
      'A second or third heating system still running on the original pipe routes',
      'Immersion heaters and cylinders tucked into airing cupboards',
    ],
    faq: {
      q: 'Would a new boiler cure the weak shower in our loft conversion?',
      a: 'In most cases, no. How much pressure you get that high up depends on the type of system, and the fix is often a pump or a different setup rather than a larger boiler. We would sooner say so than sell you a boiler that leaves the problem in place.',
    },
  },
  'boiler-repair|fulham': {
    points: [
      'Awkward-to-reach boilers inside kitchen cupboards in converted flats',
      'Flues run wherever the conversion left room, not where they would ideally go',
      'Services on boilers enclosed behind fitted kitchen units',
    ],
    faq: {
      q: 'Does it matter that my boiler is boxed into a cupboard?',
      a: 'It only matters if there is not enough clearance to service it safely. WhatsApp us a photo along with the make and model, and before anyone visits we will let you know whether it can be worked on in place.',
    },
  },
  'boiler-repair|wandsworth': {
    points: [
      'Boilers and kitchens moved out into rear extensions',
      'Lengthy pipe runs between the boiler and the original bathroom',
      'Condensate pipes on outside walls that freeze over winter',
    ],
    faq: {
      q: 'Why has my boiler locked out now the weather is cold?',
      a: 'The usual cause is a frozen condensate pipe, particularly where it runs outdoors along an extension. Pouring warm water over it (never boiling) and then resetting the boiler often sorts it. We will walk you through that by phone before sending anyone out.',
    },
  },
  'boiler-repair|clapham': {
    points: [
      'Boilers in house shares working much harder than they would for one family',
      'Showers running one after another every morning and evening',
      'Services for landlords and checks between tenancies',
    ],
    faq: {
      q: 'How regularly does a shared-house boiler need servicing?',
      a: 'Once a year at least, as with any boiler, and there is more reason to keep to it here because the system works so much harder. Most manufacturers’ warranties insist on it too, and a missed service is one of the usual grounds for turning a claim down.',
    },
  },
  'boiler-repair|bromley': {
    points: [
      'Airing cupboard set-ups with a hot water cylinder',
      'Hot water faults that could come from several parts other than the boiler',
      'Upgrading the whole system in bigger family homes',
    ],
    faq: {
      q: 'The heating works but there is no hot water. Is the boiler to blame?',
      a: 'Not always. On a cylinder system the culprit could be the diverter, a motorised valve, the immersion or the cylinder thermostat. We work out which one before anything else, since a new boiler would leave three of those four problems untouched.',
    },
  },
  'boiler-repair|brixton': {
    points: [
      'Shared and communal heating set-ups on estates and in conversions',
      'Working out which parts are yours to fix and which belong to the building',
      'Converted-terrace boilers supplying more than their sizing allowed for',
    ],
    faq: {
      q: 'Whose job is it to fix the heating in my block?',
      a: 'That comes down to how your building is arranged. A boiler of your own is your responsibility, while communal plant sits with the freeholder. Finding out which applies is normally the first useful step we take, and it can stop you paying for repairs that were never yours.',
    },
  },
  'boiler-repair|hackney': {
    points: [
      'Boilers in odd positions inside warehouse and industrial conversions',
      'Long runs of exposed pipe that shed heat on the way to the radiators',
      'Shared plant serving blocks and estates',
    ],
    faq: {
      q: 'Heating my warehouse flat costs a lot. Is the boiler the problem?',
      a: 'More often the pipes are to blame. In a space with high ceilings, long runs of bare pipe give off much of their heat before it gets anywhere useful. Lagging them often achieves more than a new boiler would.',
    },
  },

  // ---------- Bathroom installation ----------
  'bathroom-installation|croydon': {
    points: [
      'Small original bathrooms at the back of interwar semis',
      'Deciding whether to leave the WC in place or move the soil connection',
      'Cloakrooms fitted into the space under the stairs',
    ],
    faq: {
      q: 'Is it possible to put the toilet on the opposite side of the room?',
      a: 'It is, but no other choice changes the price as much, since the soil connection has to move with it. On a tight budget, leave the WC where it is and rearrange the rest around it. You get more bathroom for your money that way.',
    },
  },
  'bathroom-installation|bromley': {
    points: [
      'En-suites and extra bathrooms in bigger family homes',
      'New outlets on vented systems, with the pressure checked beforehand',
      'Pumped showers where gravity alone does not give enough pressure',
    ],
    faq: {
      q: 'Will the new en-suite need a pump?',
      a: 'Quite probably, if your system is gravity-fed from a loft tank and the en-suite is on an upper floor. We test the pressure before you spend anything, because pairing the wrong shower with the wrong system is a costly let-down.',
    },
  },
  'bathroom-installation|harrow': {
    points: [
      'New bathrooms in loft conversions',
      'Top-floor pressure confirmed before anything is ordered',
      'Running soil and waste pipes down through the house as it stands',
    ],
    faq: {
      q: 'Is a bathroom possible in my loft conversion?',
      a: 'Almost always. How simple it is depends on two questions: can the waste get down to the existing stack, and does the water pressure reach that high? Settle both before you pick a suite.',
    },
  },
  'bathroom-installation|wimbledon': {
    points: [
      'Conservation rules on period homes that limit work on the outside',
      'Routing extract ducts and soil pipes on protected elevations',
      'En-suites and family bathrooms in bigger houses',
    ],
    faq: {
      q: 'Could conservation rules prevent a bathroom refit?',
      a: 'Seldom for anything inside the room itself. They matter for work on the outside, such as new soil pipes, vents and extract terminals on an elevation people can see. Check with the council before you finalise the design.',
    },
  },
  'bathroom-installation|fulham': {
    points: [
      'Leasehold flats needing the freeholder’s consent before any work begins',
      'Limits on relocating wet areas above habitable rooms in the flat below',
      'Lease terms that restrict the hours work can take place',
    ],
    faq: {
      q: 'Will my freeholder have to give permission?',
      a: 'For most flats in Fulham, yes. Local leases often ask for consent before bathroom work, and some ban moving wet areas above the rooms below. Read your lease before settling on a design. Finding out afterwards costs far more.',
    },
  },

  // ---------- Drain unblocking ----------
  'drain-unblocking|croydon': {
    points: [
      'Long outside drain runs with several inspection chambers and gullies',
      'Plenty of access points, which usually makes rodding and camera surveys simple',
      'Blockages on the stretch from the house to the boundary',
    ],
    faq: {
      q: 'At what point does the drain stop being my responsibility?',
      a: 'Roughly at the edge of your property. Past that point it is usually the shared sewer, which Thames Water looks after. Before doing any work you should not be paying for, we will confirm on which side of that line the blockage sits.',
    },
  },
  'drain-unblocking|bromley': {
    points: [
      'Roots from mature trees getting into cast iron and clay drains',
      'One run of drain blocking again and again over the year',
      'A CCTV survey to pinpoint the length that needs repairing, not just clearing',
    ],
    faq: {
      q: 'Why does my drain block again every few months?',
      a: 'Around Bromley the usual reason is tree roots working into a joint in an old clay pipe. Clearing them gives you a few months before the blockage returns. A camera survey locates the faulty length so it can be lined or repaired once, rather than cleared four times over.',
    },
  },
  'drain-unblocking|wimbledon': {
    points: [
      'Private drain runs serving bigger plots',
      'Shared drains under the flats and terraces close to the station',
      'Confirming whether a run is private or shared before any work begins',
    ],
    faq: {
      q: 'Do I share my drain with next door?',
      a: 'Near the station, in the terraces, it frequently is, and once a shared drain passes your boundary it is normally Thames Water’s job. On bigger plots the whole run is more likely to belong to you. We find out which before we quote.',
    },
  },

  // ---------- Tier A expansion ----------
  'emergency-plumbing|kensington': {
    points: [
      'Basement drainage pumps breaking down and flooding the bottom floor, with no gravity route as a backup',
      'Stopcocks hidden behind later joinery in period conversions, so turning the water off takes longer than fixing the leak',
      'Leaks in mansion blocks that can only be isolated at the riser, not inside the flat',
    ],
    faq: {
      q: 'Water is filling my basement because the pump has failed. What should I do immediately?',
      a: 'Stop sending more water into it: no taps, no shower and no washing machine. If the water is close to any sockets, switch off the power to that floor. A pump that has failed will not recover by itself and the water cannot drain away, so this needs an engineer now, not in the morning.',
    },
  },
  'emergency-plumbing|lewisham': {
    points: [
      'Leaks that first appear two or three storeys below the flat where they began',
      'Communal risers with the isolation valve behind a locked service cupboard door',
      'Former council blocks where only the building manager has a key to the plant room',
    ],
    faq: {
      q: 'Nobody is in the flat above and water is coming through my ceiling. Who can shut it off?',
      a: 'In a block, the valve that matters is normally on the shared riser, not inside the empty flat, so you need a caretaker or the building manager. Ring the emergency number printed on your service charge paperwork and phone us too. We can often work alongside them to get it isolated.',
    },
  },
  'emergency-plumbing|battersea': {
    points: [
      'Heat interface units failing in Power Station and Nine Elms flats, which can pass for a boiler fault but are something else',
      'Faults on the communal heat network that leave several flats without hot water together',
      'Plant that an engineer can only reach once building management or the concierge lets them in',
    ],
    faq: {
      q: 'Neither my neighbours nor I have hot water. Is the problem in my flat?',
      a: 'Very unlikely. In the riverside developments your hot water arrives from a communal network via a heat interface unit inside the flat, so when several homes lose it at once the network is the likely cause. Tell building management first. If your HIU turns out to be at fault, we can take that on.',
    },
  },
  'emergency-plumbing|putney': {
    points: [
      'Stacks in mansion blocks by the bridge, where a single blockage backs up into several flats',
      'Lower-ground rooms near the river whose pumped waste gives out under heavy use',
      'Roehampton estate homes on a shared supply, where turning the water off is a communal task',
    ],
    faq: {
      q: 'Is it an emergency if waste has backed up in my basement bathroom?',
      a: 'Yes, if the bathroom is on a pumped system and the pump has stopped. Without gravity to fall back on, whatever goes down stays put. Stop using that bathroom completely and ring us. If everything else in the house drains as normal, it is the pump that has failed and the main drain is fine.',
    },
  },
  'emergency-plumbing|dulwich': {
    points: [
      'Inspection chambers and gullies far down the garden, so blockages are seldom close to the house',
      'Long outdoor runs of old clay drain with joints that roots work their way into',
      'Big houses with the stopcock often under a floor or out in an outbuilding',
    ],
    faq: {
      q: 'How urgent is an overflowing outside drain if everything inside still drains?',
      a: 'It needs sorting today, but the house is not about to flood. Hold off on baths and the washing machine, since both release a lot of water in one go, and watch whether the level keeps rising. With the long runs in this area, the blockage is often a few chambers further down the garden.',
    },
  },
  'emergency-plumbing|greenwich': {
    points: [
      'Homes in the conservation area where the natural external repair needs permission, and the emergency cannot wait for it',
      'Flats on the Peninsula that run on heat interface units, not their own boilers',
      'Older houses near the town centre with past alterations nobody recorded',
    ],
    faq: {
      q: 'Does a burst pipe in a listed building change what happens?',
      a: 'Not the first part. Wherever you live, we turn off the water and stop the damage in the same way. The difference is in the follow-up: a permanent repair that touches anything visible or structural might need consent. We make it safe, then tell you plainly which parts must be checked before they become permanent.',
    },
  },
  'emergency-plumbing|chelsea': {
    points: [
      'Dug-out basements that flood on their lowest, best-finished level when the drainage pump fails',
      'Tall townhouses in which a leak near the top works down through every floor',
      'Mews houses where anything too big for the mews is hard to get in',
    ],
    faq: {
      q: 'Water from the top floor is running down through the whole house. What do I do first?',
      a: 'Close the stopcock, then switch off the electrics on each floor the water has got to. It runs down inside the walls and reaches lighting circuits a long way from the leak. Do not hold off while you look for the source. Once the water is off, call us.',
    },
  },
  'emergency-plumbing|tooting': {
    points: [
      'House shares where whoever rings is not the person whose bathroom has the leak',
      'A second and third bathroom emptying into a stack meant for one, which backs up under load',
      'Drains at food businesses on and near the Broadway failing mid-service',
    ],
    faq: {
      q: 'The upstairs bathroom is leaking into the room I rent. Who should report it?',
      a: 'Anybody can ring us, though in a shared house it is normally the landlord or agent who signs off the work. If you can get to the stopcock, turn the water off. Let whoever manages the property know straight away and pass them our number so we can speak to them ourselves.',
    },
  },

  // ---------- Boiler repair ----------
  'boiler-repair|dulwich': {
    points: [
      'Big houses where the boiler falls behind because nobody resized the system after it was extended',
      'Lengthy pipe runs shedding heat before they get to the far side of the house',
      'Original systems in family homes with one household, still going long after their efficient years',
    ],
    faq: {
      q: 'The boiler never stops running, yet the far end of the house stays cold. Is it on its way out?',
      a: 'Frequently it is not. In a big, extended house the likelier explanation is a system heating more than it was sized for, or poor balancing that lets the nearest radiators take all the heat. You can fix either without replacing the boiler, and we would check that before pricing a new one.',
    },
  },
  'boiler-repair|greenwich': {
    points: [
      'Peninsula flats with heat interface units, often taken for boilers though they fail in other ways',
      'Listed status and conservation-area rules limiting flue positions near the town centre',
      'Period homes with pipework re-routed so many times it no longer matches any drawings',
    ],
    faq: {
      q: 'There is no boiler in my Peninsula flat and the hot water has stopped. What has gone wrong?',
      a: 'Your flat will almost certainly have a heat interface unit drawing heat from a communal network. If the neighbours have lost hot water as well, the network is at fault and building management should be told. If it is just your flat, the HIU is the usual suspect, normally its controls or plate heat exchanger, and we can repair that.',
    },
  },
  'boiler-repair|kensington': {
    points: [
      'In listed buildings the repair is simple, but any work near the flue has to be cleared first',
      'Boilers squeezed into voids and cupboards with no thought for servicing access',
      'Mansion blocks where the boiler works fine but the communal supply to it does not',
    ],
    faq: {
      q: 'Can you still repair my boiler if the building is listed?',
      a: 'Yes. Listing makes no difference to repairing or replacing internal parts. It applies to work that alters the building, such as a new flue route, a new terminal outside, or core drilling a protected elevation. We will flag it when it becomes relevant, not after the work is done.',
    },
  },
  'boiler-repair|walthamstow': {
    points: [
      'Boilers moved during kitchen extensions, with the old pipework lengthened instead of renewed',
      'Warner maisonettes where a flue or condensate pipe affects the home next door',
      'Condensate pipes moved outside during extension work, which then freeze in winter',
    ],
    faq: {
      q: 'Why does my boiler lock out only when it gets really cold?',
      a: 'That pattern points to a frozen condensate pipe, which is common locally because extensions so often leave the condensate run outdoors. Unable to drain, the boiler shuts itself down safely. Thawing the pipe brings the heat back, but the lasting fix is to lag or re-route it so it stops happening each January.',
    },
  },
  'boiler-repair|chelsea': {
    points: [
      'Weak performance on the top floors of tall townhouses, caused by flow and not by the boiler',
      'Boilers feeding several bathrooms added after the unit’s size was chosen',
      'Tight routing in mews houses restricting where any replacement flue could run',
    ],
    faq: {
      q: 'Our boiler is new, yet the top-floor shower is still weak. Why?',
      a: 'In a tall, narrow house the boiler is rarely the cause. The problem is the height from the water source up to the outlet, and at times pipework that is too narrow for the distance. An accumulator or a pump usually sorts it. Swapping out a boiler that works would not.',
    },
  },
  'boiler-repair|battersea': {
    points: [
      'Power Station and Nine Elms flats with heat interface units, which have neither a burner nor a flue',
      'Communal heat networks running cool, which shows up as what looks like a fault in one flat',
      'Victorian conversions just off the park where combis supply more bathrooms than planned',
    ],
    faq: {
      q: 'Is it just boilers, or do you repair heat interface units too?',
      a: 'We do both. An HIU is not a boiler but a heat exchanger with controls, so its faults differ. Typically the plate exchanger scales up or the controls drift out of calibration. The one thing we cannot repair is the network before it reaches your flat, which is the building’s.',
    },
  },
  'boiler-repair|tooting': {
    points: [
      'Combis supplying bathrooms that arrived long after the boiler was chosen',
      'House shares where everyone using hot water at once makes a sound boiler seem broken',
      'Converted-flat boilers crammed into cupboards that are hard to reach and badly ventilated',
    ],
    faq: {
      q: 'If someone else turns on a tap, my hot water runs cold. Has the boiler failed?',
      a: 'It is unlikely. Because a combi heats water as you use it, it can only supply one main outlet well at any moment. In a house that has gained a second or third bathroom since then, you are hitting a capacity limit, not a fault. The usual answer is to fit a system boiler and cylinder, not to repair anything.',
    },
  },
  'boiler-repair|hammersmith': {
    points: [
      'Flats in mansion blocks where the fault lies in the communal supply, not the boiler',
      'Communal plant an engineer cannot reach until the managing agent grants access',
      'Heating in offices and commercial premises near the Broadway that has to be seen to out of hours',
    ],
    faq: {
      q: 'I think the building is at fault but the managing agent blames my boiler. Who is right?',
      a: 'This dispute comes up a lot, and it can be settled. Before we touch the boiler, we measure the pressure and supply reaching your flat. If the supply falls short, the building is shown to be the cause, and you can take hard evidence to the agent instead of a view.',
    },
  },
  'boiler-repair|lewisham': {
    points: [
      'Blocks on communal heating, where the fault is often outside the flat that reports it',
      'Former council homes still on their original pipes, with few places to isolate',
      'Ageing systems in Hither Green and Ladywell terraces now on a second or third boiler',
    ],
    faq: {
      q: 'A few flats in our block have lost their heating. Does each of us need to book an engineer?',
      a: 'No. That way you pay several callout charges for a single fault. When the whole block is hit, the communal plant is at fault and the freeholder or managing agent must instruct the repair, so report it together. If only your flat turns out to be affected, the fault is yours.',
    },
  },
  'boiler-repair|putney': {
    points: [
      'Mansion blocks by the river with shared plant and access run by the agent',
      'Homes on the Roehampton estate that use communal heating',
      'Pumped drainage and waste in lower-ground rooms by the river, adding more that can fail',
    ],
    faq: {
      q: 'What can you fix in my flat if the block runs on communal heating?',
      a: 'Anything from the point the system comes into your flat onwards: radiators, controls, the cylinder, and a heat interface unit if there is one. The communal boiler plant is the building’s, and work on it must be instructed by the agent or freeholder. Before you are charged for anything, we will say which side of that line the fault falls.',
    },
  },

  // ---------- Boiler service ----------
  'boiler-service|ealing': {
    points: [
      'Services booked before winter instead of after a breakdown, which accounts for most requests here',
      'Newer installations whose warranties need a recorded service every year',
      'Ageing systems in the bigger houses towards Ealing Common, running long past their efficient years',
    ],
    faq: {
      q: 'When in the year should I book my boiler service?',
      a: 'Aim for late summer or the start of autumn. The price is no different, and slots are much easier to find. Problems tend to surface in the first properly cold week, which is precisely when engineers are hardest to get hold of.',
    },
  },
  'boiler-service|croydon': {
    points: [
      '1930s and interwar semis whose systems have been through several boilers',
      'Flats in the town centre that own their boiler but not the supply running to it',
      'Long heating circuits where weak circulation shows as cold rooms, not as a boiler fault',
    ],
    faq: {
      q: 'Some rooms stay cold even though the heating works. Would a service sort that out?',
      a: 'Not by itself, most likely. A service looks at the boiler rather than the whole system. Cold rooms normally mean the system needs balancing or the circuit has sludge in it. Each is a separate job, and we would point you to the right one instead of booking you a service that cannot fix it.',
    },
  },
  'boiler-service|bromley': {
    points: [
      'Bigger homes where a poorly performing boiler adds real cost across a winter',
      'Systems stretched into extensions and conversions with no resizing',
      'Older boilers where the service becomes the moment to decide on replacing them',
    ],
    faq: {
      q: 'Should I bother servicing a boiler I will likely replace soon?',
      a: 'If it is being replaced this year, put the money towards the new one. If you expect another two winters from it, get it serviced. That way you decide when it goes, rather than the boiler making that call in January.',
    },
  },
  'boiler-service|harrow': {
    points: [
      'Semis in Metroland now on a second or third heating system, with pipes left over from each',
      'Loft conversions built on top of a system nobody resized to suit them',
      'Old controls that no longer work the way the owner believes',
    ],
    faq: {
      q: 'We are on our third boiler. Does the old pipework make any difference?',
      a: 'It might. Each new installation tends to leave behind dead legs, redundant pipes and valves no one has touched for twenty years. On its own none of that is dangerous, but it hampers circulation and slows down any diagnosis. A service is a sensible time to record what is really there.',
    },
  },
  'boiler-service|wimbledon': {
    points: [
      'Fairly new installations still covered by the manufacturer’s warranty terms',
      'Claims under warranty that rely on proof of yearly servicing',
      'Bigger homes where the system works harder than one in a flat',
    ],
    faq: {
      q: 'Can missing one year’s service really void the warranty?',
      a: 'Yes, and it is among the most frequent reasons claims are turned down. Most manufacturers want a documented service every year, so they point to the missing record rather than to the fault. Keep your paperwork where you can lay hands on it.',
    },
  },
  'boiler-service|greenwich': {
    points: [
      'Standard gas boilers in the older homes around the town centre',
      'Peninsula flats on heat interface units. These are not gas appliances and call for their own kind of check',
      'Homes in the conservation area where getting to the flue shapes how the service is done',
    ],
    faq: {
      q: 'Does a heat interface unit need servicing the way a boiler does?',
      a: 'Checking it now and then helps, but it is not a gas appliance, so this is not a gas service. Over time the plate heat exchanger scales up and the controls drift, and either shows as poor hot water. It is worth having done, but it is not the same job as a boiler service, so we would quote for it on its own.',
    },
  },
  'boiler-service|lewisham': {
    points: [
      'In flats, the occupier owns the boiler and the building owns the communal system behind it',
      'Ex-council property still on its first pipework and short of isolation valves',
      'Terraced houses towards Hither Green and Ladywell on old individual systems',
    ],
    faq: {
      q: 'Is there anything in my flat to service if the block has communal heating?',
      a: 'Normally there is, though it is not a boiler service. Inside your flat you will have controls and valves, and frequently a heat interface unit, all of which are yours. Past them is communal plant owned by the building. Before we do anything, we will explain which side of that line each part is on.',
    },
  },
  'boiler-service|wandsworth': {
    points: [
      'Combis supplying more bathrooms than their original sizing allowed',
      'Converted terraces where the conversion, not access, dictated where the boiler went',
      'Systems whose hot water has tailed off so slowly that no one noticed',
    ],
    faq: {
      q: 'My hot water takes longer than it used to. Can a service help?',
      a: 'In some cases. Scale builds up slowly on the plate heat exchanger, and a service can spot it before the part needs replacing. If a bathroom has been added since the boiler was fitted, though, the truthful answer may be that it is already doing its best, and servicing will not change that.',
    },
  },
  'boiler-service|brixton': {
    points: [
      'Bars and restaurants that need their service done outside trading hours',
      'Flats over commercial units, in buildings where heating needs differ sharply',
      'Homes on estates and in converted terraces with their own boilers of mixed ages',
    ],
    faq: {
      q: 'Is it possible to service my restaurant’s boiler without shutting?',
      a: 'Commercial jobs are planned around your trading hours, normally first thing or after closing. That is how most work is done locally. Agree the time when you book to avoid any clash.',
    },
  },
  'boiler-service|islington': {
    points: [
      'Searches for servicing outnumbering those for repair, which is unusual and points to planned upkeep',
      'Period conversions where a boiler in a cupboard makes access the real limitation',
      'Flats where servicing must be fitted around a managing agent',
    ],
    faq: {
      q: 'Is it an issue that the boiler sits in a cupboard behind fitted units?',
      a: 'It comes up a lot here, and it depends on how much has to be removed. To service a boiler safely an engineer needs proper access, so if a cupboard has to come apart each year you should know that, and bear it in mind at the next replacement.',
    },
  },
  'boiler-service|walthamstow': {
    points: [
      'Extensions that moved condensate pipes outdoors, where they freeze at the first hard frost',
      'Flues or condensate routes on Warner maisonettes that affect the neighbours',
      'Terraces extended several times over, with pipework added to instead of renewed',
    ],
    faq: {
      q: 'Will a service prevent my boiler locking out in each cold spell?',
      a: 'If a freezing condensate pipe is to blame, and locally it very often is because extensions tend to put that run outdoors, then yes: we can spot it and lag or re-route it. Done in autumn it is a small job. Done in January it is a miserable one.',
    },
  },
  'boiler-service|streatham': {
    points: [
      'Big houses split into flats, every one with a boiler and service of its own',
      'High Road mansion blocks with individual boilers as well as communal tanks and risers',
      'Agents and freeholders booking a number of services in a single building together',
    ],
    faq: {
      q: 'Could you service all the flats in the building on the same visit?',
      a: 'In most cases, yes, and it suits everyone to do it like that: a single visit with a single set of access arrangements. The person who manages the building usually organises it. Every flat is still serviced on its own, with a separate record.',
    },
  },
  'boiler-service|tooting': {
    points: [
      'House shares where none of the current tenants know when the last service was',
      'Boilers working close to their limit because bathrooms came after they were fitted',
      'Homes where the boiler is used by one person and its service booked by another',
    ],
    faq: {
      q: 'As a tenant, can I arrange a boiler service myself?',
      a: 'You are welcome to ring us, but the boiler belongs to your landlord, who usually books and pays for the service. Let them know and pass on our number. We can then deal with them directly, so you are not stuck in the middle.',
    },
  },
  'boiler-service|acton': {
    points: [
      'Older South Acton conversions with their own boilers of assorted ages',
      'Communal systems in North Acton blocks, where the equipment on the flat side is what gets checked',
      'Boilers moved during extensions, now and then into awkward spots for servicing',
    ],
    faq: {
      q: 'My flat is in a newly built North Acton block. What needs servicing?',
      a: 'Quite often there is no boiler. Many of those blocks are on communal heating, and every flat has its own heat interface unit. The unit is worth checking from time to time, but that is no gas service, and the building owns the plant that supplies it. We will take a look and tell you which setup is yours.',
    },
  },

  'boiler-repair|acton': {
    points: [
      'Boilers shifted during kitchen extensions, with existing pipes lengthened instead of replaced',
      'Flats in North Acton where the fault is in the building’s system, not the flat',
      'Conversions whose boiler feeds more outlets than it was sized to',
    ],
    faq: {
      q: 'My neighbours and I both have no hot water. Is my boiler at fault?',
      a: 'In the newer blocks in North Acton, very unlikely. That pattern suggests the communal system, so tell building management before paying for a callout. Your own boiler is the likelier cause in the older converted houses. Let us know which you live in and we can normally narrow it down over the phone.',
    },
  },

  // ---------- Boiler installation ----------
  'boiler-installation|kensington': {
    points: [
      'Listed buildings and conservation areas, where the position of the flue terminal comes first, not last',
      'Basements where gravity cannot carry condensate to a drain, so it has to be pumped',
      'In mansion blocks, the fitting date rests as much with the managing agent as with us',
    ],
    faq: {
      q: 'Am I free to choose any boiler for a listed building?',
      a: 'The limit is seldom the boiler. It is the flue. Which units you can actually install depends on where the flue may end and whether any coring through a protected elevation is allowed. We work that out before suggesting a model, since choosing a model first and finding the snag later is a waste of time for everyone.',
    },
  },
  'boiler-installation|ealing': {
    points: [
      'Homes with more bathrooms and more people than when the last boiler was fitted',
      'Swapping a combi for a system boiler where hot water use at the same time has outgrown it',
      'Kitchen-cupboard boilers that later extension work has boxed in',
    ],
    faq: {
      q: 'Now we have a second bathroom, should we change the type of boiler?',
      a: 'You might. A combi heats water as it is drawn and can only supply one main outlet properly at once, so it struggles when two showers run together. If that will happen often, go for a system boiler and cylinder. If not, a combi of the right size remains the simpler, cheaper choice.',
    },
  },
  'boiler-installation|wandsworth': {
    points: [
      'Boilers left where a conversion put them, not where access or noise would suggest',
      'Terraced houses where replacing the boiler is a chance to get it off a bedroom wall',
      'Systems supplying more outlets than the first boiler was sized to handle',
    ],
    faq: {
      q: 'Should we move the boiler at the same time as replacing it?',
      a: 'It is often worthwhile. A move means extra pipework and a new flue route, but replacement is the only practical time to deal with a boiler that is noisy next to a bedroom, hidden behind fitted units, or placed so that every service is a struggle. We will quote for both options so the true cost of moving it is clear.',
    },
  },
  'boiler-installation|wimbledon': {
    points: [
      'Bigger houses with two or more bathrooms that may well be used at the same time',
      'Homes where a combi went in because it was cheap and has always struggled to keep up',
      'Boilers sized by occupancy and radiator count, not by whatever was fitted before',
    ],
    faq: {
      q: 'How do you work out the right boiler size for us?',
      a: 'We look at how many radiators and bathrooms you have and how many people really live there. The size of the old boiler does not count, as that could easily have been wrong as well. Too big and it cycles on and off and wears out early. Too small and it never keeps up. Get it right when it is fitted, because it cannot be changed later.',
    },
  },
  'boiler-installation|fulham': {
    points: [
      'Converted flats where the flue must reach an outside wall that could be a fair distance away',
      'Lower-ground and basement rooms where condensate has to be pumped, not left to fall by gravity',
      'Party walls and shared stacks restricting where pipes can run',
    ],
    faq: {
      q: 'Can a boiler still be fitted if there is no outside wall near where it goes?',
      a: 'Usually it can, though a twin-flue system may be needed, as it allows a much longer flue run than a standard boiler. That has to be designed properly, not improvised, and it limits which units are suitable. We check the route before suggesting anything.',
    },
  },
  'boiler-installation|croydon': {
    points: [
      'Semis from the interwar years whose system layout has never changed',
      'Kitchen-cupboard boilers where moving them would help with noise and access',
      'Long pipework where circulation counts for as much as the boiler’s output',
    ],
    faq: {
      q: 'Does the new boiler have to go in the same place as the old one?',
      a: 'No. A like-for-like swap is the quickest and cheapest route and is often correct. But if the current spot is noisy, hard to service, or was chosen for a kitchen fitter’s convenience twenty years back, replacement is the time to think again.',
    },
  },
  'boiler-installation|bromley': {
    points: [
      'Bigger homes where getting the size right makes a real difference to running costs',
      'Systems carried into conversions and never resized afterwards',
      'Older heat-only systems with a cylinder, where any replacement type could genuinely suit',
    ],
    faq: {
      q: 'Will a big house do better with a bigger boiler?',
      a: 'No. A boiler larger than necessary is actually worse. It short-cycles, wasting gas and wearing parts out before their time. The correct size is whatever matches your radiators and hot water demand, which tends to surprise anyone who thinks extra output is the safe option.',
    },
  },
  'boiler-installation|harrow': {
    points: [
      'Bathrooms in loft conversions that the system was never sized to serve',
      'Radiators tacked onto the existing circuit for rear extensions',
      'Homes now on a third heating system, with pipes remaining from all three',
    ],
    faq: {
      q: 'Our top floor is cold all the time. Would a new boiler solve that?',
      a: 'Only when the boiler is at fault, and with a loft conversion it frequently is not. Usually either the system was not resized for the added radiators, or the circuit needs balancing. We prefer to find that out first rather than sell you a boiler that makes no difference.',
    },
  },
  'boiler-installation|battersea': {
    points: [
      'Victorian conversions near the park, where flats do have their own boilers',
      'Nine Elms and riverside blocks on communal heat networks, with no boiler to fit',
      'Conversions where the flue route must take account of the flats above and below',
    ],
    faq: {
      q: 'Is it possible to fit my own boiler in a Nine Elms flat?',
      a: 'Very unlikely. Those buildings run on communal heat networks. Instead of a boiler, every flat has a heat interface unit. That choice was made for the building as a whole, and a single flat cannot opt out. We can, however, maintain and repair the unit already installed.',
    },
  },
  'boiler-installation|chelsea': {
    points: [
      'Townhouses that are tall and narrow, where the plant’s position affects pressure higher up',
      'Mews houses with tight access and few options for routing outside',
      'Listed buildings where the flue and outside pipework must be settled before choosing a model',
    ],
    faq: {
      q: 'Would the weak top-floor shower get better with a new boiler?',
      a: 'Not by itself. In a tall house the usual cause is the height from the water source to the outlet, along with pipes too narrow for the distance. A pump or an accumulator fixes that. A new boiler does not, and anyone selling one for that reason is selling you the wrong fix.',
    },
  },
  'boiler-installation|clapham': {
    points: [
      'Converted terraces where the neighbours above or beneath are affected by a flue terminal',
      'Boilers in cupboards whose size was set by the conversion, not by servicing needs',
      'Consent from the freeholder before any outside work on a converted house',
    ],
    faq: {
      q: 'Will I need my freeholder to agree before a boiler is installed?',
      a: 'Not usually for the boiler. For work that changes the building, such as a new flue terminal, new outside pipework or core drilling an external wall, it is very often required, and most leases say so. Check before you book a date, not on the morning of the job.',
    },
  },
  'boiler-installation|brixton': {
    points: [
      'Flats over shops and restaurants, where the job affects a business below',
      'Fitting booked to suit trading hours, not the engineer’s diary',
      'Estate homes and converted terraces on one street with quite different constraints',
    ],
    faq: {
      q: 'Does living over a restaurant make the installation harder?',
      a: 'It changes the timing more than the method. Turning off the water, drilling and deliveries all need agreeing with the business downstairs, which usually means an early start or working between services. That is routine locally. Mention it when booking so the date suits you both.',
    },
  },
  'boiler-installation|greenwich': {
    points: [
      'Limits on flue terminals in the town centre from listing and the conservation area',
      'Heat network flats on the Peninsula, where fitting a boiler is neither possible nor needed',
      'Older homes whose unrecorded past alterations only come to light on the day',
    ],
    faq: {
      q: 'Where in Greenwich can a new boiler actually be fitted?',
      a: 'Yes for the older homes near the town centre and further out towards Blackheath, although flue limits apply where a home is listed or sits in a conservation area. No for flats on the Peninsula’s communal heat network, as there is no individual boiler and nowhere for one to go. Let us know which applies and we can give you a precise answer.',
    },
  },
  'boiler-installation|putney': {
    points: [
      'Blocks of mansion flats needing the managing agent’s approval for both the flue and the date',
      'Homes by the river with pumped drainage serving lower-ground rooms',
      'Roehampton estate homes where the heating may be shared, not individual',
    ],
    faq: {
      q: 'How much time does agent approval tend to add?',
      a: 'It differs, and we cannot promise how long someone else will take to decide. What we can provide is the technical detail agents want, covering the flue position, its route and what is being altered, set out so you can forward it. That detail is usually what causes the delay.',
    },
  },
  'boiler-installation|tooting': {
    points: [
      'Homes with extra bathrooms added since the last boiler was sized',
      'House shares whose demand for hot water all at once is beyond a combi',
      'Conversions where the size of the cupboard, not the home, set the boiler size',
    ],
    faq: {
      q: 'There are four of us in a shared house. What should we have fitted?',
      a: 'Nearly always a system boiler and cylinder, not a combi. With four people, showers will overlap, and a combi simply cannot feed two at once without both losing out. A cylinder keeps a store of hot water, so everyone using it at the same time is no longer an issue.',
    },
  },
  'boiler-installation|balham': {
    points: [
      'Conversions with a boiler cupboard sized by whoever carried out the conversion',
      'Flats where nobody thought about servicing access when the space was built',
      'Systems feeding more outlets than the first installation was planned for',
    ],
    faq: {
      q: 'Is the current cupboard big enough for a new boiler?',
      a: 'Usually, though it is better to measure than assume. Modern condensing boilers need servicing clearance around them as well as room to sit in, and some cupboards built for an older unit fall short. We check this before ordering, not on installation day.',
    },
  },
  'boiler-installation|dulwich': {
    points: [
      'Big family homes on long pipe runs, where circulation affects how much heat you feel',
      'Systems stretched into rear and loft conversions with no resizing',
      'Estate scheme of management limits whenever outside work is involved',
    ],
    faq: {
      q: 'Will the Dulwich Estate scheme have any bearing on a boiler installation?',
      a: 'It may, if the work changes the outside of the house, especially new external pipework or a new flue terminal. Inside work and the boiler itself are generally unaffected. Read your own paperwork, as terms differ, and we will point out the external parts of the job.',
    },
  },
  'boiler-installation|acton': {
    points: [
      'Years of piecemeal additions in older conversions, replaced by a proper installation',
      'Communal-system blocks in North Acton, where installing a boiler does not apply',
      'Homes where the boiler was relocated during an extension and never really suited its new spot',
    ],
    faq: {
      q: 'Can a boiler be installed in my new-build flat in North Acton?',
      a: 'Not if the building runs a communal heat network, as the flat has no gas supply and no place for a boiler. Instead you have a heat interface unit, and we can service and repair it. In the older converted homes further south, a standard installation is simple.',
    },
  },

  // ---------- Enfield, Barnet, and two first-of-service pages ----------
  'emergency-plumbing|enfield': {
    points: [
      'Stopcocks under floors, in garages or in outbuildings, not beneath the kitchen sink',
      'Pipes bursting in unheated outbuildings as a freeze thaws',
      'Long outdoor runs where a leak shows up far from where it started',
    ],
    faq: {
      q: 'What should I do while I wait if I cannot find the stopcock?',
      a: 'Check under the kitchen sink, then the garage, utility room or downstairs cloakroom, because in homes out this way it is frequently nowhere near the kitchen. Failing that, there is normally an outside stop tap beneath a small metal cover close to the boundary. Ring and tell us, and we will help you find it.',
    },
  },
  'emergency-plumbing|barnet': {
    points: [
      'Isolation points built over in older homes near the centre',
      'Bigger suburban houses with long runs and several isolation valves',
      'Pipes freezing and splitting in lofts and garages with no heating',
    ],
    faq: {
      q: 'Why does water keep running after I have turned it off?',
      a: 'The water held above the leak is still draining out, and with a loft tank that can be quite a volume. Run the downstairs cold taps to empty it faster and it should stop in a few minutes. If it carries on, the stopcock is not fully shut and we need to come out.',
    },
  },
  'leak-detection|croydon': {
    points: [
      'Supply pipes buried under long gardens and driveways, where a leak can stay hidden for months',
      'Water bills going up with nothing visibly wrong anywhere in the house',
      'Older outdoor pipework on bigger plots, some distance from the house',
    ],
    faq: {
      q: 'Could I have a leak if my bill has risen but nothing is visible?',
      a: 'Quite easily. Where the supply pipe runs a long way underground, water can leak for months without ever surfacing, simply soaking into the soil. A meter test gives a fast answer: switch everything off, take a reading, wait an hour and read it again. Any movement means water is running somewhere.',
    },
  },
  'bathroom-installation|enfield': {
    points: [
      'Room for an en-suite or second bathroom in bigger suburban homes',
      'Vented systems where a new outlet means testing the pressure before picking a shower',
      'Loft conversions that put the new bathroom above the existing tank',
    ],
    faq: {
      q: 'Is a shower possible in our loft conversion?',
      a: 'Most of the time, though pressure needs answering first. With a gravity-fed system, a loft bathroom is close to the tank and gets very little head, often too little for a decent shower unless you add a pump. We look at the system before you pick anything, as learning this with the wrong shower fitted is a costly lesson.',
    },
  },

  // ---------- Around Guildford (Sept 2026) ----------
  'emergency-plumbing|guildford': {
    points: [
      'Burst and leaking pipes in older town-centre and village houses after a cold snap',
      'Leaks in shared student houses near the university, where the landlord needs to know straight away',
      'No hot water from scaled-up combi boilers that fail when the first cold week arrives',
    ],
    faq: {
      q: 'How quickly can you get to Guildford?',
      a: 'Our engineers come from our base in Fulham, so it depends on the time of day and the A3. When you ring we will give you an honest arrival time rather than a promise, and talk you through turning off the water or power in the meantime so the damage stops while we travel.',
    },
  },
  'emergency-plumbing|woking': {
    points: [
      'Leaks in town-centre apartment blocks that need the managing agent to reach the shared stopcock',
      'Burst pipes in lofts and garages of 1970s and 80s estate houses',
      'Overflowing toilets and blocked drains on older terraced streets near the centre',
    ],
    faq: {
      q: 'I live in a new apartment block in Woking. Who do I call first?',
      a: 'Call us, and call the building\'s managing agent or concierge as well: in most newer blocks the stopcock that isolates your flat, or the whole riser, is in a plant room they control. If water is near electrics, switch off at your consumer unit if you can do it without standing in water.',
    },
  },
  'boiler-repair|guildford': {
    points: [
      'Scale in combi heat exchangers and on the hot water side, from Guildford\'s hard water',
      'Ageing system boilers in larger suburban houses in Merrow, Burpham and Onslow',
      'Landlord boiler faults in shared student houses, often found at the annual gas safety check',
    ],
    faq: {
      q: 'Will a scale reducer stop my boiler breaking down again?',
      a: 'It helps with one cause. In hard water areas like Guildford, a scale reducer on the incoming mains slows the build-up on the hot water side of a combi, and it is worth checking one is fitted and working. It will not fix a fault that is already there, and it does nothing for sludge in the heating side, which is a separate problem with a separate fix.',
    },
  },
  'boiler-repair|woking': {
    points: [
      'First or second replacement boilers in 1970s and 80s estate houses',
      'Pressure loss and leaks on older heating systems stretched by extensions',
      'Boilers in newer apartment blocks where the flue and access need the managing agent',
    ],
    faq: {
      q: 'My boiler is over 15 years old. Is it worth repairing?',
      a: 'Sometimes. If the part is still made and the rest of the boiler is sound, a repair can buy years. If the fault is the heat exchanger, or parts are no longer made, replacement usually makes more sense. We price both before you decide, so you are comparing two figures rather than being told which to pick.',
    },
  },
};

export default comboDetail;
