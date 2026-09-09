// The header search's index, emitted as a static file at build time.
import type { APIRoute } from 'astro';
import { buildSearchIndex } from '../data/search';

export const GET: APIRoute = () =>
  new Response(JSON.stringify(buildSearchIndex()), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
