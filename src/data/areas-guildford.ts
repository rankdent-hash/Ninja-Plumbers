// Town pages outside Greater London: Guildford and the towns around it,
// covered since Sept 2026 (see COVERED_COUNCILS in src/data/serviceArea.ts).
//
// Same shape and same rules as src/data/areas.ts, including its 140+ monthly
// searches bar for "plumber [town]" (Semrush UK, Sept 2026). Godalming (110),
// Camberley (90) and Dorking (90) are covered but fall under the bar, so they
// are listed on /areas-we-cover rather than given pages of their own.
//
// `character` is written from general knowledge of each town's building stock,
// the same basis as the London pages, and should be checked by someone who
// works these towns before being treated as authoritative. Nothing here
// promises a response time: engineers come from the Fulham base, and the
// pages say so plainly.
import type { Area } from './areas';

const FROM_FULHAM =
  'Our engineers come out from our base on Fulham High Street. Routine jobs are booked for a set time; for an emergency, ring and we will tell you honestly how soon someone can be with you, and talk you through making it safe in the meantime.';

export const guildfordAreas: Area[] = [
  {
    slug: 'guildford',
    name: 'Guildford',
    borough: 'Guildford',
    county: 'Surrey',
    region: 'outside',
    postcodes: ['GU1', 'GU2', 'GU3', 'GU4'],
    volume: 390,
    kd: 9,
    metaTitle: 'Plumber in Guildford | Boilers, Leaks & Drains | Ninja Plumbers',
    metaDescription:
      'Ninja Plumbers covers Guildford and the villages around it: boiler repair, leaks, blocked drains and bathroom fitting, priced first. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers Guildford and the villages around it, from the town centre out to Burpham, Merrow, Shalford, Worplesdon and Send. The same Gas Safe registered engineers and the same price-before-we-start approach we use across London.',
    character:
      'Guildford packs a lot of different building types into one town. Around the High Street there are listed and period buildings where pipe runs and flues have to work around the fabric rather than through it. Near the station and in Stoke there are Victorian and Edwardian terraces, and further out large interwar and post-war suburbs such as Merrow, Burpham and Onslow Village. Close to the university there are plenty of shared student houses, and in the surrounding villages older cottages with long supply runs. The water is hard, so limescale is a steady theme: in combi boilers, cylinders, shower valves and taps.',
    common: [
      'Limescale in combi boilers, hot water cylinders and shower valves from the hard local water',
      'Annual gas safety certificates for landlords of shared student houses',
      'Original heating systems in 1950s–70s suburban houses reaching the end of their life',
      'Period and listed properties where pipework and flues need careful routing',
    ],
    nearby: ['woking', 'farnham', 'aldershot'],
    note: FROM_FULHAM + ' We work on gas, not oil, so off-grid oil boilers in the villages are not something we take on.',
  },
  {
    slug: 'woking',
    name: 'Woking',
    borough: 'Woking',
    county: 'Surrey',
    region: 'outside',
    postcodes: ['GU21', 'GU22'],
    volume: 210,
    kd: 12,
    metaTitle: 'Plumber in Woking | GU21 & GU22 | Ninja Plumbers',
    metaDescription:
      'Ninja Plumbers covers Woking, Knaphill, Horsell and Pyrford: boiler repair, leaks, drains and bathrooms, with the price agreed first. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers Woking and the areas around it, including Knaphill, Horsell, Goldsworth Park, Sheerwater and Pyrford, for everything from a dripping tap to a new boiler.',
    character:
      'Woking is mostly commuter housing, and a lot of it went up in distinct waves. Around the town centre and Maybury there are Victorian and Edwardian houses; Goldsworth Park and the estates around it are largely 1970s and 80s; Horsell and Pyrford are bigger family homes, many extended and loft-converted over the years. The town centre now has a cluster of newer apartment blocks, where the management company usually has rules about who can work on what. Hard water means limescale turns up in boilers and showers here too.',
    common: [
      'Original heating systems in 1970s and 80s estate houses',
      'Low water pressure after extensions and loft conversions stretch the old pipework',
      'Newer town-centre flats where the managing agent needs to approve the work',
      'Limescale in combi boilers and showers from the hard water',
    ],
    nearby: ['guildford', 'farnborough', 'aldershot'],
    note: FROM_FULHAM,
  },
  {
    slug: 'farnham',
    name: 'Farnham',
    borough: 'Waverley',
    county: 'Surrey',
    region: 'outside',
    postcodes: ['GU9', 'GU10'],
    volume: 210,
    kd: 19,
    metaTitle: 'Plumber in Farnham | GU9 & GU10 | Ninja Plumbers',
    metaDescription:
      'Ninja Plumbers covers Farnham, Hale, Wrecclesham, Rowledge and Tongham: boiler repair, leaks, drains and bathrooms, priced first. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers Farnham and the villages around it, including Upper Hale, Weybourne, Wrecclesham, Rowledge and Tongham.',
    character:
      'Farnham has one of the best-preserved Georgian town centres in the south of England, and a good share of its older houses are listed, which shapes how any pipe run, flue or new bathroom can go in. Beyond the centre there are Victorian villas, interwar and post-war suburbs in Hale and Weybourne, and village houses in Rowledge, Wrecclesham and Tongham with longer supply runs from the road. As around Guildford, the water is hard.',
    common: [
      'Listed and period houses where flues and pipe routes need planning around the building',
      'Old lead or iron supply pipes still in place in older houses',
      'Limescale in boilers, cylinders and showers',
      'Heating systems in post-war suburban houses due for replacement',
    ],
    nearby: ['aldershot', 'farnborough', 'guildford'],
    note: FROM_FULHAM + ' We work on gas, not oil, so off-grid oil boilers are not something we take on.',
  },
  {
    slug: 'aldershot',
    name: 'Aldershot',
    borough: 'Rushmoor',
    county: 'Hampshire',
    region: 'outside',
    postcodes: ['GU11', 'GU12'],
    volume: 170,
    kd: 10,
    metaTitle: 'Plumber in Aldershot | GU11 & GU12 | Ninja Plumbers',
    metaDescription:
      'Ninja Plumbers covers Aldershot, Ash and Ash Vale: boiler repair, leaks, blocked drains and bathrooms, with the price agreed first. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers Aldershot and the neighbouring areas of Ash, Ash Vale and North Camp, for homes, rented properties and small businesses.',
    character:
      'Aldershot grew up around the army, and the housing still shows it: long streets of Victorian and Edwardian terraces near the town centre, former military housing, and large new developments on old barracks land where builder-fitted boilers are now coming out of warranty. The town centre has plenty of flats above shops, with the shared pipework and access questions that brings.',
    common: [
      'Builder-fitted combi boilers on newer estates coming out of their warranty',
      'Shared waste and soil pipes in terraces converted into flats',
      'Flats above shops where access and the landlord need arranging first',
      'Blocked drains on older terraced streets',
    ],
    nearby: ['farnborough', 'farnham', 'guildford'],
    note: FROM_FULHAM,
  },
  {
    slug: 'farnborough',
    name: 'Farnborough',
    borough: 'Rushmoor',
    county: 'Hampshire',
    region: 'outside',
    postcodes: ['GU14'],
    volume: 170,
    kd: 14,
    metaTitle: 'Plumber in Farnborough | GU14 | Ninja Plumbers',
    metaDescription:
      'Ninja Plumbers covers Farnborough and Cove: boiler repair and servicing, leaks, blocked drains and bathroom fitting, priced first. Call 020 3576 5825.',
    intro:
      'Ninja Plumbers covers Farnborough, including Cove, West Heath and the town centre, for repairs, servicing and installations.',
    character:
      'Most of Farnborough is interwar and post-war suburban housing, with large estates built in the 1960s and 70s, and a growing number of newer flats around the regenerated town centre. A lot of the older houses are still on heating systems fitted when they were built, or on one boiler swap since, and the estates often share drain runs between neighbouring houses.',
    common: [
      'Original or first-replacement heating systems in 1960s and 70s estate houses',
      'Shared drain runs on estates, where one blockage affects several houses',
      'Low pressure and weak showers in top-floor flats',
      'Combi swaps from old system boilers with hot water cylinders',
    ],
    nearby: ['aldershot', 'farnham', 'woking'],
    note: FROM_FULHAM,
  },
];
