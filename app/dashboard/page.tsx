import Link from "next/link";
import { AuthStatus } from "@/components/AuthStatus";
import { ProjectWorkspaceShell } from "@/components/ProjectWorkspaceShell";
import { getCurrentAuthState } from "@/lib/auth/session";
import { listWorkspaceProjects } from "@/lib/data/user-projects";

export const metadata = {
  title: "Dashboard | AndyAI Visual Studio",
  description: "Protected dashboard model for user-owned visual projects.",
};

export default async function DashboardPage() {
  const auth = await getCurrentAuthState();

  if (!auth.user) {
    return (
      <main className="avs-page">
        <section className="avs-hero compact">
          <p className="avs-kicker">Protected dashboard model</p>
          <h1>Your Visual Studio workspace</h1>
          <p>
            The dashboard is now auth-aware. Real private projects require Supabase Auth and owner-scoped RLS.
          </p>
          <div className="avs-button-row">
            <Link className="avs-button" href="/login">Sign in</Link>
            <Link className="avs-button secondary" href="/gallery">Browse public templates</Link>
          </div>
        </section>
        <AuthStatus auth={auth} />
      </main>
    );
  }

  const workspace = await listWorkspaceProjects(auth.user.id);

  return (
    <main className="avs-page">
      <section className="avs-hero compact">
        <p className="avs-kicker">Protected workspace</p>
        <h1>Dashboard</h1>
        <p>Signed-in users see their own projects, backed by project ownership and starter RLS rules.</p>
      </section>
      <AuthStatus auth={auth} />
      <ProjectWorkspaceShell projects={workspace.projects} source={workspace.source} fallbackUsed={workspace.fallbackUsed} message={workspace.message} />
    </main>
  );
}
