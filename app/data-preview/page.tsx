import { getProductDataAdapter, withDataFallback } from "@/lib/data";

export default async function DataPreviewPage() {
  const adapter = getProductDataAdapter();
  const source = adapter.getSourceState();

  const [templates, projects] = await Promise.all([
    withDataFallback(
      async (activeAdapter) => activeAdapter.listTemplates(),
      async (fallbackAdapter) => fallbackAdapter.listTemplates()
    ),
    withDataFallback(
      async (activeAdapter) => activeAdapter.listProjects(),
      async (fallbackAdapter) => fallbackAdapter.listProjects()
    )
  ]);

  const exportGroups = await Promise.all(
    projects.map(async (project) => ({
      projectId: project.id,
      exports: await withDataFallback(
        async (activeAdapter) => activeAdapter.listProjectExports(project.id),
        async (fallbackAdapter) => fallbackAdapter.listProjectExports(project.id)
      )
    }))
  );

  return (
    <main className="avs-page-shell">
      <section className="avs-hero-small">
        <div className="avs-section-kicker">Data Preview</div>
        <h1>Live adapter, workspace data, and export history</h1>
        <p>Inspect whether AndyAI Visual Studio is reading from live Supabase or from the local fallback adapter.</p>
        <div className="avs-inline-proof">
          <span>Mode: {source.mode}</span>
          <span>Fallback: {source.fallback ? "yes" : "no"}</span>
          <span>{source.reason}</span>
        </div>
      </section>

      <section className="avs-grid avs-grid-3">
        <article className="avs-card">
          <div className="avs-card-topline">Templates</div>
          <pre className="avs-code-block">{JSON.stringify(templates, null, 2)}</pre>
        </article>
        <article className="avs-card">
          <div className="avs-card-topline">Projects</div>
          <pre className="avs-code-block">{JSON.stringify(projects, null, 2)}</pre>
        </article>
        <article className="avs-card">
          <div className="avs-card-topline">Exports</div>
          <pre className="avs-code-block">{JSON.stringify(exportGroups, null, 2)}</pre>
        </article>
      </section>
    </main>
  );
}
