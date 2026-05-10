import { notFound } from "next/navigation";
import { getProductDataAdapter, withDataFallback } from "@/lib/data";

type TemplateDetailPageProps = {
  params: Promise<{ templateId: string }> | { templateId: string };
};

export default async function TemplateDetailPage({ params }: TemplateDetailPageProps) {
  const resolvedParams = await Promise.resolve(params);
  const template = await withDataFallback(
    async (adapter) => adapter.getTemplateById(resolvedParams.templateId),
    async (fallbackAdapter) => fallbackAdapter.getTemplateById(resolvedParams.templateId)
  );

  if (!template) {
    notFound();
  }

  const source = getProductDataAdapter().getSourceState();

  return (
    <main className="avs-page-shell">
      <section className="avs-panel avs-stack">
        <div className="avs-section-kicker">{template.category}</div>
        <h1>{template.title}</h1>
        <p className="avs-muted">{template.description}</p>

        <div className="avs-tag-row">
          {template.tags.map((tag) => (
            <span className="avs-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="avs-actions">
          <a className="avs-button-primary" href={`/tap-editor?templateId=${template.id}`}>
            Open in TAP Editor
          </a>
          <a className="avs-button-secondary" href="/gallery">
            Back to gallery
          </a>
        </div>
      </section>

      <section className="avs-grid avs-grid-2">
        <article className="avs-card">
          <div className="avs-card-topline">Default TAP prompt</div>
          <pre className="avs-code-block">{template.tapPrompt}</pre>
        </article>

        <article className="avs-card">
          <div className="avs-card-topline">Workflow</div>
          <ol className="avs-ordered-list">
            {template.workflow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <div className="avs-inline-proof">
            <span>Data mode: {source.mode}</span>
            <span>{source.reason}</span>
          </div>
        </article>
      </section>
    </main>
  );
}
