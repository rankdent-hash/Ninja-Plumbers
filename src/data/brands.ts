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
      'Worcester Bosch is the brand most London households already have, which makes it the one we are called to most. The Greenstar range covers combi, system and heat-only in most domestic sizes. Its ubiquity is a practical advantage when something fails: parts are stocked more widely than for most brands, so a repair is less likely to mean waiting on an order.',
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
      'Vaillant is a German manufacturer with a long UK presence, and its ecoTEC range turns up constantly in London flats and converted properties — partly because the units are compact enough for the cupboard installations that conversions force. Of every boiler brand, this is the one people in London search for by name most often, which usually means they already have one and want someone who knows it.',
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
      'Ideal manufactures in the UK and its Logic range is one of the most commonly specified boilers for rental property and volume installations, largely on price and simplicity. That makes it a brand we see a lot of in converted flats and landlord-owned property across London. Parts are straightforward and generally available.',
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
      'Baxi has been fitted in British homes for decades and the group now also covers Potterton and Main, so a great many London properties have a Baxi-group boiler under one name or another. The installed base is old and varied, which means we see everything from current combis to units well past twenty years old still running.',
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
      'Viessmann sits at the premium end of the market and its Vitodens range is a common specification in higher-value London refurbishments, where the stainless steel heat exchanger and the longer expected life justify the cost. Because they are specified rather than defaulted to, we tend to see them in properties where the whole system was designed rather than inherited.',
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
      'Glow-worm sits within the Vaillant group as its value range, and has been fitted in British homes long enough that the installed base spans several decades of product. In London we see them most in properties where the boiler was replaced on a budget rather than specified, and in landlord-owned flats.',
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
      'Alpha supplies gas boilers alongside heat pumps and hybrid systems, which puts it among the brands positioned for the shift away from gas-only heating. Its boilers are commonly specified on price in newer installations. The hybrid side is more likely to come up in properties looking at what replaces a gas boiler eventually rather than now.',
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
      'Vokèra, now Vokèra by Riello, has supplied UK domestic boilers for long enough to leave a sizeable installed base, and we see them across London in properties whose boiler was replaced in the 2000s and 2010s. The current range is active and supported.',
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
      'Intergas is genuinely different in engineering terms rather than just in branding: the design does away with the diverter valve and the plate heat exchanger that account for a large share of failures on conventional combis. Fewer moving parts means fewer of the faults we spend most of our time on. They are less common in London than the volume brands, but the people who have them tend to know why.',
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
      'ATAG is a premium specialist brand known for long heat exchanger warranties, and it is almost always a deliberate choice rather than the default option an installer reached for. In London that means we usually find them in properties where the heating was properly specified. Verify current model details before relying on anything model-specific, as the range changes.',
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
      'Ariston supplies an active UK range across combi, system and regular boilers, and is more commonly seen in flats and smaller properties than in large houses. The brand also has a long history in water heating, so we occasionally meet Ariston unvented cylinders alongside the boilers.',
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
      'Ferroli covers domestic and light commercial products, which makes it a brand that comes up on the commercial side of our work as well as in homes — small offices, shops and premises above them. The domestic installed base in London is older on average than the volume brands.',
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
      'Navien is best known for combis with unusually high hot water flow rates, which makes them a sensible answer in a property that wants combi simplicity but has more demand than a typical combi handles. Navien also produce oil boilers; we cover the gas range only.',
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
      'Potterton sits within the Baxi group and has one of the largest older installed bases in the country — a great many London properties still run one. Most of our Potterton work is therefore repair, servicing and replacement of ageing units rather than new installation, and we would rather be straight about that than imply a full current range.',
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
      'Keston is the brand that matters most for a specifically London problem. Its twin-flue design allows very long flue runs, which makes installation possible in flats and buildings where the boiler cannot go near an external wall and a conventional flue simply will not reach. In high-rise and deep-plan conversions that is sometimes the difference between a workable installation and none.',
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
      'Biasi has an active UK range and, more relevantly for the work we actually see, a significant installed base of older units across London flats and terraces. Most Biasi calls are repair and replacement rather than new installation.',
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
      'Ravenheat is a UK manufacturer with a long history and a substantial installed base, particularly in property where boilers were replaced on a budget. We prioritise repair and replacement here: current availability for new installation is worth confirming case by case rather than assumed, so we do not offer it as a standing option.',
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
      'Main was a widely fitted value brand and its content and products now sit within Baxi rather than standing separately. That matters practically: there is a large installed base of Main boilers in London property, but treating it as a fully independent current range would be misleading. We handle repair, servicing and replacement, and would discuss current Baxi-group options rather than implying a like-for-like new Main.',
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
      'Heatline is a legacy brand as far as new supply is concerned, and we treat it that way rather than implying you can buy a new one. There is still a real installed base in London property, and those boilers can be serviced and in many cases repaired. When a Heatline reaches the end, the conversation is about what replaces it.',
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
      'Saunier Duval comes up regularly as a search but not as a current UK purchase, and the distinction matters. The installed base is genuine and some of those boilers are still working. We service and repair them where parts allow, and are straight about the point at which replacement is the better spend rather than stringing out repairs.',
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
      'Halstead is legacy for new supply, with an installed base that still generates real repair and replacement work. We do not imply routine new availability. What we can do is service what is there, repair it where parts exist, and give you an honest read on when the money is better spent on a replacement.',
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
