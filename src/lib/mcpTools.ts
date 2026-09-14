import type { SupabaseClient } from '@supabase/supabase-js';
import { sanitizeBlogBody } from './sanitizeBlogHtml';
import { slugify } from './slugify';
import { services } from '../data/services';
import { appliances } from '../data/appliances';
import { dampPages } from '../data/damp';
import { landings } from '../data/landing';
import { REAL_RATING, REAL_TRUST_EXTRA, PREMIUM_ART_VALUES, PREMIUM_ICON_VALUES, isPremiumArt, isPremiumIcon } from './landingPages';
import { SERVICE_ICON_VALUES, isServiceIcon } from './servicePages';
import { getSetting } from './adminSettings';
import { generateAndStoreHeroImage } from './blogImages';
import { SITE_ORIGIN } from './oauth';

// Tools exposed to the remote MCP server (api/mcp.ts) — what an external AI
// chat client (Claude, ChatGPT, etc.) can actually do to this site's blog.
//
// The one rule every handler below enforces, deliberately more conservative
// than the human /admin/blog panel: MCP can create and edit DRAFT posts, and
// nothing else. It cannot publish or unpublish a post, cannot touch a post
// that is already published, and cannot delete anything. A post written or
// edited through MCP always still needs a human to open /admin/blog and
// click Publish before it is visible to a single site visitor — the exact
// same rule the existing AI-generation flow already follows (see
// api/admin/blog/generate.ts), just extended to a caller outside the panel.
const MAX_MCP_POSTS_PER_HOUR = 20;

// Hero images cost real money per call (OpenAI image generation), so they
// get their own cap. This counts any post touched in the last hour that now
// has a hero image, which under-counts repeated regenerations of the same
// post rather than over-counts — good enough for a single-admin site whose
// only caller already holds an admin-issued token.
const MAX_MCP_IMAGES_PER_HOUR = 15;

// Landing pages (the /lp/* paid-search pages) follow the identical rule:
// MCP creates and edits DRAFT rows in a Supabase table kept separate from the
// 10 hand-written campaigns in src/data/landing.ts, which this never touches.
// A draft is only ever built into a real /lp/<slug> URL once a human
// publishes it in /admin/landing-pages. rating and trustExtra are never
// accepted from a caller — every existing page carries the same confirmed,
// live figures (see REAL_RATING/REAL_TRUST_EXTRA), so new ones reuse them
// rather than risk an invented review count or rating ever reaching a page.
// A discount (`offer`) is likewise never set by MCP — like the original
// pages, it only ever goes on with an explicit human go-ahead, added in the
// admin edit screen.
const MAX_MCP_LANDING_PAGES_PER_HOUR = 10;

// Service pages follow the same draft-only, publish-is-human-only rule, but
// publishing one is a bigger claim than a landing page: it's a real,
// Google-indexed statement that this is a service Tamesis now offers, listed
// on /services and cross-linked from every other service page. It is never
// wired into the header mega menu or footer by any of this — those are
// hand-curated (src/data/nav.ts) and stay a deliberate human edit.
const MAX_MCP_SERVICE_PAGES_PER_HOUR = 5;

const STATUS_VALUES = ['draft', 'published', 'all'] as const;

const RELATED_FIELDS = ['related_services', 'related_appliances', 'related_damp'] as const;

function str(v: unknown, max: number): string | undefined {
  return typeof v === 'string' && v.trim() ? v.trim().slice(0, max) : undefined;
}

function strArray(v: unknown): string[] | undefined {
  if (!Array.isArray(v)) return undefined;
  return v.filter((x): x is string => typeof x === 'string');
}

/** Same guard the AI-generation flow uses: drop anything that isn't a slug
 * that genuinely exists, rather than let a caller (human or model) wire a
 * post to a page that doesn't exist. */
function filterSlugs(input: string[] | undefined, valid: Set<string>): string[] {
  return (input ?? []).filter((s) => valid.has(s));
}

async function uniqueSlug(supabase: SupabaseClient, title: string): Promise<string> {
  const base = slugify(title);
  let slug = base;
  for (let i = 2; i < 50; i++) {
    const { data: existing } = await supabase.from('blog_posts').select('id').eq('slug', slug).maybeSingle();
    if (!existing) break;
    slug = `${base}-${i}`;
  }
  return slug;
}

/** Same idea, but must also dodge the 10 hand-written slugs in landing.ts —
 * getStaticPaths merges both sets, and a collision there is a build error,
 * not a soft failure. */
async function uniqueLandingSlug(supabase: SupabaseClient, title: string): Promise<string> {
  const base = slugify(title);
  const staticSlugs = new Set(landings.map((l) => l.slug));
  let slug = base;
  for (let i = 2; i < 50; i++) {
    if (!staticSlugs.has(slug)) {
      const { data: existing } = await supabase.from('landing_pages').select('id').eq('slug', slug).maybeSingle();
      if (!existing) break;
    }
    slug = `${base}-${i}`;
  }
  return slug;
}

/** Same idea again, dodging the 19 real trade services in services.ts. */
async function uniqueServiceSlug(supabase: SupabaseClient, title: string): Promise<string> {
  const base = slugify(title);
  const staticSlugs = new Set(services.map((s) => s.slug));
  let slug = base;
  for (let i = 2; i < 50; i++) {
    if (!staticSlugs.has(slug)) {
      const { data: existing } = await supabase.from('service_pages').select('id').eq('slug', slug).maybeSingle();
      if (!existing) break;
    }
    slug = `${base}-${i}`;
  }
  return slug;
}

const text = (s: string) => ({ content: [{ type: 'text' as const, text: s }] });
const errorText = (s: string) => ({ content: [{ type: 'text' as const, text: s }], isError: true });

