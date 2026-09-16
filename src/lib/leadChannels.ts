// How an enquiry reached us, and what the customer said when asked how they
// found us.
//
// `channel` is a fact about the mechanism and is never guessed: the website
// form writes 'form' itself, and everything else is typed in by whoever took
// the call. `lead_source` is a report of what somebody said, which is a
// weaker kind of evidence — it is optional everywhere, and null (nobody
// recorded it) is deliberately kept distinct from 'unknown' (they were asked
// and did not know). Reading the two as the same thing would turn an unasked
// question into a customer's answer.
//
// Both lists are mirrored by CHECK constraints in
// supabase/migrations/20260916120000_enquiry_channels.sql. Adding a value here
// without adding it there gets the insert rejected by the database, which is
// the failure we want: a silent write of a value nothing else understands is
// worse.

export const CHANNELS = ['form', 'phone', 'whatsapp', 'email', 'other'] as const;
export type Channel = (typeof CHANNELS)[number];

/** Channels the office can log by hand. 'form' is excluded: only the website writes that. */
export const MANUAL_CHANNELS = ['phone', 'whatsapp', 'email', 'other'] as const;

export const CHANNEL_LABELS: Record<Channel, string> = {
  form: 'Website form',
  phone: 'Phone call',
  whatsapp: 'WhatsApp',
  email: 'Email',
  other: 'Other',
};

/** Short enough for a table cell. */
export const CHANNEL_SHORT: Record<Channel, string> = {
  form: 'Form',
  phone: 'Phone',
  whatsapp: 'WhatsApp',
  email: 'Email',
  other: 'Other',
};

export const LEAD_SOURCES = [
  'google-ads',
  'google-organic',
  'google-maps',
  'website',
  'referral',
  'repeat',
  'other',
  'unknown',
] as const;
export type LeadSource = (typeof LEAD_SOURCES)[number];

// Worded as the office would ask it, because they are the ones picking from
// this list with a customer on the line.
export const LEAD_SOURCE_LABELS: Record<LeadSource, string> = {
  'google-ads': 'Google Ads',
  'google-organic': 'Google search (not an ad)',
  'google-maps': 'Google Maps / Business Profile',
  website: 'Found the number on our website',
  referral: 'Recommended by someone',
  repeat: 'Existing customer',
  other: 'Somewhere else',
  unknown: "Asked — they didn't know",
};

export const isChannel = (v: unknown): v is Channel =>
  typeof v === 'string' && (CHANNELS as readonly string[]).includes(v);

export const isLeadSource = (v: unknown): v is LeadSource =>
  typeof v === 'string' && (LEAD_SOURCES as readonly string[]).includes(v);

/** What a stored value should read as on screen. Falls through unchanged rather than inventing a label. */
export const channelLabel = (v: string | null | undefined) =>
  (v && CHANNEL_LABELS[v as Channel]) || v || 'Unknown';

export const leadSourceLabel = (v: string | null | undefined) =>
  v ? LEAD_SOURCE_LABELS[v as LeadSource] || v : null;
