import type { APIRoute } from 'astro';
import { SITE_ORIGIN } from '../../lib/oauth';

// RFC 8414. Advertises the three endpoints implemented in src/pages/oauth/
// — register (RFC 7591 DCR), authorize, token. Every registered client is a
// public client using PKCE (token_endpoint_auth_method: "none"); there is
// no client_secret anywhere in this flow.
export const prerender = false;

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      issuer: SITE_ORIGIN,
      authorization_endpoint: `${SITE_ORIGIN}/oauth/authorize`,
      token_endpoint: `${SITE_ORIGIN}/oauth/token`,
      registration_endpoint: `${SITE_ORIGIN}/oauth/register`,
      response_types_supported: ['code'],
      grant_types_supported: ['authorization_code'],
      code_challenge_methods_supported: ['S256'],
      token_endpoint_auth_methods_supported: ['none'],
    }),
    { status: 200, headers: { 'content-type': 'application/json' } }
  );
