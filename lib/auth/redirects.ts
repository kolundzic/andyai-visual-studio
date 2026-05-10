import { getAuthRedirectPath, getSiteUrl } from "@/lib/supabase/env";

export function getAuthCallbackUrl(): string {
  return `${getSiteUrl()}/auth/callback?next=${encodeURIComponent(getAuthRedirectPath())}`;
}
