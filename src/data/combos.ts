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
    angle: 'Suburban homes in Bromley come with long outside pipe runs, unheated garages and outbuildings, and ageing cast iron drains. In winter, most of the emergencies here are pipes frozen somewhere nobody thought needed lagging.' },
  { service: 'emergency-plumbing', area: 'croydon', volume: 480, cpc: '£33.44', kd: 11,
    angle: 'Housing in Croydon ranges from 1930s semis to towers in the town centre, and an emergency looks entirely different in each. In a block, a leak seldom stays in the flat where it began, so the first task is usually getting into the flat above.' },
  { service: 'emergency-plumbing', area: 'wimbledon', volume: 390, cpc: '£32.81', kd: 13,
    angle: 'Many of Wimbledon’s bigger houses are still on vented systems fed from a loft tank. If that fails, water pours down from the top floor, so knowing where the tank’s stopcock is matters just as much as finding the mains.' },
  { service: 'emergency-plumbing', area: 'islington', volume: 320, cpc: '£25.92', kd: 23,
    angle: 'Lifting a floor to reach a leak is often not an option in Islington’s Georgian and listed houses. Getting the water off fast counts for more here than almost anywhere, because otherwise the damage falls on historic fabric that is costly, and at times impossible, to put back.' },
  { service: 'emergency-plumbing', area: 'clapham', volume: 260, cpc: '£34.56', kd: 5,
    angle: 'A large share of Clapham homes are flats and house shares, where the tenants rarely know for certain where the stopcock is. Find it before you need it. If you are hunting for it right now, ring us and we will guide you over the phone.' },
  { service: 'emergency-plumbing', area: 'hackney', volume: 260, cpc: '£19.60', kd: 11,
    angle: 'With its estates and warehouse conversions, Hackney sees a lot of emergencies on communal systems. The isolating valve you need might be outside your own flat, and how quickly the water stops often depends on getting access to the building.' },
  { service: 'emergency-plumbing', area: 'fulham', volume: 210, cpc: '£25.19', kd: 5,
    angle: 'Water always heads for the lowest point, and Fulham has plenty of basement and lower-ground conversions. When a sump pump fails down there, a whole floor floods instead of a ceiling dripping. Fulham High Street is where we are based.' },
  { service: 'emergency-plumbing', area: 'wandsworth', volume: 210, cpc: '£29.85', kd: 11,
    angle: 'Rear extensions are everywhere in Wandsworth, so pipes often pass through walls built long after the house itself. If one of them fails, the water tends to appear well away from the source.' },
  { service: 'emergency-plumbing', area: 'ealing', volume: 210, cpc: '£26.66', kd: 18,
    angle: 'Bathrooms have been added to Ealing’s bigger Edwardian houses over the decades, often on long pipe runs. In an emergency there, the job is normally to isolate the correct branch instead of turning off water to the entire property.' },
  { service: 'emergency-plumbing', area: 'brixton', volume: 170, cpc: '£27.02', kd: 7,
    angle: 'A plumbing emergency means a shut kitchen for the food businesses around the market and along the main roads. We take those jobs out of hours, since that is normally the only point at which the work can be done.' },
  { service: 'emergency-plumbing', area: 'harrow', volume: 140, cpc: '£28.67', kd: 15,
    angle: 'Many Metroland semis in Harrow are now on a second or third heating system, with lengths of the first pipework still hidden behind later work. Here, emergencies usually begin where new pipe meets old.' },
  { service: 'emergency-plumbing', area: 'balham', volume: 140, cpc: '£32.75', kd: 8,
    angle: 'Where a Balham terrace has been divided into upper and lower flats, both share one stack, so an upstairs leak shows up downstairs. If you live below and water is coming in, it is most likely not your leak, and the first thing we will ask is whether we can get into the flat above.' },

  // ---- Boiler repair: ten areas clear the bar ----
  { service: 'boiler-repair', area: 'wimbledon', volume: 390, cpc: '£18.82', kd: 13,
    angle: 'Instead of a combi, many of Wimbledon’s bigger houses have a vented system with a cylinder. That means a different kind of repair, and a different discussion about whether it is worth replacing the lot.' },
  { service: 'boiler-repair', area: 'ealing', volume: 320, cpc: '£18.59', kd: 9,
    angle: 'Where an Ealing house has gained several bathrooms over the years, the boiler is often asked for more than it was sized to give. What looks like a fault can simply be a system that has outgrown the boiler.' },
  { service: 'boiler-repair', area: 'croydon', volume: 320, cpc: '£17.27', kd: 11,
    angle: 'Plenty of interwar homes in Croydon still have the original system layout, with a more recent boiler connected to it. The mix leads to faults that keep coming back, and a new boiler on its own will not cure them.' },
  { service: 'boiler-repair', area: 'harrow', volume: 260, cpc: '£13.64', kd: 12,
    angle: 'Many 1930s semis in Harrow have a loft conversion bathroom, fed by a system never meant to reach that high. Weak pressure there is normally down to the system rather than the boiler, and we will tell you that instead of selling you a replacement.' },
  { service: 'boiler-repair', area: 'fulham', volume: 210, cpc: '£12.97', kd: 5,
    angle: 'Converted flats in Fulham tend to have the boiler crammed into a kitchen cupboard that is hard to get at, with the flue run wherever there was space. Give us the make and model when you ring, so the engineer knows what to expect before it is opened.' },
  { service: 'boiler-repair', area: 'wandsworth', volume: 210, cpc: '£9.04', kd: 12,
    angle: 'An extension in Wandsworth often moves the kitchen, and the boiler along with it, far from the original service runs. Bear that in mind before anyone suggests moving the boiler.' },
  { service: 'boiler-repair', area: 'clapham', volume: 210, cpc: '—', kd: 5,
    angle: 'A Clapham house share uses hot water harder than a family would, with one shower after another every morning and evening. The boilers there wear out quicker, so a service genuinely pays for itself.' },
  { service: 'boiler-repair', area: 'bromley', volume: 210, cpc: '£12.93', kd: 22,
    angle: 'Rather than a combi, many bigger houses in Bromley have an airing cupboard with a hot water cylinder. If the hot water stops, the boiler is just one of several possible causes.' },
  { service: 'boiler-repair', area: 'brixton', volume: 170, cpc: '£33.68', kd: 5,
    angle: 'Brixton’s estates and converted terraces mean plenty of shared and communal heating set-ups. Often the first helpful thing we do is work out which parts are really your responsibility.' },
  { service: 'boiler-repair', area: 'hackney', volume: 140, cpc: '£23.69', kd: 16,
    angle: 'In Hackney’s warehouse conversions the services are often on show and the boiler may sit somewhere unusual. Inspection is easier than with a boxed-in unit, but the pipe runs are long and lose real heat along the way.' },

  // ---- Bathroom installation: five areas clear the bar ----
  { service: 'bathroom-installation', area: 'croydon', volume: 260, cpc: '£3.53', kd: 9,
    angle: 'Interwar semis in Croydon typically have their bathroom in the small original back room, and the choice is almost always between keeping the layout and moving the soil connection. Relocating the WC is what pushes the price up most.' },
  { service: 'bathroom-installation', area: 'bromley', volume: 210, cpc: '£3.95', kd: 8,
    angle: 'Many bigger houses in Bromley have room for an en-suite or second bathroom, but plenty run on vented systems, so extra outlets mean checking the pressure before any shower is chosen.' },
  { service: 'bathroom-installation', area: 'harrow', volume: 210, cpc: '£4.62', kd: 13,
    angle: 'Harrow has a great many loft conversions, and the brief we see most is a bathroom on the new top floor. Before anything is bought, the pressure at that height has to be settled.' },
  { service: 'bathroom-installation', area: 'wimbledon', volume: 170, cpc: '£6.02', kd: 8,
    angle: 'Near the Common, older homes often come with conservation constraints. These bear on outside work such as extract routes and soil pipes far more than on anything inside the room itself.' },
  { service: 'bathroom-installation', area: 'fulham', volume: 140, cpc: '£7.17', kd: 9,
    angle: 'For Fulham flats, the lease tends to be the first hurdle for a bathroom refit, ahead of the plumbing. Most local leases need the freeholder’s consent, and some limit moving wet areas above habitable rooms below. Read yours before anything else.' },

  // ---- Drain unblocking: only three areas clear the bar ----
  { service: 'drain-unblocking', area: 'croydon', volume: 140, cpc: '£23.78', kd: 17,
    angle: 'On Croydon’s suburban plots the outside drain runs are long, with more inspection chambers and gullies than you find at an inner London terrace. There are more spots for a blockage, but also more points to put in a rod or camera.' },
  { service: 'drain-unblocking', area: 'bromley', volume: 140, cpc: '£14.34', kd: 7,
    angle: 'In Bromley the cause that keeps coming back is established trees in mature gardens. Roots get into older clay and cast iron drains and block the same run time after time, and clearing it without a survey simply sets up the next callout.' },
  { service: 'drain-unblocking', area: 'wimbledon', volume: 140, cpc: '£19.50', kd: 11,
    angle: 'The bigger Wimbledon plots have long private drain runs, while the flats and terraces closer to the station share their drainage. Which one you have determines whether the problem belongs to you or to Thames Water.' },

  // ---- Tier A expansion. Same 140/mo bar, measured in the same way. ----
  { service: 'emergency-plumbing', area: 'kensington', volume: 260, cpc: '£38.01', kd: 7,
    angle: 'Homes that are listed or in a conservation area, where a fast repair on the outside is seldom allowed and the isolation point is rarely in the obvious place.' },
  { service: 'emergency-plumbing', area: 'lewisham', volume: 260, cpc: '£44.77', kd: 9,
    angle: 'Estates and blocks in the town centre, where a leak reported in one flat normally began in a different one, and getting to the riser counts for more than the kitchen does.' },
  { service: 'emergency-plumbing', area: 'battersea', volume: 170, cpc: '£52.19', kd: 7,
    angle: 'Developments along the river on communal heat networks, where losing hot water is not the same fault as a boiler breakdown and building management often needs to be involved.' },
  { service: 'emergency-plumbing', area: 'putney', volume: 170, cpc: '£36.82', kd: 4,
    angle: 'Estate homes at Roehampton and mansion blocks by the bridge, which both involve shared stacks and agreed access before work can begin.' },
  { service: 'emergency-plumbing', area: 'dulwich', volume: 170, cpc: '£42.66', kd: 5,
    angle: 'Big family homes on long drain runs, where a gully overflowing usually means a blockage far down the garden, not something near the building.' },
  { service: 'emergency-plumbing', area: 'greenwich', volume: 140, cpc: '£31.26', kd: 9,
    angle: 'Heat-network flats on the Peninsula and conservation-area homes near the town centre: two kinds of emergency, each starting with a different first question.' },
  { service: 'emergency-plumbing', area: 'chelsea', volume: 140, cpc: '£36.31', kd: 7,
    angle: 'Dug-out basements and tall townhouses, where the bottom floor floods when a drainage pump fails, with no gravity route to fall back on.' },
  { service: 'emergency-plumbing', area: 'tooting', volume: 140, cpc: '£50.96', kd: 8,
    angle: 'Flat conversions and house shares, where whoever rings us is frequently not the one whose bathroom is leaking.' },

  { service: 'boiler-repair', area: 'dulwich', volume: 260, cpc: '—', kd: 5,
    angle: 'Big systems in family homes with a single household, where a boiler that cannot warm the whole house is often wrongly sized rather than broken.' },
  { service: 'boiler-repair', area: 'greenwich', volume: 210, cpc: '—', kd: 5,
    angle: 'Older period homes with limited flue positions, and Peninsula flats where what has broken down is the heat interface unit, not a boiler.' },
  { service: 'boiler-repair', area: 'kensington', volume: 210, cpc: '£15.97', kd: 7,
    angle: 'Buildings that are listed or in a conservation area, where swapping a part is simple but any work involving the flue has to be cleared beforehand.' },
  { service: 'boiler-repair', area: 'walthamstow', volume: 210, cpc: '£26.07', kd: 5,
    angle: 'Extended terraces and Warner maisonettes, where the boiler was often relocated when the kitchen was extended, and the pipework shows how.' },
  { service: 'boiler-repair', area: 'chelsea', volume: 170, cpc: '—', kd: 5,
    angle: 'Narrow, tall townhouses in which weak performance at the top is down to pressure and flow, not a boiler on its way out.' },
  { service: 'boiler-repair', area: 'battersea', volume: 170, cpc: '—', kd: 6,
    angle: 'Nine Elms flats whose heat interface units are not boilers and fail in their own way, next to Victorian conversions just off the park.' },
  { service: 'boiler-repair', area: 'tooting', volume: 170, cpc: '—', kd: 8,
    angle: 'Houses with more bathrooms than when the boiler was fitted, where combis now work much harder than their sizing intended.' },
  { service: 'boiler-repair', area: 'hammersmith', volume: 140, cpc: '—', kd: 8,
    angle: 'Office heating near the Broadway, and mansion block flats where the boiler works but the communal system supplying it does not.' },
  { service: 'boiler-repair', area: 'lewisham', volume: 140, cpc: '—', kd: 4,
    angle: 'Former council flats with original pipework and communal heating, where the flat reporting the fault is often not where the fault lies.' },
  { service: 'boiler-repair', area: 'putney', volume: 140, cpc: '—', kd: 5,
    angle: 'Roehampton estate homes and blocks along the river, both involving shared plant and a managing agent who has to be kept informed.' },

  // ---- Boiler service. Measured separately from repair because the intent and
  // the demand differ: Ealing returns 390 for "boiler service" against 320 for
  // "boiler repair", and Islington 170 against 90. ----
  { service: 'boiler-service', area: 'ealing', volume: 390, cpc: '£15.68', kd: 10,
    angle: 'No local boiler search on this site is larger, and most of these people are booking ahead, not reacting once something breaks.' },
  { service: 'boiler-service', area: 'croydon', volume: 320, cpc: '£8.18', kd: 11,
    angle: 'Long-running systems in interwar semis, where a service is the least expensive way to learn which parts are near the end.' },
  { service: 'boiler-service', area: 'bromley', volume: 320, cpc: '£9.31', kd: 9,
    angle: 'Bigger homes with substantial systems, where a flat would notice a badly running boiler far less over a winter.' },
  { service: 'boiler-service', area: 'harrow', volume: 260, cpc: '£8.57', kd: 8,
    angle: 'Semis in Metroland that are often on a third heating system, where a service shows which of the earlier installations is really still in use.' },
  { service: 'boiler-service', area: 'wimbledon', volume: 210, cpc: '£11.40', kd: 11,
    angle: 'Many fairly new installations still under warranty terms that call for a recorded service every year.' },
  { service: 'boiler-service', area: 'greenwich', volume: 210, cpc: '£12.11', kd: 6,
    angle: 'One postcode, two separate jobs: standard boilers in the older homes of the town centre, and on the Peninsula, heat interface units that need a check rather than a gas service.' },
  { service: 'boiler-service', area: 'lewisham', volume: 210, cpc: '£19.11', kd: 5,
    angle: 'Where flats have their own boiler but share the communal system behind it, the occupier is responsible only for the first, so be clear which one is being checked.' },
  { service: 'boiler-service', area: 'wandsworth', volume: 210, cpc: '£19.74', kd: 5,
    angle: 'Terrace conversions in which a combi has been silently overworked, beyond its sizing, ever since a second bathroom was added.' },
  { service: 'boiler-service', area: 'brixton', volume: 210, cpc: '£18.87', kd: 6,
    angle: 'Flats next to commercial premises, where the service is fitted around trading hours, not whatever suits the engineer.' },
  { service: 'boiler-service', area: 'islington', volume: 170, cpc: '£7.61', kd: 7,
    angle: 'Searches for a service here outnumber those for a repair. That is unusual, and it points to boilers being looked after instead of left to break down.' },
  { service: 'boiler-service', area: 'walthamstow', volume: 170, cpc: '£13.01', kd: 4,
    angle: 'Where extension work has put condensate runs outdoors, check them before winter rather than waiting for the boiler to lock out first.' },
  { service: 'boiler-service', area: 'streatham', volume: 170, cpc: '£25.63', kd: 5,
    angle: 'Big houses split up into flats with a boiler apiece, so one building needs several services and it makes sense to book them at once.' },
  { service: 'boiler-service', area: 'tooting', volume: 140, cpc: '£9.51', kd: 6,
    angle: 'House shares where no one knows for certain when the boiler was last checked, as none of the people living there then have stayed.' },
  { service: 'boiler-service', area: 'acton', volume: 140, cpc: '—', kd: 6,
    angle: 'Old-system conversions in one part of the postcode and new communal blocks in another, two entirely different jobs.' },

  { service: 'boiler-repair', area: 'acton', volume: 140, cpc: '£17.02', kd: 4,
    angle: 'North Acton flats with a fault in the building’s system, not in the flat itself, and boilers relocated during kitchen extensions.' },

  // ---- Boiler installation. Distinct from replacement, which is dead locally
  // (0 in Fulham, Wimbledon, Wandsworth and Islington) and lives at London
  // level only. Installation has real local demand. ----
  { service: 'boiler-installation', area: 'kensington', volume: 260, cpc: '—', kd: 9,
    angle: 'In listed and conservation-area buildings, the question of where the flue can end must be answered before a boiler is picked, not afterwards.' },
  { service: 'boiler-installation', area: 'ealing', volume: 260, cpc: '—', kd: 8,
    angle: 'Homes that families have extended, where the real question is whether a combi can still cope or a cylinder is now needed.' },
  { service: 'boiler-installation', area: 'wandsworth', volume: 260, cpc: '—', kd: 9,
    angle: 'Terrace conversions that inherited their boiler position from the conversion, where a new installation is the moment to put it right.' },
  { service: 'boiler-installation', area: 'wimbledon', volume: 210, cpc: '£14.56', kd: 8,
    angle: 'Bigger houses with two or more bathrooms in use at the same time, a situation no combi can handle properly, however new.' },
  { service: 'boiler-installation', area: 'fulham', volume: 210, cpc: '—', kd: 5,
    angle: 'Basement rooms and converted flats, where the flue route and condensate fall settle what can be fitted before anything else.' },
  { service: 'boiler-installation', area: 'croydon', volume: 210, cpc: '£9.36', kd: 11,
    angle: 'Semis from between the wars on their first system layout, where a replacement is often the moment to free the kitchen cupboard of its boiler.' },
  { service: 'boiler-installation', area: 'bromley', volume: 210, cpc: '—', kd: 9,
    angle: 'Bigger houses where size counts for more than make: an oversized boiler wears itself out by cycling, and an undersized one cannot keep pace.' },
  { service: 'boiler-installation', area: 'harrow', volume: 210, cpc: '£21.42', kd: 16,
    angle: 'Rear extensions and loft conversions built up over the years, with the original system never resized to suit any of them.' },
  { service: 'boiler-installation', area: 'battersea', volume: 170, cpc: '—', kd: 7,
    angle: 'Conversions of Victorian houses near the park. Most riverside blocks run on communal heat networks, which leave no boiler to fit.' },
  { service: 'boiler-installation', area: 'chelsea', volume: 170, cpc: '—', kd: 5,
    angle: 'Mews houses and tall townhouses, where the flue route and plant position are limited before anyone talks about products.' },
  { service: 'boiler-installation', area: 'clapham', volume: 170, cpc: '£10.79', kd: 7,
    angle: 'Converted terraces where the flats upstairs and downstairs each have a say in the flue’s end point.' },
  { service: 'boiler-installation', area: 'brixton', volume: 170, cpc: '—', kd: 5,
    angle: 'Homes above commercial premises, where fitting the boiler has to suit the business below as well as the flat above it.' },
  { service: 'boiler-installation', area: 'greenwich', volume: 140, cpc: '—', kd: 6,
    angle: 'Peninsula flats on a heat network with nothing to install, and conservation-area limits in the town centre.' },
  { service: 'boiler-installation', area: 'putney', volume: 140, cpc: '—', kd: 6,
    angle: 'Blocks of mansion flats where both the flue route and the managing agent need sorting out before any date is fixed.' },
  { service: 'boiler-installation', area: 'tooting', volume: 140, cpc: '—', kd: 11,
    angle: 'Homes with more bathrooms than when the last boiler went in, the plainest reason to choose a system boiler with a cylinder and not a combi once more.' },
  { service: 'boiler-installation', area: 'balham', volume: 140, cpc: '—', kd: 3,
    angle: 'Flat conversions where a new boiler must fit a cupboard picked by whoever did the conversion, not by anybody who needs to service the boiler.' },
  { service: 'boiler-installation', area: 'dulwich', volume: 140, cpc: '—', kd: 6,
    angle: 'Big family homes on long pipe runs, where a flat would be far more forgiving of a badly sized system.' },
  { service: 'boiler-installation', area: 'acton', volume: 140, cpc: '£3.45', kd: 4,
    angle: 'Newer blocks with nothing to install at all, and older conversions where years of extension give way to a first proper installation.' },

  // ---- Enfield and Barnet, the two outer-London areas the workbook misses.
  // Of the 25 new Tier B areas, only these two clear 140 for emergency work —
  // the rest top out at 90, so they get an area page and nothing more. ----
  { service: 'emergency-plumbing', area: 'enfield', volume: 210, cpc: '£33.61', kd: 11,
    angle: 'Plots on the edge of London where the stopcock is often out in an outbuilding, and unheated garages are the first to burst as a freeze ends.' },
  { service: 'emergency-plumbing', area: 'barnet', volume: 140, cpc: '£30.04', kd: 8,
    angle: 'Bigger suburban houses next to older homes near the centre, where tenants seldom find the isolation point where they expect.' },

  { service: 'leak-detection', area: 'croydon', volume: 140, cpc: '£24.53', kd: 9,
    angle: 'Bigger plots with long buried runs, where water can escape for months before any sign appears inside the house.' },

  { service: 'bathroom-installation', area: 'enfield', volume: 140, cpc: '£4.41', kd: 8,
    angle: 'Homes in the suburbs with space for an en-suite or second bathroom, mostly on vented systems needing a pressure check first of all.' },

  // ---- Around Guildford (Sept 2026). Same 140+ bar, Semrush UK. ----
  { service: 'emergency-plumbing', area: 'guildford', volume: 260, cpc: '£9.88', kd: 8,
    angle: 'Guildford is far enough from our Fulham base that an honest arrival time matters more than a promise, so the first call is about making the property safe while an engineer travels.' },
  { service: 'emergency-plumbing', area: 'woking', volume: 140, cpc: '£16.02', kd: 7,
    angle: 'In Woking the emergencies split between older houses near the centre and newer apartment blocks, where the first step is often reaching the managing agent for the shared stopcock.' },
  { service: 'boiler-repair', area: 'guildford', volume: 170, cpc: '£7.70', kd: 24,
    angle: 'Guildford\'s hard water is behind a lot of its boiler faults: scale in the heat exchanger and on the hot water side of combis long before anything else wears out.' },
  { service: 'boiler-repair', area: 'woking', volume: 170, cpc: '£13.20', kd: 27,
    angle: 'Many Woking estate houses are on their first or second boiler since the 1970s and 80s, so repair-or-replace is a real question and we give both figures.' },
];

export default combos;
