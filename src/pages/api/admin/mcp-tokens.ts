import type { APIRoute } from 'astro';
import { getSupabaseAdmin } from '../../../lib/supabaseAdmin';
import { generateMcpToken, hashMcpToken } from '../../../lib/mcpAuth';

export const prerender = false;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

export const GET: APIRoute = async () => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return json({ ok: false, message: 'Not connected to Supabase.' }, 503);

  const { data, error } = await supabase
    .from('mcp_tokens')
    .select('id, name, created_at, last_used_at, revoked_at')
    .order('created_at', { ascending: false });
  if (error) return json({ ok: false, message: 'Could not load tokens.' }, 500);

  return json({ ok: true, tokens: data ?? [] }, 200);
};

/** Creates a new token and returns the raw value exactly once — only the
 * PBKDF2 hash is stored, so this is the only response that will ever contain
 * it. Losing it means generating a new one, not recovering the old one. */
export const POST: APIRoute = async ({ request }) => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return json({ ok: false, message: 'Not connected to Supabase.' }, 503);

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, message: 'Could not read that request.' }, 400);
  }

  const name = typeof body.name === 'string' ? body.name.trim().slice(0, 80) : '';
  if (!name) return json({ ok: false, message: 'Give this token a name, e.g. "Claude connector".' }, 400);

  const rawToken = generateMcpToken();
  const { data, error } = await supabase
    .from('mcp_tokens')
    .insert({ name, token_hash: hashMcpToken(rawToken) })
    .select('id, name, created_at')
    .single();
  if (error || !data) return json({ ok: false, message: 'Could not create that token.' }, 500);

  return json({ ok: true, token: rawToken, row: data }, 200);
};

export const DELETE: APIRoute = async ({ request }) => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return json({ ok: false, message: 'Not connected to Supabase.' }, 503);

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, message: 'Could not read that request.' }, 400);
  }

  const id = typeof body.id === 'string' ? body.id : '';
  if (!id) return json({ ok: false, message: 'Missing token id.' }, 400);

  const { error } = await supabase.from('mcp_tokens').update({ revoked_at: new Date().toISOString() }).eq('id', id);
  if (error) return json({ ok: false, message: 'Could not revoke that token.' }, 500);

  return json({ ok: true }, 200);
};
