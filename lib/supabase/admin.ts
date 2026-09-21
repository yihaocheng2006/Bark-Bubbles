import { createClient } from "@supabase/supabase-js";

// Server-only client using the service role key. Bypasses RLS — never import
// this into a Client Component or otherwise expose it to the browser.
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );
}
