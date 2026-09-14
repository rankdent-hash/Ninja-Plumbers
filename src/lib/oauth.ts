import { randomBytes, createHash } from 'node:crypto';

// Minimal OAuth 2.1 authorization-code + PKCE wrapper around the existing
// MCP bearer-token system (mcpAuth.ts). This exists for one reason: several
// MCP clients — Claude.ai's custom-connector setup among them — always
// attempt OAuth Dynamic Client Registration against a server before ever
// trying a plain bearer token, and error out (rather than falling back)
// when the server has no OAuth endpoints at all. Implementing this lets
// that registration succeed; the actual "login" step is the same signed-in
// admin session /admin already uses, and what comes out the other end is a
// completely normal row in mcp_tokens — nothing about what an MCP client
// can do changes, only how it obtains a token.
export const AUTH_CODE_TTL_SECONDS = 5 * 60;
const CODE_BYTES = 32;

export function generateAuthCode(): string {
  return randomBytes(CODE_BYTES).toString('base64url');
}

/** RFC 7636 PKCE verification. Only S256 is accepted — every current MCP
 * client supports it, and "plain" exists in the spec mainly for constrained
 * devices that don't apply here. */
export function verifyPkce(verifier: string, challenge: string, method: string): boolean {
  if (method !== 'S256') return false;
  const computed = createHash('sha256').update(verifier).digest('base64url');
  return computed === challenge;
}

/** Exact-match only — an OAuth client's redirect_uri must be one it
 * registered, never a prefix or pattern match, or an authorization code
 * could be redirected somewhere the real client never sees it. */
export function isRegisteredRedirect(redirectUri: string, registered: unknown): boolean {
  return Array.isArray(registered) && registered.includes(redirectUri);
}
