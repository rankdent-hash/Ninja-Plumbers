// /llms.txt — a plain-text map of the site for AI assistants and answer
// engines (the llmstxt.org convention): who the business is, the facts people
// ask about, and every service and sector page with a one-line description.
// Built from the same data as the pages, so it cannot drift from them.
import type { APIRoute } from 'astro';
import site from '../data/site.json';
import { services } from '../data/services';
import { appliances } from '../data/appliances';
import { dampPages } from '../data/damp';
import { groupedSectors } from '../data/sectors';

const url = (path: string) => `${site.url}${path}`;
const line = (title: string, path: string, note?: string) =>
  `- [${title.replace(/<[^>]+>/g, '')}](${url(path)})${note ? `: ${note.replace(/\s+/g, ' ').trim()}` : ''}`;

export const GET: APIRoute = () => {
  const out = [
    `# ${site.name}`,
    '',
    `> ${site.name} (${site.legalName}, company number ${site.companyNumber}) is a plumbing, heating, drainage, electrical and air conditioning company based at ${site.address.line1}, ${site.address.city} ${site.address.postcode}. It works for homes, landlords and small businesses across Greater London, plus Guildford, Woking and nearby Surrey and north-east Hampshire towns.`,
    '',
    '## Key facts',
    '',
    `- Phone: ${site.booking.display} (${site.hours.office}; emergency callout 24/7)`,
    `- WhatsApp: ${site.whatsapp.display}`,
    `- Email: ${site.email}`,
    '- Gas Safe registered engineers, registered electricians and F-Gas certified air conditioning engineers',
    '- DBS-checked, directly employed engineers (not subcontractors); fully insured',
    '- The price is agreed before work starts; workmanship guaranteed; card or cash accepted',
    '- Small-business work is scheduled around opening hours: early, late, weekends or out of hours',
    '- Not offered: oil boilers, commercial catering gas and large commercial boiler plant, legionella risk assessments',
    '',
    '## Main pages',
    '',
    line('Home', '/'),
    line('All services', '/services'),
    line('Boilers and gas engineers', '/boilers'),
    line('Heating', '/heating'),
    line('Drainage', '/drainage'),
    line('Electrical', '/electrical'),
    line('Appliances', '/appliances'),
    line('Damp and condensation', '/damp'),
    line('Commercial plumbing for small businesses', '/services/commercial-plumbing'),
    line('Areas we cover', '/areas-we-cover'),
    line('About', '/about'),
    line('Contact', '/contact'),
    '',
    '## Services',
    '',
    ...services.map((s) => line(s.title, `/services/${s.slug}`, s.summary)),
    '',
    '## Appliances and fittings',
    '',
    ...appliances.map((a) => line(a.title, `/appliances/${a.slug}`, a.summary)),
    '',
    '## Damp and condensation',
    '',
    ...dampPages.map((d) => line(d.title, `/damp/${d.slug}`, d.summary)),
    '',
    '## Small businesses we work for',
    '',
    ...groupedSectors.flatMap((g) => [
      `### ${g.label}`,
      '',
      ...g.sectors.map((s) => line(s.name, `/commercial/${s.slug}`, s.summary)),
      '',
    ]),
  ];
  return new Response(out.join('\n'), { headers: { 'content-type': 'text/plain; charset=utf-8' } });
};
