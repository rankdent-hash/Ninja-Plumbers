/**
 * Salted hash of a caller's IP address, so rate limiting works without ever
 * retaining a raw IP. Shared by the enquiry form and the click tracker so both
 * derive the same hash for the same visitor from the same IP_SALT.
 */
export async function hashIp(ip: string, salt: string): Promise<string> {
  const data = new TextEncoder().encode(`${ip}:${salt}`);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}
