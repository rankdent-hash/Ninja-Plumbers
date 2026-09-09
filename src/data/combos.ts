// Service × location pages. The full matrix would be 7 services × 12 areas =
// 84, and most of it has no demand behind it — "blocked drain clapham" returns
// zero, "bathroom fitters balham" returns 20. Templated near-duplicates with no
// audience is the doorway pattern Google demotes.
//
// So: only combinations at 140+ monthly UK searches (Semrush) get a page.
// That is 30 of the 84. Everything below the line is served by the service page
// and the area page, which both already exist and both already rank for it.
//
// `angle` is the sentence that makes each page specific — it ties the service
// to that area's actual housing stock rather than swapping a place name into
// boilerplate. It is the reason these are worth publishing at all.

export type Combo = {
  service: string;   // services.ts slug
  area: string;      // areas.ts slug
  volume: number;
  cpc: string;
  kd: number;
  angle: string;
};

export const combos: Combo[] = [
  // ---- Emergency plumbing: every area clears the bar, CPC £19–37 ----
  { service: 'emergency-plumbing', area: 'bromley', volume: 590, cpc: '£37.35', kd: 9,
    angle: 'Bromley’s suburban housing means long external pipe runs, outbuildings and garages that are not heated, and older cast iron drains. Most of the winter emergencies we get here are pipes that froze somewhere nobody thinks to lag.' },
  { service: 'emergency-plumbing', area: 'croydon', volume: 480, cpc: '£33.44', kd: 11,
    angle: 'Croydon runs from 1930s semis to town centre towers, and the emergency differs completely between them. In a block, a leak is rarely confined to the flat it started in, and getting access to the one above is usually the first job.' },
  { service: 'emergency-plumbing', area: 'wimbledon', volume: 390, cpc: '£32.81', kd: 13,
    angle: 'A lot of the larger Wimbledon houses still run vented systems with a tank in the loft. When one of those lets go it floods from the top of the house downwards, which is why finding the tank stopcock matters as much as the mains one.' },
  { service: 'emergency-plumbing', area: 'islington', volume: 320, cpc: '£25.92', kd: 23,
    angle: 'In Islington’s Georgian and listed stock you often cannot simply lift a floor to get at a leak. Shutting the water off quickly matters more here than almost anywhere, because the alternative is damage to fabric that is expensive and sometimes impossible to replace.' },
  { service: 'emergency-plumbing', area: 'clapham', volume: 260, cpc: '£34.56', kd: 5,
    angle: 'Clapham has a high proportion of shared houses and flats, and in a share nobody is usually quite sure where the stopcock is. Worth finding out before you need it — we will talk you through it on the phone if you are looking for it now.' },
  { service: 'emergency-plumbing', area: 'hackney', volume: 260, cpc: '£19.60', kd: 11,
    angle: 'Between the estates and the warehouse conversions, a great many Hackney emergencies involve communal systems. That means the isolating valve you need may not be inside your own flat, and building access is often the thing that decides how fast it gets stopped.' },
  { service: 'emergency-plumbing', area: 'fulham', volume: 210, cpc: '£25.19', kd: 5,
    angle: 'Fulham has a lot of basement and lower-ground conversions, and water finds the lowest point in a building. A failed sump pump down there floods an entire floor rather than dripping through a ceiling. We are based on Fulham High Street.' },
  { service: 'emergency-plumbing', area: 'wandsworth', volume: 210, cpc: '£29.85', kd: 11,
    angle: 'So much Wandsworth housing has been extended at the back that pipework frequently runs through walls added long after the original build. When one of those fails, the leak surfaces a long way from the pipe.' },
  { service: 'emergency-plumbing', area: 'ealing', volume: 210, cpc: '£26.66', kd: 18,
    angle: 'Ealing’s larger Edwardian houses often have bathrooms added over decades on long pipe runs. An emergency in one of those is usually about isolating the right branch rather than shutting off the whole house.' },
  { service: 'emergency-plumbing', area: 'brixton', volume: 170, cpc: '£27.02', kd: 7,
    angle: 'For the food businesses around the market and the main roads, a plumbing emergency is a closed kitchen. We take those calls out of hours because that is usually the only time the work can happen at all.' },
  { service: 'emergency-plumbing', area: 'harrow', volume: 140, cpc: '£28.67', kd: 15,
    angle: 'Harrow’s Metroland semis are often on their second or third heating system, with stretches of original pipework still buried behind later work. Emergencies here tend to start at the joint between old and new.' },
  { service: 'emergency-plumbing', area: 'balham', volume: 140, cpc: '£32.75', kd: 8,
    angle: 'Balham terraces split into upper and lower flats share one stack, so a leak upstairs presents downstairs. If you are the lower flat and water is coming through, the source is very likely not yours — and access to the flat above is the first thing we will ask about.' },

  // ---- Boiler repair: ten areas clear the bar ----
  { service: 'boiler-repair', area: 'wimbledon', volume: 390, cpc: '£18.82', kd: 13,
    angle: 'Larger Wimbledon houses commonly run a vented system with a cylinder rather than a combi. Those are a different repair, and a different conversation about whether replacing the whole system is worth it.' },
  { service: 'boiler-repair', area: 'ealing', volume: 320, cpc: '£18.59', kd: 9,
    angle: 'Ealing houses with several bathrooms added over the years frequently ask more of the boiler than it was sized for. What reads as a boiler fault is sometimes a system that has simply outgrown it.' },
  { service: 'boiler-repair', area: 'croydon', volume: 320, cpc: '£17.27', kd: 11,
    angle: 'A lot of Croydon’s interwar housing is still on its original system layout with a newer boiler bolted onto it. That combination causes recurring faults that replacing the boiler alone will not fix.' },
  { service: 'boiler-repair', area: 'harrow', volume: 260, cpc: '£13.64', kd: 12,
    angle: 'Harrow’s 1930s semis often have a loft conversion bathroom on a system never designed to reach it. Pressure complaints there are usually about the system, not the boiler, and we will say so rather than sell you a new one.' },
  { service: 'boiler-repair', area: 'fulham', volume: 210, cpc: '£12.97', kd: 5,
    angle: 'In Fulham flat conversions the boiler is usually squeezed into a kitchen cupboard with awkward access and a flue routed wherever it would fit. Tell us the make and model when you call so we arrive knowing what we are opening up.' },
  { service: 'boiler-repair', area: 'wandsworth', volume: 210, cpc: '£9.04', kd: 12,
    angle: 'Wandsworth extensions often put the kitchen — and the boiler with it — a long way from the original service runs. Worth knowing before anyone talks about relocating the unit.' },
  { service: 'boiler-repair', area: 'clapham', volume: 210, cpc: '—', kd: 5,
    angle: 'Clapham shares run hot water harder than a family home does, with showers back to back morning and evening. Boilers in those properties wear faster, and a service actually earns its money.' },
  { service: 'boiler-repair', area: 'bromley', volume: 210, cpc: '£12.93', kd: 22,
    angle: 'Bromley’s larger houses commonly have a hot water cylinder and an airing cupboard rather than a combi. When the hot water fails there, the boiler is only one of several things it could be.' },
  { service: 'boiler-repair', area: 'brixton', volume: 170, cpc: '£33.68', kd: 5,
    angle: 'Between the estates and the converted terraces, Brixton has a lot of communal and shared heating arrangements. Establishing what you are actually responsible for is often the first useful thing we do.' },
  { service: 'boiler-repair', area: 'hackney', volume: 140, cpc: '£23.69', kd: 16,
    angle: 'Warehouse conversions in Hackney often have exposed services and unusual boiler positions. Easier to inspect than a boxed-in installation, but the pipe runs are long and heat loss along them is real.' },

  // ---- Bathroom installation: five areas clear the bar ----
  { service: 'bathroom-installation', area: 'croydon', volume: 260, cpc: '£3.53', kd: 9,
    angle: 'Croydon’s interwar semis usually have a bathroom in the original small back room, and the question is nearly always whether to keep the layout or move the soil connection. Moving the WC is the decision that drives the cost.' },
  { service: 'bathroom-installation', area: 'bromley', volume: 210, cpc: '£3.95', kd: 8,
    angle: 'Larger Bromley houses often have the space for a second bathroom or en-suite, but many are on vented systems where adding outlets means thinking about pressure before choosing a shower.' },
  { service: 'bathroom-installation', area: 'harrow', volume: 210, cpc: '£4.62', kd: 13,
    angle: 'Loft conversions are widespread in Harrow, and a bathroom on the new top floor is the most common brief we get here. Pressure at that height is the thing to settle before anything is ordered.' },
  { service: 'bathroom-installation', area: 'wimbledon', volume: 170, cpc: '£6.02', kd: 8,
    angle: 'Period property near the Common frequently carries conservation constraints, which affect external work like soil pipes and extract routes more than they affect what goes inside the room.' },
  { service: 'bathroom-installation', area: 'fulham', volume: 140, cpc: '£7.17', kd: 9,
    angle: 'In Fulham flats, a bathroom refit usually runs into the lease before it runs into the plumbing. Most leases here require freeholder consent, and some restrict moving wet areas over habitable rooms below. Check that first.' },

  // ---- Drain unblocking: only three areas clear the bar ----
  { service: 'drain-unblocking', area: 'croydon', volume: 140, cpc: '£23.78', kd: 17,
    angle: 'Croydon’s suburban plots mean long external drain runs with more gullies and inspection chambers than an inner London terrace has. That is more places to block, but also more places to get a rod or a camera in.' },
  { service: 'drain-unblocking', area: 'bromley', volume: 140, cpc: '£14.34', kd: 7,
    angle: 'Mature gardens and established trees are the recurring cause in Bromley. Root ingress into older cast iron and clay drains blocks the same run repeatedly, and clearing it without surveying it just books the next visit.' },
  { service: 'drain-unblocking', area: 'wimbledon', volume: 140, cpc: '£19.50', kd: 11,
    angle: 'Wimbledon has a mix of large private drainage runs on the bigger plots and shared drainage in the terraces and flats nearer the station. Which of those you are on decides whether the problem is yours or Thames Water’s.' },

  // ---- Tier A expansion. Same 140/mo bar, measured in the same way. ----
  { service: 'emergency-plumbing', area: 'kensington', volume: 260, cpc: '£38.01', kd: 7,
    angle: 'Listed and conservation-area properties, where the quick external fix is usually not permitted and the isolation point is rarely where you would expect.' },
  { service: 'emergency-plumbing', area: 'lewisham', volume: 260, cpc: '£44.77', kd: 9,
    angle: 'Town centre blocks and estates, where a leak reported in one flat has usually started in another and reaching the riser matters more than reaching the kitchen.' },
  { service: 'emergency-plumbing', area: 'battersea', volume: 170, cpc: '£52.19', kd: 7,
    angle: 'Riverside developments on communal heat networks, where a loss of hot water is a different fault from a boiler failure and often needs building management on the call.' },
  { service: 'emergency-plumbing', area: 'putney', volume: 170, cpc: '£36.82', kd: 4,
    angle: 'Mansion blocks near the bridge and estate property at Roehampton, both of which mean shared stacks and an access arrangement before anyone can start.' },
  { service: 'emergency-plumbing', area: 'dulwich', volume: 170, cpc: '£42.66', kd: 5,
    angle: 'Large family houses on long drain runs, where an overflowing gully is often a blockage well down the garden rather than anything close to the house.' },
  { service: 'emergency-plumbing', area: 'greenwich', volume: 140, cpc: '£31.26', kd: 9,
    angle: 'Conservation-area properties around the town centre and heat-network flats on the Peninsula — two emergencies that need two different first questions.' },
  { service: 'emergency-plumbing', area: 'chelsea', volume: 140, cpc: '£36.31', kd: 7,
    angle: 'Tall townhouses and excavated basements, where a failed drainage pump floods the lowest floor and gravity offers no fallback.' },
  { service: 'emergency-plumbing', area: 'tooting', volume: 140, cpc: '£50.96', kd: 8,
    angle: 'Shared houses and flat conversions, where the person who calls is often not the person whose bathroom the water is coming from.' },

  { service: 'boiler-repair', area: 'dulwich', volume: 260, cpc: '—', kd: 5,
    angle: 'Large systems in single-occupation family homes, where a boiler struggling to heat the whole house is often a sizing problem rather than a fault.' },
  { service: 'boiler-repair', area: 'greenwich', volume: 210, cpc: '—', kd: 5,
    angle: 'Period properties where flue positions are constrained, and Peninsula flats where the heat interface unit rather than a boiler is the thing that has failed.' },
  { service: 'boiler-repair', area: 'kensington', volume: 210, cpc: '£15.97', kd: 7,
    angle: 'Listed and conservation-area buildings, where replacing a part is straightforward but anything touching the flue needs establishing first.' },
  { service: 'boiler-repair', area: 'walthamstow', volume: 210, cpc: '£26.07', kd: 5,
    angle: 'Warner maisonettes and extended terraces, where a boiler has often been moved during a kitchen extension and the pipework tells the story.' },
  { service: 'boiler-repair', area: 'chelsea', volume: 170, cpc: '—', kd: 5,
    angle: 'Tall, narrow townhouses where poor performance on the top floor is a pressure and flow problem rather than a failing boiler.' },
  { service: 'boiler-repair', area: 'battersea', volume: 170, cpc: '—', kd: 6,
    angle: 'Victorian conversions off the park alongside Nine Elms flats on heat interface units, which are not boilers and do not fail like them.' },
  { service: 'boiler-repair', area: 'tooting', volume: 170, cpc: '—', kd: 8,
    angle: 'Combis working far harder than they were sized for, in houses that have gained bathrooms since the boiler went in.' },
  { service: 'boiler-repair', area: 'hammersmith', volume: 140, cpc: '—', kd: 8,
    angle: 'Mansion block flats where the boiler is fine and the problem is the communal system feeding it, plus office heating around the Broadway.' },
  { service: 'boiler-repair', area: 'lewisham', volume: 140, cpc: '—', kd: 4,
    angle: 'Ex-local-authority flats on original pipework and communal heating, where the fault frequently sits outside the property that reported it.' },
  { service: 'boiler-repair', area: 'putney', volume: 140, cpc: '—', kd: 5,
    angle: 'Riverside blocks and Roehampton estate property, both of which mean shared plant and a managing agent in the loop.' },

  // ---- Boiler service. Measured separately from repair because the intent and
  // the demand differ: Ealing returns 390 for "boiler service" against 320 for
  // "boiler repair", and Islington 170 against 90. ----
  { service: 'boiler-service', area: 'ealing', volume: 390, cpc: '£15.68', kd: 10,
    angle: 'The largest local boiler term anywhere on this site, and mostly people booking ahead rather than reacting to a breakdown.' },
  { service: 'boiler-service', area: 'croydon', volume: 320, cpc: '£8.18', kd: 11,
    angle: 'Interwar semis on systems that have been running a long time, where a service is the cheapest way to find out what is close to failing.' },
  { service: 'boiler-service', area: 'bromley', volume: 320, cpc: '£9.31', kd: 9,
    angle: 'Larger houses with sizeable systems, where a boiler running badly costs noticeably more over a winter than it does in a flat.' },
  { service: 'boiler-service', area: 'harrow', volume: 260, cpc: '£8.57', kd: 8,
    angle: 'Metroland semis often on their third heating system, where the service tells you which of the previous installations you are actually living with.' },
  { service: 'boiler-service', area: 'wimbledon', volume: 210, cpc: '£11.40', kd: 11,
    angle: 'A lot of relatively recent installations still inside warranty terms that require documented annual servicing.' },
  { service: 'boiler-service', area: 'greenwich', volume: 210, cpc: '£12.11', kd: 6,
    angle: 'Two different jobs in one postcode: conventional boilers in the older town centre, and heat interface units on the Peninsula, which need checking rather than servicing in the gas sense.' },
  { service: 'boiler-service', area: 'lewisham', volume: 210, cpc: '£19.11', kd: 5,
    angle: 'Flats where the boiler is the occupier’s responsibility and the communal system behind it is not, so it is worth being clear which is being looked at.' },
  { service: 'boiler-service', area: 'wandsworth', volume: 210, cpc: '£19.74', kd: 5,
    angle: 'Converted terraces where a combi has been quietly working harder than it was sized for since the second bathroom went in.' },
  { service: 'boiler-service', area: 'brixton', volume: 210, cpc: '£18.87', kd: 6,
    angle: 'Commercial premises alongside flats, where a service has to be booked around trading hours rather than the engineer’s diary.' },
  { service: 'boiler-service', area: 'islington', volume: 170, cpc: '£7.61', kd: 7,
    angle: 'More people here search for a service than for a repair, which is unusual and suggests boilers being maintained rather than run to failure.' },
  { service: 'boiler-service', area: 'walthamstow', volume: 170, cpc: '£13.01', kd: 4,
    angle: 'Condensate runs put outside during extension work are the thing worth checking before winter, not after the boiler has locked out.' },
  { service: 'boiler-service', area: 'streatham', volume: 170, cpc: '£25.63', kd: 5,
    angle: 'Large houses split into flats, where one boiler per flat means several services in the same building and it is worth doing them together.' },
  { service: 'boiler-service', area: 'tooting', volume: 140, cpc: '£9.51', kd: 6,
    angle: 'Shared houses where nobody is quite sure when the boiler was last looked at, because nobody who was here then still lives there.' },
  { service: 'boiler-service', area: 'acton', volume: 140, cpc: '—', kd: 6,
    angle: 'Conversions on old systems at one end of the postcode and new communal blocks at the other, which are not the same job at all.' },

  { service: 'boiler-repair', area: 'acton', volume: 140, cpc: '£17.02', kd: 4,
    angle: 'Boilers moved during kitchen extensions, and North Acton flats where the fault sits in the building’s system rather than the property.' },

  // ---- Boiler installation. Distinct from replacement, which is dead locally
  // (0 in Fulham, Wimbledon, Wandsworth and Islington) and lives at London
  // level only. Installation has real local demand. ----
  { service: 'boiler-installation', area: 'kensington', volume: 260, cpc: '—', kd: 9,
    angle: 'Listed and conservation-area buildings, where the flue can terminate has to be settled before a boiler is chosen rather than after.' },
  { service: 'boiler-installation', area: 'ealing', volume: 260, cpc: '—', kd: 8,
    angle: 'Family houses that have grown, where the honest question is whether a combi can still serve the property or whether it needs a cylinder.' },
  { service: 'boiler-installation', area: 'wandsworth', volume: 260, cpc: '—', kd: 9,
    angle: 'Converted terraces where the boiler position was inherited from the conversion, and an installation is the chance to correct it.' },
  { service: 'boiler-installation', area: 'wimbledon', volume: 210, cpc: '£14.56', kd: 8,
    angle: 'Larger houses with two or more bathrooms in simultaneous use, which is the case a combi cannot serve properly however new it is.' },
  { service: 'boiler-installation', area: 'fulham', volume: 210, cpc: '—', kd: 5,
    angle: 'Flat conversions and basement rooms, where flue routing and condensate fall decide what can go in before anything else does.' },
  { service: 'boiler-installation', area: 'croydon', volume: 210, cpc: '£9.36', kd: 11,
    angle: 'Interwar semis on their original system layout, where a new boiler is often the moment to move it out of the kitchen cupboard.' },
  { service: 'boiler-installation', area: 'bromley', volume: 210, cpc: '—', kd: 9,
    angle: 'Larger houses where sizing matters more than brand — a boiler too big cycles itself to death, one too small never keeps up.' },
  { service: 'boiler-installation', area: 'harrow', volume: 210, cpc: '£21.42', kd: 16,
    angle: 'Loft conversions and rear extensions added over the years, none of which the original system was ever resized for.' },
  { service: 'boiler-installation', area: 'battersea', volume: 170, cpc: '—', kd: 7,
    angle: 'Victorian conversions off the park — the riverside blocks mostly run communal heat networks, where there is no boiler to install.' },
  { service: 'boiler-installation', area: 'chelsea', volume: 170, cpc: '—', kd: 5,
    angle: 'Tall townhouses and mews properties, where plant position and flue routing are constrained before the first product is discussed.' },
  { service: 'boiler-installation', area: 'clapham', volume: 170, cpc: '£10.79', kd: 7,
    angle: 'Terrace conversions where the flat above and the flat below both have a view on where a flue can terminate.' },
  { service: 'boiler-installation', area: 'brixton', volume: 170, cpc: '—', kd: 5,
    angle: 'Flats above commercial premises, where the installation has to work around a business downstairs as well as the property itself.' },
  { service: 'boiler-installation', area: 'greenwich', volume: 140, cpc: '—', kd: 6,
    angle: 'Conservation-area constraints in the town centre, and Peninsula flats where a heat network means there is nothing to install.' },
  { service: 'boiler-installation', area: 'putney', volume: 140, cpc: '—', kd: 6,
    angle: 'Mansion blocks where the flue route and the managing agent both have to be settled before a date can be booked.' },
  { service: 'boiler-installation', area: 'tooting', volume: 140, cpc: '—', kd: 11,
    angle: 'Houses that have gained bathrooms since the last boiler, which is the clearest case for a system boiler and cylinder over another combi.' },
  { service: 'boiler-installation', area: 'balham', volume: 140, cpc: '—', kd: 3,
    angle: 'Conversions where the new boiler has to fit a cupboard chosen by whoever did the conversion, not by anyone who has to service it.' },
  { service: 'boiler-installation', area: 'dulwich', volume: 140, cpc: '—', kd: 6,
    angle: 'Large family houses on long pipe runs, where sizing the system properly matters more than it does in a flat.' },
  { service: 'boiler-installation', area: 'acton', volume: 140, cpc: '£3.45', kd: 4,
    angle: 'Older conversions where a first proper installation replaces years of extension, and newer blocks where there is nothing to install at all.' },

  // ---- Enfield and Barnet, the two outer-London areas the workbook misses.
  // Of the 25 new Tier B areas, only these two clear 140 for emergency work —
  // the rest top out at 90, so they get an area page and nothing more. ----
  { service: 'emergency-plumbing', area: 'enfield', volume: 210, cpc: '£33.61', kd: 11,
    angle: 'Outer-London plots where the stopcock is often in an outbuilding, and unheated garages that burst first when a freeze breaks.' },
  { service: 'emergency-plumbing', area: 'barnet', volume: 140, cpc: '£30.04', kd: 8,
    angle: 'Older property around the centre alongside larger suburban houses, where the isolation point is rarely where a tenant expects it.' },

  { service: 'leak-detection', area: 'croydon', volume: 140, cpc: '£24.53', kd: 9,
    angle: 'Long buried runs across larger plots, where a leak can lose water for months before anything shows indoors.' },

  { service: 'bathroom-installation', area: 'enfield', volume: 140, cpc: '£4.41', kd: 8,
    angle: 'Suburban houses with room for a second bathroom or en-suite, usually on vented systems that need pressure checking first.' },
];

export default combos;
