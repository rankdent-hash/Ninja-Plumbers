/** Shared with the AI-generation flow (generate.ts) and the MCP blog tools,
 * so a title becomes the same URL slug regardless of who wrote the post. */
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || 'post';
}
