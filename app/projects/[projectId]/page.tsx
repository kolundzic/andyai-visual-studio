import { notFound } from "next/navigation";
import { getProductDataAdapter, withDataFallback } from "@/lib/data";

type ProjectDetailPageProps = {
  params: Promise<{ projectId: string }> | { projectId: string };
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const resolvedParams = await Promise.resolve(params);
  const project = await withDataFallback(
    async (adapter) => adapter.getProjectById(resolvedParams.projectId),
    async (fallbackAdapter) => fallbackAdapter.getProjectById(resolvedParams.projectId)
  );

  if (!project) {
    notFound();
  }

  const source = getProductDataAdapter().getSourceState();

  return (
    <main className="avs-page-shell">
      <section className="avs-panel avs-stack">
        <div className="avs-section-kicker">Project Preview</div>
        <h1>{project.title}</h1>
        <p className="avs-muted">{project.description || "Saved visual project created from a reusable template."}</p>

        <div className="avs-inline-proof">
          <span>Status: {project.status}</span>
          <span>Source: {project.source}</span>
          <span>Updated: {new Date(project.updatedAt).toLocaleString()}</span>
        </div>

        <div className="avs-actions">
          <a className="avs-button-primary" href={`/tap-editor?templateId=${project.templateId ?? ""}`}>
            Create another from template
          </a>
          <a className="avs-button-secondary" href="/projects">
            Back to projects
          </a>
        </div>
      </section>

      <section className="avs-grid avs-grid-2">
        <article className="avs-card">
          <div className="avs-card-topline">Saved TAP prompt</div>
          <pre className="avs-code-block">{project.tapPrompt}</pre>
        </article>

        <article className="avs-card">
          <div className="avs-card-topline">Project data</div>
          <pre className="avs-code-block">
            {JSON.stringify(
              {
                id: project.id,
                templateId: project.templateId,
                status: project.status,
                inputSnapshot: project.inputSnapshot,
                outputSnapshot: project.outputSnapshot,
                dataMode: source.mode
              },
              null,
              2
            )}
          </pre>
        </article>
      </section>
    </main>
  );
}
