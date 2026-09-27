// Lower-cases a page title for use mid-sentence ("Get a price for boiler
// repair"), keeping acronyms as they should be ("an EICR", "EV charger").
const KEEP = ['EICR', 'EV', 'RCD', 'PAT', 'CCTV'];

export function lowerTitle(title: string): string {
  let out = title.replace(/&amp;/g, 'and').toLowerCase();
  for (const word of KEEP) out = out.replace(new RegExp(`\\b${word.toLowerCase()}\\b`, 'g'), word);
  return out;
}
