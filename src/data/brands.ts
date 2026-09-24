// Boiler brand pages.
//
// Twenty-one of the workbook's twenty-four brands. Grant UK, Firebird and
// Warmflow are held: all three are oil specialists, oil work needs OFTEC
// registration rather than Gas Safe, and that has not been confirmed for this
// business. The workbook's own rule says to publish them only when oil work is
// genuinely offered. The same rule applies inside brands that also make oil
// boilers (Worcester Bosch, Viessmann, Navien): their pages cover the gas range
// only and say so.
//
// No page here claims approved-installer or accredited status for any
// manufacturer, because none has been evidenced. What each page says is that
// we repair and service the brand, and — where the brand is currently supplied
// — that we install it.
//
// Fields, in the order the page is meant to show them:
//
//   summary          Hero intro. One sentence.
//   character        What the brand is and where Ninja Plumbers meets it.
//   range            The brand's current or typical domestic range in plain
//                    terms (combi / system / heat-only, where it sits in the
//                    market). For 'legacy' and 'transitioning' brands it
//                    explains what that status means for an owner.
//   common           Five patterns seen across the installed base.
//   servicing        Annual service and keeping this brand running. Every
//                    entry says the manufacturer warranty "usually" depends on
//                    annual servicing and tells the reader to check their
//                    warranty terms. None states a warranty length.
//   repairOrReplace  Honest guidance on when repair stops making sense.
//   faqs             Three brand questions. The page adds its own Gas Safe
//                    question after these.
//   faq              Kept for compatibility only. Derived from faqs[0] below,
//                    so there is one source of truth.
//
// Rules every field follows. `character`, `range`, `servicing` and
// `repairOrReplace` deliberately stop short of diagnosing specific models
// remotely or asserting parts availability, both of which change: where parts
// come up, the copy says we check before quoting. Brand facts (ownership,
// country, range names) are limited to ones that are well established; where
// a range changes often (ATAG, for example) the copy points to the data badge
// instead of naming models. No prices, response times, warranty lengths or
// guarantees.
//
// Measured London demand, for context on where effort is worth spending:
//   vaillant boiler repair london    260/mo   service 210   installation 110
//   ideal boiler repair london        70/mo
//   worcester bosch ... london        20/mo   service 10    replacement 0
//   viessmann 20 · baxi 10 · glow-worm 0
// Vaillant is the only brand with meaningful London-qualified demand. The rest
// are here for completeness and for the long tail, not because the volume is
// there. Vaillant, Worcester Bosch and Ideal carry the longest copy (roughly
// 950–1,100 rendered words a page). Every other brand is roughly 650–800.

export type Faq = { q: string; a: string };

export type Brand = {
  slug: string;
  name: string;
  tier: string;
  status: 'active' | 'transitioning' | 'legacy';
  fuel: string;
  installs: boolean;      // do we offer new installation of this brand
  summary: string;
  character: string;
  range: string;
  servicing: string;
  repairOrReplace: string;
  common: string[];       // exactly five
  faqs: Faq[];            // exactly three
  faq: Faq;               // compatibility: always faqs[0]
};

type BrandEntry = Omit<Brand, 'faq'>;

