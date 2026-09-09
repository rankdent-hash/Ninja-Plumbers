import type { APIRoute } from 'astro';
import { getSupabaseAdmin } from '../../../lib/supabaseAdmin';
import { verifyPassword, createSession, SESSION_COOKIE, SESSION_TTL_SECONDS } from '../../../lib/adminAuth';

export const prerender = false;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

export const POST: APIRoute = async ({ request, cookies }) => {
  const secret = import.meta.env.ADMIN_SESSION_SECRET;
  const supabase = getSupabaseAdmin();
  if (!secret || !supabase) return json({ ok: false, error: 'not_configured' }, 503);

  let body: Record<string, any>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'invalid' }, 400);
  }

  const email = String(body.email || '').trim().toLowerCase();
  const password = String(body.password || '');
  if (!email || !password) return json({ ok: false, error: 'invalid' }, 400);

  const { data: admin } = await supabase
    .from('admins')
    .select('id, email, password_hash')
    .eq('email', email)
    .maybeSingle();

  // Same generic error either way, so a login attempt can't be used to find
  // out which email addresses have an account.
  if (!admin || !verifyPassword(password, admin.password_hash)) {
    return json({ ok: false, error: 'invalid' }, 401);
  }

  await supabase.from('admins').update({ last_login_at: new Date().toISOString() }).eq('id', admin.id);

  const token = createSession({ id: admin.id, email: admin.email }, secret);
  cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'strict',
    path: '/',
    maxAge: SESSION_TTL_SECONDS,
  });

  return json({ ok: true }, 200);
};
