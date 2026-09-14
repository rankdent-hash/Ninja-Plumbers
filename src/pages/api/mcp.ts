import type { APIRoute } from 'astro';
import { getSupabaseAdmin } from '../../lib/supabaseAdmin';
import { verifyMcpToken } from '../../lib/mcpAuth';
import { TOOLS, callTool } from '../../lib/mcpTools';

export const prerender = false;

// A remote MCP server (Model Context Protocol, Streamable HTTP transport)
// exposing the blog tools in mcpTools.ts to an external AI chat client —
// Claude's or ChatGPT's custom-connector settings, pointed at this URL with
// a bearer token generated in /admin/settings. One stateless JSON-RPC 2.0
// endpoint: every call is self-contained, so there is no session to track
// and every response is a single JSON object rather than an SSE stream —
// both are valid per spec for a server with nothing to push on its own.
//
// The real safety boundary is not here, it's in mcpTools.ts: this file only
// handles the protocol envelope and auth. See that file for what a caller
// with a valid token can and cannot do.

const PROTOCOL_VERSION = '2025-06-18';
const SERVER_INFO = { name: 'tamesis-plumbers-blog', version: '1.0.0' };

type JsonRpcRequest = { jsonrpc?: string; id?: string | number | null; method?: string; params?: Record<string, unknown> };

const rpcResult = (id: unknown, result: unknown) =>
  new Response(JSON.stringify({ jsonrpc: '2.0', id, result }), { status: 200, headers: { 'content-type': 'application/json' } });

const rpcError = (id: unknown, code: number, message: string) =>
  new Response(JSON.stringify({ jsonrpc: '2.0', id: id ?? null, error: { code, message } }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });

// resource_metadata (RFC 9728 §5.1) points a compliant client at
// oauth-protected-resource, which in turn names the authorization server
// (src/pages/oauth/*) — this is what lets a client discover and use the
// OAuth wrapper instead of erroring out with no bearer token at all.
const unauthorized = (origin: string) =>
  new Response(JSON.stringify({ error: 'Unauthorized. Provide a valid bearer token.' }), {
    status: 401,
    headers: {
      'content-type': 'application/json',
      'www-authenticate': `Bearer resource_metadata="${origin}/.well-known/oauth-protected-resource"`,
    },
  });

export const POST: APIRoute = async ({ request }) => {
  const origin = new URL(request.url).origin;
  const supabase = getSupabaseAdmin();
  if (!supabase) return unauthorized(origin); // fail closed, same rule as every other admin surface

  const authHeader = request.headers.get('authorization') || '';
  const presented = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : null;
  const caller = await verifyMcpToken(supabase, presented);
  if (!caller) return unauthorized(origin);

  let msg: JsonRpcRequest;
  try {
    msg = await request.json();
  } catch {
    return new Response(JSON.stringify({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  const { id, method, params } = msg;
  const isNotification = id === undefined; // JSON-RPC notifications carry no id and get no response body

  switch (method) {
    case 'initialize': {
      const clientVersion = typeof params?.protocolVersion === 'string' ? params.protocolVersion : PROTOCOL_VERSION;
      return rpcResult(id, { protocolVersion: clientVersion, capabilities: { tools: {} }, serverInfo: SERVER_INFO });
    }

    case 'notifications/initialized':
    case 'notifications/cancelled':
      // Client-to-server notifications: acknowledged, nothing to do.
      return new Response(null, { status: 202 });

    case 'ping':
      return isNotification ? new Response(null, { status: 202 }) : rpcResult(id, {});

    case 'tools/list':
      return rpcResult(id, { tools: TOOLS });

    case 'tools/call': {
      const toolName = typeof params?.name === 'string' ? params.name : '';
      const args = (params?.arguments && typeof params.arguments === 'object' ? params.arguments : {}) as Record<string, unknown>;
      if (!toolName) return rpcError(id, -32602, 'Invalid params: "name" is required.');
      const result = await callTool(supabase, toolName, args);
      return rpcResult(id, result);
    }

    default:
      if (isNotification) return new Response(null, { status: 202 });
      return rpcError(id, -32601, `Method not found: ${method}`);
  }
};

// Some MCP clients probe with GET before adding a connector, or expect a
// predictable response rather than a bare 404. Streamable HTTP servers with
// nothing to push on their own can simply decline the optional SSE stream.
export const GET: APIRoute = async () =>
  new Response(JSON.stringify({ jsonrpc: '2.0', error: { code: -32000, message: 'This server only supports POST.' } }), {
    status: 405,
    headers: { 'content-type': 'application/json', allow: 'POST' },
  });
