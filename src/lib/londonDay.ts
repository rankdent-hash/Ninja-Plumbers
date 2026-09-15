// Calendar days in the timezone the business actually works in.
//
// The admin reports are read by people in London, so "Today" has to mean today
// in London, not today in UTC. For roughly half the year those differ by an
// hour, which is enough to file an early-morning call under the wrong day and
// to make two tabs disagree about the same job.
//
// Rolling windows ("30 days") don't need any of this — they are just now minus
// a duration. Only the calendar ranges do.

/**
 * How far Europe/London is from UTC at a given instant, in minutes.
 * Read from Intl rather than hard-coded, so BST starts and ends on the right
 * dates without anyone maintaining a table.
 */
function londonOffsetMinutes(date: Date): number {
  const part = new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/London', timeZoneName: 'shortOffset' })
    .formatToParts(date)
    .find((p) => p.type === 'timeZoneName')!.value;
  const match = part.match(/GMT([+-]\d+)?/);
  return match?.[1] ? parseInt(match[1], 10) * 60 : 0;
}

/**
 * The instant London's midnight fell, `daysAgo` days back, as a UTC Date.
 * `londonMidnightUTC(0)` is the start of today, `(1)` the start of yesterday.
 *
 * The offset is taken from the candidate day rather than from now, so a range
 * that spans a clock change still lands on midnight at both ends.
 */
export function londonMidnightUTC(daysAgo: number): Date {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/London',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date());
  const y = +parts.find((p) => p.type === 'year')!.value;
  const m = +parts.find((p) => p.type === 'month')!.value;
  const d = +parts.find((p) => p.type === 'day')!.value;
  const guess = new Date(Date.UTC(y, m - 1, d - daysAgo));
  return new Date(guess.getTime() - londonOffsetMinutes(guess) * 60_000);
}

/**
 * since/until for a named calendar range, ready to hand to the reporting RPCs.
 * `until` is undefined for today because today is still running.
 */
export function londonDayRange(range: 'today' | 'yesterday'): { since: string; until?: string } {
  return range === 'yesterday'
    ? { since: londonMidnightUTC(1).toISOString(), until: londonMidnightUTC(0).toISOString() }
    : { since: londonMidnightUTC(0).toISOString() };
}
