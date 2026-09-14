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
/**
 * Today's salt, or null when IP_SALT is not configured.
 *
 * There is deliberately no fallback value. A hardcoded one would live in this
 * repository, and a salt everyone can read is no salt at all — the whole IPv4
 * space can be hashed against it in seconds, which would turn these "one-way
 * codes" back into IP addresses and make what /privacy and /cookies say about
 * them untrue. Callers store null instead and skip their rate limit, which is
 * a visible, harmless degradation rather than a silent, invisible one.
 */
export function dailySalt(): string | null {
  const base = import.meta.env.IP_SALT;
  if (!base) return null;
  return `${base}:${new Date().toISOString().slice(0, 10)}`;
}

export async function hashIp(ip: string, salt: string): Promise<string> {
  const data = new TextEncoder().encode(`${ip}:${salt}`);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}