export const TOOLS = [
  {
    name: 'list_blog_posts',
    description:
      'List blog posts on the Tamesis Plumbers site. Returns id, slug, title, status and dates — use get_blog_post for the full content of one post.',
    inputSchema: {
      type: 'object',
      properties: {
        status: { type: 'string', enum: STATUS_VALUES, description: 'Filter by status. Defaults to "all".' },
        limit: { type: 'integer', minimum: 1, maximum: 100, description: 'Max posts to return. Defaults to 25.' },
      },
    },
  },
  {
    name: 'get_blog_post',
    description: 'Get the full content of one blog post by id or slug, including its body HTML and related pages.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'string', description: 'The post\'s id (from list_blog_posts).' },
        slug: { type: 'string', description: 'The post\'s URL slug, e.g. "why-is-my-boiler-losing-pressure".' },
      },
    },
  },
  {
    name: 'create_blog_post',
    description:
      'Create a new blog post as a DRAFT. Not published by this tool — use generate_blog_post_image to add a hero image, then publish_blog_post to put it live, or leave it as a draft for a human to review in /admin/blog. body is HTML; only <p>, <h2>, <ul>/<ol>/<li>, <a>, <strong>/<em> survive — everything else is stripped on save.',
    inputSchema: {
      type: 'object',
      required: ['title', 'excerpt', 'body'],
      properties: {
        title: { type: 'string', description: 'Used as the page <title> base and the slug source.' },
        h1: { type: 'string', description: 'On-page heading. Defaults to title if omitted.' },
        meta_title: { type: 'string', description: 'Defaults to title if omitted.' },
        meta_description: { type: 'string', description: 'Defaults to excerpt if omitted.' },
        excerpt: { type: 'string', description: 'Short one/two-sentence summary shown on /blog and used as a fallback meta description.' },
        body: { type: 'string', description: 'Post content as HTML (paragraphs, h2 subheadings, lists, links).' },
        related_services: { type: 'array', items: { type: 'string' }, description: 'Service page slugs this post should cross-link with, e.g. ["boiler-repair"]. Unknown slugs are silently dropped.' },
        related_appliances: { type: 'array', items: { type: 'string' } },
        related_damp: { type: 'array', items: { type: 'string' } },
      },
    },
  },
  {
    name: 'update_blog_post',
    description:
      'Edit an existing DRAFT post. Refuses to edit a post that is already published — publish/unpublish and edits to live content are human-only, done in /admin/blog.',
    inputSchema: {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'string' },
        title: { type: 'string' },
        h1: { type: 'string' },
        meta_title: { type: 'string' },
        meta_description: { type: 'string' },
        excerpt: { type: 'string' },
        body: { type: 'string' },
        related_services: { type: 'array', items: { type: 'string' } },
        related_appliances: { type: 'array', items: { type: 'string' } },
        related_damp: { type: 'array', items: { type: 'string' } },
      },
    },
  },
  {
    name: 'generate_blog_post_image',
    description:
      'Generate a hero image for a blog post from its title and excerpt (or a custom prompt), and attach it to the post. The file is stored under the post\'s slug, so its name and URL carry the post\'s actual title/keywords rather than an opaque id. Refuses to run on a post that is already published — generate the image before calling publish_blog_post. Requires an OpenAI API key to already be set in /admin/settings; costs a real API call, so it is rate-limited.',
    inputSchema: {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'string', description: "The post's id, from create_blog_post or list_blog_posts." },
        prompt: {
          type: 'string',
          description:
            'Optional custom image prompt. Defaults to a realistic editorial-photo prompt built from the post\'s title and excerpt, with no text or logos.',
        },
      },
    },
  },
  {
    name: 'publish_blog_post',
    description:
      'Publish a blog post immediately — it goes live on the public site with no human review step. Works on any draft post regardless of how it was created; a post that is already published is left unchanged. There is no unpublish or delete via MCP — use /admin/blog for that.',
    inputSchema: {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'string' },
      },
    },
  },
  {
    name: 'list_landing_pages',
    description:
      'List paid-search landing pages (the /lp/* pages) created via MCP. Returns id, slug, h1, status and dates — use get_landing_page for full content. Does not include the 10 original hand-written campaigns in landing.ts.',
    inputSchema: {
      type: 'object',
      properties: {
        status: { type: 'string', enum: STATUS_VALUES, description: 'Filter by status. Defaults to "all".' },
        limit: { type: 'integer', minimum: 1, maximum: 100, description: 'Max pages to return. Defaults to 25.' },
      },
    },
  },
  {
    name: 'get_landing_page',
    description: 'Get the full content of one MCP-created landing page by id or slug.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        slug: { type: 'string' },
      },
    },
  },
  {
    name: 'create_landing_page',
    description:
      'Create a new paid-search landing page (the same premium /lp/* template as every existing campaign page) as a DRAFT. It is never published by this tool, never linked from the site, and never in the sitemap — a human reviews it in /admin/landing-pages and publishes it before any ad points at it. Exactly one of related_service or covers is required, to populate the "what the job covers" list. Every icon and the diagnosis illustration must be one of the fixed values listed in their schema — these select an existing pre-built icon/illustration, they do not create a new one.',
    inputSchema: {
      type: 'object',
      required: ['h1', 'sub', 'meta_title', 'meta_description', 'eyebrow', 'proof', 'form', 'fixes', 'diagnosis', 'steps', 'close', 'bullets', 'reassure', 'faqs'],
      properties: {
        h1: { type: 'string', description: 'On-page heading. Also used as the slug source.' },
        sub: { type: 'string', description: 'Hero subheading, one or two sentences.' },
        meta_title: { type: 'string' },
        meta_description: { type: 'string' },
        campaign: { type: 'string', description: 'Internal label only (shown on the /lp directory hub, never on the public page), e.g. the ad group it is built for.' },
        head_term: { type: 'string', description: 'Internal note of the target search term. Not published.' },
        urgent: { type: 'boolean', description: 'Leads with the phone number rather than the enquiry form. Defaults to false.' },
        form_label: { type: 'string', description: 'Preselects the enquiry form dropdown with a label not in services.ts/appliances.ts.' },
        related_service: { type: 'string', description: 'A real service slug (e.g. "boiler-repair") whose "what this includes" list becomes this page\'s "what the job covers" section. Provide this or covers, not neither.' },
        covers: { type: 'array', items: { type: 'string' }, description: 'Freeform "what the job covers" bullet list, for a topic with no matching service page. Provide this or related_service, not neither.' },
        card_icon: { type: 'string', enum: PREMIUM_ICON_VALUES, description: 'Icon shown on this page\'s card in the internal /lp directory.' },
        eyebrow: { type: 'string', description: 'Small label above the hero heading, e.g. "Boiler repair · London".' },
        proof: {
          type: 'array', minItems: 3, maxItems: 4,
          items: {
            type: 'object', required: ['label', 'note', 'icon'],
            properties: { label: { type: 'string' }, note: { type: 'string' }, icon: { type: 'string', enum: PREMIUM_ICON_VALUES } },
          },
          description: '3-4 proof tiles in the hero.',
        },
        form: {
          type: 'object', required: ['title', 'sub', 'submit', 'note'],
          properties: { title: { type: 'string' }, sub: { type: 'string' }, submit: { type: 'string', description: 'Button text, e.g. "Get Booked In".' }, note: { type: 'string' } },
        },
        fixes: {
          type: 'object', required: ['eyebrow', 'title', 'lead', 'items'],
          properties: {
            eyebrow: { type: 'string' }, title: { type: 'string' }, lead: { type: 'string' },
            items: {
              type: 'array', minItems: 4, maxItems: 6,
              items: {
                type: 'object', required: ['title', 'note', 'icon'],
                properties: { title: { type: 'string' }, note: { type: 'string' }, icon: { type: 'string', enum: PREMIUM_ICON_VALUES } },
              },
            },
          },
          description: '"What we fix" icon grid, 4-6 items.',
        },
        diagnosis: {
          type: 'object', required: ['eyebrow', 'title', 'intro', 'tag', 'art'],
          properties: {
            eyebrow: { type: 'string' }, title: { type: 'string' }, intro: { type: 'string' }, tag: { type: 'string', description: 'Short caption under the illustration.' },
            art: { type: 'string', enum: PREMIUM_ART_VALUES, description: 'Selects the animated illustration. Pick the closest match to the page\'s topic — this cannot be a new picture.' },
          },
        },
        steps: {
          type: 'array', minItems: 3, maxItems: 3,
          items: { type: 'object', required: ['title', 'body'], properties: { title: { type: 'string' }, body: { type: 'string' } } },
          description: 'Exactly 3 "how it works" steps.',
        },
        close: {
          type: 'object', required: ['title', 'body'],
          properties: { title: { type: 'string' }, body: { type: 'string' } },
          description: 'Final call-to-action panel. This page has no discount (offer is never set by MCP — a human adds one deliberately) so this must not claim one.',
        },
        bullets: { type: 'array', items: { type: 'string' }, minItems: 3, maxItems: 5, description: 'Hero bullet list.' },
        reassure: {
          type: 'array', minItems: 3, maxItems: 3,
          items: { type: 'object', required: ['title', 'body'], properties: { title: { type: 'string' }, body: { type: 'string' } } },
          description: 'Exactly 3 "what to expect" reassurance panels.',
        },
        faqs: {
          type: 'array', minItems: 3,
          items: { type: 'object', required: ['q', 'a'], properties: { q: { type: 'string' }, a: { type: 'string' } } },
        },
        cross_link: {
          type: 'object', required: ['href', 'label', 'body'],
          properties: { href: { type: 'string', description: 'A real path on this site, e.g. "/services/toilet-installation".' }, label: { type: 'string' }, body: { type: 'string' } },
          description: 'Optional single callout to a related page for a nearby but different job.',
        },
      },
    },
  },
  {
    name: 'update_landing_page',
    description:
      'Edit an existing DRAFT landing page created via MCP. Refuses to edit one that is already published — publish/unpublish and edits to a live page are human-only, done in /admin/landing-pages. Accepts the same fields as create_landing_page; send only the ones changing.',
    inputSchema: {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'string' },
        h1: { type: 'string' },
        sub: { type: 'string' },
        meta_title: { type: 'string' },
        meta_description: { type: 'string' },
        campaign: { type: 'string' },
        head_term: { type: 'string' },
        urgent: { type: 'boolean' },
        form_label: { type: 'string' },
        related_service: { type: 'string' },
        covers: { type: 'array', items: { type: 'string' } },
        card_icon: { type: 'string', enum: PREMIUM_ICON_VALUES },
        eyebrow: { type: 'string' },
        proof: {
          type: 'array',
          items: {
            type: 'object', required: ['label', 'note', 'icon'],
            properties: { label: { type: 'string' }, note: { type: 'string' }, icon: { type: 'string', enum: PREMIUM_ICON_VALUES } },
          },
        },
        form: {
          type: 'object',
          properties: { title: { type: 'string' }, sub: { type: 'string' }, submit: { type: 'string' }, note: { type: 'string' } },
        },
        fixes: {
          type: 'object',
          properties: {
            eyebrow: { type: 'string' }, title: { type: 'string' }, lead: { type: 'string' },
            items: {
              type: 'array',
              items: {
                type: 'object', required: ['title', 'note', 'icon'],
                properties: { title: { type: 'string' }, note: { type: 'string' }, icon: { type: 'string', enum: PREMIUM_ICON_VALUES } },
              },
            },
          },
        },
        diagnosis: {
          type: 'object',
          properties: {
            eyebrow: { type: 'string' }, title: { type: 'string' }, intro: { type: 'string' }, tag: { type: 'string' },
            art: { type: 'string', enum: PREMIUM_ART_VALUES },
          },
        },
        steps: {
          type: 'array',
          items: { type: 'object', required: ['title', 'body'], properties: { title: { type: 'string' }, body: { type: 'string' } } },
        },
        close: {
          type: 'object',
          properties: { title: { type: 'string' }, body: { type: 'string' } },
        },
        bullets: { type: 'array', items: { type: 'string' } },
        reassure: {
          type: 'array',
          items: { type: 'object', required: ['title', 'body'], properties: { title: { type: 'string' }, body: { type: 'string' } } },
        },
        faqs: {
          type: 'array',
          items: { type: 'object', required: ['q', 'a'], properties: { q: { type: 'string' }, a: { type: 'string' } } },
        },
        cross_link: {
          type: 'object',
          properties: { href: { type: 'string' }, label: { type: 'string' }, body: { type: 'string' } },
        },
      },
    },
  },
  {
    name: 'list_service_pages',
    description:
      'List service pages created via MCP. Returns id, slug, title, status and dates — use get_service_page for full content. Does not include the 19 real trade services in services.ts.',
    inputSchema: {
      type: 'object',
      properties: {
        status: { type: 'string', enum: STATUS_VALUES, description: 'Filter by status. Defaults to "all".' },
        limit: { type: 'integer', minimum: 1, maximum: 100, description: 'Max pages to return. Defaults to 25.' },
      },
    },
  },
  {
    name: 'get_service_page',
    description: 'Get the full content of one MCP-created service page by id or slug.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        slug: { type: 'string' },
      },
    },
  },
  {
    name: 'create_service_page',
    description:
      'Create a new service page (the same /services/[slug] template as every real service) as a DRAFT. It is never published by this tool. Publishing this is a bigger step than a blog post or landing page: it puts the page on the public /services hub, in the sitemap, and cross-linked from every other service page as something Tamesis now offers — a human must review and deliberately decide that before publishing. It is also never wired into the header navigation or footer, whatever its status; that stays a separate, deliberate human edit.',
    inputSchema: {
      type: 'object',
      required: ['title', 'h1', 'meta_title', 'meta_description', 'eyebrow', 'icon', 'summary', 'intro', 'does', 'guidance', 'aside', 'faqs'],
      properties: {
        title: { type: 'string', description: 'Short label used in cards, cross-links and the slug source.' },
        h1: { type: 'string', description: 'Page heading.' },
        meta_title: { type: 'string' },
        meta_description: { type: 'string' },
        eyebrow: { type: 'string', description: 'Small label above the h1, e.g. "24/7 callout".' },
        icon: { type: 'string', enum: SERVICE_ICON_VALUES, description: 'Selects an existing pre-built icon — this cannot be a new one.' },
        summary: { type: 'string', description: 'One or two sentences, shown on the /services hub card.' },
        intro: { type: 'string', description: 'Lead paragraph on the page itself.' },
        does: { type: 'array', items: { type: 'string' }, minItems: 3, description: '"What this includes" bullet list.' },
        guidance: {
          type: 'array', minItems: 2,
          items: { type: 'object', required: ['title', 'body'], properties: { title: { type: 'string' }, body: { type: 'string' } } },
          description: '"Worth knowing first" panels.',
        },
        aside: {
          type: 'object', required: ['title', 'body'],
          properties: { title: { type: 'string' }, body: { type: 'string' } },
          description: 'Short panel next to "what this includes".',
        },
        faqs: {
          type: 'array', minItems: 3,
          items: { type: 'object', required: ['q', 'a'], properties: { q: { type: 'string' }, a: { type: 'string' } } },
        },
        spaces: {
          type: 'array',
          items: { type: 'object', required: ['title', 'body'], properties: { title: { type: 'string' }, body: { type: 'string' } } },
          description: 'Optional "types of premises this covers" panels — most services omit this.',
        },
        internal_note: { type: 'string', description: 'Internal-only note (e.g. why this page exists). Never published.' },
      },
    },
  },
  {
    name: 'update_service_page',
    description:
      'Edit an existing DRAFT service page created via MCP. Refuses to edit one that is already published — publish/unpublish and edits to a live page are human-only, done in /admin/service-pages. Accepts the same fields as create_service_page; send only the ones changing.',
    inputSchema: {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'string' },
        title: { type: 'string' },
        h1: { type: 'string' },
        meta_title: { type: 'string' },
        meta_description: { type: 'string' },
        eyebrow: { type: 'string' },
        icon: { type: 'string', enum: SERVICE_ICON_VALUES },
        summary: { type: 'string' },
        intro: { type: 'string' },
        does: { type: 'array', items: { type: 'string' } },
        guidance: {
          type: 'array',
          items: { type: 'object', required: ['title', 'body'], properties: { title: { type: 'string' }, body: { type: 'string' } } },
        },
        aside: {
          type: 'object',
          properties: { title: { type: 'string' }, body: { type: 'string' } },
        },
        faqs: {
          type: 'array',
          items: { type: 'object', required: ['q', 'a'], properties: { q: { type: 'string' }, a: { type: 'string' } } },
        },
        spaces: {
          type: 'array',
          items: { type: 'object', required: ['title', 'body'], properties: { title: { type: 'string' }, body: { type: 'string' } } },
        },
        internal_note: { type: 'string' },
      },
    },
  },
] as const;

