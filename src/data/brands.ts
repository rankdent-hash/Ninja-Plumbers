// Boiler brand pages.
//
// Twenty-one of the workbook's twenty-four brands. Grant UK, Firebird and
// Warmflow are held: all three are oil specialists, oil work needs OFTEC
// registration rather than Gas Safe, and that has not been confirmed for this
// business. The workbook's own rule says to publish them only when oil work is
// genuinely offered.
//
// No page here claims approved-installer or accredited status for any
// manufacturer, because none has been evidenced. What each page says is that
// we repair and service the brand, and — where the brand is currently supplied
// — that we install it.
//
// `character` describes the brand and what is broadly known about its products
// in the trade. It deliberately stops short of diagnosing specific models
// remotely or asserting parts availability, both of which change.
//
// Measured London demand, for context on where effort is worth spending:
//   vaillant boiler repair london    260/mo   service 210   installation 110
//   ideal boiler repair london        70/mo
//   worcester bosch ... london        20/mo   service 10    replacement 0
//   viessmann 20 · baxi 10 · glow-worm 0
// Vaillant is the only brand with meaningful London-qualified demand. The rest
// are here for completeness and for the long tail, not because the volume is
// there.

export type Brand = {
  slug: string;
  name: string;
  tier: string;
  status: 'active' | 'transitioning' | 'legacy';
  fuel: string;
  installs: boolean;      // do we offer new installation of this brand
  summary: string;
  character: string;
  common: string[];
  faq: { q: string; a: string };
};

