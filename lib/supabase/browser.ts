import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { getSupabasePublicEnv } from "./env";

let browserClient: SupabaseClient | null = null;

export function createBrowserSupabaseClient(): SupabaseClient | null {
  const env = getSupabasePublicEnv();

  if (!env.configured) {
    return null;
  }

  if (!browserClient) {
    browserClient = createClient(env.url, env.anonKey);
  }

  return browserClient;
}
