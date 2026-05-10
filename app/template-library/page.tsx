import { templateCatalogV2 } from "../../lib/template-catalog-v2";

export default function TemplateLibraryPage() {
  return (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: "48px 20px" }}>
      <p style={{ fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>v1.4.0</p>
      <h1 style={{ fontSize: 44, marginBottom: 12 }}>Template catalog expansion</h1>
      <p style={{ maxWidth: 760, fontSize: 18, lineHeight: 1.7 }}>
        A beta-ready catalog structure for visual prompt templates, categories, audiences, and export formats.
      </p>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16, marginTop: 32 }}>
        {templateCatalogV2.map((item) => (
          <article key={item.id} style={{ border: "1px solid #ddd", borderRadius: 18, padding: 18 }}>
            <p style={{ fontSize: 13, opacity: 0.75 }}>{item.category} · {item.audience}</p>
            <h2 style={{ fontSize: 22 }}>{item.name}</h2>
            <p><strong>Difficulty:</strong> {item.difficulty}</p>
            <p><strong>Formats:</strong> {item.outputFormats.join(", ")}</p>
            <p><strong>Beta:</strong> {item.betaReady ? "ready" : "planned"}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
