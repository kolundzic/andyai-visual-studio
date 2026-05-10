"use client";

import { useState } from "react";
import { createBrowserSupabaseClient } from "@/lib/supabase/browser";

type AuthFormProps = {
  configured: boolean;
  callbackPath?: string;
};

export function AuthForm({ configured, callbackPath = "/auth/callback" }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setStatus(null);

    const supabase = createBrowserSupabaseClient();

    if (!configured || !supabase) {
      setStatus("Supabase is not configured yet. Add env vars, then restart the app.");
      setBusy(false);
      return;
    }

    const redirectTo = `${window.location.origin}${callbackPath}`;
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectTo,
      },
    });

    if (error) {
      setStatus(error.message);
    } else {
      setStatus("Magic link sent. Check your email and return through the sign-in link.");
    }

    setBusy(false);
  }

  return (
    <form className="avs-card" onSubmit={submit}>
      <div className="avs-card-meta">Supabase Auth</div>
      <h2>Sign in to your workspace</h2>
      <p>Enter your email and receive a magic login link for your AndyAI Visual Studio workspace.</p>
      <label className="avs-field">
        <span>Email</span>
        <input
          required
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          disabled={!configured || busy}
        />
      </label>
      <button className="avs-button" type="submit" disabled={!configured || busy}>
        {busy ? "Sending..." : "Send magic link"}
      </button>
      {!configured && <p className="avs-warning">Supabase env vars are missing. This screen is login-ready, but not connected yet.</p>}
      {status && <p className="avs-status-card">{status}</p>}
    </form>
  );
}
