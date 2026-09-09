// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { createClient } from '@supabase/supabase-js';
import { INDEX_POSTCODE_PAGES } from './src/data/postcodes.ts';
import vercel from '@astrojs/vercel';

const SITE_URL = 'https://www.ninjaplumbers.co.uk';

// Published blog posts live in Supabase, not a build-time literal (see
// src/data/blog.ts), so the sitemap integration's own page-crawl can't see
// them — /blog/[slug] is server-rendered with no known set of slugs at
// build time. Fetched here instead, with process.env directly: this file
// loads before Vite, so import.meta.env (what src/data/blog.ts uses) isn't
// populated yet. Same accepted empty-locally limitation as everywhere else
// this pattern appears.
async function publishedBlogUrls() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return [];
  const supabase = createClient(url, key, { auth: { persistSession: false } });
  const { data } = await supabase.from('blog_posts').select('slug').eq('status', 'published');
  return (data ?? []).map((p) => `${SITE_URL}/blog/${p.slug}`);
}

const blogUrls = await publishedBlogUrls();

export default defineConfig({
  site: 'https://www.ninjaplumbers.co.uk',
  // Vercel serves these with cleanUrls, so pages resolve at /services rather
  // than /services.html. Previously every internal link and every canonical
  // pointed at a .html path that 308-redirected.
  trailingSlash: 'never',
  build: { format: 'directory' },
  // Pages stay prerendered; only src/pages/api/* opts out via
  // `export const prerender = false` and becomes a function.
  // Legacy .html paths from before the Astro migration. Declared here rather
  // than in vercel.json so the adapter emits them into its own routing config
  // — vercel.json routing does not reliably apply on top of Build Output API.
  redirects: {
    '/index.html':          { status: 301, destination: '/' },
    '/services.html':       { status: 301, destination: '/services' },
    '/areas-we-cover.html': { status: 301, destination: '/areas-we-cover' },
    '/about.html':          { status: 301, destination: '/about' },
    '/reviews.html':        { status: 301, destination: '/reviews' },
    '/contact.html':        { status: 301, destination: '/contact' },

    // The bundled boiler-repair-installation service was split into four
    // pages (repair, service, installation, replacement) because each has its
    // own head term and its own demand. These keep the old URLs alive.
    '/services/boiler-repair-installation': { status: 301, destination: '/services/boiler-repair' },
    '/services/boiler-repair-installation/wimbledon': { status: 301, destination: '/services/boiler-repair/wimbledon' },
    '/services/boiler-repair-installation/ealing': { status: 301, destination: '/services/boiler-repair/ealing' },
    '/services/boiler-repair-installation/croydon': { status: 301, destination: '/services/boiler-repair/croydon' },
    '/services/boiler-repair-installation/harrow': { status: 301, destination: '/services/boiler-repair/harrow' },
    '/services/boiler-repair-installation/fulham': { status: 301, destination: '/services/boiler-repair/fulham' },
    '/services/boiler-repair-installation/wandsworth': { status: 301, destination: '/services/boiler-repair/wandsworth' },
    '/services/boiler-repair-installation/clapham': { status: 301, destination: '/services/boiler-repair/clapham' },
    '/services/boiler-repair-installation/bromley': { status: 301, destination: '/services/boiler-repair/bromley' },
    '/services/boiler-repair-installation/brixton': { status: 301, destination: '/services/boiler-repair/brixton' },
    '/services/boiler-repair-installation/hackney': { status: 301, destination: '/services/boiler-repair/hackney' },

    // The shower page was rebuilt as installation-only (see nav/appliances
    // change); the old repair-focused URL now redirects to it.
    '/appliances/electric-shower-repair': { status: 301, destination: '/appliances/electric-shower-installation' },

    // The single air-conditioning page (installation-focused) was split into
    // repair, maintenance and installation, same pattern as the boiler split
    // above. This keeps the old URL alive.
    '/services/air-conditioning': { status: 301, destination: '/services/air-conditioning-installation' },
  },
  adapter: vercel(),
  integrations: [
    // /lp/* are paid-search landing pages: noindex, and kept out of the
    // sitemap so they never compete with the organic service pages.
    sitemap({
      customPages: blogUrls,
      // Cosmetic only — a stylesheet so the raw XML reads as a page in a
      // browser. Crawlers ignore xml-stylesheet and parse the XML directly.
      xslURL: '/sitemap.xsl',
      filter: (page) =>
        !page.includes('/lp/') &&
        !page.includes('/404') &&
        !page.includes('/explorer') &&
        !page.includes('search-index') &&
        !page.includes('/admin') &&
        // Postcode district pages come out of the sitemap together with their
        // noindex, controlled by the one flag in src/data/postcodes.ts.
        (INDEX_POSTCODE_PAGES || !/\/postcodes\//.test(page)),
    }),
  ],
});