export async function callTool(supabase: SupabaseClient, name: string, args: Record<string, unknown>) {
  switch (name) {
    case 'list_blog_posts':
      return listBlogPosts(supabase, args);
    case 'get_blog_post':
      return getBlogPost(supabase, args);
    case 'create_blog_post':
      return createBlogPost(supabase, args);
    case 'update_blog_post':
      return updateBlogPost(supabase, args);
    case 'generate_blog_post_image':
      return generateBlogPostImage(supabase, args);
    case 'publish_blog_post':
      return publishBlogPost(supabase, args);
    case 'list_landing_pages':
      return listLandingPages(supabase, args);
    case 'get_landing_page':
      return getLandingPage(supabase, args);
    case 'create_landing_page':
      return createLandingPage(supabase, args);
    case 'update_landing_page':
      return updateLandingPage(supabase, args);
    case 'list_service_pages':
      return listServicePages(supabase, args);
    case 'get_service_page':
      return getServicePage(supabase, args);
    case 'create_service_page':
      return createServicePage(supabase, args);
    case 'update_service_page':
      return updateServicePage(supabase, args);
    default:
      return errorText(`Unknown tool "${name}".`);
  }
}

async function listBlogPosts(supabase: SupabaseClient, args: Record<string, unknown>) {
  const status = STATUS_VALUES.includes(args.status as any) ? (args.status as (typeof STATUS_VALUES)[number]) : 'all';
  const limit = Number.isInteger(args.limit) ? Math.min(100, Math.max(1, args.limit as number)) : 25;

  let query = supabase
    .from('blog_posts')
    .select('id, slug, title, status, generated_by, published_at, created_at')
    .order('created_at', { ascending: false })
    .limit(limit);
  if (status !== 'all') query = query.eq('status', status);

  const { data, error } = await query;
  if (error) return errorText('Could not list posts.');
  return text(JSON.stringify(data ?? [], null, 2));
}

