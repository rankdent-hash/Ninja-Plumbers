// One entry per service page. Drives /services, /services/[slug], the nav
// dropdown and the footer, so those can never drift out of sync.
//
// Search volumes in the `target` field are UK monthly figures from Semrush,
// recorded when these pages were written. They are there to explain why each
// page exists and what its H1 is aimed at — not to be published.

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;          // short label: nav, cards, footer
  h1: string;             // page heading, keyword-led
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  icon: string;
  target: string;         // why this page exists
  summary: string;        // card copy on the hub
  intro: string;          // lead paragraph on the page
  does: string[];
  guidance: { title: string; body: string }[];
  aside: { title: string; body: string };
  faqs: Faq[];
  // Types of premises this service covers, where they differ enough to be
  // worth spelling out. Only commercial work uses this so far: the three
  // spaces below were measured as standalone pages and had no search behind
  // them (see rejected.ts), but they are what commercial callers ask about.
  spaces?: { title: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: 'emergency-plumbing',
    title: 'Emergency Plumbing',
    h1: 'Emergency plumber in London',
    metaTitle: '24-Hour Emergency Plumber London | Ninja Plumbers',
    metaDescription:
      'Round-the-clock emergency plumber for London. Burst pipes, major leaks, no water, overflowing toilets. Gas Safe registered. Call 020 3576 5825.',
    eyebrow: '24/7 callout',
    icon: 'emergency',
    target: 'emergency plumber london (2,400/mo) · emergency plumber (12,100/mo)',
    summary:
      'Burst pipes, major leaks and no water. We take calls around the clock and get an engineer moving.',
    intro:
      'Water coming through a ceiling. A pipe that has let go somewhere behind a wall. No water anywhere in the house at all. None of these wait politely until nine o\'clock on a Monday, which is why the Ninja Plumbers booking line doesn\'t either. Ring us and we will talk you through what to do first, while an engineer is already on the way.',
    does: [
      'Burst and leaking pipes',
      'Water shut-off and damage limitation',
      'Leaks coming through ceilings and walls',
      'Overflowing toilets and failed stopcocks',
      'No water, or a sudden loss of pressure',
      'Out of hours, weekends and bank holidays',
    ],
    guidance: [
      {
        title: 'Water is pouring in',
        body: 'Find the stopcock and turn it off first, clockwise, until it stops moving. In most London homes that is under the kitchen sink, in a cupboard under the stairs, or just inside the front door if you are in a flat. Once it is off, open the cold taps around the house to drain what is left in the pipes. Nothing else you do in the next five minutes limits the damage as much as this one step.',
      },
      {
        title: 'Water is coming through a ceiling',
        body: 'Do not stand under a bulging ceiling and do not touch light fittings in the room. If water is anywhere near electrics, turn the power off at the consumer unit and leave it off. Then call.',
      },
      {
        title: 'You cannot find the leak',
        body: 'Turn the stopcock off and watch the water meter if you have one. If it keeps ticking, the leak is before the stopcock and is likely the water company’s responsibility rather than yours. Tell us that when you call and it saves everyone a trip.',
      },
      {
        title: 'No water at all',
        body: 'Check whether the neighbours have water before calling us. If the whole street is out it is a mains problem for Thames Water, not something a plumber can fix, and we will say so rather than charge you for a visit.',
      },
    ],
    aside: {
      title: 'Know where your stopcock is',
      body: 'Find it now, while nothing is wrong, and check it actually turns. A seized stopcock is a common and expensive discovery to make at two in the morning.',
    },
    faqs: [
      {
        q: 'Do you really answer at night?',
        a: 'Emergency callout is available 24/7. The office is open Monday to Friday, 8:00 to 17:30, and outside those hours the booking line goes to whoever is on call.',
      },
      {
        q: 'What counts as an emergency?',
        a: 'If water is actively doing damage right now, or you have no water or no heating and it genuinely cannot wait, that is an emergency. A dripping tap is not — we would rather fit that in as an ordinary job than charge you emergency rates for something that can hold until tomorrow.',
      },
      {
        q: 'How much does an emergency callout cost?',
        a: 'We give you a price before an engineer starts work, including out of hours. What we will not do is start the job and tell you the cost afterwards.',
      },
      {
        q: 'Should I call or use the form?',
        a: 'For an emergency, call. The form is checked during office hours and is better suited to quotes and non-urgent work.',
      },
    ],
  },

  {
    slug: 'boiler-repair',
    title: 'Boiler Repair',
    h1: 'Boiler repair in London',
    metaTitle: 'Boiler Repair London | Gas Safe Engineers | Ninja Plumbers',
    metaDescription:
      'Boiler breakdowns fixed across London by Gas Safe registered engineers. Proper diagnosis first, then a straight answer on repair vs replace. 020 3576 5825.',
    eyebrow: 'Heating and hot water',
    icon: 'boiler',
    target: 'boiler repair london (1,600/mo)',
    summary:
      'No heat, no hot water, or a boiler locked out on a fault code. Diagnosed first, then fixed.',
    intro:
      'The heating has stopped, the hot water has stopped, or the boiler has locked out and is flashing a code at you. Ninja Plumbers diagnoses the actual fault before quoting anything — no guesswork, no swapping parts to see what sticks — then gives you both numbers, repair and replacement, and lets you make the call.',
    does: [
      'Breakdown diagnosis and fault finding',
      'Boilers locked out on a fault code',
      'No heating or no hot water',
      'Central heating and radiator faults',
      'Thermostats and heating controls',
      'Pressure loss and repeated refilling',
    ],
    guidance: [
      {
        title: 'Before you call, check three things',
        body: 'Three quick checks save a lot of callouts. Look at the pressure gauge — is it roughly between 1 and 1.5 bar? Is the thermostat actually asking for heat? And has the gas cut out elsewhere too, say on the hob? Low pressure and a stuck thermostat between them explain most of the breakdowns we get called out to, so it is worth ruling both out before you pick up the phone.',
      },
      {
        title: 'Fault codes are worth photographing',
        body: 'If your boiler is showing a code on its display, take a photo and send it on WhatsApp with the make and model. It often tells the engineer what part to bring, which is the difference between one visit and two.',
      },
      {
        title: 'Repair or replace',
        body: 'A boiler over about twelve years old, needing an expensive part, is usually worth replacing rather than repairing. Under that, a repair normally wins. We will give you both numbers and let you decide.',
      },
      {
        title: 'Pressure that keeps dropping',
        body: 'A boiler you have to refill every few weeks is losing water somewhere. That is a leak on the system or a failed expansion vessel, not something topping up will fix — and it is worth finding before it stains a ceiling.',
      },
    ],
    aside: {
      title: 'Gas Safe registered',
      body: 'Gas work is carried out by Gas Safe registered engineers. Ask to see the card on the doorstep. Any engineer worth having will be glad to show it, and you are entitled to ask.',
    },
    faqs: [
      {
        q: 'Is my boiler worth repairing?',
        a: 'It depends on age and the part that has failed. We will quote for both the repair and a replacement so you can compare the two honestly, rather than being told only one number.',
      },
      {
        q: 'My boiler is showing a fault code. What does it mean?',
        a: 'Codes differ by manufacturer, so we would rather see it than guess. Send a photo of the display with the make and model on WhatsApp and we can usually tell you what is likely before an engineer sets off.',
      },
      {
        q: 'Why does my boiler keep losing pressure?',
        a: 'Most often there is a leak on the system somewhere, or the expansion vessel has failed. Topping it up again and again just hides the symptom — it does not fix anything, and a slow leak sitting in a ceiling void turns into a much bigger bill the longer it runs.',
      },
      {
        q: 'Are your engineers Gas Safe registered?',
        a: 'Yes. Gas work is legally required to be carried out by a Gas Safe registered engineer, and ours are.',
      },
    ],
  },
  {
    slug: 'boiler-service',
    title: 'Boiler Service',
    h1: 'Boiler service in London',
    metaTitle: 'Annual Boiler Service London | Gas Safe | Ninja Plumbers',
    metaDescription:
      'Book an annual boiler service in London with Gas Safe registered engineers — safety checks, cleaning and the paperwork your warranty needs. 020 3576 5825.',
    eyebrow: 'Heating and hot water',
    icon: 'boiler',
    target: 'boiler service london (1,900/mo)',
    summary:
      'The annual check that keeps a boiler safe, efficient and inside its warranty terms.',
    intro:
      'Of everything you can spend on a boiler, an annual service is the cheapest and does the most good. It picks up the parts that are wearing out before they leave you without heating in January, and most manufacturers make it a condition of the warranty — a service that gets skipped is one of the most common reasons a warranty claim ends up refused.',
    does: [
      'Annual boiler service and safety check',
      'Combustion analysis and flue check',
      'Cleaning and component inspection',
      'Seals, pressures and controls checked',
      'Servicing to keep manufacturer warranties valid',
      'Service records for landlords and managing agents',
    ],
    guidance: [
      {
        title: 'Book it before the cold, not during it',
        body: 'Boiler problems have a habit of showing up on the first properly cold week of the year — which, unhelpfully, is exactly when engineers across London are hardest to get hold of. Book with Ninja Plumbers in late summer or early autumn instead. It costs the same and you will get an appointment far more easily than in the middle of a cold snap.',
      },
      {
        title: 'A service is not the same as a repair',
        body: 'A service is an inspection and clean. If it finds a failed part, replacing that part is separate work and we will price it before doing anything. Nobody should be presenting you with a bill you did not agree to.',
      },
      {
        title: 'Keep the paperwork',
        body: 'Manufacturers ask for evidence of annual servicing when a warranty claim is made. Keep the record somewhere you can find it — the difference between a free repair and a paid one can be a piece of paper.',
      },
      {
        title: 'What a service will not tell you',
        body: 'A service checks the boiler, not the whole system. If your radiators are cold at the bottom or the system is full of sludge, that is a separate problem and needs a flush rather than a service.',
      },
    ],
    aside: {
      title: 'Gas Safe registered',
      body: 'Servicing on a gas appliance is carried out by Gas Safe registered engineers. Ask to see the card on the doorstep — you are entitled to.',
    },
    faqs: [
      {
        q: 'How often should a boiler be serviced?',
        a: 'Once a year. Most manufacturer warranties require it, and a service that has been skipped is a common reason a warranty claim gets refused.',
      },
      {
        q: 'How long does a boiler service take?',
        a: 'For a straightforward domestic boiler, budget under an hour. It can run longer if something needs a closer look — we would rather spend the extra twenty minutes than sign off a boiler that is not actually right.',
      },
      {
        q: 'What is the difference between a service and a repair?',
        a: 'A service is a scheduled inspection and clean. A repair fixes a specific fault. If a service turns up a failed part, we price that separately and get your agreement before replacing it.',
      },
      {
        q: 'Do you service boilers you did not install?',
        a: 'Yes. It makes no difference to us who fitted it.',
      },
    ],
  },
  {
    slug: 'boiler-installation',
    title: 'Boiler Installation',
    h1: 'Boiler installation in London',
    metaTitle: 'New Boiler Installation London | Ninja Plumbers',
    metaDescription:
      'Gas Safe registered new boiler installation in London — correctly sized, a clear price up front, old unit removed. Call Ninja Plumbers, 020 3576 5825.',
    eyebrow: 'Heating and hot water',
    icon: 'boiler',
    target: 'boiler installation london (1,600/mo) · combi boiler installation london (170)',
    summary:
      'A new boiler sized for the property, fitted properly, with the price agreed first.',
    intro:
      'A first boiler installation, a switch from one system type to another, or simply moving the unit to a more sensible spot in the house — Ninja Plumbers handles all three the same way. Fitting the boiler is the easy part. Getting the size, the type and the position right beforehand is what actually decides whether you are happy with it in five years.',
    does: [
      'New boiler supply and installation',
      'Combi, system and heat-only boilers',
      'Converting between system types',
      'Relocating a boiler to a better position',
      'Flue routing and condensate arrangements',
      'Old unit removed and taken away',
    ],
    guidance: [
      {
        title: 'Size matters more than brand',
        body: 'A boiler too big for the property cycles on and off and wears itself out; one too small never quite keeps up. The right size depends on the number of radiators, bathrooms and occupants, not on what was there before — the previous boiler may well have been the wrong size too.',
      },
      {
        title: 'Combi is not automatically the answer',
        body: 'For most flats and smaller terraced houses across London, a combi is the right call. It changes once there are two or more bathrooms likely to be used at the same time — try running two showers off one combi and both of them suffer for it. A system boiler with a cylinder handles that situation properly, which a combi simply was not designed to do.',
      },
      {
        title: 'Where it goes is a real decision',
        body: 'Moving a boiler adds pipework and flue routing but often solves problems that would otherwise persist for years — noise in a bedroom wall, a flue terminating somewhere it should not, or a unit buried behind a fitted kitchen where servicing means dismantling cupboards.',
      },
      {
        title: 'Listed and conservation properties',
        body: 'Where a flue can terminate is constrained in listed buildings and conservation areas, and it is worth establishing that before choosing a boiler rather than after. We look at this first in parts of London where it comes up often.',
      },
    ],
    aside: {
      title: 'Price agreed before we start',
      body: 'You get the figure before anything is disconnected, including removal of the old unit. If something unexpected turns up behind the old boiler we tell you before carrying on, not afterwards.',
    },
    faqs: [
      {
        q: 'How long does a boiler installation take?',
        a: 'A straightforward like-for-like swap is usually a day. Changing system type, or moving the boiler, typically takes two. We will tell you which yours is when we quote.',
      },
      {
        q: 'Should I get a combi or a system boiler?',
        a: 'Combi for most flats and smaller houses. System boiler with a cylinder if you have two or more bathrooms likely to be in use at once, because a combi cannot supply two showers properly at the same time.',
      },
      {
        q: 'Can you move the boiler somewhere else?',
        a: 'In most properties, yes. It means more pipework and a longer flue run, so the job costs more — but getting a boiler off a bedroom wall or out from behind fitted kitchen cupboards is usually worth that extra spend for the years you live with it afterwards.',
      },
      {
        q: 'Do you take the old boiler away?',
        a: 'Yes, removal and disposal of the old unit is part of the job and is included in the figure we quote.',
      },
    ],
  },
  {
    slug: 'boiler-replacement',
    title: 'Boiler Replacement',
    h1: 'Boiler replacement in London',
    metaTitle: 'Boiler Replacement London | Honest Quotes | Ninja Plumbers',
    metaDescription:
      'Thinking about a new boiler? Ninja Plumbers gives London homeowners a straight repair-vs-replace answer, a clear quote and old unit removal. 020 3576 5825.',
    eyebrow: 'Heating and hot water',
    icon: 'boiler',
    target: 'boiler replacement london (480/mo) · new boiler london (260)',
    summary:
      'Replacing a boiler that has reached the end, with a straight answer on whether it has.',
    intro:
      'A boiler that keeps breaking down, costs more to run than it should, or is simply beyond sensible repair — that is when replacement makes sense. It does not always make sense sooner than that, though, and plenty of boilers get written off early by whoever is trying to sell a new one. Ask us and, if yours has years left in it, we will say so.',
    does: [
      'Replacing an old or failed boiler',
      'Repair-versus-replace assessment, with both figures',
      'Like-for-like swaps and system changes',
      'Replacing boilers no longer supported by parts',
      'Old unit removed and taken away',
      'Advice on sizing the replacement correctly',
    ],
    guidance: [
      {
        title: 'When replacement is genuinely the better spend',
        body: 'Broadly: the boiler is over about twelve years old, the failed part is an expensive one, or parts are no longer available for the model. Below that threshold, a repair usually wins — and we will say so even though the replacement is the bigger job.',
      },
      {
        title: 'Get both numbers before deciding',
        body: 'Any quote for a replacement should sit next to the cost of repairing what you have. If nobody has offered you the repair figure, ask for it. A decision made on one number is not a decision.',
      },
      {
        title: 'Do not just replace like for like',
        body: 'Fitting the exact same boiler again is the easy option, but it is not always the right one. A replacement is your one real chance to fix a boiler that was undersized, the wrong type for the property, or crammed into an awkward spot in the first place. If the old one never quite kept the house warm, putting an identical one back in just repeats the mistake — talk to Ninja Plumbers about what would actually suit the property before ordering the same thing again.',
      },
      {
        title: 'Parts availability is a real factor',
        body: 'Some boilers are perfectly serviceable but no longer supported. If a common failure on your model can no longer be sourced, that changes the maths regardless of how old the unit is.',
      },
    ],
    aside: {
      title: 'We will tell you not to',
      body: 'If your boiler is worth repairing, we will say so. A replacement is a bigger job for us and a much bigger bill for you, and recommending one you do not need is how a company gets one job instead of twenty years of them.',
    },
    faqs: [
      {
        q: 'How do I know if my boiler needs replacing?',
        a: 'Age, the cost of the part that has failed, and whether parts are still available. Over roughly twelve years old with an expensive failure usually points to replacement; under that, repair normally wins.',
      },
      {
        q: 'Will you quote for a repair as well?',
        a: 'Yes, always, where a repair is possible. You should be comparing two numbers, not being handed one.',
      },
      {
        q: 'Can I put the new boiler somewhere different?',
        a: 'Yes, and a replacement is the natural moment to do it. Moving it adds pipework and flue work to the job, but it is often the fix for a problem you have lived with for years.',
      },
      {
        q: 'Do I need the same type of boiler I have now?',
        a: 'Not necessarily — a replacement is exactly the point to reconsider that. If the house has gained a second bathroom since the current boiler was fitted, a system boiler with a cylinder may now suit it better than another combi.',
      },
    ],
  },
  {
    slug: 'drain-unblocking',
    title: 'Drain Unblocking',
    h1: 'Drain unblocking in London',
    metaTitle: 'Blocked Drain Unblocking London | Ninja Plumbers',
    metaDescription:
      'Fast, proper drain unblocking across London: rods, jetting and CCTV for sinks, toilets and outside drains. We explain what caused it. Call 020 3576 5825.',
    eyebrow: 'Drainage',
    icon: 'drain',
    target: 'drain unblocking london (1,000) · blocked drain london (590) · blocked toilet london (480)',
    summary:
      'Sinks, toilets and outside drains cleared with proper equipment, not a bottle of chemicals.',
    intro:
      'A sink that drains slowly. A toilet that will not clear no matter how many times you flush it. A drain outside that has started backing up onto the patio. Ninja Plumbers clears all three with rods and jetting equipment rather than a bottle from the supermarket, and if the cause is not obvious, a drain camera finds it rather than us taking a guess.',
    does: [
      'Blocked sinks, baths and showers',
      'Blocked toilets and soil stacks',
      'External drains, gullies and manholes',
      'High-pressure jetting',
      'CCTV drain surveys',
      'Recurring blockages traced to their cause',
    ],
    guidance: [
      {
        title: 'Please do not use caustic drain cleaner',
        body: 'It rarely does much against a proper blockage, it is hard on older pipework, and it leaves whoever comes next reaching into a trap full of caustic liquid. That is a real problem in London’s older housing stock, where the pipework is more delicate than people assume. If you have already tipped some down, just tell us when you call so we turn up prepared for it.',
      },
      {
        title: 'A blocked toilet, first move',
        body: 'Stop flushing. Each flush adds more water to a pan that cannot drain and is how a blockage becomes a flood. If the water level is dropping slowly on its own, it is a partial blockage and can usually wait for a normal appointment.',
      },
      {
        title: 'More than one thing draining slowly',
        body: 'If the sink, bath and toilet are all slow at once, the blockage is in the shared soil stack or the drain outside, not under any one fixture. That is useful to know before anyone starts taking a trap apart.',
      },
      {
        title: 'If it keeps coming back',
        body: 'A drain that blocks repeatedly has a reason: root ingress, fat build-up, a collapsed section, or a badly laid pipe. Clearing it again and again costs more over a year than surveying it once and fixing the cause.',
      },
    ],
    aside: {
      title: 'We will tell you what caused it',
      body: 'Clearing a blockage and saying nothing is easy. We would rather show you what came out and what we found, so you can decide whether the underlying problem is worth fixing.',
    },
    faqs: [
      {
        q: 'Who is responsible for the drain, me or the water company?',
        a: 'Broadly, pipework inside your property boundary is yours, and the shared sewer beyond it is Thames Water’s. We will tell you which side of that line the problem is on, and if it is theirs we will say so rather than charge you to fix it.',
      },
      {
        q: 'Do you do CCTV surveys?',
        a: 'Yes, for recurring blockages, for pre-purchase checks, and where an insurer wants evidence of what is actually wrong.',
      },
      {
        q: 'Can you clear a blocked toilet the same day?',
        a: 'In most cases, yes. Ring the booking line, describe what is going on, and we will give you an honest answer on timing rather than a hopeful one.',
      },
      {
        q: 'What about drains in a block of flats?',
        a: 'We work on shared stacks and communal drainage for managing agents and freeholders. Speak to the management line for that work.',
      },
    ],
  },

  {
    slug: 'leak-detection',
    title: 'Leak Detection',
    h1: 'Leak detection in London',
    metaTitle: 'Hidden Water Leak Detection London | Ninja Plumbers',
    metaDescription:
      'Cannot find a leak? Ninja Plumbers traces hidden pipe leaks, damp patches and rising water bills across London without lifting floors. Call 020 3576 5825.',
    eyebrow: 'Detection',
    icon: 'leak',
    target: 'leak detection london (1,000, low competition) · water leak detection (2,900)',
    summary:
      'Hidden leaks traced with acoustic and thermal equipment, before floors come up.',
    intro:
      'A damp patch that will not stay gone no matter how many times it is painted over. A stain slowly spreading across a ceiling. A water bill that has crept up for no reason anyone can point to. In all three cases the source has to be found before anything gets repaired, otherwise you are paying to fix a symptom rather than the actual leak.',
    does: [
      'Hidden pipe leaks under floors and behind walls',
      'Damp and water-damage investigation',
      'Unexplained increases in water usage',
      'Leaks under solid and tiled floors',
      'Heating system pressure loss',
      'Pre-purchase and pre-refurbishment checks',
    ],
    guidance: [
      {
        title: 'The meter test',
        body: 'Turn off every tap and appliance, then read your water meter. Leave it an hour with nothing running and read it again. If it has moved, you have a leak somewhere on your supply. That one test tells us a great deal before we arrive.',
      },
      {
        title: 'Losing boiler pressure',
        body: 'A boiler that needs topping up every few weeks is usually leaking somewhere in the heating circuit, often a pinhole in pipework under a floor. It is worth finding, because it corrodes the system from the inside as it refills.',
      },
      {
        title: 'A damp patch is rarely above the leak',
        body: 'Before it ever shows itself, water tends to run some distance along a joist or under a floor. That means the stain on your ceiling can be well away from the actual failed pipe — which is exactly why the Ninja Plumbers approach is to locate the leak first, rather than start cutting holes on a hunch and hoping one of them is right.',
      },
      {
        title: 'Talk to your insurer first',
        body: 'Many home insurance policies cover trace and access, meaning the cost of finding the leak and making good afterwards. Worth a call before booking the work, and we can provide a report if they want one.',
      },
    ],
    aside: {
      title: 'Find it before you open it up',
      body: 'Acoustic and thermal methods locate a leak without lifting floors on a hunch. You pay to fix the pipe, rather than to make good three holes in the wrong places.',
    },
    faqs: [
      {
        q: 'Will you have to lift my floor?',
        a: 'Detection itself is non-invasive. Once the leak is located, the repair may need access at that one point, but that is a targeted opening rather than exploratory work across a room.',
      },
      {
        q: 'How accurate is it?',
        a: 'Acoustic and thermal equipment will normally narrow a leak down to a small area. Nothing is perfect through solid concrete, and we will tell you honestly if a site is difficult rather than overpromising.',
      },
      {
        q: 'My water bill has doubled. Is that a leak?',
        a: 'Often it is, especially if nothing about how you use water has actually changed. Run the meter test described above first, then tell us what it showed when you call — it saves time on the visit.',
      },
      {
        q: 'Can you give me a report for my insurer?',
        a: 'Yes. Tell us at the point of booking that you need one, so the engineer documents the job properly on the visit.',
      },
    ],
  },

  {
    slug: 'bathroom-installation',
    title: 'Bathroom Installation',
    h1: 'Bathroom installation in London',
    metaTitle: 'Bathroom Fitters London | Full Installation | Ninja Plumbers',
    metaDescription:
      'London bathroom installation, from one tired toilet to a full strip-out refit or en-suite. Ninja Plumbers prices the job before starting. 020 3576 5825.',
    eyebrow: 'Installation',
    icon: 'bathroom',
    target: 'bathroom fitters london (1,000) · bathroom installation london (720)',
    summary:
      'A single fixture swap through to a full strip-out and refit, priced up front.',
    intro:
      'Maybe it is one tired basin that needs swapping out. Maybe it is the whole bathroom, stripped back to brick and started again from nothing. Either way, we handle the plumbing side and coordinate whichever other trades the job needs, so you are dealing with one point of contact instead of project-managing three separate tradespeople yourself.',
    does: [
      'Full bathroom and en-suite refits',
      'Bath, shower and toilet installation',
      'Wet rooms and level-access showers',
      'Accessible and mobility bathrooms',
      'Basins, vanity units and heated towel rails',
      'Bidets and bidet taps, plumbed and waste-connected',
      'Tiling and finishing coordination',
    ],
    guidance: [
      {
        title: 'Check your water pressure before choosing a shower',
        body: 'A powerful-looking mixer shower on a low-pressure gravity system will disappoint you. Tell us what system you have and we will tell you what will actually perform, before you buy anything.',
      },
      {
        title: 'Moving the toilet is the expensive decision',
        body: 'Relocating a WC means moving the soil connection, which drives cost more than almost any other change. Keeping it where it is, and moving everything else around it, is usually the better value layout.',
      },
      {
        title: 'Order everything before we start',
        body: 'The most common reason a bathroom overruns is a back-ordered item discovered halfway through. Have the suite, tiles and brassware on site before day one and the job runs to plan.',
      },
      {
        title: 'Flats have extra rules',
        body: 'Leasehold flats — common across a lot of London — often come with conditions worth checking before you commit to a design. The lease may require freeholder consent for bathroom work, and some buildings restrict working hours or will not allow a wet area to be moved over a habitable room on the floor below. Better to find that out early than after the old bathroom is already stripped out.',
      },
    ],
    aside: {
      title: 'Priced before we start',
      body: 'The scope and the price are agreed with you before anyone lifts a floorboard. If something behind the wall changes the job, we stop and talk to you rather than press on and bill for it afterwards.',
    },
    faqs: [
      {
        q: 'How long does a bathroom take?',
        a: 'It depends entirely on the scope and the condition of what is behind the existing one. We will give you a realistic timescale with the quote, and tell you what could extend it.',
      },
      {
        q: 'Do you supply the bathroom, or do I?',
        a: 'Whichever suits you. Plenty of customers like choosing and buying their own suite and simply having Ninja Plumbers fit it, and that works just as well as us sourcing everything.',
      },
      {
        q: 'Do you tile as well?',
        a: 'We handle the plumbing and coordinate tiling and finishing as part of the job, so it is one point of contact rather than several.',
      },
      {
        q: 'Can I use the bathroom while the work is happening?',
        a: 'For a full refit, no, not for the duration. That is worth planning for if it is the only bathroom in the property, and we will be straight with you about how long that will be.',
      },
    ],
  },

  {
    slug: 'toilet-installation',
    title: 'Toilet Installation',
    h1: 'Toilet installation in London',
    metaTitle: 'Toilet Installation & Replacement London | Ninja Plumbers',
    metaDescription:
      'New and replacement toilets fitted across London — close-coupled, back-to-wall, wall-hung and concealed cistern WCs. Book Ninja Plumbers on 020 3576 5825.',
    eyebrow: 'New and replacement WCs',
    icon: 'bathroom',
    target: 'toilet plumber (480/mo) · new toilet installation (110/mo) · toilet installation london (90/mo)',
    summary:
      'A new toilet fitted, an old one swapped, or a WC moved to somewhere it has never been.',
    intro:
      'A straight swap of an old toilet for a new one is a morning’s work, no more complicated than that. Moving a WC to a new spot, fitting a wall-hung pan on a frame, or putting one where there has never been a soil connection before — that is a different job with a different set of questions, and they are worth asking before the suite is bought, not once it has already arrived.',
    does: [
      'New and replacement toilets, supplied or your own',
      'Close-coupled, back-to-wall and wall-hung pans',
      'Concealed cisterns and support frames',
      'Moving a toilet to a new position',
      'Soil pipe and waste alterations',
      'Cloakroom and en-suite WCs',
      'Flush mechanism and cistern repairs, no new suite needed',
    ],
    guidance: [
      {
        title: 'Measure before you buy the suite',
        body: 'The distance from the wall to the centre of the waste, and the height and width of the cistern, decide whether a given toilet fits your existing pipework. Photograph the current one from the side and send it with the model you are considering, and we can tell you before you order.',
      },
      {
        title: 'Wall-hung means a frame and a wall that can take it',
        body: 'A wall-hung pan does not hang off the plasterboard — it hangs off a steel frame that carries the actual weight, hidden behind the wall. Cleaner look, easier to keep clean underneath, but the frame eats up more space behind the wall than most people expect. In a tight London cloakroom, that space is often what decides whether wall-hung is even possible.',
      },
      {
        title: 'Concealed cisterns still need access',
        body: 'Everything behind the panel will need reaching one day — the flush valve and the inlet valve are the parts that fail. An access panel is not optional, and tiling over the whole thing is a decision that gets undone expensively.',
      },
      {
        title: 'A rocking toilet will leak eventually',
        body: 'Movement works the waste seal loose over months, and by the time it shows on the ceiling below it has usually been going a while. If yours moves when you sit down, it is worth dealing with now.',
      },
    ],
    aside: {
      title: 'It may only need a part',
      body: 'A toilet that runs, will not flush or fills slowly is very often a flush valve or an inlet valve rather than a new suite. We will tell you that even though it is the smaller job.',
    },
    faqs: [
      {
        q: 'Can you fit a toilet I have already bought?',
        a: 'Yes — Ninja Plumbers fits customer-supplied toilets all the time. Send over the model before the visit so we can check the waste position matches and confirm whether any adaptors will be needed.',
      },
      {
        q: 'How long does a straight swap take?',
        a: 'A like-for-like replacement is usually a morning. Anything involving moving the waste, a concealed cistern or a wall-hung frame is longer and gets quoted after a look.',
      },
      {
        q: 'Can you move the toilet across the room?',
        a: 'Sometimes. It depends on getting a fall on the waste run to the soil stack. Where that is not possible the alternative is a macerator, which we will explain honestly rather than default to.',
      },
      {
        q: 'Do you take the old one away?',
        a: 'Yes, that is included. Old ceramics go for recycling rather than into a skip where we can.',
      },
    ],
  },

  {
    slug: 'general-plumbing',
    title: 'General Plumbing',
    h1: 'General plumbing in London',
    metaTitle: 'General Plumber London | Taps, Toilets, Radiators | Ninja Plumbers',
    metaDescription:
      'Everyday plumbing repairs across London for homeowners, landlords and agents — taps, toilets, radiators, stopcocks, pipework. Call 020 3576 5825.',
    eyebrow: 'Everyday plumbing',
    icon: 'general',
    target: 'plumber london (3,600) · leaking tap repair (1,300) · radiator repair (1,000)',
    summary:
      'Taps, toilets, radiators and pipework. The jobs that never quite get done.',
    intro:
      'The tap that has been dripping for months. The toilet that runs half the night. The one radiator in the flat that never quite gets warm. These are the jobs that sit on a list for years because none of them feel urgent enough on their own — Ninja Plumbers quotes them the same way as a bigger job and, more often than not, sorts them on the first visit.',
    does: [
      'Taps, mixers and washer replacement',
      'Toilets, cisterns and running overflows',
      'Radiators fitted, moved and balanced',
      'Stopcocks and isolation valves',
      'Washing machine and dishwasher connections',
      'Pipework repairs, alterations and repiping',
      'Low water pressure diagnosed and fixed',
    ],
    guidance: [
      {
        title: 'Low pressure is usually one of three things',
        body: 'Limescale sitting in a shower head or tap aerator is the first suspect, and often the whole answer. Next is a valve somewhere on the run that has been left partly closed. Third, and more common in older London stock, is a supply pipe from the street that was never a problem until a power shower or a modern washing machine started asking more of it than it was ever built to give. We check them in that order — cheapest and quickest first.',
      },
      {
        title: 'A running toilet is not harmless',
        body: 'A cistern that keeps refilling can waste hundreds of litres a day. On a water meter that shows up on the bill, and it is usually a cheap part and a short visit to fix.',
      },
      {
        title: 'Know your isolation valves',
        body: 'Most taps and toilets have a small isolation valve on the supply pipe beneath them. A flat-head screwdriver turned a quarter turn shuts off that one fixture without turning off the whole house.',
      },
      {
        title: 'Radiator cold at the bottom',
        body: 'Cold at the top means air, and bleeding it works. Cold at the bottom means sludge sitting in the bottom of the radiator, and bleeding will do nothing at all. That one needs flushing.',
      },
      {
        title: 'Old taps in old flats',
        body: 'Plenty of London flats have a tap that is perfectly fine sitting behind an isolation valve that has completely seized up. It is worth knowing going in that what looks like a ten-minute job occasionally turns into something slightly bigger — and if that happens, we tell you before we go ahead with it, not once it is already done.',
      },
    ],
    aside: {
      title: 'No job too small',
      body: 'A dripping tap is worth a call. We would rather do the ten-minute job well and be the people you call for the big one.',
    },
    faqs: [
      {
        q: 'Will you come out for one small job?',
        a: 'Yes. Small jobs are quoted the same way as large ones and are often done on the first visit.',
      },
      {
        q: 'Do you work for landlords and agents?',
        a: 'Regularly. Repairs, tenancy turnarounds and reactive maintenance across managed properties. The management line is the best number for ongoing arrangements.',
      },
      {
        q: 'Can you fit an outside tap?',
        a: 'Yes, that is a common job. It needs a check valve fitted to comply with water regulations, which is included as standard.',
      },
      {
        q: 'Do you charge a callout fee on top?',
        a: 'You will have a price for the work itself before anyone starts. Exactly what is and is not included in that figure is spelled out at the point you agree to it, so there is nothing sprung on you afterwards.',
      },
    ],
  },

  {
    slug: 'commercial-plumbing',
    title: 'Commercial Plumbing',
    h1: 'Commercial plumbing in London',
    metaTitle: 'Commercial Plumber London | Offices, Shops & Blocks | Ninja Plumbers',
    metaDescription:
      'London commercial plumbing for offices, restaurants, retail units and blocks of flats. Out-of-hours slots available. Call 020 3576 5825.',
    eyebrow: 'Commercial',
    icon: 'commercial',
    target: 'commercial plumber london (260, low competition)',
    summary:
      'Offices, restaurants, retail and blocks of flats, worked around your opening hours.',
    intro:
      'A shop, an office floor or a restaurant cannot simply close its doors while a plumber gets on with the job. We build the schedule around your opening hours and your tenants instead, and report back to whichever manager, agent or freeholder has to sign the work off at the end of it.',
    does: [
      'Washroom installation, repair and maintenance',
      'Office kitchens, tea points and boiling taps',
      'Commercial kitchen plumbing',
      'Retail unit fit-outs and shopfront washrooms',
      'Commercial drain clearance and CCTV survey',
      'Reactive repairs for managing agents and landlords',
      'Communal systems in blocks of flats',
      'Out-of-hours and overnight work',
    ],
    spaces: [
      {
        title: 'Office kitchens and washrooms',
        body: 'Tea points, boiling taps, dishwashers and the washrooms everyone in the building depends on. The constraint is almost always access rather than difficulty: we work early, late or at weekends so a floor of desks is not standing idle while a tap is changed.',
      },
      {
        title: 'Commercial kitchens',
        body: 'Grease traps, high-demand hot water, dishwasher and glasswasher connections, and drainage built for volume rather than for a domestic sink. A kitchen that cannot open loses a service, so these are scheduled around your covers and we carry the parts that fail most often.',
      },
      {
        title: 'Retail units',
        body: 'Fit-outs, staff washrooms and customer WCs, and the reactive work that comes with a shared stack in a parade or a shopping centre. Where a landlord or centre management has to approve the work, we produce the paperwork they need rather than leaving you to chase it.',
      },
    ],
    guidance: [
      {
        title: 'We work around trading hours',
        body: 'For restaurants and retail, that usually means early mornings, evenings or overnight. Tell us your trading pattern at the point of enquiry and we will schedule to it rather than around it.',
      },
      {
        title: 'Paperwork that satisfies whoever signs it off',
        body: 'Managing agents, freeholders and landlords generally need more than a verbal all-clear. Tell us who needs to see what, and the engineer will document the job accordingly on the visit.',
      },
      {
        title: 'Shared stacks in blocks',
        body: 'When one flat reports a blockage, quite often the real problem sits in the shared stack and is affecting several flats at once, not just the one that called it in. The whole job usually comes down to getting access to the right flats on the first visit — miss one and you are booking a second trip for what should have been sorted the first time.',
      },
      {
        title: 'Commercial work is routine for us, not an exception',
        body: 'Ninja Plumbers takes on offices, restaurants, shops and blocks of flats alongside residential jobs every week, so working around opening hours, tenants and managing agents is familiar ground rather than something we figure out on the day.',
      },
    ],
    aside: {
      title: 'Speak to management directly',
      body: 'For commercial work, ongoing maintenance and account arrangements, the management line is the better number. It reaches the people who can agree terms.',
    },
    faqs: [
      {
        q: 'Can you work outside our opening hours?',
        a: 'Yes. For restaurants, shops and offices that is often the only sensible way to do it, and we schedule around your trading rather than through it.',
      },
      {
        q: 'Do you take on ongoing maintenance?',
        a: 'Yes. Speak to the management line about reactive and planned arrangements across a property or portfolio.',
      },
      {
        q: 'Do you work for managing agents?',
        a: 'Regularly, including reactive repairs across managed blocks and communal drainage.',
      },
      {
        q: 'Which number should I use?',
        a: 'The booking line is quickest for a one-off repair. Anything ongoing, commercial or tied to an account is better routed through the management line, where it reaches someone who can actually agree terms.',
      },
    ],
  },

  {
    slug: 'gas-safety-certificate',
    title: 'Gas Safety Certificates',
    h1: 'Gas safety certificates (CP12) in London',
    metaTitle: 'Landlord Gas Safety Certificate (CP12) London | Ninja Plumbers',
    metaDescription:
      'CP12 gas safety certificates for London landlords and homeowners, issued by Gas Safe registered engineers with same-week appointments. Call 020 3576 5825.',
    eyebrow: 'CP12',
    icon: 'general',
    target: 'gas safety certificate (9,900/mo) · landlord gas safety certificate (varies by area)',
    summary:
      'Landlord gas safety certificates issued by a Gas Safe registered engineer, with the paperwork sent the same day.',
    intro:
      'Most people still call it a CP12, going back to the old form number, but the correct name now is simply a gas safety certificate. Whatever you call it, landlords in England and Wales are legally required to renew one every twelve months. Ninja Plumbers sends a Gas Safe registered engineer to check every appliance, flue and section of pipework in the property, and the certificate is issued there and then, on the day.',
    does: [
      'Landlord gas safety certificates (CP12), annual renewal',
      'Checks on boilers, gas fires, hobs and any other gas appliance',
      'Flue performance and ventilation checks',
      'Certificate issued and emailed the same day',
      'Portfolio and multi-property scheduling for landlords and agents',
      'Follow-up repairs where a check identifies a fault',
    ],
    guidance: [
      {
        title: 'It has to be a Gas Safe registered engineer',
        body: 'Only an engineer registered for the specific appliance types in the property can legally carry out the check. Ask to see the Gas Safe ID card — every engineer should be glad to show it, and checking the register yourself takes thirty seconds.',
      },
      {
        title: 'The certificate covers what is there on the day',
        body: 'It is a check of the appliances and pipework as installed, not a guarantee against future faults. If something is added or changed afterwards — a new gas hob, for instance — it needs to be checked too.',
      },
      {
        title: 'A fail on one appliance does not fail the whole certificate',
        body: 'If one appliance is unsafe, it gets capped off or condemned and noted, and the rest of the property can still pass. We would rather isolate the one fault and get the paperwork issued than delay the whole job.',
      },
      {
        title: 'Tenants must get a copy within 28 days',
        body: 'The rule is 28 days from the check for an existing tenant, and before move-in day for a new one — landlords are required to hand over a copy of the current certificate either way. Emailing it out the same day, as standard, is exactly why this is not the thing that slips through the cracks at renewal time.',
      },
    ],
    aside: {
      title: 'Book it before it lapses, not after',
      body: 'A lapsed certificate is a compliance gap a letting agent will flag immediately. We can set a reminder so renewals happen on schedule rather than being noticed when it is already overdue.',
    },
    faqs: [
      {
        q: 'How long does a gas safety check take?',
        a: 'Usually thirty to forty-five minutes for a typical property, longer with more appliances. The certificate is issued at the end of the visit.',
      },
      {
        q: 'What happens if an appliance fails?',
        a: 'An immediately dangerous appliance is isolated on the spot for safety. We will tell you what is needed to put it right, and the certificate can usually still be issued for the rest of the property.',
      },
      {
        q: 'Do I need one as a homeowner, not a landlord?',
        a: 'The legal requirement applies specifically to landlords. It is not compulsory if you own and live in the property yourself, though an annual check is still a sensible habit, especially going into winter when the boiler is working hardest.',
      },
      {
        q: 'Can you do several properties in a portfolio on the same visit?',
        a: 'Yes — tell us the addresses and how many appliances at each, and we can usually route a day around a cluster of properties.',
      },
    ],
  },

  {
    slug: 'cctv-drain-survey',
    title: 'CCTV Drain Surveys',
    h1: 'CCTV drain surveys in London',
    metaTitle: 'CCTV Drain Survey London | Camera Inspection | Ninja Plumbers',
    metaDescription:
      'London CCTV drain surveys with recorded footage and a written report — for house purchases, insurance claims and drains that keep blocking. 020 3576 5825.',
    eyebrow: 'Diagnostics',
    icon: 'drain',
    target: 'cctv drain survey (2,900/mo)',
    summary:
      'A camera down the drain shows what is actually wrong, rather than guessing from what keeps happening above ground.',
    intro:
      'A drain that blocks over and over. A smell around the garden that will not shift. A solicitor asking for a survey before a house purchase completes. Three different reasons for the same answer: a waterproof camera goes down the line and shows exactly what state the pipe is in — a collapse, roots growing in, a joint that has shifted out of line, or nothing at all. Either way, Ninja Plumbers hands you the footage and a written report to go with it.',
    does: [
      'CCTV camera inspection of drains and sewers',
      'Recorded footage and a written report',
      'Pre-purchase drain surveys for house buyers',
      'Insurance claim surveys and evidence',
      'Locating the exact position and depth of a fault',
      'Root ingress, collapses and misaligned joints identified',
    ],
    guidance: [
      {
        title: 'A survey is diagnosis, not a fix',
        body: 'The camera tells you what is wrong and where. If it turns out to be a blockage, that is a separate job to clear it; if it is a collapsed section, that is an excavation and repair. We will quote the survey and the likely next step separately, since one does not commit you to the other.',
      },
      {
        title: 'Recurring blockages are usually structural',
        body: 'If the same drain blocks every few months despite clearing it properly each time, something is causing debris to catch — a root, a dip in the pipe, a partial collapse. A survey is what finds the actual cause instead of clearing the same symptom repeatedly.',
      },
      {
        title: 'Pre-purchase surveys are worth commissioning yourself',
        body: 'A survey the seller commissioned is not necessarily one you can rely on as independent. Getting your own done, particularly on a period property with old clay drains, is a small outlay next to the risk of finding a collapsed run only after you have already completed on the purchase.',
      },
      {
        title: 'The report is what an insurer or solicitor actually wants',
        body: 'A written report with timestamped, located footage is what gets accepted for an insurance claim or a house purchase — a verbal description of what was seen is not. We provide the report as standard, not as an extra.',
      },
    ],
    aside: {
      title: 'Footage settles an argument fast',
      body: 'Whether it is a dispute with a neighbour over a shared drain or a query from an insurer, footage with a location and a date on it ends the back-and-forth quickly.',
    },
    faqs: [
      {
        q: 'How long does a survey take?',
        a: 'A single domestic run is usually under an hour. A full property survey with several runs, or a longer commercial line, takes longer.',
      },
      {
        q: 'Can you survey a drain I do not have easy access to?',
        a: 'Usually, through the nearest manhole or gully rather than needing to dig anything up first. If access genuinely is not possible, we will say so before charging for the visit.',
      },
      {
        q: 'Will I get to see the footage?',
        a: 'You will — the recording and the written report are both part of the survey itself, not something billed separately afterwards.',
      },
      {
        q: 'What if the survey finds a serious problem?',
        a: 'We will explain exactly what was found, whereabouts, and what fixing it would involve, and quote that as a separate job so you can decide with the full picture.',
      },
    ],
  },

  {
    slug: 'drain-repairs',
    title: 'Drain Repairs',
    h1: 'Drain repairs in London',
    metaTitle: 'Drain Repairs London | Excavation & No-Dig Relining | Ninja Plumbers',
    metaDescription:
      'Collapsed, cracked or root-damaged drains repaired across London by excavation or no-dig relining, confirmed by camera first. Ninja Plumbers 020 3576 5825.',
    eyebrow: 'Repairs',
    icon: 'drain',
    target: 'drain repair (1,900/mo)',
    summary:
      'A drain that is actually broken, not just blocked — repaired by digging it up or, where the run allows, without digging at all.',
    intro:
      'There is a real difference between a drain that is blocked and a drain that is broken. Unblocking clears whatever is stuck inside a pipe that still works fine. A repair is for a pipe that is physically damaged — collapsed, cracked, split by roots, or knocked out of alignment — and we confirm which one we are dealing with using a camera survey before quoting anything. From there it is either excavation, or, where the run allows for it, a no-dig lining fed in through the existing pipe.',
    does: [
      'Excavation and replacement of collapsed or badly damaged drains',
      'No-dig relining for cracks and root damage where the run allows it',
      'Root cutting and root-barrier installation',
      'Reinstating misaligned or displaced joints',
      'Reinstatement of the surface afterwards — paving, tarmac or garden',
      'Shared-drain repairs and liaising with the water company where it applies',
    ],
    guidance: [
      {
        title: 'It always starts with a survey, not a guess',
        body: 'We will not quote an excavation without a camera survey confirming exactly where the damage is and how bad it is. Digging up the wrong section, or more than needed, is an expensive mistake to avoid.',
      },
      {
        title: 'No-dig relining is not always possible',
        body: 'A resin liner works for a crack or a split section with the pipe still roughly in shape. A genuinely collapsed section, or one with a bad misalignment, physically cannot be relined and needs excavation instead.',
      },
      {
        title: 'A shared drain may not be entirely your responsibility',
        body: 'If a drain is shared with next door, responsibility for the shared section often sits with the water company under the Water Industry Act — not with either homeowner. Ninja Plumbers works out where that boundary actually falls before you end up paying for a repair that was never yours to fund in the first place.',
      },
      {
        title: 'Reinstatement is part of the job, not an afterthought',
        body: 'If we excavate through a patio or a driveway, putting it back properly is agreed as part of the quote up front, not negotiated after the hole is already open.',
      },
    ],
    aside: {
      title: 'Ask whether it can be relined',
      body: 'No-dig repair is faster, causes no mess above ground, and is often cheaper than excavation. It is worth asking specifically, since not every company offers it.',
    },
    faqs: [
      {
        q: 'How do you know if a drain needs repair rather than unblocking?',
        a: 'A CCTV survey shows the difference clearly — debris sitting in an intact pipe is a blockage; a cracked, collapsed or root-split pipe wall is a repair. We will not recommend a repair without that evidence.',
      },
      {
        q: 'Will you need to dig up my garden or driveway?',
        a: 'Only where the damage rules out relining as an option. If relining will work, nothing above ground gets touched at all.',
      },
      {
        q: 'Is a shared drain the water company’s responsibility?',
        a: 'Often, for the shared section beyond your boundary. We will identify where that line falls and can refer a genuinely shared fault to the water company rather than quote you for their repair.',
      },
      {
        q: 'How long does a repair take?',
        a: 'A no-dig reline is typically a day. An excavation depends on depth and access, and we will give you a realistic timeframe once the survey confirms the extent of it.',
      },
    ],
  },

  {
    slug: 'wet-rooms-and-walk-in-showers',
    title: 'Wet Rooms & Walk-In Showers',
    h1: 'Wet room and walk-in shower installation in London',
    metaTitle: 'Wet Room & Walk-In Shower Fitters London | Ninja Plumbers',
    metaDescription:
      'Level-access wet rooms and walk-in showers built across London, with the tanking and floor falls done properly. Book Ninja Plumbers on 020 3576 5825.',
    eyebrow: 'Level access',
    icon: 'bathroom',
    target: 'wet room installation (720/mo) · walk in shower installation (480/mo)',
    summary:
      'Level-access showers and full wet rooms, with the tanking and falls that decide whether it leaks in five years or never.',
    intro:
      'From the outside a wet room looks deceptively simple — no tray, no enclosure, just a floor that happens to drain. Everything that actually matters is hidden underneath: tanking membrane taken up the walls, a floor formed with a proper fall to the drain, and a gully big enough for the water hitting it. Skip any of that and the leak does not show up in the room itself — it shows up two floors down, well after the tiler has packed up and left.',
    does: [
      'Full wet room conversions, tanked and floor-formed',
      'Walk-in and level-access showers without a full wet room',
      'Falls formed correctly to the drain, not guessed at by eye',
      'Tanking taken up walls and around penetrations',
      'Linear and point drains, sized for the shower’s flow',
      'Accessible and wheelchair-accessible wet rooms',
    ],
    guidance: [
      {
        title: 'The waterproofing is the job, the tiling is finishing',
        body: 'Tanking membrane, taken properly up the walls and sealed around every pipe penetration, is what actually stops water getting into the floor and the flat below. Tiling on top of poor tanking still leaks — it just takes longer to show.',
      },
      {
        title: 'A wet room needs a joist depth check first, in a flat especially',
        body: 'Forming a fall to the drain usually means dropping the floor level, which needs depth in the joists or slab to do properly. In a top-floor flat with limited build-up, that is the first thing worth checking, not the last.',
      },
      {
        title: 'Flats need the freeholder involved',
        body: 'Changing the floor build-up and drainage of a flat for a wet room often needs sign-off from the freeholder, and can affect the ceiling void of the flat below too. Ninja Plumbers raises this with you before the floor is opened up, not once it already has been.',
      },
      {
        title: 'A walk-in shower is not automatically a wet room',
        body: 'A walk-in shower with a tray and glass panel gets most of the look without lowering the floor, and is a smaller job. A full wet room is the right answer for genuine level access; a walk-in tray is often the right answer for everyone else.',
      },
    ],
    aside: {
      title: 'Get the drain size right for the shower',
      body: 'A linear drain sized for a low-flow shower head will not keep up with a rainfall head at full flow. Tell us what you are fitting before the drain is chosen, not after.',
    },
    faqs: [
      {
        q: 'Do I need planning permission or building control sign-off?',
        a: 'Not planning permission for a like-for-like bathroom. Building regulations do apply to the waterproofing and drainage, and we work to them as standard.',
      },
      {
        q: 'Can a wet room go in a flat, not just a house?',
        a: 'Yes, though floor depth and the freeholder’s consent are worth checking early — both can affect what is possible before you commit to a design.',
      },
      {
        q: 'How long does a full wet room take?',
        a: 'Somewhere between one and two weeks as a rule, depending on how much floor forming and finishing is needed. It runs longer than a standard bathroom refit because the tanking needs proper drying time between stages, and rushing that is exactly how you get a leak later.',
      },
      {
        q: 'Will it smell or let damp through eventually?',
        a: 'Not if the tanking and falls are done properly and given time to cure before tiling. Rushed drying time is the most common cause of an eventual failure, not the wet room concept itself.',
      },
    ],
  },

  {
    slug: 'air-conditioning-repair',
    title: 'Air Conditioning Repair',
    h1: 'Air conditioning repair in London',
    metaTitle: 'Air Conditioning Repair London | F-Gas Engineers | Ninja Plumbers',
    metaDescription:
      'London air conditioning repairs for units not cooling, leaking indoors or tripping the breaker — diagnosed by F-Gas engineers. Call 020 3576 5825.',
    eyebrow: 'Cooling',
    icon: 'ac',
    target: 'air conditioning repair london (480/mo) · air conditioning repair (6,600/mo)',
    summary:
      'A system that has stopped cooling, is leaking indoors, or is tripping the breaker — diagnosed before anything is quoted.',
    intro:
      'A unit that has simply stopped cooling. One that is dripping water onto the carpet. One that trips the electrics the moment it switches on. Whatever the symptom, the actual cause is rarely obvious just by looking at the box on the wall — it could be the refrigerant, the drainage, the electrics or the unit itself. Ninja Plumbers finds the real fault first, then prices the repair, so you are never paying for a guess.',
    does: [
      'Units not cooling, or barely cooling',
      'Indoor unit leaking or dripping water',
      'Outdoor condenser not starting or cutting out',
      'Tripping breakers and electrical faults',
      'Fault codes and error displays',
      'F-Gas leak detection and repair',
    ],
    guidance: [
      {
        title: 'Check the basics before booking a callout',
        body: 'Is the unit actually receiving power, and is the remote or wall control set to cool rather than fan or heat? Is the outdoor unit clear of anything blocking the airflow around it? These sound obvious and still explain a fair number of "it has stopped working" calls.',
      },
      {
        title: 'Water indoors is usually drainage, not a leak',
        body: 'When an indoor unit is dripping, the refrigerant system is rarely to blame — nine times out of ten it is a condensate drain that has blocked or was never given enough fall. Once we find it, the fix is straightforward, but ignored for long enough it will mark a ceiling or a wall just as badly as any ordinary plumbing leak would.',
      },
      {
        title: 'A unit that trips the breaker should not be reset repeatedly',
        body: 'An electrical fault that keeps tripping the circuit is not solved by resetting it and hoping. Repeated tripping usually means a fault getting worse, and continuing to run it can turn a repair into a replacement.',
      },
      {
        title: 'Refrigerant leaks are F-Gas regulated work',
        body: 'If the fault is a loss of refrigerant, finding and repairing the leak — and handling the refrigerant itself — is legally restricted to F-Gas registered engineers. It is not a job for a general handyman regardless of what they charge.',
      },
    ],
    aside: {
      title: 'F-Gas registered',
      body: 'Any fault involving refrigerant is diagnosed and repaired by F-Gas registered engineers, as UK regulations require. Ask to see it on the doorstep, the same as you would for Gas Safe.',
    },
    faqs: [
      {
        q: 'Why has my air conditioning stopped cooling?',
        a: 'Commonly a refrigerant leak, a fault with the outdoor unit, or in some cases just a filter so clogged it restricts airflow. We check the straightforward causes first before assuming the worst.',
      },
      {
        q: 'Why is my indoor unit leaking water?',
        a: 'Nearly always the condensate drain — either blocked or not falling correctly — rather than anything to do with the refrigerant. Once we can actually see the drain run, it is usually a quick job to put right.',
      },
      {
        q: 'Can you repair a system you did not install?',
        a: 'Yes, whoever fitted it makes no difference to us.',
      },
      {
        q: 'Is a refrigerant leak expensive to fix?',
        a: 'It depends on where the leak is and how accessible the pipework is. We find and confirm the leak first, then quote for the repair — never the other way round.',
      },
    ],
  },
  {
    slug: 'air-conditioning-maintenance',
    title: 'Air Conditioning Maintenance',
    h1: 'Air conditioning maintenance in London',
    metaTitle: 'Air Conditioning Maintenance London | F-Gas Checks | Ninja Plumbers',
    metaDescription:
      'Keep your London air conditioning running efficiently — annual filter, refrigerant and F-Gas leak checks by F-Gas registered engineers. 020 3576 5825.',
    eyebrow: 'Cooling',
    icon: 'ac',
    target: 'air conditioning maintenance london (480/mo) · air conditioning servicing london (210/mo)',
    summary:
      'Annual maintenance that keeps a system cooling efficiently and catches a refrigerant leak before it becomes a breakdown.',
    intro:
      'Skip servicing altogether and a system works harder than it should to do the same job, and fails sooner than it needs to. An annual visit from Ninja Plumbers covers the filters, the drainage and the electrics, plus the F-Gas leak check that the law requires above a certain refrigerant charge — carried out, as it must be, by F-Gas registered engineers.',
    does: [
      'Filters cleaned or replaced',
      'Condensate drain checked and cleared',
      'Refrigerant charge and pressures checked',
      'F-Gas leak checks, where required by law',
      'Electrical connections and controls checked',
      'Outdoor condenser cleaned and inspected',
    ],
    guidance: [
      {
        title: 'F-Gas leak checks are a legal requirement, not an upsell',
        body: 'Systems holding a refrigerant charge above a set threshold must have periodic leak checks under F-Gas regulations. It is not something we invented to sell a service plan — it is the law, and only F-Gas registered engineers can carry it out.',
      },
      {
        title: 'A dirty filter is the most common reason for weak cooling',
        body: 'A filter that has quietly clogged up with dust forces the whole system to work harder for a worse result — it is the single most common thing a maintenance visit catches, and the easiest to put right. Nine times out of ten, it explains why a system that used to cool a room properly no longer seems to manage it.',
      },
      {
        title: 'Once a year, before the weather asks anything of it',
        body: 'Booking maintenance in spring, before the first warm spell, means any fault gets fixed while it is inconvenient rather than while the system is needed. Booking it in the middle of a heatwave means joining everyone else who left it too late.',
      },
      {
        title: 'Maintenance is not the same as a repair',
        body: 'A maintenance visit is a scheduled check and clean. If it finds a fault — a refrigerant leak, a failing part — fixing that is separate work, priced and agreed before anything is done.',
      },
    ],
    aside: {
      title: 'F-Gas registered',
      body: 'Refrigerant checks are carried out by F-Gas registered engineers, as UK regulations require. Ask to see it on the doorstep, the same as you would for Gas Safe.',
    },
    faqs: [
      {
        q: 'How often should air conditioning be serviced?',
        a: 'Once a year is standard. Systems above a certain refrigerant charge also need periodic F-Gas leak checks by law, which a routine maintenance visit covers.',
      },
      {
        q: 'What does a maintenance visit actually cover?',
        a: 'Filters, the condensate drain, refrigerant pressures, electrical connections and controls, and the outdoor condenser — plus an F-Gas leak check where the system requires one.',
      },
      {
        q: 'Will maintenance stop my system from breaking down?',
        a: 'It picks up the usual suspects before they turn into a full breakdown — a clogged filter, a slow refrigerant leak, a drain that has started to block — though no amount of servicing can promise a system will never develop a fault.',
      },
      {
        q: 'Can you maintain a system installed by someone else?',
        a: 'Yes, including F-Gas leak checks on existing systems, whoever fitted them.',
      },
    ],
  },
  {
    slug: 'air-conditioning-installation',
    title: 'Air Conditioning Installation',
    h1: 'Air conditioning installation in London',
    metaTitle: 'Air Conditioning Installation London | Split Systems | Ninja Plumbers',
    metaDescription:
      'Split and multi-split air conditioning installed across London, sized and sited properly by F-Gas registered engineers. Call Ninja Plumbers 020 3576 5825.',
    eyebrow: 'Cooling',
    icon: 'ac',
    target: 'air conditioning installation london (1,300/mo) · air con installation (1,900/mo)',
    summary:
      'Split and multi-split air conditioning, sized and sited properly, fitted by F-Gas registered engineers.',
    intro:
      'One room needs a split system; several rooms can often share a multi-split running off a single outdoor condenser. Which one suits a property depends on how many rooms need cooling, where the outdoor unit can realistically sit, and what the walls and existing cabling will allow. And because refrigerant work is legally restricted, it is always F-Gas registered engineers handling that part — never left to chance.',
    does: [
      'Split system installation, room by room',
      'Multi-split systems for several rooms off one outdoor unit',
      'Siting the outdoor condenser and pipework runs',
      'Condensate drainage done properly, not just run to the nearest gutter',
      'Replacing an existing system, same spec or upgraded',
      'Electrical connection and isolation for the new unit',
    ],
    guidance: [
      {
        title: 'Split or multi-split depends on the rooms, not just the budget',
        body: 'One room is a straightforward split system. Several rooms can often share one outdoor condenser as a multi-split, which is tidier and usually cheaper than separate systems — provided the outdoor unit has somewhere sensible to go and the pipe runs are realistic.',
      },
      {
        title: 'Where the outdoor unit goes is usually the real decision',
        body: 'The outdoor unit needs clear airflow around it and a sensible route for the pipework and drain to get back inside. In a flat or a conservation area, that spot may also need consent from the freeholder or the council before Ninja Plumbers can fit anything — worth confirming before you have even chosen the indoor unit.',
      },
      {
        title: 'Condensate has to go somewhere planned',
        body: 'Every indoor unit produces water as it cools. That needs a proper drain route, not a pipe left dripping onto a flat roof or a neighbour’s wall. It is decided at installation, not fixed afterwards.',
      },
      {
        title: 'F-Gas registration is not optional',
        body: 'Installing, servicing or decommissioning a system that uses refrigerant is regulated work, and only F-Gas registered engineers are legally permitted to handle the refrigerant side of it. Ask to see the certification — it is a fair question and we are glad to show it.',
      },
    ],
    aside: {
      title: 'F-Gas registered',
      body: 'Refrigerant work is carried out by F-Gas registered engineers, as UK regulations require. Ask to see it on the doorstep, the same as you would for Gas Safe.',
    },
    faqs: [
      {
        q: 'Do I need planning permission for an outdoor unit?',
        a: 'Usually not for a house, though flats, listed buildings and conservation areas can need consent for where the outdoor unit sits. We will tell you if that applies before booking a survey.',
      },
      {
        q: 'How many rooms can one outdoor unit cool?',
        a: 'As a rule of thumb, a multi-split runs anywhere from two to five indoor units off a single outdoor condenser, depending on the make and how much combined capacity the rooms need. We size the system to match the rooms, not to whatever happens to be sitting on the van that day.',
      },
      {
        q: 'Is the installation certified?',
        a: 'Refrigerant work is carried out by F-Gas registered engineers, which is a legal requirement, not an optional extra. We can show the certification on request.',
      },
      {
        q: 'Do you also maintain the system after installation?',
        a: 'Yes — annual maintenance and F-Gas leak checks are a separate service, covered on our air conditioning maintenance page, and available whether we installed your system or not.',
      },
    ],
  },
  {
    slug: 'air-conditioning-replacement',
    title: 'Air Conditioning Replacement',
    h1: 'Air conditioning replacement in London',
    metaTitle: 'Air Conditioning Replacement London | Ninja Plumbers',
    metaDescription:
      'Old or unreliable air conditioning replaced across London by F-Gas registered engineers, with honest repair-or-replace advice on every job. 020 3576 5825.',
    eyebrow: 'Cooling',
    icon: 'ac',
    target: 'air conditioning replacement (1,000/mo) · air conditioning unit replacement (210/mo)',
    summary:
      'Replacing a system that has reached the end — including old units still running a refrigerant that can no longer be topped up.',
    intro:
      'A system that is old, unreliable, or running a refrigerant nobody supplies any more eventually needs replacing. Before that, though, comes the same question Ninja Plumbers asks about a failing boiler: does it genuinely need replacing, or would a repair do the job for a lot less money? We will give you a straight answer either way, even on the occasions that means talking you out of the bigger job.',
    does: [
      'Replacing an old or failed system',
      'Repair-versus-replace assessment, with both figures',
      'Systems still running an obsolete refrigerant',
      'Like-for-like swaps and upgrades to a larger or multi-split system',
      'Old unit and outdoor condenser removed and taken away',
      'Resizing a system that never quite kept up',
    ],
    guidance: [
      {
        title: 'Old refrigerant is often the real reason to replace',
        body: 'Older systems were charged with a refrigerant that has not been legally available to top up for years. If one of those systems develops a leak, there is no legal repair that keeps it running on the same gas — replacement is usually the only real option, whatever the rest of the unit is like.',
      },
      {
        title: 'Get both numbers before deciding',
        body: 'Any quote for a replacement should sit next to the cost of repairing what you have, where a repair is genuinely possible. If nobody has offered you the repair figure, ask for it.',
      },
      {
        title: 'A replacement is the chance to correct the original sizing',
        body: 'A system that has never quite kept a room cool, or a single split that stopped being enough once the space changed, does not have to be replaced with the same mistake. This is the point to size it properly, or move up to a multi-split, rather than fitting another undersized unit and living with the same problem for another decade.',
      },
      {
        title: 'The outdoor unit and pipework may not need full replacement',
        body: 'Depending on age and condition, some replacements can reuse existing pipework runs, which keeps the job smaller and the walls untouched. We tell you which applies before quoting, not after.',
      },
    ],
    aside: {
      title: 'We will tell you if it does not need replacing',
      body: 'If your system is worth repairing rather than replacing, we will say so. A replacement is a bigger job for us and a bigger bill for you, and there is no reason to recommend one you do not need.',
    },
    faqs: [
      {
        q: 'How do I know if my air conditioning needs replacing rather than repairing?',
        a: 'Age, what has actually failed, and whether it still runs a refrigerant that can legally be topped up. A system on an obsolete refrigerant with a leak usually has to be replaced; most other faults are worth repairing first.',
      },
      {
        q: 'Will you quote for a repair as well as a replacement?',
        a: 'Yes, wherever a repair is genuinely possible. You should be comparing two figures, not being handed one.',
      },
      {
        q: 'Can I upgrade to a bigger or multi-split system when I replace?',
        a: 'You can, and replacement is the sensible moment to do it — especially where the existing system has never really kept up with the room, or you want extra rooms brought onto one outdoor unit. Ask Ninja Plumbers to size it properly rather than matching what was there before.',
      },
      {
        q: 'Do you remove the old unit?',
        a: 'Yes, removal and disposal of the old system, including the outdoor condenser, is part of the job.',
      },
    ],
  },

  // ---- Added after keyword research: fixture- and job-level pages that
  // ---- measured above the 140/mo bar. Room-based pages stay rejected;
  // ---- see rejected.ts for those figures.
  {
    slug: 'blocked-toilet',
    title: 'Blocked Toilet',
    h1: 'Blocked toilets cleared in London',
    metaTitle: 'Blocked Toilet London | Cleared Properly | Ninja Plumbers',
    metaDescription:
      'Blocked toilet in London cleared properly — not flushing, water rising, or blocking again and again. We find the cause too. Call 020 3576 5825.',
    eyebrow: 'Blockages',
    icon: 'drain',
    target: 'blocked toilet (4,400/mo) · blocked toilet london (480/mo) · toilet not flushing (1,600/mo)',
    summary:
      'A toilet that will not flush away, or one that keeps blocking. Cleared, with the cause explained.',
    intro:
      'A toilet that will not flush away stops a household in its tracks. Sometimes it is one obstruction sitting in the pan and it clears in minutes. Sometimes the pan is only where the problem shows, and the real fault is further along the waste — a part-blocked branch, a shared soil stack, or a damaged drain outside. Ninja Plumbers clears the toilet first and then tells you which of those you have, because the second sort comes back and the first sort does not.',
    does: [
      'Toilets that will not flush away',
      'Water rising in the pan, or draining away slowly',
      'Wipes, sanitary products and other obstructions removed',
      'Blocked macerator and Saniflo toilets',
      'Blockages traced back to the soil stack or the drain outside',
      'Repeat blockages investigated by camera',
      'Same visit advice on what caused it',
    ],
    guidance: [
      {
        title: 'Stop flushing, then give it an hour',
        body: 'Every extra flush adds water to a pan that cannot drain, and that is how a blockage becomes a flood across the bathroom floor. Walk away and leave it alone. If the level drops on its own over the next hour, it is a partial blockage and can wait for an ordinary appointment. If it sits exactly where it is, it is a full one. Either way, bail the pan down into a bucket before anyone starts work — it makes the whole job considerably less unpleasant.',
      },
      {
        title: 'Most of what we pull out was never meant to go down there',
        body: 'Wipes — including the ones sold as flushable — kitchen roll, cotton wool pads, sanitary products and nappies do not break apart in water the way toilet paper does. They snag on anything rough inside the pipe and then catch everything that follows them. In older London housing with clay or cast-iron waste pipes there is plenty inside the pipe to snag on. The rule that keeps a toilet working is a dull one: pee, poo and paper, nothing else.',
      },
      {
        title: 'A macerator toilet is a different machine',
        body: 'If your WC sits in a basement, a loft conversion or under the stairs, and it hums for a few seconds after you flush, it is a macerator — a small grinding pump built into or behind the toilet that pushes waste along a narrow pipe. They block far more readily than an ordinary WC, they are particularly intolerant of wipes, and limescale from London’s hard water builds up inside them over the years. They also should not be plunged or rodded like a standard pan. Say it is a macerator when you call and we will turn up with the right kit.',
      },
      {
        title: 'If it keeps blocking, the toilet is probably not the problem',
        body: 'A WC that blocks every few weeks, or clears and then backs up again a fortnight later, is usually reporting a fault further down the line: roots growing into the drain, a joint that has dropped out of line, or a section of pipe that has partly collapsed. Clearing the same blockage four times in a year costs more than putting a camera down once — that is our CCTV drain survey. If the survey finds broken pipe rather than debris, drain repairs is the page that covers putting it right.',
      },
    ],
    aside: {
      title: 'A plunger beats a bottle of chemicals',
      body: 'A proper flanged plunger, worked slowly with enough water in the pan to cover the cup, shifts a good number of everyday blockages. Caustic drain cleaner mostly does not, and it leaves whoever comes next reaching into a pan full of it. If you have already poured some in, just tell us when you call.',
    },
    faqs: [
      {
        q: 'The water rises to the rim when I flush. What should I do?',
        a: 'Stop flushing, and shut the small isolating valve on the pipe feeding the cistern so nobody can flush it again by mistake. Then bail the pan down to about half full with a jug. That leaves you with a toilet that will not overflow while you wait.',
      },
      {
        q: 'Can you clear a blocked toilet without taking it off?',
        a: 'Nearly always. A plunger, then a closet auger — a flexible rod made to go round the trap without chipping the pan — deals with the great majority. Lifting the WC off is a last resort for something solid that will not come back up or go forwards, like a toy or a bottle top.',
      },
      {
        q: 'Every sink and toilet in the flat is slow, not just the WC.',
        a: 'Then the blockage is not under any one fixture — it is in the soil stack the whole flat drains into, or in the drain outside. That is a different job and it is covered on our drain unblocking page. Worth mentioning when you call, because it changes what we bring with us.',
      },
      {
        q: 'Are flushable wipes really a problem?',
        a: 'Yes. They flush out of the pan happily enough and then sit in the pipe, because they do not disintegrate in water. They are among the most common things we pull out of blocked toilets and shared stacks in London flats.',
      },
    ],
  },

  {
    slug: 'shower-installation',
    title: 'Shower Installation',
    h1: 'Shower installation in London',
    metaTitle: 'Shower Installation London | Mixer & Thermostatic | Ninja Plumbers',
    metaDescription:
      'Shower installation in London — mixer, thermostatic and digital showers matched to your water system before you buy. Call 020 3576 5825.',
    eyebrow: 'Installation',
    icon: 'bathroom',
    target: 'shower installation (1,900/mo) · shower installation london (170/mo) · mixer shower installation (140/mo) · thermostatic shower installation (110/mo)',
    summary:
      'Mixer, thermostatic and digital showers fitted — matched to the water system you actually have.',
    intro:
      'Fitting a shower is usually simpler than people expect, and the complications almost never come from the fitting. They come from the shower having been bought before anyone asked what water system the house runs on. A mixer, a thermostatic bar valve and a digital shower all behave differently on a combi boiler than they do on a gravity-fed tank, and Ninja Plumbers would far rather have that conversation with you before the box arrives than after it has been opened.',
    does: [
      'Mixer and thermostatic shower installation',
      'Digital and concealed-valve showers',
      'Showers fitted over a bath, with a screen',
      'Like-for-like replacement of a failed shower',
      'Moving a shower to a new position',
      'Rainfall and dual-outlet heads, where the flow supports them',
      'Enclosures, trays and waste connections',
    ],
    guidance: [
      {
        title: 'Your water system decides which showers will work',
        body: 'There are three common setups in London homes. A combi boiler heats water on demand and runs everything at mains pressure. A gravity-fed system has a cold tank in the loft and a hot cylinder in a cupboard, and its pressure comes from the height between the two, which is usually modest. An unvented cylinder is a sealed hot cylinder running at mains pressure. A shower that is excellent on one of those can be a disappointment on another — a large rainfall head on a gravity system is the classic example. If you are not sure which you have, photograph the boiler or the cylinder and send it over before you buy anything.',
      },
      {
        title: 'Mixer, thermostatic or digital',
        body: 'A mixer shower blends hot and cold, and that is all it does: run a tap elsewhere in the house and the balance shifts, so the temperature shifts with it. A thermostatic shower holds the temperature you set and shuts down rather than running hot if the cold supply drops away, which is why it is the sensible default and why it matters if there are children or older people in the house. A digital shower does the same job through an electronic control, with a separate processor box usually hidden in a loft or cupboard — that box needs somewhere sensible to live and a power supply near it.',
      },
      {
        title: 'Like-for-like is a small job, moving it is not',
        body: 'Swapping a failed valve and head for new ones on the same wall is straightforward, and it is often the only work needed. Moving the shower to a different wall means new pipe runs and, more to the point, a new waste run with enough fall to drain properly. That is the part that decides whether the move is simple or awkward — particularly over a solid floor, or in a flat where you cannot drop the pipe below the joists.',
      },
      {
        title: 'Over a bath, and over a neighbour',
        body: 'A shower over the bath is the most space-efficient answer in a small London bathroom, and it needs no tray or enclosure, just a screen and well-sealed edges. What it does need is care where the bath meets the tiles, because a bath flexes very slightly as somebody stands in it and a rigid seal there eventually splits. In a converted flat with a neighbour below, that seal and the waste connection are the two things that end up showing on their ceiling if they are rushed.',
      },
    ],
    aside: {
      title: 'Send a photo before you buy',
      body: 'A picture of your boiler or hot water cylinder, plus one of the existing shower valve, is usually enough for us to say whether the shower you are looking at will perform in your house. It takes a minute and it saves posting one back.',
    },
    faqs: [
      {
        q: 'Can you fit a shower I have already bought?',
        a: 'Yes, and plenty of people do it that way. Send the model over before the visit so we can check it suits your water system and see whether the new valve will cover the existing fixing holes.',
      },
      {
        q: 'Will a new shower fix weak pressure?',
        a: 'Usually not by itself. A new valve cannot create pressure that was never there. On a gravity-fed system the answer is often a pump, which is covered on the shower pumps page, and where the incoming mains supply is the weak link, our low water pressure page explains what actually helps.',
      },
      {
        q: 'What about an electric shower?',
        a: 'Different thing, and it has its own page. An electric shower heats cold mains water itself and needs a dedicated electrical circuit, which makes it the usual choice where there is no useful hot supply to work with. See electric shower installation for that.',
      },
      {
        q: 'Can you take the bath out and put in a walk-in shower?',
        a: 'Yes. A tray and glass panel where the bath used to be sits within this job. If you want a level floor with no tray at all, that is a wet room — it needs tanking and a formed floor fall, and it is covered on the wet rooms and walk-in showers page.',
      },
    ],
  },

  {
    slug: 'shower-repair',
    title: 'Shower Repair',
    h1: 'Shower repair in London',
    metaTitle: 'Shower Repair London | Leaks & Pressure | Ninja Plumbers',
    metaDescription:
      'Shower repair across London: no hot water, weak flow, swinging temperature, leaking valves and trays. Book Ninja Plumbers on 020 3576 5825.',
    eyebrow: 'Repairs',
    icon: 'bathroom',
    target: 'shower repair (590/mo) · shower repair london (70/mo)',
    summary:
      'Weak flow, wandering temperature, no hot water or a leak — diagnosed and repaired, usually without a new shower.',
    intro:
      'Showers tend to fail slowly. The temperature starts wandering, or the flow drops off a little each year, and it is easy to put up with for a long time before doing anything about it. Most of these faults turn out to be one part rather than a whole shower — a cartridge, a scaled-up head, a perished seal — and Ninja Plumbers would rather change the part than sell you a replacement you did not need.',
    does: [
      'No hot water at the shower when the rest of the house is fine',
      'Weak flow and pressure that has faded over time',
      'Temperature swinging when a tap is run elsewhere',
      'Leaking and dripping shower valves',
      'Dripping heads, perished hoses and worn seals',
      'Leaking trays, wastes and sealed edges',
      'Water showing on the ceiling of the room below',
    ],
    guidance: [
      {
        title: 'Hot everywhere else, cold at the shower',
        body: 'If the taps around the house run hot and only the shower does not, the fault is at the shower rather than at the boiler. On a thermostatic valve it is usually the cartridge — the part inside that does the blending — which either seizes up with limescale or fails closed on the hot side, which is how it is designed to fail. The other common cause costs nothing to put right: an isolating valve behind the panel that has been knocked shut at some point.',
      },
      {
        title: 'Pressure that has faded rather than failed',
        body: 'A shower that has slowly got weaker over the years in London is very often limescale rather than anything mechanical. Hard water furs up the holes in the head, the flexible hose and the internals of the valve, and it happens gradually enough that nobody notices until it is bad. Where descaling makes no difference, the restriction is further back: a part-closed isolating valve, a scaled cartridge, or a supply that never delivered much to begin with. On a gravity-fed system with a tank in the loft, boosting it is a separate job covered on the shower pumps page, and where the mains itself is poor, our low water pressure page is the better read.',
      },
      {
        title: 'Temperature that jumps when someone runs a tap',
        body: 'On a plain mixer shower that is normal behaviour, not a fault, and the cure is a thermostatic valve rather than a repair. On a shower that already is thermostatic it is a genuine fault: the cartridge has stopped regulating, usually because of scale. That is worth dealing with rather than living with, because the same failure that lets it run cold can let it run hot.',
      },
      {
        title: 'A leak that shows up downstairs',
        body: 'A stain spreading across the ceiling below a bathroom has three usual sources: the shower waste or trap, the seal where the tray or bath meets the tiles, or the valve itself leaking behind the wall. They need telling apart before anything is opened up, because the repair and the mess involved are different in each case. In a converted flat where the ceiling belongs to a neighbour, that is worth reporting early rather than once it has spread across their room.',
      },
    ],
    aside: {
      title: 'Descale the head before you call',
      body: 'Unscrew the shower head, leave it overnight in a limescale remover or plain white vinegar, and rinse it through. In a hard water area like London that alone brings the flow back on a fair number of showers, and it costs you nothing to try first.',
    },
    faqs: [
      {
        q: 'Is it worth repairing, or should I replace the shower?',
        a: 'It depends what has failed and whether parts are still made for it. A cartridge, a head or a hose is a repair every time. An obsolete valve with nothing available for it is a replacement. We will tell you which one you have rather than defaulting to the bigger job.',
      },
      {
        q: 'My shower runs hot then cold when the kitchen tap is used.',
        a: 'On a plain mixer shower, that is how it works and a thermostatic valve is the fix. On a thermostatic shower it is a fault, and it is normally the cartridge scaled up and no longer regulating.',
      },
      {
        q: 'There is water on the ceiling under the bathroom. Is it definitely the shower?',
        a: 'Not necessarily. It could be the shower waste, the seal around the tray, or a pipe with nothing to do with the shower at all. Stop using the shower while you wait for us — if the stain carries on growing anyway, something else is leaking, and that points at leak detection rather than a shower repair.',
      },
      {
        q: 'Can you get parts for an old shower?',
        a: 'Often, yes, including for units well out of production. Send a photo of the valve and any model number on it and we can usually tell you before the visit whether the part still exists.',
      },
    ],
  },

  {
    slug: 'bath-installation',
    title: 'Bath Installation',
    h1: 'Bath installation in London',
    metaTitle: 'Bath Installation & Replacement London | Ninja Plumbers',
    metaDescription:
      'Bath installation and replacement in London — like-for-like swaps, bath-to-shower conversions and freestanding baths. Call 020 3576 5825.',
    eyebrow: 'Installation',
    icon: 'bathroom',
    target: 'bath installation (320/mo) · bath replacement (170/mo)',
    summary:
      'One bath out, another one in — or the bath out and a shower in its place.',
    intro:
      'On paper, replacing a bath is a small job: disconnect two taps and a waste, lift the old one out, level the new one, connect it back up. What decides whether it stays small is everything around it — whether the new bath is the same size as the old one, whether the taps fit the holes, whether the waste lands where the pipe already runs, and, in an older London house, whether the old bath can physically get down the stairs in one piece.',
    does: [
      'Like-for-like bath replacement',
      'Baths supplied, or fitted if you have bought your own',
      'Bath-to-shower conversions',
      'Freestanding and roll-top baths',
      'Taps, wastes, overflows and trap connections',
      'A shower fitted over the bath, with a screen',
      'Old cast-iron baths broken out and taken away',
    ],
    guidance: [
      {
        title: 'A like-for-like swap is the version to aim for',
        body: 'If the new bath is close to the same size and the taps and waste stay at the same end, most of the work is disconnecting, lifting out and rebuilding. Where it grows is at the edges. A bath even slightly shorter than the old one leaves a gap that has to be tiled or panelled, and tiles behind an old bath rarely come away cleanly. Ninja Plumbers will tell you at the quote stage which of those apply, so the making-good is priced in rather than raised with you halfway through.',
      },
      {
        title: 'Bath out, shower in',
        body: 'Losing the bath buys real space in a small bathroom, and a tray with a glass panel where the bath sat is a straightforward conversion. Two things are worth thinking about first. If it is the only bathroom in the property, having no bath at all can count against you when you sell, and it certainly counts with small children. And if what you really want is a level floor with no tray, that is a wet room — a bigger job involving tanking and a formed floor fall, covered on the wet rooms and walk-in showers page.',
      },
      {
        title: 'Freestanding baths ask more of the floor and the waste',
        body: 'A freestanding bath, full of water with somebody in it, is a serious weight concentrated in one spot. On the timber floor of a Victorian terrace that is worth checking rather than assuming. The waste is the other difference: on most freestanding baths it drops straight through the floor instead of running to the wall, so the pipework underneath has to be reached — lifting floorboards, or in a flat, working over the neighbour’s ceiling. Both are perfectly doable. Both are much easier settled before the bath is delivered.',
      },
      {
        title: 'Getting the old one out',
        body: 'Cast-iron baths are extraordinarily heavy and do not bend around a half-landing. In a narrow Victorian terrace or a converted flat with a tight stair, the practical answer is usually to break the bath up in the bathroom and carry it out in pieces — noisy and dusty, but a great deal safer than three people reversing down a staircase with it. We work the removal route out as part of the job rather than discovering it on the morning.',
      },
    ],
    aside: {
      title: 'Order the taps and waste with the bath',
      body: 'Taps, waste and trap are usually bought separately from the bath itself, and a job stalling because the taps have not turned up is a common and avoidable annoyance. Have the lot on site before day one, and check the tap holes on the new bath match the taps you have chosen — some baths arrive with none drilled at all.',
    },
    faqs: [
      {
        q: 'How long does a bath replacement take?',
        a: 'A straight swap for a bath of similar size is usually a day. Moving the waste, tiling a new section of wall, or getting a cast-iron bath out of a tight stairwell all add to that, and we will say so when we quote rather than afterwards.',
      },
      {
        q: 'Can you fit a bath I have bought myself?',
        a: 'Yes. Send the model and dimensions over beforehand so we can check it against the space and the existing waste position, and confirm whether it comes with tap holes drilled.',
      },
      {
        q: 'Do I need a whole new bathroom to change the bath?',
        a: 'No. Changing the bath on its own is an ordinary standalone job. If the tiles, floor, basin and toilet are all going as well, that is a refit, and the bathroom installation page covers what that involves.',
      },
      {
        q: 'Do you take the old bath away?',
        a: 'Yes, removal and disposal are part of the job. Cast iron goes for scrap rather than into a skip where we can manage it.',
      },
    ],
  },

  {
    slug: 'tap-repair-and-replacement',
    title: 'Tap Repair and Replacement',
    h1: 'Tap repair and replacement in London',
    metaTitle: 'Tap Repair & Replacement London | Ninja Plumbers',
    metaDescription:
      'Kitchen tap replacement and tap repair across London — drips, stiff handles, leaks at the base, new taps fitted. Call 020 3576 5825.',
    eyebrow: 'Taps and fittings',
    icon: 'tap',
    target: 'kitchen tap replacement (480/mo) · tap replacement (390/mo) · tap installation (110/mo)',
    summary:
      'Dripping, stiff and leaking taps repaired, and tired ones swapped for new.',
    intro:
      'A tap that drips all night. A kitchen mixer that has gone so stiff you need two hands to turn it. A puddle that keeps appearing round the base of a basin tap and never quite explains itself. Most of these come down to one small part inside the tap rather than the tap itself, which makes them a short visit — and where a tap really has come to the end of its life, we say so and put the two prices side by side.',
    does: [
      'Dripping kitchen, basin and bath taps',
      'Washers, O-rings and ceramic cartridges replaced',
      'Stiff, squeaking and seized handles',
      'Leaks from the base of a tap or underneath it',
      'Mixer, monobloc and pillar taps fitted',
      'Poor flow from one tap when the rest are fine',
    ],
    guidance: [
      {
        title: 'Most drips are one small part',
        body: 'On an older tap with a handle you turn several times, the drip is nearly always a perished rubber washer. On a modern lever or quarter-turn mixer it is a ceramic cartridge instead. If the water is escaping where the spout swivels rather than out of the end, that is an O-ring. All three are inexpensive parts and none of them means the tap is finished.',
      },
      {
        title: 'Hard water is why cartridges give up here',
        body: 'London water is hard, and the scale it leaves behind ends up on exactly the surfaces a tap relies on to seal. It furs up cartridges, roughens seats and blocks the little aerator screwed into the end of the spout. That is why a tap in a London kitchen tends to stiffen up or start dripping again sooner than the same tap would somewhere soft — and why a scaled aerator is worth ruling out before anyone assumes the tap is at fault.',
      },
      {
        title: 'When replacing beats repairing',
        body: 'Sometimes the fault is in the body of the tap: the seat it closes against is worn away, the threads have corroded, or nobody has made parts for that model in twenty years. Ninja Plumbers will tell you when that is the case, price the repair and the replacement against each other, and let you pick. What we will not do is fit a washer we already know will be dripping again by spring.',
      },
      {
        title: 'Leaking at the base is a different fault',
        body: 'Water round the bottom of a tap has not come from the spout. It is usually the seal between the tap and the worktop or basin, or the flexible tails and isolation valves underneath. Open the cupboard and feel the pipework down there — if it is wet, the problem is below the sink, not above it.',
      },
    ],
    aside: {
      title: 'Send a photo of the tap',
      body: 'A photo of the tap and its handles, plus a shot of the pipework underneath, often tells the engineer which cartridge or washer to bring. That can be the difference between one visit and two.',
    },
    faqs: [
      {
        q: 'Can a dripping tap be repaired, or does it need replacing?',
        a: 'Usually repaired. A washer, an O-ring or a ceramic cartridge fixes the large majority of drips. Replacement comes into it when the tap body itself is worn or corroded, and in that case you get both prices before anything is decided.',
      },
      {
        q: 'Can you fit a tap I have bought myself?',
        a: 'Yes. It helps to check before buying that it matches the holes you have — a monobloc mixer needs one hole, separate pillar taps need two — and that there is room behind the sink for the handles to turn.',
      },
      {
        q: 'How long does a tap replacement take?',
        a: 'A straightforward swap is normally a single visit. What slows it down is what is under the sink rather than the tap: a seized backnut, a corroded isolation valve or a cramped cupboard can all add time, and if that is what we find we tell you before carrying on.',
      },
      {
        q: 'My tap started dripping again a few months after it was fixed. Why?',
        a: 'Either the wrong part went in, or scale has built up again on a seat that was already worn. Hard water shortens the life of a repair on a tired tap, which is one of the honest arguments for replacing rather than repairing an old one.',
      },
    ],
  },

  {
    slug: 'lead-pipe-and-water-main-replacement',
    title: 'Lead Pipe Replacement',
    h1: 'Lead pipe and water main replacement in London',
    metaTitle: 'Lead Pipe Replacement London | Ninja Plumbers',
    metaDescription:
      'Lead pipe replacement in London — supply pipe replaced from boundary to house, by mole or trench, ground reinstated. Call 020 3576 5825.',
    eyebrow: 'Supply pipework',
    icon: 'water',
    target: 'lead pipe replacement (590/mo) · water main replacement (170/mo) · lead pipe replacement london (90/mo)',
    summary:
      'Old lead supply pipes replaced with new, from the boundary into the house.',
    intro:
      'A great many Victorian and Edwardian houses in London are still fed by the pipe they were built with, and in that era that pipe was lead. Lead is no longer used for drinking water supply, and where a property still has it, replacing it is the recommended fix. It is also the moment people usually discover that the pipe bringing water into their house is narrow, old and the reason the pressure has never been much good.',
    does: [
      'Lead supply pipes identified and confirmed',
      'Private supply pipe replaced from boundary to house',
      'Moling to avoid opening up a whole front garden',
      'Trenching where moling is not possible',
      'New internal stopcock and connection',
      'Ground, paths and surfaces reinstated afterwards',
    ],
    guidance: [
      {
        title: 'How to tell whether yours is lead',
        body: 'Find where the supply pipe comes up through the floor at your inside stopcock, usually under the kitchen sink or just inside the front door. Lead is a dull grey, soft enough to mark with a coin, and has no thread or sharp edges — the joints look rounded and swollen rather than machined. The giveaway is that a gentle scrape with a key leaves a bright silver line. Copper is the colour of a penny, and modern plastic supply pipe is blue.',
      },
      {
        title: 'Where your responsibility starts',
        body: 'The pipe from the water main in the street up to your boundary belongs to the water company. From the boundary into the house, the private supply pipe is the property owner’s. That line matters because it decides who pays, and it is worth establishing before anyone books work. In a converted flat the private supply is often shared with the other flats in the building, which makes it a decision for everyone with a stake in it rather than one household.',
      },
      {
        title: 'Moling or digging',
        body: 'Moling means sinking a small pit at each end and driving the new pipe through underground between them, leaving the ground in between untouched. It saves a front garden, a path or a drive from being opened up end to end. It is not always possible: other services in the way, tree roots, made-up ground or an awkward run can all mean a trench instead. Ninja Plumbers looks at the route before quoting and tells you which of the two it is going to be, rather than finding out on the day.',
      },
      {
        title: 'What the work involves',
        body: 'The new pipe is modern blue plastic, run at a sensible depth so it is well clear of frost and the surface above it, and brought into the house to a new stopcock. The old lead is disconnected and left in the ground where taking it out would mean digging up more than the job is worth. Then the ground goes back: soil, turf, paving or tarmac reinstated over the route.',
      },
    ],
    aside: {
      title: 'If you are not sure what you have',
      body: 'Take a photo of the pipe where it comes into the house, next to your stopcock, and send it over. It is usually obvious from a picture whether you are looking at lead, copper or plastic.',
    },
    faqs: [
      {
        q: 'How do I know if my supply pipe is lead?',
        a: 'Look at the pipe at your internal stopcock. Lead is dull grey, soft, unthreaded, with rounded joints, and scrapes bright silver. Houses built before the war are the usual candidates, though plenty have been changed at some point along the way.',
      },
      {
        q: 'Who replaces the section in the street?',
        a: 'That part is the water company’s, up to the boundary of your property. The private supply pipe from the boundary into the house is the owner’s, and that is the section we replace. If yours is lead, it is worth telling the water company what you are doing.',
      },
      {
        q: 'Will my garden be dug up?',
        a: 'Not necessarily. Moling lets the new pipe be drawn through underground between two small pits, which leaves most of the route undisturbed. Where the ground or what is buried in it rules that out, a trench is dug and reinstated. You will be told which before the work starts.',
      },
      {
        q: 'I live in a converted flat. Can this still be done?',
        a: 'Often, but the supply pipe from the boundary into the building is usually shared between the flats, so it is not a decision one household can make alone. It normally needs the freeholder and the other leaseholders on board first. We are happy to explain the work to them.',
      },
    ],
  },

  {
    slug: 'pipe-repair',
    title: 'Pipe Repair',
    h1: 'Pipe repair in London',
    metaTitle: 'Pipe Repair London | Burst & Frozen Pipes | Ninja Plumbers',
    metaDescription:
      'Pipe repair across London — burst, split, frozen and corroded pipework repaired properly rather than patched over. Call 020 3576 5825.',
    eyebrow: 'Pipework',
    icon: 'general',
    target: 'pipe repair (590/mo) · burst pipe repair (260/mo) · frozen pipe (260/mo)',
    summary:
      'Burst, split, frozen and corroded pipework repaired — or replaced where patching it would be pointless.',
    intro:
      'Pipework fails in three broad ways: it freezes and splits, it corrodes quietly until it pinholes, or a joint that was never quite right gives up years later. If water is coming in right now, that is a job for the 24/7 callout covered on our emergency plumbing page. If you know there is a leak somewhere but not where, start with our leak detection page. This page is the repair itself, once you know what has gone and where it is.',
    does: [
      'Burst and split pipes repaired',
      'Frozen pipes thawed and checked for damage',
      'Pipework under floors and inside walls',
      'Corroded and pinholed copper',
      'Failed joints, compression fittings and old solder',
      'Whole runs replaced where a patch would not last',
    ],
    guidance: [
      {
        title: 'A frozen pipe often only shows itself when it thaws',
        body: 'Water expands as it freezes, and that is what splits the pipe. While the ice is still in there, the split is plugged and nothing leaks — so a pipe can look entirely fine right up until the moment it warms up and lets go. If pipework in your loft or an unheated space has frozen, it is worth having looked at even though nothing has come out of it yet.',
      },
      {
        title: 'Lofts, basements and the cold parts of a London house',
        body: 'The pipes that freeze are the ones running through spaces nobody heats: a loft, an unheated basement, the back of a garage, an outside wall. Loft conversions are a common culprit, because pipework that used to sit under a thick blanket of insulation can end up above it once the roof space is reworked. Lagging is the cheap answer, rerouting the pipe is the permanent one, and it is worth doing before winter rather than during it.',
      },
      {
        title: 'Patching a bad run just moves the problem',
        body: 'A pipe that has pinholed because it is corroded along its whole length will pinhole again, usually within a metre or two of the last repair. Ninja Plumbers will tell you honestly when a run is at that stage, because replacing a section properly once tends to cost less than three separate repairs and three separate holes in a ceiling.',
      },
      {
        title: 'Hidden pipework and old alterations',
        body: 'Older London houses and converted flats often carry the marks of several decades of alterations: copper joined to whatever came before it, runs buried in walls, pipes chased under a floor by somebody who never expected anyone to look for them again. That is normal, and it is why access is planned rather than improvised. Where the failed pipe is not visible at all, finding it comes first — that part is covered on our leak detection page.',
      },
    ],
    aside: {
      title: 'Turn it off before it thaws',
      body: 'If you find a frozen pipe, shut the stopcock off before you warm anything up. If the pipe has split, you would far rather discover that with the water already off.',
    },
    faqs: [
      {
        q: 'A pipe has burst and water is coming in. What should I do?',
        a: 'Turn the stopcock off, open the cold taps to drain what is left in the pipes, and keep away from anything electrical the water has reached. Then call — a burst that is actively causing damage is an emergency callout, covered on our emergency plumbing page.',
      },
      {
        q: 'Can a burst pipe be repaired, or does the whole run need replacing?',
        a: 'A single clean split in otherwise sound pipe is a straightforward repair. Pipework that is corroded along its length is a different conversation, and we would rather have it with you honestly than patch something that will fail again in the same room.',
      },
      {
        q: 'I think there is a leak but I cannot see any pipework. Can you help?',
        a: 'Yes, but the first job is locating it rather than repairing it, and that is a different visit with different equipment. Our leak detection page covers how a hidden leak is traced before anything is opened up.',
      },
      {
        q: 'How do I stop pipes freezing in the first place?',
        a: 'Lag the pipework in lofts, garages and anywhere else that never gets heated, and in a genuinely cold spell leave the heating ticking over rather than off entirely, even in an empty property. And know where your stopcock is before you need it.',
      },
    ],
  },

  {
    slug: 'low-water-pressure',
    title: 'Low Water Pressure',
    h1: 'Low water pressure in London',
    metaTitle: 'Low Water Pressure London | Tested & Fixed | Ninja Plumbers',
    metaDescription:
      'Low water pressure in London diagnosed properly — valves, limescale, stopcocks and pumps tested rather than guessed at. Call 020 3576 5825.',
    eyebrow: 'Pressure',
    icon: 'general',
    target: 'low water pressure (1,600/mo) · low water pressure london (140/mo)',
    summary:
      'Weak taps and showers diagnosed by testing, not by swapping parts and hoping.',
    intro:
      'Low pressure is a symptom, not a fault, and it has half a dozen possible causes that look identical from the tap. A valve somewhere that is not fully open. Scale narrowing the inside of old pipework. A pressure-reducing valve that has quietly drifted out of adjustment. Or a system that was never going to deliver a strong shower without help. The way to tell them apart is to test, which is cheaper than working through the parts one at a time.',
    does: [
      'Whole-house and single-fixture pressure problems',
      'Pressure and flow measured at the incoming supply',
      'Pressure-reducing valves checked and adjusted',
      'Limescale-furred pipework, aerators and shower heads',
      'Part-closed and seized stopcocks and valves',
      'Pumps and accumulators where they are genuinely the answer',
    ],
    guidance: [
      {
        title: 'Whole house, or just one tap?',
        body: 'This is the first question, and you can answer it before anyone visits. Run every cold tap in turn. If one fixture is weak and the rest are fine, the problem is local to it — a scaled aerator or shower head, a seized isolation valve underneath, a kinked flexible tail, a worn cartridge. If everything in the house is weak, the problem is on the incoming supply or the system as a whole, and that is a completely different set of checks.',
      },
      {
        title: 'Pressure and flow are not the same thing',
        body: 'Pressure is how hard the water pushes. Flow is how much of it actually arrives per minute. A house can have perfectly respectable pressure at the boundary and still deliver a disappointing shower, because the water is being squeezed through pipework that limescale has narrowed over the decades, or through a supply pipe that was sized for a Victorian household rather than a power shower and a washing machine running at once. Measuring both is what separates the two, and London’s hard water makes the second one common here.',
      },
      {
        title: 'Valves drift, and stopcocks seize',
        body: 'Two of the most common causes are also the least dramatic. A pressure-reducing valve set correctly years ago can drift out of spec as it ages. A stopcock left three-quarters closed after somebody else’s work throttles the whole house, and nobody thinks to look at it. Ninja Plumbers tests the supply before touching anything, because it is the only way to tell an adjustment from a replacement — and swapping parts speculatively is how people end up paying for a new valve that was never the problem.',
      },
      {
        title: 'What system you have decides what can be done',
        body: 'If your hot water comes from a combi boiler, everything in the house runs off the mains and the answer lies in the supply, the pipework or a valve — the mains cannot be pumped. If you have a cold tank in the loft and a hot cylinder in a cupboard, the system is gravity-fed, the pressure comes from how high the tank sits, and a correctly matched pump is often the right fix. That is covered in detail on our shower pumps page.',
      },
    ],
    aside: {
      title: 'Test first, buy parts second',
      body: 'A sequence of tests costs less than a sequence of parts. Measuring pressure and flow at the incoming supply usually narrows the cause down before anything is taken apart.',
    },
    faqs: [
      {
        q: 'Only my shower is weak. Everything else is fine.',
        a: 'Then it is almost certainly local to that shower. A scaled shower head, a part-closed isolation valve, a worn mixer cartridge or a crushed flexible hose account for most of these, and all of them are small jobs.',
      },
      {
        q: 'Is low pressure the water company’s problem or mine?',
        a: 'It can be either. Testing at the incoming supply, before and after your stopcock, shows whether the water is arriving weak or being lost inside the property. If the whole street is affected it is one for the water company, and we will say so rather than charge you to find that out twice.',
      },
      {
        q: 'Will a pump fix it?',
        a: 'Only on a gravity-fed system with a tank in the loft. If your water comes from a combi or a mains-pressure unvented cylinder, pumping the mains supply is not permitted, and anyone offering to do it is selling you the wrong thing.',
      },
      {
        q: 'My pressure dropped suddenly. What changed?',
        a: 'A sudden drop usually means something specific: a valve left part-closed after other work, a failed pressure-reducing valve, a leak on the supply pipe, or a problem out in the street. Sudden is useful information, so mention it when you call.',
      },
    ],
  },

  {
    slug: 'central-heating-installation',
    title: 'Central Heating Installation',
    h1: 'Central heating installation in London',
    metaTitle: 'Central Heating Installation London | Ninja Plumbers',
    metaDescription:
      'Central heating installation across London: full systems, pipework, radiators and controls fitted by Gas Safe engineers. Call 020 3576 5825.',
    eyebrow: 'Heating and hot water',
    icon: 'heating',
    target: 'central heating installation (1,900/mo) · central heating installation london (210/mo)',
    summary:
      'The whole system — boiler, pipework, radiators and controls — rather than a new boiler on its own.',
    intro:
      'A central heating installation is the whole system: the boiler, the pipework running through the house, every radiator, and the controls that decide when any of it comes on. That is a different job from swapping a boiler, and it is worth being clear which one you actually need. Ninja Plumbers fits first-time heating in properties that have never had it, and replaces ageing systems where the boiler is only the most visible part of the problem.',
    does: [
      'Complete new central heating systems',
      'First-time central heating in a property with none',
      'Pipework, radiators and controls, not just the boiler',
      'Replacing an ageing system rather than only the boiler',
      'Thermostats, zone valves and programmers',
      'Sizing and system design for the property',
    ],
    guidance: [
      {
        title: 'A new boiler on an old system keeps the old faults',
        body: 'This is the one that catches people out. If the radiators were cold at the bottom, the upstairs never warmed up and the water ran black when you bled a valve, a new boiler changes none of that — the debris and the undersized pipework are still there, and now they are circulating through a brand new heat exchanger. Sometimes the answer is a clean rather than a new system, which is covered on our radiators and power flushing page. Sometimes the pipework has genuinely reached the end. Either way it is a decision to make before ordering a boiler, not after.',
      },
      {
        title: 'First-time heating in a property that has none',
        body: 'Plenty of London flats and converted houses still run on electric storage heaters or nothing at all. Putting central heating in means finding routes for the pipework, and in a Victorian or Edwardian terrace that usually means lifting floorboards, running pipes in the voids, and agreeing beforehand where anything has to be boxed in. We would rather walk you round the house and point at it than surprise you on the day.',
      },
      {
        title: 'Radiators are sized for the room, not the wall',
        body: 'How much heat a radiator needs to put out depends on the size of the room, the outside walls, the windows and the ceiling height. A radiator chosen because it fits the gap under the window is a room that never quite gets warm. This gets worked out room by room before anything is ordered.',
      },
      {
        title: 'Controls are the cheap part that makes the difference',
        body: 'Thermostatic valves on the radiators, a programmable room thermostat, and zoning upstairs separately from downstairs cost very little against the rest of the job. They are also what stops you heating four empty bedrooms every evening. If the system is coming out anyway, this is the moment to sort it.',
      },
    ],
    aside: {
      title: 'Gas Safe registered',
      body: 'The boiler and gas pipework on a heating installation is carried out by Gas Safe registered engineers. Ask to see the card on the doorstep — on any gas job, you are entitled to.',
    },
    faqs: [
      {
        q: 'What is the difference between this and a new boiler?',
        a: 'A boiler job replaces the boiler and leaves the rest of the system where it is — that is covered on our boiler installation and boiler replacement pages. A central heating installation covers the pipework, the radiators and the controls as well. If the existing system is sound, you only need the boiler, and we will say so.',
      },
      {
        q: 'Can you put central heating into a house that has never had it?',
        a: 'Yes. It is a larger job than a boiler swap because the pipework and radiators all have to go in, and access to floor voids drives a lot of it, so we look at the property before quoting rather than pricing it over the phone.',
      },
      {
        q: 'Do all the radiators have to be replaced?',
        a: 'Not automatically. Radiators in good condition and of the right output can often stay. We will tell you which ones are worth keeping instead of assuming the whole lot goes.',
      },
      {
        q: 'Will the floors have to come up?',
        a: 'Usually in part. Pipework has to get from the boiler to each radiator, and in most London houses that means floorboards up in some rooms. We agree the routes with you first, along with anything that will need boxing in afterwards.',
      },
    ],
  },

  {
    slug: 'surface-water-drainage',
    title: 'Surface Water Drainage',
    h1: 'Surface water drainage in London',
    metaTitle: 'Surface Water Drainage & Soakaways London | Ninja Plumbers',
    metaDescription:
      'Surface water drainage in London: soakaways, channel drains and downpipe connections for standing water and flooded patios. Call 020 3576 5825.',
    eyebrow: 'Drainage',
    icon: 'drain',
    target: 'surface water drainage (1,600/mo) · soakaway installation (720/mo)',
    summary:
      'Rainwater with nowhere to go — standing water on patios, paths and gardens, given somewhere to drain.',
    intro:
      'Every roof, patio and paved garden sheds a surprising amount of water in heavy rain, and all of it has to go somewhere. When it has nowhere to go it sits — puddles across the patio that last for days, a lawn that turns to mud each winter, or water creeping towards a wall it should never reach. Ninja Plumbers deals with that end of drainage: working out where the water is coming from, where it can legitimately go, and putting in the drainage to get it there.',
    does: [
      'Standing water on patios, paths and gardens',
      'Soakaway design and installation',
      'Channel and linear drainage across driveways and patios',
      'New gullies and downpipe connections',
      'Water pooling against a wall or draining into a lightwell',
      'Existing surface drainage that has stopped coping',
    ],
    guidance: [
      {
        title: 'What a soakaway actually is',
        body: 'A soakaway is a hole in the ground, dug well away from the building, filled with something that holds a lot of empty space — traditionally stone, now more often a plastic crate arrangement — and wrapped in a membrane before being buried. Water is piped into it, sits in that space instead of on your patio, and soaks away into the surrounding ground over the following hours. There is nothing clever about it. It is simply somewhere for the water to wait.',
      },
      {
        title: 'Soakaways do not suit every site',
        body: 'They only work if the ground around them will actually take water. Heavy clay drains very slowly, a high water table leaves nowhere for it to go, and a soakaway too close to a building is a way of putting water into your own foundations. Where the ground rules one out, the water has to be piped to an existing drain instead — so this gets tested and worked out first rather than assumed.',
      },
      {
        title: 'Paving over the garden without drainage is the usual cause',
        body: 'Front gardens across London have been paved over for parking, and back gardens for terraces and patios. Grass and soil absorb rain; a slab does not. Pave a garden with no drainage and no fall, and the water that used to soak in now runs to the lowest point, which is very often the back door or the base of a wall. Channel drainage across the paving, or a soakaway behind it, is the part that gets left out.',
      },
      {
        title: 'Water pooling against a wall is a damp problem in waiting',
        body: 'Ground that holds water against brickwork, especially where a patio or path has been built up above the damp-proof course, is one of the routine causes of damp inside. Our damp survey and damp proofing pages go into what that does to a wall. Fixing the drainage outside is frequently the actual repair, rather than anything done to the wall itself.',
      },
    ],
    aside: {
      title: 'Go and look during the rain',
      body: 'Nothing tells you more than standing outside in a proper downpour and watching where the water runs, where it stops, and which downpipe is overshooting. Five wet minutes will tell you more than an hour of looking at a dry patio.',
    },
    faqs: [
      {
        q: 'What is a soakaway, in plain terms?',
        a: 'A buried void — stone or plastic crates in a membrane — set away from the building, that rainwater is piped into so it can soak gradually into the surrounding ground instead of standing on the surface.',
      },
      {
        q: 'My patio floods every time it rains. What can be done?',
        a: 'Usually a linear or channel drain set into the paving at the low point, taken to a soakaway or an existing surface water drain. Sometimes the paving itself has been laid falling towards the house, in which case that needs correcting too.',
      },
      {
        q: 'Can rainwater just be connected into the foul drain?',
        a: 'Rainwater and foul water are normally kept separate, and whether a connection is permitted depends on the drainage arrangement in your street. We check what is there before connecting anything into it.',
      },
      {
        q: 'The drain is there but the water still stands. Why?',
        a: 'Either it is blocked, or the underground run is damaged — collapsed, cracked or knocked out of line — and the water is not getting away. A camera survey settles which, and our drain repairs page covers the repair side of it.',
      },
    ],
  },

  {
    slug: 'gutter-repair',
    title: 'Gutter Repair',
    h1: 'Gutter repair in London',
    metaTitle: 'Gutter Repair & Cleaning London | Ninja Plumbers',
    metaDescription:
      'Gutter repair and cleaning across London: blocked, leaking and sagging gutters fixed before they stain the wall below. Call 020 3576 5825.',
    eyebrow: 'Rainwater',
    icon: 'drain',
    target: 'gutter repair (2,900/mo) · gutter repair london (390/mo) · gutter cleaning (9,900/mo)',
    summary:
      'Blocked, leaking, sagging and overflowing gutters cleared and repaired, along with the downpipes below them.',
    intro:
      'A gutter has one job, which is to catch what comes off the roof and take it to a downpipe. When it stops doing that, the water goes down the wall instead — and a wall that has had water running down it all winter is where a lot of damp problems start. Ninja Plumbers clears blocked gutters, repairs leaking joints and sagging runs, and deals with the downpipes and the gullies they empty into.',
    does: [
      'Blocked and overflowing gutters cleared',
      'Leaking joints and split sections repaired',
      'Sagging, dropped or detached lengths refixed',
      'Downpipe blockages and broken downpipe sections',
      'Cast-iron guttering on Victorian and Edwardian properties',
      'Guttering checked where damp has appeared on the wall below',
    ],
    guidance: [
      {
        title: 'An overflowing gutter looks exactly like rising damp',
        body: 'This is the important one. A gutter that has been spilling down an external wall for a few months produces a wide patch of dark, stained, often mouldy brickwork and a matching damp patch inside — and it gets diagnosed as rising damp again and again. Our damp proofing page puts faulty guttering at the top of the list of causes of penetrating damp, and that matches what we actually find on site. Before anyone quotes you for a damp-proof course, go outside and look up at the gutter above the patch.',
      },
      {
        title: 'Clearing a gutter is not the same as repairing one',
        body: 'Scooping the leaves out fixes a gutter that is blocked. It does nothing for a gutter that has dropped at one end, has a split in a joint, or has come away from its brackets — that one will overflow again in the next heavy rain, leaves or no leaves. Whoever goes up should tell you which of the two you have got.',
      },
      {
        title: 'Cast iron can usually be repaired',
        body: 'Original cast-iron guttering on London terraces is often written off when it does not need to be. Joints can be taken apart, cleaned and re-sealed, brackets replaced, and lengths swapped section by section. It is heavier work and the fixings behind it need checking properly, but replacing the whole run in plastic is not the only option, and on a period frontage it is rarely the one people want.',
      },
      {
        title: 'The downpipe and what it empties into',
        body: 'Half of the gutters we get called to are not really the gutter at all. The downpipe is blocked, or the gully at the bottom is full, so the water backs up and comes over the top. That means checking the whole route down to the ground, not just the length of gutter you can see spilling.',
      },
    ],
    aside: {
      title: 'Access is part of the job',
      body: 'This is work at height, usually on the front or rear of a terrace, sometimes over an extension roof or a basement lightwell. Getting safe access for the height involved takes time and it is priced into the quote — so you get one figure before anyone starts, not a surcharge afterwards.',
    },
    faqs: [
      {
        q: 'Can a damp patch on my wall really be caused by a gutter?',
        a: 'Very commonly, yes. Water running down brickwork for weeks soaks in and shows up inside, and it produces the stained patch people take for rising damp. It is the first thing worth ruling out, and our damp survey page covers how the cause is confirmed.',
      },
      {
        q: 'How often should gutters be cleared?',
        a: 'Once a year suits most houses, and late autumn is the sensible time — after the leaves have come down. Properties under London plane trees, or with a flat roof collecting debris, often need looking at more than that.',
      },
      {
        q: 'Do cast-iron gutters have to be replaced?',
        a: 'Not usually. Joints can be re-sealed, brackets renewed and individual sections swapped. Replacement makes sense where the metal itself has corroded through along the run, and we will tell you which of those you are looking at.',
      },
      {
        q: 'How do you reach the gutter on a terraced house?',
        a: 'With the right access for the height and the position — that varies with the property, the number of storeys and whether the run is at the front or over the back. We look at access when we quote, because it is part of what the job takes.',
      },
    ],
  },
];

export default services;
