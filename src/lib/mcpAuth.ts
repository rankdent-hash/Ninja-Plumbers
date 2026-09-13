import { randomBytes } from 'node:crypto';
import type { SupabaseClient } from '@supabase/supabase-js';
import { hashPassword, verifyPassword } from './adminAuth';

// Bearer tokens for the remote MCP server (api/mcp.ts). Same PBKDF2 scheme as
// the admin login (hashPassword/verifyPassword are generic string-hashing
// functions despite the name — reused here rather than duplicated), because
// the threat model is the same: verify a secret against a stored hash,
// nothing recoverable if the table leaks.
//
// A small business has at most a handful of these tokens active at once, so
// verification just tries the presented token against every active row's
// hash rather than needing a fast indexed lookup — simplest correct thing,
// and there is no meaningful scale where that stops being fine.
const TOKEN_PREFIX = 'tmcp_';
const TOKEN_BYTES = 32;

export function generateMcpToken(): string {
  return TOKEN_PREFIX + randomBytes(TOKEN_BYTES).toString('base64url');
}

export function hashMcpToken(token: string): string {
  return hashPassword(token);
}

export type McpTokenRow = { id: string; name: string; token_hash: string };

/** Null if the token doesn't match any active (non-revoked) token. */
export async function verifyMcpToken(
  supabase: SupabaseClient,
  presented: string | null
): Promise<{ id: string; name: string } | null> {
  if (!presented || !presented.startsWith(TOKEN_PREFIX)) return null;

  const { data: rows } = await supabase
    .from('mcp_tokens')
    .select('id, name, token_hash')
    .is('revoked_at', null);

  for (const row of (rows ?? []) as McpTokenRow[]) {
    if (verifyPassword(presented, row.token_hash)) {
      // Best-effort — a failed write here should never block the request
      // that's already been authenticated.
      supabase
        .from('mcp_tokens')
        .update({ last_used_at: new Date().toISOString() })
        .eq('id', row.id)
        .then(() => {});
      return { id: row.id, name: row.name };
    }
  }
  return null;
}
