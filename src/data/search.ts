// Search index for the header search. Built from the same data files as the
// pages, so every result is a page that exists and nothing can drift.
//
// Keywords are matching aids only: what people actually type when they have
// the problem. They are never shown and are not claims about the business.
import { services } from './services';
import { appliances } from './appliances';
import { dampPages } from './damp';
import { blogPosts } from './blog';
import { serviceGroups } from './nav';
import { areas } from './areas';
import { combos } from './combos';
import { postcodes } from './postcodes';
import { brands } from './brands';

export type SearchEntry = {
  t: 'group' | 'service' | 'appliance' | 'damp' | 'blog' | 'combo' | 'area' | 'postcode' | 'brand' | 'page';
  title: string;
  sub: string;       // one line under the title
  url: string;
  k: string;         // keywords, lower case
  g?: string;        // group slug, so a group hit can surface its services
  pc?: string[];     // outward postcodes, for postcode queries
  w?: number;        // tie-break weight: monthly searches, where known
};

const SERVICE_TERMS: Record<string, string> = {
  'emergency-plumbing': 'emergency urgent burst pipe flood flooding leak leaking water pouring no water stopcock 24 hour out of hours tonight now plumber',
  'general-plumbing': 'tap taps toilet wc cistern flush radiator radiators valve ballcock overflow pipe pipework dripping sink basin shower washing machine dishwasher outside tap stopcock water pressure low pressure plumber repair repairs',
  'leak-detection': 'leak leaks hidden leak damp ceiling stain water bill trace tracing thermal acoustic under floor underfloor pipe',
  'commercial-plumbing': 'commercial office restaurant shop retail landlord block of flats business premises pub cafe hotel school',
  'boiler-repair': 'boiler broken no heating no hot water fault code lockout locked out pressure dropping losing pressure pilot light ignition banging kettling combi not working repair repairs engineer gas',
  'boiler-service': 'boiler service annual servicing gas safety check warranty maintenance engineer',
  'boiler-installation': 'new boiler install installation fitting fit combi system boiler heat only quote price',
  'boiler-replacement': 'replace replacement swap old boiler upgrade end of life new boiler quote',
  'drain-unblocking': 'drain drains blocked blockage unblock clog clogged toilet sink slow draining smell smelly sewer manhole jetting jet rods rodding gully outside drain overflowing',
  'bathroom-installation': 'bathroom refit renovation fitting fitters shower wet room en suite ensuite tiles suite basin bath toilet new bathroom',
  'toilet-installation': 'toilet wc loo pan cistern close coupled back to wall wall hung concealed frame new toilet replace replacement fit fitting install installation cloakroom soil pipe flush flushing valve inlet valve not flushing running toilet toilet flush repair',
  'gas-safety-certificate': 'gas safety certificate cp12 landlord certificate gas safe check annual renewal letting agent compliance',
  'cctv-drain-survey': 'cctv drain survey camera inspection drain camera recurring blockage pre purchase survey house buying insurance claim report',
  'drain-repairs': 'drain repair collapsed drain cracked pipe root damage relining no dig excavation misaligned joint broken drain',
  'wet-rooms-and-walk-in-showers': 'wet room walk in shower level access shower tanking tiled shower floor drain accessible bathroom disabled shower',
  'air-conditioning-repair': 'air conditioning aircon air con repair not cooling broken fault error code leaking dripping tripping breaker refrigerant leak f-gas f gas engineer fix',
  'air-conditioning-maintenance': 'air conditioning aircon air con maintenance service servicing annual filter clean refrigerant check f-gas f gas leak check engineer',
  'air-conditioning-installation': 'air conditioning aircon air con installation install fitting split system multi split outdoor unit condenser cooling f-gas f gas engineer new system',
  'air-conditioning-replacement': 'air conditioning aircon air con replace replacement swap old unit upgrade end of life obsolete refrigerant r22 new system outdoor condenser engineer',
};

