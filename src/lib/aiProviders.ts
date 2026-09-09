// Text and image generation for the /admin/blog "generate a draft" flow.
// Every provider gets the same brief and the same JSON contract back, so the
// admin UI and the publish path don't need to know which one wrote a post.
//
// Anthropic goes through the official SDK (required for this project); OpenAI
// likewise, since its SDK is equally standard. Gemini calls the REST API
// directly — no official Node SDK choice was verified for this project, and
// the REST shape is simple and stable enough not to need one.
import Anthropic from '@anthropic-ai/sdk';
import OpenAI from 'openai';

export type Provider = 'claude' | 'openai' | 'gemini';

export type SlugOption = { slug: string; title: string };

export type DraftInput = {
  topic: string;
  tone?: string;
  validServices: SlugOption[];
  validAppliances: SlugOption[];
  validDamp: SlugOption[];
};

export type DraftOutput = {
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  body: string; // HTML
  relatedServices: string[];
  relatedAppliances: string[];
  relatedDamp: string[];
};

// Model IDs drift as providers release new versions — update these three
// constants if a provider retires the one named here.
const CLAUDE_MODEL = 'claude-opus-5';
const OPENAI_MODEL = 'gpt-4o-mini';
const OPENAI_IMAGE_MODEL = 'gpt-image-1';
const GEMINI_MODEL = 'gemini-2.0-flash';

function buildPrompt(input: DraftInput): { system: string; user: string } {
  const slugList = (label: string, items: SlugOption[], prefix: string) =>
    items.length
      ? `${label}:\n` + items.map((i) => `- ${prefix}${i.slug} — ${i.title}`).join('\n')
      : '';

  const system = [
    'You write blog posts for Ninja Plumbers, a London plumbing, heating and drainage company.',
    'Voice: plain, practical, specific — the way a good tradesperson explains a job, not marketing copy. Short paragraphs, no filler, no exclamation marks, no emoji.',
    'Hard rule: never invent facts about this business — no prices, no review counts or star ratings, no certifications, no staff numbers, no guarantees, no awards. Only give general trade knowledge and diagnostic advice, and point the reader to a real internal page for anything specific to booking or pricing.',
    'The post body must be valid HTML using only <p>, <h2>, <ol>, <ul>, <li> and <a href="..."> tags — no <script>, no <style>, no other tags.',
    'Include 2 to 4 inline links inside the body, each an <a href="/services/SLUG"> or <a href="/appliances/SLUG"> or <a href="/damp/SLUG"> using ONLY a slug from the lists below, placed naturally in a sentence where it is genuinely relevant — never a bolted-on "related links" list.',
    'Respond with ONLY a single JSON object, no markdown code fence, no commentary before or after, matching exactly this shape:',
    '{"title": string, "h1": string, "metaTitle": string, "metaDescription": string, "excerpt": string, "body": string, "relatedServices": string[], "relatedAppliances": string[], "relatedDamp": string[]}',
    '"relatedServices"/"relatedAppliances"/"relatedDamp" list the slugs (without the /services//appliances//damp prefix) of every page you linked to in the body, and only those.',
  ].join('\n');

  const user = [
    `Topic / target keyword: ${input.topic}`,
    input.tone ? `Tone: ${input.tone}` : '',
    slugList('Valid service pages', input.validServices, '/services/'),
    slugList('Valid appliance pages', input.validAppliances, '/appliances/'),
    slugList('Valid damp & condensation pages', input.validDamp, '/damp/'),
  ]
    .filter(Boolean)
    .join('\n\n');

  return { system, user };
}

function parseDraftJson(raw: string): DraftOutput {
  // Strip a markdown code fence if the model added one despite the instruction not to.
  const cleaned = raw.trim().replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');
  const parsed = JSON.parse(cleaned);
  const arr = (v: unknown) => (Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string') : []);
  return {
    title: String(parsed.title ?? ''),
    h1: String(parsed.h1 ?? ''),
    metaTitle: String(parsed.metaTitle ?? ''),
    metaDescription: String(parsed.metaDescription ?? ''),
    excerpt: String(parsed.excerpt ?? ''),
    body: String(parsed.body ?? ''),
    relatedServices: arr(parsed.relatedServices),
    relatedAppliances: arr(parsed.relatedAppliances),
    relatedDamp: arr(parsed.relatedDamp),
  };
}

async function generateWithClaude(apiKey: string, input: DraftInput): Promise<DraftOutput> {
  const { system, user } = buildPrompt(input);
  const client = new Anthropic({ apiKey });
  const response = await client.messages.create({
    model: CLAUDE_MODEL,
    max_tokens: 16000,
    system,
    messages: [{ role: 'user', content: user }],
  });
  const block = response.content.find((b) => b.type === 'text');
  if (!block || block.type !== 'text') throw new Error('Claude returned no text content.');
  return parseDraftJson(block.text);
}

async function generateWithOpenAI(apiKey: string, input: DraftInput): Promise<DraftOutput> {
  const { system, user } = buildPrompt(input);
  const client = new OpenAI({ apiKey });
  const response = await client.chat.completions.create({
    model: OPENAI_MODEL,
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: user },
    ],
    response_format: { type: 'json_object' },
  });
  const text = response.choices[0]?.message?.content;
  if (!text) throw new Error('ChatGPT returned no content.');
  return parseDraftJson(text);
}

async function generateWithGemini(apiKey: string, input: DraftInput): Promise<DraftOutput> {
  const { system, user } = buildPrompt(input);
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents: [{ parts: [{ text: user }] }],
      generationConfig: { responseMimeType: 'application/json' },
    }),
  });
  if (!res.ok) throw new Error(`Gemini request failed (${res.status}): ${(await res.text()).slice(0, 300)}`);
  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('Gemini returned no content.');
  return parseDraftJson(text);
}

export async function generateBlogDraft(provider: Provider, apiKey: string, input: DraftInput): Promise<DraftOutput> {
  if (provider === 'claude') return generateWithClaude(apiKey, input);
  if (provider === 'openai') return generateWithOpenAI(apiKey, input);
  return generateWithGemini(apiKey, input);
}

export async function generateHeroImage(apiKey: string, prompt: string): Promise<{ base64: string; mimeType: string }> {
  const client = new OpenAI({ apiKey });
  const response = await client.images.generate({
    model: OPENAI_IMAGE_MODEL,
    prompt,
    size: '1536x1024',
    n: 1,
  });
  const b64 = response.data?.[0]?.b64_json;
  if (!b64) throw new Error('OpenAI returned no image data.');
  return { base64: b64, mimeType: 'image/png' };
}
