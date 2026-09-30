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
    summary: 'No domestic boiler brand is fitted more widely in the UK, and it is the make we come across most in London homes.',
    character:
      'Few boiler brands are installed as widely in the UK as Worcester Bosch, and across London it is the make Ninja Plumbers engineers are called to more than any other. Its Greenstar boilers come as combi, system and heat-only models in most household sizes. With so many in use, the same small set of faults comes up time after time, so the usual repairs are well known.',
    range:
      'Worcester Bosch has been owned by the German Bosch group for decades, but the boilers are still designed and built in Worcester. The gas boilers sit under the Greenstar name: combis for most flats and smaller houses, system boilers for homes with a pressurised cylinder, and heat-only (regular) boilers for older systems with tanks in the loft. Current models carry series numbers such as 4000 and 8000. Older ones, still all over London, carry letters instead — Greenstar i Junior, Si and CDi among them. It sits at the upper end of the mainstream: not the cheapest boiler an installer can fit, but rarely a surprising choice. Worcester also makes oil boilers, which need an OFTEC-registered engineer rather than Gas Safe. Ninja Plumbers does not currently offer oil work, so this page covers the gas Greenstar range.',
    servicing:
      'A Worcester needs the same annual service as any gas boiler, and its manufacturer warranty usually depends on it: a yearly service by a Gas Safe registered engineer, recorded in the service record at the back of the manual. Check your warranty terms, because the length and conditions vary with the model and with who installed it. Alongside the combustion and flue checks, the engineer cleans the condensate trap and checks the expansion vessel. If a magnetic system filter is fitted under the boiler, it gets emptied too, and on an older London system it often holds a surprising amount of black sludge. Greenstar displays show a fault code and, on many models, a cause code beside it. If the boiler has been locking out between services, photograph the display before resetting it.',
    repairOrReplace:
      'A Worcester under about ten years old is nearly always worth repairing. The faults that stop them — a diverter valve, a fan, a pump, an expansion vessel — are replaceable parts, not a reason to write off the boiler. The sums change when the expensive components go on an older unit. A new main control board or heat exchanger on a fifteen-year-old Greenstar is a lot to put into a boiler that has done most of its work, and we will say so. Two other things point towards replacement. A non-condensing Worcester, fitted before condensing boilers became the standard for new installations in England and Wales in 2005, uses noticeably more gas than a modern one. And a boiler that has needed three or four repairs over two winters is usually telling you something. The replacement need not be another Worcester: if the current one never kept up, a different size or type is worth discussing.',
    common: [
      'Hot water working but no heating, or heating but no hot water, from a diverter valve fault',
      'Older Greenstar boilers losing pressure and needing frequent top-ups',
      'Frozen outside condensate pipes locking the boiler out after a cold night',
      'Limescale on the hot water side making the temperature swing from hot to lukewarm',
      'Fault codes and cause codes on the display that identify the part that failed',
    ],
    faqs: [
      {
        q: 'Does an engineer need Worcester accreditation to work on one?',
        a: 'No. Repairing, servicing and installing a Worcester Bosch boiler is legal for any Gas Safe registered engineer. Manufacturers do run accreditation schemes, and these can lengthen the warranty on offer, but the work does not require one, and we never claim an accreditation we do not hold.',
      },
      {
        q: 'My Worcester shows a fault code. Is it OK to keep resetting it?',
        a: 'Resetting once is fine. Before you do, look at the pressure gauge and make sure gas is reaching the hob. In freezing weather, check the white plastic condensate pipe where it comes out of the wall. If it locks out a second time, leave it. Each reset only runs it until the same fault trips it again, and a photo of the code helps us far more.',
      },
      {
        q: 'Can you work on a Worcester oil boiler?',
        a: 'No. Oil work needs an engineer registered with OFTEC, which is separate from Gas Safe, and Ninja Plumbers does not currently offer it. We would sooner tell you now than send an engineer who could not sign the work off.',
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
    summary: 'Searched for by name in London more than any other boiler make, and often fitted in flats and conversions.',
    character:
      'A German maker with a long UK track record, Vaillant is everywhere in London flats and conversions through its ecoTEC range. One reason is size: the boilers are small enough for the cupboard spaces a conversion tends to leave. People in London also search for Vaillant by name more than any other make, usually because they have one already and want an engineer who knows it well. Ninja Plumbers engineers work on so many around the city that most faults are familiar before the casing is off.',
    range:
      'Vaillant is a family-owned company based in Remscheid, Germany, and its group also owns Glow-worm and Saunier Duval. Its UK gas boilers sit under the ecoTEC name. The ecoTEC pro is the simpler, combi-only model. The ecoTEC plus comes as a combi, as a system boiler for homes with a pressurised cylinder, or as a heat-only model for an older open-vented system with a loft tank. The ecoTEC exclusive sits at the top. Vaillant is priced at the premium end of the mainstream. Older Vaillants still turn up regularly in London, especially non-condensing turboMAX units and early ecoMAX condensing boilers. Many can still be serviced and repaired, but they are a different conversation from a ten-year-old ecoTEC. Vaillant also makes aroTHERM heat pumps; this page is about the boilers.',
    servicing:
      'An ecoTEC needs a yearly service, and Vaillant’s warranty usually depends on it, along with registering the boiler after installation. Terms differ between models and installers, so check your warranty terms rather than assuming a headline length applies to yours. A good Vaillant service includes cleaning the condensate siphon and checking the pre-charge in the expansion vessel with the boiler side drained down. The vessel is one of the parts most likely to fail on these boilers, and finding a flat one at the service costs far less than a winter of topping up. Many London Vaillants live in a kitchen cupboard built snugly around them: clear it before the visit, and tell us if a shelf or door has to come out. In a flat, the boiler is normally the leaseholder’s responsibility, but a flue through communal parts may need the managing agent involved.',
    repairOrReplace:
      'A Vaillant under about twelve years old is usually worth repairing. The parts that fail most — expansion vessel, pump, pressure sensor, diverter valve, fan — are ordinary repairs on an ecoTEC, not signs of a boiler at the end of its life. The line moves on an older unit when the main heat exchanger fails, or the control board goes on a boiler that has already had several repairs. Then we price the repair and a replacement side by side and tell you which we would choose. The turboMAX units are a different case. Being non-condensing, they burn noticeably more gas for the same heat, and a major repair on one keeps an inefficient appliance going. We would still fix a small fault to get you through a cold spell, then suggest planning the replacement for spring rather than waiting for the next breakdown.',
    common: [
      'Pressure that keeps dropping because the expansion vessel has failed',
      'Ignition and flame-sensing faults on ecoTEC boilers with long running hours',
      'Pump and pressure-sensor faults that leave the boiler unable to fire',
      'Lukewarm hot water in the hard-water areas of London',
      'Tight cupboard installations that make service access awkward',
    ],
    faqs: [
      {
        q: 'My Vaillant keeps losing pressure. Is the fault in the boiler or the system?',
        a: 'It could be either, and it pays to find out which before you spend anything. A leak from radiators or pipework loses water, and sometimes you can spot it. A failed expansion vessel loses pressure with no sign of water anywhere. Vessels commonly fail on boilers of this age, and a new one is a repair, not a reason to replace the boiler.',
      },
      {
        q: 'What do the F.22 and F.28 codes on my Vaillant mean?',
        a: 'F.22 on an ecoTEC means low water pressure. If the gauge shows under about 1 bar, repressurise with the filling loop as the user manual explains. F.28 means the boiler tried to light and failed, so make sure gas is reaching the hob and, if you have a prepayment meter, that it has credit. If either code returns after a single reset, stop there and call us.',
      },
      {
        q: 'Do I need an ecoTEC pro or an ecoTEC plus?',
        a: 'As a combi for a flat or smaller house, the pro is simpler and cheaper and does the job well. The plus is also made in system and heat-only versions, which suits a home keeping a hot water cylinder or loft tanks. We check the property and the incoming mains before recommending one or the other.',
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
    summary: 'Combi, system and heat-only boilers made in the UK and widely used for rented homes and new installations.',
    character:
      'Ideal makes its boilers in the UK, and installers choose its Logic range for rented homes and large projects more than almost any other, mainly for its price and simplicity rather than any stand-out feature. Ninja Plumbers engineers find them all the time in London conversions and in flats owned by landlords. They are easy boilers to work on, so most repairs stay simple.',
    range:
      'Ideal has built boilers in Hull for more than a century. It changed its name from Ideal Boilers to Ideal Heating a few years ago and is owned by the French group Groupe Atlantic. The Logic family is the workhorse, in combi, system and heat-only versions, with Logic+ and Logic Max as the better-specified options. Vogue is the higher-end range, and Ideal now makes heat pumps too. It sits at the value-to-mid end of the market, and it is the kind of boiler commonly found in new-build flats, buy-to-lets and housing association homes. Older Ideal names still turn up across London: the Icos and Isar in particular, and the floor-standing Mexico in some older houses. With those, the age of the boiler often decides what happens next more than the fault does.',
    servicing:
      'Ideal warranties usually depend on the boiler being registered after installation and serviced every year by a Gas Safe registered engineer, so check your warranty terms and keep each service record with the paperwork. On a Logic, a proper service includes the condensate trap and the outside condensate pipe, because that pipe is where many winter breakdowns start: a thin plastic run on an outside wall freezes, the boiler cannot drain, and it locks out. If yours runs outside, it is worth insulating or replacing with a wider pipe. London’s hard water is the other thing to watch. If a scale reducer was fitted on the incoming mains, the service is a good moment to check it still works, because scale on the hot water side builds slowly and shows up as water that will not stay hot.',
    repairOrReplace:
      'Ideal boilers cost less to buy than the premium brands, and that moves the point at which replacement makes sense. A Logic with a failed fan, pressure sensor or diverter valve is usually worth repairing whatever its age, because those parts are modest. The judgement comes when the main board or heat exchanger fails on a unit past about ten years old. The gap between that repair and a new boiler is smaller than on a Vaillant or Worcester, so replacement often wins sooner. The older Icos and Isar units deserve a plain answer: many are past the point where a big repair is good value, even if they still run. If a small, inexpensive part gets one going again, we will fix it and tell you it is time to plan.',
    common: [
      'Blocked or frozen condensate pipes on outside runs',
      'PCB and pressure sensor faults on Logic boilers with high hours',
      'Minimum-spec boilers in homes that have been extended since',
      'Old Icos and Isar boilers still going long after their expected life',
      'Rented homes where the service history has gone missing',
    ],
    faqs: [
      {
        q: 'Should I repair my Ideal boiler or replace it?',
        a: 'We apply the test we use for every make: how old it is, what the failed part costs and whether that part is still available. Because a new Ideal costs less, replacement starts to make sense earlier than it would for a premium make. That is not a given, though, and we will show you the figures for both.',
      },
      {
        q: 'My Ideal stopped on a freezing morning. Has it broken down?',
        a: 'Often not. When the white plastic condensate pipe runs outside it can freeze, and the boiler locks out because it cannot drain. Warm water, never boiling, poured along the pipe where it comes out of the wall normally thaws it. Then reset the boiler once. If this happens in every cold spell, the pipe needs rerouting, insulating or replacing with a wider one.',
      },
      {
        q: 'As a landlord, is the annual service the same thing as a gas safety certificate?',
        a: 'No. A gas safety certificate is the legal check every landlord must have done each year, and it covers every gas appliance and flue in the home. A service is maintenance of the boiler, and it is what the manufacturer’s warranty usually requires. We can do both in one visit, so you only need to arrange access with your tenant once.',
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
    summary: 'An old UK name with a great many boilers still in use, and the parent of Potterton and Main.',
    character:
      'For decades Baxi boilers have been a normal sight in British homes. Potterton and Main now belong to the same group, which means plenty of London homes have a Baxi-group boiler, whatever the badge says. The boilers in use cover several decades, and Ninja Plumbers engineers work on the lot, from today’s combis to boilers over twenty years old that are still running.',
    range:
      'Baxi is part of BDR Thermea, the European group that also owns Potterton, Main and the Heatrae Sadia cylinder brand. Current Baxi boilers carry series numbers such as 400, 600 and 800, with combis alongside system and heat-only models. In London the older installed base is the bigger story: Duo-tec, Platinum and EcoBlue combis from the 2000s and 2010s, and in older houses, Bermuda back boilers hidden in the fireplace behind a gas fire.',
    servicing:
      'On a current Baxi the warranty usually depends on registration and a yearly service, so check your warranty terms. A back boiler is different: it shares the chimney with the gas fire in front of it, so the engineer checks the fire, the boiler and the chimney as one job, and the flue check matters most. A carbon monoxide alarm in that room is a sensible precaution.',
    repairOrReplace:
      'On a Baxi combi from the last ten years, most faults are worth repairing. On Duo-tec and Platinum units it depends on what has failed: a fan or sensor, repair it; a heat exchanger or main board, get the replacement figure first. Replacing a back boiler is a bigger job than a normal swap. The boiler and usually the fire come out, and the new boiler goes elsewhere with its own flue and new pipework, so plan it for a warm month.',
    common: [
      'Faults with the fan or pressure switch on older boilers',
      'Scale in the heat exchanger across the hard-water parts of London',
      'Very old boilers where parts are getting harder to find',
      'Bermuda back boilers behind gas fires that are still used every day',
      'Combis from the 2000s and 2010s old enough for bigger parts to fail',
    ],
    faqs: [
      {
        q: 'My Baxi is more than twenty years old. Is it still repairable?',
        a: 'Sometimes it is, and sometimes it is better left. It comes down to whether the part for that fault can still be found; some can, others went long ago. With a boiler that old we give a frank view, and say if a repair means paying for a boiler with perhaps a year left in it.',
      },
      {
        q: 'What is the boiler sitting behind my gas fire?',
        a: 'It is a back boiler, and the Baxi Bermuda is among the most common. It heats your radiators and hot water cylinder independently of the fire in front of it. It can still be serviced, and the chimney gets checked at the same time.',
      },
      {
        q: 'Is a Baxi the same boiler as a Potterton or a Main?',
        a: 'They share a group but not a boiler. Each make has its own model numbers, so the correct part depends on precisely which one you own. We read that from the data badge on the boiler.',
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
    summary: 'Premium boilers engineered in Germany and often chosen for higher-value refurbishment projects.',
    character:
      'At the premium end of the market, Viessmann’s Vitodens range is a regular choice for more expensive refurbishments in London. There, its stainless steel heat exchanger and longer expected life make the higher price easier to justify. Since somebody picked it on purpose, Ninja Plumbers tends to find these boilers in homes whose heating was designed as a whole, not simply carried over from whatever was already in place.',
    range:
      'Viessmann is a German business founded in 1917, and since 2024 its heating business has been part of the American group Carrier. Its gas boilers are sold as Vitodens, in combi, system and heat-only versions, all built around a stainless steel heat exchanger. The 050 and 100 series are the more affordable end; the 200 series and above are the higher-specification models. Its oil boilers are outside what we do, since oil needs an OFTEC-registered engineer rather than Gas Safe registration, so our Viessmann work is on the gas range.',
    servicing:
      'A Vitodens needs a yearly service, and Viessmann’s warranty usually depends on it being done and recorded, so check your warranty terms. The heat exchanger is built to last but still needs inspecting and cleaning. Many Vitodens boilers run on weather compensation, using an outdoor sensor, and those settings are part of what we check: a badly set heating curve leaves a house too cool, or burning more gas than it should.',
    repairOrReplace:
      'Because a Viessmann costs more to buy, it earns a longer run of repairs. Sensor, electrode and control faults are the usual failures, and they are worth fixing on almost any Vitodens. If the heat exchanger fails on an older unit outside warranty, replacement usually wins, but read the paperwork first in case it is still covered.',
    common: [
      'Faults in controls and sensors more often than mechanical failures',
      'Boilers chosen for a heating system that was altered afterwards',
      'Parts that may have to be ordered because they are not on the van',
      'Weather compensation switched off or set up incorrectly',
      'Occasional lockouts caused by a worn ignition electrode',
    ],
    faqs: [
      {
        q: 'Is it harder to get parts for a Viessmann than for other makes?',
        a: 'Engineers carry them on the van less often than Worcester or Ideal parts, so now and then a repair means ordering a part instead of finishing on the first visit. When we diagnose the fault, we will say whether that part is quick to get hold of.',
      },
      {
        q: 'Is a Viessmann worth paying extra for?',
        a: 'It can be, if you plan to stay in the house and the heating system is designed around it. In a small flat with basic heating, it is harder to justify over a well-installed mid-range combi, and we would tell you that.',
      },
      {
        q: 'What does the outdoor sensor on my Viessmann do?',
        a: 'It lets the boiler send cooler water to the radiators in mild weather and hotter water in the cold, which keeps it running efficiently through more of the year. Keep it connected. If the house does not feel right, it is the settings that need adjusting.',
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
    summary: 'Value make of the Vaillant group for many years, with a large number of older boilers still in use.',
    character:
      'Within the Vaillant group, Glow-worm is the value make. It has gone into British homes for so long that the boilers still in use cover several decades of models. Ninja Plumbers comes across them most in homes where the last replacement was picked to fit a budget rather than designed for the property, and in London flats owned by landlords.',
    range:
      'Glow-worm is based in Belper, Derbyshire, and has been the Vaillant group’s value brand for more than twenty years. Betacom and Easicom are compact budget combis. The Energy range covers combi, system and heat-only boilers in the middle of the market, and Ultimate is the better-specified option. A well-installed Energy combi does the same job as plenty of dearer boilers in a two-bedroom flat.',
    servicing:
      'The warranty usually depends on registration and an annual service by a Gas Safe engineer; check your warranty terms, as they vary by model and installer. Because many Glow-worms were fitted to a budget, the service often finds corners cut at installation rather than boiler faults: no magnetic filter on a sludgy system, an unprotected condensate pipe outside, or a pressure relief pipe ending somewhere it should not.',
    repairOrReplace:
      'The lower purchase price cuts both ways. A small repair is usually worth doing at any age, because it keeps an inexpensive boiler going for little outlay. A big repair on an older Betacom or Easicom is different: once it is a large fraction of the price of a new boiler and the unit is past ten years, replacement often wins. Energy and Ultimate models need a case-by-case answer.',
    common: [
      'Older boilers past the point where repair pays',
      'Diverter and pressure faults you would expect at this age',
      'Budget replacement boilers fitted in a spot that does not suit them',
      'No magnetic filter on the system, so sludge cuts the boiler’s life short',
      'Outside condensate pipes left without frost protection',
    ],
    faqs: [
      {
        q: 'Are Glow-worm and Vaillant the same?',
        a: 'They share a group but are separate ranges. Glow-worm is sold as the value make and Vaillant as the premium one, so the products differ and not every part is shared. Both are well supported, and neither has been left without backing.',
      },
      {
        q: 'Is choosing a Glow-worm a false economy?',
        a: 'Not necessarily. Installed properly on a clean system and serviced every year, one can run reliably for a long time. Most of the trouble we see comes from how it was fitted and looked after, not the name on it, although the budget combis do come to the end of their economic life earlier.',
      },
      {
        q: 'My Glow-worm has broken down. Should I move up to a Vaillant?',
        a: 'Only if a Vaillant is right for your home, not simply because it is the dearer make in the group. We offer choices at more than one price, and sometimes the best answer is another Glow-worm, fitted properly this time.',
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
    summary: 'A current UK range selling hybrid heating and heat pumps next to its boilers.',
    character:
      'Alpha sells hybrid systems and heat pumps as well as gas boilers, which places it with the makes getting ready for a gradual shift away from gas-only heating. Price is often why an Alpha boiler is picked for a newer installation. When Ninja Plumbers is asked about the hybrid side, it is usually by people wondering what will one day replace their gas boiler, not by anyone planning to switch now.',
    range:
      'Alpha Heating Innovation is the current name for Alpha, a UK boiler company owned by the Italian manufacturer Immergas. Its gas boilers include the E-Tec, InTec and Evoke ranges, covering combi, system and heat-only models, and it also sells heat pumps and hybrid set-ups. It is priced for the value-to-mid market and is more often an installer’s choice than one asked for by name.',
    servicing:
      'An Alpha needs a yearly service, and its warranty usually depends on that and on registration after installation. Check your warranty terms; a missed year is a common reason claims are refused. Some Alpha models were supplied with a flue gas heat recovery unit, which pre-warms incoming cold water using heat from the flue. If yours has one, it belongs in the service. On a hybrid, the heat pump needs its own maintenance.',
    repairOrReplace:
      'Many Alphas in London are young enough to be under warranty, so check that before paying for anything. Out of warranty, a failed fan, pump, sensor or diverter valve is normally worth repairing. On older Alpha combis from the 2000s, a heat exchanger or control board failure usually points towards replacement.',
    common: [
      'Everyday combi faults: diverter, pressure and ignition',
      'Recent installations whose original warranty terms still apply',
      'Hybrid set-ups that were only partly specified',
      'Flue gas heat recovery units missed at earlier services',
      'Alpha combis from the 2000s no longer economic to repair',
    ],
    faqs: [
      {
        q: 'Would a heat pump make more sense than a new boiler?',
        a: 'That comes down to the property. Insulation, radiator sizes and where the unit could sit all count for more than the make. For a typical London flat or terrace, fitting a heat pump is a larger project than swapping a boiler. You will get a plain answer from us, not a push towards either.',
      },
      {
        q: 'My Alpha is under warranty. Do I call you or Alpha?',
        a: 'Contact the manufacturer first. They normally arrange a covered repair, usually without charge to you. If the fault is not covered, we can find and fix it, with the price agreed before any work begins.',
      },
      {
        q: 'Is Alpha British or Italian?',
        a: 'In a way it is both, being a UK company owned by the Italian maker Immergas. For a repair, the thing that matters is the exact model and part.',
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
    summary: 'Sold today as Vokèra by Riello, a domestic gas range with many older boilers still in use.',
    character:
      'Now sold as Vokèra by Riello, the brand has made domestic boilers for the UK long enough that a large number are still on walls. Ninja Plumbers finds them around London in homes that had a new boiler at some point in the 2000s or 2010s. The current range is still on sale and supported.',
    range:
      'Vokèra sits within Riello, the Italian heating group, hence the name Vokèra by Riello on newer boilers. It sells combi, system and heat-only gas boilers in the value-to-mid market, and installers fitted them in large numbers through the 2000s and 2010s, which is why so many turn up in London flats and terraces. Older models include the Mynute, Linea and Compact, and on many of those, age is now the main question.',
    servicing:
      'The warranty on newer models usually depends on a yearly service and registration, so check your warranty terms. Alongside the standard checks, the pressure relief pipe outside is worth a look: a drip from it suggests pressure running too high, often a vessel that has lost its charge or a filling loop left slightly open.',
    repairOrReplace:
      'A Vokèra from the last ten to twelve years is usually worth repairing. On a unit approaching twenty, we check the part for your fault can be sourced before quoting, and if a major part fails at that age, replacement is normally the better spend. If the boiler has outlived the radiators and controls around it, a replacement is the time to deal with those too.',
    common: [
      'Boilers from the 2000s nearly past the point where repair pays',
      'Faults with pressure and sensors, common on combis with long running hours',
      'Boilers that have outlasted the radiators and controls around them',
      'Pressure relief valves dripping outside because system pressure is too high',
      'Combis squeezed into small flat cupboards, where access dictates the job',
    ],
    faqs: [
      {
        q: 'Are parts still available for an older Vokèra?',
        a: 'Yes, for the usual failures on the newer boilers still in use. On boilers nearing twenty years old it is more hit and miss, and worth confirming before you commit to a repair. We check the part can be had before we quote.',
      },
      {
        q: 'Are Vokèra and Riello one company?',
        a: 'Vokèra belongs to Riello, so newer boilers carry the name Vokèra by Riello. For a repair, the exact model on the data badge matters more than the name on the case.',
      },
      {
        q: 'Why does the hot water from my Vokèra combi run hot then cold?',
        a: 'A few things can do it, and we would sooner check than guess. Limescale on the hot water side is common in London, and a sticking diverter valve has the same effect. A combi also needs a minimum flow to keep the burner alight, so a tap only just open can make the temperature go up and down.',
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
    summary: 'Boilers made in the Netherlands to a design with far fewer moving parts than most.',
    character:
      'An Intergas is a different kind of combi, not just another badge. Its design has no diverter valve and no plate heat exchanger, two parts behind many of the breakdowns on ordinary combis. With less to move, it suffers fewer of the faults that take up most of Ninja Plumbers’ time on other makes. You see them less often in London than the big-selling makes, yet owners have usually picked one deliberately and can tell you why.',
    range:
      'Intergas is a Dutch manufacturer based in Coevorden, best known in the UK for combis such as the Combi Compact HRE and Xclusive. Most combis have a separate plate heat exchanger for hot water and a diverter valve switching between heating and hot water. In an Intergas the main heat exchanger does both jobs, with two separate water circuits built into it. Hybrid options with a heat pump are offered too.',
    servicing:
      'An Intergas warranty usually depends on a yearly service, so check your warranty terms, which vary with the model and the installer. Because hot water runs through the main heat exchanger rather than a separate plate, limescale in hard London water still matters, and scale protection on the mains is worth having. So is clean heating water, with inhibitor and a filter.',
    repairOrReplace:
      'An Intergas fault is usually worth repairing: there is less to go wrong, and the parts that fail — a sensor, fan, pump or the controls — are modest next to the price of a new boiler. Replacement makes sense when the main heat exchanger fails outside warranty on an older unit. If someone unfamiliar with the design wants to condemn a working one, get a second opinion.',
    common: [
      'Much less mechanical failure than an ordinary combi of similar age',
      'Faults that lie in the controls, sensors or system more than the boiler',
      'Parts carried less often, so some have to be ordered',
      'Dirty water from an old heating system wearing a newer boiler',
      'Boilers written off by engineers who did not know the design',
    ],
    faqs: [
      {
        q: 'How does an Intergas manage with fewer parts than other combis?',
        a: 'Its heat exchanger deals with heating and hot water together, so it needs neither the separate diverter valve nor the second exchanger found in an ordinary combi. On other makes those two parts fail more often than most, so taking them out removes a large share of the usual repairs.',
      },
      {
        q: 'Is it difficult to find an engineer who knows Intergas?',
        a: 'You see fewer of them in London than the big-selling makes, so not every engineer works on them often. The design is simpler rather than more complex, but it is not the same. Ninja Plumbers works on them, and when we diagnose the fault we will say if a part needs ordering.',
      },
      {
        q: 'Does an Intergas still need a yearly service?',
        a: 'Yes. Less wears out, but the combustion, flue, seals and condensate trap all still need checking, and the warranty usually relies on it.',
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
    summary: 'Premium and specialist, ATAG is a make people usually pick on purpose, not by default.',
    character:
      'Known for long warranties on its heat exchangers, ATAG is a premium specialist make that is nearly always picked on purpose, not just because an installer had one on the van. In London, Ninja Plumbers generally meets ATAG boilers where the whole heating system was planned properly, not bolted together later. The models change from time to time, so check the current details instead of leaning on any one model.',
    range:
      'ATAG is a Dutch heating manufacturer selling gas combi, system and heat-only boilers at the premium end of the UK market. Its selling point has long been the heat exchanger, backed by warranties well beyond what most brands offer. It is usually chosen by a homeowner who has researched it, or by an installer who specialises in it and designs the system around it.',
    servicing:
      'The long heat exchanger warranty is only as good as its conditions. Those usually include registration and a yearly service by a Gas Safe engineer, and often the condition of the heating water, so check your warranty terms for exactly what yours asks. A good ATAG service therefore looks at the water too: whether inhibitor is present, and whether any system filter has been cleaned.',
    repairOrReplace:
      'While the heat exchanger warranty runs, the biggest failure may well be covered, so check before paying. Outside it, the usual failures are sensors, fans, ignition parts and controls, worth repairing on almost any ATAG because the core is built to last. Replacement only comes up when a major part fails on an older unit outside every warranty, or the house has outgrown the boiler.',
    common: [
      'Faults in controls and sensors, not the heat exchanger',
      'Boilers still inside long manufacturer warranty terms',
      'Less familiar parts that we order in instead of carrying',
      'Missed services that could put a warranty claim at risk',
      'Heating water with no inhibitor, which warranty terms often mention',
    ],
    faqs: [
      {
        q: 'Will servicing keep my long ATAG warranty valid?',
        a: 'Most manufacturer warranties need an annual service with a record to prove it, and ATAG is no exception. Read your own warranty paperwork for the precise terms. Whatever the headline length, a missed service is one of the most common reasons a claim gets turned down.',
      },
      {
        q: 'Why pick ATAG over a better-known make?',
        a: 'Mostly for the heat exchanger and its warranty, and because installers who fit ATAG usually design the whole system instead of just swapping the boiler. Whether it justifies the higher price depends on how long you intend to stay.',
      },
      {
        q: 'Can someone other than my installer service my ATAG?',
        a: 'Yes. A Gas Safe registered engineer from any firm can service it. Warranties usually ask for the service to be done and recorded, not done by a particular company. Some extended warranties backed by installers have conditions of their own, so go by your paperwork.',
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
    summary: 'Italian gas boilers on sale now in combi, system and regular versions.',
    character:
      'Ariston’s current UK range takes in combi, system and regular boilers, and you are more likely to find one in a flat or small home than in a large house. Water heating has long been part of the business too, so Ninja Plumbers engineers now and then find an Ariston unvented cylinder working next to the boiler.',
    range:
      'Ariston belongs to Ariston Group, an Italian company based in Fabriano, and sells gas boilers in the UK alongside a large range of water heaters. The Clas range is the value option and Genus the better-specified one; older Microgenus combis still turn up in London flats. The group also owns Chaffoteaux, the French brand behind a good number of older UK combis, so an ageing Chaffoteaux is a relative rather than a stranger.',
    servicing:
      'As with most makes, the warranty is usually conditional on registration and yearly servicing; check your warranty terms. On a combi in a small flat, the engineer pays particular attention to scale on the hot water side. An unvented cylinder, whatever its make, needs its own annual check. Mention it when booking and we can cover both in one trip, which is worth it in a flat where parking and access are the hardest part.',
    repairOrReplace:
      'On a Clas or Genus from the last ten years or so, most faults are worth repairing. Older Microgenus and Chaffoteaux combis are a harder call: a significant failure at that age is often better spent on a replacement, and we check the part can be obtained before quoting. If the combi is struggling to serve a flat that now has a second shower room, more than the broken part may need changing.',
    common: [
      'The usual combi faults: diverter, pressure and ignition',
      'Boilers in small flat installations with little room to work',
      'Unvented cylinders alongside that need a periodic check of their own',
      'Microgenus and Chaffoteaux combis no longer economic to repair',
      'Scale building on the hot water side from London’s hard water',
    ],
    faqs: [
      {
        q: 'Do you also look after Ariston cylinders, not only the boilers?',
        a: 'Yes. An unvented cylinder calls for its own competence and its own yearly check, apart from the boiler service. People often forget it until water starts running from the discharge pipe.',
      },
      {
        q: 'Are Chaffoteaux and Ariston the same?',
        a: 'Same group, but a different make. Ariston Group owns Chaffoteaux, yet its boilers are a separate range with model numbers of their own. The data badge, not the group name, decides which parts fit.',
      },
      {
        q: 'How does an Ariston Clas differ from a Genus?',
        a: 'The Clas is the value range and the Genus the better-specified one. Both are normal gas boilers to service and repair. A more useful question is which fits your home, and in a small flat a Clas may be all you need.',
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
    summary: 'Boilers made in Italy for homes and light commercial use, handy when one job covers both.',
    character:
      'Because Ferroli makes boilers for homes and for light commercial use, Ninja Plumbers comes across it in commercial work as well as in houses: small offices, shops and the flats over them. In London, the Ferroli boilers found in homes tend to be older than those of the big-selling makes.',
    range:
      'Ferroli is an Italian manufacturer with, unusually for a domestic brand, a substantial light commercial side: in the UK it sells gas boilers for homes and larger ones for small commercial buildings. The domestic side sits at the value end, and many Ferrolis we meet in London were fitted a good while ago and left alone since. So age is the first thing to establish, from the data badge.',
    servicing:
      'At home, a Ferroli needs a yearly service, and on a newer model the warranty usually depends on it, so check your warranty terms. On older units the service is about safety and catching wear. In commercial premises it has to fit around trading: before opening or after closing, with access agreed if a flat above shares a stairway or meter cupboard.',
    repairOrReplace:
      'Because much of the domestic installed base is older, age usually matters more than the fault. Past about twelve years, a major failure normally points to replacement, and before quoting any repair we confirm the part can be sourced. Smaller faults are worth fixing on a sound boiler. In a shop or office, the cost of closing counts too: a repair that keeps you trading can be worth it, with a replacement planned for a quieter time.',
    common: [
      'Older household boilers no longer economic to repair',
      'Light commercial boilers in shops and the premises over them',
      'Parts on older models that need checking before we commit to a repair',
      'Boilers that went years without a service and show the wear',
      'Mixed-use buildings where the shop and the flat above share access',
    ],
    faqs: [
      {
        q: 'Will you work on a Ferroli in commercial premises, not just in homes?',
        a: 'Yes. We carry out commercial plumbing and heating, and light commercial boilers are part of that. In practice the main difference is timing, as the work normally has to be done outside trading hours.',
      },
      {
        q: 'Is Ferroli a good make of boiler?',
        a: 'It is a sound make aimed at value. The quality of the installation and regular servicing matter more to reliability than the badge, and with a Ferroli the discussion usually turns to age.',
      },
      {
        q: 'Could you service the boiler before we open for the day?',
        a: 'Give us your trading hours when you book and we will fit around them where we can. Book early or late visits ahead rather than on the day.',
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
    summary: 'Made by a Korean company, with a current UK gas range best known for strong hot water flow.',
    character:
      'Navien’s reputation rests on combis with unusually high hot water flow. That makes one a sensible pick for a home that wants the simplicity of a combi but uses more hot water than an average combi can supply. The company makes oil boilers as well, but Ninja Plumbers works on the gas range only.',
    range:
      'Navien belongs to KD Navien, a South Korean heating company that is a major name at home and in North America, and it reached the UK later than most of the brands we cover. Its UK gas range is built around combis designed for more hot water flow than usual, for homes that want a combi but have more than one bathroom. A high-flow combi can only deliver what the incoming mains gives it, and in parts of London the mains is the limit.',
    servicing:
      'Navien’s warranty usually asks for the boiler to be registered and serviced every year — check your warranty terms for the details. A high-flow combi moves more water through its heat exchanger than most, so in hard-water London the scale reducer on the incoming mains deserves a look at every service. If the boiler is not giving the flow it should, the service is a good time to measure the incoming mains, because the cause may be outside the boiler.',
    repairOrReplace:
      'Most Navien installations in London are fairly recent, so check the warranty first, and expect repair to be the answer. Faults tend to be sensors and controls rather than wear. Parts may need ordering, which can mean a wait. On an older unit with a major failure outside warranty, ask whether you still need a high-flow combi before replacing like for like.',
    common: [
      'High-output combis chosen for homes that use a lot of hot water',
      'Faults in controls and sensors more than mechanical wear',
      'Installations where the boiler was picked for its flow rate',
      'Mains supply that cannot keep up with the flow the boiler can give',
      'Scale on the hot water side, which affects a high-flow combi sooner',
    ],
    faqs: [
      {
        q: 'Will a Navien combi really supply two showers?',
        a: 'Its higher-output models give far more flow than an ordinary combi, but the true answer depends as much on your incoming mains as on the boiler. No combi can deliver flow the mains does not supply. We measure your incoming supply before recommending one.',
      },
      {
        q: 'Is a high-flow combi dearer to run?',
        a: 'Not by itself. A combi only burns gas while it heats water or radiators, so running costs depend on how much hot water you use, not on the most the boiler could deliver.',
      },
      {
        q: 'Is Navien a new make?',
        a: 'Newer to the UK, not new. Navien has made heating products in Korea for decades and is used widely in North America. There are fewer in the UK, so parts are sometimes ordered in.',
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
    summary: 'Now part of the Baxi group, with a great many older boilers still in London homes.',
    character:
      'Now within the Baxi group, Potterton left behind more older boilers than almost any make in the country, and plenty of London homes still rely on one. When Ninja Plumbers is called to a Potterton, it is nearly always to repair, service or replace an ageing boiler, not to fit a new one. We would sooner say so plainly than suggest a full current range is on offer.',
    range:
      'Potterton now sits within the Baxi group, owned by BDR Thermea, and its current range is small. What we meet is the older installed base. Heat-only boilers are the classic Potterton: the Suprima and Netaheat, often in Victorian and Edwardian terraces, with a cylinder in the airing cupboard and tanks in the loft. Combis such as the Performa and Puma turn up too. Many are non-condensing, so replacement is always in the background.',
    servicing:
      'A Potterton heat-only boiler is serviced as part of a wider system. The engineer also looks at what it depends on: the loft tank and its float valve, the pump, the motorised valves and the programmer, which on an old open-vented system cause more lost heating than the boiler does. On a newer Potterton the warranty usually depends on an annual service, so check your warranty terms.',
    repairOrReplace:
      'On a sound older Potterton, a modest repair is often worth it once we have checked the part is obtainable. When replacement comes, a new heat-only boiler keeps the cylinder and loft tanks and is the least disruptive. A system boiler or combi frees the loft, but puts old radiators and joints under more pressure than they are used to, and weak spots can show.',
    common: [
      'Ageing boilers still in use long after their efficient years',
      'Older heat-only boilers with a separate cylinder and controls',
      'Repairs that depend on whether the part can still be had',
      'Faults put down to the boiler that start at the loft tank or float valve',
      'Motorised valves and programmers that stick',
    ],
    faqs: [
      {
        q: 'Is a new Potterton still available?',
        a: 'Potterton is part of Baxi and its current domestic range is small, so most of our Potterton work is repairs, servicing and replacement, not new installation. When you need a replacement, we will go through the current Baxi-group choices and others with you, rather than assume like-for-like.',
      },
      {
        q: 'My Potterton heats water but the radiators stay cold. Has the boiler failed?',
        a: 'Not always. On a heat-only system, a motorised valve that has stuck or a programmer that has lost its settings can keep the radiators off while the boiler is healthy. Look at the programmer first. If the heating is switched on and nothing warms up, that is where an engineer would begin.',
      },
      {
        q: 'Is it worth changing my old Potterton for a combi?',
        a: 'Often yes, for a flat or small house with one bathroom and good mains pressure. If you have two bathrooms, a system boiler with a cylinder usually works better.',
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
    summary: 'Boilers with a twin flue that get round flue problems a standard boiler cannot, especially in London flats.',
    character:
      'Keston deals with a problem London has more than most places. Thanks to its twin-flue design, the flue can run far further than normal, so a boiler can go into flats and buildings where it sits well away from any outside wall and an ordinary flue would never get out. In tall blocks and deep-plan conversions, that can decide whether Ninja Plumbers finds a workable installation at all.',
    range:
      'Keston is a British brand built around one idea: a condensing boiler whose flue uses two small plastic pipes, one for air in and one for exhaust out. That flue can run much further, round more bends, than a standard one. Keston makes combi, system and heat-only boilers, plus larger light commercial models, and many London Kestons sit in blocks and deep conversions with flues through ceiling voids.',
    servicing:
      'The flue is what makes a Keston different to service. Both pipes are checked along their length, and industry guidance since 2013 says a flue hidden in a ceiling void needs inspection hatches; without them the installation can be classed "at risk". On newer models, check your warranty terms: they usually require an annual service. Tell us where the flue comes out when you book.',
    repairOrReplace:
      'A Keston is often worth repairing for longer than most boilers, because replacing it is not always simple: if the flue only works thanks to the twin-pipe design, an ordinary boiler may not fit in the same place. When one does reach the end, the replacement needs designing before we quote, including whether the flue can be reused.',
    common: [
      'Flats needing long flue runs because the boiler sits well away from an outside wall',
      'Tall blocks and deep-plan buildings where the flue has few routes out',
      'Condensate drainage over long runs that needs careful design',
      'Flues hidden in ceiling voids with no inspection hatches',
      'Roof and high-wall terminals that need access planned',
    ],
    faqs: [
      {
        q: 'There is nowhere in my flat for a normal boiler flue. Can that be solved?',
        a: 'Often it can, and it is the very situation twin-flue systems were made for. Their flues can run much further than a standard boiler’s, so the boiler can sit where an ordinary flue would never reach the outside. It has to be designed properly, not improvised, and we would study the route the flue would take before recommending it.',
      },
      {
        q: 'Why does my flue need inspection hatches?',
        a: 'So the full length of the flue can be seen and checked as sound. In a block of flats, the managing agent or freeholder may have to approve work to ceilings or shared areas, so bring it up early.',
      },
      {
        q: 'Could I replace my Keston with a different make?',
        a: 'Sometimes. It depends on whether another boiler’s flue could get outside from where yours is. In some flats, only the twin-pipe design makes a boiler possible at all.',
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
    summary: 'Italian-made and still on sale, with many older boilers now needing repair or replacement.',
    character:
      'Biasi still sells a UK range, but Ninja Plumbers meets its older boilers, fitted in London flats and terraces, far more often than new ones. Nearly all Biasi jobs are repairs and replacements, not new installations.',
    range:
      'Biasi is an Italian boiler maker whose combis and system boilers were fitted widely at the budget end of the UK market, particularly in flats and smaller terraces. Riva, Garda and Inovia are the names most owners will recognise on the front. The brand still has a UK range, but we far more often meet boilers fitted years ago as the cheapest sensible option, now at an age where running costs and reliability start to matter.',
    servicing:
      'Newer models usually need a yearly service to keep the warranty valid, so check your warranty terms. For older ones, the yearly visit is about safety and spotting wear early, with a close look at the expansion vessel and pressure relief valve, since slow pressure loss is common at this age. Many budget installations went in without a magnetic filter, and that visit is a sensible moment to add one, priced separately.',
    repairOrReplace:
      'On an older Biasi, weigh the cost of the failed part against the life left in the boiler. A diverter valve, sensor or relief valve on a working unit is usually worth replacing. A heat exchanger or main board past ten or twelve years usually is not; that money is better put towards a new boiler. If the Biasi was squeezed into an awkward spot, replacement is the chance to move it.',
    common: [
      'Older boilers where the numbers point to replacement',
      'Everyday combi faults: diverter, pressure and ignition',
      'Parts on the oldest models that need confirming first',
      'Pressure dropping slowly through worn vessels and relief valves',
      'Budget installs with no system filter and hardly any inhibitor',
    ],
    faqs: [
      {
        q: 'Do you still come across many Biasi boilers?',
        a: 'Among boilers already fitted, yes, and plenty of London homes have one. New installations are rarer, so most of our Biasi jobs involve keeping existing boilers running or replacing them once that no longer makes sense.',
      },
      {
        q: 'How can I tell which Biasi I own?',
        a: 'The model name is normally on the front, and the full details are on the data badge. A WhatsApp photo of both helps us bring the right parts, though we still confirm the fault on site before we quote.',
      },
      {
        q: 'Should I consider a new Biasi?',
        a: 'For a smaller flat on a tight budget it can make sense, and we can fit one. We would set it next to other options at a similar price so you can compare warranty and running costs.',
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
    summary: 'From a UK manufacturer, with boilers in homes for many years; our work on them is mostly repair and replacement.',
    character:
      'A UK maker with a long history, Ravenheat has a large number of boilers still in use, many in homes where the boiler was replaced as cheaply as possible. With Ravenheat, Ninja Plumbers concentrates on repair and replacement. Whether a new one can be supplied has to be checked job by job, not taken for granted, so we do not list new installation as a regular option.',
    range:
      'Ravenheat is a British manufacturer whose boilers were fitted widely in rented and budget-refurbished homes, and that is still where we meet them in London: buy-to-let flats, homes renovated for sale, and properties where someone long gone chose the boiler on price. For an owner, the boiler on the wall is worth looking after, but the plan for replacing it should not rely on buying the same again.',
    servicing:
      'Ravenheats in rented homes often come with little or no service history, so the first service is partly detective work, noting anything clearly worked on before. On a fairly new unit, any remaining warranty usually depends on annual servicing, so check your warranty terms. Keep the record with the property paperwork. For landlords, the gas safety certificate is a separate legal check.',
    repairOrReplace:
      'Parts availability weighs more heavily on a Ravenheat than on the volume brands, so we establish what can be obtained for your fault before recommending anything. If the part is available and the boiler is sound, repair is usually the sensible spend; if not, or the unit keeps needing repairs, replacement is the honest answer. For landlords, a tenant left without heating while a repair is uncertain has its own cost.',
    common: [
      'Older boilers in homes that are, or once were, rented',
      'Repairs that hinge on whether the part can be found',
      'Replacing boilers first fitted as the cheapest choice',
      'Boilers with no service record whatsoever',
      'Flue terminals and condensate pipes that were never properly finished',
    ],
    faqs: [
      {
        q: 'Is it better to repair or replace my Ravenheat?',
        a: 'We use much the same test as for any make, but whether parts can be found counts for more here than with the big-selling makes. We find out what is available for your particular fault before advising either way, because a cheap repair is no use if the part cannot be sourced.',
      },
      {
        q: 'My tenant reports the Ravenheat keeps cutting out. What now?',
        a: 'Get a photo of the display and pressure gauge, then book a visit instead of talking them through reset after reset. A boiler that keeps locking out does so for a reason, and it has to be found on site.',
      },
      {
        q: 'There was no paperwork with the boiler when I got the flat. Does that matter?',
        a: 'It happens a lot. A service shows the state of the boiler and gives you a record to work from. If something is unsafe, you hear what and why before anything else.',
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
    summary: 'Now folded into Baxi, with a large number of its boilers still in use.',
    character:
      'Main used to be a popular value make, and its products are now part of Baxi instead of a separate line. In practice that matters. Plenty of Main boilers are still working in London, but it would be wrong to describe Main as a separate range on sale today. Ninja Plumbers repairs, services and replaces them, and would take you through the current Baxi-group choices rather than pretend a like-for-like new Main is still made.',
    range:
      'Main was a value brand, fitted widely by installers and landlords who wanted a dependable boiler at a low price. Its products now sit within Baxi, part of BDR Thermea. For an owner, "transitioning" means your Main is still an ordinary gas boiler that any Gas Safe engineer can service and repair, often with Baxi-group parts. It does not mean you can order a like-for-like new Main.',
    servicing:
      'Most Main boilers are old enough that any warranty has run out; if yours is newer, the warranty will usually hinge on annual servicing, so check your warranty terms. The engineer looks for the signs of age these budget-fitted boilers tend to show: tired expansion vessels, weeping valves and condensate pipes never protected from frost.',
    repairOrReplace:
      'Where the failed part is a Baxi-group component that can be sourced, a repair on a sound Main is usually worth it. Where a major part fails on a boiler past twelve years, or the part cannot be found, replace it. If your Main was a minimum-size combi in a flat that has since gained a bathroom or loft room, a properly sized replacement fixes a problem you may have lived with for years.',
    common: [
      'Many budget-fitted boilers now getting old',
      'Repairs using parts that come from the Baxi group',
      'Replacing boilers that were a minimum-spec choice first time',
      'Vessels and valves worn out by years without a service',
      'Combis too small for a home that has grown since',
    ],
    faqs: [
      {
        q: 'Is Main still its own boiler brand?',
        a: 'Not as it used to be, as it now sits within Baxi. Your Main boiler can still be repaired and serviced, and many of its parts come from the Baxi group. When it comes to replacing it, we would judge today’s range on its merits instead of assuming the same badge.',
      },
      {
        q: 'My Main is old but works. Do I need to replace it now?',
        a: 'Not purely because of its age. If it is safe, serviced and not running up repair bills, keeping it going is reasonable. Plan the replacement once repairs start to mount up, ideally in the warmer months.',
      },
      {
        q: 'Why is my Main rumbling like a kettle?',
        a: 'Most often, water is boiling in pockets inside the heat exchanger because limescale or sludge has narrowed the flow. It is common on older boilers in hard-water London and should be looked at, not ignored.',
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
    summary: 'Treated as legacy: we repair, service and replace boilers already fitted, but do not install new ones.',
    character:
      'For new supply, Heatline is a legacy make, and Ninja Plumbers treats it as one instead of suggesting you can still buy it. A good number are still fitted in London homes, and they can be serviced and often repaired. Once a Heatline does reach the end, the question becomes what to put in its place.',
    range:
      'Heatline boilers are no longer sold as a current mainstream product; that is what "legacy" means here. The ones installed are ordinary gas boilers that can be serviced, and many faults can still be repaired. What changes is the support around them: over time, parts get harder to find. So look after the boiler you have, and have a rough plan for what replaces it before a breakdown forces the decision.',
    servicing:
      'Most Heatline warranties will have run out by now, but if yours was a late installation, check your warranty terms, since warranties usually depend on an annual service. On an ageing boiler the service matters more than when it was new: seals harden, the vessel loses its charge, and small leaks inside the case go unnoticed until they cause a lockout.',
    repairOrReplace:
      'On a Heatline, whether the part can be obtained decides more than its cost. If the part can be found and the rest of the boiler is in good order, repairing is usually sensible; if not, the decision is made for you, and we say so after checking. For a boiler that can be repaired but is clearly near the end, a repair to get through winter and a planned spring replacement often works best.',
    common: [
      'Boilers kept going instead of being replaced on a schedule',
      'Repairs where the availability of parts decides whether they are worth it',
      'Replacements where today’s alternatives need explaining from the start',
      'Seals gone hard and vessels gone flat after skipped services',
      'Boilers without a manual, identified from the data badge',
    ],
    faqs: [
      {
        q: 'Can I still buy a new Heatline boiler?',
        a: 'No, it is not a current mainstream product, and we would sooner tell you that straight than accept an order we could not sensibly fulfil. We can service the one you have and often repair it. When it needs replacing, we will take you through current options that suit your home.',
      },
      {
        q: 'Is a legacy boiler worth servicing?',
        a: 'Yes. Above all the service is a safety check, which matters on any gas boiler whatever the name on it. It also picks up worn parts while replacements can still be found.',
      },
      {
        q: 'What would you put in to replace my Heatline?',
        a: 'That is decided by the property, not the old badge: its size, how many bathrooms it has, and where a boiler and flue can go. Then we set out options at a range of budgets.',
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
    summary: 'Legacy boilers still in UK homes: we service them, repair where practical and advise on replacement.',
    character:
      'People search for Saunier Duval often, yet it is not a boiler you can buy new in the UK today, and the difference matters. There are genuinely many in use, and a good number still work. Ninja Plumbers services them and repairs them when parts allow. When a new boiler is the wiser use of your money, we say so, instead of dragging out repairs that have stopped making sense.',
    range:
      'Saunier Duval is a French brand in the Vaillant group, alongside Vaillant and Glow-worm. It sold boilers in the UK for many years, and models such as the Isofast and Thelia still turn up in London kitchens, but it is no longer sold as a new boiler here. Day to day, legacy status changes little: it can be serviced like any other boiler. Over time, parts become the limiting factor.',
    servicing:
      'The service itself is routine: combustion, the flue, seals and the condensate trap. Warranties will have expired on almost every Saunier Duval; if yours is unusually recent, check your warranty terms, which usually call for an annual service. In hard-water London, older combis like these have often had years of scale building on the hot water side, and the service shows how far it has gone.',
    repairOrReplace:
      'The deciding question is usually whether the part exists, not what it costs, and we check before quoting. Where it exists and the boiler is otherwise sound, a repair is reasonable. If not, or one repair keeps following another, replace it, with a boiler chosen for the property as it is now rather than as it was when the original went in.',
    common: [
      'Ageing boilers that are still working every day',
      'Repairs limited by the parts still available',
      'Replacement talks where no new boiler carries the same name',
      'Scale built up on the hot water side of older combis',
      'The belief that Vaillant or Glow-worm parts will fit',
    ],
    faqs: [
      {
        q: 'Is there still support for Saunier Duval boilers?',
        a: 'Not for new installation, as there is no current UK range. Servicing is simple and plenty of repairs can still be done, but the parts that remain set the limit, so check before you spend on an older boiler.',
      },
      {
        q: 'Will Vaillant or Glow-worm parts fit my Saunier Duval?',
        a: 'You cannot assume so. Sharing a group does not make parts swappable. The exact model on the data badge decides what fits, and we check that before quoting.',
      },
      {
        q: 'How long will my Saunier Duval keep going?',
        a: 'For as long as it stays safe and parts for whatever fails can be found. An annual service deals with the first. The second is why it helps to know what you would replace it with.',
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
    summary: 'Legacy for new supply, but the boilers still in use keep needing repairs and replacements.',
    character:
      'For new supply Halstead counts as a legacy make, yet the boilers still in homes create real repair and replacement work. Ninja Plumbers will not hint that new ones are routinely available when they are not. We can service the boiler you have, repair it while parts can still be found, and tell you honestly when your money would go further on a replacement.',
    range:
      'Halstead is a British brand treated as legacy for new supply: not something we would expect to order new today. Legacy status changes the long-term picture more than the day-to-day one. The boiler can be serviced as normal, but as it ages, each fault becomes a question of whether the part can be found at all. So it pays to think about replacement before the boiler forces the issue.',
    servicing:
      'Warranties will have lapsed on almost all Halsteads; if yours was fitted late in the brand’s life, check your warranty terms, which usually depend on annual servicing. At this age the service has a second job: telling you how the boiler is doing. The engineer can note corrosion, wear or small internal leaks and give a fair sense of whether it has a few winters left.',
    repairOrReplace:
      'Whether a Halstead is worth repairing comes down to which part has failed and whether it can still be found, and we check before recommending. The more useful advice is about timing. Replacing in spring or summer lets you compare quotes and choose where the new boiler goes, without being cold while you decide.',
    common: [
      'Boilers still in use past their efficient life',
      'Repairs settled by whether parts exist more than by price',
      'Planned replacements instead of emergency swaps where we can',
      'Corrosion and small leaks inside the case picked up at a service',
      'Controls and programmers the same age as the boiler, often due for renewal too',
    ],
    faqs: [
      {
        q: 'My Halstead has broken down. Fix or replace?',
        a: 'Given the age of most Halsteads now, replacing is normally the better use of money, but not in every case. It depends on what failed and whether the part still exists. We check before advising, instead of treating a legacy badge as a reason to write it off.',
      },
      {
        q: 'Can you say how long my Halstead has left?',
        a: 'Not exactly, and nobody can honestly claim to. A service reveals its condition, which is enough to decide whether to plan a replacement this year or keep it running.',
      },
      {
        q: 'Is an old Halstead safe to keep using?',
        a: 'Yes, if it has been serviced and no safety problems turned up. Age on its own does not make a boiler dangerous, but years without a check could.',
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