// What people type when they want the thing rather than the trade. Matching
// aids only — never shown, and not claims about the business.
const APPLIANCE_TERMS: Record<string, string> = {
  'water-softener-installation': 'water softener soften softened hard water limescale scale salt resin kinetico harvey block salt kettle furring chalk',
  'underfloor-heating-installation': 'underfloor heating ufh wet system manifold loops screed zones warm floor floor heating',
  'radiator-installation-and-power-flushing': 'power flush powerflush powerflushing flushing sludge sludged central heating radiator radiators cold at the bottom black water magnetic filter balancing new radiator column designer towel rail',
  'boiling-water-taps': 'boiling water tap instant hot tap quooker fohen grohe red 3 in 1 four in one kettle tap filtered chilled sparkling',
  'washing-machine-plumbing': 'washing machine washer plumb in plumbed installation valve standpipe waste hose leaking laundry utility fridge freezer water line ice maker american fridge',
  'water-meter-installation': 'water meter metered metering thames water boundary box shared supply separate supply move meter relocate stopcock water main new main connection mains connection supply pipe new build extension',
  'sump-pumps': 'sump pump basement cellar groundwater flooding flood water table backup battery alarm float switch',
  'shower-pumps': 'shower pump pressure weak shower low pressure gravity fed positive head negative head twin impeller booster whole house pump noisy pump',
  'saniflo-macerator-pumps': 'saniflo macerator sanicompact pumped waste basement toilet loft toilet under stairs wc blocked macerator descale humming',
  'whole-house-water-filtration': 'water filter filtration filtered drinking water under sink filter cartridge sediment chlorine taste scale reducer conditioner limescale',
  'outside-tap-installation': 'outside tap outdoor tap garden tap hose bib tap standpipe check valve frost proof winterise',
  'dishwasher-plumbing': 'dishwasher plumb in installation integrated built in waste hose isolating valve not draining standing water leak',
  'hot-water-cylinder-installation': 'hot water cylinder tank unvented vented megaflo immersion heater thermostat expansion vessel airing cupboard no hot water lukewarm',
  'electric-shower-installation': 'electric shower installation fit fitted new shower kw rating cable breaker isolation valve replace existing unit',
};

const DAMP_TERMS: Record<string, string> = {
  'damp-survey-and-diagnosis': 'damp survey diagnosis moisture meter report rising damp penetrating damp condensation inspection pre purchase second opinion',
  'damp-proofing-and-penetrating-damp': 'damp proofing penetrating damp treatment damp proof course dpc render pointing guttering ground level defect wall',
  'condensation-and-ventilation-control': 'condensation ventilation mould mold black mould extractor fan trickle vent humidity window damp air',
};

const GROUP_TERMS: Record<string, string> = {
  plumbing: 'plumber plumbers plumbing pipes water leak tap toilet',
  heating: 'boiler boilers heating central heating gas hot water radiators cylinders engineer',
  drainage: 'drain drains blocked unblock cctv survey',
  bathrooms: 'bathroom bathrooms wc toilet wet room shower',
  'air-conditioning': 'air conditioning aircon air con cooling split system engineer',
};

// How the service-in-area pages phrase their headings.
const LOCAL_HEADING: Record<string, string> = {
  'emergency-plumbing': 'Emergency plumber',
  'boiler-repair': 'Boiler repair',
  'boiler-service': 'Boiler service',
  'boiler-installation': 'Boiler installation',
  'boiler-replacement': 'Boiler replacement',
  'bathroom-installation': 'Bathroom installation',
  'drain-unblocking': 'Drain unblocking',
  'air-conditioning-repair': 'Air conditioning repair',
  'air-conditioning-maintenance': 'Air conditioning maintenance',
  'air-conditioning-installation': 'Air conditioning installation',
  'air-conditioning-replacement': 'Air conditioning replacement',
};

const PAGES: SearchEntry[] = [
  { t: 'page', title: 'Contact us', sub: 'Phone, WhatsApp, email and the office address', url: '/contact', k: 'contact phone call number email whatsapp address office hours book booking' },
  { t: 'page', title: 'Areas we cover', sub: 'Every London area we work in', url: '/areas-we-cover', k: 'areas area coverage cover london borough boroughs where near me local' },
  { t: 'page', title: 'Postcode districts', sub: 'Coverage by postcode district', url: '/postcodes', k: 'postcode postcodes district districts coverage' },
  { t: 'page', title: 'All services', sub: 'Everything we do, in one place', url: '/services', k: 'services service what we do' },
  { t: 'page', title: 'Appliances & fixtures', sub: 'Softeners, pumps, taps and appliance plumbing', url: '/appliances', k: 'appliance appliances fixtures fittings install installation fitted machine pump tap filter' },
  { t: 'page', title: 'Damp & condensation', sub: 'Survey, proofing and ventilation across London', url: '/damp', k: 'damp condensation mould mold moisture rising penetrating survey proofing ventilation' },
  { t: 'page', title: 'Boiler brands we work on', sub: 'Repairs and servicing by manufacturer', url: '/boilers', k: 'brands brand manufacturer make makes' },
  { t: 'page', title: 'About us', sub: 'Who we are and how we work', url: '/about', k: 'about company who team gas safe insured ninja plumbers limited' },
  { t: 'page', title: 'Reviews', sub: 'What customers say', url: '/reviews', k: 'reviews review testimonials feedback rating' },
  { t: 'page', title: 'Site map', sub: 'Every page on the site', url: '/site-map', k: 'site map sitemap index all pages' },
];

