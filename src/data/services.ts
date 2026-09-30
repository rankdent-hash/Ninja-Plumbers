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
    h1: 'Emergency plumber across London',
    metaTitle: '24 Hour Emergency Plumber in London | Ninja Plumbers',
    metaDescription:
      'London emergency plumber, day or night: burst pipes, serious leaks, overflowing toilets and no water at all. Gas Safe registered. Ring 020 3576 5825.',
    eyebrow: 'Emergency callout, 24/7',
    icon: 'emergency',
    target: 'emergency plumber london (2,400/mo) · emergency plumber (12,100/mo)',
    summary:
      'For burst pipes, serious leaks or a house with no water. The phone is answered at any hour and an engineer is sent out.',
    intro:
      'A ceiling dripping into the room below. A pipe that has failed somewhere inside a wall. Taps that give nothing, anywhere in the house. Problems like these never hold off until Monday morning, so the Ninja Plumbers booking line does not close either. When you ring, we explain the first steps to take while an engineer is already heading to you.',
    does: [
      'Pipes that have burst or are leaking',
      'Shutting off the water and limiting damage',
      'Water showing through walls and ceilings',
      'Stopcocks that have failed and toilets that overflow',
      'Pressure that drops suddenly, or no water at all',
      'Bank holidays, weekends, evenings and nights',
    ],
    guidance: [
      {
        title: 'Water is flooding in',
        body: 'Your first job is the stopcock: turn it clockwise until it will go no further. In most London homes it sits under the kitchen sink or in the cupboard beneath the stairs, and in a flat it is often just inside the front door. With it closed, run the cold taps through the house so the pipes empty. In those first five minutes, nothing cuts the damage more than doing this.',
      },
      {
        title: 'Water is dripping through the ceiling',
        body: 'Keep out from under any ceiling that is sagging, and leave the light fittings in that room alone. Where water could be reaching electrics, cut the electricity at the consumer unit and keep it off. After that, ring us.',
      },
      {
        title: 'The leak is nowhere to be seen',
        body: 'Close the stopcock and keep an eye on the water meter, if there is one. A meter that is still turning means the leak sits on the supply side of the stopcock, which usually makes it the water company’s problem and not yours. Mention this when you ring and nobody makes a wasted journey.',
      },
      {
        title: 'The taps have run dry',
        body: 'Before ringing us, find out if your neighbours still have water. When the whole street has lost supply, the fault is on the Thames Water mains and no plumber can put it right. We will tell you that plainly instead of billing you for a visit.',
      },
    ],
    aside: {
      title: 'Find your stopcock today',
      body: 'Look for it now, while everything is working, and make sure it turns. Plenty of people only learn their stopcock has seized at two in the morning, and it is a costly way to find out.',
    },
    faqs: [
      {
        q: 'Will someone pick up at night?',
        a: 'Yes. Emergency callouts run 24/7. The office is staffed from 7am to 10pm every day, and at any other time the same number rings straight through to the person on call.',
      },
      {
        q: 'What makes something an emergency?',
        a: 'Water causing damage at this moment is an emergency. So is having no water or no heating when it truly cannot wait. A tap that drips is not. We would sooner book that in as a normal job than bill you emergency rates for something that will keep until the next day.',
      },
      {
        q: 'What does an emergency callout cost?',
        a: 'You get a price before the engineer begins, out of hours included. We never start work first and only reveal the cost once it is done.',
      },
      {
        q: 'Is it better to phone or fill in the form?',
        a: 'Phone us for anything urgent. The form is read during office hours, so it suits quotes and work that can wait.',
      },
    ],
  },

  {
    slug: 'boiler-repair',
    title: 'Boiler Repair',
    h1: 'Boiler repair across London',
    metaTitle: 'Boiler Repair London by Gas Safe Engineers | Ninja Plumbers',
    metaDescription:
      'Across London, our Gas Safe registered engineers mend broken-down boilers. We find the real fault, then give an honest repair vs replace answer. 020 3576 5825.',
    eyebrow: 'Boilers and heating',
    icon: 'boiler',
    target: 'boiler repair london (1,600/mo)',
    summary:
      'Heating off, hot water gone or a fault code on the display. We find the cause, then fix it.',
    intro:
      'Maybe the radiators have gone cold, the hot water has dried up, or the boiler has locked itself out and is showing a code. Ninja Plumbers pins down the real fault before quoting a penny. There is no guessing and no swapping parts until something works. You then get two figures, one to repair and one to replace, and the choice is yours.',
    does: [
      'Tracing faults and diagnosing breakdowns',
      'Boilers showing a fault code and locked out',
      'Loss of heating or hot water',
      'Faults on radiators and central heating',
      'Heating controls and thermostats',
      'Boilers that lose pressure and need constant refilling',
    ],
    guidance: [
      {
        title: 'Three checks worth doing first',
        body: 'A few quick checks can save you a callout. Is the needle on the pressure gauge sitting somewhere around 1 to 1.5 bar? Is the thermostat set to ask for heat? Is there gas at the hob, or has that gone off too? Between them, low pressure and a thermostat that has stuck account for most of the breakdowns we attend, so rule both out before you ring.',
      },
      {
        title: 'Take a photo of the fault code',
        body: 'When the display shows a code, photograph it and send it over WhatsApp along with the boiler’s make and model. That often tells the engineer which part to bring, and it can mean the job is done in one visit instead of two.',
      },
      {
        title: 'Deciding between repair and replacement',
        body: 'Once a boiler is past roughly twelve years and needs a costly part, replacing it usually makes more sense. On a younger boiler, repair tends to come out ahead. You get both figures from us and the decision stays with you.',
      },
      {
        title: 'Pressure that will not hold',
        body: 'If you are topping the boiler up every few weeks, water is escaping from somewhere. The cause is a leak on the system or an expansion vessel that has failed, and more refilling will not cure it. Track it down before it marks a ceiling.',
      },
    ],
    aside: {
      title: 'Registered with Gas Safe',
      body: 'Our gas work is done by Gas Safe registered engineers. You have every right to ask for the card at the door, and a good engineer will be happy to show it to you.',
    },
    faqs: [
      {
        q: 'Is it worth repairing my boiler?',
        a: 'That comes down to its age and which part has gone. We price the repair and a replacement side by side, so you can weigh them up fairly instead of hearing just one figure.',
      },
      {
        q: 'What does the fault code on my boiler mean?',
        a: 'Every manufacturer uses its own codes, so we prefer to see it rather than guess. WhatsApp us a photo of the display plus the make and model, and we can usually tell you the likely cause before the engineer leaves.',
      },
      {
        q: 'Why does the pressure on my boiler keep falling?',
        a: 'Usually the system has a leak somewhere or the expansion vessel has failed. Topping up over and over only masks the problem without curing it, and a slow leak hidden in a ceiling void gets far more expensive the longer it is left.',
      },
      {
        q: 'Is your team Gas Safe registered?',
        a: 'Yes. The law says gas work must be carried out by someone on the Gas Safe register, and our engineers are on it.',
      },
    ],
  },
  {
    slug: 'boiler-service',
    title: 'Boiler Service',
    h1: 'Boiler service across London',
    metaTitle: 'Gas Safe Boiler Service London | Ninja Plumbers',
    metaDescription:
      'Yearly boiler service in London from Gas Safe registered engineers: safety checks, a proper clean and the record your warranty asks for. Call 020 3576 5825.',
    eyebrow: 'Boilers and heating',
    icon: 'boiler',
    target: 'boiler service london (1,900/mo)',
    summary:
      'A yearly check to keep your boiler safe, running efficiently and covered by its warranty.',
    intro:
      'A yearly service is the smallest bill a boiler will ever hand you, and the one that does it most good. Worn parts get spotted before they leave you with no heating in January. Most manufacturers also make yearly servicing a warranty condition, and a missed service is among the commonest reasons a claim is turned down.',
    does: [
      'Yearly boiler service with safety checks',
      'Flue checks and combustion analysis',
      'Components inspected and cleaned',
      'Checks on controls, pressures and seals',
      'Servicing that keeps the manufacturer’s warranty valid',
      'Records of each service for landlords and managing agents',
    ],
    guidance: [
      {
        title: 'Get in before the cold weather',
        body: 'Boiler faults tend to surface in the first really cold week of the year, which is just when engineers all over London are busiest and hardest to book. Getting Ninja Plumbers in during late summer or early autumn avoids that. The price is no different, and finding a slot is far easier than it is halfway through a cold snap.',
      },
      {
        title: 'Servicing and repairs are different jobs',
        body: 'A service means inspecting and cleaning the boiler. Should it uncover a part that has failed, replacing it is extra work, and we price that before we touch it. You should never be handed a bill you had not agreed to.',
      },
      {
        title: 'Hold on to the service record',
        body: 'When you make a warranty claim, manufacturers want proof the boiler has been serviced every year. Store the record where you can lay your hands on it. A single sheet of paper can decide whether a repair is free or paid for.',
      },
      {
        title: 'What servicing does not cover',
        body: 'Servicing looks at the boiler only, not the rest of the system. Radiators that stay cold at the bottom, or pipework clogged with sludge, point to a separate problem that calls for a flush, not a service.',
      },
    ],
    aside: {
      title: 'Checked by Gas Safe engineers',
      body: 'Gas Safe registered engineers carry out every service on a gas appliance. You are entitled to see their card at the door, so do ask.',
    },
    faqs: [
      {
        q: 'How often does a boiler need servicing?',
        a: 'Every year. Most manufacturers make that a warranty condition, and missing a service is a frequent reason for claims being refused.',
      },
      {
        q: 'How long will the service take?',
        a: 'Allow under an hour for a typical domestic boiler. If something needs a closer look it can take longer. We would sooner spend an extra twenty minutes than pass a boiler that is not quite right.',
      },
      {
        q: 'How is a service different from a repair?',
        a: 'Servicing is a planned inspection and clean, while a repair puts right a particular fault. When a service shows up a failed part, that part is priced on its own and we ask for your go-ahead before fitting a new one.',
      },
      {
        q: 'Will you service a boiler someone else fitted?',
        a: 'Yes. Who installed it makes no difference to us.',
      },
    ],
  },
  {
    slug: 'boiler-installation',
    title: 'Boiler Installation',
    h1: 'Boiler installation across London',
    metaTitle: 'Boiler Installation London, Sized Right | Ninja Plumbers',
    metaDescription:
      'New boilers installed in London by Gas Safe registered engineers: sized for your home, priced before we start, old unit taken away. Call 020 3576 5825.',
    eyebrow: 'Boilers and heating',
    icon: 'boiler',
    target: 'boiler installation london (1,600/mo) · combi boiler installation london (170)',
    summary:
      'Your new boiler, matched to the size of the home, installed well, at a price agreed up front.',
    intro:
      'Whether it is your first boiler, a change from one type of system to another, or just moving the unit somewhere that makes more sense, Ninja Plumbers approaches each job the same way. Putting the boiler on the wall is the simple bit. What really decides whether you are still pleased with it five years on is choosing the right size, type and location first.',
    does: [
      'Supplying and fitting new boilers',
      'Heat-only, system and combi boilers',
      'Switching from one system type to another',
      'Moving a boiler to a more suitable spot',
      'Condensate pipes and flue routes',
      'Removal and disposal of the old unit',
    ],
    guidance: [
      {
        title: 'Get the size right before the brand',
        body: 'An oversized boiler keeps switching on and off and wears out early. An undersized one never quite catches up. What sets the size is how many radiators, bathrooms and people the home has, not whatever was fitted before, since the old boiler may have been badly sized as well.',
      },
      {
        title: 'A combi will not suit every home',
        body: 'In most London flats and smaller terraces, a combi is the sensible choice. That changes when two or more bathrooms are likely to be in use together. Run two showers from one combi and neither works well. A system boiler paired with a cylinder copes with that properly, which is something a combi was never built to do.',
      },
      {
        title: 'Think hard about the position',
        body: 'Relocating a boiler means extra pipework and a new flue route, yet it often cures problems that would otherwise drag on for years: noise through a bedroom wall, a flue ending somewhere it should not, or a unit hidden behind a fitted kitchen so every service means taking cupboards apart.',
      },
      {
        title: 'Listed buildings and conservation areas',
        body: 'In listed buildings and conservation areas there are limits on where a flue can come out, so settle that before picking a boiler, not after. In the parts of London where this often applies, it is the first thing we check.',
      },
    ],
    aside: {
      title: 'You agree the price first',
      body: 'You have the figure before anything is disconnected, and it covers taking the old unit away. Should something unexpected appear behind the old boiler, we let you know before going any further, never after.',
    },
    faqs: [
      {
        q: 'How long does it take to install a boiler?',
        a: 'Swapping like for like is normally a one-day job. A change of system type or a move to a new spot usually takes two days. Our quote tells you which applies to you.',
      },
      {
        q: 'Combi or system boiler: which suits me?',
        a: 'In most flats and smaller houses, a combi. If two or more bathrooms are likely to be used at the same moment, go for a system boiler with a cylinder, since a combi cannot run two showers properly at once.',
      },
      {
        q: 'Is it possible to move my boiler?',
        a: 'Yes, in most homes. Extra pipework and a longer flue add to the cost, but moving a boiler off a bedroom wall or out from behind kitchen units usually repays that spend over the years you go on living with it.',
      },
      {
        q: 'What happens to the old boiler?',
        a: 'We remove it and dispose of it as part of the job, and that is already included in the figure we quote you.',
      },
    ],
  },
  {
    slug: 'boiler-replacement',
    title: 'Boiler Replacement',
    h1: 'Boiler replacement across London',
    metaTitle: 'Boiler Replacement London | Straight Advice | Ninja Plumbers',
    metaDescription:
      'Time for a new boiler? Ninja Plumbers gives London homeowners an honest repair or replace answer, a clear quote and removal of the old unit. 020 3576 5825.',
    eyebrow: 'Boilers and heating',
    icon: 'boiler',
    target: 'boiler replacement london (480/mo) · new boiler london (260)',
    summary:
      'A new boiler when the old one is finished, and an honest view on whether it really is.',
    intro:
      'Replacement is worth it when a boiler breaks down again and again, runs up bills it should not, or is past any sensible repair. Before that point it often is not, and many boilers are condemned too soon by someone with a new one to sell. Ask us. If yours still has years of life in it, we will tell you.',
    does: [
      'Replacing boilers that are old or have failed',
      'An assessment of repair against replacement, with both prices',
      'Straight swaps and changes of system',
      'Replacing models that parts are no longer available for',
      'Old boiler removed and disposed of',
      'Guidance on the right size for the new boiler',
    ],
    guidance: [
      {
        title: 'When a new boiler is the better use of money',
        body: 'As a rough guide: the boiler is more than about twelve years old, the part that has failed is a costly one, or the model can no longer get parts. Short of that, repairing usually comes out ahead, and we will tell you so even though replacing would be the larger job for us.',
      },
      {
        title: 'Compare two figures, not one',
        body: 'Every replacement quote should come alongside the cost of fixing the boiler you already have. If no one has given you a repair price, ask for one. Choosing on the strength of a single figure is not really choosing.',
      },
      {
        title: 'Think twice about an identical swap',
        body: 'Putting back exactly the same boiler is the easy route, but it is not always the best one. Replacement is your real opportunity to correct a boiler that was too small, the wrong type for the home, or squeezed into an awkward corner from the start. If the old one never kept the house properly warm, fitting its twin simply repeats the error. Talk to Ninja Plumbers about what genuinely suits the property before the same model gets ordered again.',
      },
      {
        title: 'Whether parts can still be found matters',
        body: 'Some boilers still work perfectly well but are no longer supported. Once a common fault on your model cannot be fixed because the part is unobtainable, the sums change, however old the boiler happens to be.',
      },
    ],
    aside: {
      title: 'Not every old boiler needs replacing',
      body: 'When a repair is the better option, you will hear that from us. Replacing a boiler is a larger job for us and a far larger bill for you. Pushing one you do not need wins a company a single job instead of twenty years of work.',
    },
    faqs: [
      {
        q: 'How can I tell whether my boiler should be replaced?',
        a: 'Look at its age, what the failed part costs and whether parts can still be found. An expensive fault on a boiler more than about twelve years old usually means replacement. On a younger one, repair tends to be the better choice.',
      },
      {
        q: 'Do you also give a price for repairing it?',
        a: 'Yes, every time a repair is possible. You ought to be weighing up two figures, not being given one.',
      },
      {
        q: 'Could the new boiler go in a different place?',
        a: 'Yes, and replacement is the obvious time to move it. The job gains some pipework and flue work, but it often solves a problem you have put up with for years.',
      },
      {
        q: 'Does the new boiler have to be the same type?',
        a: 'Not necessarily. Replacement is the right moment to think again about that. If a second bathroom has been added since your current boiler went in, a system boiler with a cylinder may now suit the house better than fitting a second combi.',
      },
    ],
  },
  {
    slug: 'drain-unblocking',
    title: 'Drain Unblocking',
    h1: 'Drain unblocking across London',
    metaTitle: 'Drain Unblocking London, Drains Cleared | Ninja Plumbers',
    metaDescription:
      'Fast drain unblocking in London, done properly. Rods, jetting and CCTV for sinks, toilets and outside drains, and we tell you the cause. Call 020 3576 5825.',
    eyebrow: 'Blocked drains',
    icon: 'drain',
    target: 'drain unblocking london (1,000) · blocked drain london (590) · blocked toilet london (480)',
    summary:
      'Blocked sinks, toilets and outside drains cleared with the right kit instead of bottled chemicals.',
    intro:
      'Maybe the sink takes an age to empty, the toilet refuses to clear however often you flush, or the drain outside is backing up across the patio. Ninja Plumbers deals with each of these using rods and jetting gear, not something bought at the supermarket. Where the cause is unclear, we send a drain camera down to see it for ourselves instead of guessing.',
    does: [
      'Sinks, baths and showers that will not drain',
      'Soil stacks and toilets that are blocked',
      'Manholes, gullies and drains outside',
      'Jetting at high pressure',
      'Drain surveys by CCTV camera',
      'Tracing why blockages keep coming back',
    ],
    guidance: [
      {
        title: 'Leave the caustic drain cleaner on the shelf',
        body: 'Against a real blockage it seldom helps much. It is harsh on older pipes, and whoever works on the drain next has to put their hands into a trap of caustic liquid. That matters in London’s older homes, where pipework is often more fragile than it looks. If some has already gone down, mention it when you ring so we arrive ready for it.',
      },
      {
        title: 'First step with a blocked toilet',
        body: 'Stop pressing the flush. Every flush pours more water into a pan with nowhere to go, and that is how a blockage turns into a flood. If the level is falling slowly by itself, the blockage is only partial and can normally wait for a standard appointment.',
      },
      {
        title: 'Several fittings slow at once',
        body: 'When the sink, bath and toilet all drain slowly at the same time, the hold-up is further along, in the shared soil stack or the outside drain, rather than under a single fitting. Worth knowing before anybody starts dismantling a trap.',
      },
      {
        title: 'A blockage that keeps returning',
        body: 'Repeated blockages always have a cause: roots getting in, fat building up, a section that has collapsed, or a pipe laid badly. Over a year, clearing it time after time costs more than one survey and a proper fix.',
      },
    ],
    aside: {
      title: 'You will know what caused it',
      body: 'It would be easy to clear the blockage and leave without a word. We prefer to let you see what we pulled out and what turned up, so you can judge whether the underlying fault is worth putting right.',
    },
    faqs: [
      {
        q: 'Is the drain my responsibility or the water company’s?',
        a: 'As a rule, the pipes within your property boundary belong to you, and the shared sewer past that point belongs to Thames Water. We will point out which side the problem sits on, and if it is on theirs, we say so instead of charging you for the fix.',
      },
      {
        q: 'Do you carry out CCTV drain surveys?',
        a: 'Yes. We use them for blockages that keep returning, for checks before you buy a property, and when an insurer needs proof of what is really wrong.',
      },
      {
        q: 'Can a blocked toilet be cleared on the same day?',
        a: 'Usually, yes. Call the booking line and tell us what is happening, and you will get a realistic answer on timing, not an optimistic one.',
      },
      {
        q: 'Do you work on drains in blocks of flats?',
        a: 'Yes. We handle shared stacks and communal drains for freeholders and managing agents. Please use the management line for this work.',
      },
    ],
  },

  {
    slug: 'leak-detection',
    title: 'Leak Detection',
    h1: 'Leak detection across London',
    metaTitle: 'Leak Detection London, Hidden Leaks Found | Ninja Plumbers',
    metaDescription:
      'A leak you cannot find? Across London, Ninja Plumbers tracks down hidden pipe leaks, damp patches and rising water bills without lifting floors. 020 3576 5825.',
    eyebrow: 'Leak tracing',
    icon: 'leak',
    target: 'leak detection london (1,000, low competition) · water leak detection (2,900)',
    summary:
      'Acoustic and thermal equipment to trace hidden leaks before any floor is lifted.',
    intro:
      'A damp patch that comes back however many coats of paint go over it. A ceiling stain that grows a little every week. A water bill that keeps rising while nobody can say why. Whichever one you have, the source needs finding before any repair, or you end up paying to treat a symptom and not the leak itself.',
    does: [
      'Concealed leaks in pipes behind walls and under floors',
      'Investigating damp and water damage',
      'Water use that has risen for no clear reason',
      'Leaks beneath tiled and solid floors',
      'Heating systems that keep losing pressure',
      'Checks before buying or refurbishing a property',
    ],
    guidance: [
      {
        title: 'Check the meter',
        body: 'Switch off all taps and appliances and note the reading on your water meter. Leave everything off for an hour, then read it again. Any movement means water is escaping somewhere on your supply. This single check tells us a lot before we even arrive.',
      },
      {
        title: 'Boiler pressure that keeps falling',
        body: 'If the boiler needs refilling every few weeks, the heating circuit is usually leaking somewhere, often through a pinhole in a pipe below the floor. It is worth tracking down, because each refill lets corrosion work on the system from the inside.',
      },
      {
        title: 'The leak is seldom right above the stain',
        body: 'Water often travels a fair way along a joist or beneath a floor before it appears. So the mark on your ceiling may sit some distance from the pipe that has actually failed. That is why Ninja Plumbers pinpoints the leak first, instead of cutting holes on a hunch and hoping one of them lands in the right spot.',
      },
      {
        title: 'Ring your insurer before booking',
        body: 'Plenty of home insurance policies include trace and access, which pays for locating the leak and for the making good that follows. It is worth checking before you book, and we can supply a report if your insurer asks for one.',
      },
    ],
    aside: {
      title: 'Locate first, open up second',
      body: 'With acoustic and thermal methods, a leak can be found without lifting floors on a guess. Your money goes on fixing the pipe, not on making good three holes cut in the wrong places.',
    },
    faqs: [
      {
        q: 'Does my floor have to come up?',
        a: 'Finding the leak is non-invasive. After it is pinpointed, the repair may need access at that single spot, but that is one targeted opening, not exploratory work across the whole room.',
      },
      {
        q: 'How precise is leak detection?',
        a: 'Acoustic and thermal equipment normally narrows a leak down to a small area. No method is perfect through solid concrete, and if a site is tricky we will say so honestly instead of overpromising.',
      },
      {
        q: 'Could a doubled water bill mean a leak?',
        a: 'Often, yes, particularly if the way you use water has not changed at all. Do the meter test above first and tell us the result when you ring. It makes the visit quicker.',
      },
      {
        q: 'Can I get a report for my insurance claim?',
        a: 'Yes. Let us know when you book that you need one, and the engineer will record the job properly during the visit.',
      },
    ],
  },

  {
    slug: 'bathroom-installation',
    title: 'Bathroom Installation',
    h1: 'Bathroom installation across London',
    metaTitle: 'Bathroom Fitters London for Full Refits | Ninja Plumbers',
    metaDescription:
      'Bathroom installation in London, whether it is one worn-out toilet or a complete strip-out, refit or en-suite. Priced before we begin. Call 020 3576 5825.',
    eyebrow: 'Bathroom refits',
    icon: 'bathroom',
    target: 'bathroom fitters london (1,000) · bathroom installation london (720)',
    summary:
      'Anything from swapping one fitting to stripping out and refitting the whole room, priced before work starts.',
    intro:
      'It might be a single worn basin that needs replacing. It might be the entire bathroom, taken back to bare brick and built again from scratch. Whichever it is, we take care of the plumbing and organise any other trades the work calls for. You deal with one contact, not three tradespeople you have to manage yourself.',
    does: [
      'Complete refits of bathrooms and en-suites',
      'Fitting baths, showers and toilets',
      'Level-access showers and wet rooms',
      'Bathrooms designed for access and mobility',
      'Heated towel rails, vanity units and basins',
      'Bidets and bidet taps, with supply and waste connected',
      'Coordinating the tiling and finishing',
    ],
    guidance: [
      {
        title: 'Know your water pressure before picking a shower',
        body: 'A mixer shower that looks powerful will let you down on a gravity system with low pressure. Tell us which system you have, and before you spend anything we will say what will genuinely perform.',
      },
      {
        title: 'Relocating the WC is what costs most',
        body: 'Putting the toilet somewhere new means moving its soil connection, and that adds more cost than nearly any other change. Leaving it in place and arranging everything else around it usually gives the best-value layout.',
      },
      {
        title: 'Have everything delivered before day one',
        body: 'Bathrooms most often overrun because an item turns out to be on back order halfway through. Have the tiles, brassware and suite delivered before work begins and the project stays on schedule.',
      },
      {
        title: 'Flats come with extra conditions',
        body: 'Leasehold flats, which make up much of London’s housing, often carry conditions worth checking before you settle on a design. Your lease may say the freeholder must consent to bathroom work. Some buildings limit working hours, or refuse to let a wet area move above a habitable room on the floor below. You want to know that at the start, not once the old bathroom has been ripped out.',
      },
    ],
    aside: {
      title: 'The price comes first',
      body: 'We agree the scope and the price with you before a single floorboard comes up. Should a hidden problem behind the wall alter the job, we pause and discuss it with you, instead of carrying on and billing for it later.',
    },
    faqs: [
      {
        q: 'How long will my bathroom take?',
        a: 'That depends completely on the scope and on what state things are in behind the existing bathroom. Your quote comes with a realistic timescale and a note of anything that could stretch it.',
      },
      {
        q: 'Who supplies the bathroom, you or me?',
        a: 'Whichever you prefer. Lots of customers enjoy picking and buying their own suite and just having Ninja Plumbers install it, and that works as well as us sourcing it all.',
      },
      {
        q: 'Is tiling part of the service?',
        a: 'We do the plumbing and organise the tiling and finishing within the same job, so you have one contact instead of several.',
      },
      {
        q: 'Will I be able to use the bathroom during the work?',
        a: 'Not while a full refit is under way. If the home has no other bathroom, plan around that, and we will be honest with you about how long it will last.',
      },
    ],
  },

  {
    slug: 'toilet-installation',
    title: 'Toilet Installation',
    h1: 'Toilet installation across London',
    metaTitle: 'Toilet Installation London, New WCs Fitted | Ninja Plumbers',
    metaDescription:
      'Toilets fitted and replaced all over London: wall-hung, close-coupled, back-to-wall and concealed cistern WCs. To book Ninja Plumbers, call 020 3576 5825.',
    eyebrow: 'WCs fitted and replaced',
    icon: 'bathroom',
    target: 'toilet plumber (480/mo) · new toilet installation (110/mo) · toilet installation london (90/mo)',
    summary:
      'Fitting a new toilet, replacing an old one, or putting a WC somewhere it has never been.',
    intro:
      'Taking out an old toilet and fitting a new one in its place takes a morning and is no more complicated than it sounds. Moving a WC, fixing a wall-hung pan to a support frame, or installing one where no soil connection has ever existed is another matter. Those jobs raise different questions, and it pays to ask them before you buy the suite, not after it has been delivered.',
    does: [
      'New or replacement toilets, supplied by us or by you',
      'Wall-hung, back-to-wall and close-coupled pans',
      'Support frames and concealed cisterns',
      'Relocating a toilet',
      'Changes to waste and soil pipes',
      'WCs for en-suites and cloakrooms',
      'Repairs to cisterns and flush mechanisms without a new suite',
    ],
    guidance: [
      {
        title: 'Take measurements before ordering',
        body: 'Whether a toilet will suit your existing pipework comes down to the gap between the wall and the centre of the waste, plus the height and width of the cistern. Send us a side-on photo of your current toilet along with the model you like, and we can confirm it before you place the order.',
      },
      {
        title: 'A wall-hung pan needs a frame and a strong wall',
        body: 'The pan is not held up by plasterboard. Its weight sits on a steel frame concealed behind the wall. It looks neater and the floor underneath is easier to clean, but the frame takes up more room in the wall than most people imagine. In a cramped London cloakroom, that depth is often what settles whether wall-hung can work at all.',
      },
      {
        title: 'Hidden cisterns must stay reachable',
        body: 'Sooner or later someone will need to get at what is behind the panel, because the flush valve and inlet valve are the parts that wear out. An access panel is essential. Tiling over the lot is a choice that is costly to reverse.',
      },
      {
        title: 'A toilet that rocks will start to leak',
        body: 'Over the months, the movement loosens the waste seal, and by the time water marks the ceiling below it has normally been leaking for some time. If your toilet shifts when you sit on it, get it sorted now.',
      },
    ],
    aside: {
      title: 'A new part may be all it needs',
      body: 'When a toilet keeps running, refuses to flush or is slow to fill, the culprit is very often the flush valve or inlet valve, not the whole suite. We will point that out, although it means less work for us.',
    },
    faqs: [
      {
        q: 'Will you fit a toilet I bought myself?',
        a: 'Yes, Ninja Plumbers regularly fits toilets that customers have supplied. Send us the model ahead of the visit so we can check the waste position lines up and let you know if any adaptors are needed.',
      },
      {
        q: 'How much time does a simple swap need?',
        a: 'Replacing like for like usually takes a morning. Anything that means moving the waste, or fitting a wall-hung frame or concealed cistern, takes longer, and we quote for it once we have seen the room.',
      },
      {
        q: 'Can the toilet be moved to a different part of the room?',
        a: 'In some cases. It hinges on whether the waste can run downhill to the soil stack. Where it cannot, the fallback is a macerator, and we will explain that honestly rather than reach for it by default.',
      },
      {
        q: 'Will you remove the old toilet?',
        a: 'Yes, and that is included. Where possible, old ceramics are recycled instead of going into a skip.',
      },
    ],
  },

  {
    slug: 'general-plumbing',
    title: 'General Plumbing',
    h1: 'General plumbing across London',
    metaTitle: 'General Plumber London, Everyday Repairs | Ninja Plumbers',
    metaDescription:
      'Day-to-day plumbing repairs in London for landlords, agents and homeowners: taps, toilets, radiators, stopcocks and pipework. Ring 020 3576 5825.',
    eyebrow: 'Day-to-day plumbing',
    icon: 'general',
    target: 'plumber london (3,600) · leaking tap repair (1,300) · radiator repair (1,000)',
    summary:
      'Radiators, pipework, taps and toilets: the small jobs that keep getting put off.',
    intro:
      'A tap that has dripped for months. A toilet that keeps running through half the night. That single radiator in the flat that never really warms up. Jobs like these stay on the list for years because none of them seems urgent by itself. Ninja Plumbers prices them just as it would a larger job, and in most cases they are fixed on the first visit.',
    does: [
      'Replacing washers, taps and mixers',
      'Running overflows, cisterns and toilets',
      'Fitting, moving and balancing radiators',
      'Isolation valves and stopcocks',
      'Plumbing in dishwashers and washing machines',
      'Repiping and pipework repairs or alterations',
      'Finding and fixing the cause of low water pressure',
    ],
    guidance: [
      {
        title: 'Three usual causes of low pressure',
        body: 'The first suspect is limescale in a shower head or tap aerator, and quite often that is the entire problem. After that comes a valve on the pipe run that has been left half shut. The third cause, more common in older London homes, is a supply pipe from the street that coped fine until a power shower or modern washing machine began demanding more than it was designed to deliver. We work through them in that order, starting with the quickest and cheapest.',
      },
      {
        title: 'Do not ignore a running toilet',
        body: 'A cistern that never stops refilling can throw away hundreds of litres every day. If you are on a water meter, you will see it on the bill. The fix is usually an inexpensive part and a quick visit.',
      },
      {
        title: 'Find the isolation valves',
        body: 'Under most taps and toilets you will find a little isolation valve fitted to the pipe that feeds them. A quarter turn with a flat-head screwdriver shuts off that one fitting, and every other tap in the house keeps running.',
      },
      {
        title: 'Radiators that stay cold at the bottom',
        body: 'A cold top means trapped air, which bleeding will clear. A cold bottom means sludge has settled inside the radiator, and bleeding will not help in the slightest. That radiator needs a flush.',
      },
      {
        title: 'Older taps in older flats',
        body: 'In lots of London flats, a perfectly good tap sits behind an isolation valve that has seized solid. Bear in mind that a job which looks like ten minutes can now and then grow into something a bit larger. If it does, we tell you before carrying on, not after the work is finished.',
      },
    ],
    aside: {
      title: 'Small jobs are welcome',
      body: 'A dripping tap is reason enough to ring. We would sooner do the ten-minute job properly and be the firm you call when the big one comes along.',
    },
    faqs: [
      {
        q: 'Is it worth calling you for one small job?',
        a: 'Yes. We quote small jobs just as we do large ones, and they are often finished on the first visit.',
      },
      {
        q: 'Do landlords and agents use you?',
        a: 'Often. We handle repairs, turnarounds between tenancies and reactive maintenance across managed properties. For ongoing arrangements, the management line is the number to use.',
      },
      {
        q: 'Could you install an outside tap?',
        a: 'Yes, it is a job we do often. Water regulations require a check valve to be fitted with it, and that comes as standard.',
      },
      {
        q: 'Is there a callout fee on top of the price?',
        a: 'Before any work begins, you will have a price for the job itself. What that figure does and does not cover is made clear when you agree to it, so nothing unexpected lands on you later.',
      },
    ],
  },

  {
    slug: 'commercial-plumbing',
    title: 'Commercial Plumbing',
    h1: 'Commercial plumbing in London',
    metaTitle: 'Commercial Plumber London | Shops & Offices | Ninja Plumbers',
    metaDescription:
      'Offices, restaurants, retail units and blocks of flats across London, with out-of-hours slots available for commercial plumbing. Call 020 3576 5825.',
    eyebrow: 'Commercial',
    icon: 'commercial',
    target: 'commercial plumber london (260, low competition)',
    summary:
      'Plumbing for offices, restaurants, shops and blocks of flats, timed to fit the hours you open.',
    intro:
      'Most shops, office floors and restaurants cannot shut for the day just so a plumber can work. So we plan each visit around your opening hours and your tenants, not the other way round. Once the job is finished, we report to the manager, agent or freeholder who has to sign it off.',
    does: [
      'Washrooms fitted, repaired and maintained',
      'Boiling taps, tea points and office kitchens',
      'Plumbing for commercial kitchens',
      'Fit-outs and shopfront washrooms for retail units',
      'Drain clearance and CCTV surveys on commercial sites',
      'Reactive repairs on behalf of landlords and managing agents',
      'Communal systems across blocks of flats',
      'Overnight and out-of-hours visits',
    ],
    spaces: [
      {
        title: 'Office washrooms and kitchens',
        body: 'Boiling taps, tea points, dishwashers and the washrooms the whole building relies on. The hard part is rarely the plumbing itself; it is getting access. So we come in early, late or at the weekend, and a floor of desks does not sit empty while a tap is swapped.',
      },
      {
        title: 'Commercial kitchens',
        body: 'Grease traps, hot water that keeps up with heavy demand, dishwasher and glasswasher connections, and drainage sized for volume, not for a sink at home. If the kitchen cannot open, you lose a service. We book these jobs around your covers and bring along the parts most likely to fail.',
      },
      {
        title: 'Retail units',
        body: 'Fit-outs, customer WCs and staff washrooms, plus the reactive jobs that come from sharing a stack in a parade or shopping centre. If the landlord or centre management must approve the work, we supply the paperwork they ask for, so you are not left chasing it.',
      },
    ],
    guidance: [
      {
        title: 'Your trading hours come first',
        body: 'In restaurants and shops this tends to mean early mornings, evenings or overnight. Give us your trading pattern when you first get in touch, and we will plan the work to fit it, not cut across it.',
      },
      {
        title: 'Records for whoever signs the job off',
        body: 'A verbal all-clear is rarely enough for managing agents, freeholders or landlords. Tell us which person needs which records, and our engineer will note the job to suit while on site.',
      },
      {
        title: 'Shared stacks in blocks of flats',
        body: 'One flat may report the blockage, but the cause often sits in the shared stack, and several flats can be affected at once, not only the one that rang. Most of the job is getting into the right flats on the first visit. Miss one, and a second trip is needed for work that should have been finished the first time.',
      },
      {
        title: 'Commercial jobs are part of our normal week',
        body: 'Every week Ninja Plumbers works in offices, restaurants, shops and blocks of flats as well as homes. Fitting around opening hours, tenants and managing agents is something we already know how to do, not something we work out when we arrive.',
      },
    ],
    aside: {
      title: 'Call the management line',
      body: 'Use the management line for commercial jobs, ongoing maintenance and account set-ups. It connects you with the people able to agree terms.',
    },
    faqs: [
      {
        q: 'Can the work happen outside our opening hours?',
        a: 'Yes. In restaurants, shops and offices it is often the only sensible option, so we plan around your trading instead of working through it.',
      },
      {
        q: 'Do you offer ongoing maintenance?',
        a: 'Yes. Call the management line to discuss reactive and planned cover for one property or a whole portfolio.',
      },
      {
        q: 'Do you carry out work for managing agents?',
        a: 'Often, including reactive repairs in managed blocks and work on communal drainage.',
      },
      {
        q: 'Which of your numbers should I ring?',
        a: 'Ring the booking line for a quick one-off repair. Ongoing, commercial or account work goes best through the management line, which reaches someone with the authority to agree terms.',
      },
    ],
  },

  {
    slug: 'gas-safety-certificate',
    title: 'Gas Safety Certificates',
    h1: 'Gas safety certificates (CP12) in London',
    metaTitle: 'Landlord Gas Safety Certificate London | Ninja Plumbers',
    metaDescription:
      'Landlord or homeowner in London? Get your CP12 gas safety certificate from a Gas Safe registered engineer, with same-week appointments. Call 020 3576 5825.',
    eyebrow: 'CP12',
    icon: 'general',
    target: 'gas safety certificate (9,900/mo) · landlord gas safety certificate (varies by area)',
    summary:
      'Your landlord gas safety certificate, checked and issued by a Gas Safe registered engineer and emailed over the same day.',
    intro:
      'The name CP12 comes from an old form number and has stuck, though the proper term today is just a gas safety certificate. By law, landlords in England and Wales must renew it every twelve months. A Gas Safe registered engineer from Ninja Plumbers tests each appliance, flue and length of pipework in the property. You get the certificate at the end of that visit, on the same day.',
    does: [
      'Annual renewal of landlord gas safety certificates (CP12)',
      'Boilers, gas fires, hobs and every other gas appliance checked',
      'Ventilation and flue performance tested',
      'Your certificate issued and emailed on the same day',
      'Scheduling across portfolios and multiple properties for landlords and agents',
      'Repairs to follow up any fault the check finds',
    ],
    guidance: [
      {
        title: 'Only a Gas Safe registered engineer can do it',
        body: 'The law says the check must be done by an engineer registered for the particular appliance types in the property. Ask for their Gas Safe ID card; a genuine engineer will happily show it. You can also look them up on the register yourself in about thirty seconds.',
      },
      {
        title: 'It reflects the property on the day of the check',
        body: 'The check covers the appliances and pipework as they are installed at the time. It does not promise that nothing will go wrong later. Anything added or altered after the visit, such as a new gas hob, will need checking as well.',
      },
      {
        title: 'One failed appliance does not sink the whole certificate',
        body: 'An unsafe appliance is capped off or condemned and recorded, while everything else in the property can still pass. We prefer to isolate that single fault and issue the paperwork, not hold up the whole job.',
      },
      {
        title: 'Tenants need their copy within 28 days',
        body: 'Existing tenants must be given the current certificate no later than 28 days after the check. New tenants must have one before the day they move in. Because we email the certificate on the same day as standard, this step is hard to miss when renewal comes round.',
      },
    ],
    aside: {
      title: 'Renew before the date passes',
      body: 'Letting agents spot a lapsed certificate straight away, because it leaves a gap in compliance. Ask us to set a reminder, and each renewal is booked on time, not spotted only after it has run out.',
    },
    faqs: [
      {
        q: 'How long will the gas safety check take?',
        a: 'For a typical property, thirty to forty-five minutes, and longer if there are more appliances. You receive the certificate when the visit ends.',
      },
      {
        q: 'What if one of my appliances fails?',
        a: 'If an appliance is immediately dangerous, it is isolated there and then to keep everyone safe. We explain what it needs to be put right, and in most cases the certificate can still be issued for everything else.',
      },
      {
        q: 'Do homeowners need one, or only landlords?',
        a: 'Only landlords are legally required to have one. If you own the property and live in it, the check is optional, but a yearly visit is still a good habit, above all before winter, when your boiler does the most work.',
      },
      {
        q: 'Can several properties in a portfolio be done in one visit?',
        a: 'Yes. Send us the addresses and the number of appliances at each, and we can usually plan a day around a group of nearby properties.',
      },
    ],
  },

  {
    slug: 'cctv-drain-survey',
    title: 'CCTV Drain Surveys',
    h1: 'CCTV drain surveys in London',
    metaTitle: 'CCTV Drain Survey London | Drain Cameras | Ninja Plumbers',
    metaDescription:
      'Recorded footage and a written report from a CCTV drain survey in London, for house purchases, insurance claims or drains that keep blocking. 020 3576 5825.',
    eyebrow: 'Diagnostics',
    icon: 'drain',
    target: 'cctv drain survey (2,900/mo)',
    summary:
      'We send a camera into the drain to see the real fault, instead of guessing from the symptoms you notice at the surface.',
    intro:
      'Perhaps your drain keeps blocking again and again. Perhaps there is a smell in the garden that never quite clears, or your solicitor wants a survey before the house purchase completes. Each case has the same answer. We run a waterproof camera along the pipe to see its true condition, whether that is a collapse, roots working their way in, a joint pushed out of line, or no fault at all. Whatever it shows, Ninja Plumbers gives you the footage along with a written report.',
    does: [
      'Drains and sewers inspected by CCTV camera',
      'A written report with the recorded footage',
      'Drain surveys for buyers before a house purchase',
      'Surveys and evidence for insurance claims',
      'Pinpointing where a fault is and how deep it sits',
      'Identifying collapses, misaligned joints and root ingress',
    ],
    guidance: [
      {
        title: 'The survey diagnoses; it does not repair',
        body: 'The camera shows what the fault is and where it sits. A blockage then needs clearing as a separate job, and a collapsed section means excavation and repair. We price the survey and the likely next step on their own, because booking one does not tie you to the other.',
      },
      {
        title: 'Repeat blockages tend to have a structural cause',
        body: 'When a drain is cleared properly but blocks again every few months, something inside is catching debris. It could be a root, a sag in the pipe or a partial collapse. A survey finds that cause, so you stop paying to clear the same symptom again and again.',
      },
      {
        title: 'Buying a home? Order your own survey',
        body: 'You cannot always treat a survey arranged by the seller as independent. Paying for your own costs little, above all on a period property with old clay drains, compared with discovering a collapsed run after the purchase has already completed.',
      },
      {
        title: 'Insurers and solicitors want the written report',
        body: 'For an insurance claim or a house purchase, what gets accepted is a written report with footage that is timestamped and located. A spoken account of what the engineer saw will not do. The report is included as standard with every survey.',
      },
    ],
    aside: {
      title: 'Dated footage ends disputes quickly',
      body: 'When a neighbour disagrees about a shared drain, or an insurer has questions, footage showing a location and a date cuts the back-and-forth short.',
    },
    faqs: [
      {
        q: 'How long will the survey take?',
        a: 'Under an hour, as a rule, for a single domestic run. A whole-property survey covering several runs, or a longer commercial line, needs more time.',
      },
      {
        q: 'What if my drain is hard to get to?',
        a: 'In most cases we go in through the nearest manhole or gully, so nothing needs digging up first. If there is truly no way in, we tell you before charging for the visit.',
      },
      {
        q: 'Can I see the footage myself?',
        a: 'Yes. You receive both the recording and the written report as part of the survey, and neither is billed separately later on.',
      },
      {
        q: 'What happens if the survey finds something serious?',
        a: 'We explain what we found, where it is and what the fix would involve. That repair is quoted as its own job, so you can decide with all the facts in front of you.',
      },
    ],
  },

  {
    slug: 'drain-repairs',
    title: 'Drain Repairs',
    h1: 'Drain repairs in London',
    metaTitle: 'Drain Repairs London | No-Dig Relining | Ninja Plumbers',
    metaDescription:
      'We confirm the damage by camera, then repair collapsed, cracked or root-damaged drains in London by no-dig relining or excavation. Call 020 3576 5825.',
    eyebrow: 'Repairs',
    icon: 'drain',
    target: 'drain repair (1,900/mo)',
    summary:
      'For drains that are broken, not merely blocked. We repair them by excavation or, if the run allows, with no digging at all.',
    intro:
      'A blocked drain and a broken drain are not the same problem. Unblocking removes whatever is lodged in a pipe that is otherwise sound. Repair is for a pipe with physical damage: collapsed, cracked, split by roots or pushed out of alignment. Before we quote anything, a camera survey tells us which of these we are facing. The fix is then either excavation or, if the run allows, a no-dig liner fed through the pipe that is already there.',
    does: [
      'Collapsed or badly damaged drains dug out and replaced',
      'Cracks and root damage relined without digging, where the run allows',
      'Cutting out roots and fitting root barriers',
      'Displaced or misaligned joints put back in line',
      'Paving, tarmac or garden reinstated once the work is done',
      'Repairs to shared drains, working with the water company where relevant',
    ],
    guidance: [
      {
        title: 'Every repair begins with a camera survey',
        body: 'We will not price an excavation until a camera survey has shown exactly where the damage is and how serious it is. Opening up the wrong stretch, or more ground than the job needs, is a costly error worth avoiding.',
      },
      {
        title: 'Relining without digging has its limits',
        body: 'A resin liner suits a crack or split where the pipe still holds roughly its shape. A section that has truly collapsed, or is badly misaligned, cannot physically take a liner, so it has to be excavated.',
      },
      {
        title: 'You may not be responsible for all of a shared drain',
        body: 'Where a drain also serves next door, the shared section is often the water company’s responsibility under the Water Industry Act, not either homeowner’s. Ninja Plumbers checks where that boundary really sits, so you are not charged for a repair that should never have fallen to you.',
      },
      {
        title: 'Putting the ground back is part of the quote',
        body: 'If we have to dig through a patio or driveway, restoring it properly is agreed in the quote from the start. It is not something to negotiate once the hole is open.',
      },
    ],
    aside: {
      title: 'Ask if relining is an option',
      body: 'A no-dig repair is quicker, leaves no mess above ground and often costs less than excavation. Ask about it directly, because some companies do not offer it.',
    },
    faqs: [
      {
        q: 'How can you tell whether a drain needs repairing or just unblocking?',
        a: 'A CCTV survey makes it plain. Debris resting in a sound pipe means a blockage; a pipe wall that is cracked, collapsed or split by roots means a repair. Without that evidence, we will not recommend a repair.',
      },
      {
        q: 'Will my garden or driveway have to be dug up?',
        a: 'Only if the damage means relining cannot be used. When relining will do the job, nothing above ground is disturbed at all.',
      },
      {
        q: 'Does the water company look after a shared drain?',
        a: 'Often it does, for the shared stretch past your boundary. We find where that line sits and, if a fault really is on a shared section, refer it to the water company instead of quoting you for work that is theirs.',
      },
      {
        q: 'How long will the repair take?',
        a: 'Most no-dig relines take a day. For an excavation it depends on depth and access, and once the survey shows how far the damage goes, we give you a realistic timeframe.',
      },
    ],
  },

  {
    slug: 'wet-rooms-and-walk-in-showers',
    title: 'Wet Rooms & Walk-In Showers',
    h1: 'Wet room and walk-in shower installation in London',
    metaTitle: 'Walk-In Shower & Wet Room Installers London | Ninja Plumbers',
    metaDescription:
      'Proper tanking and accurate floor falls on every level-access wet room and walk-in shower we build in London. Book Ninja Plumbers: 020 3576 5825.',
    eyebrow: 'Level access',
    icon: 'bathroom',
    target: 'wet room installation (720/mo) · walk in shower installation (480/mo)',
    summary:
      'Full wet rooms and level-access showers. The tanking and falls underneath decide if it will leak within five years or never leak at all.',
    intro:
      'A wet room seems simple at first glance. There is no tray and no enclosure, only a floor that drains. The parts that count are all out of sight: a tanking membrane run up the walls, a floor laid to a true fall towards the drain, and a gully large enough for the water it takes. Leave any of them out and the leak will not appear in the wet room. It appears two floors below, well after the tiler has finished and gone home.',
    does: [
      'Complete wet room conversions, with tanking and a formed floor',
      'Level-access and walk-in showers, short of a full wet room',
      'Floor falls set accurately to the drain, never judged by eye',
      'Tanking carried up the walls and sealed round penetrations',
      'Point and linear drains matched to your shower’s flow',
      'Wet rooms built to be accessible, including for wheelchair users',
    ],
    guidance: [
      {
        title: 'Waterproofing is the real work; tiles are the finish',
        body: 'What keeps water out of the floor and the flat below is a tanking membrane, run properly up the walls and sealed round every pipe that passes through. Tiles laid over weak tanking will still leak. It simply takes longer to show.',
      },
      {
        title: 'Check the joist depth first, above all in a flat',
        body: 'To get a fall to the drain, the floor usually has to drop, and doing that properly needs enough depth in the joists or slab. In a top-floor flat with little build-up to spare, this is the first thing to check, not the last.',
      },
      {
        title: 'In a flat, bring the freeholder in early',
        body: 'Altering a flat’s floor build-up and drainage for a wet room often needs the freeholder’s approval. It can also affect the ceiling void of the flat underneath. Ninja Plumbers raises this with you before anyone opens up the floor, not after.',
      },
      {
        title: 'Walk-in showers and wet rooms are different jobs',
        body: 'With a tray and a glass panel, a walk-in shower gives you most of the look with no need to lower the floor, and the job is smaller. For true level access, a full wet room is the right choice; for most other people, a walk-in tray is.',
      },
    ],
    aside: {
      title: 'Match the drain to your shower',
      body: 'A linear drain chosen for a low-flow head cannot cope with a rainfall head running flat out. Let us know what you plan to fit before we choose the drain, not afterwards.',
    },
    faqs: [
      {
        q: 'Is planning permission or building control sign-off needed?',
        a: 'A like-for-like bathroom does not need planning permission. The waterproofing and drainage do fall under building regulations, and we follow them as standard.',
      },
      {
        q: 'Is a wet room possible in a flat as well as a house?',
        a: 'Yes. Check the floor depth and the freeholder’s consent early on, though, because both can limit your options before you settle on a design.',
      },
      {
        q: 'How long will a full wet room take?',
        a: 'Usually one to two weeks, depending on how much floor forming and finishing the room needs. That is longer than a standard bathroom refit, because the tanking must dry properly between stages. Rushing that stage is exactly how leaks start later.',
      },
      {
        q: 'Could it start to smell or let damp through over time?',
        a: 'Not if the falls and tanking are done well and left to cure before tiling. Most failures come from cutting the drying time short, not from the wet room idea itself.',
      },
    ],
  },

  {
    slug: 'air-conditioning-repair',
    title: 'Air Conditioning Repair',
    h1: 'Air conditioning repair in London',
    metaTitle: 'Air Conditioning Repair London | Ninja Plumbers',
    metaDescription:
      'London air conditioning repairs for units not cooling, leaking indoors or tripping the breaker — diagnosed by F-Gas engineers. Call 020 3576 5825.',
    eyebrow: 'Cooling',
    icon: 'ac',
    target: 'air conditioning repair london (480/mo) · air conditioning repair (6,600/mo)',
    summary:
      'Stopped cooling, leaking indoors or tripping the breaker? We track down the fault before quoting for anything.',
    intro:
      'A unit that has simply stopped cooling. One that is dripping water onto the carpet. One that trips the electrics the moment it switches on. Whatever the symptom, the actual cause is rarely obvious just by looking at the box on the wall — it could be the refrigerant, the drainage, the electrics or the unit itself. Ninja Plumbers pins down the true fault first and prices the repair after, so you never pay for guesswork.',
    does: [
      'Little or no cooling from the unit',
      'Water dripping or leaking from the indoor unit',
      'Ice building up on the indoor unit or its pipes',
      'Outdoor unit that cuts out or will not start',
      'Electrical faults and breakers that trip',
      'Fault codes, flashing lights and remotes that do not respond',
      'Grinding, buzzing or rattling noises',
      'Leak detection and repair to F-Gas standards',
    ],
    guidance: [
      {
        title: 'A few quick checks before you book',
        body: 'First, make sure the unit has power and the remote is on cool, not fan, dry or heat. Then look at the outdoor unit: nothing should be blocking the air around it. A dead remote is not always the end of it, since many wall units have a small button under the front cover that starts them without one. If that button works, the fault is in the remote, not the system. These checks seem obvious, yet they explain a fair share of the calls we get saying "it has stopped working".',
      },
      {
        title: 'Indoor drips usually mean a drainage fault',
        body: 'When an indoor unit is dripping, the refrigerant is rarely to blame. The unit pulls moisture out of the air as it cools, and that water has to drain away. Usually the drip is a drain pipe blocked with dust and slime, a small condensate pump that has stopped, or a pipe that runs too flat. The fix is straightforward, but ignored for long enough it will mark a ceiling just as badly as any plumbing leak.',
      },
      {
        title: 'Ice on the unit means switch it off',
        body: 'Frost or ice on the indoor unit, or on the pipes outside, usually means too little air is passing over the cooling coil or too little refrigerant is in the system — a blocked filter, a slow leak or a struggling fan. Switch it off and let it thaw on its own; chipping at the ice damages the thin fins behind it. Frost on the outdoor unit while the system is heating in winter is different: that is normal, and the unit clears it itself.',
      },
      {
        title: 'Note the code before you reset anything',
        body: 'Most modern units show a fault as a code on the display or a pattern of blinking lights. Codes differ from make to make, so note the model as well. Then switch the unit off at its isolator switch for a few minutes and try again. If the same code comes straight back, leave it off and tell us what it says when you ring.',
      },
      {
        title: 'Do not keep resetting a unit that trips the breaker',
        body: 'Resetting the breaker again and again will not cure an electrical fault that keeps tripping the circuit. Repeated trips usually point to a fault that is getting worse, and running the unit on may leave you needing a replacement, not a repair.',
      },
      {
        title: 'A new noise is worth a call',
        body: 'A rattle is often something simple: a loose panel, a bracket that has worked free, or leaves caught in the outdoor fan. A scraping or whining that follows the fan can be a motor bearing starting to go. Clunks or grinding from the outdoor unit as it starts up are more serious. A fan motor replaced early is a smaller job than one left running until it seizes.',
      },
      {
        title: 'A system that needs regassing has a leak',
        body: 'Air conditioning is a sealed system. It does not use refrigerant up, so if the charge is low, some has escaped. Topping it up without finding the leak means paying for gas that will leak out again, releasing a potent greenhouse gas as it goes. The rules expect the leak to be repaired, not simply refilled, and by law only F-Gas registered engineers may do that work. A general handyman should not take it on, whatever they charge.',
      },
      {
        title: 'When a repair stops being worth it',
        body: 'Most faults on a reasonably modern system are worth fixing. The sums change with a failed compressor on an older unit, where the repair can come close to the cost of a new system, and with anything still running on R22 — an older refrigerant that can no longer legally be used to recharge a system. Either way, you get both prices and the decision stays with you. Our air conditioning replacement page covers that choice in more detail.',
      },
    ],
    aside: {
      title: 'Photograph the label on the outdoor unit',
      body: 'The rating plate on the outdoor unit gives the make, the model and the refrigerant type, including whether it runs on an older gas like R22. A photo of it on WhatsApp before the visit saves time on the day.',
    },
    faqs: [
      {
        q: 'My air conditioning has stopped cooling. What could it be?',
        a: 'Often a refrigerant leak or an outdoor unit fault, and sometimes simply a filter clogged badly enough to choke the airflow. A faulty temperature sensor can also make the unit ease off before the room has cooled. We rule out the simple causes before assuming the worst.',
      },
      {
        q: 'What makes an indoor unit leak water?',
        a: 'Nearly always the condensate drain — either blocked or not falling correctly — rather than anything to do with the refrigerant. Once we can actually see the drain run, it is usually a quick job to put right.',
      },
      {
        q: 'The outdoor unit is running but the room is not getting cooler. Why?',
        a: 'The outdoor fan can keep turning while the compressor, the part that does the actual cooling, fails to start. Low refrigerant or a badly blocked filter can look much the same. Tell us whether the outdoor fan is spinning and whether a code is showing.',
      },
      {
        q: 'Will you repair a system someone else installed?',
        a: 'Yes. Parts for older or less common makes can take longer to track down, and if that applies to yours we will say so when we price the repair.',
      },
      {
        q: 'How much does a refrigerant leak cost to fix?',
        a: 'That depends on where the leak sits and how easy the pipework is to reach. We locate and confirm the leak before quoting for the repair, never the reverse.',
      },
      {
        q: 'Should I keep using it until the engineer arrives?',
        a: 'Not if it is leaking, icing up, tripping the electrics or making a new grinding noise — running it with a fault like that tends to make the repair bigger. If it is simply cooling less well than it used to, it is usually fine to use until the visit.',
      },
    ],
  },
  {
    slug: 'air-conditioning-maintenance',
    title: 'Air Conditioning Maintenance',
    h1: 'Air conditioning maintenance in London',
    metaTitle: 'Air Conditioning Maintenance London | Ninja Plumbers',
    metaDescription:
      'Annual air conditioning maintenance in London: filter, refrigerant and F-Gas leak checks by registered F-Gas engineers, so it runs efficiently. 020 3576 5825.',
    eyebrow: 'Cooling',
    icon: 'ac',
    target: 'air conditioning maintenance london (480/mo) · air conditioning servicing london (210/mo)',
    summary:
      'A yearly visit to keep your system cooling efficiently and to catch a refrigerant leak before it turns into a breakdown.',
    intro:
      'Leave a system unserviced and it has to work harder for the same result, costs more to run and wears out sooner than it should. Each annual visit from Ninja Plumbers covers the filters, coils, drainage, electrics and refrigerant pressures. Larger systems also get the F-Gas leak check the law requires, which only F-Gas registered engineers may carry out, as ours are.',
    does: [
      'Filters replaced or cleaned',
      'Cleaning of the indoor coil, fan and drip tray',
      'Condensate drain tested and cleared',
      'Checks on refrigerant pressures and charge',
      'F-Gas leak checks where the law requires them',
      'Controls and electrical connections tested',
      'Outdoor condenser inspected and cleaned',
      'More frequent visits for shops, offices and heavy-use systems',
    ],
    guidance: [
      {
        title: 'F-Gas leak checks are the law, not an extra we sell',
        body: 'Under the F-Gas regulations, any system holding more than a set amount of refrigerant needs regular leak checks. We did not dream this up to sell a service plan. It is a legal duty, and only F-Gas registered engineers are allowed to carry it out.',
      },
      {
        title: 'Whether the leak-check rules cover your system',
        body: 'The threshold depends on how much refrigerant a system holds and how strong a greenhouse gas that refrigerant is, so there is no simple answer based on the size of the room. Many single-room home systems fall below it. Larger multi-splits and bigger commercial systems often do not, and the larger the system, the more often it must be checked. The legal duty, including keeping a record of each check, sits with whoever operates the system — usually the business, landlord or building owner. We will tell you where yours stands.',
      },
      {
        title: 'Weak cooling often comes down to a dirty filter',
        body: 'A filter that has quietly clogged up with dust forces the whole system to work harder for a worse result. It is one of the most common things a maintenance visit catches, and the easiest to put right. When a room that used to stay cool no longer does, this is often the whole story.',
      },
      {
        title: 'The filters are the part you can do yourself',
        body: 'On most wall-mounted units, the filters lift out from behind the front cover without tools. Switch the unit off first, rinse them in lukewarm water, let them dry fully and slide them back in. Every few weeks while the system is in regular use is typical, and the manual for your model will give the exact interval. Keep leaves and clutter away from the outdoor unit too. The coil, the fan and anything electrical are best left to an engineer.',
      },
      {
        title: 'A musty smell usually means the coil and drip tray',
        body: 'If the air smells damp or stale for the first few minutes after the unit starts, mould and bacteria are usually growing on the indoor coil, on the fan or in the drip tray, where water sits in the dark. Washing the filter will not reach any of that. Cleaning those parts properly is part of a maintenance visit, and it is not a job for a can of household spray pushed through the grille.',
      },
      {
        title: 'Book once a year, before the warm weather arrives',
        body: 'Book maintenance in spring, ahead of the first warm spell, and any fault is fixed while it is only an inconvenience, not while you need the cooling. Leave it until a heatwave and you join the queue of everyone else who left it late.',
      },
      {
        title: 'Busy systems need more than once a year',
        body: 'An office, shop or restaurant that runs its air conditioning every working day puts far more hours on it than a bedroom unit used for a few weeks each summer. Kitchens add grease, traffic adds grime to outdoor units on busy London roads, and a server or comms room often cannot afford a breakdown at all. Twice a year is common for systems like these, and more often where they run around the clock.',
      },
      {
        title: 'A service finds faults; fixing them is a separate job',
        body: 'A maintenance visit is a planned check and clean. When it turns up something more — a slow refrigerant leak, a fan motor starting to wear, a condensate pump near the end of its life — you are told what it is and what it would cost to put right, and nothing is done until you have agreed to it.',
      },
    ],
    aside: {
      title: 'Our engineers are F-Gas registered',
      body: 'Leak checks, pressure readings and any other work on the refrigerant side of a system are handled by engineers on the F-Gas register, in line with UK regulations. You have the right to see the certificate, and we will gladly show it to you.',
    },
    faqs: [
      {
        q: 'How often does air conditioning need servicing?',
        a: 'For a home system, once a year is normal. Shops, offices and systems that run for long hours usually need visits more often. Once a system holds more than a certain refrigerant charge, the law also requires periodic F-Gas leak checks, and a routine maintenance visit includes them.',
      },
      {
        q: 'What is included in a maintenance visit?',
        a: 'The filters, the indoor coil and drip tray, and the condensate drain; the refrigerant pressures; the controls and electrical wiring connections; and the outdoor condenser. Where the system needs one, an F-Gas leak check is included too.',
      },
      {
        q: 'Does maintenance prevent breakdowns?',
        a: 'It catches the usual culprits, such as a clogged filter, a drain starting to block or a slow leak of refrigerant, before they become a full breakdown. Even so, no servicing can guarantee that a system will never develop a fault.',
      },
      {
        q: 'Will you maintain a system another company fitted?',
        a: 'Yes, F-Gas leak checks included, whoever installed it. Keep any records from earlier visits to hand, because they show how the system has been cared for.',
      },
      {
        q: 'Is it worth servicing a system that seems to be working fine?',
        a: 'Usually, yes. Filters and coils clog gradually, so a system can lose efficiency and use more electricity for months before anyone notices the room is not as cool as it was. A service also catches small leaks and worn parts while they are cheap to deal with. We will not put a figure on the saving, because it depends on how neglected the system was.',
      },
      {
        q: 'Do you need access to the outdoor unit?',
        a: 'Yes, because a good part of the work happens there. If it sits on a flat roof, a balcony or in a shared yard behind a block of flats, please arrange access with the managing agent or neighbour before the visit, so the engineer is not left looking at it from a window.',
      },
    ],
  },
  {
    slug: 'air-conditioning-installation',
    title: 'Air Conditioning Installation',
    h1: 'Air conditioning installation in London',
    metaTitle: 'Air Con Installation London | Split Systems | Ninja Plumbers',
    metaDescription:
      'Split and multi-split air conditioning installed across London, sized and sited properly by F-Gas registered engineers. Call Ninja Plumbers 020 3576 5825.',
    eyebrow: 'Cooling',
    icon: 'ac',
    target: 'air conditioning installation london (1,300/mo) · air con installation (1,900/mo)',
    summary:
      'Single and multi-split air conditioning, correctly sized and positioned, and installed by F-Gas registered engineers.',
    intro:
      'One room needs a split system; several rooms can often share a multi-split running off a single outdoor condenser. Which one suits a property depends on how many rooms need cooling, where the outdoor unit can realistically sit, and what the walls and existing cabling will allow. And because refrigerant work is legally restricted, it is always F-Gas registered engineers handling that part — never left to chance.',
    does: [
      'Room-by-room survey and sizing',
      'A single split system for one room',
      'Multi-splits serving several rooms from one outdoor unit',
      'Positioning the outdoor condenser and planning pipe runs',
      'Proper condensate drainage, not a pipe run to whichever gutter is nearest',
      'Electrical supply and isolation for the new unit',
      'Pipework pressure tested and checked before first use',
      'Replacement of an existing system, like for like or upgraded',
    ],
    guidance: [
      {
        title: 'The survey comes before the price',
        body: 'A sensible quote needs someone standing in the rooms. At the survey we look at the size and use of each room, which way the windows face, where the outdoor unit could go, how the pipes would reach it, where the water can drain and whether the electrics can take a new circuit. The price comes from that, not from a floor area typed into a website.',
      },
      {
        title: 'Size it by the room, not just the square metres',
        body: 'Floor area is only the starting point. A south- or west-facing room with a lot of glass, a top-floor London flat under a hot roof, or a loft conversion with roof windows and sloping ceilings can need much more cooling than a shaded room of the same size downstairs. Kitchens and home offices full of screens add heat of their own. An undersized unit runs flat out and never catches up. An oversized one cools in short bursts and can leave the air feeling clammy.',
      },
      {
        title: 'Let the rooms, not only the budget, decide split or multi-split',
        body: 'For a single room, a simple split system is enough. With several rooms, it is often possible to run them all from one outdoor condenser, known as a multi-split. That looks tidier and usually costs less than separate systems, as long as the outdoor unit has a sensible spot and the pipe runs are workable. The drawback is that if the one outdoor unit fails, every room connected to it loses cooling together.',
      },
      {
        title: 'The outdoor unit needs a proper home',
        body: 'It needs clear air around it, a solid wall or base, and a sensible way for the pipes and drain to get back inside. It also needs to be reachable: a unit bolted high on a back wall with no safe access costs more to look after for the rest of its life. Wall brackets, flat roofs, balconies and ground-level bases can all work, within the manufacturer’s limits on pipe length and the height between the units.',
      },
      {
        title: 'Planning, leases and conservation areas',
        body: 'Whether an outdoor unit needs planning permission depends on the building and the borough. Flats do not have the same permitted development rights as houses, and listed buildings and conservation areas, of which London has a great many, are more tightly controlled again. Leaseholders usually need the freeholder’s written consent as well, because most leases keep the outside walls and roof under the freeholder’s control. Check with the council and the managing agent before the survey, not after the unit has been chosen.',
      },
      {
        title: 'Think about the neighbours before the unit goes up',
        body: 'An outdoor unit hums and blows air whenever it runs, and in a terrace or a row of back extensions that sound lands close to somebody else’s window. Siting it away from bedrooms, on anti-vibration mounts and out of corners that bounce sound around makes a real difference. Some London councils ask for a noise assessment with a planning application.',
      },
      {
        title: 'Plan where the condensate goes',
        body: 'Each indoor unit makes water while it cools. It needs a proper drain falling to a waste pipe, not a pipe dribbling onto a flat roof or next door’s wall. If there is no natural fall, a small pump lifts the water away, and that pump will need looking after as well. This gets settled at installation, not sorted out later.',
      },
      {
        title: 'The part you never see is the part that matters',
        body: 'Once the pipework is connected, it is pressure tested with nitrogen to prove it holds, then pumped down with a vacuum pump to clear out air and moisture before any refrigerant goes into it. Rushing that stage is how a new system ends up losing gas or failing early. It is also the part of the job that legally has to be done by an F-Gas registered engineer.',
      },
    ],
    aside: {
      title: 'Send us photos first',
      body: 'A few photos of each room, its windows, and the outside wall or roof where you picture the outdoor unit going let us spot obvious problems before anyone visits. WhatsApp is the easiest way to send them.',
    },
    faqs: [
      {
        q: 'Does an outdoor unit need planning permission?',
        a: 'Sometimes. It depends on the building, where the unit goes and the borough. Flats, listed buildings, conservation areas and units facing the street are the most likely to need consent, and your council’s planning department can confirm for your address.',
      },
      {
        q: 'How many rooms can a single outdoor unit serve?',
        a: 'As a rule of thumb, a multi-split runs anywhere from two to five indoor units off a single outdoor condenser, depending on the make and how much combined capacity the rooms need. We size the system to match the rooms, not to whatever happens to be sitting on the van that day.',
      },
      {
        q: 'Is your installation work certified?',
        a: 'By law, refrigerant work must be done by F-Gas registered engineers, and ours are. It is a requirement, not an optional extra, and we can show you the certification if you ask.',
      },
      {
        q: 'Can air conditioning heat as well as cool?',
        a: 'Most split systems sold now can, because the unit can run in reverse and move heat into the room rather than out of it. Whether it makes sense as your main heating depends on the room and what else heats the house, which we can talk through at the survey.',
      },
      {
        q: 'How much mess does an installation make?',
        a: 'For a single split, the main work is one hole through the outside wall for the pipes, cable and drain, usually hidden behind the indoor unit, and a straightforward job is often done in a day. Multi-splits take longer because pipework has to reach each room. Where every pipe will run is agreed with you before any drilling starts.',
      },
      {
        q: 'Can you look after the system once it is installed?',
        a: 'Yes. We offer annual maintenance and F-Gas leak checks as a separate service, set out on our air conditioning maintenance page, and you can book it whether or not we fitted your system.',
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
      'Worn-out or failing systems replaced, including older units whose refrigerant is no longer available for top-ups.',
    intro:
      'Sooner or later, a system that is old, unreliable or running on a refrigerant nobody may legally top up will have to go. First, though, ask a simpler question. Is replacement really needed, or could a repair do the job for far less? Ninja Plumbers gives you a straight answer either way, even if that means steering you away from the bigger job.',
    does: [
      'Old, failing and broken-down systems replaced',
      'An honest repair-or-replace comparison, with a price for each',
      'Systems still running R22 or another obsolete refrigerant',
      'Same-size swaps, bigger units and moves to multi-split',
      'Resizing a system that has always struggled to keep up',
      'Checking whether existing pipework can be reused',
      'Refrigerant recovered from the old system by F-Gas registered engineers',
      'Old indoor and outdoor units taken away for proper disposal',
    ],
    guidance: [
      {
        title: 'Signs a system is nearing the end',
        body: 'Repairs coming round more and more often. A compressor or main circuit board failing on a unit well past its first decade. Cooling that fades a little more every summer, even after servicing. Parts the manufacturer no longer makes. Any one of these is worth a conversation. Two or three together usually mean money spent on the old system would be better spent on a new one.',
      },
      {
        title: 'Often it is the old refrigerant that forces a replacement',
        body: 'A lot of older systems were filled with R22, and it has been years since that refrigerant could legally be used for top-ups. Once such a system springs a leak, no legal repair will keep it going on the same gas. Some old units can be converted to a substitute refrigerant, but on an ageing home system that rarely repays the cost. However good the rest of the unit is, replacement is usually the only practical choice.',
      },
      {
        title: 'Ask for the repair price as well',
        body: 'Wherever a repair is genuinely possible, its cost belongs next to the replacement quote. If you have only ever been given a price for a new system, it is fair to ask why. We price both and leave the choice with you.',
      },
      {
        title: 'What a modern inverter unit changes',
        body: 'Many older systems run the compressor at one speed: fully on until the room is cold, then off until it warms up again. Most current units use an inverter instead, which slows the compressor down and keeps it ticking over once the room is at temperature. That generally means less electricity for the same cooling, a steadier temperature and less noise. How much it saves depends on the old unit and how you use the new one, so we will not promise a figure.',
      },
      {
        title: 'Do not replace one sizing mistake with another',
        body: 'A system that has never quite kept a room cool, or a single split that stopped being enough once a loft was converted or an extension went on, deserves better than a replacement that falls short in exactly the same way. This is the moment to size it properly, or move up to a multi-split, rather than living with the same warm room for another decade.',
      },
      {
        title: 'Existing pipework can sometimes be reused',
        body: 'Reusing the copper pipes already in the wall keeps the job smaller and the decoration untouched, and sometimes it is possible. Often it is not. The pipe sizes have to suit the new unit, and the pipes must be clean inside and hold pressure when tested. Pipework from an old R22 system was put in for lower working pressures than modern refrigerants use, and carries traces of an oil they do not mix with. The manufacturer’s requirements settle the question, and you will know which way it goes before we quote, not afterwards.',
      },
      {
        title: 'The old refrigerant is recovered, not released',
        body: 'Before an old system comes off the wall, the refrigerant inside it is pumped into a recovery cylinder by an F-Gas registered engineer and sent on to be recycled or destroyed. Letting it out into the air is illegal. The units themselves count as electrical waste and go for proper disposal, not into a skip.',
      },
      {
        title: 'Plan the swap before the hot weather',
        body: 'Replacing a system means a spell without cooling between the old one coming out and the new one going in, and the hardest time to arrange that is the first heatwave of the summer. If you already know your system is on its last legs, autumn, winter or early spring is the easier time to do it.',
      },
    ],
    aside: {
      title: 'We will say if it can be saved',
      body: 'If your system is worth repairing, that is what we will recommend, and we will show you why. You get the same straight answer whether the job turns out to be a small repair or a full replacement.',
    },
    faqs: [
      {
        q: 'How can I tell whether my air conditioning needs replacing or repairing?',
        a: 'Look at its age, what has actually failed, and whether its refrigerant can still legally be topped up. A leaking system on an obsolete refrigerant will usually need replacing, while most other faults deserve a repair first.',
      },
      {
        q: 'Can I get a price for repairing it as well?',
        a: 'Yes, as long as a repair is genuinely possible. Weighing up both prices is the only fair way to decide.',
      },
      {
        q: 'When I replace, can I move up to a bigger or multi-split system?',
        a: 'Yes, and replacement is the right moment for it, above all if the old system never really kept the room cool or you want more rooms running off one outdoor unit. Ask Ninja Plumbers to size it properly instead of copying what was there before.',
      },
      {
        q: 'Will you take the old unit away?',
        a: 'Yes. The refrigerant is recovered first, then the old indoor and outdoor units are taken away and disposed of properly as part of the job.',
      },
      {
        q: 'How can I tell if my system uses R22?',
        a: 'Look for the label on the outside unit, which lists the refrigerant type. If it says R22 or HCFC-22, the system was almost certainly made before R22 was phased out of new equipment in the early 2000s. If the label is missing, a photo of the unit with the make and model often tells us.',
      },
      {
        q: 'If the new unit goes in the same place, do I need consent again?',
        a: 'Not always, but it is worth checking. A straight swap in the same spot is usually simpler than a first installation. If the new outdoor unit is larger, moves to a different wall or needs new holes through the outside of the building, leaseholders should ask the freeholder first, and anyone in a listed building or conservation area should check with the council.',
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
    target: 'blocked toilet (4,400/mo) · blocked toilet london (480/mo) · toilet not flushing (1,600/mo — now owned by toilet-repair)',
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
    metaTitle: 'Shower Installation London | Mixer Showers | Ninja Plumbers',
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
  // ---- Added Sept 2026: problem-led repair pages (Semrush UK, measured) ----
  {
    slug: 'water-through-ceiling',
    title: 'Leaking Ceiling',
    h1: 'Water coming through the ceiling?',
    metaTitle: 'Leaking Ceiling in London? What to Do | Ninja Plumbers',
    metaDescription:
      'Water coming through the ceiling? Turn the water off, and the power if it is near lights. Then we find the source and stop it. Call 020 3576 5825.',
    eyebrow: 'Ceiling leaks',
    icon: 'emergency',
    target: 'leaking ceiling (720/mo) · water coming through ceiling (590/mo) · water leaking through ceiling (480/mo) · ceiling leak repair (210/mo) — mostly searched mid-incident or just after one',
    summary:
      'Water dripping or pouring through a ceiling. What to do first, then the source found and stopped — in your home or the flat above.',
    intro:
      'Water running out of a light fitting. A brown stain suddenly wet to the touch. A ceiling sagging under whatever is sitting above it. Deal with the next five minutes first: water off at the stopcock, power off if it is anywhere near electrics, and everyone out from under the wet patch. Then Ninja Plumbers finds where the water is really coming from and stops it there — or tells you plainly when it is a roofer you need, not a plumber.',
    does: [
      'Water dripping or pouring through a ceiling',
      'Supply shut off and the leak isolated first',
      'Leaking showers, baths, toilets and wastes on the floor above',
      'Failed joints and valves in the ceiling void',
      'Overflowing cisterns, loft tanks and cylinders',
      'Leaks from a neighbour’s flat, traced with their agreement',
      'A written note of what failed, for insurers and agents',
    ],
    guidance: [
      {
        title: 'The next five minutes',
        body: 'Shut the water off at the stopcock. If the water is near a light, a ceiling rose or a socket, switch off the main switch on the consumer unit without touching anything wet — and if the consumer unit itself is getting wet, leave it and ring us. Put a bucket and towels under the drip and move what you can out of the room. If the water is coming from a flat above, your stopcock will not stop it: go and knock on their door.',
      },
      {
        title: 'If the ceiling is bulging',
        body: 'A ceiling holding water can give way without warning, and Victorian lath and plaster comes down in heavy pieces. Keep everyone out from underneath. A small hole at the lowest point of the bulge lets the water drain into a bucket rather than bringing the ceiling down — but only with the power off, from the side with a long-handled tool, never from a chair or ladder beneath it. If the bulge is near a light or already cracking, shut the door and call; out of hours, that is our emergency plumbing line.',
      },
      {
        title: 'Finding where it is coming from',
        body: 'Water shows up at the lowest point it can find — a light fitting, a plasterboard joint — often a metre or more from where it got in. Under a bathroom, the usual causes are the seal round a shower tray or bath, a waste, or the connector behind the toilet. Elsewhere it is often a joint or radiator valve under the floorboards, or an overflowing cistern, tank or cylinder. A stain with no water coming through is a hidden leak, which our leak detection page deals with; a burst pipe is covered on pipe repair.',
      },
      {
        title: 'Notice when it drips',
        body: 'Timing is the best clue you can give us. Only when somebody showers upstairs points at the tray, seal or waste. Only after the toilet above is flushed points at its pan connector or cistern. Day and night suggests a pipe that is always under pressure. Only in heavy rain means water is getting in from outside — a slipped slate, failed flashing, a flat roof — and that is a roofer’s job. Gutters and downpipes are the exception: see our gutter repair page.',
      },
      {
        title: 'When the leak is in the flat upstairs',
        body: 'In a London house split into flats, your ceiling is somebody else’s floor. If the leak is in their bathroom or pipework, it has to be fixed from their side, and nobody can go in without them or whoever holds a key — if they are away, ring the managing agent or freeholder. Photograph everything and tell your insurer early. Buildings insurance in a leasehold block is usually the freeholder’s; your contents are on your own policy.',
      },
      {
        title: 'The repair, and the ceiling afterwards',
        body: 'Most ceiling leaks come from something small — a perished seal, a loose waste nut, a slipped pan connector — and where we can, we reach it from above, through a floorboard or a bath panel, rather than cutting into a ceiling that might still be saved. Ceilings themselves are not our trade. A wet one has to dry out fully before it is repaired or painted, and we will tell you what you need next: a plasterer, a drying specialist or a roofer.',
      },
    ],
    aside: {
      title: 'Photograph it before you mop up',
      body: 'Photos and a short video of the ceiling, the drip and anything that got wet, taken before the clean-up starts, are what an insurer or managing agent will ask to see.',
    },
    faqs: [
      {
        q: 'Is water through the ceiling an emergency?',
        a: 'If it is dripping now, spreading, or the ceiling is sagging, treat it as one and ring us — emergency callout runs 24/7. A dry stain that has stopped growing can usually be booked in as a normal job.',
      },
      {
        q: 'Can I turn the lights back on?',
        a: 'Not in that room until the fitting and the ceiling round it have dried out and been checked by an electrician, which we can do once the leak is fixed. Water inside a light fitting is not something to test with the switch.',
      },
      {
        q: 'The leak is from upstairs and nobody is answering. What now?',
        a: 'Try the managing agent or freeholder, who may have an out-of-hours number or a key. In some converted houses one stopcock feeds every flat, so turning it off cuts everyone’s water — do it only if the damage demands it, and tell the neighbours.',
      },
      {
        q: 'Who pays if the leak came from the flat above?',
        a: 'Usually whoever owns the fitting that failed pays to fix it, and the damage goes through insurance. Leases differ, so check yours or ask the managing agent. We can put in writing what failed and where.',
      },
      {
        q: 'How long does a wet ceiling take to dry?',
        a: 'It depends how much water went in and what the ceiling is made of. Plasterboard after a short soaking can dry in days; lath and plaster that held water for hours takes much longer. A moisture reading says when it is ready, not the look of it.',
      },
      {
        q: 'Will you repair the ceiling afterwards?',
        a: 'No. We stop the water and fix what caused it, then tell you honestly what the ceiling needs and who to call — usually a plasterer, once it has properly dried.',
      },
    ],
  },

  {
    slug: 'toilet-repair',
    title: 'Toilet Repair',
    h1: 'Toilet repair in London',
    metaTitle: 'Toilet Repair London | Leaks & Flush Faults | Ninja Plumbers',
    metaDescription:
      'Toilet not flushing, running on or leaking at the base? Ninja Plumbers repairs flush valves, fill valves, seals and concealed cisterns. Call 020 3576 5825.',
    eyebrow: 'Toilets and cisterns',
    icon: 'bathroom',
    target: 'toilet not flushing (1,600/mo — now owned by toilet-repair) · leaking toilet (880/mo) · toilet repair (720/mo) · toilet leaking (720/mo) — many searchers want to try a fix themselves first',
    summary:
      'Toilets that will not flush, keep running, fill slowly or leak onto the floor. Usually one worn part, replaced without needing a new toilet.',
    intro:
      'A flush button that does nothing. A cistern that hisses and refills through the night. A puddle by the pan that is back every morning however often it is wiped up. Almost every toilet fault comes down to a handful of inexpensive parts in the cistern or at the joints. The checks below are safe to try yourself, and a few faults can be put right on the spot. If they do not sort it, Ninja Plumbers will.',
    does: [
      'Toilets that will not flush, or take several goes',
      'Cisterns that keep running or refilling on their own',
      'Slow filling and weak flushes',
      'Leaks at the base of the pan',
      'Leaks between the cistern and the pan',
      'Flush valves, fill valves, siphons and buttons replaced',
      'Concealed cisterns and wall-hung toilets',
    ],
    guidance: [
      {
        title: 'Lever or button: two different mechanisms',
        body: 'An older toilet with a lever usually flushes with a siphon: the lever lifts a thin plastic diaphragm, and when that splits you end up pumping the handle. A push-button toilet uses a drop valve instead, lifted by a rod or cable from the button. Take the lid off and flush with it open. A link that has come unhooked or a rod that has slipped is often the whole fault, and it clips back in a minute.',
      },
      {
        title: 'A cistern that will not stop running',
        body: 'With the lid off, look at the water level. Up at the top of the overflow means the fill valve is not shutting off — the float may need setting lower, or the valve has worn. Below the overflow but still trickling into the pan means the flush valve seal is letting water past. To check, add a few drops of food colouring to the cistern and leave it half an hour. Colour in the pan means the seal has gone.',
      },
      {
        title: 'Slow to fill, weak to flush',
        body: 'First check the isolation valve on the pipe to the cistern: on most, a screwdriver slot in line with the pipe means open, and one left half-closed makes the cistern crawl. After that, limescale is the usual suspect in London. It furs up the fill valve and its filter, and blocks the flushing holes under the rim. A weak flush can also be a water level set too low.',
      },
      {
        title: 'Water round the base of the pan',
        body: 'Dry everything with kitchen roll and watch where it comes back. Droplets all over the cistern on a cold day are condensation, not a leak. Water only after flushing usually means the pan connector — the sleeve joining the pan to the soil pipe — or the joint under the cistern. Water whether anyone flushes or not points at the supply pipe, the valve, or a hairline crack in the pan. In a flat, a slow leak here ends up on the ceiling downstairs.',
      },
      {
        title: 'Leaking between cistern and pan',
        body: 'On a close-coupled toilet the cistern sits directly on the back of the pan, sealed by a large foam or rubber washer and held by two bolts with washers of their own. When those perish, it drips from under the back with every flush. Tightening the bolts harder is tempting, and it is how pans crack. The proper fix is to drain the cistern, lift it off and renew the washers.',
      },
      {
        title: 'Concealed cisterns and wall-hung toilets',
        body: 'Many newer London flats and refurbished conversions hide the cistern behind a panel, with only a flush plate showing. On most, the plate lifts off and the valves come out through the opening behind it, so nothing needs breaking. Parts vary by frame maker, so a photo of the plate helps. If a cistern has been tiled in with no access at all, we will explain what is needed before touching anything.',
      },
      {
        title: 'When it is not a repair',
        body: 'If the water rises in the pan instead of flushing away, the toilet is blocked rather than broken, and our blocked toilet page covers that. A cracked pan or cistern cannot be repaired properly, and nor can a design nobody makes parts for any more. Replacing the whole toilet is covered on our toilet installation page, and we will be honest about which side of that line yours is on.',
      },
    ],
    aside: {
      title: 'Photograph the inside of the cistern',
      body: 'Lift the lid, take a picture of what is inside plus one of the button or lever, and send them on WhatsApp. Valves differ between makes, and a clear photo lets the engineer arrive with the right part.',
    },
    faqs: [
      {
        q: 'Is it safe to put my hand in the cistern?',
        a: 'Yes. It is clean supply water that has never been near the pan. Turn the isolation valve off and flush first, so the cistern is empty while you look.',
      },
      {
        q: 'My toilet only flushes if I pump the handle.',
        a: 'That is the classic sign of a split siphon diaphragm. On many close-coupled toilets the cistern has to come off to reach it, and fitting a two-part siphon at the same time makes any future change much easier.',
      },
      {
        q: 'Can I fix a running toilet myself?',
        a: 'Often. Setting the float lower so the water stops below the overflow is simple, and most handy people can swap a fill valve. Changing a flush valve on a close-coupled toilet usually means taking the cistern off, which is where new leaks tend to get made.',
      },
      {
        q: 'Is an old toilet worth repairing?',
        a: 'Nearly always, if the pan and cistern are not cracked. Most parts are standard and fit a wide range of toilets. Replacement makes sense for cracked ceramics, or unusual designs with no parts left.',
      },
      {
        q: 'Can you repair a wall-hung toilet without taking the wall apart?',
        a: 'Usually, yes. Most concealed cisterns are serviced through the opening behind the flush plate. If yours needs more access, we will tell you before anything is opened up.',
      },
      {
        q: 'The water rises when I flush and will not go down.',
        a: 'That is a blockage, not a fault with the flush. Stop flushing, and see our blocked toilet page for what to do next.',
      },
    ],
  },

  {
    slug: 'leak-repair',
    title: 'Leak Repair',
    h1: 'Water leak repair in London',
    metaTitle: 'Water Leak Repair London | Joints & Valves | Ninja Plumbers',
    metaDescription:
      'Dripping joint under the sink, weeping radiator valve or leaking washing machine hose? Ninja Plumbers repairs visible leaks in London. Call 020 3576 5825.',
    eyebrow: 'Visible leaks',
    icon: 'leak',
    target: 'water leak repair (880/mo)',
    summary:
      'Leaks you can see — dripping joints, weeping valves, perished hoses, overflows running outside — isolated, repaired and checked properly afterwards.',
    intro:
      'Some leaks are easy to see and just as easy to put off: a joint under the sink leaving a damp ring in the cupboard, a radiator valve with a green crust round it, an overflow dribbling down the outside wall. They rarely get better on their own. Ninja Plumbers isolates the supply, works out what kind of joint or fitting has failed, repairs it properly, and watches it under full pressure before the cupboard is packed back up.',
    does: [
      'Dripping joints under sinks, basins and baths',
      'Weeping stopcocks, isolation valves and gate valves',
      'Radiator valves and radiator tails',
      'Washing machine and dishwasher hoses and valves',
      'Compression, soldered and push-fit joints',
      'Wastes and traps leaking under sinks and baths',
      'Overflow pipes dripping outside the house',
    ],
    guidance: [
      {
        title: 'Turn it off at the nearest valve',
        body: 'Most sinks, toilets and appliances have a small valve on the pipe feeding them, and closing it stops the leak without cutting water to the whole house. On a radiator, close both valves, counting the turns on the one under the plastic cap so it can be reset. If there is no local valve, use the stopcock. Then dry the pipework, because water runs along a pipe and drips from its lowest point, not from the leaking joint.',
      },
      {
        title: 'The fix depends on the joint',
        body: 'A compression fitting — a nut squeezing a brass ring called an olive onto the pipe — can sometimes be cured with a small nip, but a crushed olive has to be replaced. A soldered joint cannot be tightened; the pipe is drained and the joint remade. A push-fit joint usually leaks because the pipe was not pushed fully home or its end was scored, so it is cut back and remade. Threaded connections need fresh sealing or a new fibre washer.',
      },
      {
        title: 'Leaks that only happen when water drains',
        body: 'If the cupboard only gets wet when the sink empties, the leak is on the waste, not the supply. Fill the bowl, pull the plug and watch. Plastic trap nuts should be firm by hand, and the washers inside flatten and harden with age. A cracked trap, or a waste knocked out of line by whatever is stored in the cupboard, is just as common.',
      },
      {
        title: 'Washing machines and dishwashers',
        body: 'Fill hoses perish from the inside, and one that is stiff, cracked or swollen near the ends should be replaced before it splits. The valve it screws onto can weep at the spindle too. If water appears only when the machine empties, look at the waste hose and the standpipe or trap it runs into. Moving or adding connections is covered on our washing machine plumbing page.',
      },
      {
        title: 'Radiator valves',
        body: 'A radiator valve weeps either from the spindle under the head or from the nut joining it to the radiator. The first can sometimes be cured by gently tightening the gland nut; the second usually means draining the radiator and remaking the joint or fitting a new valve. Heating water is black, so floors get covered first. And every weep on a sealed system costs pressure — a boiler that keeps needing topping up is a reason to check the valves.',
      },
      {
        title: 'An overflow pipe dripping outside',
        body: 'A small pipe through an outside wall is an overflow. It drips when a float valve inside has stopped shutting off — usually on a toilet cistern, a cold water tank in the loft or the small heating tank beside it. Follow the pipe back to find which. If the water is warm, it is coming from the heating or hot water side and wants looking at soon; on an unvented cylinder it can mean a safety valve is opening.',
      },
      {
        title: 'What we check before we leave',
        body: 'The water goes back on slowly, and the repaired joint is dried and watched at full pressure. We look at the fittings either side, since a valve that has started weeping often has a neighbour of the same age not far behind, and at what the leak has soaked: a swollen cupboard base, damp boards, a mark on the ceiling below. If water has already come through downstairs, our water through the ceiling page covers what to do first.',
      },
    ],
    aside: {
      title: 'Cannot see where it is coming from?',
      body: 'This page is for leaks you can see and put a finger on. A damp patch, a stain that keeps growing or a water meter that turns with everything off means the leak is hidden, and finding it comes first — that is our leak detection page.',
    },
    faqs: [
      {
        q: 'Can I just tighten the nut myself?',
        a: 'On a compression fitting, a small nip — a quarter turn at most, holding the fitting still with a second spanner — sometimes stops a weep. If it does not, stop there: more force crushes the olive and turns a drip into a proper leak. Do not try it on push-fit or soldered joints.',
      },
      {
        q: 'Is a slow drip worth calling someone out for?',
        a: 'Yes, though not as an emergency. A drip on a supply pipe runs day and night, and in a cupboard it rots the base and feeds mould long before anyone sees a puddle.',
      },
      {
        q: 'Will the water be off to the whole house?',
        a: 'Only if there is no working valve near the leak. Where one is missing or seized, we can fit a new one while we are there, which makes the next repair simpler.',
      },
      {
        q: 'The pipe itself has split. Is that this page?',
        a: 'No. A split or burst pipe, often from frost or corrosion, is covered on our pipe repair page. If water is pouring out right now, turn the stopcock off and see our emergency plumbing page.',
      },
      {
        q: 'What about a dripping tap or a leaking toilet?',
        a: 'Both have their own pages, because the fault is usually a part inside the fitting rather than a joint on the pipework. See tap repair and replacement, and toilet repair.',
      },
      {
        q: 'Do you repair leaks on the heating as well?',
        a: 'Yes — radiator valves, radiator tails and visible joints on heating pipework. A leak from inside the boiler casing is a boiler repair, and that needs one of our Gas Safe registered engineers.',
      },
    ],
  },
  {
    slug: 'electrical-repairs',
    title: 'Electrical Repairs',
    h1: 'Electrical repairs and fault finding in London',
    metaTitle: 'Electrical Repairs London | Fault Finding | Ninja Plumbers',
    metaDescription:
      'Electrical faults found and fixed across London: tripping circuits, dead sockets, lighting and extractor fans. Price agreed first. Call 020 3576 5825.',
    eyebrow: 'Electrical',
    icon: 'electrical',
    target: 'electrical repairs london (390/mo) · electrical fault finding london (140/mo) · electrician london (2,400/mo, owned by /electrical)',
    summary:
      'Tripping circuits, dead sockets, faulty lighting and extractor fans, traced and fixed with the price agreed first.',
    intro:
      'A circuit that keeps tripping, a socket that has gone dead, lights that flicker or a fan that has stopped: most electrical faults in a home come down to one failing part or connection, and finding it is the skilled bit. Our electricians trace the fault properly, explain what they found, and agree the price with you before the repair. Because we are plumbers as well, we are used to the jobs where water and electrics meet, from electric showers to a leak that has reached the wiring.',
    does: [
      'Circuits that keep tripping the consumer unit',
      'Dead, loose or damaged sockets and switches',
      'Flickering or failed lighting',
      'Extractor fans in bathrooms and kitchens',
      'Electric shower and appliance circuits',
      'Electrical checks after a leak',
    ],
    guidance: [
      {
        title: 'When the power keeps tripping',
        body: 'A trip switch or RCD that keeps going off is doing its job: it has detected a fault. Resist the urge to keep resetting it. Unplug everything on that circuit, reset it once, then plug things back in one at a time. If one appliance trips it every time, the fault is in that appliance. If it trips with nothing plugged in, the fault is in the fixed wiring and needs an electrician.',
      },
      {
        title: 'After a leak',
        body: 'If water has reached a light fitting, a socket or the consumer unit, turn the power off at the consumer unit, keep it off, and do not use anything in that area until the wiring has dried out and been checked. Because we do both trades, we can deal with the leak and the electrical check on the same job.',
      },
      {
        title: 'Signs worth taking seriously',
        body: 'A burning smell, scorch marks around a socket, sockets or switches that feel warm, buzzing from the consumer unit, or lights that dim whenever something else switches on. If it is safe to do so, switch off at the consumer unit and call us.',
      },
      {
        title: 'Extractor fans and condensation',
        body: 'A bathroom or kitchen fan that stops the moment the light goes off, or barely moves any air, is one of the most common causes of condensation and black mould in London flats. Replacing it with a fan that has a run-on timer or a humidity sensor is a small electrical job that makes a real difference.',
      },
    ],
    aside: {
      title: 'Know where your consumer unit is',
      body: 'Find your consumer unit (the fuse box) now and keep it easy to reach. In a fault or a leak, switching off there is the quickest way to make things safe.',
    },
    faqs: [
      {
        q: 'Do you do electrical work as well as plumbing?',
        a: 'Yes. Ninja Plumbers carries out electrical work alongside plumbing, heating and drainage. That is useful on jobs that need both, such as an electric shower, a new bathroom, or water that has reached the wiring.',
      },
      {
        q: 'My electrics keep tripping. Is it dangerous?',
        a: 'The trip is a safety device doing its job, so the circuit is protected. The fault behind it still needs finding. If it trips with nothing plugged in, or you notice a burning smell or scorch marks, leave that circuit off and call us.',
      },
      {
        q: 'Can you replace or fit an extractor fan?',
        a: 'Yes. We replace and fit extractor fans in bathrooms and kitchens, including fans with a timer or humidity sensor that keep running after you leave the room, which is what actually clears the moisture.',
      },
      {
        q: 'Can you do the electrics for a new bathroom or kitchen?',
        a: 'Yes. We can handle the plumbing and the electrical side of a bathroom or kitchen together, so you are not coordinating separate trades and waiting on one to finish before the other starts.',
      },
      {
        q: 'How is the price worked out?',
        a: 'For a fault, the engineer finds the cause first and then gives you a price for the repair before starting. For planned work such as new sockets or a fan, we can often give you an idea from a description and photos, then confirm the price on site before any work begins.',
      },
    ],
  },
  {
    slug: 'emergency-electrician',
    title: 'Emergency Electrician',
    h1: 'Emergency electrician in London',
    metaTitle: '24-Hour Emergency Electrician London | Ninja Plumbers',
    metaDescription:
      'Emergency electrician across London, day and night: power loss, trips that will not reset, burning smells and water in the electrics. Call 020 3576 5825.',
    eyebrow: '24/7 electrical callout',
    icon: 'electrical',
    target: 'emergency electrician london (1,600/mo) · 24 hour electrician london (260/mo) · emergency electrician near me (12,100/mo)',
    summary:
      'Power loss, trips that will not reset, burning smells and water in the electrics. We take calls around the clock.',
    intro:
      'Half the house has lost power and the trip switch will not stay up. A socket smells of burning. Water from the flat above is running near a light fitting. Electrical emergencies do not wait for office hours, and neither does our booking line. Ring us and we will tell you how to make things safe while we get an electrician moving.',
    does: [
      'Total or partial loss of power',
      'Trip switches and RCDs that will not reset',
      'Burning smells, scorching and overheating sockets',
      'Water in light fittings, sockets or the consumer unit',
      'Damaged cables and exposed wiring',
      'Out of hours, weekends and bank holidays',
    ],
    guidance: [
      {
        title: 'The whole house has lost power',
        body: 'Check whether your neighbours have power too. If the street is out, it is a power cut rather than a fault in your home: call 105, the free national power cut number, and they will tell you what is happening. If it is only your home, look at the consumer unit to see whether the main switch or an RCD has tripped.',
      },
      {
        title: 'A trip switch will not stay on',
        body: 'Switch off or unplug everything on that circuit and try it once more. If it holds, add things back one at a time to find the culprit. If it trips straight away with nothing connected, the fault is in the wiring. Leave it off and call us rather than forcing it back on.',
      },
      {
        title: 'You smell burning or see scorch marks',
        body: 'Stop using the socket or switch and, if you can reach the consumer unit safely, switch that circuit off. Do not touch anything that is hot, sparking or discoloured. If there is smoke or fire, get everyone out and call 999.',
      },
      {
        title: 'Water has reached the electrics',
        body: 'If the consumer unit and the floor in front of it are dry, switch off at the main switch. If they are wet, do not touch it and keep everyone out of the area. Then call. Because we are plumbers too, we can stop the leak and make the electrics safe on the same visit.',
      },
    ],
    aside: {
      title: 'Keep a torch by the consumer unit',
      body: 'Keep a torch where you can find it in the dark, and know which switch on the consumer unit is the main switch. It makes the first few minutes of any electrical emergency much easier.',
    },
    faqs: [
      {
        q: 'Do you really have electricians available at night?',
        a: 'Yes. Our emergency callout is available 24/7 for electrical faults as well as plumbing. Outside office hours the same number goes straight to whoever is on call.',
      },
      {
        q: 'How do I know if it is an emergency?',
        a: 'Treat it as one if there is a burning smell, scorching, sparking, water near the electrics, exposed wiring, or no power to heating, a fridge or medical equipment someone depends on. If a single light has stopped working, it can usually wait for a normal appointment.',
      },
      {
        q: 'Is it a power cut or a fault in my home?',
        a: 'If your neighbours are also without power, it is almost certainly a power cut: call 105 for updates. If only your home is affected, check the consumer unit for a tripped switch before calling us.',
      },
      {
        q: 'Will you fix it on the first visit?',
        a: 'The first priority is making it safe. Many faults are repaired there and then. Where a part is needed or the job is bigger, the electrician makes the installation safe, explains what is needed and agrees the price with you before carrying on.',
      },
    ],
  },
  {
    slug: 'eicr',
    title: 'EICR Certificates',
    h1: 'EICR and landlord electrical safety certificates in London',
    metaTitle: 'EICR Certificate London | Landlords | Ninja Plumbers',
    metaDescription:
      'Electrical Installation Condition Reports for London landlords, homeowners and buyers. Codes explained, remedial work priced first. Call 020 3576 5825.',
    eyebrow: 'Electrical safety',
    icon: 'certificate',
    target: 'eicr london (1,300/mo) · eicr certificate london (590/mo)',
    summary:
      'Electrical Installation Condition Reports for landlords, homeowners and buyers, with any remedial work priced separately.',
    intro:
      'An Electrical Installation Condition Report, or EICR, is a thorough inspection and test of the fixed wiring in a property: the consumer unit, the circuits, sockets, switches and fixed fittings. Private landlords in England need one at least every five years, and one is well worth having when you buy a home or when the wiring has not been looked at for years. Our electricians carry out the inspection, explain the report in plain English, and price any remedial work separately so you can decide what happens next.',
    does: [
      'EICRs for private landlords and letting agents',
      'Reports for homeowners and buyers',
      'Testing of every circuit, the consumer unit and the earthing',
      'Codes and observations explained in plain English',
      'Remedial work priced separately',
      'Written confirmation once remedial work is done',
    ],
    guidance: [
      {
        title: 'What the law asks of landlords',
        body: 'Under the Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020, private landlords must have the electrical installation inspected and tested at least every five years by a qualified person. Tenants must get a copy within 28 days of the inspection, new tenants before they move in, and the local council within seven days if it asks. Any remedial work the report calls for must be done within 28 days, or sooner if the report says so.',
      },
      {
        title: 'What the codes mean',
        body: 'C1 means danger is present and needs putting right immediately. C2 means potentially dangerous and needs urgent attention. FI means further investigation is needed. Any of these makes the report unsatisfactory. C3 means an improvement is recommended, but on its own it is not a reason for the report to fail.',
      },
      {
        title: 'On the day',
        body: 'How long the inspection takes depends on the size of the property and the number of circuits. The power has to be off for parts of it, so expect some time without electricity. The electrician needs to reach the consumer unit, every room and any outbuildings with power, so let tenants know in advance.',
      },
      {
        title: 'Homeowners and buyers',
        body: 'There is no legal deadline for owner-occupiers, but the usual recommendation is an inspection every ten years and whenever you buy a home. Older wiring, a fuse box without RCD protection, or a history of DIY alterations are all good reasons not to wait that long.',
      },
    ],
    aside: {
      title: 'Keep every report',
      body: 'Keep each EICR and any written confirmation of remedial work together. The council can ask to see them, and the next electrician will want to know what was found last time.',
    },
    faqs: [
      {
        q: 'How often do I need an EICR as a landlord?',
        a: 'At least every five years, or sooner if the last report recommends a shorter interval. A new report is also sensible after major electrical work.',
      },
      {
        q: 'What happens if the report is unsatisfactory?',
        a: 'The report lists the items coded C1, C2 or FI, and those must be put right within 28 days, or sooner if the report says so. We price the remedial work separately, carry it out if you want us to, and give you written confirmation once it is done, which you then pass on to your tenants and to the council if it asks.',
      },
      {
        q: 'Is an EICR the same as a gas safety certificate?',
        a: 'No. The gas safety record covers gas appliances and must be renewed every year. The EICR covers the fixed electrical installation and lasts up to five years for a rented home. Landlords need both, and we can arrange the two together.',
      },
      {
        q: 'Does an EICR test my appliances?',
        a: 'No. It covers the fixed installation: the wiring, consumer unit, sockets, switches and fixed fittings. Portable appliances such as kettles and lamps are checked separately, by PAT testing.',
      },
    ],
  },
  {
    slug: 'consumer-unit-replacement',
    title: 'Fuse Box Replacement',
    h1: 'Fuse box and consumer unit replacement in London',
    metaTitle: 'Fuse Box & Consumer Unit Replacement London | Ninja Plumbers',
    metaDescription:
      'Old fuse boxes replaced with modern consumer units with RCD protection across London. Tested, certified and notified, price agreed first. Call 020 3576 5825.',
    eyebrow: 'Consumer units',
    icon: 'fusebox',
    target: 'fuse box replacement london (70/mo) · consumer unit replacement london (30/mo)',
    summary:
      'Old fuse boxes swapped for modern consumer units with RCD protection, tested, certified and notified for you.',
    intro:
      'The consumer unit, or fuse box, is where every circuit in your home is protected. An old one with wire fuses and no RCDs does very little to protect people from an electric shock, and plastic units are no longer allowed for new installations in homes. Our electricians test your circuits, replace the unit with a modern metal-cased one, and handle the certificate and the Building Regulations notification, with the price agreed before any work starts.',
    does: [
      'Old rewireable fuse boxes replaced',
      'Modern consumer units with RCD protection',
      'Surge protection where the regulations call for it',
      'Every circuit tested before and after the change',
      'Electrical Installation Certificate on completion',
      'Building Regulations notification handled for you',
    ],
    guidance: [
      {
        title: 'Signs your fuse box is due for replacement',
        body: 'Fuses with fuse wire, a wooden backboard, no RCD protection, trips you cannot explain, or scorch marks and a warm smell around the unit. Any one of these is worth an electrician looking at. If you are not sure what you have, send us a photo of it.',
      },
      {
        title: 'Why modern units are metal',
        body: 'Since 2016 the wiring regulations have required consumer units in homes to have an enclosure made of non-combustible material, which in practice means steel. It keeps a fault inside the box from spreading, which matters most where the unit sits under the stairs, the usual escape route.',
      },
      {
        title: 'Testing comes first',
        body: 'A new consumer unit only protects properly if the circuits it feeds are sound. The electrician tests the existing circuits before the change, because RCDs will trip on faults an old fuse box ignored. If a circuit has a fault, we tell you and price the fix before going further.',
      },
      {
        title: 'The paperwork',
        body: 'Replacing a consumer unit is notifiable work under Part P of the Building Regulations. As registered electricians we notify it for you, and you receive an Electrical Installation Certificate and a Building Regulations compliance certificate. Keep both with the house documents, because a buyer’s solicitor will ask for them.',
      },
    ],
    aside: {
      title: 'Plan for time without power',
      body: 'The supply has to be off while the unit is changed and tested. We agree the day with you and tell you roughly how long to expect, so you can plan around the fridge, the freezer and working from home.',
    },
    faqs: [
      {
        q: 'Do I need to replace my fuse box?',
        a: 'Not always. If it is an old rewireable type with no RCD protection, replacement is strongly recommended. If it is a newer unit that keeps tripping, the fault is more often on a circuit than in the unit, and we will find it first.',
      },
      {
        q: 'What is an RCD?',
        a: 'A residual current device detects current leaking to earth, as happens when someone touches a live part, and cuts the power in a fraction of a second. It is one of the most important safety features a modern installation has.',
      },
      {
        q: 'Will the new unit trip more than the old one?',
        a: 'It can at first, because it detects faults the old fuses could not. That is the unit doing its job. Testing beforehand finds most of these so they can be fixed as part of the same job.',
      },
      {
        q: 'Is replacing a consumer unit notifiable?',
        a: 'Yes. Replacing a consumer unit in a home is notifiable under Part P. We notify it through our registration scheme, so you do not have to deal with building control yourself.',
      },
    ],
  },
  {
    slug: 'rewiring',
    title: 'Rewiring',
    h1: 'House and flat rewiring in London',
    metaTitle: 'Rewiring London | House & Flat Rewires | Ninja Plumbers',
    metaDescription:
      'Full and partial rewires for London houses and flats, planned with you, tested, certified and notified. Price agreed before work starts. Call 020 3576 5825.',
    eyebrow: 'Rewiring',
    icon: 'wiring',
    target: 'rewiring london (90/mo) · house rewire london (90/mo)',
    summary:
      'Full and partial rewires for houses and flats, planned around you and the other trades, then tested and certified.',
    intro:
      'Wiring does not last for ever. Rubber-insulated cable, a handful of sockets per room and a fuse box with wire fuses are still found in London homes, and even newer installations can be let down by decades of alterations. A rewire replaces the cables, accessories and consumer unit so the whole installation is safe, tested and certified. Our electricians plan it with you room by room and agree the price before any work starts.',
    does: [
      'Full rewires of houses and flats',
      'Partial rewires of kitchens, bathrooms and extensions',
      'Extra sockets and new lighting circuits',
      'A new consumer unit as part of the rewire',
      'Testing, certification and Building Regulations notification',
      'Planned around your plasterer, decorator and other trades',
    ],
    guidance: [
      {
        title: 'Signs a rewire is due',
        body: 'Rubber or fabric-covered cable, round-pin sockets, a fuse box with rewireable fuses, very few sockets in each room, light switches inside bathrooms, or an installation nobody has tested in decades. An EICR will tell you for certain whether the wiring can stay or needs replacing.',
      },
      {
        title: 'First fix and second fix',
        body: 'A rewire happens in two stages. First fix runs the new cables and back boxes while floors and walls are open. Second fix, after plastering, fits the sockets, switches, lights and consumer unit. The gap between the two is when the plasterer comes in, so the timing needs planning.',
      },
      {
        title: 'Living in the property during a rewire',
        body: 'It is possible, particularly in a house where the work can go room by room, but it is dusty and disruptive and the power will be off at times. In a flat it is often easier to rewire while it is empty, for example between tenancies or before you move in.',
      },
      {
        title: 'Plan the layout while you can',
        body: 'A rewire is the cheapest moment to put sockets, lights and switches exactly where you want them. Walk round each room with the furniture in mind, and think about outside lights, extra kitchen sockets and power for things like a future EV charger.',
      },
    ],
    aside: {
      title: 'Combine it with the plumbing',
      body: 'If the kitchen or bathroom is being redone, or old pipework is being replaced, doing the rewire at the same time means floors and walls only come up once. Because we do both, we can plan it as one job.',
    },
    faqs: [
      {
        q: 'How do I know if my home needs rewiring?',
        a: 'An EICR is the reliable way to find out. It tests the installation and tells you whether the wiring is safe to keep, needs some circuits replacing, or is due for a full rewire.',
      },
      {
        q: 'Can I stay at home during a rewire?',
        a: 'Often, yes, in a house where the work can be done room by room, though it is dusty and the power will be off at times. In a flat it is usually easier if the property is empty.',
      },
      {
        q: 'Will the walls need replastering?',
        a: 'Cables are run in chases cut into the plaster, under floorboards and through ceiling voids. The chases are filled afterwards, but most rewires are followed by some plastering and decorating, which is why it is best to rewire before redecorating rather than after.',
      },
      {
        q: 'Is rewiring notifiable?',
        a: 'Yes. A full or partial rewire is notifiable under Part P of the Building Regulations. We notify it through our registration scheme and give you an Electrical Installation Certificate when the work is complete.',
      },
    ],
  },
  {
    slug: 'ev-charger-installation',
    title: 'EV Charger Installation',
    h1: 'EV charger installation in London',
    metaTitle: 'EV Charger Installation London | Ninja Plumbers',
    metaDescription:
      'Home EV chargers fitted across London: supply survey, smart charger installation, network notification and certification. Price agreed first. Call 020 3576 5825.',
    eyebrow: 'EV charging',
    icon: 'ev',
    target: 'ev charger installation london (480/mo)',
    summary:
      'Home charge points surveyed, fitted, notified and certified, with any supply upgrades priced up front.',
    intro:
      'Charging an electric car at home is cheaper and easier than relying on public chargers, provided the installation is done properly. A home charger draws a heavy load for hours at a time, so the supply, the consumer unit and the earthing all need checking before it goes on the wall. Our electricians survey your property, fit a smart charger, notify the network operator and certify the work, with the price agreed before anything starts.',
    does: [
      'Home charge point installation',
      'Survey of the supply, consumer unit and cable route',
      'Smart chargers that meet the charge point regulations',
      'Earthing arrangements checked and put right',
      'Notification to the network operator',
      'Testing and certification on completion',
    ],
    guidance: [
      {
        title: 'Where the charger can go',
        body: 'Most chargers go on an outside wall close to where you park, with a cable run back to the consumer unit. In London the first question is often whether you have off-street parking at all: a home charger must be on your own property, and a cable cannot be trailed across a public pavement.',
      },
      {
        title: 'Is your supply ready?',
        body: 'The survey checks the incoming supply, the main fuse, the consumer unit and the earthing, so we can tell you whether the charger can be fitted as things are or whether something needs upgrading first. Any upgrade is priced before work starts.',
      },
      {
        title: 'Smart chargers are the law',
        body: 'Home charge points installed in Great Britain have had to be smart since 2022, which means they can be scheduled and can respond to the electricity network. In practice that lets you charge on a cheaper overnight tariff if your supplier offers one.',
      },
      {
        title: 'Notifying the network operator',
        body: 'Charge point installations have to be notified to the local distribution network operator, which across London is UK Power Networks. We handle that as part of the job, along with the Building Regulations notification and your certificate.',
      },
    ],
    aside: {
      title: 'Send us three photos',
      body: 'The make of car, where you park, and your consumer unit. That is usually enough for us to tell you what is involved before anyone comes out.',
    },
    faqs: [
      {
        q: 'Do I need off-street parking?',
        a: 'Yes, for a home charger. It has to be installed on your own property, and a cable cannot be trailed across a public pavement. If you park on the street, public or workplace chargers are the usual options.',
      },
      {
        q: 'Will I need a new consumer unit?',
        a: 'Sometimes. If there is no spare way for the charger circuit, or the existing unit is old, it may need replacing or supplementing. The survey tells you, and it is priced before any work starts.',
      },
      {
        q: 'Which charger should I choose?',
        a: 'Most modern home chargers do the job well. The main choices are a tethered or untethered cable, how it works with your app and tariff, and how it looks on the wall. We will talk you through the options before you decide.',
      },
      {
        q: 'Is a charger installation notifiable?',
        a: 'Yes. A charger needs a new dedicated circuit, which is notifiable under Part P. We notify it through our registration scheme, notify the network operator, and give you the certificates when it is done.',
      },
    ],
  },
  {
    slug: 'commercial-washroom-refurbishment',
    title: 'Commercial Washroom Refurbishment',
    h1: 'Commercial washroom and toilet refurbishment in London',
    metaTitle: 'Commercial Washroom Refurbishment London | Ninja Plumbers',
    metaDescription:
      'Office, shop, pub, restaurant and changing-room toilets refurbished across London, planned around your opening hours. Price agreed first. Call 020 3576 5825.',
    eyebrow: 'Washrooms',
    icon: 'bathroom',
    target: 'commercial toilet refurbishment (480/mo) · commercial washroom refurbishment (390/mo) · changing room refurbishment (320/mo) · office washroom refurbishment (210/mo) · restaurant toilet refurbishment (90/mo) · pub toilet refurbishment (70/mo)',
    summary:
      'Staff and customer toilets, washrooms and changing rooms stripped out and refitted, planned around your trading hours.',
    intro:
      'Tired toilets are one of the first things customers and staff notice, and one of the hardest rooms to take out of use in a busy building. We strip out and refit commercial washrooms, from a single staff WC in a shop to the customer toilets in a pub, an office floor or a club changing room. The plumbing, drainage, lighting, extraction and water heating are handled by one team, the work is phased so you always have a toilet available, and the price is agreed before anything starts.',
    does: [
      'Staff and customer toilet refurbishments',
      'Office washrooms and shower rooms',
      'Pub, restaurant and café customer toilets',
      'Changing rooms and team showers',
      'Accessible WCs and baby-change areas',
      'Urinals, cubicles, vanity units and IPS panels',
      'Water heaters, extraction and lighting',
      'Phased work so a toilet stays open',
    ],
    guidance: [
      {
        title: 'How many toilets you need',
        body: 'For workplaces, the Workplace (Health, Safety and Welfare) Regulations 1992 and the HSE Approved Code of Practice set minimum numbers of toilets and washbasins by headcount: one of each for up to five people, two for six to 25, and so on. Basins need hot and cold, or warm, running water. A refurbishment is a good moment to check you still meet those numbers after staff changes.',
      },
      {
        title: 'Plan it around trading',
        body: 'Most businesses cannot lose every toilet at once. We phase the work so one WC or one side stays in use, or do the noisy strip-out early, late or at the weekend. Tell us your opening hours and your busiest days, and the programme is built around them rather than the other way round.',
      },
      {
        title: 'Hard-wearing and easy to clean',
        body: 'Commercial toilets take far heavier use than a home bathroom. Concealed cisterns behind lockable IPS panels, wall-hung pans for easy floor cleaning, vandal-resistant or sensor taps, and urinals with flush controls so they do not run all night all save time and water. Isolating valves on every fitting mean one fault never closes the whole room.',
      },
      {
        title: 'Ventilation, access and the regulations',
        body: 'Toilets need mechanical extraction, and new or substantially altered facilities may need to meet Building Regulations, including accessible toilet provision where it applies. We will tell you what your job needs, fit the extraction and electrics with our own electricians, and work with your landlord or building management where their approval is needed.',
      },
    ],
    aside: {
      title: 'Send us photos and a floor plan',
      body: 'Photos of the room, rough measurements and your headcount or customer numbers are usually enough for us to give you an idea of what is involved before a survey.',
    },
    faqs: [
      {
        q: 'Can you refurbish our toilets without closing the business?',
        a: 'Usually, yes. We phase the work so at least one toilet stays in use, and schedule the strip-out and noisiest work outside your opening hours. For a single-WC premises, we agree the shortest practical closure and do it on your quietest day.',
      },
      {
        q: 'Do you handle the electrics and extraction too?',
        a: 'Yes. Our registered electricians fit the lighting, extractor fans, hand dryers and any water heater circuits, so the whole washroom is done by one team and one price.',
      },
      {
        q: 'Can you fit an accessible toilet?',
        a: 'Yes. We fit accessible WCs, including the grab rails, basin and emergency alarm they need. Space is usually the deciding factor, so we will check the room and tell you what is possible before you commit.',
      },
      {
        q: 'Do you refurbish changing rooms and showers?',
        a: 'Yes, for gyms, sports clubs and workplaces. Showers under peak demand need hot water sized for it, strong drainage and valves that are easy to isolate and service, and we plan all of that as part of the job.',
      },
      {
        q: 'How is the price worked out?',
        a: 'After a survey, based on the number of fittings, what is behind the walls and floors, the finishes you choose and how the work has to be phased. The price is agreed with you before anything starts.',
      },
    ],
  },
  {
    slug: 'tmv-servicing',
    title: 'TMV Servicing & Testing',
    h1: 'TMV servicing and testing in London',
    metaTitle: 'TMV Servicing & Testing London | Ninja Plumbers',
    metaDescription:
      'Thermostatic mixing valve servicing in London: temperature and fail-safe checks, cleaning, cartridges and a record for every valve. Call 020 3576 5825.',
    eyebrow: 'Water safety',
    icon: 'water',
    target: 'tmv servicing (590/mo) · tmv testing (70/mo)',
    summary:
      'Thermostatic mixing valves tested, cleaned and reset, with a record for every valve, for schools, nurseries, care and business premises.',
    intro:
      'A thermostatic mixing valve, or TMV, blends hot and cold water so it reaches the tap or shower at a safe, steady temperature, and it should shut off if the cold supply fails. In hard-water London, scale slowly stops them doing either properly. Our engineers test each valve, check its fail-safe, clean or replace the parts that wear, reset the temperature and give you a record for every valve, for schools, nurseries, care settings, clinics, gyms and any premises where scalding is a risk.',
    does: [
      'Outlet temperature checks against the set point',
      'Fail-safe tests with the cold supply isolated',
      'Strainers and check valves cleaned',
      'Cartridges and worn parts replaced',
      'Temperatures reset and recorded',
      'A servicing record for every valve',
      'Failed and obsolete TMVs replaced',
      'New TMVs fitted where scalding is a risk',
    ],
    guidance: [
      {
        title: 'Why TMVs need regular servicing',
        body: 'Stored hot water has to be kept hot enough to control legionella, which is far too hot to wash in. The TMV brings it down at the outlet. Over time, scale and debris build up on the strainers and the thermostatic element, so the valve drifts, reacts slowly or fails to shut off when it should. Regular testing catches that before someone is scalded or a valve sits at an unsafe setting for months.',
      },
      {
        title: 'How often to test',
        body: 'The right interval comes from your water-safety risk assessment and the valve manufacturer\'s instructions. Settings with vulnerable users, such as schools, nurseries and care settings, usually test more often. If a valve drifts little between checks, the interval can sometimes be extended; if it drifts a lot, it needs checking more often or replacing. We can work to the schedule your assessment sets.',
      },
      {
        title: 'What a service involves',
        body: 'We measure the mixed water temperature at the outlet, then isolate the cold supply to check the valve shuts down or reduces flow to a safe level. We clean the strainers and check valves, descale or replace the cartridge, reset the valve to the temperature you need and test again. Each valve is recorded with its location, setting, readings and any parts fitted.',
      },
      {
        title: 'TMV2 and TMV3 valves',
        body: 'TMV2 valves are approved for general domestic and commercial use. TMV3 valves meet the stricter scheme used in healthcare and care settings. If a valve has failed or the right parts are no longer made, we will tell you which type your setting needs and replace it, rather than keep patching an old one.',
      },
    ],
    aside: {
      title: 'Keep the records together',
      body: 'Keep your TMV servicing records with your water-safety risk assessment and logbook. Inspectors, insurers and your own responsible person will want to see that every valve has been checked on schedule.',
    },
    faqs: [
      {
        q: 'Do you service TMVs for schools and nurseries?',
        a: 'Yes. We service and test TMVs at pupils\' and children\'s basins, showers and nappy-change areas, working in holidays or outside session times, and leave a record for every valve.',
      },
      {
        q: 'What temperature should a TMV be set to?',
        a: 'It depends on the outlet and who uses it, and your risk assessment or the relevant guidance for your setting should say. Hand-wash basins used by children or vulnerable people are set lower than a shower or a bath. We set each valve to the temperature you specify and record it.',
      },
      {
        q: 'Can you replace a TMV that keeps failing?',
        a: 'Yes. Where a valve is badly scaled, keeps drifting or parts are no longer available, replacing it is usually the better answer. We fit a TMV2 or TMV3 valve to suit the setting and commission it before we leave.',
      },
      {
        q: 'Do you carry out legionella risk assessments?',
        a: 'No. The risk assessment should come from a competent specialist. We do the work it points to on the plumbing side, including TMV servicing and replacement, removing dead legs and sorting little-used outlets.',
      },
    ],
  },
];

export default services;
