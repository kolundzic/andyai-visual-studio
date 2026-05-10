import { getProductDataAdapter, withDataFallback } from "@/lib/data";

export default async function ProjectsPage() {
  const projects = await withDataFallback(
    async (adapter) => adapter.listProjects(),
    async (fallbackAdapter) => fallbackAdapter.listProjects()
  );

  const source = getProductDataAdapter().getSourceState();

  return (
    <main className="avs-page-shell">
      <section className="avs-hero-small">
        <div className="avs-section-kicker">Workspace</div>
        <h1>User projects</h1>
        <p>
          Saved TAP prompts and template-based projects appear here after the user creates them from the TAP Editor.
        </p>
        <div className="avs-actions">
          <a className="avs-button-primary" href="/gallery">
            Create from template
          </a>
          <a className="avs-button-secondary" href="/tap-editor">
            Open TAP Editor
          </a>
        </div>
        <div className="avs-inline-proof">
          <span>Projects: {projects.length}</span>
          <span>Data mode: {source.mode}</span>
          <span>{source.reason}</span>
        </div>
      </section>

      <section className="avs-grid avs-grid-3">
        {projects.map((project) => (
          <article className="avs-card" key={project.id}>
            <div className="avs-card-topline">{project.status}</div>
            <h3>{project.title}</h3>
            <p>{project.description || "No description yet."}</p>
            <div className="avs-inline-proof">
              <span>{project.source}</span>
              <span>{new Date(project.updatedAt).toLocaleDateString()}</span>
            </div>
            <a className="avs-button-secondary" href={`/projects/${project.id}`}>
              Preview project
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
