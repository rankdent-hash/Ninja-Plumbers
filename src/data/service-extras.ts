// Per-service "What affects the price" section plus two extra FAQs, written to
// replace the long list of every other service at the foot of each page with
// content unique to that page.
//
// Keys match the slugs in src/data/services.ts. The four air-conditioning
// services are deliberately absent. 'water-through-ceiling', 'toilet-repair'
// and 'leak-repair' are new service pages written in parallel: they carry a
// price section only, because their own entry already covers FAQs.
//
// No prices, ranges or "from £" figures anywhere, by design. The price-agreed
// line and the £25 first call-out offer appear in a handful of entries only.

export type ServiceExtra = {
  price: { intro: string; factors: { title: string; body: string }[] };
  extraFaqs: { q: string; a: string }[];
  // Emergency page only: what to have ready when you ring.
  haveReady?: { heading: string; items: string[] };
};

export const serviceExtras: Record<string, ServiceExtra> = {
  'emergency-plumbing': {
    haveReady: {
      heading: 'Have these to hand when you ring',
      items: [
        'The postcode, plus the flat number or building name if you\'re in a block.',
        'What you can see, which room it\'s in, and how long it\'s been going on.',
        'Whether water is still coming through, or has stopped since you turned something off.',
        'Where the stopcock is and whether it moved when you tried it — or that you couldn\'t find one.',
        'Access details: where a van can park, any door or gate codes, and a number for the neighbour above if the water seems to be coming from their flat.',
      ],
    },
    price: {
      intro:
        'An emergency visit is priced on what the engineer finds when they arrive, and on what it takes to stop the damage there and then. The points below explain why two callouts on the same night can cost quite different amounts.',
      factors: [
        {
          title: 'Whether it really cannot wait',
          body: 'Work that genuinely cannot wait is charged at emergency rates, and you hear the price before the engineer starts, whatever the hour. If the water can be shut off and the repair can safely wait until morning, we will say so.',
        },
        {
          title: 'Making safe, or the full repair',
          body: 'Sometimes the first visit stops the water, isolates the damaged section and gets the rest of the house back on supply, and the proper repair follows once parts or access are sorted. Doing it that way in daylight can cost less than forcing a full repair at night.',
        },
        {
          title: 'Where the failure is',
          body: 'A burst under the kitchen sink is quick to reach. A joint that has let go inside a ceiling void, under a bathroom floor or behind a fitted kitchen means opening something up first, and that access work is part of the price.',
        },
        {
          title: 'A stopcock that will not turn',
          body: 'If the internal stopcock has seized, or it sits in a communal cupboard or another flat, the water has to be shut off somewhere else first — sometimes at the boundary, sometimes by Thames Water in the street. That extra step takes time before the repair can even begin.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What should I do if I smell gas?',
        a: 'Call the gas emergency line before you call us. Leave the property, don\'t switch lights or appliances on or off as you go, and don\'t smoke or use a lighter. From outside, ring the National Gas Emergency Service on 0800 111 999. Once they have made it safe, our Gas Safe registered engineers can repair the boiler, cooker or pipework involved.',
      },
      {
        q: 'Water is near the electrics — what do I do?',
        a: 'Treat anything wet as live. Keep your hands off switches, sockets and fittings the water has reached. If the consumer unit is dry, and so is the floor in front of it, switch everything off at the main switch; if not, keep everyone out of that room. We will deal with the water, but have an electrician check any wiring that got wet before it is used again.',
      },
      {
        q: 'Can a landlord or managing agent book on a tenant\'s behalf?',
        a: 'Yes. Give us the address, the tenant\'s name and phone number, and who is paying, and we will arrange access with the tenant ourselves. If anything over a set amount needs your approval, say so when you book and we will come back to you before going further. Tenants can ring us directly in an emergency too — it helps to have the landlord\'s or agent\'s details to hand.',
      },
      {
        q: 'I am away and a neighbour says water is pouring out of my home. Can you help?',
        a: 'Yes, as long as someone can let us in. A neighbour with a key, a managing agent or a concierge are all common. While the engineer is travelling, we can talk whoever is there through finding and shutting the stopcock, which limits the damage sooner. Tell us on the phone who will meet the engineer and how to reach them, and send any entry codes or gate details by WhatsApp so nothing holds things up at the door.',
      },
      {
        q: 'Will my home insurance pay for an emergency plumber?',
        a: 'Sometimes, but it depends on your policy. Many buildings and contents policies cover the damage caused by escaping water, while the repair to the pipe itself is often treated separately or excluded. Some policies include home emergency cover as an add-on. Ring your insurer, take photos before anything is cleared up, and keep the invoice. If the insurer wants an explanation of what failed, ask the engineer to note it down on the visit.',
      },
    ],
  },

  'boiler-repair': {
    price: {
      intro:
        'A boiler repair is priced once the fault has been found, not before. Until the engineer has tested the boiler, nobody can honestly say which part has failed, and the part is what decides most of the cost.',
      factors: [
        {
          title: 'Which part has failed',
          body: 'A pressure sensor, a thermistor or a condensate trap is a small part and a short job. A fan, a gas valve, a diverter valve or a printed circuit board costs considerably more, and a failed heat exchanger can push the repair past what the boiler is worth.',
        },
        {
          title: 'Whether the part is on the van',
          body: 'If the engineer has the right part with them, the boiler can often be running again on the same visit. A part specific to your model may need ordering, which means a second trip. Sending the make, model and fault code beforehand improves the odds.',
        },
        {
          title: 'The age and make of the boiler',
          body: 'Parts for current models from the big manufacturers are easy to find. Parts for older or less common boilers can be scarce and expensive, and for some there is no longer anything available at all, which turns a repair into a replacement conversation.',
        },
        {
          title: 'The boiler, or the system around it',
          body: 'Not every heating fault is inside the boiler. A seized pump, a sticking motorised valve, a dead room thermostat or sludge in the pipework can all stop the heating. Where the fault sits, and how easily it can be reached, changes the price.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'My boiler is still under the manufacturer’s warranty. Should I call you?',
        a: 'Call the manufacturer first. A boiler still under warranty is usually repaired by the manufacturer’s own engineers, and another company working on it can complicate a claim. Have the installation date and your service records ready, because most manufacturers ask for proof of annual servicing. If the warranty has run out, or the manufacturer will not cover the fault, we are happy to diagnose and repair it.',
      },
      {
        q: 'Is it safe to keep resetting the boiler when it locks out?',
        a: 'Pressing reset once or twice after a lockout is what the button is for. If it locks out again straight away, or keeps doing it day after day, stop resetting it — a lockout is the boiler protecting itself, and forcing it back on can make the fault worse. If you smell gas at any point, turn the supply off at the meter, open the windows and call the National Gas Emergency Service on 0800 111 999.',
      },
    ],
  },

  'boiler-service': {
    price: {
      intro:
        'A boiler service is a set list of checks, but it does not take the same time on every boiler. The model, how well it has been looked after and where it lives all change how long the engineer needs.',
      factors: [
        {
          title: 'The make and model',
          body: 'Some boilers open up in minutes. Others need more taken apart before the burner and heat exchanger can be inspected, and certain manufacturers specify that a seal or gasket is renewed whenever the combustion chamber is opened. The service follows whatever that boiler’s instructions require.',
        },
        {
          title: 'How long since the last one',
          body: 'A boiler serviced every year is usually a clean, routine visit. One that has gone several winters without attention tends to need more work: a clogged condensate trap, a fouled burner, debris in the heat exchanger. That extra cleaning takes time, and it shows in the price.',
        },
        {
          title: 'Getting to the boiler',
          body: 'A boiler on a kitchen wall is simple. One in a loft without boards or a proper ladder, squeezed into an airing cupboard, or boxed behind fitted units that have to come off first takes longer to service safely. Tell us where yours is when you book.',
        },
        {
          title: 'Adding other gas checks',
          body: 'If you also want the hob or a gas fire looked at, or you are a landlord who needs a gas safety certificate, doing it on the same visit is usually better value than booking separate appointments. Mention it when you book so enough time is allowed.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'Is a boiler service the same as a gas safety certificate?',
        a: 'No, though the two are easy to confuse. A gas safety check is the legal annual check landlords need, covering every gas appliance, flue and the pipework, and it produces the certificate tenants must be given. A service is maintenance on the boiler itself: opening it up, cleaning it and checking it runs as it should. Many landlords book both on one visit; a homeowner living in the property generally only needs the service.',
      },
      {
        q: 'Is there anything I should do before the engineer arrives?',
        a: 'Clear the space in front of the boiler and around it, including anything stacked in the cupboard, and make sure the loft hatch and ladder are usable if that is where it lives. Have the last service record to hand if you can find it. And make a note of anything odd — noises, a pressure that drifts, radiators slow to warm — because the service is the right moment to mention it.',
      },
    ],
  },

  'boiler-installation': {
    price: {
      intro:
        'The boiler itself is only one line of an installation price. What moves the figure most is how much has to change around it: the pipework, the flue, the gas supply and where the new unit is going to sit.',
      factors: [
        {
          title: 'Same type, or a change of system',
          body: 'Fitting a combi where a combi already was keeps most of the pipework as it is. Changing from a tank-fed system to a combi, or adding a cylinder to serve more bathrooms, means reworking the hot and cold pipework, and that is where the extra labour goes.',
        },
        {
          title: 'The flue',
          body: 'The simplest flue goes straight out through the wall behind the boiler. A vertical flue through the roof, a long run across a ceiling, or a plume kit to steer the exhaust away from a window or a neighbour’s boundary all add parts and time.',
        },
        {
          title: 'The gas supply',
          body: 'A modern combi can need more gas than the old boiler did, and the pipe from the meter has to be big enough to deliver it. In older homes it often is not, so a new, larger gas pipe from the meter becomes part of the job.',
        },
        {
          title: 'Where the condensate can drain',
          body: 'Every condensing boiler produces mildly acidic water whenever it runs, and that needs a drain. An internal waste pipe close by is simplest. Where there is none, the pipe has to run outside, sized and insulated so it does not freeze and lock the boiler out in winter.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'Will we be without heating and hot water while it is fitted?',
        a: 'Yes, for as long as the old boiler is disconnected and the new one is being connected, filled and commissioned. How long that lasts depends on whether it is a straight swap or a bigger change, and you will know which before we start. In winter it is worth having a plug-in heater ready, and if the work runs over more than one day, somewhere else to shower.',
      },
      {
        q: 'What happens to the tanks in the loft if we switch to a combi?',
        a: 'They are drained and disconnected, and the pipework that fed them is capped off or removed, along with the hot water cylinder in the airing cupboard. That usually frees up a useful cupboard. Old tanks do not always fit back through the loft hatch in one piece, so they may be cut up to get them out. Where a tank also feeds something else, we check that before anything is removed.',
      },
    ],
  },

  'boiler-replacement': {
    price: {
      intro:
        'A replacement is priced from the old boiler outwards. What it is, where it sits, what it is connected to and what has to come out with it decide most of the quote, before the new boiler is even chosen.',
      factors: [
        {
          title: 'What comes out with the old boiler',
          body: 'Taking a wall-hung combi off the wall is quick. A floor-standing boiler, a back boiler behind a gas fire, or a loft tank and cylinder that are no longer needed all take longer to remove, and some leave a fireplace or cupboard to make good.',
        },
        {
          title: 'Whether the flue can stay where it is',
          body: 'Even when the new boiler goes in the same spot, the old flue position may not meet today’s rules — too close to a window, a door, a boundary or the ground. If it has to move, that is extra work even on an otherwise straight swap.',
        },
        {
          title: 'Controls the rules now require',
          body: 'Building regulations set minimum controls for a new boiler: a programmer, a room thermostat and, in most homes, valves that let each radiator be controlled on its own. If your system has none of these, fitting them is part of the replacement.',
        },
        {
          title: 'The pipework you are keeping',
          body: 'A new boiler inherits the system it is connected to. Old radiator valves that weep, pipework full of sludge or a cylinder on its last legs can all need attention first, otherwise the new boiler is working against the same problems as the old one.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'Is it better to replace the boiler before it fails completely?',
        a: 'It can be, if the boiler is old, unreliable and parts for it are getting scarce. Replacing on your own timetable means you can compare quotes calmly and pick a time outside the coldest weeks, rather than accepting whatever is available during a January breakdown. But a boiler that is old and still running well does not need replacing on age alone, and we will tell you if yours is in that position.',
      },
      {
        q: 'Will a new boiler lower my heating bills?',
        a: 'Often, if the old one is a non-condensing boiler from before the mid-2000s, because modern condensing boilers turn more of the gas into heat. How much you notice depends on how the system is controlled and whether the radiators are sized so the boiler can run at lower temperatures. A new boiler on a system with no thermostat and sludged-up radiators will save far less than the brochure suggests.',
      },
    ],
  },

  'drain-unblocking': {
    price: {
      intro:
        'Many blocked drains are cleared in a single visit, but not every visit involves the same work. The price depends on where the blockage sits, what it is made of and how easily the equipment can get to it.',
      factors: [
        {
          title: 'Indoors or underground',
          body: 'A blocked sink trap or bath waste is a hand-tool job. A blockage in the underground drain, reached through a manhole in the garden or the front path, needs rods or a jetter and more time. Knowing which fixtures are affected usually tells us which it is.',
        },
        {
          title: 'What the blockage is made of',
          body: 'Paper and waste usually rod through. Kitchen fat that has set hard along the pipe, compacted wipes, or scale built up inside old cast iron need high-pressure jetting to shift properly, which is heavier equipment and a longer job.',
        },
        {
          title: 'Getting to the manhole',
          body: 'A manhole cover that lifts easily saves time. One that has rusted shut, been paved or decked over, sits inside the house under a hallway floor, or is in a neighbour’s garden and needs their say-so adds work before clearing can even start.',
        },
        {
          title: 'The call-out',
          body: 'There is a call-out charge, and the price for clearing is agreed with you once the engineer has seen the blockage and before any work starts. If you are new to Ninja Plumbers, £25 comes off that first call-out, though it cannot be combined with other offers.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'Can I keep using the sinks and washing machine while I wait?',
        a: 'Best not. Anything that drains into the blocked section adds water with nowhere to go, and it comes back up at the lowest point — often a downstairs toilet, a shower tray or a gully by the back door. Upstairs bathrooms count too, because they usually join the same drain further down. Hold off on the washing machine and dishwasher in particular, since they empty a lot of water at once.',
      },
      {
        q: 'The blockage is outside. Do you need to come through the house?',
        a: 'Often, yes. In a London terrace with no side passage, the only way to a back-garden manhole is through the house, and the jetting hose may need to run through the hall as well. The engineer protects the floor on the way through. They also need to run taps and flush toilets afterwards to prove the drain is flowing, so someone needs to be in.',
      },
    ],
  },

  'leak-detection': {
    price: {
      intro:
        'You are paying for the search, and the repair is priced separately once the leak is found. How long the search takes depends on the building, the pipework involved and how much the leak is giving away.',
      factors: [
        {
          title: 'Which system is leaking',
          body: 'The heating circuit, the mains cold supply, the hot water and the waste pipes are each tested in a different way. Isolating and pressure-testing them one at a time narrows things down when the culprit is not obvious, but every extra system adds time.',
        },
        {
          title: 'What the floor is made of',
          body: 'Pipes under a suspended timber floor are relatively easy to listen to and reach. Pipes buried in a concrete screed, tangled up with underfloor heating or beneath large stone tiles make the signal harder to read and the search slower.',
        },
        {
          title: 'A steady leak or an occasional one',
          body: 'A leak that runs all the time shows up clearly when the pipework is pressure-tested. One that only appears when the shower is on, or when the heating is hot, has to be recreated during the visit before it can be traced.',
        },
        {
          title: 'Inside the house or under the garden',
          body: 'If the meter test shows a loss but nothing inside is wet, the leak may be on the supply pipe under the front garden or path. Tracing along a buried external pipe is a different search, and usually a longer one.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'Should I turn the water or heating off before you arrive?',
        a: 'Only if the leak is actively causing damage. Otherwise leave things running normally, because a leak that is still behaving as it usually does is far easier to trace. If you have already turned the stopcock off or let the boiler pressure drop, that is fine — just tell us when you book, so the engineer knows to repressurise the system before starting the tests.',
      },
      {
        q: 'Can you repair the leak on the same visit?',
        a: 'Sometimes. If the leak turns out to be in reach — under a floorboard, behind a bath panel, at a valve — and the engineer has what is needed, the repair can often follow straight on, once you have agreed the price for it. If it is buried in a screed floor or behind tiling, the repair usually needs planning, materials and sometimes other trades, so it becomes a separate booking.',
      },
    ],
  },

  'bathroom-installation': {
    price: {
      intro:
        'Bathroom prices vary more than almost any other job we quote, because no two rooms start from the same place. A handful of decisions and discoveries move the figure far more than the choice of taps.',
      factors: [
        {
          title: 'What is under the old bathroom',
          body: 'Stripping out an old bathroom often uncovers soft floorboards under the bath, old iron or lead pipework, or walls that come away with the tiles. Each of those has to be put right before anything new goes in, and it is priced once it has been seen.',
        },
        {
          title: 'Concealed or on show',
          body: 'Pipes and cisterns hidden behind the wall look cleaner, but they need a stud wall or boxing built, frames for wall-hung pieces, and access panels. Exposed pipework, a close-coupled toilet and a pedestal basin involve noticeably less building work.',
        },
        {
          title: 'How much tiling, and what kind',
          body: 'Tiling the whole room floor to ceiling costs more than tiling around the bath and shower. Large-format porcelain needs flat, well-prepared walls, and natural stone needs sealing, so the tile you choose affects the preparation as well as the tiler’s time.',
        },
        {
          title: 'Getting materials in and waste out',
          body: 'A top-floor flat with no lift, a street where parking is by permit only, or a building where the lift has to be booked all slow a job down. A skip on the road also needs a council permit, which is worth allowing for.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'Does a new bathroom need building regulations approval?',
        a: 'A straight replacement in the same room generally does not. It becomes more involved when you add a bathroom where there was not one, run new drainage, alter the structure or add electrical work, and the room needs adequate ventilation whichever way you go. We will tell you at the quote stage if anything in your plans needs notifying, so it is not discovered at the end.',
      },
      {
        q: 'We are renovating the whole house. When should the bathroom be done?',
        a: 'The pipework goes in early, before walls are plastered and floors are laid, and the bathroom is fitted and finished much later. That first stage is easy to miss when the builder, electrician and plasterer are all booked, and a missed pipe means opening up a finished wall. Bring us in when the other trades are being planned, not after the plaster has gone on.',
      },
    ],
  },

  'toilet-installation': {
    price: {
      intro:
        'Swapping a toilet is one of the smaller plumbing jobs there is, yet quotes for it still differ. Nearly all the difference comes from what happens behind and underneath the pan rather than the toilet you pick.',
      factors: [
        {
          title: 'The style of toilet',
          body: 'A close-coupled toilet on an existing waste is the simplest fit. Back-to-wall pans need a unit or boxing to hide the cistern, and wall-hung pans need a steel frame and a false wall built, boarded and tiled before the pan goes on.',
        },
        {
          title: 'Lining up with the soil pipe',
          body: 'If the new pan’s outlet meets the existing soil pipe at the same height and position, a standard connector does it. Different heights, an offset, or an old cement joint into cast iron that has to be cut out carefully all add parts and time.',
        },
        {
          title: 'The floor under the old one',
          body: 'An old toilet that has leaked for years often leaves soft or rotten boards underneath, and they need replacing before a new pan is screwed down. A new toilet with a smaller footprint can also leave an untiled outline where the old one stood.',
        },
        {
          title: 'Where the water supply comes in',
          body: 'Older cisterns are usually fed from the side. Many new ones take the supply from underneath or from behind, so the pipe and isolating valve have to be moved to suit. It is a small change, but worth knowing about when choosing a model.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'Can a toilet go under the stairs or in a cupboard?',
        a: 'Often, yes, and in a London terrace the space under the stairs is a popular spot for a cloakroom WC. What decides it is whether a waste can reach the soil pipe or drain with enough fall, whether there is headroom to use it comfortably, and ventilation — a WC without a window needs an extractor fan. Where a gravity waste is not possible, a macerator is the fallback, with its own trade-offs.',
      },
      {
        q: 'Can you fit a shower toilet with a built-in bidet wash?',
        a: 'Yes, but check the room before buying one. Most shower toilets need a fused electrical supply close to the pan, fitted by an electrician, as well as a water feed and the usual waste. Some are wall-hung and need a frame, and the seat unit adds depth, which matters in a narrow cloakroom. Send us the model and a photo of the space and we will say whether it will work.',
      },
    ],
  },

  'general-plumbing': {
    price: {
      intro:
        'There is no single price for general plumbing, because the jobs range from a washer to a new run of pipework. What changes the figure is how long the job really takes once the engineer is looking at it, and what parts it needs.',
      factors: [
        {
          title: 'One job, or a list',
          body: 'A single small job carries the whole cost of a visit on its own. If there are three or four niggles around the house — a dripping tap, a running cistern, a stiff valve — putting them on one visit makes much better use of it.',
        },
        {
          title: 'Standard parts or specific ones',
          body: 'Washers, isolation valves and standard fittings are quick to source. A cartridge for a designer mixer, a replacement valve for an unusual radiator, or a part for an older appliance connection may need ordering. Photos sent beforehand help us bring the right one.',
        },
        {
          title: 'Getting at the pipework',
          body: 'A radiator valve on show is a quick change. Pipework boxed in behind kitchen units, a washing machine wedged into a narrow galley kitchen, or a radiator with furniture built around it takes longer to reach and to put back.',
        },
        {
          title: 'Your first call-out',
          body: 'New customers get £25 off the first call-out with Ninja Plumbers. It cannot be combined with any other offer. Whatever the job, you are told the price for the work and agree it before the engineer picks up a tool.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'Can you move a radiator to a different wall?',
        a: 'Usually. The system is drained down, new pipework is run to the new position and the old tails are capped or removed. On a suspended timber floor the pipes can run under the boards; on a solid floor they may have to run along the skirting or be chased in. It is also worth checking the new spot will not be blocked by furniture, which cuts the heat a radiator gives out.',
      },
      {
        q: 'Can you plumb in a washing machine or dishwasher I have just bought?',
        a: 'Yes. If there is already a supply valve and a waste connection where the machine is going, it is a short job. If the appliance is going somewhere new, a supply and a waste have to be run to it, and the waste has to be arranged so dirty water cannot siphon back into the machine. Check the hose lengths before you buy — they are shorter on some models than people expect.',
      },
    ],
  },

  'commercial-plumbing': {
    price: {
      intro:
        'Commercial work is priced on the job and the conditions around it. The same repair can cost more overnight, around a kitchen that reopens for breakfast, than on an ordinary weekday, and it helps to know why.',
      factors: [
        {
          title: 'When the work can happen',
          body: 'Early mornings, evenings, overnight and weekend slots keep your business trading, but they can cost more than working through a normal weekday. Where part of the job can be done during the day without disrupting anyone, we can look at splitting it to keep the price down.',
        },
        {
          title: 'Building access and sign-in',
          body: 'Managed buildings often mean signing in with security, booking a loading bay or goods lift, waiting for a keyholder, or working under a permit. None of it is difficult, but it all takes time on site, and that time is part of the price.',
        },
        {
          title: 'Paperwork before and after',
          body: 'Some sites need risk assessments and method statements before an engineer can start, and a written report, photos or sign-off sheets afterwards for the managing agent or landlord. Tell us what is required at the start, so it is priced in rather than added later.',
        },
        {
          title: 'Commercial fittings and repeat work',
          body: 'Sensor taps, urinal flush controls, boiling water units and heavy-duty commercial fittings cost more than domestic equivalents. On the other hand, replacing the same fitting across several washrooms or floors in one programme is usually cheaper per item than piecemeal callouts.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'Can you keep some of the washrooms open while you work?',
        a: 'Usually, if the pipework allows it. The question is how the building’s water is split up: a modern fit-out often has isolation valves for each washroom or floor, while an older building may have one valve that shuts off everything. We check what can be isolated before the job is planned, so you know in advance which facilities will be out of use and for how long.',
      },
      {
        q: 'Our site has children or vulnerable residents. Who will you send?',
        a: 'Ninja Plumbers engineers are directly employed rather than subcontracted, and they are DBS-checked, so the person who arrives works for us, not for a third party. If you have your own rules — signing in at reception, wearing a visitor badge, being accompanied in certain areas, or working only outside school or care hours — tell us when booking and the engineer will follow them.',
      },
    ],
  },

  'gas-safety-certificate': {
    price: {
      intro:
        'A gas safety certificate is one of the more predictable jobs we price. What moves the figure is how much gas equipment the property has, how easy it is to inspect, and whether we can get in first time.',
      factors: [
        {
          title: 'How many appliances',
          body: 'A flat with a combi boiler and nothing else is the quickest check. A house with a boiler, a gas hob, a gas oven and a gas fire has more to test, and each appliance is checked and recorded separately on the certificate.',
        },
        {
          title: 'The type of appliance',
          body: 'Room-sealed boilers draw air from outside and are fairly quick to test. Open-flued appliances, such as older gas fires and back boilers that rely on a chimney, need flue flow and spillage tests and a ventilation check, which take longer.',
        },
        {
          title: 'Flues hidden in ceilings',
          body: 'Where a boiler flue runs out of sight through a ceiling void or boxing, it needs inspection hatches so the engineer can see its joints along the length. If there are none, the flue cannot be fully checked until hatches are fitted, which is extra work.',
        },
        {
          title: 'Getting in on the first attempt',
          body: 'Most checks happen in tenanted homes, so access depends on the tenant being in or keys being available. A wasted trip because nobody answered the door means a second visit. Confirming the appointment with the tenant a day or so beforehand saves that.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'Does the check cover a gas cooker my tenant owns?',
        a: 'The landlord’s annual check covers the gas appliances and flues you provide for the tenant. A cooker the tenant brought with them is their responsibility, not yours, although the pipework feeding it is still part of the installation. If the engineer sees something obviously unsafe with a tenant’s appliance, it will be pointed out and dealt with under the same safety rules as anything else.',
      },
      {
        q: 'Can I renew early without losing time on the current certificate?',
        a: 'Yes. If the check is done in the last two months before the current certificate runs out, the new one runs for a full year from the old expiry date rather than from the day of the visit, so renewing a few weeks early loses you no time. Keep both records, because the earlier one shows where that date came from.',
      },
    ],
  },

  'cctv-drain-survey': {
    price: {
      intro:
        'A drain survey is priced on how much drain there is to inspect and how easily the camera can get into it, and on what the survey is for, since a buyer, an insurer and a homeowner with a recurring blockage need different things.',
      factors: [
        {
          title: 'How many runs',
          body: 'A single run from one manhole to the boundary is a short survey. A whole property, front and back, with branches from the kitchen, bathrooms and rainwater gullies, takes longer to film, and longer to write up.',
        },
        {
          title: 'Where the camera goes in',
          body: 'An accessible manhole is the easiest way in. A cover that is buried, sealed or seized, or a drain that can only be reached through a toilet with the pan lifted off, adds work before the camera can go down.',
        },
        {
          title: 'Whether the pipe needs clearing first',
          body: 'The camera cannot see through standing water, fat or debris. If the drain is blocked or heavily fouled, it has to be jetted clean before a useful survey is possible, and that clearing is added to the job.',
        },
        {
          title: 'What the report is for',
          body: 'A homeowner chasing a recurring blockage may only need to know what and where. A buyer’s solicitor or an insurer usually wants every defect located and measured, the drain’s path traced and marked on the ground, and a fuller written report.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'I am buying a house. How do I get access for a survey?',
        a: 'Ask the estate agent to arrange it with the seller, the same way your building surveyor gets in. We need to lift manhole covers front and back, and usually run taps and flush toilets inside to watch the flow, so the visit needs someone there to open up. Book it early in the conveyancing, so any findings can be raised before exchange rather than after.',
      },
      {
        q: 'Can the survey show whether a drain is mine or shared?',
        a: 'It helps a great deal. The camera shows where each pipe runs and where other properties’ drains join it, and a locator on the surface marks the line and depth. Whether a shared section is yours, a neighbour’s or the water company’s also depends on when it was built and where it connects to the public sewer, but the footage gives you the evidence to have that conversation.',
      },
    ],
  },

  'drain-repairs': {
    price: {
      intro:
        'Every drain repair we quote starts with camera footage, because the survey is what sets the price. Once the damage has been found and measured, the cost comes down to a few practical questions about the pipe and the ground above it.',
      factors: [
        {
          title: 'How deep the pipe is',
          body: 'A garden drain near the surface can be dug out by hand in a small area. A deep section, often near where the drain leaves the property to join the sewer, needs a wider, supported excavation and more spoil taken away.',
        },
        {
          title: 'A patch, a full liner, or a dig',
          body: 'A single cracked joint can often be fixed with a short patch liner. Damage spread along the run needs a full-length liner, with any side branches reopened afterwards. A collapsed section rules lining out and means excavation, which is the bigger job.',
        },
        {
          title: 'What is on top of it',
          body: 'Digging through a lawn or flower bed is quicker and cheaper to put back than cutting through a concrete drive, block paving or a laid patio. A drain under an extension or a kitchen floor is a different job again.',
        },
        {
          title: 'The old pipe material',
          body: 'Most older London drains are clay, sometimes cast iron under the house, and some post-war runs are pitch fibre, which deforms with age. Joining new plastic pipe to any of these needs the right adaptors, and pitch fibre often limits which repair methods will work.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'Will my home insurance cover a drain repair?',
        a: 'It might. Many buildings policies include accidental damage to underground drains and pipes, but some exclude gradual wear, root damage or problems linked to ground movement, and others cap the amount. Read the section on underground services, or ring the insurer before booking the repair. They will almost always want to see survey footage and a report describing the damage and its likely cause.',
      },
      {
        q: 'Can we still use the toilets and sinks during the repair?',
        a: 'For part of it, no. While a liner is going in and curing, or while an excavated section is cut out and replaced, nothing upstream of that point can drain. We plan the work so that period is as short as possible and tell you beforehand which fixtures are affected. In a terrace where the drain is shared, next door may be affected too, so it is worth letting them know.',
      },
    ],
  },

  'wet-rooms-and-walk-in-showers': {
    price: {
      intro:
        'Most of what you pay for in a wet room ends up out of sight once the tiles are down. How much depends on the floor you are starting from, how much of the room gets waterproofed and the finish you choose.',
      factors: [
        {
          title: 'Timber floor or concrete',
          body: 'On a timber floor the joists may need strengthening and a new rigid deck laid before a former can be set in for the fall. On a concrete slab, a channel is cut for the drain and the fall is built up in screed.',
        },
        {
          title: 'Whole room or shower area',
          body: 'A full wet room is waterproofed across the entire floor and up the walls. A walk-in shower on a low-profile tray only needs the shower zone tanked, with a glass panel, which is less material and fewer days on site.',
        },
        {
          title: 'Getting the waste away',
          body: 'The drain has to reach the soil stack with enough fall. If the waste can run between the joists in the same direction, that is straightforward. Running it across joists, or a long way to the stack, can mean lifting more floor or boxing in the ceiling below.',
        },
        {
          title: 'The tiles and fittings you choose',
          body: 'Small mosaic tiles follow a fall easily. Large-format floor tiles need the floor formed in precise planes, with careful cuts towards the drain. Grab rails, a fold-down seat or a heavy glass screen also need solid fixings built into the walls beforehand.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'Will the rest of the bathroom floor get wet?',
        a: 'Some of it, yes. In a full wet room the whole floor is waterproofed and falls to the drain, so splashes are expected and dry out quickly. A fixed glass screen keeps most of the spray in the shower area. What matters in a small room is where the toilet, basin and towel rail sit in relation to the shower head, so settle the layout with that in mind.',
      },
      {
        q: 'Is a wet room hard to keep clean?',
        a: 'Easier than a tray and enclosure in some ways, since there are no tray edges or enclosure seals to go mouldy. The things that need attention are the grout lines on the floor, which pick up limescale quickly in London’s hard water, and the drain’s hair trap, which should be lifted out and cleared every week or two. A squeegee after each shower does more than any cleaning product.',
      },
    ],
  },

  'blocked-toilet': {
    price: {
      intro:
        'Clearing an ordinary blocked toilet is usually a short job with hand tools, and it is priced that way. The cost goes up when the blockage turns out to be somewhere other than the toilet, or when something solid is stuck.',
      factors: [
        {
          title: 'How far down the blockage is',
          body: 'In the pan or the trap, a plunger or closet auger usually shifts it. In the branch pipe behind the wall, the shared soil stack or the drain outside, it takes longer and heavier equipment, worked from a different access point.',
        },
        {
          title: 'Something solid in the trap',
          body: 'A child’s toy, a hairbrush, a mobile phone or the plastic cage from a rim block will not break down or flush through. If it cannot be hooked back out, the pan has to come off the floor, which means a new pan connector and seal when it goes back.',
        },
        {
          title: 'Macerators and wall-hung pans',
          body: 'A macerator has to be opened up and its pump and blades cleared, often of wipes and scale. A wall-hung pan is bolted to a frame behind the wall, so anything stuck deep inside one takes more work to reach than on a floor-standing toilet.',
        },
        {
          title: 'Only toilet, or a spare',
          body: 'If it is the only toilet in the home, it is worth an urgent visit; if there is a second one, it can usually wait for an ordinary booking at a normal rate. Either way, the engineer agrees the price with you before starting.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'Will boiling water or bleach clear it?',
        a: 'Neither is a good idea. Boiling water can crack a ceramic pan, and it can soften the joints on plastic waste pipes. Bleach cleans, but it does nothing to break up paper, wipes or anything solid. If you want to try something first, bail the pan down, add a good squirt of washing-up liquid and some hand-hot water, and leave it for a while — that sometimes loosens a soft paper blockage.',
      },
      {
        q: 'My flat’s toilet is blocked. Should I tell the managing agent?',
        a: 'If only your toilet is affected, the blockage is almost certainly in your own pipework and it is yours, or your landlord’s, to deal with. If neighbours are reporting slow drains too, or water is coming up in a flat below, the problem is probably in the shared soil stack, which is normally the freeholder’s responsibility — so tell the managing agent straight away. Your lease sets out exactly who pays for what.',
      },
    ],
  },

  'shower-installation': {
    price: {
      intro:
        'Most of the cost of fitting a shower depends on the water system behind it, and on how much wall, floor and pipework has to be opened up to put it in, rather than on the shower you choose.',
      factors: [
        {
          title: 'Bar valve or concealed valve',
          body: 'An exposed bar valve sits on the surface and connects to pipework already in the wall, which keeps disruption low. A concealed valve is set into the wall itself, so the wall has to be chased out, the valve fitted and the tiles made good.',
        },
        {
          title: 'Matching what is already there',
          body: 'If the new valve fits the same pipe positions as the old one, the swap is quick. If the centres differ, the pipes behind the tiles have to be moved, and old tiles are often impossible to match, so keep any spares from the original tiling to hand.',
        },
        {
          title: 'Whether a pump is needed',
          body: 'On a gravity-fed system, a shower that needs more pressure than the tank gives means fitting a pump. That adds the pump itself, a place for it, suitable pipework from the cylinder and an electrical supply from an electrician.',
        },
        {
          title: 'Tray, enclosure and waste',
          body: 'Changing only the valve and head leaves the tray alone. A new tray or enclosure brings its own waste connection. Where the trap cannot sit below floor level, the tray goes up on a riser kit, and a larger enclosure needs solid walls or extra fixings.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'Does a new shower need an extractor fan?',
        a: 'A bathroom with a shower really needs mechanical extraction, and building regulations require it in a newly created bathroom. If there is already a working fan, it can usually stay. If there is none, or it is too weak to clear the steam, a new one needs an electrician and a way out through an outside wall or the roof, which is worth planning alongside the shower rather than afterwards.',
      },
      {
        q: 'How soon can we use the shower after it is fitted?',
        a: 'It depends on what was involved. A valve swap on an existing tiled wall can often be used once it has been tested, with a little care around any fresh silicone. Where new tiles, grout or a new tray have gone in, the grout and sealant need time to cure before they get soaked, and the product instructions set how long. Using it too soon is how a new seal fails early.',
      },
    ],
  },

  'shower-repair': {
    price: {
      intro:
        'Many shower faults are a single part, fitted in a single visit, and priced accordingly. The cost rises when the part is hard to get, or when the fault sits behind tiles that have to come off to reach it.',
      factors: [
        {
          title: 'Which part has failed',
          body: 'A shower head or hose is a simple swap. A thermostatic cartridge or a diverter costs more but is still a straightforward repair. A cracked valve body, or a leak on the pipe joints behind the valve, is a much bigger job.',
        },
        {
          title: 'Whether parts are still made',
          body: 'Branded valves from the main manufacturers usually have parts available for years. Unbranded valves bought online, or discontinued models, may have no cartridge that fits at all, and then a new valve is the only sensible repair.',
        },
        {
          title: 'Getting to the valve',
          body: 'On a surface-mounted valve, everything is reachable from the front. On a concealed valve, the cartridge usually comes out through the faceplate, but a leaking connection behind it means removing tiles, and replacing tiles to match is part of the cost.',
        },
        {
          title: 'Resealing or replacing the tray',
          body: 'A failed silicone seal is a small job, though the area has to be properly dry before it is redone. A cracked or sagging tray has to be replaced, which is bigger. You get the price for whichever it is before anything is taken apart.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'Why does my shower keep dripping after I turn it off?',
        a: 'A few drips for a minute or so is normal, as the water left in the head and hose drains out. A drip that carries on for hours, or a steady trickle, means the valve is not shutting off fully — usually a worn cartridge or washer, and often made worse by limescale. It is worth fixing, because a constant drip wastes water and leaves scale stains on the tray.',
      },
      {
        q: 'Is it safe to keep using the shower until it is repaired?',
        a: 'It depends on the fault. A weak flow or a slow drip is an inconvenience, not a danger. A thermostatic shower that has started running unexpectedly hot is different: stop using it, especially if children or older people live with you, because a failing cartridge can let the temperature spike. If in doubt, describe what it is doing when you call and we will tell you honestly whether it can wait.',
      },
    ],
  },

  'bath-installation': {
    price: {
      intro:
        'Fitting a bath is priced mostly on the work surrounding it rather than on the bath itself. A few points decide whether a replacement stays a modest job or grows into something closer to a partial refit.',
      factors: [
        {
          title: 'The size of the new bath',
          body: 'A bath with the same length and width as the old one drops into the same space. A shorter or narrower one leaves strips of bare wall or floor to tile, board or panel, and a longer one may not fit between the walls at all.',
        },
        {
          title: 'Where the taps and waste go',
          body: 'Deck-mounted taps connect to the existing supplies below the bath. Wall-mounted taps need pipework chased into the wall and the wall retiled. A bath with its waste at the opposite end, or in the middle, needs the waste pipe moved to suit.',
        },
        {
          title: 'What the bath is made of',
          body: 'Acrylic baths are light but need a firm cradle and proper support to stop them flexing. Cast-iron and stone-resin baths are heavy to carry in and position, and on an old timber floor the load may need spreading first.',
        },
        {
          title: 'Panels, tiling and sealing',
          body: 'A new bath panel, a row of tiles along the new edge and a proper silicone seal finish the job. Where the old tiles crack coming off, or cannot be matched, more of the wall may need retiling than you expected.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'Acrylic, steel or cast iron — does it make a difference?',
        a: 'Yes, in how the bath feels and how it is fitted. Acrylic is light and warm to the touch, but it flexes if it is not well supported, which is what breaks seals. Enamelled steel is rigid and hard-wearing, colder at first and can chip if something heavy is dropped. Cast iron holds heat well and lasts for decades, but its weight means checking the floor and planning how to get it upstairs.',
      },
      {
        q: 'Why do you fill the bath before sealing it?',
        a: 'A bath settles slightly under the weight of water and whoever is in it. If the silicone goes on while it is empty, the first time the bath is filled it drops a fraction and pulls the seal away from the tiles. Filling it first, sealing while it is full and leaving it to cure keeps the seal where it will actually sit in use, and it also tests the waste and overflow for leaks.',
      },
    ],
  },

  'tap-repair-and-replacement': {
    price: {
      intro:
        'Tap work is usually one of our quicker visits. The price depends on whether a small part inside the tap will do, and on what kind of tap is going in if it will not.',
      factors: [
        {
          title: 'A part, or the whole tap',
          body: 'A washer, an O-ring or a cartridge is a small repair. A new tap costs more in parts and takes longer to fit, but where the body is worn or corroded it is the repair that actually lasts.',
        },
        {
          title: 'The type of tap going in',
          body: 'A like-for-like mixer is straightforward. Swapping two pillar taps for a single mixer leaves a spare hole to blank off, and pull-out spray taps, filter taps and boiling-water taps need more room and more connections underneath.',
        },
        {
          title: 'Kitchen, basin or bath',
          body: 'Kitchen and basin taps are usually reachable from the cupboard or under the basin. Bath tap connections often sit behind a bath panel that has to come off, and wall-mounted taps are plumbed inside the wall, which makes both slower to change.',
        },
        {
          title: 'Several taps at once',
          body: 'If two or three taps are dripping, fixing them on the same visit costs less than separate trips. New customers also get £25 off their first call-out with us, which cannot be used alongside any other offer.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'Is a dripping tap worth fixing straight away?',
        a: 'Yes, for a few reasons. A steady drip wastes a surprising amount of water, which shows on a metered bill, and a dripping hot tap is also wasting the energy used to heat it. In London’s hard water a drip leaves scale stains in the basin or sink that are hard to shift. And a drip left for months can wear the tap’s seat, turning a small washer job into a new tap.',
      },
      {
        q: 'Can you fit a boiling water tap?',
        a: 'Yes, provided the kitchen can take one. Most need a tank or boiler unit in the cupboard under the sink, a plug socket inside that cupboard, fitted by an electrician if there is not one already, and a cold supply to connect to. Some include a filter cartridge that needs changing periodically, which matters more in hard-water London. Check the space under your sink and the tap-hole size before buying.',
      },
    ],
  },

  'lead-pipe-and-water-main-replacement': {
    price: {
      intro:
        'Replacing a supply pipe is priced on the ground it passes through as much as on the pipe. The length of the run, what sits on top of it and where it enters the house all shape the quote.',
      factors: [
        {
          title: 'The distance from boundary to house',
          body: 'A short front garden in a Victorian terrace is a short run. A long front garden, a house set well back from the road, or a supply that comes in at the rear means more pipe and, if moling, a longer bore.',
        },
        {
          title: 'Basements, vaults and front steps',
          body: 'Many London houses have a basement lightwell or a vault under the pavement at the front, and the supply often enters beneath the front steps. Getting a new pipe in through those spaces takes more care than crossing a plain front garden.',
        },
        {
          title: 'What has to be lifted and relaid',
          body: 'Lawn and soil go back easily. An original Victorian tiled path, York stone flags or a resin-bound drive has to be lifted carefully and relaid or matched, and that reinstatement can be a real share of the cost.',
        },
        {
          title: 'Inside the house',
          body: 'The new pipe has to reach a new stopcock indoors. If the old lead continues inside — under a suspended floor, through a cellar, behind kitchen units — replacing that section too adds time, but leaving it defeats much of the point.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'Is there any help with the cost from the water company?',
        a: 'Sometimes. Water companies have run schemes that replace their own section of lead pipe at the same time as a customer replaces theirs, and some have offered help with the private side too. Schemes come and go, so check with Thames Water, or whichever company supplies you, before booking. Coordinating both halves together saves digging the ground up twice.',
      },
      {
        q: 'Will we be without water while it is done?',
        a: 'Only for part of the job. The new pipe is laid first while the old one keeps supplying the house, then the supply is switched across. How long you are off depends on the connections at each end and on whether the water company needs to shut off or attend at the boundary. You will know when the changeover is planned, so you can fill a few jugs beforehand.',
      },
    ],
  },

  'pipe-repair': {
    price: {
      intro:
        'Once a damaged pipe can be seen, the repair itself is often quick. The price depends more on getting to it, on the material it is made of, and on whether the pipe around it is worth keeping.',
      factors: [
        {
          title: 'Getting to the pipe',
          body: 'Pipes under suspended floorboards or in a loft are relatively easy to reach. Pipes buried in a solid floor, chased into a wall, or running behind tiles or fitted units have to be opened up first, and making good afterwards is often a separate trade.',
        },
        {
          title: 'One split, or a tired run',
          body: 'A single frost split in sound copper is a short section cut out and joined. Pipe that is thin and pitted along its length needs a longer section replaced, because a patch on corroded pipe rarely holds for long.',
        },
        {
          title: 'What the pipe is made of',
          body: 'Copper and modern plastic are simple to repair. Old lead, galvanised iron or a mixture of materials from decades of alterations need the right adaptors and more care, and sometimes the honest answer is to replace back to a sound joint.',
        },
        {
          title: 'Draining down and refilling',
          body: 'A cold mains pipe is isolated at the stopcock and repaired. A heating pipe usually means draining the system, refilling, adding inhibitor and bleeding every radiator; a hot pipe on a tank-fed system may mean draining the cylinder. Those steps add time to an otherwise small repair.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'I have wrapped the pipe in repair tape. Is that enough?',
        a: 'As a stopgap, it has done its job. Self-amalgamating tape, a slip-on clamp or an epoxy putty will hold back a small leak for a while, but none of them is a permanent repair, especially on a hot pipe or a joint that moves. Keep an eye on it, put a bowl or towel underneath, and have the damaged section cut out and properly joined before the patch lets go.',
      },
      {
        q: 'Can plastic pipe be used to repair a copper pipe?',
        a: 'In many places, yes. Modern plastic pipe with proper inserts and fittings is reliable and quick to join to copper. It is not the right choice everywhere, though: many boiler manufacturers want copper for the first stretch of pipe from the boiler, and in a room where the pipework is on show, copper often looks better. We will use whichever suits the location rather than whichever is quickest.',
      },
    ],
  },

  'low-water-pressure': {
    price: {
      intro:
        'Low pressure is priced in two stages: finding the cause, then fixing it. Finding it is a fairly set piece of testing. The fix can be a quick valve adjustment or a much bigger job, and you see that price before deciding.',
      factors: [
        {
          title: 'How far the testing has to go',
          body: 'A weak kitchen tap may be solved at the tap itself. When every outlet in the house is weak, the engineer has to measure pressure and flow at the stopcock and at points around the house, and that fuller investigation takes longer.',
        },
        {
          title: 'The stopcock in the pavement',
          body: 'Replacing an indoor stopcock or pressure-reducing valve means turning the supply off outside first. If the outside stopcock is buried, seized or shared with next door, freeing it or getting Thames Water to attend can add time and sometimes a second visit.',
        },
        {
          title: 'Scale inside old pipework',
          body: 'Scale in a shower head or aerator is cleared in minutes. Scale that has narrowed the inside of old copper or galvanised pipe cannot be cleaned out in place, so the worst lengths have to be replaced, which is a bigger job.',
        },
        {
          title: 'Whether boosting is the answer',
          body: 'When nothing is actually faulty and the water simply arrives with too little push, a pump on a tank-fed system, or a storage accumulator where the mains is weak, may be the fix. Both mean equipment, somewhere to house it and usually a power supply.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'Why is my pressure worse in the mornings and evenings?',
        a: 'Usually because everyone else is using water at the same time. At peak hours demand on the street’s mains rises and pressure at your tap can drop. In a converted house where several flats share one supply pipe, the effect is sharper, because a shower running upstairs takes from the same pipe as yours. Testing at a busy time and a quiet time shows whether that is what is happening.',
      },
      {
        q: 'Will switching to a combi boiler improve my pressure?',
        a: 'Only if the mains coming into the house is strong. A combi runs everything straight off the mains, so on a good supply it can feel like a big improvement over an old tank-fed system. On a weak or shared supply it can make things worse, because the hot water now competes with every cold tap. Having the incoming flow measured before choosing a combi avoids an expensive disappointment.',
      },
    ],
  },

  'central-heating-installation': {
    price: {
      intro:
        'A full heating system is one of the larger jobs we quote, and it is priced room by room rather than read off a list. The four things below move the figure more than the choice of boiler.',
      factors: [
        {
          title: 'How many rooms and radiators',
          body: 'Every radiator brings its own valves, its own pipe run and the time to fit and balance it. A two-bedroom flat and a four-storey terrace are very different quotes, and towel rails and hallway radiators add up too.',
        },
        {
          title: 'The floors the pipes have to cross',
          body: 'Suspended timber floors let pipes run between the joists with boards lifted and relaid. Solid concrete floors, common in flats and later extensions, mean pipes dropped from above, run along skirtings or chased in, each with its own cost.',
        },
        {
          title: 'Combi, or boiler and cylinder',
          body: 'A combi needs no cylinder or tanks. A system boiler with an unvented cylinder needs a cupboard big enough to hold the cylinder and a discharge pipe taken safely to outside, and the cylinder then needs its own yearly check.',
        },
        {
          title: 'Floors, carpets and decorating afterwards',
          body: 'Lifting boards is part of the work, but relaying fitted carpets, refinishing floors and redecorating around new pipes and radiators may not be. Agree up front who does what, because it can change the total more than people expect.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'Can we stay in the house while the heating goes in?',
        a: 'Most people do. The work usually moves from room to room, so there is disruption, dust and floorboards up in parts of the house rather than everywhere at once. There will be a period without heating and hot water around the changeover to the new boiler, and we tell you in advance when that is. Doing the job outside winter makes the whole thing much easier to live with.',
      },
      {
        q: 'Does a new heating system need building regulations sign-off?',
        a: 'Yes, the boiler part does. Installing a gas boiler is notifiable work, and as Gas Safe registered engineers we notify it through the Gas Safe Register, which then sends a Building Regulations compliance certificate to the property. Keep it with your house documents, because a buyer’s solicitor will ask for it. In a leasehold flat, check separately whether the lease needs the freeholder’s consent for the work.',
      },
    ],
  },

  'surface-water-drainage': {
    price: {
      intro:
        'Surface water jobs range from clearing a single gully to building a soakaway in the garden. The price is set by how much water there is, what ground it has to go into and what has to be dug through to get it there.',
      factors: [
        {
          title: 'The area being drained',
          body: 'A small patio sheds far less water than a whole roof plus a paved drive. The bigger the area feeding into the drainage, the longer the channel runs and the larger the soakaway has to be to cope with a heavy storm.',
        },
        {
          title: 'What the ground is like',
          body: 'Much of London sits on clay, which takes water slowly. A soakaway in clay has to be larger than one in gravel, or may not work at all, so the ground is tested first. That testing is part of the job.',
        },
        {
          title: 'Cutting into what is already there',
          body: 'Setting a channel drain into new paving is simple. Cutting one into an existing concrete drive, a resin surface or laid stone, then making good neatly on both sides, takes more time and more materials than people tend to expect.',
        },
        {
          title: 'Where the water can go',
          body: 'Connecting to an existing surface water drain nearby is often simplest. A long run to reach one, or a low spot such as a basement lightwell that sits below any drain and needs a sump and pump, adds considerably to the job.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'Do I need permission to pave over my front garden?',
        a: 'In England, paving more than five square metres of a front garden with a surface water cannot soak through needs planning permission, unless the rainwater is directed to a lawn, border or soakaway within the property. Permeable paving, or conventional paving that drains to a planted area, avoids the need. It is worth settling before the paving goes down, because adding drainage afterwards costs more.',
      },
      {
        q: 'How close to the house can a soakaway go?',
        a: 'Building regulations guidance puts a soakaway at least five metres from any building, including next door’s, so the water it releases does not end up softening the ground under foundations. In a typical London back garden that distance is not always available, and then the answer is usually to pipe the water to an existing drain instead of forcing a soakaway into a space too small for it.',
      },
    ],
  },

  'gutter-repair': {
    price: {
      intro:
        'Gutter work is usually quick once someone is up there safely, so the price has as much to do with reaching the gutter as with the repair itself. Height, material and the type of gutter all play a part.',
      factors: [
        {
          title: 'Height and what is below',
          body: 'A single-storey extension can often be reached from a ladder. The front of a three-storey terrace, or a gutter above a basement lightwell or a conservatory roof, usually needs a tower or scaffold, and that access can cost more than the repair.',
        },
        {
          title: 'Plastic or cast iron',
          body: 'Plastic gutters clip together, and replacement parts are inexpensive and quick to fit. Cast-iron gutters are heavy, their bolts are often rusted solid, and replacement sections have to match the existing profile, so each repair takes longer.',
        },
        {
          title: 'Clearing, or refixing',
          body: 'Clearing out leaves and moss is the smaller job. A sagging run needs new brackets and the fall reset, and if the fascia board behind is rotten, the brackets have nothing solid to fix to until it is dealt with.',
        },
        {
          title: 'Valley and parapet gutters',
          body: 'Many London terraces have a valley gutter hidden between two roof slopes, draining out through the back parapet. Reaching it means going over the roof, and if its lead or felt lining has failed, that is roofing work, and we will tell you so.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'Should I tell my neighbours before the gutter is repaired?',
        a: 'It is worth a word. On a terrace the gutter often runs straight on from one house to the next, and the joint at the boundary is a common leak, so fixing only your half may not stop the overflow. Access can also involve their side: a ladder in their front area, or a tower on shared ground. Sorting it out together can mean one visit instead of two.',
      },
      {
        q: 'Are gutter guards worth fitting?',
        a: 'They help in some places and not others. Under heavy leaf fall, a guard keeps the bulk of the leaves out and stretches the time between clearances. But fine debris — moss from the roof, seed from plane trees, silt — still gets through or builds up on top, and a guarded gutter is fiddlier to clear when it does need it. They reduce maintenance rather than remove it.',
      },
    ],
  },

  // ---- New service pages written in parallel: price section only. Their
  // ---- own entries already carry FAQs.

  'water-through-ceiling': {
    price: {
      intro:
        'When water comes through a ceiling, the cost depends first on where it is coming from and how quickly it can be stopped. Tracing and repairing the source is plumbing; repairing the ceiling itself is usually separate work.',
      factors: [
        {
          title: 'Whose pipework it is',
          body: 'A leak from your own bathroom or heating pipes is fixed in your home. If it is coming from the flat above, a shared stack or the roof, the cost may fall to a neighbour, the freeholder or a roofer rather than to you.',
        },
        {
          title: 'Getting into the room above',
          body: 'The source is on the floor above, though not always directly over the stain, so the engineer needs access to that room. If it is a neighbour’s flat and nobody is home, time goes on getting keys or permission from the managing agent first.',
        },
        {
          title: 'A bulging ceiling',
          body: 'Plasterboard holding a pocket of water can give way without warning. Draining it in a controlled way through a small hole, and cutting an inspection opening to see the pipe above, is often needed before the repair itself and adds to the job.',
        },
        {
          title: 'Tonight, or tomorrow',
          body: 'If the water is still coming and cannot be stopped at the stopcock, it is an emergency. Once it is isolated and the ceiling is safe, tracing and repairing it can often wait for a normal daytime booking, which costs less.',
        },
      ],
    },
    extraFaqs: [],
  },

  'toilet-repair': {
    price: {
      intro:
        'Most toilet repairs come down to one worn part inside the cistern, and the price reflects that. What changes it is which part has failed, how easily it can be reached and whether a matching part is to hand.',
      factors: [
        {
          title: 'Fill valve, flush valve or seal',
          body: 'A fill valve that will not stop refilling, or a flush valve letting water trickle into the pan, is usually a quick swap. A leaking seal between cistern and pan on a close-coupled toilet means taking the cistern off to renew it.',
        },
        {
          title: 'Concealed cisterns',
          body: 'If the cistern is hidden behind a panel or wall, the repair is done through the flush-plate opening or an access panel. Where there is no proper access, or it has been tiled over, getting to the parts takes longer.',
        },
        {
          title: 'Standard or brand-specific parts',
          body: 'Universal valves fit many cisterns and are easy to carry. Some toilets, especially older designer models and some concealed units, need a part made by the same manufacturer, which may have to be ordered. A photo of the inside of the cistern helps.',
        },
        {
          title: 'The state of the old fittings',
          body: 'On an older toilet, the cistern bolts may be rusted solid, the isolating valve may not turn, and the supply pipe may be corroded. Freeing or replacing those before the new part goes in adds time to an otherwise small job.',
        },
      ],
    },
    extraFaqs: [],
  },

  'leak-repair': {
    price: {
      intro:
        'A leak repair is priced on what is leaking and what is in the way. A dripping joint under a sink and a pipe buried beneath a tiled floor can be the same fault but very different jobs.',
      factors: [
        {
          title: 'Whether the source is already known',
          body: 'If the leak can be seen, the engineer goes straight to repairing it. If there is only a stain, a wet floor or a rising meter, the source has to be found first, and that tracing is a separate piece of work.',
        },
        {
          title: 'A fitting, or the pipe itself',
          body: 'Many leaks are at a fitting: a washing machine hose, a radiator valve, a compression joint, a toilet connector. Those are small parts. A split or corroded pipe needs a section cut out and replaced, which takes longer.',
        },
        {
          title: 'Supply, heating or waste',
          body: 'A supply pipe leaks all the time and can be isolated at the stopcock. A heating leak may mean draining and refilling the system. A waste leak only shows when something drains, and is often a loose trap or a failed seal.',
        },
        {
          title: 'The damage it has already done',
          body: 'Fixing the leak stops more water getting out. Drying out a soaked floor, replacing swollen kitchen plinths or laminate, and repairing a stained ceiling are separate from the plumbing repair, and may be covered by your home insurance.',
        },
      ],
    },
    extraFaqs: [],
  },
};

export default serviceExtras;
