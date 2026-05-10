import Link from "next/link";
import { getTemplateWithSource } from "@/lib/data";

type TemplateDetailPageProps = {
  params: {
    templateId: string;
  };
};

export default async function TemplateDetailPage({ params }: TemplateDetailPageProps) {
  const { template, status } = await getTemplateWithSource(params.templateId);

  if (!template) {
    return (
      <main className="avs-page">
        <section className="avs-hero compact">
          <p className="avs-kicker">Template not found</p>
          <h1>No matching template</h1>
          <p>The requested template does not exist in the current data source.</p>
          <Link className="avs-button" href="/gallery">Back to gallery</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="avs-page">
      <section className="avs-hero compact">
        <p className="avs-kicker">{template.template_id} · {template.category}</p>
        <h1>{template.title}</h1>
        <p>{template.summary}</p>
        <div className="avs-status-card">
          <strong>Data source:</strong> {status.source} · <strong>Fallback:</strong> {status.fallbackUsed ? "yes" : "no"}
        </div>
        <div className="avs-button-row">
          <Link className="avs-button" href={`/tap-editor?template=${template.template_id}`}>Open in TAP Editor</Link>
          <Link className="avs-button secondary" href="/gallery">Back to gallery</Link>
        </div>
      </section>

      <section className="avs-section">
        <h2>Base prompt</h2>
        <pre className="avs-code-block">{template.prompt}</pre>
      </section>

      <section className="avs-section">
        <h2>Workflow steps</h2>
        <div className="avs-card-grid small">
          {template.workflow_steps.map((step, index) => (
            <article className="avs-card" key={step}>
              <div className="avs-card-meta">Step {index + 1}</div>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