async function getBlogPost(supabase: SupabaseClient, args: Record<string, unknown>) {
  const id = str(args.id, 100);
  const slug = str(args.slug, 120);
  if (!id && !slug) return errorText('Provide either id or slug.');

  const query = supabase.from('blog_posts').select('*');
  const { data, error } = await (id ? query.eq('id', id) : query.eq('slug', slug!)).maybeSingle();
  if (error) return errorText('Could not load that post.');
  if (!data) return errorText('No post found with that id/slug.');
  return text(JSON.stringify(data, null, 2));
}

function buildRelated(args: Record<string, unknown>) {
  return {
    related_services: filterSlugs(strArray(args.related_services), new Set(services.map((s) => s.slug))),
    related_appliances: filterSlugs(strArray(args.related_appliances), new Set(appliances.map((a) => a.slug))),
    related_damp: filterSlugs(strArray(args.related_damp), new Set(dampPages.map((d) => d.slug))),
  };
}

async function createBlogPost(supabase: SupabaseClient, args: Record<string, unknown>) {
  const title = str(args.title, 200);
  const excerpt = str(args.excerpt, 400);
  const bodyRaw = str(args.body, 50_000);
  if (!title || !excerpt || !bodyRaw) return errorText('title, excerpt and body are all required.');

  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { count } = await supabase
    .from('blog_posts')
    .select('id', { count: 'exact', head: true })
    .eq('generated_by', 'mcp')
    .gte('created_at', since);
  if ((count ?? 0) >= MAX_MCP_POSTS_PER_HOUR) {
    return errorText(`Rate limit: at most ${MAX_MCP_POSTS_PER_HOUR} posts per hour via MCP. Try again later.`);
  }

  const slug = await uniqueSlug(supabase, title);
  const related = buildRelated(args);

  const { data, error } = await supabase
    .from('blog_posts')
    .insert({
      slug,
      title,
      h1: str(args.h1, 200) ?? title,
      meta_title: str(args.meta_title, 200) ?? title,
      meta_description: str(args.meta_description, 300) ?? excerpt,
      excerpt,
      body: sanitizeBlogBody(bodyRaw),
      status: 'draft',
      generated_by: 'mcp',
      ...related,
    })
    .select('id, slug')
    .single();

  if (error || !data) return errorText('Could not save the post.');
  return text(
    `Created as a draft — not published. Review and publish at /admin/blog/${data.id}\nid: ${data.id}\nslug: ${data.slug}`
  );
}

