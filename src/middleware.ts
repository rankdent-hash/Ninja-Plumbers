import { defineMiddleware } from 'astro:middleware';
import { verifySession, SESSION_COOKIE } from './lib/adminAuth';

// Guards /admin (except the login page) and /api/admin (except the login
// route). Every other request on the site passes straight through — this is
// the only thing middleware does, checked first so the cost is one string
// comparison for the other few hundred pages.
const PUBLIC_ADMIN_PATHS = new Set(['/admin/login', '/api/admin/login']);

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  const isAdminArea = pathname.startsWith('/admin') || pathname.startsWith('/api/admin');
  if (!isAdminArea || PUBLIC_ADMIN_PATHS.has(pathname)) return next();

  const secret = import.meta.env.ADMIN_SESSION_SECRET;
  const isApi = pathname.startsWith('/api/');

  // No secret configured: fail closed, the same way the enquiry API fails
  // closed with no Supabase credentials, rather than trusting an unsigned or
  // predictably-signed session.
  if (!secret) {
    if (isApi) {
      return new Response(JSON.stringify({ ok: false, message: 'Admin panel is not configured.' }), {
        status: 503,
        headers: { 'content-type': 'application/json' },
      });
    }
    return new Response('The admin panel is not configured yet.', { status: 503 });
  }

  const token = context.cookies.get(SESSION_COOKIE)?.value;
  const session = verifySession(token, secret);

  if (!session) {
    if (isApi) {
      return new Response(JSON.stringify({ ok: false, message: 'Please log in again.' }), {
        status: 401,
        headers: { 'content-type': 'application/json' },
      });
    }
    const next = encodeURIComponent(pathname + context.url.search);
    return context.redirect(`/admin/login?next=${next}`);
  }

  context.locals.admin = { id: session.id, email: session.email };
  return next();
});
