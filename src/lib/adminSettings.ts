import type { SupabaseClient } from '@supabase/supabase-js';

// API keys for the /admin/blog AI generation flow, entered by hand in
// /admin/settings rather than as Vercel env vars — so rotating a key never
// needs a redeploy. Read/written server-side only, same fail-closed rule as
// every other admin table.
export const SETTING_KEYS = ['openai_api_key', 'anthropic_api_key', 'gemini_api_key'] as const;
export type SettingKey = (typeof SETTING_KEYS)[number];

export async function getSetting(supabase: SupabaseClient, key: SettingKey): Promise<string | null> {
  const { data } = await supabase.from('admin_settings').select('value').eq('key', key).maybeSingle();
  return data?.value || null;
}

const mask = (v: string) => (v.length <= 4 ? '••••' : '••••' + v.slice(-4));

/** Never returns real values — only whether a key is set, and its last 4 characters. */
export async function getMaskedSettings(supabase: SupabaseClient): Promise<Record<SettingKey, string | null>> {
  const { data } = await supabase.from('admin_settings').select('key, value').in('key', SETTING_KEYS);
  const out = Object.fromEntries(SETTING_KEYS.map((k) => [k, null])) as Record<SettingKey, string | null>;
  for (const row of data ?? []) {
    if (row.value) out[row.key as SettingKey] = mask(row.value);
  }
  return out;
}
