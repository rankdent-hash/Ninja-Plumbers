/**
 * Salted hash of a caller's IP address, so rate limiting works without ever
 * retaining a raw IP. Shared by the enquiry form, the click tracker and the
 * page-view counter.
 *
 * Every caller puts the current date in the salt, so a hash identifies a
 * visitor for the rest of the day and then stops meaning anything. That is
 * what keeps an hour-long rate limit working while making it impossible to
 * follow someone across days — or to join a named enquiry to click history
 * recorded on any other day.
 */
export async function hashIp(ip: string, salt: string): Promise<string> {
  const data = new TextEncoder().encode(`${ip}:${salt}`);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}
