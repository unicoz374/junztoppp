import { createBrowserClient } from "@supabase/ssr";

// Dipakai di komponen sisi client ("use client").
// Aman dipakai di browser karena hanya memakai anon key (bukan service role).
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
