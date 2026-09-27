// Approved Google reviews from the testimonials table, newest first. A row
// only shows once someone has checked it against the real listing and
// switched it on in /admin/reviews. Read at build time by the reviews rail
// and the /reviews page, which both change shape when there are none.
import { getSupabaseAdmin } from './supabaseAdmin';

export type Testimonial = { name: string; rating: 1 | 2 | 3 | 4 | 5; text: string };

export async function getApprovedTestimonials(): Promise<Testimonial[]> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return [];
  const { data } = await supabase
    .from('testimonials')
    .select('name, rating, text')
    .eq('approved', true)
    .order('created_at', { ascending: false });
  return (data ?? []) as Testimonial[];
}