async function updateBlogPost(supabase: SupabaseClient, args: Record<string, unknown>) {
  const id = str(args.id, 100);
  if (!id) return errorText('id is required.');

  const { data: existing, error: loadError } = await supabase
    .from('blog_posts')
    .select('id, status')
    .eq('id', id)
    .maybeSingle();
  if (loadError) return errorText('Could not load that post.');
  if (!existing) return errorText('No post found with that id.');
  if (existing.status === 'published') {
    return errorText('This post is already published. MCP can only edit drafts — publish/unpublish and edits to live content are done by a person in /admin/blog.');
  }

  const update: Record<string, unknown> = { updated_at: new Date().toISOString() };
  const title = str(args.title, 200);
  const h1 = str(args.h1, 200);
  const metaTitle = str(args.meta_title, 200);
  const metaDescription = str(args.meta_description, 300);
  const excerpt = str(args.excerpt, 400);
  const bodyRaw = str(args.body, 50_000);
  if (title) update.title = title;
  if (h1) update.h1 = h1;
  if (metaTitle) update.meta_title = metaTitle;
  if (metaDescription) update.meta_description = metaDescription;
  if (excerpt) update.excerpt = excerpt;
  if (bodyRaw) update.body = sanitizeBlogBody(bodyRaw);
  if (RELATED_FIELDS.some((field) => Array.isArray((args as Record<string, unknown>)[field]))) {
    Object.assign(update, buildRelated(args));
  }

  if (Object.keys(update).length === 1) return errorText('Nothing to update — pass at least one field.');

  const { error } = await supabase.from('blog_posts').update(update).eq('id', id);
  if (error) return errorText('Could not save the changes.');
  return text(`Saved. Still a draft — review and publish at /admin/blog/${id}`);
}

async function generateBlogPostImage(supabase: SupabaseClient, args: Record<string, unknown>) {
  const id = str(args.id, 100);
  if (!id) return errorText('id is required.');

  const { data: post, error: loadError } = await supabase
    .from('blog_posts')
    .select('id, slug, title, excerpt, status')
    .eq('id', id)
    .maybeSingle();
  if (loadError) return errorText('Could not load that post.');
  if (!post) return errorText('No post found with that id.');
  if (post.status === 'published') {
    return errorText('This post is already published. Generate its image before publishing it, or update the image by hand in /admin/blog.');
  }

  const apiKey = await getSetting(supabase, 'openai_api_key');
  if (!apiKey) return errorText('No OpenAI API key set — add one in /admin/settings first.');

  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { count } = await supabase
    .from('blog_posts')
    .select('id', { count: 'exact', head: true })
    .not('hero_image_url', 'is', null)
    .gte('updated_at', since);
  if ((count ?? 0) >= MAX_MCP_IMAGES_PER_HOUR) {
    return errorText(`Rate limit: at most ${MAX_MCP_IMAGES_PER_HOUR} image generations per hour via MCP. Try again later.`);
  }

  const prompt = str(args.prompt, 1000);
  const result = await generateAndStoreHeroImage(supabase, apiKey, post, prompt);
  if (!result.ok) return errorText(result.message);
  return text(`Hero image generated and attached.\nurl: ${result.url}`);
}

async function publishBlogPost(supabase: SupabaseClient, args: Record<string, unknown>) {
  const id = str(args.id, 100);
  if (!id) return errorText('id is required.');

  const { data: post, error: loadError } = await supabase
    .from('blog_posts')
    .select('id, slug, status, published_at')
    .eq('id', id)
    .maybeSingle();
  if (loadError) return errorText('Could not load that post.');
  if (!post) return errorText('No post found with that id.');
  if (post.status === 'published') {
    return text(`Already published: ${SITE_ORIGIN}/blog/${post.slug}`);
  }

  const update: Record<string, unknown> = { status: 'published', updated_at: new Date().toISOString() };
  if (!post.published_at) update.published_at = new Date().toISOString();

  const { error } = await supabase.from('blog_posts').update(update).eq('id', post.id);
  if (error) return errorText('Could not publish that post.');
  return text(`Published. Now live at ${SITE_ORIGIN}/blog/${post.slug}`);
}

/** Validates the hero proof-tile array: {label, note, icon}. Pushes onto
 * `errors` and returns null on any problem, rather than silently dropping a
 * bad entry — this is core page content, not a decorative cross-link. */
function validateProof(v: unknown, min: number, max: number, errors: string[]): { label: string; note: string; icon: string }[] | null {
  if (!Array.isArray(v) || v.length < min || v.length > max) {
    errors.push(`proof must have ${min}-${max} items.`);
    return null;
  }
  const clean: { label: string; note: string; icon: string }[] = [];
  v.forEach((item, i) => {
    const it = item as Record<string, unknown>;
    if (!it || typeof it.label !== 'string' || typeof it.note !== 'string' || !isPremiumIcon(it.icon)) {
      errors.push(`proof[${i}] needs label, note and a valid icon (got icon: ${JSON.stringify(it?.icon)}).`);
    } else {
      clean.push({ label: it.label, note: it.note, icon: it.icon as string });
    }
  });
  return clean.length === v.length ? clean : null;
}

/** Validates a "what we fix" item array: {title, note, icon}. Same rule as
 * validateProof — every icon must be one of the fixed pre-built values. */
function validateFixItems(v: unknown, min: number, max: number, errors: string[]): { title: string; note: string; icon: string }[] | null {
  if (!Array.isArray(v) || v.length < min || v.length > max) {
    errors.push(`fixes.items must have ${min}-${max} items.`);
    return null;
  }
  const clean: { title: string; note: string; icon: string }[] = [];
  v.forEach((item, i) => {
    const it = item as Record<string, unknown>;
    if (!it || typeof it.title !== 'string' || typeof it.note !== 'string' || !isPremiumIcon(it.icon)) {
      errors.push(`fixes.items[${i}] needs title, note and a valid icon (got icon: ${JSON.stringify(it?.icon)}).`);
    } else {
      clean.push({ title: it.title, note: it.note, icon: it.icon as string });
    }
  });
  return clean.length === v.length ? clean : null;
}

function validateTitleBodyList(v: unknown, path: string, exact: number | null, errors: string[]): { title: string; body: string }[] | null {
  if (!Array.isArray(v) || (exact !== null && v.length !== exact) || v.length < 1) {
    errors.push(exact !== null ? `${path} must have exactly ${exact} items.` : `${path} must be a non-empty array.`);
    return null;
  }
  const clean = v.map((item, i) => {
    const it = item as Record<string, unknown>;
    if (!it || typeof it.title !== 'string' || typeof it.body !== 'string') {
      errors.push(`${path}[${i}] needs title and body.`);
      return null;
    }
    return { title: it.title, body: it.body };
  });
  return clean.some((c) => c === null) ? null : (clean as { title: string; body: string }[]);
}

