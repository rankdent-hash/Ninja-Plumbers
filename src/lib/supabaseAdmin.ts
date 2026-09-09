import { createClient } from '@supabase/supabase-js';

/** Service-role client for server-only code (never sent to the browser). Null with no credentials set, same fail-closed rule as the enquiry API. */
export function getSupabaseAdmin() {
  const url = import.meta.env.SUPABASE_URL;
  const key = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

export const LEAD_STATUSES = ['new', 'contacted', 'quoted', 'booked', 'closed', 'spam'] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];