const entries: BrandEntry[] = [
  {
    slug: 'worcester-bosch',
    name: 'Worcester Bosch',
    tier: 'Tier 1',
    status: 'active',
    fuel: 'Gas, oil and LPG',
    installs: true,
    summary: 'The most widely fitted domestic boiler brand in the UK, and the one we see most often in London homes.',
    character:
      'Worcester Bosch is one of the most widely installed boiler brands in the UK, and in London it is the one Ninja Plumbers engineers get called out to most. The Greenstar range covers combi, system and heat-only in most domestic sizes. Because so many households own one, engineers meet the same handful of faults again and again, and the common repairs are well understood.',
    range:
      'Worcester Bosch has been owned by the German Bosch group for decades, but the boilers are still designed and built in Worcester. The gas boilers sit under the Greenstar name: combis for most flats and smaller houses, system boilers for homes with a pressurised cylinder, and heat-only (regular) boilers for older systems with tanks in the loft. Current models carry series numbers such as 4000 and 8000. Older ones, still all over London, carry letters instead — Greenstar i Junior, Si and CDi among them. It sits at the upper end of the mainstream: not the cheapest boiler an installer can fit, but rarely a surprising choice. Worcester also makes oil boilers, which need an OFTEC-registered engineer rather than Gas Safe. Ninja Plumbers does not currently offer oil work, so this page covers the gas Greenstar range.',
    servicing:
      'A Worcester needs the same annual service as any gas boiler, and its manufacturer warranty usually depends on it: a yearly service by a Gas Safe registered engineer, recorded in the service record at the back of the manual. Check your warranty terms, because the length and conditions vary with the model and with who installed it. Alongside the combustion and flue checks, the engineer cleans the condensate trap and checks the expansion vessel. If a magnetic system filter is fitted under the boiler, it gets emptied too, and on an older London system it often holds a surprising amount of black sludge. Greenstar displays show a fault code and, on many models, a cause code beside it. If the boiler has been locking out between services, photograph the display before resetting it.',
    repairOrReplace:
      'A Worcester under about ten years old is nearly always worth repairing. The faults that stop them — a diverter valve, a fan, a pump, an expansion vessel — are replaceable parts, not a reason to write off the boiler. The sums change when the expensive components go on an older unit. A new main control board or heat exchanger on a fifteen-year-old Greenstar is a lot to put into a boiler that has done most of its work, and we will say so. Two other things point towards replacement. A non-condensing Worcester, fitted before condensing boilers became the standard for new installations in England and Wales in 2005, uses noticeably more gas than a modern one. And a boiler that has needed three or four repairs over two winters is usually telling you something. The replacement need not be another Worcester: if the current one never kept up, a different size or type is worth discussing.',
    common: [
      'Diverter valve faults showing as hot water but no heating, or the reverse',
      'Low pressure and repeated refilling on older Greenstar units',
      'Lockouts after a frost, where the outside condensate pipe has frozen',
      'Hot water swinging between hot and lukewarm as limescale builds up on the hot water side',
      'Fault and cause codes on the display that point to the failed component',
    ],
    faqs: [
      {
        q: 'Do you need to be Worcester-accredited to work on one?',
        a: 'No. Any Gas Safe registered engineer can legally repair, service and install a Worcester Bosch boiler. Manufacturer accreditation schemes exist and can extend the warranty a manufacturer offers, but they are not a requirement for the work and we do not claim one we do not hold.',
      },
      {
        q: 'My Worcester is showing a fault code. Should I keep resetting it?',
        a: 'One reset is reasonable. Check the pressure gauge first, and that gas is reaching the hob. If it is freezing outside, look at the white plastic condensate pipe where it leaves the wall. If the boiler locks out again, stop. Repeated resets only restart it until the same fault stops it again, and a photo of the code is far more use to us.',
      },
      {
        q: 'Do you work on Worcester oil boilers?',
        a: 'No. Oil boilers need an OFTEC-registered engineer, a different registration from Gas Safe, and it is not work Ninja Plumbers currently offers. We would rather say so up front than send someone who cannot sign the job off.',
      },
    ],
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
    range:
      'Vaillant is a family-owned company based in Remscheid, Germany, and its group also owns Glow-worm and Saunier Duval. Its UK gas boilers sit under the ecoTEC name. The ecoTEC pro is the simpler, combi-only model. The ecoTEC plus comes as a combi, as a system boiler for homes with a pressurised cylinder, or as a heat-only model for an older open-vented system with a loft tank. The ecoTEC exclusive sits at the top. Vaillant is priced at the premium end of the mainstream. Older Vaillants still turn up regularly in London, especially non-condensing turboMAX units and early ecoMAX condensing boilers. Many can still be serviced and repaired, but they are a different conversation from a ten-year-old ecoTEC. Vaillant also makes aroTHERM heat pumps; this page is about the boilers.',
    servicing:
      'An ecoTEC needs a yearly service, and Vaillant’s warranty usually depends on it, along with registering the boiler after installation. Terms differ between models and installers, so check your warranty terms rather than assuming a headline length applies to yours. A good Vaillant service includes cleaning the condensate siphon and checking the pre-charge in the expansion vessel with the boiler side drained down. The vessel is one of the parts most likely to fail on these boilers, and finding a flat one at the service costs far less than a winter of topping up. Many London Vaillants live in a kitchen cupboard built snugly around them: clear it before the visit, and tell us if a shelf or door has to come out. In a flat, the boiler is normally the leaseholder’s responsibility, but a flue through communal parts may need the managing agent involved.',
    repairOrReplace:
      'A Vaillant under about twelve years old is usually worth repairing. The parts that fail most — expansion vessel, pump, pressure sensor, diverter valve, fan — are ordinary repairs on an ecoTEC, not signs of a boiler at the end of its life. The line moves on an older unit when the main heat exchanger fails, or the control board goes on a boiler that has already had several repairs. Then we price the repair and a replacement side by side and tell you which we would choose. The turboMAX units are a different case. Being non-condensing, they burn noticeably more gas for the same heat, and a major repair on one keeps an inefficient appliance going. We would still fix a small fault to get you through a cold spell, then suggest planning the replacement for spring rather than waiting for the next breakdown.',
    common: [
      'Expansion vessel failures presenting as pressure that will not hold',
      'Ignition and flame-sensing faults on higher-hour ecoTEC units',
      'Pump and pressure-sensor faults that stop the boiler firing at all',
      'Hot water that turns lukewarm in hard-water parts of the city',
      'Compact installations in cupboards where servicing access is tight',
    ],
    faqs: [
      {
        q: 'My Vaillant keeps losing pressure. Is that the boiler or the system?',
        a: 'Either, and it is worth knowing which before spending. A leak on the pipework or radiators loses water you can sometimes find; a failed expansion vessel loses pressure with nothing visible anywhere. The vessel is a common failure at this age of unit and is a repair rather than a replacement.',
      },
      {
        q: 'What do F.22 and F.28 mean on my Vaillant?',
        a: 'On ecoTEC boilers, F.22 is the low water pressure code: if the gauge reads below about 1 bar, top it up with the filling loop as the user manual describes. F.28 means the boiler tried to light and could not, so check that gas is reaching the hob and, on a prepayment meter, that there is credit. If either code comes back after one reset, leave it and call.',
      },
      {
        q: 'ecoTEC pro or ecoTEC plus — which do I need?',
        a: 'For a combi in a flat or smaller house, the pro is the simpler and cheaper choice and does the job well. The plus also comes in system and heat-only versions, so it suits homes that keep a hot water cylinder or tanks in the loft. We look at the property and the incoming mains before recommending either.',
      },
    ],
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
      'Ideal is a UK manufacturer, and its Logic range is one of the most commonly specified boilers for rental property and volume installations — mostly down to price and simplicity rather than any particular feature. It is a brand Ninja Plumbers engineers see constantly in converted flats and landlord-owned property across London. The design is straightforward to work on, which keeps most repairs simple.',
    range:
      'Ideal has built boilers in Hull for more than a century. It changed its name from Ideal Boilers to Ideal Heating a few years ago and is owned by the French group Groupe Atlantic. The Logic family is the workhorse, in combi, system and heat-only versions, with Logic+ and Logic Max as the better-specified options. Vogue is the higher-end range, and Ideal now makes heat pumps too. It sits at the value-to-mid end of the market, and it is the kind of boiler commonly found in new-build flats, buy-to-lets and housing association homes. Older Ideal names still turn up across London: the Icos and Isar in particular, and the floor-standing Mexico in some older houses. With those, the age of the boiler often decides what happens next more than the fault does.',
    servicing:
      'Ideal warranties usually depend on the boiler being registered after installation and serviced every year by a Gas Safe registered engineer, so check your warranty terms and keep each service record with the paperwork. On a Logic, a proper service includes the condensate trap and the outside condensate pipe, because that pipe is where many winter breakdowns start: a thin plastic run on an outside wall freezes, the boiler cannot drain, and it locks out. If yours runs outside, it is worth insulating or replacing with a wider pipe. London’s hard water is the other thing to watch. If a scale reducer was fitted on the incoming mains, the service is a good moment to check it still works, because scale on the hot water side builds slowly and shows up as water that will not stay hot.',
    repairOrReplace:
      'Ideal boilers cost less to buy than the premium brands, and that moves the point at which replacement makes sense. A Logic with a failed fan, pressure sensor or diverter valve is usually worth repairing whatever its age, because those parts are modest. The judgement comes when the main board or heat exchanger fails on a unit past about ten years old. The gap between that repair and a new boiler is smaller than on a Vaillant or Worcester, so replacement often wins sooner. The older Icos and Isar units deserve a plain answer: many are past the point where a big repair is good value, even if they still run. If a small, inexpensive part gets one going again, we will fix it and tell you it is time to plan.',
    common: [
      'Condensate blockages and freezing on external runs',
      'Pressure sensor and PCB faults on higher-hour Logic units',
      'Boilers fitted at minimum spec for a property that has since grown',
      'Older Icos and Isar units still running well past their expected life',
      'Rental properties where nobody can find the service history',
    ],
    faqs: [
      {
        q: 'Is an Ideal boiler worth repairing or should I replace it?',
        a: 'The same test as any brand: age, the cost of the failed part, and whether that part can still be obtained. Ideal units are inexpensive to replace, which shifts the maths towards replacement sooner than for a premium brand — but not automatically, and we will give you both figures.',
      },
      {
        q: 'My Ideal stopped working on a freezing morning. Is it broken?',
        a: 'Very often it is not. If the white plastic condensate pipe runs outside, it may have frozen, and the boiler locks out when it cannot drain. Pouring warm — not boiling — water along the pipe where it leaves the wall usually thaws it; then reset the boiler once. If it happens every cold snap, the pipe needs moving, insulating or widening.',
      },
      {
        q: 'I am a landlord. Is the yearly service the same as a gas safety certificate?',
        a: 'No. The gas safety certificate is the legal check every landlord needs each year, covering every gas appliance and flue in the property. The service is maintenance on the boiler itself, and it is what the manufacturer’s warranty usually asks for. Both can be done on one visit, which saves arranging access with your tenant twice.',
      },
    ],
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
    range:
      'Baxi is part of BDR Thermea, the European group that also owns Potterton, Main and the Heatrae Sadia cylinder brand. Current Baxi boilers carry series numbers such as 400, 600 and 800, with combis alongside system and heat-only models. In London the older installed base is the bigger story: Duo-tec, Platinum and EcoBlue combis from the 2000s and 2010s, and in older houses, Bermuda back boilers hidden in the fireplace behind a gas fire.',
    servicing:
      'On a current Baxi the warranty usually depends on registration and a yearly service, so check your warranty terms. A back boiler is different: it shares the chimney with the gas fire in front of it, so the engineer checks the fire, the boiler and the chimney as one job, and the flue check matters most. A carbon monoxide alarm in that room is a sensible precaution.',
    repairOrReplace:
      'On a Baxi combi from the last ten years, most faults are worth repairing. On Duo-tec and Platinum units it depends on what has failed: a fan or sensor, repair it; a heat exchanger or main board, get the replacement figure first. Replacing a back boiler is a bigger job than a normal swap. The boiler and usually the fire come out, and the new boiler goes elsewhere with its own flue and new pipework, so plan it for a warm month.',
    common: [
      'Fan and pressure-switch faults on older units',
      'Heat exchanger scaling in hard-water parts of London',
      'Very old units where replacement parts are becoming difficult',
      'Bermuda back boilers behind gas fires, still in daily use',
      '2000s and 2010s combis reaching the age where bigger parts fail',
    ],
    faqs: [
      {
        q: 'My Baxi is over twenty years old. Can it still be repaired?',
        a: 'Sometimes, and sometimes it should not be. The question is whether parts are still obtainable for the specific failure — some are, some are long gone. At that age we would look at it honestly and tell you if you are spending money on something with a year left in it.',
      },
      {
        q: 'There is a boiler behind my gas fire. What is it?',
        a: 'A back boiler, and a Baxi Bermuda is one of the most common. It heats the radiators and hot water cylinder, separately from the fire in front, and it can still be serviced, with the chimney checked too.',
      },
      {
        q: 'Are Baxi, Potterton and Main the same boiler?',
        a: 'Same group, not the same boiler. Each has its own model numbers, and the right part depends on exactly which one you have. The data badge on the boiler tells us.',
      },
    ],
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
    range:
      'Viessmann is a German business founded in 1917, and since 2024 its heating business has been part of the American group Carrier. Its gas boilers are sold as Vitodens, in combi, system and heat-only versions, all built around a stainless steel heat exchanger. The 050 and 100 series are the more affordable end; the 200 series and above are the higher-specification models. Its oil boilers are outside what we do, since oil work needs OFTEC registration rather than Gas Safe, so our Viessmann work is on the gas range.',
    servicing:
      'A Vitodens needs a yearly service, and Viessmann’s warranty usually depends on it being done and recorded, so check your warranty terms. The heat exchanger is built to last but still needs inspecting and cleaning. Many Vitodens boilers run on weather compensation, using an outdoor sensor, and those settings are part of what we check: a badly set heating curve leaves a house too cool, or burning more gas than it should.',
    repairOrReplace:
      'Because a Viessmann costs more to buy, it earns a longer run of repairs. Sensor, electrode and control faults are the usual failures, and they are worth fixing on almost any Vitodens. If the heat exchanger fails on an older unit outside warranty, replacement usually wins, but read the paperwork first in case it is still covered.',
    common: [
      'Control and sensor faults rather than mechanical failures',
      'Units specified for a system that was later altered',
      'Parts that may need ordering rather than coming off the van',
      'Weather compensation set up wrongly, or switched off',
      'Ignition electrode wear showing up as occasional lockouts',
    ],
    faqs: [
      {
        q: 'Are Viessmann parts harder to get than other brands?',
        a: 'They are less commonly carried as van stock than Worcester or Ideal, so a repair can occasionally mean an order rather than a same-visit fix. We will tell you at diagnosis whether the part is one we can get quickly.',
      },
      {
        q: 'Is a Viessmann worth the extra cost?',
        a: 'It can be, in a house you plan to stay in, with a heating system designed around it. In a small flat with simple heating, the difference over a well-fitted mid-range combi is harder to justify, and we would say so.',
      },
      {
        q: 'What is the outdoor sensor on my Viessmann for?',
        a: 'It lets the boiler run cooler water round the radiators in mild weather and hotter water when it is cold, which keeps it efficient for more of the year. Leave it connected. If the house feels wrong, the settings need adjusting.',
      },
    ],
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
    range:
      'Glow-worm is based in Belper, Derbyshire, and has been the Vaillant group’s value brand for more than twenty years. Betacom and Easicom are compact budget combis. The Energy range covers combi, system and heat-only boilers in the middle of the market, and Ultimate is the better-specified option. A well-installed Energy combi does the same job as plenty of dearer boilers in a two-bedroom flat.',
    servicing:
      'The warranty usually depends on registration and an annual service by a Gas Safe engineer; check your warranty terms, as they vary by model and installer. Because many Glow-worms were fitted to a budget, the service often finds corners cut at installation rather than boiler faults: no magnetic filter on a sludgy system, an unprotected condensate pipe outside, or a pressure relief pipe ending somewhere it should not.',
    repairOrReplace:
      'The lower purchase price cuts both ways. A small repair is usually worth doing at any age, because it keeps an inexpensive boiler going for little outlay. A big repair on an older Betacom or Easicom is different: once it is a large fraction of the price of a new boiler and the unit is past ten years, replacement often wins. Energy and Ultimate models need a case-by-case answer.',
    common: [
      'Older units at the end of their economic life',
      'Diverter and pressure faults typical of the age of the installed base',
      'Boilers fitted as a cheapest-option replacement in an unsuitable position',
      'Systems with no magnetic filter, where sludge shortens the boiler’s life',
      'Condensate pipes outside with no frost protection',
    ],
    faqs: [
      {
        q: 'Is Glow-worm the same as Vaillant?',
        a: 'Same group, different range. Glow-worm is positioned as the value brand and Vaillant as the premium one, so they are not the same product and do not share all parts — but both are well supported and neither is an orphan brand.',
      },
      {
        q: 'Is a Glow-worm a false economy?',
        a: 'Not necessarily. Fitted properly on a clean system and serviced yearly, one can run reliably for a long time. Most problems we see come from the installation and upkeep rather than the badge, though the budget combis do reach the end of their economic life sooner.',
      },
      {
        q: 'My Glow-worm has failed. Should I upgrade to a Vaillant?',
        a: 'Only if a Vaillant suits your home, not because it is the dearer name in the same group. We give you options at more than one price, and sometimes the right answer is another Glow-worm, installed better.',
      },
    ],
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
    range:
      'Alpha Heating Innovation is the current name for Alpha, a UK boiler company owned by the Italian manufacturer Immergas. Its gas boilers include the E-Tec, InTec and Evoke ranges, covering combi, system and heat-only models, and it also sells heat pumps and hybrid set-ups. It is priced for the value-to-mid market and is more often an installer’s choice than one asked for by name.',
    servicing:
      'An Alpha needs a yearly service, and its warranty usually depends on that and on registration after installation. Check your warranty terms; a missed year is a common reason claims are refused. Some Alpha models were supplied with a flue gas heat recovery unit, which pre-warms incoming cold water using heat from the flue. If yours has one, it belongs in the service. On a hybrid, the heat pump needs its own maintenance.',
    repairOrReplace:
      'Many Alphas in London are young enough to be under warranty, so check that before paying for anything. Out of warranty, a failed fan, pump, sensor or diverter valve is normally worth repairing. On older Alpha combis from the 2000s, a heat exchanger or control board failure usually points towards replacement.',
    common: [
      'Standard combi faults — diverter, pressure, ignition',
      'Newer installations still inside their original warranty terms',
      'Systems where a hybrid arrangement has been part-specified',
      'Flue gas heat recovery units left out of previous services',
      'Older Alpha combis from the 2000s at the end of economic repair',
    ],
    faqs: [
      {
        q: 'Should I be thinking about a heat pump instead of a new boiler?',
        a: 'It depends entirely on the property — insulation, radiator sizing and where the unit would go all matter more than the brand. For most London flats and terraces a heat pump is a bigger project than a boiler swap. We will give you a straight view rather than talking you into either.',
      },
      {
        q: 'My Alpha is still under warranty. Should I call you or Alpha?',
        a: 'Call the manufacturer first: a covered repair is normally arranged through them, usually at no cost to you. If it is not covered, we can diagnose and repair it with the price agreed before work starts.',
      },
      {
        q: 'Is Alpha a British or an Italian brand?',
        a: 'Both, in a sense: a UK company owned by the Italian manufacturer Immergas. For a repair, what matters is the exact model and part.',
      },
    ],
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
    range:
      'Vokèra sits within Riello, the Italian heating group, hence the name Vokèra by Riello on newer boilers. It sells combi, system and heat-only gas boilers in the value-to-mid market, and installers fitted them in large numbers through the 2000s and 2010s, which is why so many turn up in London flats and terraces. Older models include the Mynute, Linea and Compact, and on many of those, age is now the main question.',
    servicing:
      'The warranty on newer models usually depends on a yearly service and registration, so check your warranty terms. Alongside the standard checks, the pressure relief pipe outside is worth a look: a drip from it suggests pressure running too high, often a vessel that has lost its charge or a filling loop left slightly open.',
    repairOrReplace:
      'A Vokèra from the last ten to twelve years is usually worth repairing. On a unit approaching twenty, we check the part for your fault can be sourced before quoting, and if a major part fails at that age, replacement is normally the better spend. If the boiler has outlived the radiators and controls around it, a replacement is the time to deal with those too.',
    common: [
      'Ageing units from the 2000s reaching the end of economic repair',
      'Pressure and sensor faults typical of higher-hour combis',
      'Installations where the boiler outlived the rest of the system',
      'Pressure relief valves dripping outside as system pressure runs high',
      'Combis in tight flat cupboards, where access shapes the job',
    ],
    faqs: [
      {
        q: 'Can you still get parts for an older Vokèra?',
        a: 'For most of the common failures on the more recent installed base, yes. For units approaching twenty years the picture is patchier and worth establishing before committing to a repair — we check availability before quoting.',
      },
      {
        q: 'Is Vokèra the same company as Riello?',
        a: 'Vokèra is part of Riello, which is why the brand now appears as Vokèra by Riello. For repairs, what matters is the exact model on the data badge rather than the name on the front.',
      },
      {
        q: 'Why does the hot water from my Vokèra combi go hot and cold?',
        a: 'Several things cause it, and we would rather check than guess. Limescale on the hot water side is a common one in London, and a sticking diverter valve can do the same. A combi also needs a minimum flow to keep the burner lit, so a tap barely open can make the temperature cycle.',
      },
    ],
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
    range:
      'Intergas is a Dutch manufacturer based in Coevorden, best known in the UK for combis such as the Combi Compact HRE and Xclusive. Most combis have a separate plate heat exchanger for hot water and a diverter valve switching between heating and hot water. In an Intergas the main heat exchanger does both jobs, with two separate water circuits built into it. Hybrid options with a heat pump are offered too.',
    servicing:
      'An Intergas warranty usually depends on a yearly service, so check your warranty terms, which vary with the model and the installer. Because hot water runs through the main heat exchanger rather than a separate plate, limescale in hard London water still matters, and scale protection on the mains is worth having. So is clean heating water, with inhibitor and a filter.',
    repairOrReplace:
      'An Intergas fault is usually worth repairing: there is less to go wrong, and the parts that fail — a sensor, fan, pump or the controls — are modest next to the price of a new boiler. Replacement makes sense when the main heat exchanger fails outside warranty on an older unit. If someone unfamiliar with the design wants to condemn a working one, get a second opinion.',
    common: [
      'Far fewer mechanical failures than a conventional combi of the same age',
      'Faults more likely to be controls, sensors or the system rather than the boiler',
      'Less commonly carried parts, so occasional ordering',
      'Dirty water from an older heating system wearing on a newer boiler',
      'Boilers condemned by engineers unfamiliar with the design',
    ],
    faqs: [
      {
        q: 'Why does an Intergas have fewer parts than other combis?',
        a: 'The heat exchanger design handles both heating and hot water without the separate diverter valve and secondary exchanger a conventional combi needs. Those two components are among the most common failures on other brands, so removing them removes a lot of the usual repair work.',
      },
      {
        q: 'Is it hard to find someone who knows Intergas boilers?',
        a: 'They are less common in London than the volume brands, so not every engineer sees them often. The design is simpler, not more complicated, but it is different. Ninja Plumbers works on them and will tell you at diagnosis if a part has to be ordered in.',
      },
      {
        q: 'Does an Intergas still need servicing every year?',
        a: 'Yes. There is less to wear out, but combustion, the flue, seals and the condensate trap still need checking, and the warranty usually depends on it.',
      },
    ],
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
      'ATAG is a premium specialist brand known for long heat exchanger warranties, and it is almost always chosen deliberately rather than being whatever an installer happened to have on the van. Across London, Ninja Plumbers usually finds ATAG boilers in homes whose heating was specified as a whole rather than as an afterthought. The range changes over time, so it is worth checking current model details rather than relying on anything model-specific.',
    range:
      'ATAG is a Dutch heating manufacturer selling gas combi, system and heat-only boilers at the premium end of the UK market. Its selling point has long been the heat exchanger, backed by warranties well beyond what most brands offer. It is usually chosen by a homeowner who has researched it, or by an installer who specialises in it and designs the system around it.',
    servicing:
      'The long heat exchanger warranty is only as good as its conditions. Those usually include registration and a yearly service by a Gas Safe engineer, and often the condition of the heating water, so check your warranty terms for exactly what yours asks. A good ATAG service therefore looks at the water too: whether inhibitor is present, and whether any system filter has been cleaned.',
    repairOrReplace:
      'While the heat exchanger warranty runs, the biggest failure may well be covered, so check before paying. Outside it, the usual failures are sensors, fans, ignition parts and controls, worth repairing on almost any ATAG because the core is built to last. Replacement only comes up when a major part fails on an older unit outside every warranty, or the house has outgrown the boiler.',
    common: [
      'Controls and sensor faults rather than heat exchanger failures',
      'Units still within long manufacturer warranty terms',
      'Less familiar parts that are ordered in rather than carried',
      'Gaps in the service history that could put a claim at risk',
      'Heating water without inhibitor, which warranty terms often mention',
    ],
    faqs: [
      {
        q: 'Does servicing keep the long ATAG warranty valid?',
        a: 'Manufacturer warranties generally require documented annual servicing, and that applies here as much as anywhere. Check your own warranty paperwork for the exact terms — a skipped service is a common reason a claim is refused, whatever the headline warranty length.',
      },
      {
        q: 'Why would anyone choose ATAG over a better-known brand?',
        a: 'Usually for the heat exchanger and the warranty behind it, and because installers who fit ATAG tend to design the whole system rather than just swap a boiler. Whether that is worth the premium depends on how long you plan to stay.',
      },
      {
        q: 'Can my ATAG be serviced by someone other than the installer?',
        a: 'Yes. Any Gas Safe registered engineer can service it, and warranties usually need the service done and recorded rather than done by a particular firm. Some installer-backed extended warranties carry their own conditions, so follow your paperwork.',
      },
    ],
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
    range:
      'Ariston belongs to Ariston Group, an Italian company based in Fabriano, and sells gas boilers in the UK alongside a large range of water heaters. The Clas range is the value option and Genus the better-specified one; older Microgenus combis still turn up in London flats. The group also owns Chaffoteaux, the French brand behind a good number of older UK combis, so an ageing Chaffoteaux is a relative rather than a stranger.',
    servicing:
      'As with most makes, the warranty is usually conditional on registration and yearly servicing; check your warranty terms. On a combi in a small flat, the engineer pays particular attention to scale on the hot water side. An unvented cylinder, whatever its make, needs its own annual check. Mention it when booking and we can cover both in one trip, which is worth it in a flat where parking and access are the hardest part.',
    repairOrReplace:
      'On a Clas or Genus from the last ten years or so, most faults are worth repairing. Older Microgenus and Chaffoteaux combis are a harder call: a significant failure at that age is often better spent on a replacement, and we check the part can be obtained before quoting. If the combi is struggling to serve a flat that now has a second shower room, more than the broken part may need changing.',
    common: [
      'Combi faults typical of the type — diverter, pressure, ignition',
      'Units fitted in compact flat installations with limited access',
      'Associated unvented cylinders needing their own periodic check',
      'Older Microgenus and Chaffoteaux combis at the end of economic repair',
      'Scale on the hot water side from London’s hard water',
    ],
    faqs: [
      {
        q: 'Do you work on Ariston cylinders as well as the boilers?',
        a: 'Yes. Unvented cylinders need their own competence and their own annual check, separate from the boiler service, and it is one people commonly forget until the discharge starts running.',
      },
      {
        q: 'Is Chaffoteaux the same as Ariston?',
        a: 'Same group, different brand. Chaffoteaux is owned by Ariston Group, but its boilers are a separate range with their own model numbers. The data badge decides which parts fit, not the group name.',
      },
      {
        q: 'What is the difference between an Ariston Clas and a Genus?',
        a: 'The Clas is the value range and the Genus the higher-specification one. Both are ordinary gas boilers to service and repair. The better question is which suits your home: for a small flat, a Clas may be all you need.',
      },
    ],
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
    range:
      'Ferroli is an Italian manufacturer with, unusually for a domestic brand, a substantial light commercial side: in the UK it sells gas boilers for homes and larger ones for small commercial buildings. The domestic side sits at the value end, and many Ferrolis we meet in London were fitted a good while ago and left alone since. So age is the first thing to establish, from the data badge.',
    servicing:
      'At home, a Ferroli needs a yearly service, and on a newer model the warranty usually depends on it, so check your warranty terms. On older units the service is about safety and catching wear. In commercial premises it has to fit around trading: before opening or after closing, with access agreed if a flat above shares a stairway or meter cupboard.',
    repairOrReplace:
      'Because much of the domestic installed base is older, age usually matters more than the fault. Past about twelve years, a major failure normally points to replacement, and before quoting any repair we confirm the part can be sourced. Smaller faults are worth fixing on a sound boiler. In a shop or office, the cost of closing counts too: a repair that keeps you trading can be worth it, with a replacement planned for a quieter time.',
    common: [
      'Older domestic units at the end of economic repair',
      'Light commercial installations in shops and premises above them',
      'Availability worth checking before committing to a repair on older models',
      'Boilers left unserviced for years, with wear to match',
      'Mixed-use buildings where the shop and flat above share access',
    ],
    faqs: [
      {
        q: 'Do you cover Ferroli in commercial premises as well as homes?',
        a: 'Yes — commercial plumbing and heating is work we do, and light commercial boilers sit inside that. The main practical difference is scheduling: this work usually has to happen outside trading hours.',
      },
      {
        q: 'Is Ferroli a good boiler brand?',
        a: 'It is a sound, value-focused brand. How a boiler was installed and whether it has been serviced make more difference to reliability than the name on the front, and with Ferroli the conversation is usually about age.',
      },
      {
        q: 'Can you service the boiler before we open in the morning?',
        a: 'Tell us your trading hours when you book and we will work around them where we can. Early or late appointments are best arranged in advance rather than on the day.',
      },
    ],
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
    range:
      'Navien belongs to KD Navien, a South Korean heating company that is a major name at home and in North America, and it reached the UK later than most of the brands we cover. Its UK gas range is built around combis designed for more hot water flow than usual, for homes that want a combi but have more than one bathroom. A high-flow combi can only deliver what the incoming mains gives it, and in parts of London the mains is the limit.',
    servicing:
      'Navien’s warranty usually asks for the boiler to be registered and serviced every year — check your warranty terms for the details. A high-flow combi moves more water through its heat exchanger than most, so in hard-water London the scale reducer on the incoming mains deserves a look at every service. If the boiler is not giving the flow it should, the service is a good time to measure the incoming mains, because the cause may be outside the boiler.',
    repairOrReplace:
      'Most Navien installations in London are fairly recent, so check the warranty first, and expect repair to be the answer. Faults tend to be sensors and controls rather than wear. Parts may need ordering, which can mean a wait. On an older unit with a major failure outside warranty, ask whether you still need a high-flow combi before replacing like for like.',
    common: [
      'High-output combis specified for properties with heavy hot water demand',
      'Controls and sensor faults rather than mechanical wear',
      'Installations where flow rate was the reason for the choice',
      'Incoming mains too weak for the flow the boiler can deliver',
      'Scale on the hot water side, which a high-flow combi feels sooner',
    ],
    faqs: [
      {
        q: 'Can a Navien combi really run two showers?',
        a: 'The higher-output models deliver considerably more flow than a standard combi, but the honest answer depends on your incoming mains supply as much as the boiler. If the mains cannot deliver the flow, no combi can. We measure the incoming supply before recommending one.',
      },
      {
        q: 'Does a high-flow combi cost more to run?',
        a: 'Not in itself. A combi burns gas only while it is heating water or radiators, so running costs follow how much hot water you use, not how much the boiler could deliver.',
      },
      {
        q: 'Is Navien a new brand?',
        a: 'Not new, just newer to the UK. Navien has made heating products in Korea for decades and is widely used in North America. The UK installed base is smaller, which is why parts are sometimes ordered in.',
      },
    ],
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
    range:
      'Potterton now sits within the Baxi group, owned by BDR Thermea, and its current range is small. What we meet is the older installed base. Heat-only boilers are the classic Potterton: the Suprima and Netaheat, often in Victorian and Edwardian terraces, with a cylinder in the airing cupboard and tanks in the loft. Combis such as the Performa and Puma turn up too. Many are non-condensing, so replacement is always in the background.',
    servicing:
      'A Potterton heat-only boiler is serviced as part of a wider system. The engineer also looks at what it depends on: the loft tank and its float valve, the pump, the motorised valves and the programmer, which on an old open-vented system cause more lost heating than the boiler does. On a newer Potterton the warranty usually depends on an annual service, so check your warranty terms.',
    repairOrReplace:
      'On a sound older Potterton, a modest repair is often worth it once we have checked the part is obtainable. When replacement comes, a new heat-only boiler keeps the cylinder and loft tanks and is the least disruptive. A system boiler or combi frees the loft, but puts old radiators and joints under more pressure than they are used to, and weak spots can show.',
    common: [
      'Ageing units well beyond their efficient life still in service',
      'Older heat-only boilers with separate cylinders and controls',
      'Repairs where parts availability is the deciding factor',
      'Loft tanks and float valves causing faults blamed on the boiler',
      'Sticking motorised valves and programmers',
    ],
    faqs: [
      {
        q: 'Can I still get a new Potterton?',
        a: 'The brand sits within Baxi and the current domestic offering is limited, so most Potterton work is repair, service and replacement rather than new installation. If you want a replacement we would talk you through the current Baxi-group and other options rather than assume like-for-like.',
      },
      {
        q: 'My Potterton heats the water but not the radiators. Is the boiler broken?',
        a: 'Not necessarily. On a heat-only system, a stuck motorised valve or a programmer that has lost its settings can shut off the radiators while the boiler is fine. Check the programmer first; if heating is on and nothing warms up, that is where an engineer starts.',
      },
      {
        q: 'Should I swap my old Potterton for a combi?',
        a: 'For a flat or small house with one bathroom and decent mains pressure, often yes. With two bathrooms, a system boiler and cylinder usually suits better.',
      },
    ],
  },
  {
    slug: 'keston',
    name: 'Keston',
    tier: 'Tier 2',
    status: 'active',
    fuel: 'Gas, domestic and light commercial',
    installs: true,
    summary: 'Twin-flue boilers that solve flue problems ordinary boilers cannot — particularly in London flats.',
    character:
      'Keston solves a problem that is particularly common in London. Its twin-flue design allows much longer flue runs than usual, which makes installation possible in flats and buildings where the boiler sits nowhere near an external wall and a conventional flue could never reach it. In high-rise and deep-plan conversions, that is sometimes the difference between Ninja Plumbers finding a workable installation and having none at all.',
    range:
      'Keston is a British brand built around one idea: a condensing boiler whose flue uses two small plastic pipes, one for air in and one for exhaust out. That flue can run much further, round more bends, than a standard one. Keston makes combi, system and heat-only boilers, plus larger light commercial models, and many London Kestons sit in blocks and deep conversions with flues through ceiling voids.',
    servicing:
      'The flue is what makes a Keston different to service. Both pipes are checked along their length, and industry guidance since 2013 says a flue hidden in a ceiling void needs inspection hatches; without them the installation can be classed "at risk". On newer models, check your warranty terms: they usually require an annual service. Tell us where the flue comes out when you book.',
    repairOrReplace:
      'A Keston is often worth repairing for longer than most boilers, because replacing it is not always simple: if the flue only works thanks to the twin-pipe design, an ordinary boiler may not fit in the same place. When one does reach the end, the replacement needs designing before we quote, including whether the flue can be reused.',
    common: [
      'Long flue runs in flats where the boiler sits far from any external wall',
      'High-rise and deep-plan properties where the flue has few places to go',
      'Condensate arrangements over long runs needing careful design',
      'Flues concealed in ceiling voids with no inspection hatches',
      'Roof and high-wall terminals that need planned access',
    ],
    faqs: [
      {
        q: 'My flat has nowhere to put a normal boiler flue. Is that solvable?',
        a: 'Often yes, and this is exactly the case twin-flue systems exist for. They allow far longer flue runs than a standard boiler, so a unit can go somewhere a conventional flue could never reach. It needs designing properly rather than improvising, and we would look at the path the flue would take before recommending it.',
      },
      {
        q: 'Why does my boiler flue need inspection hatches?',
        a: 'So the whole flue can be seen and confirmed sound. In a block of flats, the managing agent or freeholder may need to approve work to ceilings or communal areas, so raise it early.',
      },
      {
        q: 'Can I replace my Keston with another brand?',
        a: 'Sometimes. It depends on whether another boiler’s flue can reach outside from where yours sits. In some flats the twin-pipe design is the only thing that makes a boiler possible at all.',
      },
    ],
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
    range:
      'Biasi is an Italian boiler maker whose combis and system boilers were fitted widely at the budget end of the UK market, particularly in flats and smaller terraces. Riva, Garda and Inovia are the names most owners will recognise on the front. The brand still has a UK range, but we far more often meet boilers fitted years ago as the cheapest sensible option, now at an age where running costs and reliability start to matter.',
    servicing:
      'Newer models usually need a yearly service to keep the warranty valid, so check your warranty terms. For older ones, the yearly visit is about safety and spotting wear early, with a close look at the expansion vessel and pressure relief valve, since slow pressure loss is common at this age. Many budget installations went in without a magnetic filter, and that visit is a sensible moment to add one, priced separately.',
    repairOrReplace:
      'On an older Biasi, weigh the cost of the failed part against the life left in the boiler. A diverter valve, sensor or relief valve on a working unit is usually worth replacing. A heat exchanger or main board past ten or twelve years usually is not; that money is better put towards a new boiler. If the Biasi was squeezed into an awkward spot, replacement is the chance to move it.',
    common: [
      'Older units where the economics favour replacement',
      'Standard combi failures — diverter, pressure, ignition',
      'Parts availability worth confirming on the oldest models',
      'Slow pressure loss through tired vessels and relief valves',
      'Budget installations with no system filter and little inhibitor',
    ],
    faqs: [
      {
        q: 'Is Biasi a brand you still see much of?',
        a: 'In the installed base, yes — plenty of London properties have one. New installations are less common, so most of our Biasi work is keeping existing units going or replacing them when that stops making sense.',
      },
      {
        q: 'How do I know which Biasi I have?',
        a: 'The model name is usually on the front, with full details on the data badge. A photo of both on WhatsApp helps us bring the right parts, though we still confirm the fault on site before quoting.',
      },
      {
        q: 'Is a new Biasi worth considering?',
        a: 'It can be for a smaller flat on a tight budget, and we can install one. We would put it alongside other options at a similar price, so you can compare warranty and running costs.',
      },
    ],
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
    range:
      'Ravenheat is a British manufacturer whose boilers were fitted widely in rented and budget-refurbished homes, and that is still where we meet them in London: buy-to-let flats, homes renovated for sale, and properties where someone long gone chose the boiler on price. For an owner, the boiler on the wall is worth looking after, but the plan for replacing it should not rely on buying the same again.',
    servicing:
      'Ravenheats in rented homes often come with little or no service history, so the first service is partly detective work, noting anything clearly worked on before. On a fairly new unit, any remaining warranty usually depends on annual servicing, so check your warranty terms. Keep the record with the property paperwork. For landlords, the gas safety certificate is a separate legal check.',
    repairOrReplace:
      'Parts availability weighs more heavily on a Ravenheat than on the volume brands, so we establish what can be obtained for your fault before recommending anything. If the part is available and the boiler is sound, repair is usually the sensible spend; if not, or the unit keeps needing repairs, replacement is the honest answer. For landlords, a tenant left without heating while a repair is uncertain has its own cost.',
    common: [
      'Older units in rental and previously rented property',
      'Repairs where the deciding question is parts availability',
      'Replacements where the original was fitted as the cheapest option',
      'Boilers with no service history at all',
      'Flue terminals and condensate pipes never finished properly',
    ],
    faqs: [
      {
        q: 'Should I repair my Ravenheat or replace it?',
        a: 'Usually the same test as any brand, but parts availability weighs more heavily here than for the volume brands. We check what is obtainable for your specific fault before recommending either, because a cheap repair you cannot source is not a repair.',
      },
      {
        q: 'My tenant says the Ravenheat keeps cutting out. What should I do?',
        a: 'Ask for a photo of the display and pressure gauge, then book a visit rather than talking them through repeated resets. A boiler that keeps locking out has a reason, and it needs finding on site.',
      },
      {
        q: 'The boiler came with the flat and there is no paperwork. Is that a problem?',
        a: 'It is common. A service establishes the boiler’s condition and gives you a record to start from. If anything is unsafe, the engineer explains what and why first.',
      },
    ],
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
    range:
      'Main was a value brand, fitted widely by installers and landlords who wanted a dependable boiler at a low price. Its products now sit within Baxi, part of BDR Thermea. For an owner, "transitioning" means your Main is still an ordinary gas boiler that any Gas Safe engineer can service and repair, often with Baxi-group parts. It does not mean you can order a like-for-like new Main.',
    servicing:
      'Most Main boilers are old enough that any warranty has run out; if yours is newer, the warranty will usually hinge on annual servicing, so check your warranty terms. The engineer looks for the signs of age these budget-fitted boilers tend to show: tired expansion vessels, weeping valves and condensate pipes never protected from frost.',
    repairOrReplace:
      'Where the failed part is a Baxi-group component that can be sourced, a repair on a sound Main is usually worth it. Where a major part fails on a boiler past twelve years, or the part cannot be found, replace it. If your Main was a minimum-size combi in a flat that has since gained a bathroom or loft room, a properly sized replacement fixes a problem you may have lived with for years.',
    common: [
      'Large installed base of budget-fitted units now ageing',
      'Repairs where the part is a Baxi-group component',
      'Replacements where the original was a minimum-spec choice',
      'Expansion vessels and valves worn out after years without servicing',
      'Combis too small for a home that has since grown',
    ],
    faqs: [
      {
        q: 'Is Main still a separate boiler brand?',
        a: 'Not in the way it once was — it sits within Baxi now. Your existing Main boiler is still repairable and serviceable, and many of the parts are Baxi-group components. For a replacement we would look at the current range on its merits rather than assume the same badge.',
      },
      {
        q: 'My Main is old but still working. Should I replace it now?',
        a: 'Not just because of its age. If it is safe, serviced and not costing you in repairs, running it on is reasonable. Plan a replacement when repairs start adding up, ideally in the warmer months.',
      },
      {
        q: 'What is the kettle-like rumbling from my Main?',
        a: 'Usually water boiling in pockets inside the heat exchanger, where limescale or sludge has restricted the flow. It is common on older boilers in hard-water London, and it needs looking at rather than ignoring.',
      },
    ],
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
    range:
      'Heatline boilers are no longer sold as a current mainstream product; that is what "legacy" means here. The ones installed are ordinary gas boilers that can be serviced, and many faults can still be repaired. What changes is the support around them: over time, parts get harder to find. So look after the boiler you have, and have a rough plan for what replaces it before a breakdown forces the decision.',
    servicing:
      'Most Heatline warranties will have run out by now, but if yours was a late installation, check your warranty terms, since warranties usually depend on an annual service. On an ageing boiler the service matters more than when it was new: seals harden, the vessel loses its charge, and small leaks inside the case go unnoticed until they cause a lockout.',
    repairOrReplace:
      'On a Heatline, whether the part can be obtained decides more than its cost. If the part can be found and the rest of the boiler is in good order, repairing is usually sensible; if not, the decision is made for you, and we say so after checking. For a boiler that can be repaired but is clearly near the end, a repair to get through winter and a planned spring replacement often works best.',
    common: [
      'Installed-base units being kept going rather than replaced on schedule',
      'Repairs where obtainable parts decide whether it is worth doing',
      'Replacements where the current alternatives need explaining from scratch',
      'Hardened seals and flat expansion vessels after missed services',
      'Boilers with no manual left, identified from the data badge',
    ],
    faqs: [
      {
        q: 'Can I get a new Heatline boiler?',
        a: 'Not as a current mainstream product, and we would rather say so plainly than take an order we cannot sensibly fill. We can service and often repair the one you have. When it needs replacing we will talk you through current alternatives that suit the property.',
      },
      {
        q: 'Is it worth servicing a legacy boiler?',
        a: 'Yes. The service is a safety check first, and that matters on any gas boiler whatever its badge. It also catches worn parts while there is still time to find replacements.',
      },
      {
        q: 'What would you replace my Heatline with?',
        a: 'That depends on the property, not the old badge: its size, bathrooms, and where the boiler and flue can go. We then set out options across a range of budgets.',
      },
    ],
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
    range:
      'Saunier Duval is a French brand in the Vaillant group, alongside Vaillant and Glow-worm. It sold boilers in the UK for many years, and models such as the Isofast and Thelia still turn up in London kitchens, but it is no longer sold as a new boiler here. Day to day, legacy status changes little: it can be serviced like any other boiler. Over time, parts become the limiting factor.',
    servicing:
      'The service itself is routine: combustion, the flue, seals and the condensate trap. Warranties will have expired on almost every Saunier Duval; if yours is unusually recent, check your warranty terms, which usually call for an annual service. In hard-water London, older combis like these have often had years of scale building on the hot water side, and the service shows how far it has gone.',
    repairOrReplace:
      'The deciding question is usually whether the part exists, not what it costs, and we check before quoting. Where it exists and the boiler is otherwise sound, a repair is reasonable. If not, or one repair keeps following another, replace it, with a boiler chosen for the property as it is now rather than as it was when the original went in.',
    common: [
      'Ageing installed-base units still in daily service',
      'Repairs constrained by what parts remain obtainable',
      'Replacement conversations where nothing carries the same badge',
      'Scale on the hot water side of older combis',
      'Assumptions that Vaillant or Glow-worm parts will fit',
    ],
    faqs: [
      {
        q: 'Are Saunier Duval boilers still supported?',
        a: 'Not as a current UK range for new installation. Servicing is straightforward and many repairs are still possible, but parts availability is the limiting factor and it is worth checking before spending on an older unit.',
      },
      {
        q: 'Can Vaillant or Glow-worm parts fit my Saunier Duval?',
        a: 'It cannot be assumed. Being in the same group does not make parts interchangeable; the exact model, shown on the data badge, decides what fits, and we check before quoting.',
      },
      {
        q: 'How long can I keep my Saunier Duval going?',
        a: 'As long as it stays safe and the parts for what fails can be found. A yearly service covers the first; the second is why it is worth knowing what you would replace it with.',
      },
    ],
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
    range:
      'Halstead is a British brand treated as legacy for new supply: not something we would expect to order new today. Legacy status changes the long-term picture more than the day-to-day one. The boiler can be serviced as normal, but as it ages, each fault becomes a question of whether the part can be found at all. So it pays to think about replacement before the boiler forces the issue.',
    servicing:
      'Warranties will have lapsed on almost all Halsteads; if yours was fitted late in the brand’s life, check your warranty terms, which usually depend on annual servicing. At this age the service has a second job: telling you how the boiler is doing. The engineer can note corrosion, wear or small internal leaks and give a fair sense of whether it has a few winters left.',
    repairOrReplace:
      'Whether to repair a Halstead depends on what has failed and whether the part can still be found, and we check before recommending. The more useful advice is about timing. Replacing in spring or summer lets you compare quotes and choose where the new boiler goes, without being cold while you decide.',
    common: [
      'Installed-base units past their efficient life',
      'Repairs decided by parts availability more than by cost',
      'Replacement planning rather than emergency swaps where possible',
      'Corrosion and small internal leaks found at the service',
      'Controls and programmers as old as the boiler, often due for replacement too',
    ],
    faqs: [
      {
        q: 'My Halstead has failed. Repair or replace?',
        a: 'At the age most Halstead units now are, replacement is usually the better spend — but not always, and it depends on what has failed and whether the part exists. We will check before recommending, rather than assuming a legacy badge means write it off.',
      },
      {
        q: 'Can you tell how long my Halstead has left?',
        a: 'Not precisely, and nobody honestly can. A service shows its condition, which is enough to decide whether to plan a replacement this year or keep running it.',
      },
      {
        q: 'Is it safe to keep using an old Halstead?',
        a: 'If it has been serviced and no safety issues were found, yes. Age alone does not make a boiler dangerous; years without a check might.',
      },
    ],
  },
];

export const brands: Brand[] = entries.map((b) => ({ ...b, faq: b.faqs[0] }));

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
    if (b.common.length !== 5) problems.push(`${b.slug}: needs exactly five common points`);
    if (b.faqs.length !== 3) problems.push(`${b.slug}: needs exactly three faqs`);
    for (const field of ['range', 'servicing', 'repairOrReplace'] as const) {
      if (!b[field].trim()) problems.push(`${b.slug}: ${field} is empty`);
    }
    // The warranty wording is a content rule, not a style preference: never
    // state that servicing secures a warranty, always point to the terms.
    if (!/check your warranty terms/i.test(b.servicing) || !/\busually\b/i.test(b.servicing)) {
      problems.push(`${b.slug}: servicing must say "usually" and "check your warranty terms"`);
    }
  }
  if (problems.length) throw new Error('brands.ts invariants failed:\n  ' + problems.join('\n  '));
}

export default brands;