function validateFixes(v: unknown, errors: string[]) {
  const fixes = v as Record<string, unknown> | undefined;
  if (!fixes || typeof fixes.eyebrow !== 'string' || typeof fixes.title !== 'string' || typeof fixes.lead !== 'string') {
    errors.push('fixes needs eyebrow, title, lead and items.');
    return null;
  }
  const items = validateFixItems(fixes.items, 4, 6, errors);
  if (!items) return null;
  return { eyebrow: fixes.eyebrow, title: fixes.title, lead: fixes.lead, items };
}

function validateDiagnosis(v: unknown, errors: string[]) {
  const d = v as Record<string, unknown> | undefined;
  if (!d || typeof d.eyebrow !== 'string' || typeof d.title !== 'string' || typeof d.intro !== 'string' || typeof d.tag !== 'string' || !isPremiumArt(d.art)) {
    errors.push(`diagnosis needs eyebrow, title, intro, tag and a valid art value (got art: ${JSON.stringify(d?.art)}).`);
    return null;
  }
  return { eyebrow: d.eyebrow, title: d.title, intro: d.intro, tag: d.tag, art: d.art as string };
}

function validateForm(v: unknown, errors: string[]) {
  const f = v as Record<string, unknown> | undefined;
  if (!f || typeof f.title !== 'string' || typeof f.sub !== 'string' || typeof f.submit !== 'string' || typeof f.note !== 'string') {
    errors.push('form needs title, sub, submit and note.');
    return null;
  }
  return { title: f.title, sub: f.sub, submit: f.submit, note: f.note };
}

function validateClose(v: unknown, errors: string[]) {
  const c = v as Record<string, unknown> | undefined;
  if (!c || typeof c.title !== 'string' || typeof c.body !== 'string') {
    errors.push('close needs title and body.');
    return null;
  }
  return { title: c.title, body: c.body };
}

function validateCrossLink(v: unknown, errors: string[]) {
  if (v === undefined) return { value: undefined, ok: true };
  const c = v as Record<string, unknown>;
  if (!c || typeof c.href !== 'string' || typeof c.label !== 'string' || typeof c.body !== 'string') {
    errors.push('cross_link needs href, label and body.');
    return { value: undefined, ok: false };
  }
  return { value: { href: c.href, label: c.label, body: c.body }, ok: true };
}

async function listLandingPages(supabase: SupabaseClient, args: Record<string, unknown>) {
  const status = STATUS_VALUES.includes(args.status as any) ? (args.status as (typeof STATUS_VALUES)[number]) : 'all';
  const limit = Number.isInteger(args.limit) ? Math.min(100, Math.max(1, args.limit as number)) : 25;

  let query = supabase
    .from('landing_pages')
    .select('id, slug, h1, status, campaign, published_at, created_at')
    .order('created_at', { ascending: false })
    .limit(limit);
  if (status !== 'all') query = query.eq('status', status);

  const { data, error } = await query;
  if (error) return errorText('Could not list landing pages.');
  return text(JSON.stringify(data ?? [], null, 2));
}

async function getLandingPage(supabase: SupabaseClient, args: Record<string, unknown>) {
  const id = str(args.id, 100);
  const slug = str(args.slug, 120);
  if (!id && !slug) return errorText('Provide either id or slug.');

  const query = supabase.from('landing_pages').select('*');
  const { data, error } = await (id ? query.eq('id', id) : query.eq('slug', slug!)).maybeSingle();
  if (error) return errorText('Could not load that landing page.');
  if (!data) return errorText('No landing page found with that id/slug.');
  return text(JSON.stringify(data, null, 2));
}

async function createLandingPage(supabase: SupabaseClient, args: Record<string, unknown>) {
  const h1 = str(args.h1, 200);
  const sub = str(args.sub, 400);
  const metaTitle = str(args.meta_title, 200);
  const metaDescription = str(args.meta_description, 300);
  const eyebrow = str(args.eyebrow, 120);
  if (!h1 || !sub || !metaTitle || !metaDescription || !eyebrow) {
    return errorText('h1, sub, meta_title, meta_description and eyebrow are all required.');
  }

  const relatedService = str(args.related_service, 100);
  const covers = strArray(args.covers);
  if (relatedService && !services.some((s) => s.slug === relatedService)) {
    return errorText(`related_service "${relatedService}" is not a real service slug.`);
  }
  if (!relatedService && (!covers || covers.length === 0)) {
    return errorText('Provide either related_service (a real service slug) or covers (what the job covers) — not neither.');
  }

  const errors: string[] = [];
  const cardIconRaw = args.card_icon;
  if (cardIconRaw !== undefined && !isPremiumIcon(cardIconRaw)) errors.push(`card_icon: "${cardIconRaw}" is not a valid icon.`);
  const proof = validateProof(args.proof, 3, 4, errors);
  const form = validateForm(args.form, errors);
  const fixes = validateFixes(args.fixes, errors);
  const diagnosis = validateDiagnosis(args.diagnosis, errors);
  const steps = validateTitleBodyList(args.steps, 'steps', 3, errors);
  const close = validateClose(args.close, errors);
  const bullets = strArray(args.bullets);
  if (!bullets || bullets.length < 3 || bullets.length > 5) errors.push('bullets must have 3-5 items.');
  const reassure = validateTitleBodyList(args.reassure, 'reassure', 3, errors);
  const faqs = validateTitleBodyList(args.faqs ? (args.faqs as any[]).map((f: any) => ({ title: f?.q, body: f?.a })) : args.faqs, 'faqs', null, errors)
    ?.map((f) => ({ q: f.title, a: f.body })) ?? null;
  const crossLink = validateCrossLink(args.cross_link, errors);

  if (errors.length > 0 || !proof || !form || !fixes || !diagnosis || !steps || !close || !reassure || !faqs || !crossLink.ok) {
    return errorText(errors.join(' ') || 'Invalid input.');
  }

  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { count } = await supabase
    .from('landing_pages')
    .select('id', { count: 'exact', head: true })
    .eq('generated_by', 'mcp')
    .gte('created_at', since);
  if ((count ?? 0) >= MAX_MCP_LANDING_PAGES_PER_HOUR) {
    return errorText(`Rate limit: at most ${MAX_MCP_LANDING_PAGES_PER_HOUR} landing pages per hour via MCP. Try again later.`);
  }

  const slug = await uniqueLandingSlug(supabase, h1);

  const { data, error } = await supabase
    .from('landing_pages')
    .insert({
      slug,
      status: 'draft',
      campaign: str(args.campaign, 200),
      head_term: str(args.head_term, 200),
      meta_title: metaTitle,
      meta_description: metaDescription,
      h1,
      sub,
      urgent: args.urgent === true,
      form_label: str(args.form_label, 100),
      related_service: relatedService ?? null,
      covers: relatedService ? null : covers,
      card_icon: isPremiumIcon(cardIconRaw) ? cardIconRaw : null,
      eyebrow,
      proof,
      form,
      fixes,
      diagnosis,
      steps,
      close,
      bullets,
      reassure,
      faqs,
      cross_link: crossLink.value ?? null,
      rating: REAL_RATING,
      trust_extra: REAL_TRUST_EXTRA,
      offer: null,
      generated_by: 'mcp',
    })
    .select('id, slug')
    .single();

  if (error || !data) return errorText('Could not save the landing page.');
  return text(
    `Created as a draft — not published, not linked from the site, not in the sitemap. Review and publish at /admin/landing-pages/${data.id}\nid: ${data.id}\nslug: ${data.slug}`
  );
}

