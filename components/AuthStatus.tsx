import Link from "next/link";
import type { AvsAuthState } from "@/lib/auth/types";

export function AuthStatus({ auth }: { auth: AvsAuthState }) {
  if (!auth.configured) {
    return (
      <div className="avs-status-card">
        <strong>Auth status:</strong> Supabase not configured yet.
        <p>Add Supabase env vars to enable real login.</p>
      </div>
    );
  }

  if (!auth.user) {
    return (
      <div className="avs-status-card">
        <strong>Auth status:</strong> Signed out.
        <p><Link href="/login">Sign in</Link> to open your project workspace.</p>
      </div>
    );
  }

  return (
    <div className="avs-status-card">
      <strong>Signed in:</strong> {auth.user.email}
      <p><Link href="/auth/sign-out">Sign out</Link></p>
    </div>
  );
}
