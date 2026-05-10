import { getProductDataAdapter, withDataFallback } from "@/lib/data";

export default async function ExportsPage() {
  const projects = await withDataFallback(
    async (adapter) => adapter.listProjects(),
    async (fallbackAdapter) => fallbackAdapter.listProjects()
  );

  const exportGroups = await Promise.all(
    projects.map(async (project) => {
      const exports = await withDataFallback(
        async (adapter) => adapter.listProjectExports(project.id),
        async (fallbackAdapter) => fallbackAdapter.listProjectExports(project.id)
      );
      return { project, exports };
    })
  );

  const source = getProductDataAdapter().getSourceState();
  const exportCount = exportGroups.reduce((total, group) => total + group.exports.length, 0);

  return (
    <main className="avs-page-shell">
      <section className="avs-hero-small">
        <div className="avs-section-kicker">Exports</div>
        <h1>Prompt export and package center</h1>
        <p>Global export overview across saved projects, now with downloadable package routes for each project.</p>
        <div className="avs-inline-proof">
          <span>Projects: {projects.length}</span>
          <span>Exports: {exportCount}</span>
          <span>Mode: {source.mode}</span>
        </div>
      </section>

      <section className="avs-stack">
        {exportGroups.map(({ project, exports }) => (
          <article className="avs-card" key={project.id}>
            <div className="avs-card-topline">{exports.length} exports</div>
            <h3>{project.title}</h3>
            <p>{project.description || "No description."}</p>
            <div className="avs-actions">
              <a className="avs-button-primary" href={`/projects/${project.id}`}>Open project</a>
              <a className="avs-button-secondary" href={`/projects/${project.id}/exports`}>View exports</a>
              <a className="avs-button-secondary" href={`/projects/${project.id}/package`}>Package preview</a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