async function updateLandingPage(supabase: SupabaseClient, args: Record<string, unknown>) {
  const id = str(args.id, 100);
  if (!id) return errorText('id is required.');

  const { data: existing, error: loadError } = await supabase
    .from('landing_pages')
    .select('id, status')
    .eq('id', id)
    .maybeSingle();
  if (loadError) return errorText('Could not load that landing page.');
  if (!existing) return errorText('No landing page found with that id.');
  if (existing.status === 'published') {
    return errorText('This landing page is already published. MCP can only edit drafts — publish/unpublish and edits to a live page are done by a person in /admin/landing-pages.');
  }

  const errors: string[] = [];
  const update: Record<string, unknown> = { updated_at: new Date().toISOString() };

  const h1 = str(args.h1, 200);
  const sub = str(args.sub, 400);
  const metaTitle = str(args.meta_title, 200);
  const metaDescription = str(args.meta_description, 300);
  const eyebrow = str(args.eyebrow, 120);
  if (h1) update.h1 = h1;
  if (sub) update.sub = sub;
  if (metaTitle) update.meta_title = metaTitle;
  if (metaDescription) update.meta_description = metaDescription;
  if (eyebrow) update.eyebrow = eyebrow;
  if (args.campaign !== undefined) update.campaign = str(args.campaign, 200);
  if (args.head_term !== undefined) update.head_term = str(args.head_term, 200);
  if (typeof args.urgent === 'boolean') update.urgent = args.urgent;
  if (args.form_label !== undefined) update.form_label = str(args.form_label, 100);

  if (args.related_service !== undefined || args.covers !== undefined) {
    const relatedService = str(args.related_service, 100);
    const covers = strArray(args.covers);
    if (relatedService && !services.some((s) => s.slug === relatedService)) {
      errors.push(`related_service "${relatedService}" is not a real service slug.`);
    } else if (!relatedService && (!covers || covers.length === 0)) {
      errors.push('Provide either related_service (a real service slug) or covers, not neither.');
    } else {
      update.related_service = relatedService ?? null;
      update.covers = relatedService ? null : covers;
    }
  }

  if (args.card_icon !== undefined) {
    if (!isPremiumIcon(args.card_icon)) errors.push(`card_icon: "${args.card_icon}" is not a valid icon.`);
    else update.card_icon = args.card_icon;
  }
  if (args.proof !== undefined) {
    const proof = validateProof(args.proof, 3, 4, errors);
    if (proof) update.proof = proof;
  }
  if (args.form !== undefined) {
    const form = validateForm(args.form, errors);
    if (form) update.form = form;
  }
  if (args.fixes !== undefined) {
    const fixes = validateFixes(args.fixes, errors);
    if (fixes) update.fixes = fixes;
  }
  if (args.diagnosis !== undefined) {
    const diagnosis = validateDiagnosis(args.diagnosis, errors);
    if (diagnosis) update.diagnosis = diagnosis;
  }
  if (args.steps !== undefined) {
    const steps = validateTitleBodyList(args.steps, 'steps', 3, errors);
    if (steps) update.steps = steps;
  }
  if (args.close !== undefined) {
    const close = validateClose(args.close, errors);
    if (close) update.close = close;
  }
  if (args.bullets !== undefined) {
    const bullets = strArray(args.bullets);
    if (!bullets || bullets.length < 3 || bullets.length > 5) errors.push('bullets must have 3-5 items.');
    else update.bullets = bullets;
  }
  if (args.reassure !== undefined) {
    const reassure = validateTitleBodyList(args.reassure, 'reassure', 3, errors);
    if (reassure) update.reassure = reassure;
  }
  if (args.faqs !== undefined) {
    const faqsInput = Array.isArray(args.faqs) ? (args.faqs as any[]).map((f) => ({ title: f?.q, body: f?.a })) : args.faqs;
    const faqs = validateTitleBodyList(faqsInput, 'faqs', null, errors)?.map((f) => ({ q: f.title, a: f.body }));
    if (faqs) update.faqs = faqs;
  }
  if (args.cross_link !== undefined) {
    const crossLink = validateCrossLink(args.cross_link, errors);
    if (crossLink.ok) update.cross_link = crossLink.value ?? null;
  }

  if (errors.length > 0) return errorText(errors.join(' '));
  if (Object.keys(update).length === 1) return errorText('Nothing to update — pass at least one field.');

  const { error } = await supabase.from('landing_pages').update(update).eq('id', id);
  if (error) return errorText('Could not save the changes.');
  return text(`Saved. Still a draft — review and publish at /admin/landing-pages/${id}`);
}

function validateAside(v: unknown, errors: string[]) {
  const a = v as Record<string, unknown> | undefined;
  if (!a || typeof a.title !== 'string' || typeof a.body !== 'string') {
    errors.push('aside needs title and body.');
    return null;
  }
  return { title: a.title, body: a.body };
}

async function listServicePages(supabase: SupabaseClient, args: Record<string, unknown>) {
  const status = STATUS_VALUES.includes(args.status as any) ? (args.status as (typeof STATUS_VALUES)[number]) : 'all';
  const limit = Number.isInteger(args.limit) ? Math.min(100, Math.max(1, args.limit as number)) : 25;

  let query = supabase
    .from('service_pages')
    .select('id, slug, title, status, published_at, created_at')
    .order('created_at', { ascending: false })
    .limit(limit);
  if (status !== 'all') query = query.eq('status', status);

  const { data, error } = await query;
  if (error) return errorText('Could not list service pages.');
  return text(JSON.stringify(data ?? [], null, 2));
}

