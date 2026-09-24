// Category hub pages: /heating and /drainage.
//
// These sit above the individual service pages (Home › Heating › Boiler
// repair). Each one is aimed at the broad category search and sends the
// visitor on to the specific page for their problem. They deliberately do
// not chase the terms the child pages own ("boiler repair london" belongs to
// /services/boiler-repair, "drain unblocking london" to
// /services/drain-unblocking, and so on).
//
// Search volumes in `target` are UK monthly figures from Semrush. They explain
// why each hub exists and are not published.

export type Hub = {
  slug: 'heating' | 'drainage';
  target: string;              // search figures, not shown
  metaTitle: string;           // ≤ 60 chars, ends "| Ninja Plumbers"
  metaDescription: string;     // ≤ 155 chars, ends "Call 020 3576 5825."
  eyebrow: string;
  h1: string;
  intro: string;               // 80–110 words
  problems: { label: string; hint: string; href: string }[];   // 6–8 "what's happening?" entries, e.g. "No heating but hot water works" → /services/boiler-repair
  sections: { heading: string; body: string }[];               // 4–5 sections, 90–140 words each: what we cover, how a visit works, London-specific context (e.g. older heating systems in period homes, sludge, hard water, shared drains in terraces, who owns which drain, Thames Water responsibility for public sewers since 2011 transfer — only if you're sure it's correct), what affects the price (factors, never figures), Gas Safe / legal points for heating
  children: { href: string; title: string; blurb: string }[];  // every child page above, blurb 20–30 words, written fresh (not copied from the child's summary)
  faqs: { q: string; a: string }[];                            // 6
  closing: { heading: string; body: string };
};

