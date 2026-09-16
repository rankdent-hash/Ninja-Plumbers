-- Where an enquiry came from, and who recorded it.
--
-- Until now every row in `enquiries` was a website form submission, so the
-- table could assume one: a postcode was always given, and `consent` recorded
-- that the form's privacy notice was on screen when the customer pressed send.
-- Most of the work actually arrives by phone or WhatsApp, including calls from
-- Google Ads that the website never sees at all, and none of it was in here.
-- Every number built on this table — the area map, the conversion columns —
-- was therefore a count of one channel described as if it were all of them.
--
-- Four consequences, all handled below.
--
--   * `channel` separates a form submission from a call the office logs by
--     hand. `contact_sources` now counts only channel = 'form' in its `forms`
--     column, so a logged call cannot inflate a page's conversion rate. This
--     is the one change here that protects an existing number.
--
--   * `postcode` becomes nullable. On a call the postcode is often not known
--     until the visit is booked, and a required field is answered with a
--     guess. It can be filled in later from the lead's own page, and
--     `enquiry_areas` already reports a missing district as "(not recorded)"
--     rather than dropping the row.
--
--   * `consent` stops being CHECK (consent = true). Someone who rang us did
--     not see the form's privacy notice, and writing `true` on their row
--     would be a false record of consent. Manually logged leads store false.
--
--   * `lead_source` records what the caller said when asked how they found
--     us. It is nullable: null means nobody recorded it, which is a different
--     thing from 'unknown', which means they were asked and did not know.

alter table public.enquiries
  add column if not exists channel text not null default 'form',
  add column if not exists lead_source text,
  add column if not exists logged_by text,
  add column if not exists logged_at timestamptz;

alter table public.enquiries
  drop constraint if exists enquiries_channel_check;
alter table public.enquiries
  add constraint enquiries_channel_check
  check (channel in ('form', 'phone', 'whatsapp', 'email', 'other'));

alter table public.enquiries
  drop constraint if exists enquiries_lead_source_check;
alter table public.enquiries
  add constraint enquiries_lead_source_check
  check (lead_source is null or lead_source in (
    'google-ads', 'google-organic', 'google-maps', 'website',
    'referral', 'repeat', 'other', 'unknown'
  ));

-- A call may have neither a postcode nor a name yet — a missed call from an
-- ad leaves a number and nothing else. Recording "Unknown" as if it were a
-- name would put invented data in the same column as real ones.
alter table public.enquiries alter column postcode drop not null;
alter table public.enquiries alter column name drop not null;

alter table public.enquiries drop constraint if exists enquiries_consent_required;

-- Every row that existed before this migration was a website form submission.
update public.enquiries set channel = 'form' where channel is null;

create index if not exists enquiries_channel_idx on public.enquiries (channel);

-- `forms` gains `and channel = 'form'`. Without it, one logged phone call
-- would be counted as a form submission against whichever page the office
-- happened to be on, and every conversion rate on /admin/activity would move.
create or replace function public.contact_sources(
  since timestamptz,
  until timestamptz default null
)
returns table (page text, views bigint, phone bigint, whatsapp bigint, sms bigint, forms bigint)
language sql
stable
as $$
  with clicks as (
    select
      public.normalise_page(source_page) as page,
      count(*) filter (where kind = 'phone')    as phone,
      count(*) filter (where kind = 'whatsapp') as whatsapp,
      count(*) filter (where kind = 'sms')      as sms
    from public.click_events
    where created_at >= since
      and (until is null or created_at < until)
    group by 1
  ),
  submissions as (
    select public.normalise_page(source_page) as page, count(*) as forms
    from public.enquiries
    where created_at >= since
      and (until is null or created_at < until)
      and status <> 'spam'
      and channel = 'form'
    group by 1
  ),
  views as (
    select public.normalise_page(path) as page, count(*) as views
    from public.page_views
    where created_at >= since
      and (until is null or created_at < until)
    group by 1
  ),
  pages as (
    select page from clicks
    union select page from submissions
    union select page from views
  )
  select
    p.page,
    coalesce(v.views, 0)     as views,
    coalesce(c.phone, 0)     as phone,
    coalesce(c.whatsapp, 0)  as whatsapp,
    coalesce(c.sms, 0)       as sms,
    coalesce(s.forms, 0)     as forms
  from pages p
  left join clicks c      on c.page = p.page
  left join submissions s on s.page = p.page
  left join views v       on v.page = p.page
  order by
    coalesce(c.phone,0) + coalesce(c.whatsapp,0) + coalesce(c.sms,0) + coalesce(s.forms,0) desc,
    coalesce(v.views,0) desc
$$;

-- `enquiry_areas` gains a per-channel split. `total` is unchanged and still
-- counts every enquiry in the district, so nothing already drawn on the map
-- moves; the new columns say how that total divides. Prefixed by_* because
-- /admin/areas already holds a `phone` and a `whatsapp` from click_events,
-- which count taps on a page rather than enquiries from a place.
--
-- The return type gains columns, so this is a drop and recreate.
drop function if exists public.enquiry_areas(timestamptz, timestamptz);
create function public.enquiry_areas(
  since timestamptz,
  until timestamptz default null
)
returns table (
  district text,
  borough text,
  total bigint,
  booked bigint,
  in_service_area boolean,
  borough_unknown bigint,
  by_form bigint,
  by_phone bigint,
  by_whatsapp bigint,
  by_other bigint
)
language sql
stable
as $$
  select
    coalesce(nullif(upper(trim(postcode_district)), ''), '(not recorded)') as district,
    (array_agg(borough) filter (where borough is not null and trim(borough) <> ''))[1] as borough,
    count(*) as total,
    count(*) filter (where status = 'booked') as booked,
    bool_or(coalesce(in_service_area, false)) as in_service_area,
    count(*) filter (where borough is null or trim(borough) = '') as borough_unknown,
    count(*) filter (where channel = 'form')     as by_form,
    count(*) filter (where channel = 'phone')    as by_phone,
    count(*) filter (where channel = 'whatsapp') as by_whatsapp,
    count(*) filter (where channel not in ('form', 'phone', 'whatsapp')) as by_other
  from public.enquiries
  where created_at >= since
    and (until is null or created_at < until)
    and status <> 'spam'
  group by 1
  order by count(*) desc, 1
$$;

-- How the leads the office logged by hand say they found us. Website form
-- submissions are excluded: `source_page` already records where those came
-- from, far more precisely than a dropdown could, and folding the two
-- together would bury the answer this is for — whether the phone rings
-- because of Google Ads.
create or replace function public.lead_sources(
  since timestamptz,
  until timestamptz default null
)
returns table (lead_source text, total bigint, booked bigint)
language sql
stable
as $$
  select
    coalesce(lead_source, '(not recorded)') as lead_source,
    count(*) as total,
    count(*) filter (where status = 'booked') as booked
  from public.enquiries
  where created_at >= since
    and (until is null or created_at < until)
    and status <> 'spam'
    and channel <> 'form'
  group by 1
  order by count(*) desc, 1
$$;