async function getServicePage(supabase: SupabaseClient, args: Record<string, unknown>) {
  const id = str(args.id, 100);
  const slug = str(args.slug, 120);
  if (!id && !slug) return errorText('Provide either id or slug.');

  const query = supabase.from('service_pages').select('*');
  const { data, error } = await (id ? query.eq('id', id) : query.eq('slug', slug!)).maybeSingle();
  if (error) return errorText('Could not load that service page.');
  if (!data) return errorText('No service page found with that id/slug.');
  return text(JSON.stringify(data, null, 2));
}

async function createServicePage(supabase: SupabaseClient, args: Record<string, unknown>) {
  const title = str(args.title, 200);
  const h1 = str(args.h1, 200);
  const metaTitle = str(args.meta_title, 200);
  const metaDescription = str(args.meta_description, 300);
  const eyebrow = str(args.eyebrow, 120);
  const summary = str(args.summary, 300);
  const intro = str(args.intro, 1000);
  if (!title || !h1 || !metaTitle || !metaDescription || !eyebrow || !summary || !intro) {
    return errorText('title, h1, meta_title, meta_description, eyebrow, summary and intro are all required.');
  }

  const errors: string[] = [];
  if (!isServiceIcon(args.icon)) errors.push(`icon: "${args.icon}" is not a valid icon. Valid values: ${SERVICE_ICON_VALUES.join(', ')}.`);

  const does = strArray(args.does);
  if (!does || does.length < 3) errors.push('does must have at least 3 items.');

  const guidance = validateTitleBodyList(args.guidance, 'guidance', null, errors);
  if (guidance && guidance.length < 2) errors.push('guidance must have at least 2 items.');

  const aside = validateAside(args.aside, errors);

  const faqs = validateTitleBodyList(args.faqs ? (args.faqs as any[]).map((f: any) => ({ title: f?.q, body: f?.a })) : args.faqs, 'faqs', null, errors)
    ?.map((f) => ({ q: f.title, a: f.body })) ?? null;
  if (faqs && faqs.length < 3) errors.push('faqs must have at least 3 items.');

  let spaces: { title: string; body: string }[] | null = null;
  if (args.spaces !== undefined) {
    spaces = validateTitleBodyList(args.spaces, 'spaces', null, errors);
  }

  if (errors.length > 0 || !does || !guidance || guidance.length < 2 || !aside || !faqs || faqs.length < 3) {
    return errorText(errors.join(' ') || 'Invalid input.');
  }

  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { count } = await supabase
    .from('service_pages')
    .select('id', { count: 'exact', head: true })
    .eq('generated_by', 'mcp')
    .gte('created_at', since);
  if ((count ?? 0) >= MAX_MCP_SERVICE_PAGES_PER_HOUR) {
    return errorText(`Rate limit: at most ${MAX_MCP_SERVICE_PAGES_PER_HOUR} service pages per hour via MCP. Try again later.`);
  }

  const slug = await uniqueServiceSlug(supabase, title);

  const { data, error } = await supabase
    .from('service_pages')
    .insert({
      slug,
      status: 'draft',
      title,
      h1,
      meta_title: metaTitle,
      meta_description: metaDescription,
      eyebrow,
      icon: args.icon,
      summary,
      intro,
      does,
      guidance,
      aside,
      faqs,
      spaces,
      internal_note: str(args.internal_note, 300),
      generated_by: 'mcp',
    })
    .select('id, slug')
    .single();

  if (error || !data) return errorText('Could not save the service page.');
  return text(
    `Created as a draft — not published, not on /services, not cross-linked, not in the sitemap. Review and publish at /admin/service-pages/${data.id}\nid: ${data.id}\nslug: ${data.slug}`
  );
}

async function updateServicePage(supabase: SupabaseClient, args: Record<string, unknown>) {
  const id = str(args.id, 100);
  if (!id) return errorText('id is required.');

  const { data: existing, error: loadError } = await supabase
    .from('service_pages')
    .select('id, status')
    .eq('id', id)
    .maybeSingle();
  if (loadError) return errorText('Could not load that service page.');
  if (!existing) return errorText('No service page found with that id.');
  if (existing.status === 'published') {
    return errorText('This service page is already published. MCP can only edit drafts — publish/unpublish and edits to a live page are done by a person in /admin/service-pages.');
  }

  const errors: string[] = [];
  const update: Record<string, unknown> = { updated_at: new Date().toISOString() };

  const title = str(args.title, 200);
  const h1 = str(args.h1, 200);
  const metaTitle = str(args.meta_title, 200);
  const metaDescription = str(args.meta_description, 300);
  const eyebrow = str(args.eyebrow, 120);
  const summary = str(args.summary, 300);
  const intro = str(args.intro, 1000);
  if (title) update.title = title;
  if (h1) update.h1 = h1;
  if (metaTitle) update.meta_title = metaTitle;
  if (metaDescription) update.meta_description = metaDescription;
  if (eyebrow) update.eyebrow = eyebrow;
  if (summary) update.summary = summary;
  if (intro) update.intro = intro;
  if (args.internal_note !== undefined) update.internal_note = str(args.internal_note, 300);

  if (args.icon !== undefined) {
    if (!isServiceIcon(args.icon)) errors.push(`icon: "${args.icon}" is not a valid icon.`);
    else update.icon = args.icon;
  }
  if (args.does !== undefined) {
    const does = strArray(args.does);
    if (!does || does.length < 3) errors.push('does must have at least 3 items.');
    else update.does = does;
  }
  if (args.guidance !== undefined) {
    const guidance = validateTitleBodyList(args.guidance, 'guidance', null, errors);
    if (guidance && guidance.length < 2) errors.push('guidance must have at least 2 items.');
    else if (guidance) update.guidance = guidance;
  }
  if (args.aside !== undefined) {
    const aside = validateAside(args.aside, errors);
    if (aside) update.aside = aside;
  }
  if (args.faqs !== undefined) {
    const faqsInput = Array.isArray(args.faqs) ? (args.faqs as any[]).map((f) => ({ title: f?.q, body: f?.a })) : args.faqs;
    const faqs = validateTitleBodyList(faqsInput, 'faqs', null, errors)?.map((f) => ({ q: f.title, a: f.body }));
    if (faqs && faqs.length < 3) errors.push('faqs must have at least 3 items.');
    else if (faqs) update.faqs = faqs;
  }
  if (args.spaces !== undefined) {
    const spaces = validateTitleBodyList(args.spaces, 'spaces', null, errors);
    if (spaces) update.spaces = spaces;
  }

  if (errors.length > 0) return errorText(errors.join(' '));
  if (Object.keys(update).length === 1) return errorText('Nothing to update — pass at least one field.');

  const { error } = await supabase.from('service_pages').update(update).eq('id', id);
  if (error) return errorText('Could not save the changes.');
  return text(`Saved. Still a draft — review and publish at /admin/service-pages/${id}`);
}
