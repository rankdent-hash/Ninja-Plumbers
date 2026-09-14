import type { APIRoute } from 'astro';

// RFC 8414. Advertises the three endpoints implemented in src/pages/oauth/
// — register (RFC 7591 DCR), authorize, token. Every registered client is a
// public client using PKCE (token_endpoint_auth_method: "none"); there is
// no client_secret anywhere in this flow.
export const prerender = false;

export const GET: APIRoute = ({ url }) => {
  const origin = url.origin;
  return new Response(
    JSON.stringify({
      issuer: origin,
      authorization_endpoint: `${origin}/oauth/authorize`,
      token_endpoint: `${origin}/oauth/token`,
      registration_endpoint: `${origin}/oauth/register`,
      response_types_supported: ['code'],
      grant_types_supported: ['authorization_code'],
      code_challenge_methods_supported: ['S256'],
      token_endpoint_auth_methods_supported: ['none'],
    }),
    { status: 200, headers: { 'content-type': 'application/json' } }
  );
};
