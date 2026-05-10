export default function LaunchCandidatePage() {
  const gates = [
    ["Product story", "Home, demo, public-demo, partners"],
    ["Core workflow", "Gallery, template, TAP editor, projects, exports"],
    ["Artifact output", "Copy prompt, save export, package download"],
    ["Deploy proof", "Vercel config, production smoke, status route"],
    ["Beta readiness", "Template library, navigation map, mobile preview, showcase"],
  ];
  return (
    <main style={{ maxWidth: 1040, margin: "0 auto", padding: "48px 20px" }}>
      <p style={{ fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>v1.9.0</p>
      <h1 style={{ fontSize: 44, marginBottom: 12 }}>MVP launch candidate</h1>
      <p style={{ maxWidth: 760, fontSize: 18, lineHeight: 1.7 }}>
        This page summarizes the gates required before declaring public SaaS beta lock.
      </p>
      <section style={{ display: "grid", gap: 14, marginTop: 28 }}>
        {gates.map(([gate, proof]) => (
          <article key={gate} style={{ border: "1px solid #ddd", borderRadius: 18, padding: 18 }}>
            <h2>🟢 {gate}</h2>
            <p>{proof}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
