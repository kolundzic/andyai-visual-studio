import Link from "next/link";
import { ProjectWorkspaceShell } from "@/components/ProjectWorkspaceShell";
import { getCurrentAuthState } from "@/lib/auth/session";
import { listWorkspaceProjects } from "@/lib/data/user-projects";

export const metadata = {
  title: "Projects | AndyAI Visual Studio",
  description: "User-owned visual projects workspace.",
};

export default async function ProjectsPage() {
  const auth = await getCurrentAuthState();

  if (!auth.user) {
    return (
      <main className="avs-page">
        <section className="avs-hero compact">
          <p className="avs-kicker">Projects require login</p>
          <h1>User project workspace</h1>
          <p>Sign in to see projects owned by your Supabase user id.</p>
          <Link className="avs-button" href="/login">Sign in</Link>
        </section>
      </main>
    );
  }

  const workspace = await listWorkspaceProjects(auth.user.id);

  return (
    <main className="avs-page">
      <section className="avs-hero compact">
        <p className="avs-kicker">User-owned projects</p>
        <h1>Projects</h1>
        <p>Every private project belongs to the authenticated user and is protected by owner checks.</p>
      </section>
      <ProjectWorkspaceShell projects={workspace.projects} source={workspace.source} fallbackUsed={workspace.fallbackUsed} message={workspace.message} />
    </main>
  );
}
