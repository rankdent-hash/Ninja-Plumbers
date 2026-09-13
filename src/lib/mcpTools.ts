import type { SupabaseClient } from '@supabase/supabase-js';
import { sanitizeBlogBody } from './sanitizeBlogHtml';
import { slugify } from './slugify';
import { services } from '../data/services';
import { appliances } from '../data/appliances';
import { dampPages } from '../data/damp';

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
      'Create a new blog post as a DRAFT. It is never published by this tool — a human has to open it in /admin/blog and click Publish before it is visible on the live site. body is HTML; only <p>, <h2>, <ul>/<ol>/<li>, <a>, <strong>/<em> survive — everything else is stripped on save.',
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
