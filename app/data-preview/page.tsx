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

  return (
    <main className="avs-page-shell">
      <section className="avs-hero-small">
        <div className="avs-section-kicker">Data Preview</div>
        <h1>Live adapter and workspace data preview</h1>
        <p>
          Inspect whether AndyAI Visual Studio is reading from live Supabase or from the local fallback adapter.
        </p>
        <div className="avs-inline-proof">
          <span>Mode: {source.mode}</span>
          <span>Fallback: {source.fallback ? "yes" : "no"}</span>
          <span>{source.reason}</span>
        </div>
      </section>

      <section className="avs-grid avs-grid-2">
        <article className="avs-card">
          <div className="avs-card-topline">Templates</div>
          <pre className="avs-code-block">{JSON.stringify(templates, null, 2)}</pre>
        </article>
        <article className="avs-card">
          <div className="avs-card-topline">Projects</div>
          <pre className="avs-code-block">{JSON.stringify(projects, null, 2)}</pre>
        </article>
      </section>
    </main>
  );
}
