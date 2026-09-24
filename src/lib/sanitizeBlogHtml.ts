import sanitizeHtml from 'sanitize-html';

/**
 * The one trust boundary for blog post body HTML. Every post's body is
 * rendered unescaped on the public site (`<Fragment set:html={post.body} />`
 * in /blog/[slug].astro), so anything that reaches storage without passing
 * through here is a stored-XSS risk against every visitor, not just the
 * admin who wrote it.
 *
 * This runs on every save, from every source — the rich-text editor on
 * /admin/blog/[id], the AI-generation flow in generate.ts, and any future
 * caller (an MCP server included) — so no path can skip it. Never trust a
 * client library's own output directly, including the editor's: Quill 2.0.3
 * (github.com/advisories/GHSA-v3m3-f69x-jf25, low severity, unpatched at time
 * of writing) can be coaxed into producing unsafe HTML from its own export
 * path, which is exactly the input this function treats as untrusted.
 *
 * The allowlist matches what .blog-body actually styles in global.css (p,
 * h2, ul/ol/li, a, strong/em) — nothing wider. No images: there is no
 * inline-image upload path, only the one AI-generated hero_image_url, so an
 * <img> tag in body content could only ever be a hotlink to something we
 * don't control. No classes or inline styles: nothing in the template reads
 * them, so allowing them would only add attack surface for none of the benefit.
 */
export function sanitizeBlogBody(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: ['p', 'h2', 'ul', 'ol', 'li', 'a', 'strong', 'em', 'br'],
    allowedAttributes: { a: ['href', 'rel'] },
    allowedSchemes: ['http', 'https', 'mailto', 'tel'],
    allowProtocolRelative: false,
    // Drop the disallowed tag but keep its text and children (a stray <div>
    // around a real paragraph shouldn't eat the paragraph) — except script/
    // style, whose content is never content anyone meant to publish.
    disallowedTagsMode: 'discard',
    nonTextTags: ['script', 'style', 'textarea', 'noscript', 'iframe', 'object', 'embed'],
    exclusiveFilter: (frame) => frame.tag === 'a' && !frame.attribs.href,
    transformTags: {
      a: (tagName, attribs) => {
        // Every external link gets rel="noopener" automatically, matching
        // the convention already used by hand everywhere else on the site
        // (cookies.astro, privacy.astro, the landing pages) — the editor
        // should not depend on whoever is typing to remember it.
        const isExternal = /^https?:\/\//i.test(attribs.href || '');
        // Typed explicitly: TypeScript otherwise infers a union of the two
        // object shapes that sanitize-html's Attributes type rejects.
        const out: Record<string, string> = isExternal
          ? { ...attribs, rel: 'noopener' }
          : { href: attribs.href ?? '' };
        return { tagName, attribs: out };
      },
    },
  }).trim();
}
