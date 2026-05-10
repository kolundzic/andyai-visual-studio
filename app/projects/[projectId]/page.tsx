import Link from "next/link";
import { getCurrentAuthState } from "@/lib/auth/session";
import { getWorkspaceProject } from "@/lib/data/user-projects";

type ProjectDetailPageProps = {
  params: {
    projectId: string;
  };
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const auth = await getCurrentAuthState();

  if (!auth.user) {
    return (
      <main className="avs-page">
        <section className="avs-hero compact">
          <p className="avs-kicker">Protected project</p>
          <h1>Sign in required</h1>
          <p>This project detail view requires an authenticated owner.</p>
          <Link className="avs-button" href="/login">Sign in</Link>
        </section>
      </main>
    );
  }

  const project = await getWorkspaceProject(auth.user.id, params.projectId);

  if (!project) {
    return (
      <main className="avs-page">
        <section className="avs-hero compact">
          <p className="avs-kicker">Project not found</p>
          <h1>No accessible project</h1>
          <p>The project does not exist in this workspace or does not belong to the current user.</p>
          <Link className="avs-button" href="/projects">Back to projects</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="avs-page">
      <section className="avs-hero compact">
        <p className="avs-kicker">{project.status}</p>
        <h1>{project.title}</h1>
        <p>Owner-scoped project detail view for the authenticated user.</p>
        <div className="avs-button-row">
          <Link className="avs-button" href="/tap-editor">Open TAP Editor</Link>
          <Link className="avs-button secondary" href="/projects">Back to projects</Link>
        </div>
      </section>
      <section className="avs-section">
        <h2>User prompt</h2>
        <pre className="avs-code-block">{project.userPrompt}</pre>
      </section>
      <section className="avs-section">
        <h2>Generated prompt</h2>
        <pre className="avs-code-block">{project.generatedPrompt}</pre>
      </section>
    </main>
  );
}
