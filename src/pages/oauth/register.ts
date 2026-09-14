import type { APIRoute } from 'astro';
import { getSupabaseAdmin } from '../../lib/supabaseAdmin';

// RFC 7591 Dynamic Client Registration. Deliberately open/unauthenticated —
// that's the point of DCR, it's how a brand-new client (Claude.ai setting up
// a connector, say) gets a client_id with no human pre-registering it
// anywhere. This grants no access on its own: a token only comes out of
// /oauth/token after a signed-in admin approves the client at
// /oauth/authorize, so the real security boundary is unmoved.
export const prerender = false;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

export const POST: APIRoute = async ({ request }) => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return json({ error: 'server_error', error_description: 'Not connected to Supabase.' }, 503);

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'invalid_client_metadata', error_description: 'Could not parse request body as JSON.' }, 400);
  }

  const redirectUris = body.redirect_uris;
  if (!Array.isArray(redirectUris) || redirectUris.length === 0 || !redirectUris.every((u) => typeof u === 'string')) {
    return json({ error: 'invalid_client_metadata', error_description: 'redirect_uris must be a non-empty array of strings.' }, 400);
  }
  for (const u of redirectUris) {
    try {
      new URL(u);
    } catch {
      return json({ error: 'invalid_redirect_uri', error_description: `"${u}" is not a valid URI.` }, 400);
    }
  }

  const clientName = typeof body.client_name === 'string' ? body.client_name.trim().slice(0, 200) : null;

  const { data, error } = await supabase
    .from('oauth_clients')
    .insert({ client_name: clientName, redirect_uris: redirectUris })
    .select('id, created_at')
    .single();

  if (error || !data) return json({ error: 'server_error', error_description: 'Could not register client.' }, 500);

  return json(
    {
      client_id: data.id,
      client_name: clientName,
      redirect_uris: redirectUris,
      token_endpoint_auth_method: 'none',
      grant_types: ['authorization_code'],
      response_types: ['code'],
      client_id_issued_at: Math.floor(new Date(data.created_at).getTime() / 1000),
    },
    201
  );
};
