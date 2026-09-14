import type { APIRoute } from 'astro';
import { SITE_ORIGIN } from '../../lib/oauth';

// RFC 9728. Tells a compliant MCP client which authorization server issues
// tokens for /api/mcp — the entry point for the whole OAuth wrapper
// described in src/lib/oauth.ts. Referenced from api/mcp.ts's 401 response
// via the WWW-Authenticate header's resource_metadata parameter.
export const prerender = false;

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      resource: `${SITE_ORIGIN}/api/mcp`,
      authorization_servers: [SITE_ORIGIN],
    }),
    { status: 200, headers: { 'content-type': 'application/json' } }
  );
