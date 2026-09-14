import type { APIRoute } from 'astro';
import { getSupabaseAdmin } from '../../../lib/supabaseAdmin';
import { verifySession, SESSION_COOKIE } from '../../../lib/adminAuth';
import { generateAuthCode, isRegisteredRedirect, AUTH_CODE_TTL_SECONDS } from '../../../lib/oauth';

export const prerender = false;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

// Approve/deny action for the /oauth/authorize consent screen. Everything
// here is re-validated server-side rather than trusted from the request —
// the values came back through client-side JS, not a signed token.
export const POST: APIRoute = async ({ request, cookies }) => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return json({ error: 'server_error', error_description: 'Not connected to Supabase.' }, 503);

  const secret = import.meta.env.ADMIN_SESSION_SECRET;
  const admin = secret ? verifySession(cookies.get(SESSION_COOKIE)?.value, secret) : null;
  if (!admin) return json({ error: 'access_denied', error_description: 'You are not logged in.' }, 401);

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'invalid_request', error_description: 'Could not read that request.' }, 400);
  }

  const clientId = typeof body.client_id === 'string' ? body.client_id : '';
  const redirectUri = typeof body.redirect_uri === 'string' ? body.redirect_uri : '';
  const { data: client } = await supabase.from('oauth_clients').select('id, redirect_uris').eq('id', clientId).maybeSingle();
  if (!client || !isRegisteredRedirect(redirectUri, client.redirect_uris)) {
    return json({ error: 'invalid_request', error_description: 'Unknown client or redirect_uri.' }, 400);
  }

  const state = typeof body.state === 'string' ? body.state : '';

  if (body.decision === 'deny') {
    return json({ redirect_url: `${redirectUri}?error=access_denied&state=${encodeURIComponent(state)}` }, 200);
  }

  const codeChallenge = typeof body.code_challenge === 'string' ? body.code_challenge : '';
  const codeChallengeMethod = typeof body.code_challenge_method === 'string' ? body.code_challenge_method : '';
  if (!codeChallenge || codeChallengeMethod !== 'S256') {
    return json({ error: 'invalid_request', error_description: 'PKCE (S256) is required.' }, 400);
  }

  const code = generateAuthCode();
  const { error } = await supabase.from('oauth_codes').insert({
    code,
    client_id: clientId,
    redirect_uri: redirectUri,
    code_challenge: codeChallenge,
    code_challenge_method: codeChallengeMethod,
    admin_id: admin.id,
    expires_at: new Date(Date.now() + AUTH_CODE_TTL_SECONDS * 1000).toISOString(),
  });
  if (error) return json({ error: 'server_error', error_description: 'Could not create authorization code.' }, 500);

  return json({ redirect_url: `${redirectUri}?code=${encodeURIComponent(code)}&state=${encodeURIComponent(state)}` }, 200);
};
