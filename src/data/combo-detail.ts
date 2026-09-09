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
      'Burst pipes in unheated garages, outbuildings and loft spaces after a cold snap',
      'Cast iron waste pipes that crack rather than split, so the leak is slow and hidden',
      'Outside taps left connected over winter and splitting the pipe behind the wall',
    ],
    faq: {
      q: 'My pipes froze in the garage. Can that wait until morning?',
      a: 'If it is still frozen, it is not leaking yet — but it will when it thaws. Turn the water off at the stopcock now and call in the morning. If it has already thawed and water is running, that is a callout tonight.',
    },
  },
  'emergency-plumbing|croydon': {
    points: [
      'Leaks in flats that show up in the property below before the source flat notices',
      'Communal risers and shared supply in town centre blocks',
      'Older heating systems in interwar semis failing in the first cold week',
    ],
    faq: {
      q: 'Water is coming through my ceiling from the flat above. What do I do?',
      a: 'Turn off your own electrics in that room and get hold of the flat above or the building manager, because the stopcock you need is almost certainly in their property. Call us in parallel and we will talk you through it.',
    },
  },
  'emergency-plumbing|wimbledon': {
    points: [
      'Loft tank and cylinder failures flooding from the top of the house down',
      'Older vented systems where the mains stopcock alone will not stop the flow',
      'Larger properties where the leak has spread before anyone notices',
    ],
    faq: {
      q: 'I turned the mains off and water is still coming. Why?',
      a: 'You almost certainly have a tank in the loft still emptying itself through the leak. There is usually a separate gate valve on the tank outlet — turning that off, and opening all the hot taps to drain it down, is what actually stops it.',
    },
  },
  'emergency-plumbing|islington': {
    points: [
      'Leaks under original floorboards in Georgian and early Victorian property',
      'Restricted access where flooring, panelling or plasterwork cannot simply be cut',
      'Basement and lower-ground flats taking water from the whole building',
    ],
    faq: {
      q: 'My house is listed. Can you still work on it?',
      a: 'Yes, but it changes how. We trace leaks before opening anything up, because exploratory holes in listed fabric are a much bigger problem than in a modern house. Tell us at the point of booking so the engineer arrives expecting it.',
    },
  },
  'emergency-plumbing|clapham': {
    points: [
      'Shared houses where nobody living there knows where the stopcock is',
      'Washing machine and dishwasher hoses failing in heavily used kitchens',
      'Landlord and letting agent callouts where the tenant needs an engineer tonight',
    ],
    faq: {
      q: 'I rent. Should I call you or my landlord?',
      a: 'If water is actively causing damage, turn it off and stop the damage first, then tell your landlord or agent. Many of them already use us. If you call us direct in an emergency we will attend and invoice whoever is responsible, but tell us the arrangement up front.',
    },
  },
  'emergency-plumbing|hackney': {
    points: [
      'Communal systems in estates where the isolating valve is outside your flat',
      'Long horizontal waste runs in warehouse conversions backing up',
      'Commercial kitchens where a leak closes the business',
    ],
    faq: {
      q: 'The stopcock is not in my flat. What now?',
      a: 'That is common in estates and conversions. It is usually in a shared cupboard, riser or landing. Call the building manager or caretaker in parallel with calling us, because access to that cupboard is often what decides how fast this stops.',
    },
  },
  'emergency-plumbing|fulham': {
    points: [
      'Sump pump failures flooding lower-ground and basement conversions',
      'Shared soil stacks backing up into the lowest flat in the building',
      'Leaks tracking down through converted terraces to the flat below',
    ],
    faq: {
      q: 'My basement is flooding and the pump has stopped. What can I do now?',
      a: 'Check the pump has power and that the float switch is not jammed — those are the two most common causes and both are fixable in minutes. If the water is still rising, stop and call. We are on Fulham High Street.',
    },
  },
  'emergency-plumbing|wandsworth': {
    points: [
      'Leaks in pipework buried in rear and side-return extensions',
      'Water surfacing a long way from the failed pipe',
      'Pressurised systems in riverside blocks losing pressure suddenly',
    ],
    faq: {
      q: 'The damp patch is nowhere near any pipes. Is that possible?',
      a: 'Very. Water runs along joists and under floors before it appears, and in an extended house it can travel a surprising distance. That is exactly why we trace it rather than opening up where the stain is.',
    },
  },
  'emergency-plumbing|ealing': {
    points: [
      'Large houses where one branch can be isolated without shutting off the whole property',
      'Multiple bathrooms on long runs added over decades',
      'Communal cold water storage in purpose-built blocks',
    ],
    faq: {
      q: 'Do I have to turn the whole house off?',
      a: 'Often not. Most bathrooms and kitchens have local isolation valves on the supply beneath them — a small screwdriver slot you turn a quarter turn. If you can find one for the fixture that is leaking, the rest of the house keeps its water.',
    },
  },
  'emergency-plumbing|brixton': {
    points: [
      'Commercial kitchen failures that close a business until they are fixed',
      'Out-of-hours attendance so trade is not lost during service',
      'Communal systems in estates and converted terraces',
    ],
    faq: {
      q: 'We are a restaurant. Can you come after we close?',
      a: 'Yes, and for most kitchen work that is the only sensible time. Tell us your service times when you call and we will schedule around them rather than through them.',
    },
  },
  'emergency-plumbing|harrow': {
    points: [
      'Failures at the joint between original and replacement pipework',
      'Older galvanised pipe corroding from the inside and finally splitting',
      'Loft conversion bathrooms on pipe runs the original system never anticipated',
    ],
    faq: {
      q: 'My pipes are the old grey metal type. Is that a problem?',
      a: 'Galvanised steel corrodes from the inside, so it narrows for years and then fails suddenly. If yours is still in place it is worth planning a replacement rather than waiting for the emergency.',
    },
  },
  'emergency-plumbing|balham': {
    points: [
      'Upper flat leaks presenting in the lower flat first',
      'Single shared soil stacks between two households',
      'Access to the flat above being the thing that decides response time',
    ],
    faq: {
      q: 'I am the downstairs flat and water is coming through. Is it my problem?',
      a: 'Usually not. In a Balham conversion the source is very often above you. Try to reach the upstairs flat while you call us, because we will need access to stop it rather than just to clear up after it.',
    },
  },

  // ---------- Boiler repair ----------
  'boiler-repair|wimbledon': {
    points: [
      'Vented systems with a cylinder rather than a combi',
      'Hot water faults that turn out to be the cylinder, not the boiler',
      'Whole-system replacement quoted alongside a boiler-only repair',
    ],
    faq: {
      q: 'I have a hot water tank. Should I switch to a combi?',
      a: 'Not automatically. In a house with several bathrooms, a cylinder often delivers better hot water than a combi can. We will tell you honestly which suits the property rather than defaulting to whichever is easier to install.',
    },
  },
  'boiler-repair|ealing': {
    points: [
      'Boilers asked to serve more bathrooms than they were sized for',
      'Pressure and flow complaints that are the system rather than the unit',
      'Heating that never quite reaches the top floor of a large house',
    ],
    faq: {
      q: 'My shower goes cold when someone runs a tap. Is the boiler broken?',
      a: 'Probably not. That is the classic sign of a combi being asked to supply two outlets at once. It is a sizing problem rather than a fault, and replacing the same size boiler will not change it.',
    },
  },
  'boiler-repair|croydon': {
    points: [
      'Newer boilers bolted onto original system pipework',
      'Recurring faults caused by sludge in an old circuit',
      'Power flushing where a repair alone will not hold',
    ],
    faq: {
      q: 'Why does my new boiler keep breaking down?',
      a: 'Frequently because the system around it was never cleaned when it was fitted. Debris from decades of old pipework ends up in a modern boiler that has much tighter tolerances. A flush usually fixes what a third repair will not.',
    },
  },
  'boiler-repair|harrow': {
    points: [
      'Loft conversion bathrooms with pressure the system cannot reach',
      'Second and third generation heating installs on original pipe runs',
      'Cylinders and immersion heaters in airing cupboards',
    ],
    faq: {
      q: 'The shower in the loft conversion is weak. Can a new boiler fix it?',
      a: 'Usually no. Pressure at that height is about the system type and often needs a pump or a change of setup, not a bigger boiler. We would rather tell you that than sell you a boiler that does not solve it.',
    },
  },
  'boiler-repair|fulham': {
    points: [
      'Boilers in kitchen cupboards with awkward access in flat conversions',
      'Flues routed wherever the conversion allowed rather than where ideal',
      'Servicing where the unit is boxed in behind fitted units',
    ],
    faq: {
      q: 'My boiler is boxed into a cupboard. Is that a problem?',
      a: 'Only if the access clearances are too tight to service it safely. Send us a photo on WhatsApp with the make and model and we will tell you before we come out whether it can be worked on where it is.',
    },
  },
  'boiler-repair|wandsworth': {
    points: [
      'Kitchens and boilers relocated into rear extensions',
      'Long pipe runs from the boiler to the original bathroom',
      'Condensate pipes on external walls freezing in winter',
    ],
    faq: {
      q: 'My boiler locked out in the cold weather. Why?',
      a: 'Very often a frozen condensate pipe, especially where it runs outside along an extension. Thawing it with warm — not boiling — water and resetting the boiler frequently fixes it, and we will talk you through that on the phone before sending anyone.',
    },
  },
  'boiler-repair|clapham': {
    points: [
      'Boilers in shared houses running far harder than in a family home',
      'Back-to-back shower use morning and evening',
      'Landlord servicing and tenancy-turnaround checks',
    ],
    faq: {
      q: 'How often should a boiler in a shared house be serviced?',
      a: 'Annually as a minimum, same as anywhere, but the case for it is stronger here because the system does considerably more work. Most manufacturer warranties also require it, and a skipped service is a common reason a claim gets refused.',
    },
  },
  'boiler-repair|bromley': {
    points: [
      'Hot water cylinders and airing cupboard installations',
      'Hot water faults with several possible causes beyond the boiler',
      'Full system upgrades in larger family houses',
    ],
    faq: {
      q: 'I have heating but no hot water. Is that the boiler?',
      a: 'Not necessarily. In a cylinder system it can be the diverter, the cylinder thermostat, the immersion, or a motorised valve. Diagnosing which comes first, because replacing the boiler would not fix three of those four.',
    },
  },
  'boiler-repair|brixton': {
    points: [
      'Communal and shared heating arrangements in estates and conversions',
      'Establishing what is your responsibility and what is the building’s',
      'Boilers in converted terraces serving more than they were sized for',
    ],
    faq: {
      q: 'Who is responsible for the heating in my block?',
      a: 'It depends entirely on how the building is set up. Individual boilers are yours; communal plant is the freeholder’s. Working out which you are on is usually the first useful thing we do, and it can save you paying for something that is not yours.',
    },
  },
  'boiler-repair|hackney': {
    points: [
      'Unusual boiler positions in warehouse and industrial conversions',
      'Long exposed pipe runs losing heat before they reach the radiators',
      'Communal plant in estates and blocks',
    ],
    faq: {
      q: 'My warehouse flat is expensive to heat. Is the boiler at fault?',
      a: 'Often it is the pipe runs rather than the boiler. Long exposed pipework in a high-ceilinged space loses a lot of heat before it arrives. Insulating those runs frequently does more than changing the unit.',
    },
  },

  // ---------- Bathroom installation ----------
  'bathroom-installation|croydon': {
    points: [
      'Original small back-room bathrooms in interwar semis',
      'Keeping the WC where it is versus moving the soil connection',
      'Downstairs cloakrooms added under the stairs',
    ],
    faq: {
      q: 'Can I move the toilet to the other side of the room?',
      a: 'Yes, but it is the single decision that most affects the price, because it means moving the soil connection. If the budget matters, keeping the WC and moving everything else around it gets you a better bathroom for the money.',
    },
  },
  'bathroom-installation|bromley': {
    points: [
      'Second bathrooms and en-suites in larger family houses',
      'Adding outlets to vented systems where pressure needs checking first',
      'Shower pumps where gravity pressure will not do the job',
    ],
    faq: {
      q: 'Do I need a pump for the new en-suite?',
      a: 'If you are on a gravity-fed system with a loft tank and the new bathroom is high in the house, very likely yes. We check the pressure before you buy anything, because the wrong shower on the wrong system is an expensive disappointment.',
    },
  },
  'bathroom-installation|harrow': {
    points: [
      'Bathrooms added in loft conversions',
      'Pressure at the top of the house settled before ordering',
      'Soil and waste routing down through an existing house',
    ],
    faq: {
      q: 'Can I put a bathroom in my loft conversion?',
      a: 'Nearly always, but two things decide how straightforward it is: where the waste can run down to the existing stack, and whether the water pressure reaches that height. Both are worth answering before you choose a suite.',
    },
  },
  'bathroom-installation|wimbledon': {
    points: [
      'Period property with conservation constraints on external work',
      'Soil pipe and extract routing on protected elevations',
      'Family bathrooms and en-suites in larger houses',
    ],
    faq: {
      q: 'Will conservation rules stop me refitting my bathroom?',
      a: 'Rarely for what happens inside the room. Where they bite is on external work — new soil pipes, extract terminals and vents on a visible elevation. Worth checking with the council before the design is fixed.',
    },
  },
  'bathroom-installation|fulham': {
    points: [
      'Leasehold flats where freeholder consent is needed before work starts',
      'Restrictions on moving wet areas over habitable rooms below',
      'Working hours limited by the terms of the lease',
    ],
    faq: {
      q: 'Do I need permission from my freeholder?',
      a: 'In most Fulham flats, yes. Leases here commonly require consent for bathroom work, and some prohibit moving wet areas over rooms below. Check the lease before committing to a design — it is much cheaper than finding out afterwards.',
    },
  },

  // ---------- Drain unblocking ----------
  'drain-unblocking|croydon': {
    points: [
      'Long external drain runs with multiple gullies and inspection chambers',
      'More access points, so rodding and camera work is usually straightforward',
      'Blockages between the house and the boundary',
    ],
    faq: {
      q: 'Where does my responsibility for the drain end?',
      a: 'Broadly at your property boundary. Beyond that it is normally the shared sewer and Thames Water’s to deal with. We will tell you which side of the line the blockage is on before doing work you should not be paying for.',
    },
  },
  'drain-unblocking|bromley': {
    points: [
      'Root ingress from mature trees into clay and cast iron drains',
      'The same run blocking repeatedly through the year',
      'CCTV survey to find the section that needs repair rather than clearing',
    ],
    faq: {
      q: 'My drain blocks every few months. Why does it keep happening?',
      a: 'In Bromley that is very often tree roots finding a joint in an old clay drain. Clearing it buys a few months and then it returns. A camera survey finds the section at fault so it can be repaired or lined once instead of cleared four times.',
    },
  },
  'drain-unblocking|wimbledon': {
    points: [
      'Private drainage runs on larger plots',
      'Shared drainage in the terraces and flats nearer the station',
      'Establishing whether the run is yours or shared before work starts',
    ],
    faq: {
      q: 'Is my drain shared with the neighbours?',
      a: 'In the terraces near the station, very often yes — and a shared drain beyond your boundary is usually Thames Water’s responsibility. On the larger plots it is more likely to be entirely yours. We check which before quoting.',
    },
  },

  // ---------- Tier A expansion ----------
  'emergency-plumbing|kensington': {
    points: [
      'Basement drainage pumps failing and flooding the lowest floor, where gravity offers no fallback',
      'Stopcocks buried behind later joinery in period conversions, so isolation takes longer than the repair',
      'Mansion block leaks where the water has to be shut off at the riser rather than in the flat',
    ],
    faq: {
      q: 'My basement is flooding and the pump has stopped. What can I do right now?',
      a: 'Stop anything adding water to it — no taps, no washing machine, no shower — and turn the power off to that floor if water is anywhere near sockets. A failed pump will not clear on its own and the water has nowhere to go, so this is a callout rather than something to leave overnight.',
    },
  },
  'emergency-plumbing|lewisham': {
    points: [
      'Leaks that present two or three floors below the flat they started in',
      'Communal risers where the isolation valve is in a locked service cupboard',
      'Ex-local-authority blocks where the building manager holds the only key to the plant room',
    ],
    faq: {
      q: 'Water is coming through my ceiling and the flat above is empty. Who can turn it off?',
      a: 'For a block, the isolation you need is usually on the communal riser rather than inside the empty flat, and that means the building manager or a caretaker. Ring the emergency number on your service charge paperwork and call us at the same time — we can often work with them to isolate it.',
    },
  },
  'emergency-plumbing|battersea': {
    points: [
      'Heat interface unit failures in Nine Elms and Power Station flats, which look like a boiler fault but are not',
      'Communal heat network problems where several flats lose hot water at once',
      'Concierge and building management access needed before an engineer can reach the plant',
    ],
    faq: {
      q: 'I have no hot water and my neighbours do not either. Is that my flat?',
      a: 'Almost certainly not. In the riverside developments the hot water comes from a communal network through a heat interface unit in your flat, so several properties losing it together points at the network. Report it to building management first — if it turns out to be your HIU, that part is ours.',
    },
  },
  'emergency-plumbing|putney': {
    points: [
      'Mansion block stacks near the bridge where one blockage backs up into several flats',
      'Pumped waste in lower-ground rooms close to the river failing under heavy use',
      'Estate property at Roehampton on shared supply, where isolation is a communal job',
    ],
    faq: {
      q: 'The waste from my basement bathroom has backed up. Is that an emergency?',
      a: 'If it is a pumped system and the pump has failed, yes — there is no gravity fallback, so everything discharged into it stays there. Stop using that bathroom entirely and call. If the rest of the property drains normally, it is the pump rather than the main drain.',
    },
  },
  'emergency-plumbing|dulwich': {
    points: [
      'Gullies and inspection chambers well down the garden, so the blockage is rarely near the house',
      'Long external runs where roots find the joints in older clay drainage',
      'Large houses where the stopcock is often in an outbuilding or under a floor',
    ],
    faq: {
      q: 'My outside drain is overflowing but everything indoors still works. How urgent is it?',
      a: 'It is urgent enough to deal with today but you are not in immediate danger of flooding the house. Stop using washing machines and baths, which discharge a lot at once, and keep an eye on whether it rises further. On the longer runs here the blockage is often several chambers away from the house.',
    },
  },
  'emergency-plumbing|greenwich': {
    points: [
      'Conservation-area properties where the obvious external repair needs permission the emergency will not wait for',
      'Peninsula flats on heat interface units rather than individual boilers',
      'Older properties around the town centre where earlier alterations are undocumented',
    ],
    faq: {
      q: 'I live in a listed building and have a burst pipe. Does that change anything?',
      a: 'It does not change the immediate job — we isolate the water and stop the damage the same way anywhere. It changes what comes after: a permanent repair that alters anything visible or structural may need consent, so we will make it safe first and tell you clearly which parts need checking before they are made permanent.',
    },
  },
  'emergency-plumbing|chelsea': {
    points: [
      'Excavated basements where a drainage pump failure floods the lowest and most finished floor',
      'Tall townhouses where a leak at the top travels through every storey below it',
      'Mews properties with restricted access for anything that does not fit down the mews',
    ],
    faq: {
      q: 'Water is coming down from the top floor through the whole house. What first?',
      a: 'Stopcock off first, then electrics off on every floor the water has reached — it travels down inside walls and gets into lighting circuits well away from the leak. Do not wait to find the source. Ring us once the water is off.',
    },
  },
  'emergency-plumbing|tooting': {
    points: [
      'Shared houses where the person calling is not the person whose bathroom is leaking',
      'Second and third bathrooms discharging into a stack sized for one, backing up under load',
      'Food business drainage on and around the Broadway failing during service',
    ],
    faq: {
      q: 'I rent a room and the bathroom upstairs is leaking into mine. Who calls it in?',
      a: 'Anyone can call us, but in a shared house the landlord or agent is usually the one who has to authorise the work. Turn the water off if you can reach the stopcock, tell whoever manages the property immediately, and give them our number — we can talk to them directly.',
    },
  },

  // ---------- Boiler repair ----------
  'boiler-repair|dulwich': {
    points: [
      'Large houses where the boiler cannot keep up because the system was never resized for extensions',
      'Long pipe runs that lose heat before reaching the far end of the house',
      'Original systems in single-occupation family homes running well past their efficient life',
    ],
    faq: {
      q: 'My boiler runs constantly but the far end of the house is never warm. Is it failing?',
      a: 'Often not. In a large house that has been extended, the more likely story is a system asked to heat more than it was sized for, or a balancing problem where the near radiators take everything. Both are fixable without a new boiler, and we would look at that before quoting for one.',
    },
  },
  'boiler-repair|greenwich': {
    points: [
      'Heat interface units in Peninsula flats, which fail differently from boilers and are often mistaken for them',
      'Flue positions constrained by conservation-area and listed status around the town centre',
      'Period properties where pipework has been re-routed repeatedly and is not where drawings suggest',
    ],
    faq: {
      q: 'My flat on the Peninsula has no hot water but there is no boiler. What has failed?',
      a: 'You almost certainly have a heat interface unit taking heat from a communal network. If neighbours are affected too it is the network and building management need to know. If it is only you, the HIU itself — the plate heat exchanger or its controls — is the usual culprit and that is a repair we can do.',
    },
  },
  'boiler-repair|kensington': {
    points: [
      'Listed buildings where a repair is straightforward but anything touching the flue needs establishing first',
      'Boilers fitted into cupboards and voids where servicing access was never considered',
      'Mansion blocks where the boiler is sound and the communal supply feeding it is not',
    ],
    faq: {
      q: 'Does listed status stop you repairing my boiler?',
      a: 'No. Repairing or replacing internal components is unaffected. What listed status affects is anything altering the building — a new flue route, a new external terminal, or core drilling through a protected elevation. We will tell you at the point it becomes relevant rather than after the work.',
    },
  },
  'boiler-repair|walthamstow': {
    points: [
      'Boilers relocated during kitchen extensions, with pipework extended rather than replaced',
      'Warner maisonettes where the flue or condensate affects the neighbouring dwelling',
      'Condensate pipes run externally during extension work and freezing in winter',
    ],
    faq: {
      q: 'My boiler locks out every time it gets really cold. Why only then?',
      a: 'That is the classic frozen condensate pipe, and it is common here because extension work so often puts the condensate run outside. The boiler shuts down safely because it cannot drain. Thawing it restores heat, but the real fix is re-routing or lagging the pipe so it does not happen every January.',
    },
  },
  'boiler-repair|chelsea': {
    points: [
      'Poor performance on upper floors of tall townhouses, where the cause is flow rather than the boiler',
      'Boilers serving several bathrooms that were added after the unit was sized',
      'Restricted routing in mews properties limiting where a replacement flue could go',
    ],
    faq: {
      q: 'The shower on the top floor is weak but the boiler is new. What is wrong?',
      a: 'In a tall, narrow house this is usually not the boiler at all. It is the height between the water source and the outlet, and sometimes pipework too narrow for the run. A pump or an accumulator normally solves it. Replacing a working boiler would not.',
    },
  },
  'boiler-repair|battersea': {
    points: [
      'Heat interface units in Nine Elms and Power Station flats, which have no burner and no flue',
      'Communal heat networks where low network temperature presents as a flat-level fault',
      'Victorian conversions off the park with combis serving more bathrooms than intended',
    ],
    faq: {
      q: 'Do you work on heat interface units, or only boilers?',
      a: 'Both. An HIU is a heat exchanger and a set of controls rather than a boiler, so it fails in different ways — usually the plate exchanger scaling up or the controls losing calibration. What we cannot repair is the network upstream of your flat; that belongs to the building.',
    },
  },
  'boiler-repair|tooting': {
    points: [
      'Combis serving bathrooms added long after the boiler was sized',
      'Shared houses where simultaneous demand makes a healthy boiler look faulty',
      'Boilers in flat conversions squeezed into cupboards with poor ventilation and access',
    ],
    faq: {
      q: 'The hot water goes cold when someone else runs a tap. Is the boiler broken?',
      a: 'Probably not. A combi heats water on demand and can only serve one significant outlet properly at a time. In a house where a second or third bathroom has been added since, that is a capacity limit rather than a fault — and the answer is usually a system boiler and cylinder rather than a repair.',
    },
  },
  'boiler-repair|hammersmith': {
    points: [
      'Mansion block flats where the boiler is sound and the communal supply is the problem',
      'Managing agent access required before an engineer can reach communal plant',
      'Office and commercial heating around the Broadway needing out-of-hours attendance',
    ],
    faq: {
      q: 'The managing agent says it is my boiler and I think it is the building. Who is right?',
      a: 'That is a common standoff and it is answerable. We test what is arriving at your flat — pressure and supply — before touching the boiler. If the supply is short, the evidence points at the building and you have something concrete to put to the agent rather than an opinion.',
    },
  },
  'boiler-repair|lewisham': {
    points: [
      'Communal heating in blocks, where the fault frequently sits outside the flat reporting it',
      'Ex-local-authority properties on original pipework with limited isolation points',
      'Older systems in Ladywell and Hither Green terraces on their second or third boiler',
    ],
    faq: {
      q: 'Several flats in my block have no heating. Should we each call an engineer?',
      a: 'No — that gets you several callout charges for one fault. If the whole block is affected the problem is communal plant and it is the freeholder or managing agent who has to instruct the work. Report it collectively. If it turns out only your flat is affected, then it is yours.',
    },
  },
  'boiler-repair|putney': {
    points: [
      'Riverside mansion blocks with shared plant and agent-controlled access',
      'Roehampton estate property on communal heating systems',
      'Pumped waste and drainage in lower-ground rooms adding failure points near the river',
    ],
    faq: {
      q: 'My block has communal heating. What can you actually repair?',
      a: 'Everything from where the system enters your flat inwards — controls, radiators, cylinder, heat interface unit if you have one. The communal boiler plant belongs to the building and has to be instructed by the freeholder or agent. We will tell you which side of that line your fault is on before charging you for anything.',
    },
  },

  // ---------- Boiler service ----------
  'boiler-service|ealing': {
    points: [
      'Services booked ahead of winter rather than after a breakdown, which is most of the demand here',
      'Warranty terms that require documented annual servicing on newer installations',
      'Older systems in the larger houses towards Ealing Common running well past their efficient life',
    ],
    faq: {
      q: 'When is the best time of year to book a boiler service?',
      a: 'Late summer or early autumn. It costs the same as any other time and it is far easier to get a slot — everyone discovers a problem in the first genuinely cold week, which is exactly when engineers are hardest to book.',
    },
  },
  'boiler-service|croydon': {
    points: [
      'Interwar and 1930s semis on systems that have had several boilers over the years',
      'Town centre flats where the boiler is the flat’s but the supply feeding it is not',
      'Long heating runs where poor circulation shows up as cold rooms rather than a boiler fault',
    ],
    faq: {
      q: 'My heating works but some rooms never get warm. Will a service fix that?',
      a: 'Probably not on its own. A service checks the boiler, not the whole system. Rooms that never warm up usually mean the system needs balancing, or there is sludge in the circuit — both separate jobs, and we would tell you which rather than sell you a service that will not solve it.',
    },
  },
  'boiler-service|bromley': {
    points: [
      'Larger houses where an inefficient boiler costs meaningfully more over a winter',
      'Systems extended into conversions and extensions without being resized',
      'Older units where the service is really a decision point about replacement',
    ],
    faq: {
      q: 'Is a service worth it on a boiler I am probably replacing soon?',
      a: 'If it is going this year, spend the money on the replacement instead. If it has a couple of winters left, a service is worth it — it is the difference between choosing when it goes and having it choose for you in January.',
    },
  },
  'boiler-service|harrow': {
    points: [
      'Metroland semis on their second or third heating system, with pipework from all of them',
      'Loft conversions added above a system that was never resized for them',
      'Older controls that no longer do what the householder thinks they do',
    ],
    faq: {
      q: 'The house has had three boilers. Does any of that old pipework matter?',
      a: 'It can. Successive installations tend to leave redundant pipework, dead legs and valves nobody has turned in twenty years. None of it is dangerous by itself, but it affects circulation and it makes diagnosing anything slower. A service is a good moment to note what is actually there.',
    },
  },
  'boiler-service|wimbledon': {
    points: [
      'Relatively recent installations still inside manufacturer warranty terms',
      'Warranty claims that depend on evidence of annual servicing',
      'Larger properties where the system does more work than a flat’s would',
    ],
    faq: {
      q: 'Does skipping a year of servicing really void a warranty?',
      a: 'It can, and it is one of the commonest reasons a claim gets refused. Manufacturers generally require documented annual servicing, so the gap in the record is what they point at rather than anything about the fault itself. Keep the paperwork somewhere you can find it.',
    },
  },
  'boiler-service|greenwich': {
    points: [
      'Conventional gas boilers in the older town centre properties',
      'Heat interface units in Peninsula flats, which are not gas appliances and need a different check',
      'Conservation-area properties where flue access affects how the service is carried out',
    ],
    faq: {
      q: 'I have a heat interface unit, not a boiler. Does it need servicing?',
      a: 'It benefits from a periodic check, but it is not a gas appliance and it is not a gas service. The plate heat exchanger scales up over time and the controls drift, both of which show as poor hot water. Worth doing, but it is a different job from a boiler service and we would price it as one.',
    },
  },
  'boiler-service|lewisham': {
    points: [
      'Flats where the boiler is the occupier’s and the communal system behind it is the building’s',
      'Ex-local-authority property on original pipework with limited isolation',
      'Terraces towards Ladywell and Hither Green on ageing individual systems',
    ],
    faq: {
      q: 'My block has communal heating. Is there anything to service in my flat?',
      a: 'Usually yes, but it is not a boiler service. There will be controls, valves and often a heat interface unit inside your flat that are yours, and communal plant beyond it that belongs to the building. We will tell you which side of that line each part sits on before doing anything.',
    },
  },
  'boiler-service|wandsworth': {
    points: [
      'Combis serving more bathrooms than they were originally sized for',
      'Converted terraces where the boiler position was decided by the conversion, not by access',
      'Systems where hot water performance has declined gradually enough that nobody noticed',
    ],
    faq: {
      q: 'Hot water is slower than it used to be. Is that a service issue?',
      a: 'Sometimes. Scale on the plate heat exchanger builds gradually and a service can catch it before it becomes a replacement part. But if the house has gained a bathroom since the boiler went in, the honest answer may be that the boiler is doing all it can and no amount of servicing changes that.',
    },
  },
  'boiler-service|brixton': {
    points: [
      'Restaurants and bars where a service has to happen outside trading hours',
      'Flats above commercial premises sharing a building with very different heating demands',
      'Estate and converted-terrace property on individual boilers of varying age',
    ],
    faq: {
      q: 'Can you service the boiler in my restaurant without closing?',
      a: 'We schedule commercial work around trading — usually early morning or after close. It is a normal way to work here and it is worth agreeing the slot when you book rather than discovering the clash on the day.',
    },
  },
  'boiler-service|islington': {
    points: [
      'More searches for servicing than for repair, which is unusual and suggests planned maintenance',
      'Period conversions with boilers in cupboards where access is the practical constraint',
      'Flats where the service has to be arranged around a managing agent',
    ],
    faq: {
      q: 'The boiler is in a cupboard behind fitted units. Is that a problem?',
      a: 'It is a common one here and it depends how much comes off. An engineer needs proper access to service it safely, so if that means dismantling a cupboard every year it is worth knowing — and worth thinking about at the point the boiler is next replaced.',
    },
  },
  'boiler-service|walthamstow': {
    points: [
      'Condensate pipes run externally during extension work, which freeze in the first hard frost',
      'Warner maisonettes where a flue or condensate route affects the neighbouring dwelling',
      'Terraces extended repeatedly with pipework added rather than replaced',
    ],
    faq: {
      q: 'Can a service stop my boiler locking out every cold snap?',
      a: 'If it is the condensate pipe freezing — and here it very often is, because extension work so often puts that run outside — then yes, in the sense that we can see it and re-route or lag it. That is a small job done in autumn and a miserable one done in January.',
    },
  },
  'boiler-service|streatham': {
    points: [
      'Large houses divided into flats, each with its own boiler and its own service',
      'Mansion blocks along the High Road with communal tanks and risers alongside individual boilers',
      'Freeholders and agents arranging several services in one building at once',
    ],
    faq: {
      q: 'Can you service every flat in the building in one visit?',
      a: 'Usually, and it is easier for everyone if it is arranged that way — one visit, one set of access arrangements. Whoever manages the building normally coordinates it. Each flat still gets its own service and its own record.',
    },
  },
  'boiler-service|tooting': {
    points: [
      'Shared houses where nobody currently living there knows when it was last serviced',
      'Boilers running near capacity because bathrooms were added after installation',
      'Properties where the person using the boiler is not the person who arranges the service',
    ],
    faq: {
      q: 'I rent. Can I book a boiler service myself?',
      a: 'You can call us, but the boiler is the landlord’s and they normally arrange and pay for the work. Tell them, give them our number, and we can deal with them directly — it saves you being the go-between.',
    },
  },
  'boiler-service|acton': {
    points: [
      'Older conversions in South Acton on individual boilers of varying vintage',
      'North Acton blocks on communal systems where the flat-side equipment is what gets checked',
      'Boilers relocated during extensions, sometimes to positions that make servicing awkward',
    ],
    faq: {
      q: 'My flat is in one of the new North Acton blocks. What actually needs servicing?',
      a: 'Often not a boiler at all — many of those blocks run communal heating with a heat interface unit in each flat. That unit is worth a periodic check, but it is not a gas service and the plant that feeds it belongs to the building. We will look and tell you which you have.',
    },
  },

  'boiler-repair|acton': {
    points: [
      'Boilers moved during kitchen extensions, with pipework extended rather than renewed',
      'North Acton flats where the fault is in the building system rather than the property',
      'Conversions where the boiler serves more outlets than it was sized for',
    ],
    faq: {
      q: 'No hot water and my neighbours are the same. Is that my boiler?',
      a: 'In the newer North Acton blocks, almost certainly not — that pattern points at the communal system, and building management need to know before you pay for a callout. In the older converted houses it is more likely to be your own boiler. Tell us which you are in and we can usually work it out on the phone.',
    },
  },

  // ---------- Boiler installation ----------
  'boiler-installation|kensington': {
    points: [
      'Listed and conservation-area buildings where the flue terminal position is the first question, not the last',
      'Basements where condensate has to be pumped rather than run to a drain by gravity',
      'Mansion blocks where the installation date depends on the managing agent as much as on us',
    ],
    faq: {
      q: 'Can I have any boiler I like in a listed building?',
      a: 'The boiler itself is rarely the constraint — the flue is. Where it can terminate, and whether anything may be cored through a protected elevation, decides which units are actually installable. We establish that before recommending a product, because choosing first and finding out afterwards wastes everyone’s time.',
    },
  },
  'boiler-installation|ealing': {
    points: [
      'Family houses that have gained bathrooms and occupants since the last boiler went in',
      'Combi-to-system conversions where simultaneous hot water demand has outgrown a combi',
      'Boilers in kitchen cupboards where the extension work has since boxed them in',
    ],
    faq: {
      q: 'We have added a second bathroom. Do we need a different type of boiler?',
      a: 'Possibly. A combi heats water on demand and can only serve one significant outlet properly at a time, so two showers at once is the case it fails. If that will happen regularly, a system boiler with a cylinder is the answer. If it will not, a correctly sized combi is still simpler and cheaper.',
    },
  },
  'boiler-installation|wandsworth': {
    points: [
      'Boiler positions inherited from a conversion rather than chosen for access or noise',
      'Terraces where a new installation is the chance to move the unit off a bedroom wall',
      'Systems serving more outlets than the original boiler was sized for',
    ],
    faq: {
      q: 'Is it worth moving the boiler while it is being replaced?',
      a: 'Often, yes. Moving it adds pipework and flue routing to the job, but a replacement is the only realistic moment to fix a boiler that is noisy against a bedroom, buried behind fitted units, or somewhere that makes every future service awkward. We will price both so you can see what the move actually costs.',
    },
  },
  'boiler-installation|wimbledon': {
    points: [
      'Larger houses with two or more bathrooms likely to be in use at once',
      'Properties where a combi was fitted on price and has never quite kept up',
      'Installations sized on the radiator count and occupancy rather than on what was there before',
    ],
    faq: {
      q: 'How do you decide what size boiler we need?',
      a: 'Radiator count, number of bathrooms and how many people actually live there — not the size of the old one, which may well have been wrong too. Oversized boilers cycle on and off and wear out early; undersized ones never keep up. It is worth getting right at the point of installation because it cannot be adjusted afterwards.',
    },
  },
  'boiler-installation|fulham': {
    points: [
      'Flat conversions where the flue has to reach an external wall that may be some way off',
      'Basement and lower-ground rooms needing pumped condensate rather than gravity fall',
      'Shared stacks and party walls limiting where pipework can be routed',
    ],
    faq: {
      q: 'Our flat has no external wall near the boiler position. Is installation possible?',
      a: 'Usually, but it may need a twin-flue system, which allows a far longer flue run than a standard boiler. It needs designing rather than improvised, and it narrows which units will work. We look at the route before recommending anything.',
    },
  },
  'boiler-installation|croydon': {
    points: [
      'Interwar semis still on their original system layout',
      'Boilers in kitchen cupboards where a move improves both access and noise',
      'Long pipe runs where circulation matters as much as boiler output',
    ],
    faq: {
      q: 'Should the new boiler go where the old one is?',
      a: 'Not automatically. Like-for-like is the cheapest and quickest option and often the right one — but if the current position is awkward to service, noisy, or was chosen because it suited a kitchen fitter twenty years ago, a replacement is the moment to reconsider it.',
    },
  },
  'boiler-installation|bromley': {
    points: [
      'Larger properties where correct sizing has a real effect on running cost',
      'Systems extended into conversions without ever being resized',
      'Older heat-only setups with cylinders, where the choice of replacement type is genuinely open',
    ],
    faq: {
      q: 'Is a bigger boiler better for a big house?',
      a: 'No — bigger than needed is actively worse. An oversized boiler short-cycles, which wastes gas and wears out components early. The right size is the one matched to the radiators and hot water demand. That usually surprises people who assume more output is safer.',
    },
  },
  'boiler-installation|harrow': {
    points: [
      'Loft conversions with bathrooms added above what the system was sized for',
      'Rear extensions where radiators were added onto an existing circuit',
      'Properties on their third heating system, with pipework surviving from all of them',
    ],
    faq: {
      q: 'The top floor is always cold. Will a new boiler fix it?',
      a: 'Only if the boiler is the problem, and in a house with a loft conversion it often is not. More commonly the system was never resized for the extra radiators, or the circuit needs balancing. We would rather establish that first than sell you a boiler that changes nothing.',
    },
  },
  'boiler-installation|battersea': {
    points: [
      'Victorian conversions off the park, which do have individual boilers',
      'Riverside and Nine Elms blocks on communal heat networks, where there is no boiler to install',
      'Conversions where flue routing has to respect the flats above and below',
    ],
    faq: {
      q: 'Can I have my own boiler installed in a Nine Elms flat?',
      a: 'Almost certainly not. Those buildings run communal heat networks and each flat has a heat interface unit rather than a boiler — that is a design decision made for the whole building and not something an individual flat can opt out of. What we can do is repair and maintain the unit you have.',
    },
  },
  'boiler-installation|chelsea': {
    points: [
      'Tall, narrow townhouses where plant position affects pressure on the upper floors',
      'Mews properties with limited external routing and restricted access',
      'Listed buildings where flue and external pipework need establishing before product choice',
    ],
    faq: {
      q: 'Will a new boiler improve the weak shower on the top floor?',
      a: 'Not on its own. In a tall house that is usually the height between the water source and the outlet, plus pipework too narrow for the run. A pump or accumulator solves it. A new boiler will not, and anyone selling you one on that basis is selling the wrong thing.',
    },
  },
  'boiler-installation|clapham': {
    points: [
      'Terrace conversions where a flue terminal affects the flat above or below',
      'Boilers in cupboards sized by the conversion rather than for servicing access',
      'Freeholder consent needed before external work on a converted house',
    ],
    faq: {
      q: 'Do I need the freeholder’s permission to install a boiler?',
      a: 'For the boiler itself, usually not. For anything that alters the building — a new flue terminal, core drilling an external wall, new external pipework — very often yes, and it is in most leases. Worth checking before booking a date rather than on the morning.',
    },
  },
  'boiler-installation|brixton': {
    points: [
      'Flats above shops and restaurants, where the work affects a business downstairs',
      'Installations scheduled around trading hours rather than the engineer’s diary',
      'Converted terraces and estate property with very different constraints on the same street',
    ],
    faq: {
      q: 'I live above a restaurant. Does that complicate the installation?',
      a: 'It affects timing more than method. Water off, drilling and deliveries all have to be agreed with the business below, which usually means starting early or working around service. It is normal here — worth raising when you book so the date works for both of you.',
    },
  },
  'boiler-installation|greenwich': {
    points: [
      'Conservation-area and listed constraints on flue terminals in the town centre',
      'Peninsula flats on heat networks, where a boiler installation is not possible or needed',
      'Older properties where earlier alterations are undocumented and found on the day',
    ],
    faq: {
      q: 'Which parts of Greenwich can actually have a new boiler?',
      a: 'The older housing around the town centre and out towards Blackheath, yes — subject to flue constraints where the property is listed or in a conservation area. Peninsula flats on the communal heat network, no: there is no individual boiler and no provision for one. Tell us which you are in and we can be specific.',
    },
  },
  'boiler-installation|putney': {
    points: [
      'Mansion blocks where the managing agent has to approve the flue and the date',
      'Riverside properties with pumped drainage in lower-ground rooms',
      'Roehampton estate property where heating may be communal rather than individual',
    ],
    faq: {
      q: 'How long does getting agent approval usually add?',
      a: 'It varies and we cannot promise a timescale for someone else’s decision. What we can do is give you the technical detail agents ask for — flue position, route, and what is being altered — in a form you can send on, which is usually what holds these up.',
    },
  },
  'boiler-installation|tooting': {
    points: [
      'Houses that have gained bathrooms since the last boiler was sized',
      'Shared houses with simultaneous hot water demand a combi cannot meet',
      'Conversions where the cupboard, not the property, has decided the boiler size',
    ],
    faq: {
      q: 'Four of us share the house. What should we be fitting?',
      a: 'Almost certainly a system boiler with a cylinder rather than a combi. Four people means overlapping showers, and a combi physically cannot serve two at once without both suffering. A cylinder stores hot water so simultaneous demand stops being a problem.',
    },
  },
  'boiler-installation|balham': {
    points: [
      'Conversions where the boiler cupboard was sized by whoever did the conversion',
      'Flats where servicing access was not considered when the space was built',
      'Systems serving more outlets than the original installation allowed for',
    ],
    faq: {
      q: 'Will a new boiler fit the existing cupboard?',
      a: 'Usually, but it is worth measuring rather than assuming — modern condensing boilers need clearance around them for servicing as well as physical space, and some cupboards built around an older unit do not have it. We check before ordering, not on the day of installation.',
    },
  },
  'boiler-installation|dulwich': {
    points: [
      'Large family houses on long pipe runs where circulation affects perceived output',
      'Systems extended into loft and rear conversions without resizing',
      'Estate scheme of management restrictions where external work is involved',
    ],
    faq: {
      q: 'Does the Dulwich Estate scheme affect a boiler installation?',
      a: 'It can, where the work alters the outside of the property — a new flue terminal or external pipework in particular. The boiler and internal work generally are not affected. Check your own paperwork, because the terms vary, and we will tell you which parts of the job are external.',
    },
  },
  'boiler-installation|acton': {
    points: [
      'Older conversions where a proper installation replaces years of piecemeal extension',
      'North Acton blocks on communal systems, where a boiler installation is not applicable',
      'Properties where the boiler was moved during an extension and never quite suited the position',
    ],
    faq: {
      q: 'My flat is a new build in North Acton. Can I install a boiler?',
      a: 'If it is on the building’s communal heat network, no — there is no gas supply to the flat and no boiler position. You have a heat interface unit instead, which we can service and repair. In the older converted property further south, a normal installation is straightforward.',
    },
  },

  // ---------- Enfield, Barnet, and two first-of-service pages ----------
  'emergency-plumbing|enfield': {
    points: [
      'Stopcocks in garages, outbuildings and under floors rather than under the kitchen sink',
      'Burst pipes in unheated outbuildings when a freeze thaws',
      'Long external runs where a leak surfaces a long way from its source',
    ],
    faq: {
      q: 'I cannot find the stopcock. What do I do while I wait?',
      a: 'Look under the kitchen sink first, then in a garage, utility room or downstairs cloakroom — on properties out this way it is often not in the kitchen at all. If you cannot find it, there is usually an external stop tap under a small metal cover near the boundary. Tell us on the phone and we will talk you through it.',
    },
  },
  'emergency-plumbing|barnet': {
    points: [
      'Older property around the centre where isolation points have been built over',
      'Larger suburban houses with long runs and multiple isolation valves',
      'Unheated garages and lofts where pipes freeze and split',
    ],
    faq: {
      q: 'The water is off but it is still running. Why?',
      a: 'Whatever is above the leak is still draining down, and in a house with a loft tank that can be a lot of water. Open the cold taps downstairs to drain it faster, and it should stop within a few minutes. If it does not, the stopcock has not fully closed and we need to get there.',
    },
  },
  'leak-detection|croydon': {
    points: [
      'Buried supply runs across long driveways and gardens, where a leak can go unseen for months',
      'Water bills rising with no visible cause anywhere in the property',
      'Older external pipework on larger plots, well away from the house',
    ],
    faq: {
      q: 'My bill has gone up but I cannot see a leak anywhere. Is that possible?',
      a: 'Very. On a property with a long buried supply run, water can escape underground for months and never surface — it just soaks away. The meter test tells you quickly: turn everything off, read the meter, wait an hour, read it again. If it has moved, something is running.',
    },
  },
  'bathroom-installation|enfield': {
    points: [
      'Space for a second bathroom or en-suite in larger suburban houses',
      'Vented systems where adding an outlet means checking pressure before choosing a shower',
      'Loft conversions where the new bathroom sits above the existing tank',
    ],
    faq: {
      q: 'Can I put a shower in the loft conversion?',
      a: 'Usually, but pressure is the question to settle first. On a gravity-fed system the loft bathroom sits close to the tank, which leaves very little head — often not enough for a decent shower without a pump. We check the system before you choose anything, because the wrong shower on the wrong system is an expensive way to find out.',
    },
  },
};

export default comboDetail;
