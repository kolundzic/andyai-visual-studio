import Link from "next/link";
import type { WorkspaceProject } from "@/lib/data/user-projects";

export function ProjectWorkspaceShell({ projects, source, fallbackUsed, message }: { projects: WorkspaceProject[]; source: string; fallbackUsed: boolean; message: string }) {
  return (
    <section className="avs-section">
      <div className="avs-status-card">
        <strong>Workspace source:</strong> {source} · <strong>Fallback:</strong> {fallbackUsed ? "yes" : "no"}
        <p>{message}</p>
      </div>
      <div className="avs-card-grid">
        {projects.map((project) => (
          <Link className="avs-card" href={`/projects/${project.id}`} key={project.id}>
            <div className="avs-card-meta">{project.status}</div>
            <h3>{project.title}</h3>
            <p>{project.userPrompt}</p>
            <span className="avs-pill">{project.templateId ?? "No template"}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
