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
      'Local plumber in Fulham, SW6, based on the High Street. Boiler repair, blocked drains, bathroom fitting and same-day callouts. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers is based on Fulham High Street, so SW6 is where most of our vans start the day. We cover boiler work, drainage and bathroom installation across Fulham and the streets around it, usually with someone on site within the hour.',
    character:
      'Fulham is dense Victorian and Edwardian terraces, a great many of them converted into flats. Two problems come up again and again: original pipework that has been extended and re-routed by successive owners, and shared soil stacks where a blockage in one flat shows up in another lower down the building. Basements and lower-ground conversions are common too, so pumped waste and sump systems are part of the job as often as a straightforward gravity drain.',
    common: [
      'Shared soil stacks in converted flats',
      'Original lead and iron pipework still in place behind later work',
      'Sump pumps in basement conversions that stop working quietly, then flood',
      'Combi boilers squeezed into kitchen cupboards in flat conversions',
    ],
    nearby: ['clapham', 'wandsworth', 'balham'],
    note: 'We are based here, on Fulham High Street.',
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
      'Ninja Plumbers covers Croydon and the CR postcodes. Boiler repair and installation, blocked drains, bathrooms and emergency callouts. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers sends engineers across Croydon and the CR postcodes most days, working on houses, flats and commercial premises alike.',
    character:
      'Croydon covers an unusually wide range of building types for one borough, from interwar semis and 1930s estates through to town centre towers and a lot of recent flat conversion above shops. Suburban stock tends to bring heating and drainage work, with long external runs and older cast iron drains. Get closer to the centre and it is a different job: communal systems in the flats above shops, where one fault can knock out hot water for several properties at once.',
    common: [
      'Ageing central heating in 1930s semis',
      'External drain and gully blockages on longer suburban runs',
      'One faulty valve in a town centre block taking out hot water for several flats',
      'Boiler replacements in properties on their original system',
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
      'Ninja Plumbers covers Bromley and the BR postcodes. Boiler repair, drain unblocking, bathroom fitting and emergency plumbing. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers works right across Bromley and the BR postcodes, from a burst pipe at nine in the evening to a bathroom fitted over a planned week.',
    character:
      'Bromley is largely suburban family housing: interwar and post-war semis and detached houses, many with gardens and outbuildings attached. Because of that, the work here skews toward heating systems, hot water cylinders and outside drainage rather than the flat-conversion problems more typical of inner London. A fair number of the larger properties still run a vented system with a loft tank, which is a genuinely different job to fixing a modern combi and needs diagnosing differently from the start.',
    common: [
      'Vented systems with loft tanks and hot water cylinders',
      'Garden drainage, gullies and external blockages',
      'Outside taps that split behind the wall after a hard frost',
      'Full-house heating upgrades and radiator replacement',
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
      'Ninja Plumbers covers Wandsworth and the SW postcodes, a short run from our Fulham base. Leak detection, boiler repair and bathrooms. Call 020 3576 5825.',
    intro:
      'Wandsworth and the SW postcodes around it are a short run from our Fulham office, so Ninja Plumbers is usually there quickly, whether it is a leak that needs tracing or a bathroom going in.',
    character:
      'Wandsworth is dominated by Victorian terraces, a large share of them extended at the back and converted into flats. Side-return and rear extensions are extremely common here, and they frequently mean pipework routed through new walls with limited access afterwards. Head towards the river and it is a different job again: new-build blocks with communal heating and pressurised systems, where the fault finding starts at the plant room rather than under the sink.',
    common: [
      'Pipework buried in rear and side-return extensions',
      'Leak detection in extended Victorian terraces',
      'Flat conversions sharing a single soil stack',
      'Pressurised systems in riverside new-build blocks',
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
    metaTitle: 'Plumber in Harrow | HA1 to HA5 Heating Engineers | Ninja Plumbers',
    metaDescription:
      'Ninja Plumbers covers Harrow and the HA postcodes. Boiler installation and repair, drains, bathrooms and emergency plumbing. Call 020 3576 5825.',
    intro:
      'From HA1 out to HA5, Ninja Plumbers handles the plumbing and heating for family homes, flats and commercial premises across Harrow.',
    character:
      'Harrow is classic Metroland: largely 1930s semi-detached housing built as the Metropolitan line pushed out, with later infill filling the gaps. A lot of properties here are on their second or third heating system, with original galvanised or iron pipework still surviving in places, and hot water cylinders in airing cupboards rather than combis. Loft conversions are widespread too, and they often add a bathroom onto a floor the original system was never sized to serve.',
    common: [
      'Heating systems on their second or third replacement',
      'Loft conversion bathrooms with pressure problems',
      'Hot water cylinders and immersion heaters',
      'Original galvanised pipework surviving behind later work',
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
      'Ninja Plumbers in Balham, SW12. Blocked drains, leak detection, boiler repair and bathroom installation. Emergency callouts. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers works across Balham and SW12, on houses, flat conversions and the shops along the high road, and most jobs start with the same phone call: something has stopped draining.',
    character:
      'Balham is late-Victorian terraced housing, much of it split into upper and lower flats. The single most common call here follows straight from that split: one soil stack shared by two households, and a blockage that shows up in whichever property sits lower, whether or not it caused it. Loft and rear extensions are widespread too, adding bathrooms and pipe runs onto systems that were never designed to carry them.',
    common: [
      'Shared soil stacks between upper and lower flats',
      'Blockages presenting in the ground-floor flat',
      'Added bathrooms in loft and rear extensions',
      'Older combis serving more outlets than they were sized for',
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
      'Ninja Plumbers covers Islington and N1, including listed and period property. Leak detection, boiler repair and bathrooms. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers takes on plumbing and heating across Islington and the N1 postcodes, from period property and conversions through to commercial premises.',
    character:
      'Islington has some of the oldest surviving housing stock we work on: Georgian and early Victorian terraces, a good deal of it in conservation areas or listed outright. That history comes with real constraints on the job itself, not just the building. There are usually limited routes for new pipework, restrictions on what can be altered on the outside, and floorboards that should not be lifted without a plan for putting them back properly. Around the City fringe, by contrast, the work is mostly recent commercial and mixed-use conversion.',
    common: [
      'Period and listed property with restricted pipe routing',
      'Leak detection where floors cannot simply be lifted',
      'Conservation area constraints on external work',
      'Commercial and mixed-use premises toward the City fringe',
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
      'Ninja Plumbers covers Hackney, E8, E9 and N16. Boiler repair, blocked drains, bathroom fitting and emergency callouts. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers is out in Hackney most weeks, working on flats, converted terraces, warehouse conversions and commercial kitchens across E8, E9 and N16.',
    character:
      'Few boroughs mix building types the way Hackney does: Victorian terraces, large post-war estates and warehouse conversions sit within a few streets of each other, and each one is a different sort of job. Estates and blocks generally mean communal systems, where one fault can affect many flats rather than just the one that reported it. Warehouse conversions bring their own quirk, with long horizontal waste runs and exposed services that are easy to inspect but prone to falls that are shallower than they should be.',
    common: [
      'Communal systems in blocks and estates',
      'Long, shallow waste runs in warehouse conversions',
      'Victorian terraces split into multiple flats',
      'Restaurant and commercial kitchen plumbing',
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
      'Ninja Plumbers covers Ealing and the W5 postcodes. Boiler repair and installation, drains, bathrooms and emergency plumbing. Call 020 3576 5825.',
    intro:
      'Ealing and the W postcodes around it get regular visits from Ninja Plumbers, covering family houses, flats and commercial premises alike.',
    character:
      'Ealing runs from large Edwardian and interwar family houses through to substantial purpose-built flat blocks from the 1930s onward. In the bigger houses, long pipe runs and multiple bathrooms added over the years are usually where pressure and balancing problems start. The purpose-built blocks are a different case: they tend to have communal cold water storage and risers, so a problem there is rarely confined to just one flat.',
    common: [
      'Pressure and balancing across multiple bathrooms',
      'Communal risers and cold water storage in purpose-built blocks',
      'Heating systems in large Edwardian houses',
      'Bathroom and en-suite additions to older layouts',
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
      'Ninja Plumbers in Clapham, SW4. Leak detection, blocked drains, boiler repair and landlord callouts. Fast response. Call 020 3576 5825.',
    intro:
      'Houses, flat shares and converted terraces across Clapham and SW4 keep Ninja Plumbers busy, especially where a property is being run as a rental.',
    character:
      'Clapham is largely Victorian terraces, with an unusually high proportion in multiple occupation or split into flats. Heavy use is the theme running through most jobs here: bathrooms and kitchens serving more people than the original system was ever designed for, showers running back to back through the evening, and waste pipes that block more often as a direct result. A significant part of what we do in Clapham is landlord repairs and getting a flat turned around between tenants.',
    common: [
      'Systems under heavier use than they were designed for',
      'Blocked waste in shared kitchens and bathrooms',
      'Landlord repairs and tenancy turnarounds',
      'Shower pressure across multiple simultaneous outlets',
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
      'Ninja Plumbers covers Wimbledon, SW19 and SW20. Bathroom installation, boiler repair, drainage and emergency plumbing. Call 020 3576 5825.',
    intro:
      'Family houses, period property and flats across Wimbledon, SW19 and SW20 are all part of the round Ninja Plumbers covers week to week.',
    character:
      'Wimbledon covers larger detached and semi-detached family housing toward the Village and the Common, and denser Victorian terraces and flats nearer the town centre and station. In the bigger properties, vented systems with cylinders and several bathrooms are still common, which makes pressure and balancing a recurring issue rather than a one-off. Period property near the Common tends to carry conservation constraints too, so external work usually needs sorting out with the council before it can start.',
    common: [
      'Vented systems with cylinders in larger houses',
      'Balancing pressure across several bathrooms',
      'Conservation constraints on period property',
      'Bathroom and en-suite installation in family homes',
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
      'Ninja Plumbers covers Brixton, SW2 and SW9. Commercial kitchen plumbing, blocked drains, boiler repair and callouts. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers flats, converted terraces and the many food businesses across Brixton, SW2 and SW9, so no two jobs in a week tend to look alike.',
    character:
      'Brixton is a mix of Victorian terraces split into flats, post-war estates, and a dense concentration of restaurants, bars and food businesses around the market and the main roads. The food businesses bring a distinct kind of work: grease-laden waste, drains that seem to block on a schedule, and jobs that can only happen outside trading hours or not at all. Away from the market, estate blocks and shared terrace stacks are the more usual call.',
    common: [
      'Commercial kitchen waste and grease-related blockages',
      'Out-of-hours work around trading times',
      'Communal systems in estates and blocks',
      'Terrace conversions on a single shared stack',
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
      'Ninja Plumbers covers Tooting, SW17, Tooting Bec and the Broadway. Blocked drains, boiler repair, bathrooms and callouts. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers houses, converted flats and shared homes right across Tooting, SW17 and the streets running off the Broadway.',
    character:
      'Tooting is street after street of Victorian and Edwardian terraces, and an unusually high proportion of them are now shared houses or split into flats. That matters for plumbing because bathrooms tend to get added where the drainage was never designed to take them: a second or third bathroom hung off a stack sized for one household, or a back addition carrying waste it was never built for. Down towards the Broadway there is also a dense run of restaurants and takeaways sitting above and below residential flats.',
    common: [
      'Extra bathrooms added to a stack sized for one',
      'Shared houses where several people report the same fault differently',
      'Back-addition waste pipes running at the wrong fall',
      'Food business drainage on and around the Broadway',
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
    metaTitle: 'Plumber in Lewisham | SE13 Ladywell & Hither Green | Ninja Plumbers',
    metaDescription:
      'Ninja Plumbers covers Lewisham, SE13, Hither Green and Ladywell. Boiler repair, blocked drains, bathrooms and callouts. Call 020 3576 5825.',
    intro:
      'Houses, flats and blocks across Lewisham, SE13 and out towards Hither Green and Ladywell are regular ground for Ninja Plumbers.',
    character:
      'Three quite different kinds of building sit on the same street map in Lewisham: Victorian terraces towards Ladywell and Hither Green, large post-war estates, and the town centre towers. In the terraces it is the usual back-addition and original-pipework work. In the estates and towers, though, the fault is rarely in the flat that reported it, so getting to the riser matters more than getting to the kitchen sink.',
    common: [
      'Communal risers and shared heating in town centre blocks',
      'Ex-local-authority flats on their original pipework',
      'Victorian back additions towards Ladywell and Hither Green',
      'Faults that present in one flat and originate in another',
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
      'Ninja Plumbers covers Streatham, SW16, Streatham Common and Norbury. Boiler repair, blocked drains and bathrooms. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers Streatham, SW16 and down towards Norbury and Streatham Vale, handling everything from a dripping tap to a full heating upgrade.',
    character:
      'Streatham has a lot of large late-Victorian and Edwardian houses that were divided into flats decades ago, alongside long runs of 1930s mansion blocks along the High Road. Both share the same underlying problem: a system originally designed for one household now serving four or five, with pipework that has been added to over the years rather than replaced. The mansion blocks in particular often have communal cold water tanks and risers that nobody has actually inspected in a long while.',
    common: [
      'Large houses divided into flats on the original pipework',
      '1930s mansion blocks with communal tanks and risers',
      'Heating systems serving more flats than they were sized for',
      'Long external drain runs on the bigger plots',
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
      'Ninja Plumbers covers Muswell Hill and N10. Boiler repair, blocked drains, bathroom installation and callouts. Call 020 3576 5825.',
    intro:
      'The large Edwardian family houses Muswell Hill is known for keep Ninja Plumbers busy across N10, on jobs that usually take more than an afternoon.',
    character:
      'Muswell Hill is one of the most consistently Edwardian parts of London, with large family houses that are mostly still whole rather than converted. That consistency shapes the work: big houses with long pipe runs, original systems that have been extended into loft conversions and rear extensions over the years, and heating that struggles to reach the top floor because nobody resized it when the house grew. Bathrooms added into lofts are a particularly common source of pressure complaints we get called out for.',
    common: [
      'Loft bathrooms added without resizing the system',
      'Poor flow and pressure on the top floor of tall houses',
      'Long pipe runs in large family houses',
      'Original heating systems extended into rear extensions',
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
      'Ninja Plumbers covers Hammersmith and W6. Boiler repair, blocked drains, bathrooms and commercial plumbing. Fast callout. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers is a short hop from Hammersmith and works flats, riverside blocks and the offices around the Broadway just as often as houses in W6.',
    character:
      'Hammersmith runs from Victorian terraces in the streets behind the Broadway to riverside mansion blocks and a good deal of post-war and modern office space. The mansion blocks are the distinctive part of the area: communal stacks and risers where a blockage on a lower floor gets reported by a flat several storeys up, and access that generally has to be arranged with a managing agent rather than the tenant themselves. On the commercial side, washroom and kitchen plumbing tends to be booked around office hours rather than at short notice.',
    common: [
      'Riverside mansion blocks with communal stacks and risers',
      'Access arranged through managing agents rather than occupiers',
      'Office washroom and kitchen plumbing around the Broadway',
      'Victorian terraces converted into flats behind the main roads',
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
    metaTitle: 'Plumber in Greenwich | SE10 Town Centre & Peninsula | Ninja Plumbers',
    metaDescription:
      'Ninja Plumbers covers Greenwich, SE10, the town centre and the Peninsula. Boiler repair, blocked drains and bathrooms. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers Greenwich and SE10 end to end, from the Georgian streets around the town centre out to the towers on the Peninsula.',
    character:
      'Greenwich is really two plumbing jobs sharing one postcode. The town centre is Georgian and early Victorian, much of it in a conservation area and some of it listed outright, which constrains where pipework and flues can go and rules out the obvious external fix more often than not. Down on the Peninsula it is the opposite picture: recent towers on communal heat networks, where the flat has a heat interface unit rather than a boiler, and a "no hot water" call is as likely to trace back to the network as to anything inside the flat.',
    common: [
      'Listed and conservation-area constraints on flues and external pipework',
      'Heat interface units in Peninsula blocks rather than individual boilers',
      'Georgian and early Victorian properties on much-altered pipework',
      'Communal heat network faults presenting as a single-flat problem',
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
      'Ninja Plumbers covers Battersea, SW11 and Nine Elms. Boiler repair, blocked drains and bathroom installation. Emergency callout. Call 020 3576 5825.',
    intro:
      'Victorian terraces and the newer riverside towers both fall under the Ninja Plumbers patch in Battersea, SW11 and Nine Elms.',
    character:
      'Battersea splits between the Victorian terraces in the streets off the park, many now converted into flats, and the Nine Elms and Power Station developments along the river. The new blocks deserve calling out on their own: most run on communal heat networks with a heat interface unit in each flat instead of a boiler, so a "no hot water" call there is a genuinely different diagnosis, and the work usually needs booking through building management rather than turning up on the day.',
    common: [
      'Heat interface units in Nine Elms and riverside developments',
      'Communal heat networks where the fault sits outside the flat',
      'Victorian terrace conversions off the park sharing a stack',
      'Building management access in the newer blocks',
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
    metaTitle: 'Plumber in Walthamstow | E17 Warner Maisonettes | Ninja Plumbers',
    metaDescription:
      'Ninja Plumbers covers Walthamstow, E17. Boiler repair, blocked drains and bathroom installation, including Warner maisonettes. Call 020 3576 5825.',
    intro:
      'Terraces, Warner maisonettes and converted flats across Walthamstow and E17 all fall within Ninja Plumbers\' regular coverage.',
    character:
      'Walthamstow is largely Victorian and Edwardian terraced, with one local feature worth knowing about: the Warner properties, built as pairs of maisonettes each with its own front door. They look like a single house from the street, but they are two dwellings sharing drainage and often a roof too, so a leak or a blockage is frequently not the responsibility of whoever happened to report it. Beyond the Warner stock, the rest of the area has seen heavy extension work over the last decade or so.',
    common: [
      'Warner maisonette pairs sharing drainage between two households',
      'Rear extensions with waste added to existing runs',
      'Terraces converted into upper and lower flats',
      'Original pipework behind more recent kitchen and bathroom work',
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
      'Ninja Plumbers covers Putney, SW15 and Roehampton. Boiler repair, blocked drains and bathroom installation. Emergency callout. Call 020 3576 5825.',
    intro:
      'Terraces, riverside blocks and estate properties across Putney, SW15 and out to Roehampton are all part of the ground Ninja Plumbers covers.',
    character:
      'Putney runs from riverside mansion blocks and Victorian terraces near the bridge out to the post-war estates at Roehampton, and the two ends of the area call for different work. Near the bridge, communal stacks come with access arrangements that need sorting out in advance. Out at Roehampton it is more often estate properties on communal heating and original pipework. Closer to the river, basement and lower-ground rooms usually need pumped waste rather than a straightforward gravity drain.',
    common: [
      'Riverside mansion blocks with communal stacks',
      'Pumped waste in lower-ground rooms near the river',
      'Estate properties at Roehampton on communal heating',
      'Victorian terraces divided into flats near the bridge',
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
      'Ninja Plumbers covers Peckham, SE15 and Nunhead. Blocked drains, boiler repair and commercial plumbing along Rye Lane. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers works converted flats, estate properties and the food businesses along Rye Lane, covering Peckham, SE15 and Nunhead.',
    character:
      'Peckham mixes Victorian terraces, most now split into flats, with substantial ex-local-authority estates and a dense strip of food and drink businesses along Rye Lane. The three bring different work. Estates mean communal riser jobs. Conversions bring the familiar problem of several flats sharing drainage that was designed for one household. And the commercial strip means grease-related blockages, plus jobs that can only be scheduled once the kitchen has closed for the night.',
    common: [
      'Ex-local-authority blocks with communal risers',
      'Terrace conversions with several flats on one stack',
      'Commercial kitchen waste and grease blockages on Rye Lane',
      'Out-of-hours work around food business trading times',
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
      'Ninja Plumbers covers Kensington, W8 and Holland Park. Boiler repair, blocked drains and bathroom installation in period property. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers takes on stucco terraces, mansion blocks and garden square properties across Kensington, W8 and Holland Park.',
    character:
      'Kensington is stucco terraces, garden squares and mansion blocks, a large share of it listed or sitting in a conservation area. That status is the defining constraint on most jobs here: flue positions, external pipework and any soil stack alterations all need thinking through before work starts, not once it is under way. Deep basement conversions are common too, and they bring pumped drainage with them, which is a system that needs maintaining rather than one you can simply fit and forget.',
    common: [
      'Listed building and conservation area constraints on flues and pipework',
      'Basement conversions relying on pumped drainage',
      'Mansion block communal stacks and risers',
      'Period properties where earlier alterations are undocumented',
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
    metaTitle: 'Plumber in Dulwich | SE21 Village & West Dulwich | Ninja Plumbers',
    metaDescription:
      'Ninja Plumbers covers Dulwich, SE21, Dulwich Village and West Dulwich. Boiler repair, blocked drains and bathrooms. Call 020 3576 5825.',
    intro:
      'Large period family homes across Dulwich, SE21 and out to East and West Dulwich are the kind of property Ninja Plumbers deals with most in this area.',
    character:
      'Dulwich is mostly large Georgian, Victorian and interwar family housing on generous plots, much of it still in single occupation rather than split up. The practical consequences follow on from that: long pipe runs, sizeable heating systems that get expensive if left running badly, and drainage that travels a fair distance before it reaches the sewer, so a blockage is often further from the house than the owner expects. A good deal of the area also sits under the Dulwich Estate scheme of management, which can affect what is permitted externally.',
    common: [
      'Long external drain runs where blockages sit well away from the house',
      'Large heating systems in single-occupation family homes',
      'Estate scheme of management restrictions on external alterations',
      'Loft and rear extensions added to original systems',
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
      'Ninja Plumbers covers Chelsea, SW3, Brompton and Knightsbridge. Boiler repair, blocked drains and bathrooms in period homes. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers Chelsea, SW3 and the streets towards Brompton and Knightsbridge, on properties ranging from mews cottages to grand townhouses.',
    character:
      'Chelsea is Georgian and Victorian townhouses, mews properties and mansion blocks, with a high proportion listed. The townhouses tend to be tall and narrow, which puts the boiler or cylinder a long way from the top-floor bathroom and makes pressure and flow a recurring complaint rather than an occasional one. Basement excavation is common too, and it brings pumped drainage that needs regular servicing. Mews properties have their own quirk: limited external routing options, plus awkward access for anything that will not fit down the mews itself.',
    common: [
      'Pressure and flow problems in tall, narrow townhouses',
      'Excavated basements relying on pumped drainage',
      'Listed building constraints on flues and external pipework',
      'Restricted access and routing in mews properties',
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
      'Ninja Plumbers covers Acton and W3, North, South and East Acton. Boiler repair and servicing, blocked drains and bathrooms. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers has watched Acton change fast, and covers it end to end, from the Victorian terraces in South Acton to the newer blocks going up around North Acton.',
    character:
      'Acton has changed faster than most of west London, and the plumbing reflects that split. The older streets are Victorian and Edwardian terraces, a high proportion converted into flats or run as shared houses, with drainage that was designed for a fraction of the occupancy it now carries. Around North Acton and Park Royal the picture is entirely different, with recent high-density blocks running on communal systems, where a fault is usually a building matter rather than a single flat\'s, and access goes through management rather than a resident.',
    common: [
      'Conversions and shared houses on drainage sized for one household',
      'Recent North Acton blocks on communal systems with managed access',
      'Boilers relocated during kitchen extensions, with pipework extended rather than replaced',
      'Ageing systems in terraces that have gained bathrooms over the years',
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
      'Ninja Plumbers covers Enfield, EN1 to EN3. Boiler repair and servicing, blocked drains and bathroom installation. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers suburban houses, flats and the estates in between right across Enfield and the EN postcodes.',
    character:
      'Enfield is mostly interwar and post-war suburban housing on generous plots, with older stock around Enfield Town and Forty Hill. Because the plots are big, a blocked drain is frequently several chambers away from the house rather than sitting right under the kitchen window. It is also far enough out that garages, outbuildings and loft spaces go unheated through winter, which is exactly where burst pipes tend to start once a proper cold snap arrives.',
    common: [
      'Long external drain runs where the blockage sits well away from the house',
      'Burst pipes in unheated garages and outbuildings after a freeze',
      'Ageing heating systems in interwar and post-war semis',
      'Outside taps left connected over winter and splitting behind the wall',
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
    metaTitle: 'Plumber in Barnet | EN5 Whetstone & New Barnet | Ninja Plumbers',
    metaDescription:
      'Ninja Plumbers covers Barnet, EN5, Whetstone and New Barnet. Boiler repair and servicing, blocked drains and bathrooms. Call 020 3576 5825.',
    intro:
      'From Chipping Barnet down towards Whetstone and New Barnet, Ninja Plumbers covers the plumbing and heating across Barnet and EN5.',
    character:
      'Barnet runs from the older centre of Chipping Barnet, where some of the stock is genuinely old and a good deal of it listed or in a conservation area, out to interwar suburbs and post-war estates. There is a practical split between the two. Period property means flue and external pipework need thinking about before the job starts. Larger suburban houses, on the other hand, more often bring heating that has never been resized despite extensions added over the decades.',
    common: [
      'Conservation-area and listed constraints around the older centre',
      'Suburban heating systems never resized for later extensions',
      'Long drain runs on larger plots towards New Barnet',
      'Older cylinders and vented systems still in service',
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
      'Ninja Plumbers covers Woolwich, SE18 and Royal Arsenal. Boiler repair, blocked drains and bathroom installation. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers Woolwich and SE18 from the Victorian terraces right through to the new riverside blocks at the Arsenal.',
    character:
      'Woolwich has effectively been rebuilt around itself. Victorian terraces and substantial post-war estates sit alongside a decade of new riverside development at Royal Arsenal, and the three types behave completely differently. Estates bring communal risers and shared heating. The new blocks bring heat interface units, building management and access that needs arranging in advance. The terraces, by contrast, bring the ordinary work most of London has: old pipework and back additions.',
    common: [
      'Post-war estates with communal risers and shared heating',
      'Riverside blocks on heat networks rather than individual boilers',
      'Access through concierge or building management in newer developments',
      'Victorian terraces on much-altered original pipework',
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
      'Ninja Plumbers covers Forest Hill, SE23 and Honor Oak. Boiler repair, blocked drains and bathroom installation. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers Forest Hill, SE23 and the hill up towards Honor Oak, on a mix of divided period houses and smaller conversions.',
    character:
      'Forest Hill is built on a genuinely steep hill, and that shows up in the plumbing more than most people expect. Large Victorian and Edwardian houses run up the slope, many of them divided into flats, and the height between a loft tank and a top-floor bathroom is often not enough on its own to give decent pressure. Pumps and pressurised systems end up being standard here rather than optional. Gravity drainage across sloping plots behaves differently from flat ground too, and older falls were not always got right the first time.',
    common: [
      'Poor gravity pressure on upper floors of tall houses on the slope',
      'Shower pumps and pressurised systems fitted to compensate',
      'Large houses divided into flats on the original pipework',
      'Drainage across sloping plots where falls were improvised',
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
      'Ninja Plumbers covers Chiswick, W4 and Bedford Park. Boiler repair and servicing, blocked drains and bathroom installation. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers terraces, riverside property and the Bedford Park conservation area across Chiswick and W4.',
    character:
      'Chiswick is largely late Victorian and Edwardian, and a substantial part of it, Bedford Park in particular, one of the earliest garden suburbs, sits in a conservation area with a good deal of listed stock. That status constrains flue positions and external pipework in a way most of west London does not have to deal with. Down closer to the river, lower-ground rooms and basements need pumped drainage rather than gravity, and flooding risk there is treated as a live consideration rather than a theoretical one.',
    common: [
      'Conservation-area and listed constraints on flues and external pipework',
      'Pumped drainage in lower-ground rooms near the river',
      'Original pipework behind later kitchen and bathroom work',
      'Side-return extensions with waste added to existing runs',
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
      'Ninja Plumbers covers Camberwell and SE5. Boiler repair, blocked drains and bathroom installation. Emergency callout. Call 020 3576 5825.',
    intro:
      'Georgian and Victorian houses, converted flats and estate property across Camberwell and SE5 are all regular work for Ninja Plumbers.',
    character:
      'Camberwell has an unusual spread of building types for one area: genuinely Georgian terraces around Camberwell Grove, a great deal of Victorian housing now split into flats, and large post-war estates, all within a short walk of each other. Each brings something different. The Georgian stock means listed-building constraints and pipework that has been re-routed by generations of owners. The estates mean communal systems. The conversions mean several households sharing drainage that was only ever designed for one.',
    common: [
      'Listed Georgian property where earlier alterations are undocumented',
      'Estate blocks with communal risers and shared supply',
      'Terrace conversions with several flats on one stack',
      'Older systems in houses that were never fully modernised',
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
      'Ninja Plumbers covers Westminster, SW1 and W1. Boiler repair, blocked drains and commercial plumbing. Out-of-hours callouts. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers works mansion blocks, period conversions and commercial premises across Westminster, SW1 and W1, mostly by appointment rather than on the doorstep.',
    character:
      'Westminster is mansion blocks, period conversions and a high concentration of commercial property, much of it listed and nearly all of it managed rather than owner-occupied. In practice, access is usually the first problem and the plumbing itself the second: getting to a riser or a plant room means going through a managing agent, a porter and, more often than not, a booked slot. Work in occupied commercial premises almost always has to happen outside trading hours.',
    common: [
      'Mansion block risers reached through managing agents and porters',
      'Listed and conservation constraints across most of the stock',
      'Commercial premises needing out-of-hours attendance',
      'Leaks presenting several floors below where they started',
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
      'Ninja Plumbers covers Sydenham, SE26 and towards Forest Hill. Boiler repair, blocked drains and bathroom installation. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers Sydenham, SE26 and the streets towards Forest Hill and Crystal Palace, where sloping ground shapes a lot of the work.',
    character:
      'Sydenham is large Victorian housing on sloping ground, much of it long since divided into flats. That combination is what matters here: a house built for one household now serving three or four, on a slope, with both drainage and pressure compromised by the split. Top-floor flats in particular tend to have pressure problems that no amount of boiler work is going to fix, simply because the real cause is the height of the building, not the heating.',
    common: [
      'Large houses divided into flats on drainage sized for one',
      'Top-floor pressure problems caused by height rather than the boiler',
      'Sloping plots where drain falls were improvised during conversion',
      'Shared stacks where one blockage affects several flats',
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
      'Ninja Plumbers covers Notting Hill and W11. Boiler repair, blocked drains and bathroom installation in period property. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers stucco terraces, garden square property and converted flats across Notting Hill and W11.',
    character:
      'Notting Hill is stucco terraces and garden squares, a large share of it listed or in a conservation area, and much of it divided into flats decades ago. Basement and lower-ground conversions are common, and they bring pumped drainage with them, which needs looking after rather than being left to run itself. As elsewhere in the borough, the real constraint on any work touching the outside of the building is what is permitted, not simply what is technically possible.',
    common: [
      'Listed and conservation constraints on flues and external pipework',
      'Basement conversions relying on pumped drainage',
      'Converted flats sharing original stacks',
      'Period pipework altered repeatedly and rarely documented',
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
    metaTitle: 'Plumber in Eltham | SE9 Village & Progress Estate | Ninja Plumbers',
    metaDescription:
      'Ninja Plumbers covers Eltham, SE9 and the Progress Estate. Boiler repair and servicing, blocked drains and bathrooms. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers interwar semis, estate housing and the older property around the village across Eltham and SE9.',
    character:
      'Eltham is predominantly interwar and early twentieth-century suburban housing, including the Progress Estate, which was built to an unusually high standard for its date and remains largely intact today. Most of the stock is family housing on decent-sized plots, and the recurring work follows a familiar pattern here: heating systems that have been added to rather than replaced, and drainage runs long enough that a blockage rarely turns up where the householder first expects it.',
    common: [
      'Interwar semis on heating systems extended over decades',
      'Long external drain runs across larger suburban plots',
      'Older cylinders and vented systems still in service',
      'Conservation-area constraints on parts of the Progress Estate',
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
    metaTitle: 'Plumber in East Dulwich | SE22 Side-Return Extensions | Ninja Plumbers',
    metaDescription:
      'Ninja Plumbers covers East Dulwich, SE22 and Peckham Rye. Boiler repair, blocked drains and bathroom installation. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers East Dulwich, SE22 and the streets running towards Peckham Rye, and side-return extensions come up constantly in the work.',
    character:
      'East Dulwich is street after street of late Victorian terraces, and an unusually high proportion have had side-return extensions and loft conversions built in the last twenty years. That is the defining feature for plumbing here: waste runs added to accommodate a new kitchen or a loft bathroom, often at a fall that works fine until, one day, it does not, and heating systems asked to serve a house that has grown by a third since the original boiler went in.',
    common: [
      'Side-return extensions with waste added to existing runs',
      'Loft bathrooms added without resizing the heating system',
      'Kitchen relocations that moved the boiler and extended the pipework',
      'Terraces on shared stacks where the neighbour is part of the problem',
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
      'Ninja Plumbers covers Leytonstone and E11. Boiler repair, blocked drains and bathroom installation. Emergency callouts. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers terraces, conversions and the newer flats around the station across Leytonstone and E11.',
    character:
      'Leytonstone is largely Victorian and Edwardian terraced, with a strong recent history of extension and conversion as the area has filled up. The work that follows from that is fairly predictable: waste added for new kitchens and bathrooms, boilers moved during extensions with the pipework lengthened rather than properly renewed, and condensate runs put outside where they freeze solid on the first hard frost of the year.',
    common: [
      'Condensate pipes run externally during extension work and freezing in winter',
      'Boilers relocated during kitchen extensions with extended pipework',
      'Terraces converted into upper and lower flats sharing drainage',
      'Bathrooms added where the original waste run was not designed for them',
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
      'Ninja Plumbers covers Leyton and E10. Boiler repair, blocked drains and bathroom installation for houses and shared flats. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers terraces, shared houses and converted flats across Leyton and E10, most of it dense Victorian terracing.',
    character:
      'Leyton is dense Victorian terracing with a high proportion of shared houses and flat conversions, and drainage that was laid for a fraction of the occupancy it now carries. Where a house has been split, the second and third bathroom are usually hung off a stack sized for just one, which is fine until several people are up and using it at once. Rear extensions have added waste runs of varying quality on top of that, not all of them done to the same standard.',
    common: [
      'Extra bathrooms discharging into a stack sized for one household',
      'Shared houses where the person reporting the fault is not the person causing it',
      'Rear extensions with waste added at marginal falls',
      'Original pipework surviving behind more recent work',
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
      'Ninja Plumbers covers Hampstead and NW3. Boiler repair and servicing, blocked drains and bathroom installation. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers period houses, mansion flats and converted property across Hampstead and NW3.',
    character:
      'Hampstead has one of the highest concentrations of listed and conservation-area property in London, and it also sits on a hill, and both facts matter to the work. Listing constrains where a flue can terminate and what may be run externally, so those questions have to be settled before choosing equipment rather than after. The topography adds tall houses where the top floor sits a long way above the water source, which means pressure complaints that are really about height rather than about the boiler.',
    common: [
      'Listed and conservation constraints on flues and external pipework',
      'Top-floor pressure problems in tall houses on the hill',
      'Basement conversions relying on pumped drainage',
      'Period pipework altered by successive owners and rarely recorded',
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
      'Ninja Plumbers covers Crystal Palace, SE19, Sydenham and Anerley. Boiler repair, blocked drains and bathroom installation. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers Crystal Palace, SE19 and the streets running down towards Sydenham and Anerley, most of it built on a steep slope.',
    character:
      'Crystal Palace sits on one of the highest points in south London, and the ground falls away sharply in every direction from it. Large Victorian houses run down those slopes, most of them now divided into flats. Height above the mains and height between storeys both work against water pressure here, which is exactly why pumped and pressurised systems are so common. The area also straddles five different boroughs, which matters more for working out who is responsible for a drain than it does for the plumbing itself.',
    common: [
      'Weak pressure at the top of tall houses on high ground',
      'Pumped and pressurised systems fitted to compensate',
      'Steeply sloping plots where drainage falls were improvised',
      'Large houses divided into flats on the original stack',
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
    metaTitle: 'Plumber in Catford | SE6 Drainage Specialists | Ninja Plumbers',
    metaDescription:
      'Ninja Plumbers covers Catford and SE6. Blocked drains, boiler repair and bathroom installation. Emergency callout. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers terraces, estate property and converted flats across Catford and SE6, and drainage is usually the first thing people call about.',
    character:
      'Catford is Victorian and Edwardian terraces alongside substantial post-war estate housing, with the River Ravensbourne running through it, which is worth knowing because parts of the area have a genuine surface water and flooding history rather than a theoretical one. Low-lying property here is more exposed to drainage backing up in heavy rain than most of London manages to be, and that changes what an overflowing gully actually means when you see one.',
    common: [
      'Surface water and drainage backing up in heavy rain on low-lying streets',
      'Estate property with communal risers and shared supply',
      'Victorian terraces on ageing original drainage',
      'Conversions where several flats share one stack',
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
      'Ninja Plumbers covers Canary Wharf and E14. Boiler repair, blocked drains and commercial plumbing in towers and blocks. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers residential towers, riverside flats and commercial premises across Canary Wharf and E14.',
    character:
      'Canary Wharf is almost entirely towers and modern blocks, which makes it the least typical plumbing environment we work in across London. Most flats have no boiler at all, since heating and hot water come from a communal network through a heat interface unit, so a loss of hot water is a network question before it is ever a flat question. Everything else follows from the building rather than the individual property: concierge access, booked slots, and isolation that happens at the riser rather than under a sink.',
    common: [
      'Heat interface units rather than individual boilers in most flats',
      'Communal networks where several flats lose hot water together',
      'Concierge and building management access arranged in advance',
      'Isolation at the riser rather than inside the property',
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
      'Ninja Plumbers covers Blackheath, SE3, the heath and the village. Boiler repair and servicing, blocked drains and bathrooms. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers Georgian and Victorian property around the heath and the village across Blackheath and SE3.',
    character:
      'Blackheath has a high concentration of Georgian and early Victorian property, much of it listed and most of the village sitting in a conservation area. That status is the working constraint on most jobs: anything altering the outside of the building, a flue terminal, external pipework, a soil stack, needs establishing before the job starts rather than worked out halfway through. The houses tend to be large and old too, which means long pipe runs and successive layers of alteration that no surviving drawing records.',
    common: [
      'Listed and conservation constraints around the village and the heath',
      'Long pipe runs in large period houses',
      'Undocumented alterations from successive owners',
      'Older vented systems and cylinders still in service',
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
      'Ninja Plumbers covers Tottenham and N17. Boiler repair, blocked drains and bathroom installation. Emergency callouts. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers terraces, estate property and converted flats across Tottenham and N17.',
    character:
      'Tottenham is Victorian and Edwardian terracing with a high proportion converted into flats, alongside significant estate housing and a growing amount of recent development around the High Road. Most of the work is in the conversions: houses divided decades ago, with drainage and heating that were never properly reworked for the split, and a second bathroom added at some later point onto a stack that was never designed to take it.',
    common: [
      'Terraces divided into flats without reworking drainage or heating',
      'Estate property with communal risers and shared supply',
      'Second bathrooms added onto stacks sized for one household',
      'Newer development around the High Road on communal systems',
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
      'Ninja Plumbers covers Stratford, E15 and E20. Boiler repair, blocked drains and bathroom installation. Emergency callouts. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers older terraces and the newer blocks around the park across Stratford, E15 and E20.',
    character:
      'Stratford splits sharply between the older housing in E15 and the post-Olympic development in E20, and they are genuinely different jobs. The older terraces and estate property behave much like the rest of east London: ageing pipework, conversions, shared stacks. The newer blocks, on the other hand, run communal heat networks with a heat interface unit in each flat, managed access, and faults that frequently sit in the building rather than in any one property.',
    common: [
      'Heat interface units in the newer E20 blocks rather than boilers',
      'Communal heat networks where several flats are affected together',
      'Older E15 terraces and estate property on ageing pipework',
      'Building management access in the newer developments',
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
      'Ninja Plumbers covers Southwark, SE1 and Bankside. Boiler repair, blocked drains and commercial plumbing. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers warehouse conversions, estate property and commercial premises across Southwark and SE1.',
    character:
      'Southwark and Bankside are an unusual mix: converted warehouses and wharf buildings, large estates, and a dense concentration of commercial property, often within a few streets of each other. The warehouse conversions are the distinctive part of the area, being deep-plan buildings where a flat can sit a long way from any external wall, which constrains flue routing and often means long service runs to reach it. Much of the commercial work has to happen outside trading hours, whatever the job.',
    common: [
      'Warehouse conversions where flats sit far from any external wall',
      'Constrained flue routing in deep-plan converted buildings',
      'Estate property with communal risers',
      'Commercial premises needing out-of-hours attendance',
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
      'Ninja Plumbers covers Kilburn and NW6. Boiler repair, blocked drains and bathroom installation in converted flats. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers converted flats, mansion blocks and terraced property across Kilburn and NW6.',
    character:
      'Kilburn is large Victorian and Edwardian houses, the great majority converted into flats a long time ago, with mansion blocks lining the main roads. Both share the same underlying issue: a building designed for one household now running several, on original stacks and often with heating that was split up rather than properly replaced. Boilers here tend to sit in whatever cupboard the original conversion allowed, rather than one chosen with servicing in mind.',
    common: [
      'Houses converted into flats on the original stack and supply',
      'Mansion blocks with communal risers and tanks',
      'Boilers in conversion cupboards with poor servicing access',
      'Heating systems split between flats rather than replaced',
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
      'Ninja Plumbers covers Highgate and N6. Boiler repair and servicing, blocked drains and bathroom installation. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers period houses on the hill and converted flats below it across Highgate and N6.',
    character:
      'Highgate is period property on one of the steepest hills in London, with a large conservation area and a great deal of listed stock around the village. The two constraints compound each other: listing limits what can be run or terminated externally, while the topography means tall houses where the top floor has very little head of water above it. Pressure complaints here are usually a matter of geometry rather than equipment, and no boiler upgrade on its own will fix that.',
    common: [
      'Listed and conservation constraints around the village',
      'Top-floor pressure limited by height rather than by the boiler',
      'Large period houses with long pipe runs and layered alterations',
      'Conversions sharing original stacks',
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
      'Ninja Plumbers covers Finchley, N3 and N12. Boiler repair and servicing, blocked drains and bathroom installation. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers suburban family houses and converted flats across Finchley, N3 and N12.',
    character:
      'Finchley is predominantly interwar suburban housing, semis and detached family homes on reasonable plots, most of them still whole rather than split into flats. The recurring work follows on from that: heating systems sized for the house as it was originally built, then asked to cover a loft conversion and a rear extension added since, plus long external drain runs where a blockage is rarely anywhere near the house itself.',
    common: [
      'Loft conversions and extensions added without resizing the system',
      'Interwar semis on their second or third boiler',
      'Long external drain runs across suburban plots',
      'Older cylinders and vented systems still in service',
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
      'Ninja Plumbers covers Chingford and E4. Boiler repair and servicing, blocked drains and bathroom installation. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers suburban houses on the edge of Epping Forest across Chingford and E4.',
    character:
      'Chingford is suburban family housing on the northern edge of London, backing onto Epping Forest. Plots are larger than inner London and the housing is mostly interwar and post-war, still in single occupation rather than converted. That combination brings long external drain runs, mature trees close to older clay drainage where root ingress is a genuine recurring cause rather than an occasional one, and unheated garages and outbuildings where pipes freeze the first time it turns properly cold.',
    common: [
      'Root ingress into older clay drainage near mature trees',
      'Long external drain runs across larger plots',
      'Burst pipes in unheated garages and outbuildings after a freeze',
      'Interwar and post-war heating systems extended over the years',
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
