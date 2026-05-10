import { listTemplatesWithSource } from "@/lib/data";

export default async function DataPreviewPage() {
  const { templates, status } = await listTemplatesWithSource();

  return (
    <main className="avs-page">
      <section className="avs-hero compact">
        <p className="avs-kicker">v0.5.0 Data Preview</p>
        <h1>Live Supabase Client Wiring</h1>
        <p>
          This page verifies that the product data layer can switch between local mock data and live Supabase reads.
        </p>
        <div className="avs-status-card">
          <strong>Requested mode:</strong> {status.requestedMode}<br />
          <strong>Active source:</strong> {status.source}<br />
          <strong>Supabase configured:</strong> {status.supabaseConfigured ? "yes" : "no"}<br />
          <strong>Fallback used:</strong> {status.fallbackUsed ? "yes" : "no"}
          <p>{status.message}</p>
        </div>
      </section>

      <section className="avs-section">
        <h2>Templates returned by adapter</h2>
        <div className="avs-card-grid">
          {templates.map((template) => (
            <article className="avs-card" key={template.template_id}>
              <div className="avs-card-meta">
                <span>{template.template_id}</span>
                <span>{template.tier}</span>
              </div>
              <h3>{template.title}</h3>
              <p>{template.summary}</p>
              <pre className="avs-code-block compact">{JSON.stringify(template, null, 2)}</pre>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