export const hubs: Hub[] = [
  {
    slug: 'heating',
    target: 'heating engineer london (720/mo) · heating engineers london (480/mo) · heating services london (170/mo)',
    metaTitle: 'Heating Engineer London | Gas Safe | Ninja Plumbers',
    metaDescription:
      'Heating services in London by Gas Safe registered engineers: boilers, radiators, cylinders, underfloor heating. Price agreed first. Call 020 3576 5825.',
    eyebrow: 'Heating services',
    h1: 'Heating engineers in London',
    intro:
      'Most heating trouble in a London home comes down to a short list: a boiler that has stopped, a system clogged with sludge, a cylinder that no longer heats the water, or a property that was never properly heated at all. Our heating engineers deal with every one of them. Anything involving gas is handled by Gas Safe registered staff, all directly employed, DBS-checked and fully insured. Pick what is happening at home from the list below, or ring us, describe it, and we will work it out together.',
    problems: [
      {
        label: 'No heating, but the hot water still works',
        hint: 'Often a valve, pump or controls fault. Fault codes and lost pressure too.',
        href: '/services/boiler-repair',
      },
      {
        label: 'Radiators warm at the top, cold along the bottom',
        hint: 'Sludge has settled inside. A flush shifts it; bleeding will not.',
        href: '/appliances/radiator-installation-and-power-flushing',
      },
      {
        label: 'An ageing boiler that keeps breaking down',
        hint: 'An honest repair-or-replace answer, with both costs side by side.',
        href: '/services/boiler-replacement',
      },
      {
        label: 'Nothing is wrong, but the boiler is due its yearly check',
        hint: 'Catches worn parts before winter and keeps warranty conditions met.',
        href: '/services/boiler-service',
      },
      {
        label: 'Moving the boiler, or swapping a tank system for a combi',
        hint: 'Type, size and position settled before anything is ordered.',
        href: '/services/boiler-installation',
      },
      {
        label: 'Water from the cylinder is cold or only lukewarm',
        hint: 'Often the immersion element or a thermostat, not the cylinder itself.',
        href: '/appliances/immersion-heater-replacement',
      },
      {
        label: 'Storage heaters, or no central heating at all',
        hint: 'A complete wet system, planned room by room.',
        href: '/services/central-heating-installation',
      },
      {
        label: 'An extension is going on and you want warm floors',
        hint: 'Underfloor heating is easiest to fit while the floor is being laid.',
        href: '/appliances/underfloor-heating-installation',
      },
    ],
    sections: [
      {
        heading: 'What our heating engineers cover',
        body: 'Our heating services run from one stuck radiator valve to a complete new system: boiler breakdowns and annual services, new and replacement boilers, radiators fitted, moved and flushed, cylinders and immersion heaters, wet underfloor heating, and the controls that run it all. We work on combis, system boilers and heat-only boilers, sealed or open-vented. The first thing we ask is which you have, because a combi in a flat and a house with a cylinder in the airing cupboard go wrong in quite different ways. A photo of the boiler and the airing cupboard usually settles it.',
      },
      {
        heading: 'How a heating visit works',
        body: 'If the boiler shows a fault code, photograph the display and the make and model label when you get in touch, because that often tells the engineer which part to bring. Out of hours, the booking number goes through to our 24/7 emergency callout. When the engineer arrives, ask to see their Gas Safe ID card. They find the fault before replacing anything, explain it in plain terms and agree a price with you before starting. If a part has to be ordered in, you are told there and then. We take card and cash.',
      },
      {
        heading: 'Heating in older London homes',
        body: 'Much of London was built long before central heating, and it shows. In Victorian and Edwardian terraces the system was usually added decades later, with pipes threaded under floorboards and radiators put wherever they fitted. Many still run open-vented, with a feed-and-expansion tank in the loft. Systems from the 1970s often used microbore, thin 8mm or 10mm pipe that clogs readily once sludge builds up. London’s hard water adds limescale to combi heat exchangers, cylinder coils and immersion elements. In a converted flat, a new flue through an outside wall may need the freeholder’s consent under your lease.',
      },
      {
        heading: 'What affects the price',
        body: 'Two heating jobs with the same name can differ a lot underneath, so there is no price list, but the things that push a price up or down are predictable. For a repair: which part has failed, whether it is on the van, and how easy the boiler is to reach, since one boxed in behind kitchen units or up in a loft takes longer. For an installation: the type and size of boiler, whether it moves, how far the flue and pipework run, how many radiators are involved, and whether the system needs cleaning first. Out-of-hours callouts, parking and access count too. You agree the price before anything starts.',
      },
      {
        heading: 'Gas Safe, and the legal side',
        body: 'By law, anyone paid to work on gas appliances or gas pipework has to be registered with Gas Safe. Ask to see the ID card and turn it over: the back lists the gas work that engineer is qualified to do. A new boiler must be notified to building control, which the Gas Safe installer does for you, and a compliance certificate follows; keep it for when you sell. Landlords need a gas safety check every twelve months, and in England a rented home needs a carbon monoxide alarm in any room with a fixed combustion appliance other than a gas cooker. If you smell gas, your first call should be to the National Gas Emergency Service (0800 111 999), not to us.',
      },
    ],
    children: [
      {
        href: '/services/boiler-repair',
        title: 'Boiler repair',
        blurb: 'For a boiler that has stopped, locked out or keeps losing pressure. We find the fault first, then quote repair and replacement side by side.',
      },
      {
        href: '/services/boiler-service',
        title: 'Boiler service',
        blurb: 'The yearly inspection and clean, flue and combustion included. It spots wearing parts early and gives you the record most warranties depend on.',
      },
      {
        href: '/services/boiler-installation',
        title: 'Boiler installation',
        blurb: 'A first boiler, a change of type, or an existing one moved somewhere better. Sized for the property, not copied from whatever was there.',
      },
      {
        href: '/services/boiler-replacement',
        title: 'Boiler replacement',
        blurb: 'When the current boiler may have reached the end. A straight view on whether it really has, and on what should replace it.',
      },
      {
        href: '/services/central-heating-installation',
        title: 'Central heating installation',
        blurb: 'The whole system, not just the boiler: pipework, radiators and controls, including first-time heating in homes that have never had any.',
      },
      {
        href: '/appliances/radiator-installation-and-power-flushing',
        title: 'Radiators and power flushing',
        blurb: 'Radiators fitted, moved or taken off for decorating, and sludged systems power flushed, with a magnetic filter added to keep the water clean.',
      },
      {
        href: '/appliances/underfloor-heating-installation',
        title: 'Underfloor heating',
        blurb: 'Wet underfloor heating fed from your boiler or heat pump, best fitted during an extension or refit. Cold loops tested and repaired.',
      },
      {
        href: '/appliances/hot-water-cylinder-installation',
        title: 'Hot water cylinders',
        blurb: 'Vented and unvented cylinders replaced and sized to how many showers run at once, plus yearly servicing of unvented systems and their safety valves.',
      },
      {
        href: '/appliances/immersion-heater-replacement',
        title: 'Immersion heaters',
        blurb: 'The electric element inside the cylinder. Failed elements and thermostats tested and replaced, often the whole story behind no hot water.',
      },
      {
        href: '/boilers',
        title: 'Boiler brands we work on',
        blurb: 'Worcester Bosch, Vaillant, Ideal, Baxi and more. What we tend to find on each make, and which we install as well as repair.',
      },
    ],
    faqs: [
      {
        q: 'Is a heating engineer different from a plumber?',
        a: 'They overlap, but gas is the dividing line. Anyone paid to work on a boiler or gas pipework must be Gas Safe registered, and a plumber without that cannot touch the gas side. We do both.',
      },
      {
        q: 'Do you work on every make of boiler?',
        a: 'Yes. Gas Safe registration covers gas boilers of any make, so the badge does not limit who can repair it. What varies between brands is how easily parts can be found.',
      },
      {
        q: 'The heating has failed at night. Will you come out?',
        a: 'Yes, emergency callout runs 24/7. Call if there is no heat in cold weather with someone vulnerable at home, or water leaking from the system. If it can safely wait, we will book an ordinary appointment instead.',
      },
      {
        q: 'Should I bleed the radiators before calling you?',
        a: 'If one is cold at the top and warm lower down, yes: that is trapped air. Check the boiler pressure afterwards, as bleeding a sealed system lowers it. A cool bottom edge points to sludge, which bleeding cannot shift.',
      },
      {
        q: 'Do you work for landlords and letting agents?',
        a: 'Yes: yearly gas safety checks and certificates, boiler services and repairs in tenanted homes, with several properties booked together if that helps. Tell us who holds the keys and where the paperwork should go.',
      },
      {
        q: 'Is there a call-out charge, and how can I pay?',
        a: 'Yes, a call-out charge applies, and the price of the work is agreed before anything starts. New to us? You get £25 off that first call-out, though not alongside any other offer. We take card and cash.',
      },
    ],
    closing: {
      heading: 'Tell us what the heating is doing',
      body: 'Call 020 3576 5825, or WhatsApp +44 7447 575645 with a photo of the boiler. We answer from 7am to 10pm daily, and emergency callout runs around the clock. Not sure which job you need? Describe the symptoms and we will work it out with you.',
    },
  },

  {
    slug: 'drainage',
    target: 'drainage company london (720/mo) · drainage london (720/mo) · drainage services london (590/mo)',
    metaTitle: 'Drainage Company London | Drainage Services | Ninja Plumbers',
    metaDescription:
      'London drainage company for blocked drains and toilets, CCTV surveys, drain repairs, soakaways and gutters. Price agreed before work. Call 020 3576 5825.',
    eyebrow: 'Drains, gutters and rainwater',
    h1: 'Drainage services in London',
    intro:
      'Drainage is every pipe that carries water away from a building: the waste under the basin, the soil stack, the underground pipe out to the sewer, and the gutters, downpipes and gullies that deal with rain. Ninja Plumbers is a London drainage company that works on all of it, from a toilet that will not flush to a cracked pipe under a patio. Say what the problem looks like and we will point you to the right job, and say honestly when a drain is Thames Water’s to fix rather than yours.',
    problems: [
      {
        label: 'A sink, bath or shower that will not drain',
        hint: 'Usually the trap or branch pipe. Cleared, and the cause explained.',
        href: '/services/drain-unblocking',
      },
      {
        label: 'Everything drains slowly at once, or the manhole is full',
        hint: 'The blockage is in the stack or the pipe underground.',
        href: '/services/drain-unblocking',
      },
      {
        label: 'The toilet is blocked or the water keeps rising',
        hint: 'Don’t flush again. Ordinary WCs and jammed macerators both covered.',
        href: '/services/blocked-toilet',
      },
      {
        label: 'The same drain blocks again every few months',
        hint: 'Something in the pipe is catching debris. A camera shows what.',
        href: '/services/cctv-drain-survey',
      },
      {
        label: 'Buying an older house and want the drains checked',
        hint: 'Footage and a written report before you exchange contracts.',
        href: '/services/cctv-drain-survey',
      },
      {
        label: 'A survey has found a cracked, collapsed or root-filled pipe',
        hint: 'Sometimes fixable from inside the pipe; a collapse means digging.',
        href: '/services/drain-repairs',
      },
      {
        label: 'Rain sits on the patio or lawn for days',
        hint: 'A channel drain or soakaway gives it somewhere to go.',
        href: '/services/surface-water-drainage',
      },
      {
        label: 'Water spilling over the gutter or down the wall',
        hint: 'Worth fixing before it becomes a damp patch indoors.',
        href: '/services/gutter-repair',
      },
    ],
    sections: [
      {
        heading: 'What we cover as a drainage company',
        body: 'Most drainage calls fall into three groups. First, blockages: sinks, baths, toilets, soil stacks, gullies and the underground pipe to the sewer, cleared with rods or a high-pressure water jetter. Second, finding and fixing damage: a camera survey to see inside the pipe, then either no-dig relining or digging out and replacing the broken section, with the surface put back afterwards. Third, rainwater: gutters, downpipes, channel drains across paving, and soakaways where the ground will take water. We work for homeowners and tenants, and for landlords, freeholders and managing agents with shared drains in blocks and converted houses.',
      },
      {
        heading: 'How a drainage visit works',
        body: 'When you call, tell us what is affected, and whether you have already poured drain cleaner down, as the engineer may be putting their hands in that water. On site, the first job is finding where the blockage sits. Lifting the manhole covers usually answers it: a full chamber next to an empty one downstream puts the blockage between the two. The engineer clears it, shows you what came out, and tells you whether it looks like a one-off or a damaged pipe. The price is agreed before work starts, and if the fault is on Thames Water’s side, we tell you rather than charge you to clear it.',
      },
      {
        heading: 'Who is responsible for which drain',
        body: 'This decides who pays. A drain serving only your property, inside your boundary, is yours. Since October 2011, most shared drains and sewers in England, plus the lateral drain from your boundary to the public sewer, have been the water company’s responsibility, which in London almost always means Thames Water. That matters in terraces, where houses often share one pipe across the back gardens. A blockage in that shared section is normally Thames Water’s to clear, even under your lawn. In a block of flats, the communal stack and the drains in the grounds usually fall to the freeholder or managing agent; your lease will say. We establish whose pipe it is before you pay for anything.',
      },
      {
        heading: 'What we find under London’s streets',
        body: 'A lot of London still drains through clay pipes laid more than a century ago, in short lengths with rigid joints. In much of the city the clay ground shrinks in dry summers and swells in wet winters, cracking those joints and pulling them out of line, and tree roots find the gaps. Many older houses also have an interceptor trap in the last manhole before the sewer. When the stopper on its rodding arm drops out, it lands in the trap and blocks it. Add wipes, cooking fat and older streets where rain and waste share one combined sewer, and faults often show up after a heavy downpour.',
      },
      {
        heading: 'What affects the price',
        body: 'Drainage work varies too much for a price list to mean anything, but the factors behind a quote are easy to explain. For a blockage: where it sits, how easy the nearest manhole is to reach, and whether rods will shift it or it needs the jetter. A chamber under paving or inside the house takes longer than one in the front garden. For a survey: how many pipes, and how long. For a repair: relining or digging, how deep the pipe lies, and what surface goes back on top. Gutter work depends on height and safe access. Out-of-hours callouts and parking play a part as well. The figure is agreed with you before work begins.',
      },
    ],
    children: [
      {
        href: '/services/drain-unblocking',
        title: 'Drain unblocking',
        blurb: 'Sinks, baths, soil stacks, gullies and outside drains cleared with rods or a water jetter, and you are told what caused the blockage.',
      },
      {
        href: '/services/blocked-toilet',
        title: 'Blocked toilets',
        blurb: 'A blocked or backing-up WC, macerator and Saniflo units included. Cleared without chemicals, then checked in case the real cause lies beyond the pan.',
      },
      {
        href: '/services/cctv-drain-survey',
        title: 'CCTV drain surveys',
        blurb: 'A camera down the pipe shows what is wrong and exactly where. Footage and a written report suit buyers, insurers and repeat blockages.',
      },
      {
        href: '/services/drain-repairs',
        title: 'Drain repairs',
        blurb: 'For pipes that are broken rather than blocked: cracked, collapsed, displaced or full of roots. Relined from inside where possible, dug out and replaced where not.',
      },
      {
        href: '/services/surface-water-drainage',
        title: 'Surface water drainage',
        blurb: 'Rainwater with nowhere to go. Channel drains across paving, soakaways where the ground allows, and downpipes connected so water stops pooling against walls.',
      },
      {
        href: '/services/gutter-repair',
        title: 'Gutter repair',
        blurb: 'Gutters cleared, leaking joints resealed and sagging lengths refixed, original cast iron included, with the downpipes and gullies below checked too.',
      },
    ],
    faqs: [
      {
        q: 'Is a blocked drain an emergency?',
        a: 'It is if sewage is coming up inside, a manhole is overflowing by the house, or the only toilet is out of use. Emergency callout runs 24/7 for those. A slow basin can be booked in as normal daytime work.',
      },
      {
        q: 'Can I clear a blocked drain myself?',
        a: 'A single slow sink is worth a plunger and a clean of the trap underneath. Beyond that, leave it to us: manhole covers are heavy, chambers can be deep, and what sits in them is raw sewage.',
      },
      {
        q: 'How can I tell if a drain is broken rather than blocked?',
        a: 'Clues include repeat blockages in one spot, a smell outside that never clears, paving sinking along the pipe, or rats, which often get in through damaged drains. A CCTV survey confirms it.',
      },
      {
        q: 'Will my insurance pay for a drain repair?',
        a: 'Many buildings policies include some cover for accidental damage to underground pipes, but terms vary, so check yours before booking. If the insurer wants evidence, a CCTV survey comes with footage and a written report.',
      },
      {
        q: 'Can you check the drains before we buy a house?',
        a: 'Yes, and on an older London house it is worth it. The camera picks up cracks, roots and displaced joints that a general building survey will not, and you get the footage and report before you exchange.',
      },
      {
        q: 'Do you clear gutters, or only repair them?',
        a: 'Both. A blocked gutter gets cleared, and we check whether it has dropped, split at a joint or come off its brackets, because clearing alone will not stop that overflowing. The downpipe and gully below get checked too.',
      },
    ],
    closing: {
      heading: 'Show us what the drain is doing',
      body: 'Ring 020 3576 5825, or send a picture of the manhole or the standing water to +44 7447 575645 on WhatsApp. Our office takes calls from 7am to 10pm, seven days a week, and emergency callout is 24/7. We take card and cash, the figure is settled before work begins, and new customers get £25 off their first call-out (not combinable with other offers).',
    },
  },
];

export default hubs;
