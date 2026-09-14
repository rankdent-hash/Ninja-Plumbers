import type { APIRoute } from 'astro';
import { getSupabaseAdmin } from '../../lib/supabaseAdmin';
import { generateMcpToken, hashMcpToken } from '../../lib/mcpAuth';
import { verifyPkce } from '../../lib/oauth';

export const prerender = false;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

/** Token requests are conventionally application/x-www-form-urlencoded, but
 * some clients send JSON — accept either rather than fail one of them. */
async function parseBody(request: Request): Promise<Record<string, string>> {
  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    const body = await request.json().catch(() => ({}));
    const out: Record<string, string> = {};
    for (const [k, v] of Object.entries(body)) if (typeof v === 'string') out[k] = v;
    return out;
  }
  const params = new URLSearchParams(await request.text());
  return Object.fromEntries(params.entries());
}

// Server-to-server token exchange: an authorization code (from
// /oauth/authorize, via a real admin's approval) plus its PKCE verifier,
// swapped for a real access token — which is a completely ordinary row in
// mcp_tokens, the same table /admin/settings creates rows in directly. This
// endpoint's only job is proving the caller holds the code and the matching
// PKCE secret; every actual write/read permission still lives in
// mcpTools.ts, unchanged.
export const POST: APIRoute = async ({ request }) => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return json({ error: 'server_error', error_description: 'Not connected to Supabase.' }, 503);

  const body = await parseBody(request);
  if (body.grant_type !== 'authorization_code') {
    return json({ error: 'unsupported_grant_type' }, 400);
  }

  const code = body.code || '';
  const { data: authCode } = await supabase.from('oauth_codes').select('*').eq('code', code).maybeSingle();
  if (!authCode) return json({ error: 'invalid_grant', error_description: 'Unknown or already-used code.' }, 400);

  if (new Date(authCode.expires_at).getTime() < Date.now()) {
    return json({ error: 'invalid_grant', error_description: 'This code has expired.' }, 400);
  }
  if (body.client_id !== authCode.client_id) {
    return json({ error: 'invalid_grant', error_description: 'client_id does not match this code.' }, 400);
  }
  if (body.redirect_uri !== authCode.redirect_uri) {
    return json({ error: 'invalid_grant', error_description: 'redirect_uri does not match this code.' }, 400);
  }
  if (!body.code_verifier || !verifyPkce(body.code_verifier, authCode.code_challenge, authCode.code_challenge_method)) {
    return json({ error: 'invalid_grant', error_description: 'PKCE verification failed.' }, 400);
  }

  // Only burn the code once every check has passed — a wrong PKCE verifier
  // or a mismatched client_id is a rejected attempt, not a "used" code, and
  // a legitimate retry with the right values should still work.
  await supabase.from('oauth_codes').delete().eq('code', code);

  const { data: client } = await supabase.from('oauth_clients').select('client_name').eq('id', authCode.client_id).maybeSingle();
  const label = client?.client_name ? `OAuth: ${client.client_name}` : 'OAuth connector';
  const dateLabel = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  const rawToken = generateMcpToken();
  const { error } = await supabase.from('mcp_tokens').insert({
    name: `${label} · ${dateLabel}`.slice(0, 80),
    token_hash: hashMcpToken(rawToken),
  });
  if (error) return json({ error: 'server_error', error_description: 'Could not issue a token.' }, 500);

  return json({ access_token: rawToken, token_type: 'Bearer' }, 200);
};
