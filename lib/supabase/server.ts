import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getSupabasePublicEnv } from "./env";

export function createServerSupabaseClient(): SupabaseClient | null {
  const env = getSupabasePublicEnv();

  if (!env.configured) {
    return null;
  }

  return createClient(env.url, env.anonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
