import { createServerSupabaseAuthClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import type { AvsAuthState } from "./types";

export async function getCurrentAuthState(): Promise<AvsAuthState> {
  if (!isSupabaseConfigured()) {
    return {
      configured: false,
      user: null,
    };
  }

  const supabase = await createServerSupabaseAuthClient();

  if (!supabase) {
    return {
      configured: false,
      user: null,
    };
  }

  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    return {
      configured: true,
      user: null,
    };
  }

  return {
    configured: true,
    user: {
      id: data.user.id,
      email: data.user.email ?? "unknown-user",
    },
  };
}