export const brands: Brand[] = [
  {
    slug: 'worcester-bosch',
    name: 'Worcester Bosch',
    tier: 'Tier 1',
    status: 'active',
    fuel: 'Gas, oil and LPG',
    installs: true,
    summary: 'The most widely fitted domestic boiler brand in the UK, and the one we see most often in London homes.',
    character:
      'Worcester Bosch is one of the most widely installed boiler brands in the UK, and in London it is the one Ninja Plumbers engineers get called out to most. The Greenstar range covers combi, system and heat-only in most domestic sizes. Because so many households already own one, parts sit on the shelf far more often than they need ordering in, so a repair is less likely to mean a wait.',
    common: [
      'Diverter valve faults showing as hot water but no heating, or the reverse',
      'Low pressure and repeated refilling on older Greenstar units',
      'Fault codes on the display that identify the failed component directly',
    ],
    faq: {
      q: 'Do you need to be Worcester-accredited to work on one?',
      a: 'No. Any Gas Safe registered engineer can legally repair, service and install a Worcester Bosch boiler. Manufacturer accreditation schemes exist and can extend the warranty a manufacturer offers, but they are not a requirement for the work and we do not claim one we do not hold.',
    },
  },
  {
    slug: 'vaillant',
    name: 'Vaillant',
    tier: 'Tier 1',
    status: 'active',
    fuel: 'Gas',
    installs: true,
    summary: 'The brand Londoners search for by name more than any other, and a common choice in flats and conversions.',
    character:
      'Vaillant is a German manufacturer with a long history in the UK, and its ecoTEC range shows up constantly in London flats and converted properties, partly because the units are compact enough to fit the cupboard installations a conversion often forces. It is also the brand Londoners search for by name more than any other — usually because they already own one and want an engineer who actually knows it. Ninja Plumbers engineers see enough of them across the city that most faults are familiar before the cover even comes off.',
    common: [
      'Expansion vessel failures presenting as pressure that will not hold',
      'Ignition and flame-sensing faults on higher-hour ecoTEC units',
      'Compact installations in cupboards where servicing access is tight',
    ],
    faq: {
      q: 'My Vaillant keeps losing pressure. Is that the boiler or the system?',
      a: 'Either, and it is worth knowing which before spending. A leak on the pipework or radiators loses water you can sometimes find; a failed expansion vessel loses pressure with nothing visible anywhere. The vessel is a common failure at this age of unit and is a repair rather than a replacement.',
    },
  },
  {
    slug: 'ideal-heating',
    name: 'Ideal Heating',
    tier: 'Tier 1',
    status: 'active',
    fuel: 'Gas',
    installs: true,
    summary: 'UK-manufactured combi, system and heat-only boilers, widely fitted in rentals and new installations.',
    character:
      'Ideal is a UK manufacturer, and its Logic range is one of the most commonly specified boilers for rental property and volume installations — mostly down to price and simplicity rather than any particular feature. It is a brand Ninja Plumbers engineers see constantly in converted flats and landlord-owned property across London. Parts are straightforward and generally available, which keeps most repairs quick.',
    common: [
      'Condensate blockages and freezing on external runs',
      'Pressure sensor and PCB faults on higher-hour Logic units',
      'Boilers fitted at minimum spec for a property that has since grown',
    ],
    faq: {
      q: 'Is an Ideal boiler worth repairing or should I replace it?',
      a: 'The same test as any brand: age, the cost of the failed part, and whether parts are still available. Ideal units are inexpensive to replace, which shifts the maths towards replacement sooner than for a premium brand — but not automatically, and we will give you both figures.',
    },
  },
  {
    slug: 'baxi',
    name: 'Baxi',
    tier: 'Tier 1',
    status: 'active',
    fuel: 'Gas and electric',
    installs: true,
    summary: 'A long-established UK brand with a large installed base, and parent to Potterton and Main.',
    character:
      'Baxi has been a fixture in British homes for decades, and the group now also owns Potterton and Main, so a large share of London properties run a Baxi-group boiler under one name or another. The installed base spans decades: Ninja Plumbers engineers work on everything from current combis to units well past twenty years old that are still going.',
    common: [
      'Fan and pressure-switch faults on older units',
      'Heat exchanger scaling in hard-water parts of London',
      'Very old units where replacement parts are becoming difficult',
    ],
    faq: {
      q: 'My Baxi is over twenty years old. Can it still be repaired?',
      a: 'Sometimes, and sometimes it should not be. The question is whether parts are still obtainable for the specific failure — some are, some are long gone. At that age we would look at it honestly and tell you if you are spending money on something with a year left in it.',
    },
  },
  {
    slug: 'viessmann',
    name: 'Viessmann',
    tier: 'Tier 1',
    status: 'active',
    fuel: 'Gas and oil',
    installs: true,
    summary: 'German-engineered boilers at the premium end, often specified in higher-value refurbishments.',
    character:
      'Viessmann sits at the premium end of the market, and its Vitodens range turns up often in higher-value London refurbishments, where the stainless steel heat exchanger and longer expected lifespan justify the extra cost. Because someone chose it deliberately rather than defaulting to it, Ninja Plumbers usually finds these boilers in properties where the whole heating system was properly designed rather than simply inherited from whatever was there before.',
    common: [
      'Control and sensor faults rather than mechanical failures',
      'Units specified for a system that was later altered',
      'Parts that may need ordering rather than coming off the van',
    ],
    faq: {
      q: 'Are Viessmann parts harder to get than other brands?',
      a: 'They are less commonly carried as van stock than Worcester or Ideal, so a repair can occasionally mean an order rather than a same-visit fix. We will tell you at diagnosis whether the part is one we can get quickly.',
    },
  },
  {
    slug: 'glow-worm',
    name: 'Glow-worm',
    tier: 'Tier 1',
    status: 'active',
    fuel: 'Gas',
    installs: true,
    summary: 'A long-established value brand within the Vaillant group, with a large older installed base.',
    character:
      'Glow-worm is the value range within the Vaillant group, and it has been fitted in British homes for long enough that the installed base now spans several decades of product. Ninja Plumbers most often meets Glow-worm boilers in properties where the replacement was chosen on budget rather than specified, and in landlord-owned flats across London.',
    common: [
      'Older units at the end of their economic life',
      'Diverter and pressure faults typical of the age of the installed base',
      'Boilers fitted as a cheapest-option replacement in an unsuitable position',
    ],
    faq: {
      q: 'Is Glow-worm the same as Vaillant?',
      a: 'Same group, different range. Glow-worm is positioned as the value brand and Vaillant as the premium one, so they are not the same product and do not share all parts — but both are well supported and neither is an orphan brand.',
    },
  },
  {
    slug: 'alpha',
    name: 'Alpha Heating Innovation',
    tier: 'Tier 1',
    status: 'active',
    fuel: 'Gas and hybrid',
    installs: true,
    summary: 'An active UK range covering boilers alongside heat pumps and hybrid heating.',
    character:
      'Alpha makes gas boilers alongside heat pumps and hybrid systems, positioning it among the brands preparing for a slower move away from gas-only heating. Newer installations often choose an Alpha boiler on price. Ninja Plumbers tends to get asked about the hybrid side by people thinking about what eventually replaces a gas boiler, rather than by anyone ready to act on it now.',
    common: [
      'Standard combi faults — diverter, pressure, ignition',
      'Newer installations still inside their original warranty terms',
      'Systems where a hybrid arrangement has been part-specified',
    ],
    faq: {
      q: 'Should I be thinking about a heat pump instead of a new boiler?',
      a: 'It depends entirely on the property — insulation, radiator sizing and where the unit would go all matter more than the brand. For most London flats and terraces a heat pump is a bigger project than a boiler swap. We will give you a straight view rather than talking you into either.',
    },
  },
  {
    slug: 'vokera',
    name: 'Vokèra',
    tier: 'Tier 2',
    status: 'active',
    fuel: 'Gas',
    installs: true,
    summary: 'An active domestic gas range under Vokèra by Riello, with a substantial older installed base.',
    character:
      'Vokèra, now trading as Vokèra by Riello, has supplied UK domestic boilers for long enough to leave a sizeable installed base behind it. Ninja Plumbers sees them across London in properties where the boiler was replaced sometime in the 2000s or 2010s, and the current range is still active and supported.',
    common: [
      'Ageing units from the 2000s reaching the end of economic repair',
      'Pressure and sensor faults typical of higher-hour combis',
      'Installations where the boiler outlived the rest of the system',
    ],
    faq: {
      q: 'Can you still get parts for an older Vokèra?',
      a: 'For most of the common failures on the more recent installed base, yes. For units approaching twenty years the picture is patchier and worth establishing before committing to a repair — we check availability before quoting.',
    },
  },
  {
    slug: 'intergas',
    name: 'Intergas',
    tier: 'Tier 2',
    status: 'active',
    fuel: 'Gas and hybrid',
    installs: true,
    summary: 'Dutch-made boilers built around a design with markedly fewer moving parts than most.',
    character:
      'Intergas is genuinely different from most combis, not just differently branded: its design removes the diverter valve and plate heat exchanger that account for a large share of failures on conventional units. Fewer moving parts means fewer of the faults Ninja Plumbers spends most of its time on elsewhere. They are less common across London than the volume brands, but the people who own one usually chose it on purpose and know exactly why.',
    common: [
      'Far fewer mechanical failures than a conventional combi of the same age',
      'Faults more likely to be controls, sensors or the system rather than the boiler',
      'Less commonly carried parts, so occasional ordering',
    ],
    faq: {
      q: 'Why does an Intergas have fewer parts than other combis?',
      a: 'The heat exchanger design handles both heating and hot water without the separate diverter valve and secondary exchanger a conventional combi needs. Those two components are among the most common failures on other brands, so removing them removes a lot of the usual repair work.',
    },
  },
  {
    slug: 'atag',
    name: 'ATAG',
    tier: 'Tier 2',
    status: 'active',
    fuel: 'Gas',
    installs: true,
    summary: 'A specialist premium brand, usually chosen deliberately rather than fitted by default.',
    character:
      'ATAG is a premium specialist brand known for long heat exchanger warranties, and it is almost always chosen deliberately rather than being whatever an installer happened to have on the van. Across London, Ninja Plumbers usually finds ATAG boilers in properties where the whole heating system was properly specified rather than an afterthought. The range changes over time, so it is worth checking current model details rather than relying on anything model-specific.',
    common: [
      'Controls and sensor faults rather than heat exchanger failures',
      'Units still within long manufacturer warranty terms',
      'Parts that may need ordering rather than being van stock',
    ],
    faq: {
      q: 'Does servicing keep the long ATAG warranty valid?',
      a: 'Manufacturer warranties generally require documented annual servicing, and that applies here as much as anywhere. Check your own warranty paperwork for the exact terms — a skipped service is a common reason a claim is refused, whatever the headline warranty length.',
    },
  },
  {
    slug: 'ariston',
    name: 'Ariston',
    tier: 'Tier 2',
    status: 'active',
    fuel: 'Gas',
    installs: true,
    summary: 'An active Italian range of combi, system and regular gas boilers.',
    character:
      'Ariston runs an active UK range spanning combi, system and regular boilers, and it turns up more often in flats and smaller properties than in large houses. The brand also has a long history in water heating, so Ninja Plumbers engineers occasionally come across Ariston unvented cylinders working alongside the boilers.',
    common: [
      'Combi faults typical of the type — diverter, pressure, ignition',
      'Units fitted in compact flat installations with limited access',
      'Associated unvented cylinders needing their own periodic check',
    ],
    faq: {
      q: 'Do you work on Ariston cylinders as well as the boilers?',
      a: 'Yes. Unvented cylinders need their own competence and their own annual check, separate from the boiler service, and it is one people commonly forget until the discharge starts running.',
    },
  },
  {
    slug: 'ferroli',
    name: 'Ferroli',
    tier: 'Tier 2',
    status: 'active',
    fuel: 'Gas and light commercial',
    installs: true,
    summary: 'Italian-made domestic and light commercial boilers, useful where a job spans both.',
    character:
      'Ferroli covers both domestic and light commercial products, so it is a brand Ninja Plumbers meets on the commercial side of the work as well as in ordinary homes — small offices, shops and the flats above them. Across London the domestic installed base is, on average, older than the volume brands.',
    common: [
      'Older domestic units at the end of economic repair',
      'Light commercial installations in shops and premises above them',
      'Availability worth checking before committing to a repair on older models',
    ],
    faq: {
      q: 'Do you cover Ferroli in commercial premises as well as homes?',
      a: 'Yes — commercial plumbing and heating is work we do, and light commercial boilers sit inside that. The main practical difference is scheduling: this work usually has to happen outside trading hours.',
    },
  },
  {
    slug: 'navien',
    name: 'Navien',
    tier: 'Tier 2',
    status: 'active',
    fuel: 'Gas',
    installs: true,
    summary: 'A Korean manufacturer with an active UK gas range, known for high hot water flow rates.',
    character:
      'Navien is best known for combis that deliver unusually high hot water flow rates, making it a sensible option for a property that wants combi simplicity but places more demand on hot water than a typical combi can handle. Navien also makes oil boilers, though Ninja Plumbers covers the gas range only.',
    common: [
      'High-output combis specified for properties with heavy hot water demand',
      'Controls and sensor faults rather than mechanical wear',
      'Installations where flow rate was the reason for the choice',
    ],
    faq: {
      q: 'Can a Navien combi really run two showers?',
      a: 'The higher-output models deliver considerably more flow than a standard combi, but the honest answer depends on your incoming mains supply as much as the boiler. If the mains cannot deliver the flow, no combi can. We measure the incoming supply before recommending one.',
    },
  },
  {
    slug: 'potterton',
    name: 'Potterton',
    tier: 'Tier 2',
    status: 'active',
    fuel: 'Gas',
    installs: false,
    summary: 'A very large older installed base across London, now within the Baxi group.',
    character:
      'Potterton is part of the Baxi group now, and it has one of the largest older installed bases in the country — plenty of London properties still run one. Most Potterton call-outs Ninja Plumbers attends are repair, servicing and replacement of ageing units rather than anything new, and we would rather say that plainly than imply a full current range exists.',
    common: [
      'Ageing units well beyond their efficient life still in service',
      'Older heat-only boilers with separate cylinders and controls',
      'Repairs where parts availability is the deciding factor',
    ],
    faq: {
      q: 'Can I still get a new Potterton?',
      a: 'The brand sits within Baxi and the current domestic offering is limited, so most Potterton work is repair, service and replacement rather than new installation. If you want a replacement we would talk you through the current Baxi-group and other options rather than assume like-for-like.',
    },
  },
  {
    slug: 'keston',
    name: 'Keston',
    tier: 'Tier 2',
    status: 'active',
    fuel: 'Gas, domestic and light commercial',
    installs: true,
    summary: 'Twin-flue boilers that solve flue routing problems ordinary boilers cannot — particularly in London flats.',
    character:
      'Keston solves a problem that is particularly common in London. Its twin-flue design allows much longer flue runs than usual, which makes installation possible in flats and buildings where the boiler sits nowhere near an external wall and a conventional flue could never reach it. In high-rise and deep-plan conversions, that is sometimes the difference between Ninja Plumbers finding a workable installation and having none at all.',
    common: [
      'Long flue runs in flats where the boiler sits far from any external wall',
      'High-rise and deep-plan properties with constrained flue routing',
      'Condensate arrangements over long runs needing careful design',
    ],
    faq: {
      q: 'My flat has nowhere to put a normal boiler flue. Is that solvable?',
      a: 'Often yes, and this is exactly the case twin-flue systems exist for. They allow far longer flue runs than a standard boiler, so a unit can go somewhere a conventional flue could never reach. It needs designing properly rather than improvising, and we would look at the route before recommending it.',
    },
  },
  {
    slug: 'biasi',
    name: 'Biasi',
    tier: 'Tier 2',
    status: 'active',
    fuel: 'Gas',
    installs: true,
    summary: 'An Italian brand with active products and a significant repair and replacement installed base.',
    character:
      'Biasi has an active UK range, though what Ninja Plumbers sees far more of is its installed base of older units across London flats and terraces. Most Biasi work is repair and replacement rather than new installation.',
    common: [
      'Older units where the economics favour replacement',
      'Standard combi failures — diverter, pressure, ignition',
      'Parts availability worth confirming on the oldest models',
    ],
    faq: {
      q: 'Is Biasi a brand you still see much of?',
      a: 'In the installed base, yes — plenty of London properties have one. New installations are less common, so most of our Biasi work is keeping existing units going or replacing them when that stops making sense.',
    },
  },
  {
    slug: 'ravenheat',
    name: 'Ravenheat',
    tier: 'Tier 2',
    status: 'active',
    fuel: 'Gas',
    installs: false,
    summary: 'A UK manufacturer with a longstanding installed base; mostly repair and replacement work.',
    character:
      'Ravenheat is a UK manufacturer with a long history and a substantial installed base, particularly in property where the boiler was replaced on a budget. Ninja Plumbers focuses on repair and replacement here — current availability for new installation is worth confirming case by case rather than assumed, so it is not offered as a standing option.',
    common: [
      'Older units in rental and previously rented property',
      'Repairs where the deciding question is parts availability',
      'Replacements where the original was fitted as the cheapest option',
    ],
    faq: {
      q: 'Should I repair my Ravenheat or replace it?',
      a: 'Usually the same test as any brand, but parts availability weighs more heavily here than for the volume brands. We check what is obtainable for your specific fault before recommending either, because a cheap repair you cannot source is not a repair.',
    },
  },
  {
    slug: 'main-heating',
    name: 'Main Heating',
    tier: 'Tier 3',
    status: 'transitioning',
    fuel: 'Gas',
    installs: false,
    summary: 'A brand whose products now sit within Baxi, with a large installed base still in service.',
    character:
      'Main was once a widely fitted value brand, and its products now sit within Baxi rather than standing on their own. That matters in practice: London still has a large installed base of Main boilers, but calling it a fully independent current range would be misleading. Ninja Plumbers handles repair, servicing and replacement, and would talk through current Baxi-group options rather than pretend a like-for-like new Main still exists.',
    common: [
      'Large installed base of budget-fitted units now ageing',
      'Repairs where the part is a Baxi-group component',
      'Replacements where the original was a minimum-spec choice',
    ],
    faq: {
      q: 'Is Main still a separate boiler brand?',
      a: 'Not in the way it once was — it sits within Baxi now. Your existing Main boiler is still repairable and serviceable, and many of the parts are Baxi-group components. For a replacement we would look at the current range on its merits rather than assume the same badge.',
    },
  },
  {
    slug: 'heatline',
    name: 'Heatline',
    tier: 'Tier 4',
    status: 'legacy',
    fuel: 'Gas',
    installs: false,
    summary: 'A legacy brand: repair, servicing and replacement of an installed base, not new installation.',
    character:
      'Heatline is a legacy brand for new supply, and Ninja Plumbers treats it that way rather than pretending you can still buy one. A real installed base remains in London property, and those boilers can be serviced and, in many cases, repaired. When a Heatline finally reaches the end of its life, the conversation shifts to what replaces it.',
    common: [
      'Installed-base units being kept going rather than replaced on schedule',
      'Repairs where obtainable parts decide whether it is worth doing',
      'Replacements where the current alternatives need explaining from scratch',
    ],
    faq: {
      q: 'Can I get a new Heatline boiler?',
      a: 'Not as a current mainstream product, and we would rather say so plainly than take an order we cannot sensibly fill. We can service and often repair the one you have. When it needs replacing we will talk you through current alternatives that suit the property.',
    },
  },
  {
    slug: 'saunier-duval',
    name: 'Saunier Duval',
    tier: 'Tier 4',
    status: 'legacy',
    fuel: 'Gas',
    installs: false,
    summary: 'A legacy UK installed base: servicing, repair where practical, and replacement advice.',
    character:
      'Saunier Duval comes up regularly as a search term but not as something you can currently buy in the UK, and that distinction matters. The installed base is real, and plenty of those boilers are still working. Ninja Plumbers services and repairs them where parts allow, and says plainly when replacement is the better spend rather than stringing out repairs that no longer make sense.',
    common: [
      'Ageing installed-base units still in daily service',
      'Repairs constrained by what parts remain obtainable',
      'Replacement conversations where nothing carries the same badge',
    ],
    faq: {
      q: 'Are Saunier Duval boilers still supported?',
      a: 'Not as a current UK range for new installation. Servicing is straightforward and many repairs are still possible, but parts availability is the limiting factor and it is worth checking before spending on an older unit.',
    },
  },
  {
    slug: 'halstead',
    name: 'Halstead',
    tier: 'Tier 4',
    status: 'legacy',
    fuel: 'Gas',
    installs: false,
    summary: 'A legacy brand with ongoing repair and replacement demand from its installed base.',
    character:
      'Halstead is legacy for new supply, though its installed base still generates real repair and replacement work. Ninja Plumbers does not imply routine new availability that is not there. What we can do is service the boiler you have, repair it where parts still exist, and give an honest read on when the money is better spent on a replacement.',
    common: [
      'Installed-base units past their efficient life',
      'Repairs decided by parts availability more than by cost',
      'Replacement planning rather than emergency swaps where possible',
    ],
    faq: {
      q: 'My Halstead has failed. Repair or replace?',
      a: 'At the age most Halstead units now are, replacement is usually the better spend — but not always, and it depends on what has failed and whether the part exists. We will check before recommending, rather than assuming a legacy badge means write it off.',
    },
  },
];

// Build-time invariants, same principle as areas.ts and postcodes.ts.
{
  const problems: string[] = [];
  const seen = new Set<string>();
  for (const b of brands) {
    if (seen.has(b.slug)) problems.push(`duplicate slug: ${b.slug}`);
    seen.add(b.slug);
    if (b.status === 'legacy' && b.installs) {
      problems.push(`${b.slug}: legacy brands must not offer new installation`);
    }
    if (b.common.length < 3) problems.push(`${b.slug}: needs at least three points`);
  }
  if (problems.length) throw new Error('brands.ts invariants failed:\n  ' + problems.join('\n  '));
}

export default brands;
