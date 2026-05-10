import { getProductDataAdapter, withDataFallback } from "@/lib/data";

export default async function DashboardPage() {
  const [templates, projects] = await Promise.all([
    withDataFallback(
      async (adapter) => adapter.listTemplates(),
      async (fallbackAdapter) => fallbackAdapter.listTemplates()
    ),
    withDataFallback(
      async (adapter) => adapter.listProjects(),
      async (fallbackAdapter) => fallbackAdapter.listProjects()
    )
  ]);

  const source = getProductDataAdapter().getSourceState();

  return (
    <main className="avs-page-shell">
      <section className="avs-hero-small">
        <div className="avs-section-kicker">Dashboard</div>
        <h1>Visual Studio workspace</h1>
        <p>
          Track templates, saved projects, and the current data source mode from one product workspace.
        </p>
        <div className="avs-actions">
          <a className="avs-button-primary" href="/gallery">
            New project from template
          </a>
          <a className="avs-button-secondary" href="/projects">
            View projects
          </a>
        </div>
      </section>

      <section className="avs-grid avs-grid-3">
        <article className="avs-card">
          <div className="avs-card-topline">Templates</div>
          <h2>{templates.length}</h2>
          <p>Published visual templates available for TAP editing.</p>
        </article>
        <article className="avs-card">
          <div className="avs-card-topline">Projects</div>
          <h2>{projects.length}</h2>
          <p>User-owned project records available in the workspace.</p>
        </article>
        <article className="avs-card">
          <div className="avs-card-topline">Data source</div>
          <h2>{source.mode}</h2>
          <p>{source.reason}</p>
        </article>
      </section>
    </main>
  );
}
