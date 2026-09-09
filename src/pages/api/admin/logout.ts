import type { APIRoute } from 'astro';
import { SESSION_COOKIE } from '../../../lib/adminAuth';

export const prerender = false;

export const POST: APIRoute = ({ cookies }) => {
  cookies.delete(SESSION_COOKIE, { path: '/' });
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'content-type': 'application/json' } });
};
