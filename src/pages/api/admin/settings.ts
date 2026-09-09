import type { APIRoute } from 'astro';
import { getSupabaseAdmin } from '../../../lib/supabaseAdmin';
import { SETTING_KEYS, getMaskedSettings, type SettingKey } from '../../../lib/adminSettings';

export const prerender = false;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

export const GET: APIRoute = async () => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return json({ ok: false, message: 'Not connected to Supabase.' }, 503);

  const masked = await getMaskedSettings(supabase);
  return json({ ok: true, settings: masked }, 200);
};

/** Only keys present with a non-empty value are changed — a blank field means "leave as is". */
export const POST: APIRoute = async ({ request }) => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return json({ ok: false, message: 'Not connected to Supabase.' }, 503);

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, message: 'Could not read that request.' }, 400);
  }

  const rows = SETTING_KEYS.filter((k): k is SettingKey => typeof body[k] === 'string' && (body[k] as string).trim() !== '').map(
    (k) => ({ key: k, value: (body[k] as string).trim(), updated_at: new Date().toISOString() })
  );

  if (rows.length === 0) return json({ ok: true, settings: await getMaskedSettings(supabase) }, 200);

  const { error } = await supabase.from('admin_settings').upsert(rows, { onConflict: 'key' });
  if (error) return json({ ok: false, message: 'Could not save those settings.' }, 500);

  return json({ ok: true, settings: await getMaskedSettings(supabase) }, 200);
};
