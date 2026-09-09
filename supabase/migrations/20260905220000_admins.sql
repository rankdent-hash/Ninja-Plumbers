-- Admin accounts for the internal leads panel at /admin. Same posture as
-- `enquiries`: RLS on, no policies, so only the service-role key (used
-- server-side only, never sent to the browser) can read or write it.
create table if not exists public.admins (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null unique,
  -- pbkdf2$<iterations>$<salt-hex>$<hash-hex>, produced by src/lib/adminAuth.ts.
  -- Never a plaintext password.
  password_hash text not null,
  last_login_at timestamptz
);

alter table public.admins enable row level security;