const words = (...parts: (string | string[] | undefined)[]) =>
  parts.flat().filter(Boolean).join(' ').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();

// Blog bodies are pre-built HTML blocks; strip the markup before it joins
// the keyword soup, so tag and attribute names never leak in as noise.
const stripHtml = (html: string) => html.replace(/<[^>]+>/g, ' ');

const groupOf = (slug: string) => {
  const g = serviceGroups.find((x) => x.services.includes(slug));
  if (!g) throw new Error(`search.ts: service "${slug}" is in no group`);
  return g.slug;
};

export function buildSearchIndex(): SearchEntry[] {
  const out: SearchEntry[] = [];

  for (const g of serviceGroups) {
    out.push({ t: 'group', title: g.label, sub: g.blurb, url: '/services', k: words(g.label, GROUP_TERMS[g.slug]), g: g.slug });
  }

  for (const s of services) {
    out.push({
      t: 'service',
      title: s.title,
      sub: s.summary.split(/(?<=\.)\s/)[0],
      url: `/services/${s.slug}`,
      k: words(s.title, s.h1, SERVICE_TERMS[s.slug], s.guidance.map((x) => x.title)),
      g: groupOf(s.slug),
    });
  }

  for (const a of appliances) {
    out.push({
      t: 'appliance',
      title: a.title,
      sub: a.summary.split(/(?<=\.)\s/)[0],
      url: `/appliances/${a.slug}`,
      k: words(a.title, a.h1, APPLIANCE_TERMS[a.slug], a.guidance.map((x) => x.title)),
    });
  }

  for (const d of dampPages) {
    out.push({
      t: 'damp',
      title: d.title,
      sub: d.summary.split(/(?<=\.)\s/)[0],
      url: `/damp/${d.slug}`,
      k: words(d.title, d.h1, DAMP_TERMS[d.slug], d.guidance.map((x) => x.title)),
    });
  }

  for (const p of blogPosts) {
    out.push({
      t: 'blog',
      title: p.title,
      sub: p.excerpt,
      url: `/blog/${p.slug}`,
      k: words(p.title, p.h1, stripHtml(p.body)),
    });
  }

  for (const c of combos) {
    const s = services.find((x) => x.slug === c.service);
    const a = areas.find((x) => x.slug === c.area);
    if (!s || !a) throw new Error(`search.ts: combo ${c.service}/${c.area} names an unknown service or area`);
    out.push({
      t: 'combo',
      title: `${LOCAL_HEADING[s.slug] ?? s.title} in ${a.name}`,
      sub: `${a.borough} · ${a.postcodes.join(', ')}`,
      url: `/services/${c.service}/${c.area}`,
      k: words(s.title, SERVICE_TERMS[s.slug], a.name, a.borough, a.postcodes),
      g: groupOf(s.slug),
      pc: a.postcodes,
      w: c.volume,
    });
  }

  for (const a of areas) {
    out.push({
      t: 'area',
      title: `Plumber in ${a.name}`,
      sub: `${a.borough} · ${a.postcodes.join(', ')}`,
      url: `/areas/${a.slug}`,
      k: words(a.name, a.borough, a.postcodes, 'plumber plumbers'),
      pc: a.postcodes,
      w: a.volume,
    });
  }

  for (const p of postcodes) {
    out.push({
      t: 'postcode',
      title: `${p.district} · ${p.primary}`,
      sub: `${p.region} · ${p.neighbourhoods.slice(0, 3).join(', ')}`,
      url: `/postcodes/${p.slug}`,
      k: words(p.district, p.primary, p.neighbourhoods, p.boroughs, 'postcode'),
      pc: [p.district],
    });
  }

  for (const b of brands) {
    out.push({
      t: 'brand',
      title: `${b.name} boilers`,
      sub: `${b.name} boiler repair and servicing`,
      url: `/boilers/${b.slug}`,
      k: words(b.name, b.fuel, 'boiler brand make'),
    });
  }

  out.push(...PAGES);

  // Groups all point at the services hub, which also has its own page entry.
  // Beyond that, two entries for one URL would mean a page listed twice.
  const rest = out.filter((e) => e.t !== 'group').map((e) => e.url);
  const dupes = rest.filter((u, i) => rest.indexOf(u) !== i);
  if (dupes.length) throw new Error(`search.ts: pages listed twice: ${[...new Set(dupes)].join(', ')}`);
  return out;
}
