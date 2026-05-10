import { AuthForm } from "@/components/AuthForm";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export const metadata = {
  title: "Login | AndyAI Visual Studio",
  description: "Login-ready Supabase Auth screen for AndyAI Visual Studio.",
};

export default function LoginPage() {
  const configured = isSupabaseConfigured();

  return (
    <main className="avs-page">
      <section className="avs-hero compact">
        <p className="avs-kicker">v0.6.0 Auth</p>
        <h1>Login-ready workspace</h1>
        <p>
          Supabase Auth prepares each user for private projects, protected dashboard views, and owner-scoped exports.
        </p>
      </section>
      <AuthForm configured={configured} />
    </main>
  );
}
