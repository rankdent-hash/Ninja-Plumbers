// Neighbourhood pages. Ordered by UK monthly search volume for
// "plumber [area]" from Semrush — people search by the place they would tell
// a taxi driver, not by local authority. "Merton" gets 70 a month while
// "Wimbledon", inside it, gets 480.
//
// IMPORTANT: `character` describes typical housing stock and the plumbing
// problems that follow from it. It is written from general knowledge of London
// building types and should be checked by someone who works these areas before
// being treated as authoritative.

export type Area = {
  slug: string;
  name: string;
  borough: string;
  postcodes: string[];
  volume: number;         // "plumber [name]" monthly searches
  kd: number;             // keyword difficulty
  metaTitle: string;
  metaDescription: string;
  intro: string;
  character: string;      // what the housing stock means for plumbing
  common: string[];       // problems that come up locally
  nearby: string[];       // slugs, for internal linking
  note?: string;          // anything specific worth saying
  // Outside Greater London (src/data/areas-guildford.ts). London pages leave
  // both unset; templates use them to say "Surrey" rather than "London".
  region?: 'london' | 'outside';
  county?: string;
};

export const areas: Area[] = [
  {
    slug: 'fulham',
    name: 'Fulham',
    borough: 'Hammersmith and Fulham',
    postcodes: ['SW6', 'SW10', 'W6', 'W14'],
    volume: 720,
    kd: 18,
    metaTitle: 'Plumber in Fulham | SW6 Emergency Callouts | Ninja Plumbers',
    metaDescription:
      'Fulham plumber working from the High Street in SW6. Boilers repaired, drains cleared, bathrooms fitted and 24/7 emergency callouts. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers works out of Fulham High Street, so most mornings our vans set off from SW6. Boilers, drains and new bathrooms are all part of the job here, in Fulham and the roads around it, and because we are local the trip is always a short one.',
    character:
      'Most of Fulham is closely packed Victorian and Edwardian terracing, and plenty of those houses now hold flats. Two faults turn up over and over. One is original pipework that each new owner has lengthened or re-routed. The other is the shared soil stack, where a blockage caused in one flat surfaces in another further down the building. Many homes have also gained a basement or lower-ground conversion, so you are as likely to need work on pumped waste or a sump as on a simple gravity drain.',
    common: [
      'Soil stacks shared between converted flats',
      'Old lead and iron pipes still hidden behind newer work',
      'Basement sump pumps that fail without warning and then flood',
      'Combis crammed into kitchen cupboards in converted flats',
    ],
    nearby: ['clapham', 'wandsworth', 'balham'],
    note: 'Our base is here in Fulham, on the High Street.',
  },
  {
    slug: 'croydon',
    name: 'Croydon',
    borough: 'Croydon',
    postcodes: ['CR0', 'CR2', 'SE25', 'SW16'],
    volume: 880,
    kd: 16,
    metaTitle: 'Plumber in Croydon | CR0 & CR2 Callouts | Ninja Plumbers',
    metaDescription:
      'Croydon and CR postcode plumbing from Ninja Plumbers: boilers repaired and installed, drains unblocked, bathrooms and emergency callouts. Call 020 3576 5825.',
    intro:
      'Most days at least one Ninja Plumbers engineer is somewhere in Croydon or the CR postcodes, working on a house, a flat or a commercial unit.',
    character:
      'For a single borough, Croydon has a remarkably broad mix of buildings. There are interwar semis and 1930s estates, towers in the town centre, and a great deal of newer flat conversion above shops. The suburban houses usually need heating and drainage work, with long outside runs and old cast iron drains. Nearer the centre the job changes. Flats above shops often share communal systems, and a single fault can leave several homes without hot water at the same time.',
    common: [
      'Tired central heating in 1930s semis',
      'Blocked gullies and outside drains on long suburban runs',
      'A single failed valve in a town centre block cutting hot water to several flats',
      'Replacing boilers in homes still running their first system',
    ],
    nearby: ['brixton', 'wimbledon', 'bromley'],
  },
  {
    slug: 'bromley',
    name: 'Bromley',
    borough: 'Bromley',
    postcodes: ['BR1', 'BR2', 'SE20', 'SE26'],
    volume: 880,
    kd: 19,
    metaTitle: 'Plumber in Bromley | Boiler & Drain Repair | Ninja Plumbers',
    metaDescription:
      'Plumbing across Bromley and the BR postcodes from Ninja Plumbers. We repair boilers, unblock drains, fit bathrooms and handle emergencies. Call 020 3576 5825.',
    intro:
      'Whether it is a pipe that bursts at nine at night or a bathroom planned out over a week, Ninja Plumbers takes on jobs all over Bromley and the BR postcodes.',
    character:
      'Much of Bromley is suburban family housing: semis and detached homes from between the wars and just after, often with gardens and outbuildings. So the work here leans towards heating, hot water cylinders and outside drains, rather than the flat-conversion faults you see more of in inner London. Quite a few of the bigger houses still have a vented system fed from a tank in the loft. That is a different job from repairing a modern combi, and the diagnosis has to start from a different place too.',
    common: [
      'Vented systems with a loft tank and hot water cylinder',
      'Blocked gullies, garden drains and other outside runs',
      'Outside taps that crack behind the wall after a hard frost',
      'Whole-house heating upgrades and new radiators',
    ],
    nearby: ['croydon', 'wimbledon'],
  },
  {
    slug: 'wandsworth',
    name: 'Wandsworth',
    borough: 'Wandsworth',
    postcodes: ['SW18', 'SW11', 'SW17', 'SW12'],
    volume: 720,
    kd: 11,
    metaTitle: 'Plumber in Wandsworth | SW18 Leak Detection | Ninja Plumbers',
    metaDescription:
      'Wandsworth and the SW postcodes sit a short drive from our Fulham base. Ninja Plumbers offers leak detection, boiler repair and bathrooms. Call 020 3576 5825.',
    intro:
      'Our Fulham office is only a short drive from Wandsworth and the nearby SW postcodes, so we usually get there quickly, whether you need a leak traced or a new bathroom fitted.',
    character:
      'Victorian terraces make up most of Wandsworth, and a large number have been extended at the rear and split into flats. Rear and side-return extensions are everywhere here. They often leave pipework running through new walls that are hard to get into later. Nearer the river the job is different again. The new-build blocks there have communal heating and pressurised systems, and tracing a fault begins in the plant room, not under your sink.',
    common: [
      'Pipes hidden inside rear and side-return extensions',
      'Tracing leaks in extended Victorian terraces',
      'Converted flats that all drain into one soil stack',
      'Pressurised systems in new-build blocks by the river',
    ],
    nearby: ['balham', 'clapham', 'fulham'],
  },
  {
    slug: 'harrow',
    name: 'Harrow',
    borough: 'Harrow',
    postcodes: ['HA1', 'HA2', 'HA3', 'HA5'],
    volume: 720,
    kd: 20,
    metaTitle: 'Plumber in Harrow | HA1 to HA5 Heating | Ninja Plumbers',
    metaDescription:
      'Harrow and HA postcode plumbing from Ninja Plumbers. We install and repair boilers, clear drains, fit bathrooms and handle emergencies. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers looks after plumbing and heating all over Harrow, from HA1 right out to HA5, whether the job is in a family home, a flat or a commercial unit.',
    character:
      'Harrow is textbook Metroland. Most of it is 1930s semi-detached housing that went up as the Metropolitan line extended, with later infill in between. Plenty of homes have already had two or three heating systems. Some of the first galvanised or iron pipes are still in place, and hot water often comes from a cylinder in the airing cupboard rather than a combi. Loft conversions are common as well, and the new bathroom often sits on a floor the first system was never meant to reach.',
    common: [
      'Heating systems now on their second or third replacement',
      'Pressure problems in bathrooms added with a loft conversion',
      'Immersion heaters and hot water cylinders',
      'Old galvanised pipes still in place behind later work',
    ],
    nearby: ['ealing'],
  },
  {
    slug: 'balham',
    name: 'Balham',
    borough: 'Wandsworth',
    postcodes: ['SW12', 'SW17'],
    volume: 590,
    kd: 11,
    metaTitle: 'Plumber in Balham | SW12 Drains & Leaks | Ninja Plumbers',
    metaDescription:
      'Balham plumbers for SW12 from Ninja Plumbers. Drains unblocked, leaks traced, boilers repaired, bathrooms installed and emergency callouts. Call 020 3576 5825.',
    intro:
      'Houses, converted flats and the shops on the high road across Balham and SW12 all see Ninja Plumbers regularly. Most jobs begin with the same call: something is no longer draining.',
    character:
      'Most of Balham is late-Victorian terracing, and a lot of it has been divided into an upper and a lower flat. The call we get most often comes straight from that division. Two households share a single soil stack, and when it blocks, the flat lower down sees the problem, whoever caused it. Many homes have loft or rear extensions as well, which add bathrooms and pipe runs to a system that was never designed for them.',
    common: [
      'Soil stacks shared by upper and lower flats',
      'Blockages that surface in the ground-floor flat',
      'Extra bathrooms in loft and rear extensions',
      'Ageing combis asked to feed more outlets than they were built for',
    ],
    nearby: ['clapham', 'wandsworth', 'brixton'],
  },
  {
    slug: 'islington',
    name: 'Islington',
    borough: 'Islington',
    postcodes: ['N1', 'N5', 'N7', 'EC1'],
    volume: 590,
    kd: 20,
    metaTitle: 'Plumber in Islington | N1 Period Property | Ninja Plumbers',
    metaDescription:
      'Plumbing in Islington and N1 from Ninja Plumbers, listed and period homes included. Leak detection, boiler repair and bathrooms. Call 020 3576 5825.',
    intro:
      'Across Islington and the N1 postcodes, Ninja Plumbers handles plumbing and heating in period homes and conversions right through to commercial premises.',
    character:
      'Some of the oldest housing we work on is in Islington. Georgian and early Victorian terraces are common, and many sit in conservation areas or are listed. That age puts real limits on how a job can be done, not only on the building. New pipework often has few possible routes. Changes to the outside may be restricted. Floorboards should only come up once there is a plan to put them back properly. Near the City fringe the picture changes, and most of the work is in recent commercial and mixed-use conversions.',
    common: [
      'Listed and period homes where pipe routes are restricted',
      'Tracing leaks where the floors cannot just be lifted',
      'Conservation area limits on work to the outside',
      'Commercial and mixed-use premises near the City fringe',
    ],
    nearby: ['hackney'],
  },
  {
    slug: 'hackney',
    name: 'Hackney',
    borough: 'Hackney',
    postcodes: ['E5', 'E8', 'E9', 'N16'],
    volume: 590,
    kd: 21,
    metaTitle: 'Plumber in Hackney | E8, E9 & N16 Callouts | Ninja Plumbers',
    metaDescription:
      'Hackney plumbing across E8, E9 and N16 from Ninja Plumbers. We repair boilers, clear drains, fit bathrooms and attend emergency callouts. Call 020 3576 5825.',
    intro:
      'Most weeks we have work somewhere in Hackney, whether in flats, converted terraces, warehouse conversions or commercial kitchens across E8, E9 and N16.',
    character:
      'Hackney mixes building types more than almost any other borough. Victorian terraces, big post-war estates and converted warehouses can all be found within a few streets, and each needs a different approach. Estates and blocks usually have communal systems, so one fault may hit many flats, not only the one that called it in. Warehouse conversions have a quirk of their own. Their waste runs are long and horizontal and the services are exposed, which makes them easy to inspect, but the falls are often shallower than they ought to be.',
    common: [
      'Shared communal systems in estates and blocks',
      'Long waste runs with shallow falls in warehouse conversions',
      'Victorian terraces divided into several flats',
      'Plumbing for restaurants and commercial kitchens',
    ],
    nearby: ['islington'],
  },
  {
    slug: 'ealing',
    name: 'Ealing',
    borough: 'Ealing',
    postcodes: ['W5', 'W13', 'W3', 'UB1'],
    volume: 590,
    kd: 11,
    metaTitle: 'Plumber in Ealing | W5 Boiler Repair | Ninja Plumbers',
    metaDescription:
      'Plumbing across Ealing and W5 from Ninja Plumbers. Boilers repaired and installed, drains cleared, bathrooms fitted and emergencies handled. Call 020 3576 5825.',
    intro:
      'We are in Ealing and the nearby W postcodes on a regular basis, and the work takes in commercial premises as well as family houses and flats.',
    character:
      'Housing in Ealing ranges from big Edwardian and interwar family homes to large purpose-built blocks of flats dating from the 1930s on. In the larger houses, pressure and balancing faults usually start with long pipe runs and the extra bathrooms added over time. The purpose-built blocks are another matter. They often rely on shared cold water storage and risers, so a fault there seldom stays in one flat.',
    common: [
      'Balancing pressure between several bathrooms',
      'Purpose-built blocks with shared cold water storage and risers',
      'Heating in large Edwardian houses',
      'En-suites and bathrooms added to older layouts',
    ],
    nearby: ['harrow'],
  },
  {
    slug: 'clapham',
    name: 'Clapham',
    borough: 'Lambeth',
    postcodes: ['SW4', 'SW11', 'SW9'],
    volume: 480,
    kd: 10,
    metaTitle: 'Plumber in Clapham | SW4 Landlord Repairs | Ninja Plumbers',
    metaDescription:
      'Clapham plumbers for SW4: leak detection, drain blockages, boiler repair and landlord callouts from Ninja Plumbers. Fast response. Call 020 3576 5825.',
    intro:
      'A lot of our Clapham and SW4 work is in houses, flat shares and converted terraces, and rented property makes up a big part of it.',
    character:
      'Clapham is mostly Victorian terracing, and an unusually large share is split into flats or let as shared houses. Most jobs here come back to heavy use. Kitchens and bathrooms serve more people than the system was built for, showers run one after another all evening, and waste pipes block more often because of it. Much of our work in Clapham is landlord repairs and getting flats ready between one tenancy and the next.',
    common: [
      'Systems used far harder than they were designed for',
      'Blocked waste pipes in shared kitchens and bathrooms',
      'Repairs and tenancy turnarounds for landlords',
      'Shower pressure when several outlets run at once',
    ],
    nearby: ['balham', 'brixton', 'wandsworth'],
  },
  {
    slug: 'wimbledon',
    name: 'Wimbledon',
    borough: 'Merton',
    postcodes: ['SW19', 'SW20'],
    volume: 480,
    kd: 22,
    metaTitle: 'Plumber in Wimbledon | SW19 & SW20 Bathrooms | Ninja Plumbers',
    metaDescription:
      'Plumbing in Wimbledon, SW19 and SW20 from Ninja Plumbers. We install bathrooms, repair boilers, sort out drainage and handle emergencies. Call 020 3576 5825.',
    intro:
      'Week in, week out, Ninja Plumbers is at work in family houses, period homes and flats right across Wimbledon, SW19 and SW20.',
    character:
      'Towards the Village and the Common, Wimbledon has larger detached and semi-detached family homes. Nearer the town centre and the station, Victorian terraces and flats are packed more tightly. Many of the bigger houses still run vented systems with cylinders and several bathrooms, so pressure and balancing come up again and again. Period homes near the Common are often under conservation rules as well, which means outside work usually has to be agreed with the council first.',
    common: [
      'Vented systems and cylinders in the bigger houses',
      'Getting pressure even across several bathrooms',
      'Conservation rules on period homes',
      'Fitting bathrooms and en-suites in family houses',
    ],
    nearby: ['balham', 'croydon'],
  },
  {
    slug: 'brixton',
    name: 'Brixton',
    borough: 'Lambeth',
    postcodes: ['SW2', 'SW9'],
    volume: 480,
    kd: 10,
    metaTitle: 'Plumber in Brixton | SW2 & SW9 Commercial | Ninja Plumbers',
    metaDescription:
      'Brixton plumbers for SW2 and SW9. Ninja Plumbers handles commercial kitchens, blocked drains, boiler repair and callouts. Call 020 3576 5825.',
    intro:
      'In Brixton, SW2 and SW9 we work in flats, converted terraces and a great many food businesses, so a week of jobs here rarely repeats itself.',
    character:
      'Brixton combines Victorian terraces divided into flats, post-war estates, and a packed cluster of restaurants, bars and food outlets around the market and along the main roads. Those food businesses create their own kind of work. Waste is heavy with grease, some drains block almost to a timetable, and many jobs have to wait until trading stops or cannot be done at all. Further from the market, most calls are about estate blocks and stacks shared by terrace flats.',
    common: [
      'Grease blockages and waste from commercial kitchens',
      'Work fitted around trading hours, out of hours',
      'Shared communal systems in estates and blocks',
      'Converted terraces draining into one shared stack',
    ],
    nearby: ['clapham', 'balham', 'croydon'],
  },
  // ---- Tier A expansion. Every entry below clears 300 monthly UK searches for
  // "plumber [name]" (Semrush). Housing-stock copy is written from general
  // knowledge of London building types and carries the same verification
  // caveat as the entries above. ----
  {
    slug: 'tooting',
    name: 'Tooting',
    borough: 'Wandsworth',
    postcodes: ['SW17', 'SW16', 'SW12'],
    volume: 480,
    kd: 9,
    metaTitle: 'Plumber in Tooting | SW17 Bec & Broadway | Ninja Plumbers',
    metaDescription:
      'Plumbing across Tooting, SW17, Tooting Bec and the Broadway from Ninja Plumbers. Drains cleared, boilers repaired, bathrooms and callouts. Call 020 3576 5825.',
    intro:
      'We work in houses, converted flats and shared homes throughout Tooting, SW17 and the side streets that run off the Broadway.',
    character:
      'Victorian and Edwardian terraces fill Tooting street by street, and an unusually large number are now shared houses or flats. For plumbing, that matters because extra bathrooms get put where the drains were not built to cope. A second or third bathroom may hang off a stack meant for one family, or a back addition may carry waste it was never designed for. Towards the Broadway, restaurants and takeaways sit tightly packed above and below flats where people live.',
    common: [
      'A stack sized for one household now taking extra bathrooms',
      'Shared houses where each tenant describes the same fault differently',
      'Waste pipes in back additions laid at the wrong fall',
      'Drainage for food businesses on and near the Broadway',
    ],
    nearby: ['balham', 'wandsworth', 'streatham'],
  },
  {
    slug: 'lewisham',
    name: 'Lewisham',
    borough: 'Lewisham',
    postcodes: ['SE13', 'SE4', 'SE6'],
    volume: 480,
    kd: 7,
    metaTitle: 'Plumber in Lewisham | SE13 & Hither Green | Ninja Plumbers',
    metaDescription:
      'Plumbing in Lewisham, SE13, Hither Green and Ladywell from Ninja Plumbers. Boilers repaired, drains unblocked, bathrooms and callouts. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers regularly works in houses, flats and blocks across Lewisham and SE13, and further out towards Hither Green and Ladywell.',
    character:
      'Lewisham packs three very different building types onto one map. There are Victorian terraces towards Ladywell and Hither Green, big post-war estates, and towers in the town centre. The terraces bring the familiar back-addition and old-pipework jobs. In the estates and towers, the fault is seldom in the flat that called, so reaching the riser matters more than reaching your kitchen sink.',
    common: [
      'Shared heating and communal risers in town centre blocks',
      'Former council flats still on their original pipework',
      'Victorian back additions near Ladywell and Hither Green',
      'Faults that start in one flat and show up in another',
    ],
    nearby: ['greenwich', 'peckham', 'bromley'],
  },
  {
    slug: 'streatham',
    name: 'Streatham',
    borough: 'Lambeth',
    postcodes: ['SW16', 'SW2'],
    volume: 390,
    kd: 13,
    metaTitle: 'Plumber in Streatham | SW16 Common & Norbury | Ninja Plumbers',
    metaDescription:
      'Plumbers for Streatham, SW16, Streatham Common and Norbury from Ninja Plumbers. We repair boilers, clear drains and fit bathrooms. Call 020 3576 5825.',
    intro:
      'From a tap that drips to a whole new heating system, Ninja Plumbers takes on work across Streatham and SW16, down as far as Streatham Vale and Norbury.',
    character:
      'Streatham has many big late-Victorian and Edwardian houses that were turned into flats decades ago, plus long rows of 1930s mansion blocks on the High Road. Both have the same root problem. A system built for one household now serves four or five, and its pipework has been added to over the years instead of replaced. The mansion blocks often have shared cold water tanks and risers that no one has properly checked for a long time.',
    common: [
      'Big houses split into flats but still on the original pipes',
      '1930s mansion blocks with shared tanks and risers',
      'Heating serving more flats than it was sized for',
      'Long outside drain runs on the larger plots',
    ],
    nearby: ['brixton', 'balham', 'tooting'],
  },
  {
    slug: 'muswell-hill',
    name: 'Muswell Hill',
    borough: 'Haringey',
    postcodes: ['N10', 'N8', 'N2'],
    volume: 390,
    kd: 8,
    metaTitle: 'Plumber in Muswell Hill | N10 Boiler Repair | Ninja Plumbers',
    metaDescription:
      'Plumbing in Muswell Hill and N10 from Ninja Plumbers. We repair boilers, unblock drains, install bathrooms and attend callouts. Call 020 3576 5825.',
    intro:
      'Across N10, much of our work is in the big Edwardian family houses Muswell Hill is known for, and those jobs usually run past a single afternoon.',
    character:
      'Few parts of London are as consistently Edwardian as Muswell Hill, and most of its large family houses are still single homes, not flats. That shapes what we do here. The houses are big, the pipe runs are long, and the original systems have been stretched into loft conversions and rear extensions over the years. Heating often struggles to reach the top floor because no one resized it as the house grew. Loft bathrooms in particular are a frequent reason we are called out about pressure.',
    common: [
      'Loft bathrooms added with no resizing of the system',
      'Weak flow and pressure at the top of tall houses',
      'Long pipe runs through big family homes',
      'Original heating stretched to reach rear extensions',
    ],
    nearby: ['islington', 'hackney', 'walthamstow'],
  },
  {
    slug: 'hammersmith',
    name: 'Hammersmith',
    borough: 'Hammersmith and Fulham',
    postcodes: ['W6', 'W12', 'W14'],
    volume: 390,
    kd: 8,
    metaTitle: 'Plumber in Hammersmith | W6 Riverside Blocks | Ninja Plumbers',
    metaDescription:
      'Hammersmith and W6 plumbers. Ninja Plumbers repairs boilers, clears blocked drains, fits bathrooms and does commercial work. Fast callout. Call 020 3576 5825.',
    intro:
      'Hammersmith is only a short hop for Ninja Plumbers, and in W6 we spend as much time in flats, riverside blocks and the offices by the Broadway as in houses.',
    character:
      'Hammersmith stretches from Victorian terraces in the back streets behind the Broadway to mansion blocks by the river and plenty of post-war and modern offices. The mansion blocks set the area apart. Stacks and risers are shared, so a blockage low down may be reported by a flat several floors up, and access is usually arranged with a managing agent, not the tenant. On the commercial side, kitchen and washroom plumbing is normally booked around office hours rather than at short notice.',
    common: [
      'Mansion blocks by the river with shared stacks and risers',
      'Access agreed with managing agents instead of occupiers',
      'Kitchen and washroom plumbing in offices near the Broadway',
      'Converted Victorian terraces in the back streets off the main roads',
    ],
    nearby: ['fulham', 'kensington', 'chelsea'],
  },
  {
    slug: 'greenwich',
    name: 'Greenwich',
    borough: 'Greenwich',
    postcodes: ['SE10', 'SE3', 'SE7'],
    volume: 390,
    kd: 12,
    metaTitle: 'Plumber in Greenwich | SE10 & the Peninsula | Ninja Plumbers',
    metaDescription:
      'Plumbing across Greenwich, SE10, the town centre and the Peninsula from Ninja Plumbers. Boilers repaired, drains cleared, bathrooms. Call 020 3576 5825.',
    intro:
      'We work across the whole of Greenwich and SE10, from the Georgian streets near the town centre to the towers out on the Peninsula.',
    character:
      'In practice, Greenwich holds two quite separate kinds of plumbing work under one postcode. Around the town centre, houses date from the Georgian and early Victorian periods, many sit in a conservation area and some are listed. That limits where pipes and flues can run and often rules out the obvious fix on the outside of the building. The Peninsula is the reverse. Its recent towers run on communal heat networks, each flat has a heat interface unit instead of a boiler, and a "no hot water" call may well be a network fault rather than anything in the flat.',
    common: [
      'Listed and conservation-area limits on flues and outside pipework',
      'Heat interface units instead of boilers in Peninsula blocks',
      'Georgian and early Victorian homes on heavily altered pipework',
      'Heat network faults that look like a problem in a single flat',
    ],
    nearby: ['lewisham', 'peckham', 'bromley'],
  },
  {
    slug: 'battersea',
    name: 'Battersea',
    borough: 'Wandsworth',
    postcodes: ['SW11', 'SW8'],
    volume: 390,
    kd: 8,
    metaTitle: 'Plumber in Battersea | SW11 & Nine Elms | Ninja Plumbers',
    metaDescription:
      'Plumbers for Battersea, SW11 and Nine Elms. Ninja Plumbers repairs boilers, clears blocked drains and installs bathrooms. Emergency callout. Call 020 3576 5825.',
    intro:
      'In Battersea, SW11 and Nine Elms, our work takes in both the Victorian terraces and the newer towers along the river.',
    character:
      'Battersea divides in two. Off the park are streets of Victorian terraces, a lot of them now flats. Along the river are the Nine Elms and Power Station developments, and those new blocks deserve their own mention. Most get heating and hot water from a shared heat network, with a heat interface unit in every flat where you would expect a boiler. That makes a "no hot water" call a genuinely different diagnosis, and the visit usually has to be booked through building management instead of arranged on the day.',
    common: [
      'Riverside blocks at Nine Elms and elsewhere running heat interface units',
      'Heat network faults that sit outside the flat itself',
      'Converted Victorian terraces off the park sharing one stack',
      'Access through building management in the newer blocks',
    ],
    nearby: ['clapham', 'wandsworth', 'fulham'],
  },
  {
    slug: 'walthamstow',
    name: 'Walthamstow',
    borough: 'Waltham Forest',
    postcodes: ['E17', 'E10'],
    volume: 320,
    kd: 10,
    metaTitle: 'Plumber in Walthamstow | E17 Maisonettes | Ninja Plumbers',
    metaDescription:
      'Plumbing in Walthamstow, E17 from Ninja Plumbers, Warner maisonettes included. Boilers repaired, drains unblocked and bathrooms installed. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers regularly works in terraces, Warner maisonettes and converted flats throughout Walthamstow and E17.',
    character:
      'Most of Walthamstow is Victorian and Edwardian terracing, and one local house type is worth understanding: the Warner properties. They were built as pairs of maisonettes, each with a separate front door. From the street they look like one house, but they are two homes sharing drains and, in many cases, a roof. That means the person who reports a leak or blockage is often not the one responsible for it. Outside the Warner stock, much of the area has had a lot of extension work over the past ten years or so.',
    common: [
      'Pairs of Warner maisonettes with drainage shared by two households',
      'Rear extensions whose waste joins existing runs',
      'Terraces split into upper and lower flats',
      'Old pipework behind newer kitchens and bathrooms',
    ],
    nearby: ['hackney', 'islington', 'muswell-hill'],
  },
  {
    slug: 'putney',
    name: 'Putney',
    borough: 'Wandsworth',
    postcodes: ['SW15', 'SW18'],
    volume: 320,
    kd: 8,
    metaTitle: 'Plumber in Putney | SW15 & Roehampton | Ninja Plumbers',
    metaDescription:
      'Plumbers for Putney, SW15 and Roehampton from Ninja Plumbers. We repair boilers, unblock drains and install bathrooms. Emergency callout. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers works in terraces, riverside blocks and estate homes throughout Putney and SW15, and out as far as Roehampton.',
    character:
      'Putney stretches from mansion blocks and Victorian terraces by the bridge to the post-war estates at Roehampton, and each end needs different work. By the bridge, shared stacks come with access that has to be arranged ahead of time. At Roehampton it is more often estate homes on communal heating and their original pipes. Nearer the river, basements and lower-ground rooms usually need pumped waste, not a simple gravity drain.',
    common: [
      'Mansion blocks by the river with shared stacks',
      'Pumped waste for lower-ground rooms close to the river',
      'Estate homes at Roehampton on communal heating',
      'Victorian terraces near the bridge split into flats',
    ],
    nearby: ['wandsworth', 'wimbledon', 'fulham'],
  },
  {
    slug: 'peckham',
    name: 'Peckham',
    borough: 'Southwark',
    postcodes: ['SE15', 'SE22', 'SE5'],
    volume: 320,
    kd: 9,
    metaTitle: 'Plumber in Peckham | SE15 Rye Lane & Nunhead | Ninja Plumbers',
    metaDescription:
      'Plumbing in Peckham, SE15 and Nunhead from Ninja Plumbers. Drains unblocked, boilers repaired and commercial plumbing on Rye Lane. Call 020 3576 5825.',
    intro:
      'Across Peckham, SE15 and Nunhead, Ninja Plumbers works in converted flats, estate homes and the food businesses on Rye Lane.',
    character:
      'Peckham combines Victorian terraces, most of them now flats, with large ex-local-authority estates and a busy run of food and drink businesses on Rye Lane. Each of the three brings its own jobs. On the estates, it is work on communal risers. In the conversions, several flats share drainage built for one household. On the commercial strip, grease causes blockages, and work often has to wait until the kitchen closes for the night.',
    common: [
      'Former council blocks with communal risers',
      'Converted terraces with several flats on a single stack',
      'Grease blockages and kitchen waste from Rye Lane businesses',
      'Work outside trading hours for food businesses',
    ],
    nearby: ['brixton', 'lewisham', 'dulwich'],
  },
  {
    slug: 'kensington',
    name: 'Kensington',
    borough: 'Kensington and Chelsea',
    postcodes: ['W8', 'W11', 'SW7'],
    volume: 320,
    kd: 9,
    metaTitle: 'Plumber in Kensington | W8 & Holland Park | Ninja Plumbers',
    metaDescription:
      'Plumbers for Kensington, W8 and Holland Park. Ninja Plumbers repairs boilers, clears blocked drains and installs bathrooms in period homes. Call 020 3576 5825.',
    intro:
      'In Kensington, W8 and Holland Park, Ninja Plumbers works in stucco terraces, mansion blocks and homes on the garden squares.',
    character:
      'Kensington is made up of stucco terraces, garden squares and mansion blocks, and much of it is listed or in a conservation area. That shapes most jobs here. Flue positions, outside pipework and any change to a soil stack have to be thought through before work begins, not after. Deep basement conversions are also common. They depend on pumped drainage, which needs regular maintenance and cannot just be installed and left alone.',
    common: [
      'Listed building and conservation area limits on flues and pipes',
      'Basement conversions that depend on pumped drainage',
      'Shared stacks and risers in mansion blocks',
      'Period homes with past alterations nobody recorded',
    ],
    nearby: ['chelsea', 'fulham', 'hammersmith'],
  },
  {
    slug: 'dulwich',
    name: 'Dulwich',
    borough: 'Southwark',
    postcodes: ['SE21', 'SE22', 'SE24'],
    volume: 320,
    kd: 10,
    metaTitle: 'Plumber in Dulwich | SE21 & West Dulwich | Ninja Plumbers',
    metaDescription:
      'Plumbing across Dulwich, SE21, Dulwich Village and West Dulwich from Ninja Plumbers. Boilers repaired, drains cleared, bathrooms. Call 020 3576 5825.',
    intro:
      'Large period family homes are the typical property here, and most of our work in Dulwich and SE21, as far as East and West Dulwich, is in houses like these.',
    character:
      'Dulwich is largely big Georgian, Victorian and interwar family houses on generous plots, and most are still single homes. Several practical points follow. Pipe runs are long, the heating systems are large and costly to run if they are not set up well, and drains travel a good way before meeting the sewer, so a blockage is often further from the house than you might think. Much of the area also comes under the Dulwich Estate scheme of management, and that may restrict what you can change on the outside.',
    common: [
      'Long outside drain runs with blockages far from the house',
      'Big heating systems in family homes with one household',
      'Limits on outside changes under the Dulwich Estate scheme of management',
      'Loft and rear extensions tacked onto the original system',
    ],
    nearby: ['peckham', 'brixton', 'lewisham'],
  },
  {
    slug: 'chelsea',
    name: 'Chelsea',
    borough: 'Kensington and Chelsea',
    postcodes: ['SW3', 'SW10', 'SW1'],
    volume: 320,
    kd: 6,
    metaTitle: 'Plumber in Chelsea | SW3 Townhouses & Mews | Ninja Plumbers',
    metaDescription:
      'Plumbers for Chelsea, SW3, Brompton and Knightsbridge. Ninja Plumbers repairs boilers, clears drains and fits bathrooms in period homes. Call 020 3576 5825.',
    intro:
      'From mews cottages to grand townhouses, Ninja Plumbers works across Chelsea, SW3 and the streets leading to Brompton and Knightsbridge.',
    character:
      'Chelsea is made up of Georgian and Victorian townhouses, mews homes and mansion blocks, and a large share is listed. Townhouses are usually tall and narrow, so the boiler or cylinder sits far below the top-floor bathroom, and weak pressure and flow are a regular complaint, not a rare one. Many basements have been dug out as well, which brings pumped drainage that needs servicing on a schedule. Mews homes have their own quirk. There are few ways to route pipes outside, and anything too big to fit down the mews is awkward to get in.',
    common: [
      'Weak pressure and flow in tall, narrow townhouses',
      'Dug-out basements that depend on pumped drainage',
      'Listed building limits on flues and outside pipework',
      'Tight access and few routing options in mews homes',
    ],
    nearby: ['kensington', 'fulham', 'battersea'],
  },
  {
    slug: 'acton',
    name: 'Acton',
    borough: 'Ealing',
    postcodes: ['W3', 'NW10', 'W4'],
    volume: 210,
    kd: 13,
    metaTitle: 'Plumber in Acton | W3 North & South Acton | Ninja Plumbers',
    metaDescription:
      'Acton and W3 plumbing, covering North, South and East Acton. Ninja Plumbers repairs and services boilers, clears drains and fits bathrooms. Call 020 3576 5825.',
    intro:
      'Acton has changed quickly, and Ninja Plumbers works across all of it, whether that means a Victorian terrace in South Acton or one of the new blocks rising around North Acton.',
    character:
      'Few parts of west London have changed as quickly as Acton, and its plumbing shows the divide. In the older streets you find Victorian and Edwardian terraces, many converted into flats or let as shared houses, with drains built for far fewer people than now live there. Around North Acton and Park Royal it is a completely different picture. Recent high-density blocks run on communal systems, a fault is usually a matter for the building rather than one flat, and access is through management, not residents.',
    common: [
      'Conversions and shared houses on drains sized for one household',
      'Newer North Acton blocks with communal systems and managed access',
      'Boilers moved during kitchen extensions, with pipework lengthened instead of renewed',
      'Ageing systems in terraced houses that have picked up extra bathrooms',
    ],
    nearby: ['ealing', 'hammersmith', 'fulham'],
  },
  // ---- Tier B expansion. 140+ monthly searches for "plumber [name]".
  // Enfield and Barnet are not in the supplied workbook, which covers only the
  // eight inner London postal areas — both were found by measuring outward. ----
  {
    slug: 'enfield',
    name: 'Enfield',
    borough: 'Enfield',
    postcodes: ['EN1', 'EN2', 'EN3', 'N9'],
    volume: 480,
    kd: 22,
    metaTitle: 'Plumber in Enfield | EN1 to EN3 Callouts | Ninja Plumbers',
    metaDescription:
      'Plumbers for Enfield, EN1 to EN3, from Ninja Plumbers. We repair and service boilers, unblock drains and install bathrooms. Call 020 3576 5825.',
    intro:
      'Throughout Enfield and the EN postcodes, Ninja Plumbers works in suburban houses, flats and the estates that sit between them.',
    character:
      'Most of Enfield is suburban housing from between the wars and after, on generous plots, with older homes near Enfield Town and Forty Hill. On plots this size, a blocked drain is often several chambers from the house, not right under the kitchen window. Being this far out also means garages, outbuildings and lofts sit unheated all winter, which is where burst pipes usually begin when a real cold spell arrives.',
    common: [
      'Long outside drain runs with the blockage far from the house',
      'Burst pipes in cold garages and outbuildings after a freeze',
      'Tired heating in semis built between the wars and after',
      'Outside taps left on through winter that crack behind the wall',
    ],
    nearby: ['tottenham', 'barnet', 'walthamstow'],
  },
  {
    slug: 'barnet',
    name: 'Barnet',
    borough: 'Barnet',
    postcodes: ['EN5', 'EN4', 'N20'],
    volume: 480,
    kd: 31,
    metaTitle: 'Plumber in Barnet | EN5 & New Barnet | Ninja Plumbers',
    metaDescription:
      'Plumbing in Barnet, EN5, Whetstone and New Barnet from Ninja Plumbers. Boilers repaired and serviced, drains cleared, bathrooms. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers looks after plumbing and heating across Barnet and EN5, from Chipping Barnet south to Whetstone and New Barnet.',
    character:
      'Barnet reaches from the old centre of Chipping Barnet, where some buildings are truly old and many are listed or protected by a conservation area, to the interwar suburbs and post-war estates further out. The two halves need different thinking. With period homes, flues and outside pipework have to be planned before work begins. The bigger suburban houses more often have heating that was never resized, even after decades of extensions.',
    common: [
      'Listed and conservation-area limits near the old centre',
      'Suburban heating never resized after later extensions',
      'Long drain runs on bigger plots towards New Barnet',
      'Vented systems and older cylinders still working',
    ],
    nearby: ['finchley', 'enfield', 'muswell-hill'],
  },
  {
    slug: 'woolwich',
    name: 'Woolwich',
    borough: 'Greenwich',
    postcodes: ['SE18', 'SE28', 'SE2'],
    volume: 260,
    kd: 12,
    metaTitle: 'Plumber in Woolwich | SE18 Royal Arsenal | Ninja Plumbers',
    metaDescription:
      'Plumbers for Woolwich, SE18 and Royal Arsenal. Ninja Plumbers repairs boilers, clears blocked drains and installs bathrooms. Call 020 3576 5825.',
    intro:
      'In Woolwich and SE18 we work everywhere from the Victorian terraces to the new blocks by the river at the Arsenal.',
    character:
      'Woolwich has in effect been rebuilt around its old core. Victorian terraces and large post-war estates now stand next to a decade of new riverside building at Royal Arsenal, and each type behaves in its own way. The estates come with shared heating and communal risers. In the new blocks you find heat interface units, building management, and access you need to arrange ahead. The terraces bring the everyday work found across most of London: old pipes and back additions.',
    common: [
      'Shared heating and communal risers on the post-war estates',
      'Blocks by the river on heat networks, not individual boilers',
      'Access via concierge or building management in new developments',
      'Victorian terraces on heavily altered original pipes',
    ],
    nearby: ['greenwich', 'eltham', 'lewisham'],
  },
  {
    slug: 'forest-hill',
    name: 'Forest Hill',
    borough: 'Lewisham',
    postcodes: ['SE23', 'SE26', 'SE4'],
    volume: 260,
    kd: 7,
    metaTitle: 'Plumber in Forest Hill | SE23 Callouts | Ninja Plumbers',
    metaDescription:
      'Plumbing across Forest Hill, SE23 and Honor Oak from Ninja Plumbers. We repair boilers, unblock drains and install bathrooms. Call 020 3576 5825.',
    intro:
      'Across Forest Hill, SE23 and up the hill to Honor Oak, Ninja Plumbers works in divided period houses and smaller conversions.',
    character:
      'Forest Hill sits on a properly steep hill, and that affects the plumbing more than most people realise. Big Victorian and Edwardian houses climb the slope, many split into flats. The drop from a loft tank to a top-floor bathroom is often too small to give good pressure by itself, so pumps and pressurised systems are the norm here, not an extra. Gravity drains on sloping plots also behave differently from those on level ground, and the original falls were not always set correctly.',
    common: [
      'Weak gravity pressure upstairs in tall houses on the slope',
      'Pressurised systems and shower pumps fitted to make up for it',
      'Big houses split into flats on the original pipes',
      'Drains on sloping plots where the falls were improvised',
    ],
    nearby: ['sydenham', 'lewisham', 'dulwich'],
  },
  {
    slug: 'chiswick',
    name: 'Chiswick',
    borough: 'Hounslow',
    postcodes: ['W4', 'W3'],
    volume: 260,
    kd: 20,
    metaTitle: 'Plumber in Chiswick | W4 Bedford Park | Ninja Plumbers',
    metaDescription:
      'Plumbers for Chiswick, W4 and Bedford Park. Ninja Plumbers repairs and services boilers, clears blocked drains and installs bathrooms. Call 020 3576 5825.',
    intro:
      'Terraces, riverside homes and houses in the Bedford Park conservation area make up our work in Chiswick and W4.',
    character:
      'Chiswick is mainly late Victorian and Edwardian. A large part of it, Bedford Park above all, which was one of the first garden suburbs, is in a conservation area and has plenty of listed buildings. That limits where flues and outside pipes can go, something most of west London never has to deal with. Nearer the river, basements and lower-ground rooms need pumped drainage instead of gravity, and flood risk there is treated as a real concern, not a theoretical one.',
    common: [
      'Flue and outside pipe positions limited by listing and conservation rules',
      'Pumped drainage for lower-ground rooms by the river',
      'Old pipework behind newer kitchens and bathrooms',
      'Side-return extensions whose waste joins existing runs',
    ],
    nearby: ['acton', 'hammersmith', 'ealing'],
  },
  {
    slug: 'camberwell',
    name: 'Camberwell',
    borough: 'Southwark',
    postcodes: ['SE5', 'SE15', 'SE17'],
    volume: 260,
    kd: 6,
    metaTitle: 'Plumber in Camberwell | SE5 Grove & Green | Ninja Plumbers',
    metaDescription:
      'Plumbing in Camberwell and SE5 from Ninja Plumbers. We repair boilers, clear blocked drains and install bathrooms. Emergency callout. Call 020 3576 5825.',
    intro:
      'Throughout Camberwell and SE5 we are regularly at work in Georgian and Victorian houses, in converted flats and on the estates.',
    character:
      'Camberwell has an unusually wide range of buildings for one area. There are true Georgian terraces around Camberwell Grove, lots of Victorian houses now split into flats, and big post-war estates, all a short walk apart. Each type brings different work. The Georgian homes come with listed-building rules and pipes re-routed by owner after owner. The estates have communal systems. The conversions leave several households on drainage built for just one.',
    common: [
      'Listed Georgian homes with past alterations nobody recorded',
      'Estate blocks with shared supply and communal risers',
      'Converted terraces with several flats on a single stack',
      'Older systems in houses never fully brought up to date',
    ],
    nearby: ['peckham', 'brixton', 'dulwich'],
  },
  {
    slug: 'westminster',
    name: 'Westminster',
    borough: 'City of Westminster',
    postcodes: ['SW1', 'W1', 'WC2'],
    volume: 210,
    kd: 11,
    metaTitle: 'Plumber in Westminster | SW1 & W1 Commercial | Ninja Plumbers',
    metaDescription:
      'Plumbers for Westminster, SW1 and W1. Ninja Plumbers repairs boilers, clears drains and handles commercial plumbing. Out-of-hours callouts. Call 020 3576 5825.',
    intro:
      'Across Westminster, SW1 and W1 we work in mansion blocks, period conversions and commercial premises, usually by booked appointment rather than turning up at the door.',
    character:
      'Most of Westminster is made up of mansion blocks, converted period buildings and a dense mass of commercial property. Much of it is listed, and nearly all of it is managed rather than lived in by the owner. Access tends to be the first hurdle and the plumbing the second. Reaching a riser or plant room means dealing with a managing agent and a porter, and usually booking a slot. In commercial premises that are in use, work nearly always has to be done outside trading hours.',
    common: [
      'Risers in mansion blocks reached via managing agents and porters',
      'Listed and conservation rules across most buildings',
      'Commercial premises that need out-of-hours visits',
      'Leaks that appear several floors below their source',
    ],
    nearby: ['chelsea', 'kensington', 'islington'],
  },
  {
    slug: 'sydenham',
    name: 'Sydenham',
    borough: 'Lewisham',
    postcodes: ['SE26', 'SE23', 'SE20'],
    volume: 210,
    kd: 14,
    metaTitle: 'Plumber in Sydenham | SE26 Callouts | Ninja Plumbers',
    metaDescription:
      'Plumbing across Sydenham, SE26 and towards Forest Hill from Ninja Plumbers. Boilers repaired, drains unblocked and bathrooms installed. Call 020 3576 5825.',
    intro:
      'In Sydenham, SE26 and the streets leading to Forest Hill and Crystal Palace, Ninja Plumbers finds that sloping ground shapes much of the work.',
    character:
      'Sydenham is big Victorian houses on sloping land, many of them split into flats long ago. It is that mix that counts. A house built for one family now serves three or four, it stands on a slope, and the split has weakened both drainage and pressure. Top-floor flats often suffer pressure problems that no boiler work will cure, because the real cause is how tall the building is, not the heating.',
    common: [
      'Big houses split into flats on drains sized for one',
      'Pressure problems upstairs caused by height, not the boiler',
      'Drain falls on sloping plots that were improvised at conversion',
      'Shared stacks where one blockage hits several flats at once',
    ],
    nearby: ['forest-hill', 'crystal-palace', 'lewisham'],
  },
  {
    slug: 'notting-hill',
    name: 'Notting Hill',
    borough: 'Kensington and Chelsea',
    postcodes: ['W11', 'W10', 'W2'],
    volume: 210,
    kd: 1,
    metaTitle: 'Plumber in Notting Hill | W11 Callouts | Ninja Plumbers',
    metaDescription:
      'Plumbers for Notting Hill and W11. Ninja Plumbers repairs boilers, unblocks drains and installs bathrooms in period homes. Call 020 3576 5825.',
    intro:
      'Our work in Notting Hill and W11 covers converted flats, stucco terraces and homes on the garden squares.',
    character:
      'Stucco terraces and garden squares define Notting Hill. A large share of the housing is listed or sits in a conservation area, and a lot of it was divided into flats decades ago. Many homes have basement or lower-ground conversions, and these rely on pumped drainage that needs care rather than being left alone. As in the rest of the borough, what really limits any work on the outside of a building is what is allowed, not only what is technically possible.',
    common: [
      'Listed and conservation limits on flues and outside pipes',
      'Basement conversions that depend on pumped drainage',
      'Converted flats sharing the original stacks',
      'Period pipework changed many times and seldom recorded',
    ],
    nearby: ['kensington', 'chelsea', 'hammersmith'],
  },
  {
    slug: 'eltham',
    name: 'Eltham',
    borough: 'Greenwich',
    postcodes: ['SE9', 'SE12', 'SE18'],
    volume: 210,
    kd: 9,
    metaTitle: 'Plumber in Eltham | SE9 & Progress Estate | Ninja Plumbers',
    metaDescription:
      'Plumbing in Eltham, SE9 and the Progress Estate from Ninja Plumbers. Boilers repaired and serviced, drains cleared, bathrooms. Call 020 3576 5825.',
    intro:
      'In Eltham and SE9, Ninja Plumbers works in interwar semis, estate houses and the older homes around the village.',
    character:
      'Eltham is mostly suburban housing from the interwar years and the early twentieth century. That includes the Progress Estate, whose houses were built to a notably high standard for the period and remain largely intact. Most homes are family houses on good-sized plots, and the regular work follows a familiar pattern. Heating systems have been added to instead of replaced, and drain runs are so long that a blockage seldom turns up where the owner first looks.',
    common: [
      'Interwar semis on heating extended over the decades',
      'Long outside drain runs across bigger suburban plots',
      'Vented systems and ageing cylinders still running',
      'Parts of the Progress Estate under conservation-area rules',
    ],
    nearby: ['greenwich', 'woolwich', 'bromley'],
  },
  {
    slug: 'east-dulwich',
    name: 'East Dulwich',
    borough: 'Southwark',
    postcodes: ['SE22', 'SE15', 'SE21'],
    volume: 210,
    kd: 9,
    metaTitle: 'Plumber in East Dulwich | SE22 Extensions | Ninja Plumbers',
    metaDescription:
      'Plumbers for East Dulwich, SE22 and Peckham Rye. Ninja Plumbers repairs boilers, clears blocked drains and installs bathrooms. Call 020 3576 5825.',
    intro:
      'Side-return extensions crop up again and again in the jobs Ninja Plumbers does in East Dulwich, SE22 and the streets leading to Peckham Rye.',
    character:
      'East Dulwich is row upon row of late Victorian terraces, and an unusually large share have had a loft conversion or side-return extension added over the past twenty years. For plumbing, that is what defines the area. Waste runs have been added for a new kitchen or loft bathroom, often at a fall that copes until suddenly it does not. Heating systems are expected to serve a house a third larger than it was when the first boiler was fitted.',
    common: [
      'Side-return extensions whose waste joins existing runs',
      'Loft bathrooms added with no resizing of the heating',
      'Moved kitchens that took the boiler with them and lengthened the pipes',
      'Terraces on shared stacks where next door is part of the cause',
    ],
    nearby: ['dulwich', 'peckham', 'camberwell'],
  },
  {
    slug: 'leytonstone',
    name: 'Leytonstone',
    borough: 'Waltham Forest',
    postcodes: ['E11', 'E10', 'E7'],
    volume: 170,
    kd: 10,
    metaTitle: 'Plumber in Leytonstone | E11 Boiler Repair | Ninja Plumbers',
    metaDescription:
      'Plumbing in Leytonstone and E11 from Ninja Plumbers. We repair boilers, unblock drains and install bathrooms. Emergency callouts. Call 020 3576 5825.',
    intro:
      'Across Leytonstone and E11, Ninja Plumbers works in terraces, conversions and the newer flats near the station.',
    character:
      'Leytonstone is mainly Victorian and Edwardian terracing, and it has seen a great deal of recent extension and conversion as the area filled up. The resulting work is fairly easy to predict. Waste gets added for new kitchens and bathrooms. Boilers are moved during extensions, and the pipes are lengthened instead of properly renewed. Condensate pipes get run outside, where the first hard frost of winter freezes them solid.',
    common: [
      'Condensate pipes run outside during extensions that freeze in winter',
      'Boilers moved during kitchen extensions with lengthened pipework',
      'Terraces split into upper and lower flats sharing drains',
      'New bathrooms on waste runs that were never built to take them',
    ],
    nearby: ['leyton', 'walthamstow', 'stratford'],
  },
  {
    slug: 'leyton',
    name: 'Leyton',
    borough: 'Waltham Forest',
    postcodes: ['E10', 'E11', 'E15'],
    volume: 170,
    kd: 12,
    metaTitle: 'Plumber in Leyton | E10 Shared Houses | Ninja Plumbers',
    metaDescription:
      'Plumbers for Leyton and E10. Ninja Plumbers repairs boilers, clears drains and installs bathrooms in houses and shared flats. Call 020 3576 5825.',
    intro:
      'In Leyton and E10 our work is in terraces, shared houses and converted flats, and most of the area is tightly packed Victorian terracing.',
    character:
      'Leyton is closely built Victorian terracing with many shared houses and flat conversions, and drains laid for far fewer people than now use them. In a split house, the second and third bathrooms usually hang off a stack meant for one. That works until several people use it at the same time. On top of this, rear extensions have added waste runs of mixed quality, and not all of them were built to the same standard.',
    common: [
      'Added bathrooms emptying into a stack built for one household',
      'Faults reported by one tenant in a shared house but caused by another',
      'Rear extensions with waste laid at borderline falls',
      'Old pipework still in place behind newer work',
    ],
    nearby: ['leytonstone', 'walthamstow', 'hackney'],
  },
  {
    slug: 'hampstead',
    name: 'Hampstead',
    borough: 'Camden',
    postcodes: ['NW3', 'NW6', 'N6'],
    volume: 170,
    kd: 4,
    metaTitle: 'Plumber in Hampstead | NW3 Period Homes | Ninja Plumbers',
    metaDescription:
      'Plumbing in Hampstead and NW3 from Ninja Plumbers. We repair and service boilers, clear blocked drains and install bathrooms. Call 020 3576 5825.',
    intro:
      'In Hampstead and NW3, Ninja Plumbers works in period houses, mansion flats and converted homes.',
    character:
      'Few places in London have as much listed and conservation-area property as Hampstead, and it is built on a hill too. Both shape the work. Listing limits where a flue can end and what can run on the outside, so those points must be agreed before any equipment is chosen, not afterwards. The slope means tall houses whose top floor is far above the water source, which leads to pressure complaints caused by height rather than by the boiler.',
    common: [
      'Listed and conservation limits on flues and outside pipework',
      'Weak pressure on the top floors of tall hillside houses',
      'Basement conversions that depend on pumped drainage',
      'Period pipework changed by owner after owner and seldom recorded',
    ],
    nearby: ['highgate', 'kilburn', 'islington'],
  },
  {
    slug: 'crystal-palace',
    name: 'Crystal Palace',
    borough: 'Bromley',
    postcodes: ['SE19', 'SE26', 'SE20'],
    volume: 170,
    kd: 8,
    metaTitle: 'Plumber in Crystal Palace | SE19 High Ground | Ninja Plumbers',
    metaDescription:
      'Plumbers for Crystal Palace, SE19, Sydenham and Anerley. Ninja Plumbers repairs boilers, clears blocked drains and installs bathrooms. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers works across Crystal Palace, SE19 and the streets that drop down to Sydenham and Anerley, nearly all of it on a steep slope.',
    character:
      'Crystal Palace stands on one of the highest spots in south London, and the land drops steeply on every side. Big Victorian houses line those slopes, and most are now flats. Both the height above the mains and the height between floors work against water pressure, which is why pumped and pressurised systems are so common. The area also spans five boroughs. That matters more when deciding who is responsible for a drain than it does for the plumbing itself.',
    common: [
      'Low top-floor pressure in tall houses on the high ground',
      'Pressurised and pumped systems fitted to make up for it',
      'Steep plots where drain falls were improvised',
      'Big houses split into flats still draining into the original stack',
    ],
    nearby: ['sydenham', 'streatham', 'bromley'],
  },
  {
    slug: 'catford',
    name: 'Catford',
    borough: 'Lewisham',
    postcodes: ['SE6', 'SE13', 'SE12'],
    volume: 170,
    kd: 13,
    metaTitle: 'Plumber in Catford | SE6 Drainage | Ninja Plumbers',
    metaDescription:
      'Plumbing in Catford and SE6 from Ninja Plumbers. We clear blocked drains, repair boilers and install bathrooms. Emergency callout. Call 020 3576 5825.',
    intro:
      'Across Catford and SE6 we work in terraces, estate homes and converted flats, and drains are usually the reason people first ring us.',
    character:
      'Catford has Victorian and Edwardian terraces next to large post-war estates, and the River Ravensbourne runs through it. That matters, because parts of the area have a real history of surface water and flooding, not just a theoretical risk. Low-lying homes here are more likely than most in London to have drains back up in heavy rain, and that changes what an overflowing gully is really telling you when you see one.',
    common: [
      'Drains and surface water backing up during heavy rain on the low-lying streets',
      'Estate homes with shared supply and communal risers',
      'Victorian terraces on old original drains',
      'Conversions with several flats on one stack',
    ],
    nearby: ['lewisham', 'forest-hill', 'bromley'],
  },
  {
    slug: 'canary-wharf',
    name: 'Canary Wharf',
    borough: 'Tower Hamlets',
    postcodes: ['E14', 'E16', 'E3'],
    volume: 170,
    kd: 9,
    metaTitle: 'Plumber in Canary Wharf | E14 Towers & HIUs | Ninja Plumbers',
    metaDescription:
      'Plumbers for Canary Wharf and E14. Ninja Plumbers repairs boilers, clears drains and handles commercial plumbing in towers and blocks. Call 020 3576 5825.',
    intro:
      'In Canary Wharf and E14, Ninja Plumbers works in commercial premises, riverside flats and residential towers.',
    character:
      'Nearly everything in Canary Wharf is a tower or a modern block, so it is the least typical place we work anywhere in London. Most flats have no boiler of their own. Their heating and hot water are supplied by a communal network via a heat interface unit, so if the hot water stops, the network is the first question, not the flat. Everything else is set by the building rather than the home: concierge access, booked slots, and isolation at the riser rather than under a sink.',
    common: [
      'Most flats running a heat interface unit, not a boiler',
      'Several flats losing hot water together on a communal network',
      'Concierge and building management access booked ahead',
      'Isolation done at the riser, not inside the home',
    ],
    nearby: ['stratford', 'greenwich', 'hackney'],
  },
  {
    slug: 'blackheath',
    name: 'Blackheath',
    borough: 'Lewisham',
    postcodes: ['SE3', 'SE10', 'SE13'],
    volume: 170,
    kd: 8,
    metaTitle: 'Plumber in Blackheath | SE3 Heath & Village | Ninja Plumbers',
    metaDescription:
      'Plumbing across Blackheath, SE3, the heath and the village from Ninja Plumbers. Boilers repaired and serviced, drains cleared, bathrooms. Call 020 3576 5825.',
    intro:
      'In Blackheath and SE3, Ninja Plumbers works in Georgian and Victorian homes near the village and around the heath.',
    character:
      'Georgian and early Victorian property is plentiful in Blackheath. A lot of it is listed, and most of the village lies in a conservation area. That governs most jobs. Anything that changes the outside of a building, whether a flue terminal, outside pipework or a soil stack, has to be settled before work starts, not sorted out halfway. The houses are also big and old, with long pipe runs and layer on layer of changes that no remaining drawing shows.',
    common: [
      'Listed and conservation limits across the heath and the village',
      'Long pipe runs through big period houses',
      'Alterations by past owners that nobody recorded',
      'Vented systems and old cylinders still in daily use',
    ],
    nearby: ['greenwich', 'lewisham', 'eltham'],
  },
  {
    slug: 'tottenham',
    name: 'Tottenham',
    borough: 'Haringey',
    postcodes: ['N17', 'N15', 'N22'],
    volume: 140,
    kd: 9,
    metaTitle: 'Plumber in Tottenham | N17 High Road | Ninja Plumbers',
    metaDescription:
      'Plumbers for Tottenham and N17. Ninja Plumbers repairs boilers, clears blocked drains and installs bathrooms. Emergency callouts. Call 020 3576 5825.',
    intro:
      'In Tottenham and N17, Ninja Plumbers works in converted flats, estate homes and terraced houses.',
    character:
      'Tottenham is mainly terraced, Victorian and Edwardian, with much of it now flats, alongside a lot of estate housing and more and more new building around the High Road. Most of our work is in the conversions. These houses were split decades ago, their drains and heating were never properly reworked for it, and at some point a second bathroom was added to a stack that was not built to take it.',
    common: [
      'Terraces split into flats with drains and heating left as they were',
      'Estate homes with shared supply and communal risers',
      'Second bathrooms added to stacks sized for one household',
      'Recent building near the High Road running on communal systems',
    ],
    nearby: ['enfield', 'walthamstow', 'hackney'],
  },
  {
    slug: 'stratford',
    name: 'Stratford',
    borough: 'Newham',
    postcodes: ['E15', 'E20', 'E16'],
    volume: 140,
    kd: 15,
    metaTitle: 'Plumber in Stratford | E15 & E20 Callouts | Ninja Plumbers',
    metaDescription:
      'Plumbing in Stratford, E15 and E20 from Ninja Plumbers. We repair boilers, unblock drains and install bathrooms. Emergency callouts. Call 020 3576 5825.',
    intro:
      'Across Stratford, E15 and E20, Ninja Plumbers works in older terraces and the newer blocks near the park.',
    character:
      'Stratford divides sharply between older homes in E15 and the post-Olympic building in E20, and the two are really different jobs. The older terraces and estate homes behave like much of east London, with ageing pipes, conversions and shared stacks. In the newer blocks, heating comes from a communal heat network, each flat has its own heat interface unit, access is managed, and faults often lie in the building rather than in a single home.',
    common: [
      'Heat interface units instead of boilers in the newer E20 blocks',
      'Communal heat networks where several flats are hit at once',
      'Older E15 terraces and estate homes on ageing pipes',
      'Access arranged through building management in the new developments',
    ],
    nearby: ['canary-wharf', 'leyton', 'hackney'],
  },
  {
    slug: 'southwark',
    name: 'Southwark',
    borough: 'Southwark',
    postcodes: ['SE1', 'SE16', 'SE17'],
    volume: 140,
    kd: 11,
    metaTitle: 'Plumber in Southwark | SE1 Bankside | Ninja Plumbers',
    metaDescription:
      'Southwark, SE1 and Bankside plumbers. Ninja Plumbers repairs boilers, clears drains and handles commercial plumbing. Call 020 3576 5825.',
    intro:
      'In Southwark and SE1, Ninja Plumbers works in commercial premises, estate homes and warehouse conversions.',
    character:
      'Southwark and Bankside are an odd mix. Old warehouses and wharf buildings turned into flats often sit within a few streets of big estates and a dense cluster of commercial property. The warehouse conversions stand out. They are deep-plan buildings where a flat may be far from any outside wall, which limits flue routes and often means long service runs to reach it. Much of the commercial work must be done outside trading hours, whatever the job.',
    common: [
      'Converted warehouses with flats far from any outside wall',
      'Limited flue routes in deep-plan converted buildings',
      'Estate homes with communal risers',
      'Commercial premises that need out-of-hours visits',
    ],
    nearby: ['westminster', 'camberwell', 'peckham'],
  },
  {
    slug: 'kilburn',
    name: 'Kilburn',
    borough: 'Brent',
    postcodes: ['NW6', 'NW2', 'W9'],
    volume: 140,
    kd: 8,
    metaTitle: 'Plumber in Kilburn | NW6 Conversions | Ninja Plumbers',
    metaDescription:
      'Plumbing in Kilburn and NW6 from Ninja Plumbers. We repair boilers, clear blocked drains and install bathrooms in converted flats. Call 020 3576 5825.',
    intro:
      'In Kilburn and NW6, Ninja Plumbers works in converted flats, mansion blocks and terraced houses.',
    character:
      'Kilburn is big Victorian and Edwardian houses, nearly all turned into flats long ago, while mansion blocks line the main roads. Both have the same root issue. A building meant for one household now serves several, on the original stacks, often with heating that was divided up instead of properly replaced. Boilers usually sit in whatever cupboard the first conversion left free, not in one picked with servicing in mind.',
    common: [
      'Houses split into flats still on the original stack and supply',
      'Shared tanks and communal risers in mansion blocks',
      'Boilers in conversion cupboards that are hard to service',
      'Heating divided between flats instead of replaced',
    ],
    nearby: ['hampstead', 'muswell-hill', 'acton'],
  },
  {
    slug: 'highgate',
    name: 'Highgate',
    borough: 'Haringey',
    postcodes: ['N6', 'N19', 'NW5'],
    volume: 140,
    kd: 15,
    metaTitle: 'Plumber in Highgate | N6 Period Houses | Ninja Plumbers',
    metaDescription:
      'Plumbers for Highgate and N6. Ninja Plumbers repairs and services boilers, unblocks drains and installs bathrooms. Call 020 3576 5825.',
    intro:
      'In Highgate and N6, Ninja Plumbers works in period houses up on the hill and converted flats further down.',
    character:
      'Highgate is period housing on a hill as steep as any in London, with a big conservation area and plenty of listed buildings around the village. The two limits add up. Listing restricts what can run or end on the outside, and the slope gives tall houses whose top floor has hardly any head of water above it. Pressure complaints here are usually down to geometry, not equipment, and a new boiler alone will not solve them.',
    common: [
      'Listed and conservation limits around the village',
      'Top-floor pressure held back by height, not the boiler',
      'Big period houses with long pipe runs and layers of changes',
      'Conversions sharing the original stacks',
    ],
    nearby: ['hampstead', 'muswell-hill', 'islington'],
  },
  {
    slug: 'finchley',
    name: 'Finchley',
    borough: 'Barnet',
    postcodes: ['N3', 'N12', 'N2'],
    volume: 140,
    kd: 7,
    metaTitle: 'Plumber in Finchley | N3 & N12 Boiler Repair | Ninja Plumbers',
    metaDescription:
      'Plumbing in Finchley, N3 and N12 from Ninja Plumbers. We repair and service boilers, clear blocked drains and install bathrooms. Call 020 3576 5825.',
    intro:
      'In Finchley, N3 and N12, Ninja Plumbers works in converted flats and suburban family houses.',
    character:
      'Finchley is mostly interwar suburbia: semis and detached family houses on fair-sized plots, most still single homes rather than flats. The regular work follows from that. Heating was sized for the house as first built, then asked to cope with a loft conversion and rear extension added later. Outside drain runs are long too, and a blockage is seldom anywhere close to the house.',
    common: [
      'Extensions and loft conversions added with no resizing of the system',
      'Interwar semis now on their second or third boiler',
      'Long outside drain runs over suburban plots',
      'Old cylinders and vented systems that are still running',
    ],
    nearby: ['barnet', 'muswell-hill', 'highgate'],
  },
  {
    slug: 'chingford',
    name: 'Chingford',
    borough: 'Waltham Forest',
    postcodes: ['E4', 'E17', 'IG8'],
    volume: 140,
    kd: 16,
    metaTitle: 'Plumber in Chingford | E4 Epping Forest | Ninja Plumbers',
    metaDescription:
      'Plumbers for Chingford and E4. Ninja Plumbers repairs and services boilers, clears blocked drains and installs bathrooms. Call 020 3576 5825.',
    intro:
      'In Chingford and E4, out on the edge of Epping Forest, Ninja Plumbers works in suburban homes.',
    character:
      'Chingford is family suburbia at the northern edge of London, next to Epping Forest. Plots are bigger than in inner London, and most homes are interwar or post-war and still lived in by one household rather than split. That brings long outside drain runs, mature trees near old clay drains, where roots getting in is a regular cause rather than a rare one, and cold garages and outbuildings where pipes freeze the first time real cold arrives.',
    common: [
      'Roots getting into old clay drains near mature trees',
      'Long outside drain runs across bigger plots',
      'Pipes bursting in cold garages and outbuildings after a freeze',
      'Heating in interwar and post-war homes, added to bit by bit',
    ],
    nearby: ['walthamstow', 'enfield', 'leyton'],
  },
];

// Build-time invariants. These run on every `astro build`, so a bad edit fails
// the build rather than silently shipping a page with a missing cross-link.
{
  const slugs = new Set(areas.map((a) => a.slug));
  const problems: string[] = [];
  for (const a of areas) {
    for (const n of a.nearby) {
      if (!slugs.has(n)) problems.push(`${a.slug}: nearby "${n}" is not an area`);
    }
    if (a.nearby.includes(a.slug)) problems.push(`${a.slug}: links to itself`);
  }
  const seen = new Set<string>();
  for (const a of areas) {
    if (seen.has(a.slug)) problems.push(`duplicate slug: ${a.slug}`);
    seen.add(a.slug);
  }
  const titles = new Set<string>();
  for (const a of areas) {
    if (titles.has(a.metaTitle)) problems.push(`duplicate metaTitle: ${a.metaTitle}`);
    titles.add(a.metaTitle);
  }
  if (problems.length) throw new Error('areas.ts invariants failed:\n  ' + problems.join('\n  '));
}

export default areas;

// London areas plus the covered towns around Guildford. Use this for looking
// an area up by slug; keep using `areas` wherever the list means London.
import { guildfordAreas } from './areas-guildford';
export const allAreas: Area[] = [...areas, ...guildfordAreas];
