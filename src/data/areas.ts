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
    metaTitle: 'Plumber in Fulham | Local SW6 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Fulham, SW6. Our office is on Fulham High Street. Emergency callout, boiler repair, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Our office is on Fulham High Street, so this is home ground. Emergency callouts, boiler work, drainage and bathroom installation across SW6 and the streets around it.',
    character:
      'Fulham is dense Victorian and Edwardian terraces, a great many of them converted into flats. That combination throws up two recurring problems: original pipework that has been extended and re-routed by successive owners, and shared soil stacks where a blockage in one flat shows up in another. Basement and lower-ground conversions are common here too, which means pumped waste and sump systems that need looking at when they fail.',
    common: [
      'Shared soil stacks in converted flats',
      'Original lead and iron pipework still in place behind later work',
      'Basement conversions with pumped waste and sump pumps',
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
    metaTitle: 'Plumber in Croydon | Emergency & Boiler Repair | Tamesis Plumbers',
    metaDescription:
      'Plumber covering Croydon and CR postcodes. Emergency callout, boiler repair and installation, blocked drains and bathrooms. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Croydon and the CR postcodes, for houses, flats and commercial premises.',
    character:
      'Croydon covers an unusually wide range of building types for one borough: interwar semis and 1930s estates through to the town centre towers and a lot of recent flat conversion above shops. The suburban stock tends to bring heating and drainage work, with long external runs and older cast iron drains; the town centre flats bring communal system problems where one fault affects several properties.',
    common: [
      'Ageing central heating in 1930s semis',
      'External drain and gully blockages on longer suburban runs',
      'Communal systems in town centre blocks',
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
    metaTitle: 'Plumber in Bromley | BR1 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber covering Bromley and BR postcodes. Emergency plumbing, boiler repair, drain unblocking and bathroom fitting. Call 020 3488 3737.',
    intro:
      'Plumbing and heating across Bromley and the BR postcodes, from emergency callouts through to planned bathroom work.',
    character:
      'Bromley is largely suburban family housing — interwar and post-war semis and detached houses, many with gardens and outbuildings. Plumbing here skews toward heating systems, hot water cylinders and outside drainage rather than the flat-conversion problems of inner London. Larger properties frequently still run vented systems with a loft tank, which is a different job from a modern combi.',
    common: [
      'Vented systems with loft tanks and hot water cylinders',
      'Garden drainage, gullies and external blockages',
      'Outside taps and garden water supply',
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
    metaTitle: 'Plumber in Wandsworth | SW18 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Wandsworth and the SW postcodes. Emergency callout, boiler repair, leak detection and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Wandsworth and the surrounding SW postcodes. A short run from our Fulham office.',
    character:
      'Wandsworth is dominated by Victorian terraces, a large share of them extended at the back and converted into flats. Side-return and rear extensions are extremely common here, and they frequently mean pipework routed through new walls with limited access. Riverside new-build blocks along the Thames are a different job again, usually with communal heating and pressurised systems.',
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
    metaTitle: 'Plumber in Harrow | Boiler & Heating Engineers | Tamesis Plumbers',
    metaDescription:
      'Plumber covering Harrow and HA postcodes. Boiler repair and installation, emergency plumbing, drains and bathrooms. Call 020 3488 3737.',
    intro:
      'Plumbing and heating across Harrow and the HA postcodes, for family homes, flats and commercial premises.',
    character:
      'Harrow is classic Metroland: largely 1930s semi-detached housing built as the Metropolitan line pushed out, with later infill. That means a lot of properties on their second or third heating system, original galvanised or iron pipework in places, and hot water cylinders in airing cupboards rather than combis. Loft conversions are widespread, which often adds bathrooms on a floor the original system was never sized for.',
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
    metaTitle: 'Plumber in Balham | SW12 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Balham, SW12. Emergency callout, boiler repair, blocked drains, leak detection and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Balham and SW12, for houses, flat conversions and the shops along the high road.',
    character:
      'Balham is late-Victorian terraced housing, much of it split into upper and lower flats. The single most common call here is the shared drainage that comes with that split: one soil stack, two households, and a blockage that presents in whichever property is lower. Loft and rear extensions are widespread, adding bathrooms and pipe runs to systems that were not designed for them.',
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
    metaTitle: 'Plumber in Islington | N1 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Islington and N1. Emergency plumbing, boiler repair, leak detection and bathrooms in period and listed property. Call 020 3488 3737.',
    intro:
      'Plumbing and heating across Islington and the N1 postcodes, including period property, conversions and commercial premises.',
    character:
      'Islington has some of the oldest surviving housing stock we work on — Georgian and early Victorian terraces, a good deal of it in conservation areas or listed. Work here often has constraints attached: limited routes for new pipework, restrictions on what can be altered, and floors that should not be lifted casually. Alongside that sits a lot of recent commercial and mixed-use conversion around the City fringe.',
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
    metaTitle: 'Plumber in Hackney | E8 & E9 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber covering Hackney, E8, E9 and N16. Emergency callout, boiler repair, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Hackney, for flats, converted terraces, warehouse conversions and commercial premises.',
    character:
      'Hackney mixes Victorian terraces, large post-war estates and warehouse conversions in a way few boroughs do, and each brings a different sort of job. Estates and blocks mean communal systems where one fault affects many flats. Warehouse conversions frequently have long horizontal waste runs and exposed services, which are easier to inspect but prone to falls that are too shallow.',
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
    metaTitle: 'Plumber in Ealing | W5 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Ealing and the W5 postcodes. Emergency plumbing, boiler repair and installation, drains and bathrooms. Call 020 3488 3737.',
    intro:
      'Plumbing and heating across Ealing and the W postcodes, for family houses, flats and commercial premises.',
    character:
      'Ealing runs from large Edwardian and interwar family houses through to substantial purpose-built flat blocks from the 1930s onward. The bigger houses often have long pipe runs and multiple bathrooms added over time, which is where pressure and balancing problems come from. The purpose-built blocks tend to have communal cold water storage and risers, so a problem is rarely confined to one flat.',
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
    metaTitle: 'Plumber in Clapham | SW4 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Clapham, SW4. Emergency callout, boiler repair, leak detection, drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Clapham and SW4, for houses, flat shares and converted terraces.',
    character:
      'Clapham is largely Victorian terraces, with an unusually high proportion in multiple occupation or split into flats. Heavy use is the theme: bathrooms and kitchens serving more people than the original system anticipated, showers running back to back, and waste that blocks more often as a result. Landlord and letting agent work is a significant part of what we do here.',
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
    metaTitle: 'Plumber in Wimbledon | SW19 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Wimbledon, SW19 and SW20. Emergency plumbing, boiler repair, bathroom installation and drainage. Call 020 3488 3737.',
    intro:
      'Plumbing and heating across Wimbledon, SW19 and SW20, for family houses, period property and flats.',
    character:
      'Wimbledon covers larger detached and semi-detached family housing toward the Village and the Common, and denser Victorian terraces and flats nearer the town centre and station. The larger properties typically run vented systems with cylinders and multiple bathrooms, where pressure and balancing matter. Period property near the Common often carries conservation constraints on external work.',
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
    metaTitle: 'Plumber in Brixton | SW9 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Brixton, SW2 and SW9. Emergency callout, boiler repair, blocked drains and commercial plumbing. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Brixton, SW2 and SW9, for flats, converted terraces and the many food businesses in the area.',
    character:
      'Brixton is a mix of Victorian terraces split into flats, post-war estates, and a dense concentration of restaurants, bars and food businesses around the market and the main roads. That last group brings commercial kitchen work — grease-laden waste, drains that block on a schedule, and jobs that have to happen outside trading hours or not at all.',
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
    metaTitle: 'Plumber in Tooting | SW17 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Tooting, SW17. Emergency callout, boiler repair, blocked drains and bathrooms across Tooting Bec and Tooting Broadway. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Tooting, SW17 and the streets running off the Broadway, for houses, converted flats and shared homes.',
    character:
      'Tooting is street after street of Victorian and Edwardian terraces, and an unusually high proportion of them are now shared houses or split into flats. That matters plumbing-wise because bathrooms get added where the drainage was never designed to take them — a second or third bathroom hung off a stack sized for one, and a back addition carrying waste it was not built for. The Broadway end also has a dense run of restaurants and takeaways above and below flats.',
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
    metaTitle: 'Plumber in Lewisham | SE13 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Lewisham, SE13. Emergency callout, boiler repair, blocked drains and bathroom installation across Hither Green and Ladywell. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Lewisham, SE13 and out towards Hither Green and Ladywell, for houses, flats and blocks.',
    character:
      'Lewisham puts three quite different kinds of building on the same street map: Victorian terraces towards Ladywell and Hither Green, large post-war estates, and the town centre towers. The terraces bring the usual back-addition and original-pipework work. The estates and towers bring communal systems, where the fault is rarely in the flat that reported it and getting to the riser matters more than getting to the kitchen.',
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
    metaTitle: 'Plumber in Streatham | SW16 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Streatham, SW16. Emergency callout, boiler repair, blocked drains and bathroom installation across Streatham Common and Norbury. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Streatham, SW16 and down towards Norbury and Streatham Vale.',
    character:
      'Streatham has a lot of large late-Victorian and Edwardian houses that were divided into flats decades ago, and long runs of 1930s mansion blocks along the High Road. Both share a problem: a system originally designed for one household now serving four or five, with pipework that has been added to rather than replaced. Mansion blocks in particular tend to have communal cold water tanks and risers that nobody has looked at in years.',
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
    metaTitle: 'Plumber in Muswell Hill | N10 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Muswell Hill, N10. Emergency callout, boiler repair, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Muswell Hill and N10, for the large Edwardian family houses the area is known for.',
    character:
      'Muswell Hill is one of the most consistently Edwardian parts of London — large family houses, most still whole rather than converted. The recurring work here is a consequence of that: big houses with long pipe runs, original systems that have been extended into loft conversions and rear extensions, and heating that struggles to reach the top floor because the system was never resized when the house grew. Bathrooms added into lofts are a particularly common source of pressure complaints.',
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
    metaTitle: 'Plumber in Hammersmith | W6 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Hammersmith, W6. Emergency callout, boiler repair, blocked drains, bathrooms and commercial plumbing. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Hammersmith and W6, for flats, riverside blocks and the offices around the Broadway.',
    character:
      'Hammersmith runs from Victorian terraces in the streets behind the Broadway to riverside mansion blocks and a good deal of post-war and modern office space. The mansion blocks are the distinctive part: communal stacks and risers where a blockage on a lower floor is reported by a flat several storeys up, and access that has to be arranged with a managing agent rather than a tenant. The commercial side brings washroom and kitchen work on office hours.',
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
    metaTitle: 'Plumber in Greenwich | SE10 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Greenwich, SE10. Emergency callout, boiler repair, blocked drains and bathrooms across the town centre and the Peninsula. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Greenwich and SE10, from the Georgian streets around the town centre out to the Peninsula.',
    character:
      'Greenwich is two plumbing jobs in one postcode. The town centre is Georgian and early Victorian, much of it in a conservation area and some of it listed, which constrains where pipework and flues can go and rules out the obvious external solution more often than not. The Peninsula is the opposite: recent towers on communal heat networks, where the flat has a heat interface unit rather than a boiler and the fault is as likely to be in the network as in the property.',
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
    metaTitle: 'Plumber in Battersea | SW11 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Battersea, SW11. Emergency callout, boiler repair, blocked drains and bathroom installation across Battersea and Nine Elms. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Battersea, SW11 and Nine Elms, for Victorian terraces and the newer riverside blocks alike.',
    character:
      'Battersea splits between the Victorian terraces in the streets off the park, many now flats, and the Nine Elms and Power Station developments along the river. The new blocks are worth calling out separately: most run on communal heat networks with a heat interface unit in each flat instead of a boiler, so a "no hot water" call there is a different diagnosis entirely, and the work usually needs booking through building management.',
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
    metaTitle: 'Plumber in Walthamstow | E17 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Walthamstow, E17. Emergency callout, boiler repair, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Walthamstow and E17, for terraces, Warner maisonettes and converted flats.',
    character:
      'Walthamstow is largely Victorian and Edwardian terraced, with one local feature worth knowing about: the Warner properties, purpose-built as pairs of maisonettes with their own front doors. They look like houses but they are two dwellings sharing drainage and often a roof, so a leak or a blockage is frequently not the responsibility of the person who reported it. The rest of the stock has seen heavy extension work over the last decade.',
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
    metaTitle: 'Plumber in Putney | SW15 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Putney, SW15. Emergency callout, boiler repair, blocked drains and bathroom installation across Putney and Roehampton. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Putney, SW15 and out to Roehampton, for terraces, riverside blocks and estate properties.',
    character:
      'Putney runs from riverside mansion blocks and Victorian terraces near the bridge out to the post-war estates at Roehampton. The riverside blocks bring communal stacks and the access arrangements that go with them. Roehampton brings estate properties on communal heating and original pipework. Properties closest to the river are also the ones where basement and lower-ground rooms need pumped waste rather than gravity drainage.',
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
    metaTitle: 'Plumber in Peckham | SE15 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Peckham, SE15. Emergency callout, boiler repair, blocked drains and commercial plumbing across Peckham and Nunhead. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Peckham, SE15 and Nunhead, for converted flats, estate properties and the food businesses along Rye Lane.',
    character:
      'Peckham mixes Victorian terraces — most now split into flats — with substantial ex-local-authority estates and a dense strip of food and drink businesses along Rye Lane. The estates bring communal riser work. The conversions bring the familiar problem of several flats on drainage designed for one household. The commercial strip brings grease-related blockages and jobs that can only happen when the kitchen is closed.',
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
    metaTitle: 'Plumber in Kensington | W8 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Kensington, W8. Emergency callout, boiler repair, blocked drains and bathroom installation across Kensington and Holland Park. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Kensington, W8 and Holland Park, for stucco terraces, mansion blocks and garden square properties.',
    character:
      'Kensington is stucco terraces, garden squares and mansion blocks, a large share of it listed or in a conservation area. That is the defining constraint: flue positions, external pipework and soil stack alterations all need thinking about before work starts rather than after. Deep basement conversions are common and bring pumped drainage with them, which is a maintained system rather than a fit-and-forget one.',
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
    metaTitle: 'Plumber in Dulwich | SE21 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Dulwich, SE21. Emergency callout, boiler repair, blocked drains and bathrooms across Dulwich Village and West Dulwich. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Dulwich, SE21 and out to East and West Dulwich, for large period family homes.',
    character:
      'Dulwich is mostly large Georgian, Victorian and interwar family housing on generous plots, much of it still in single occupation. The practical consequences are long pipe runs, sizeable heating systems that are expensive to leave running badly, and drainage that goes a long way before it reaches the sewer — so blockages tend to be further from the house than people expect. A good deal of the area sits under the Dulwich Estate scheme of management, which can affect what is permitted externally.',
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
    metaTitle: 'Plumber in Chelsea | SW3 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Chelsea, SW3. Emergency callout, boiler repair, blocked drains and bathrooms across Chelsea, Brompton and Knightsbridge. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Chelsea, SW3 and the streets towards Brompton and Knightsbridge.',
    character:
      'Chelsea is Georgian and Victorian townhouses, mews properties and mansion blocks, with a high proportion listed. Townhouses here are tall and narrow, which puts the plant a long way from the top-floor bathroom and makes pressure and flow a recurring complaint. Basement excavation is common and brings pumped drainage that needs servicing. Mews properties have their own quirk: limited external routing options and awkward access for anything that will not fit down the mews.',
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
    metaTitle: 'Plumber in Acton | W3 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Acton, W3. Emergency callout, boiler repair, servicing, blocked drains and bathrooms across North, South and East Acton. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Acton and W3, from the Victorian terraces in South Acton to the new blocks going up around North Acton.',
    character:
      'Acton has changed faster than most of west London and its plumbing reflects that. The older streets are Victorian and Edwardian terraces, a high proportion converted into flats or run as shared houses, with drainage that was designed for a fraction of the occupancy it now carries. Around North Acton and Park Royal the picture is entirely different: recent high-density blocks on communal systems, where a fault is a building matter rather than a flat one and access goes through management.',
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
    metaTitle: 'Plumber in Enfield | EN1 & EN2 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Enfield, EN1 to EN3. Emergency callout, boiler repair, servicing, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Enfield and the EN postcodes, for suburban houses, flats and the estates in between.',
    character:
      'Enfield is mostly interwar and post-war suburban housing on generous plots, with older stock around Enfield Town and Forty Hill. Big plots mean long external drain runs, so a blockage is frequently several chambers from the house rather than under the kitchen. It is also far enough out that garages, outbuildings and loft spaces go unheated through winter, which is where burst pipes start when a cold snap breaks.',
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
    metaTitle: 'Plumber in Barnet | EN5 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Barnet and EN5. Emergency callout, boiler repair, servicing, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Barnet, EN5 and the streets running down towards Whetstone and New Barnet.',
    character:
      'Barnet runs from the older centre of Chipping Barnet — where some of the stock is genuinely old and a good deal of it listed or in a conservation area — out to interwar suburbs and post-war estates. The practical split is between period property where flue and external pipework need thinking about, and larger suburban houses where the recurring work is heating that has never been resized for extensions added over the decades.',
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
    metaTitle: 'Plumber in Woolwich | SE18 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Woolwich, SE18. Emergency callout, boiler repair, blocked drains and bathroom installation across Woolwich and Royal Arsenal. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Woolwich and SE18, from the Victorian terraces to the new riverside blocks at the Arsenal.',
    character:
      'Woolwich has been rebuilt around itself. Victorian terraces and substantial post-war estates sit alongside a decade of new riverside development at Royal Arsenal, and the three behave completely differently. The estates bring communal risers and shared heating. The new blocks bring heat interface units, building management and access arranged in advance. The terraces bring the ordinary work of old pipework and back additions.',
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
    metaTitle: 'Plumber in Forest Hill | SE23 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Forest Hill, SE23. Emergency callout, boiler repair, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Forest Hill, SE23 and the hill up towards Honor Oak.',
    character:
      'Forest Hill is built on a genuinely steep hill, and that shows up in the plumbing more than people expect. Large Victorian and Edwardian houses run up the slope, many divided into flats, and the height between a loft tank and a top-floor bathroom is often not enough to give decent pressure — so pumps and pressurised systems are common here rather than optional. Gravity drainage across sloping plots also behaves differently from flat ground.',
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
    metaTitle: 'Plumber in Chiswick | W4 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Chiswick, W4. Emergency callout, boiler repair, servicing, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Chiswick and W4, for terraces, riverside property and the Bedford Park conservation area.',
    character:
      'Chiswick is largely late Victorian and Edwardian, and a substantial part of it — Bedford Park in particular, one of the earliest garden suburbs — sits in a conservation area with a good deal of listed stock. That constrains flue positions and external pipework in a way most of west London does not. Closer to the river, lower-ground rooms and basements need pumped drainage rather than gravity, and flooding risk is a live consideration rather than a theoretical one.',
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
    metaTitle: 'Plumber in Camberwell | SE5 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Camberwell, SE5. Emergency callout, boiler repair, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Camberwell and SE5, for Georgian and Victorian houses, converted flats and estate property.',
    character:
      'Camberwell has an unusual spread for one area: genuinely Georgian terraces around Camberwell Grove, a great deal of Victorian housing now in flats, and large post-war estates, all within a short walk. The Georgian stock brings listed-building constraints and pipework that has been re-routed by generations of owners. The estates bring communal systems. The conversions bring several households on drainage designed for one.',
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
    metaTitle: 'Plumber in Westminster | SW1 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Westminster, SW1 and W1. Emergency callout, boiler repair, blocked drains and commercial plumbing. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Westminster, SW1 and W1, for mansion blocks, period conversions and commercial premises.',
    character:
      'Westminster is mansion blocks, period conversions and a high concentration of commercial property, much of it listed and nearly all of it managed rather than owner-occupied. The practical consequence is that access is the first problem and the plumbing is the second: getting to a riser or a plant room means a managing agent, a porter and usually a booked slot. Work in occupied commercial premises has to happen outside trading hours.',
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
    metaTitle: 'Plumber in Sydenham | SE26 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Sydenham, SE26. Emergency callout, boiler repair, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Sydenham, SE26 and the streets towards Forest Hill and Crystal Palace.',
    character:
      'Sydenham is large Victorian housing on sloping ground, much of it long since divided into flats. The combination is the thing that matters: a house built for one household now serving three or four, on a slope, with drainage and pressure both compromised by the split. Top-floor flats in particular tend to have pressure problems that no amount of boiler work will solve, because the cause is height rather than heat.',
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
    metaTitle: 'Plumber in Notting Hill | W11 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Notting Hill, W11. Emergency callout, boiler repair, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Notting Hill and W11, for stucco terraces, garden square property and converted flats.',
    character:
      'Notting Hill is stucco terraces and garden squares, a large share of it listed or in a conservation area, and much of it divided into flats decades ago. Basement and lower-ground conversions are common and bring pumped drainage, which is a maintained system rather than something that looks after itself. As elsewhere in the borough, the constraint on any work touching the outside of the building is what is permitted rather than what is possible.',
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
    metaTitle: 'Plumber in Eltham | SE9 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Eltham, SE9. Emergency callout, boiler repair, servicing, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Eltham and SE9, for interwar semis, estate housing and the older property around the village.',
    character:
      'Eltham is predominantly interwar and early twentieth-century suburban housing, including the Progress Estate, which was built to an unusually high standard for its date and remains largely intact. Most of the stock is family housing on decent plots, so the recurring work is heating systems that have been added to rather than replaced, and drainage runs long enough that a blockage is rarely where the householder expects it.',
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
    metaTitle: 'Plumber in East Dulwich | SE22 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in East Dulwich, SE22. Emergency callout, boiler repair, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across East Dulwich, SE22 and the streets running towards Peckham Rye.',
    character:
      'East Dulwich is street after street of late Victorian terraces, and an unusually high proportion have had side-return extensions and loft conversions in the last twenty years. That is the defining feature for plumbing here: waste runs added to accommodate a new kitchen or a loft bathroom, often at a fall that works until it does not, and heating systems asked to serve a house that has grown by a third since the boiler went in.',
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
    metaTitle: 'Plumber in Leytonstone | E11 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Leytonstone, E11. Emergency callout, boiler repair, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Leytonstone and E11, for terraces, conversions and the newer flats around the station.',
    character:
      'Leytonstone is largely Victorian and Edwardian terraced, with a strong recent history of extension and conversion as the area has filled up. The work that follows is predictable: waste added for new kitchens and bathrooms, boilers moved during extensions with pipework lengthened rather than renewed, and condensate runs put outside where they freeze in the first hard frost of the year.',
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
    metaTitle: 'Plumber in Leyton | E10 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Leyton, E10. Emergency callout, boiler repair, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Leyton and E10, for terraces, shared houses and converted flats.',
    character:
      'Leyton is dense Victorian terracing with a high proportion of shared houses and flat conversions, and drainage that was laid for a fraction of the occupancy it now carries. Where a house has been split, the second and third bathroom have usually been hung off a stack sized for one, which works until several people are up at the same time. Rear extensions have added waste runs of varying quality on top of that.',
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
    metaTitle: 'Plumber in Hampstead | NW3 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Hampstead, NW3. Emergency callout, boiler repair, servicing, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Hampstead and NW3, for period houses, mansion flats and converted property.',
    character:
      'Hampstead has one of the highest concentrations of listed and conservation-area property in London, and it sits on a hill. Both matter. Listing constrains where a flue can terminate and what may be run externally, so those questions come before choosing equipment rather than after. The topography means tall houses where the top floor is a long way above the water source, and pressure complaints that are about height rather than about the boiler.',
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
    metaTitle: 'Plumber in Crystal Palace | SE19 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Crystal Palace, SE19. Emergency callout, boiler repair, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Crystal Palace, SE19 and the streets running down towards Sydenham and Anerley.',
    character:
      'Crystal Palace sits on one of the highest points in south London, and the ground falls away sharply in every direction. Large Victorian houses run down those slopes, most divided into flats. Height above the mains and height between storeys both work against water pressure here, so pumped and pressurised systems are common. It also straddles five boroughs, which matters more for who is responsible for a drain than for the plumbing itself.',
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
    metaTitle: 'Plumber in Catford | SE6 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Catford, SE6. Emergency callout, boiler repair, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Catford and SE6, for terraces, estate property and converted flats.',
    character:
      'Catford is Victorian and Edwardian terraces alongside substantial post-war estate housing, with the River Ravensbourne running through it — which is worth knowing, because parts of the area have a genuine surface water and flooding history rather than a theoretical one. Low-lying property here is more exposed to drainage backing up in heavy rain than most of London, and that changes what an overflowing gully means.',
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
    metaTitle: 'Plumber in Canary Wharf | E14 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Canary Wharf, E14. Emergency callout, boiler repair, blocked drains and commercial plumbing. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Canary Wharf and E14, for residential towers, riverside flats and commercial premises.',
    character:
      'Canary Wharf is almost entirely towers and modern blocks, which makes it the least typical plumbing environment in London. Most flats have no boiler at all: heating and hot water come from a communal network through a heat interface unit, so a loss of hot water is a network question before it is a flat question. Everything else follows from the building rather than the property — concierge access, booked slots, and isolation that happens at the riser.',
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
    metaTitle: 'Plumber in Blackheath | SE3 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Blackheath, SE3. Emergency callout, boiler repair, servicing, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Blackheath and SE3, for Georgian and Victorian property around the heath and the village.',
    character:
      'Blackheath has a high concentration of Georgian and early Victorian property, much of it listed and most of the village in a conservation area. That is the working constraint: anything altering the outside — a flue terminal, external pipework, a soil stack — needs establishing before the job rather than during it. The houses are also large and old, which means long pipe runs and successive layers of alteration that no drawing records.',
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
    metaTitle: 'Plumber in Tottenham | N17 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Tottenham, N17. Emergency callout, boiler repair, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Tottenham and N17, for terraces, estate property and converted flats.',
    character:
      'Tottenham is Victorian and Edwardian terracing with a high proportion converted into flats, alongside significant estate housing and a growing amount of recent development around the High Road. The conversions are where most of the work is: houses divided decades ago, with drainage and heating that were never reworked for the split, and a second bathroom added at some later point onto a stack that was not designed for it.',
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
    metaTitle: 'Plumber in Stratford | E15 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Stratford, E15 and E20. Emergency callout, boiler repair, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Stratford, E15 and E20, from older terraces to the newer blocks around the park.',
    character:
      'Stratford splits sharply between the older housing in E15 and the post-Olympic development in E20, and they are different jobs. The older terraces and estate property behave like the rest of east London: ageing pipework, conversions, shared stacks. The newer blocks run communal heat networks with a heat interface unit in each flat, managed access, and faults that frequently sit in the building rather than the property.',
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
    metaTitle: 'Plumber in Southwark | SE1 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Southwark, SE1. Emergency callout, boiler repair, blocked drains and commercial plumbing. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Southwark and SE1, for warehouse conversions, estate property and commercial premises.',
    character:
      'Southwark and Bankside are an unusual mix: converted warehouses and wharf buildings, large estates, and a dense concentration of commercial property. The warehouse conversions are the distinctive part — deep-plan buildings where a flat can sit a long way from any external wall, which constrains flue routing and often means long service runs. Much of the commercial work has to happen outside trading hours.',
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
    metaTitle: 'Plumber in Kilburn | NW6 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Kilburn, NW6. Emergency callout, boiler repair, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Kilburn and NW6, for converted flats, mansion blocks and terraced property.',
    character:
      'Kilburn is large Victorian and Edwardian houses, the great majority converted into flats a long time ago, with mansion blocks along the main roads. Both share the same underlying issue: a building designed for one household now running several, on original stacks and often with heating that was split rather than replaced. Boilers tend to be in cupboards chosen by whoever did the conversion rather than by anyone who has to service them.',
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
    metaTitle: 'Plumber in Highgate | N6 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Highgate, N6. Emergency callout, boiler repair, servicing, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Highgate and N6, for period houses on the hill and converted flats below it.',
    character:
      'Highgate is period property on one of the steepest hills in London, with a large conservation area and a great deal of listed stock around the village. The two constraints compound: listing limits what can be run or terminated externally, and the topography means tall houses where the top floor has very little head above it. Pressure complaints here are usually geometry rather than equipment.',
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
    metaTitle: 'Plumber in Finchley | N3 & N12 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Finchley, N3 and N12. Emergency callout, boiler repair, servicing, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Finchley, N3 and N12, for suburban family houses and converted flats.',
    character:
      'Finchley is predominantly interwar suburban housing — semis and detached family homes on reasonable plots, most of them still whole rather than converted. The recurring work follows from that: heating systems sized for the house as built, then asked to cover a loft conversion and a rear extension added since, and long external drain runs where a blockage is rarely near the house.',
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
    metaTitle: 'Plumber in Chingford | E4 Plumbers | Tamesis Plumbers',
    metaDescription:
      'Plumber in Chingford, E4. Emergency callout, boiler repair, servicing, blocked drains and bathroom installation. Call 020 3488 3737.',
    intro:
      'Plumbing, heating and drainage across Chingford and E4, for suburban houses on the edge of Epping Forest.',
    character:
      'Chingford is suburban family housing on the northern edge of London, backing onto Epping Forest. Plots are larger than inner London and the housing is mostly interwar and post-war, still in single occupation. That means long external drain runs, mature trees close to older clay drainage — root ingress is a genuine recurring cause here rather than an occasional one — and unheated garages and outbuildings where pipes freeze.',
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
