import { BetaLockBadge } from "../../components/BetaLockBadge";

export default function BetaPage() {
  const pillars = [
    "Public story is visible",
    "Demo paths are present",
    "Template catalog is expanded",
    "Workspace flow exists",
    "Exports and downloads work as product concepts",
    "Deploy path is documented",
    "Smoke and QA routes are available",
    "Visual proof pack exists",
  ];
  return (
    <main style={{ maxWidth: 1080, margin: "0 auto", padding: "48px 20px" }}>
      <BetaLockBadge />
      <h1 style={{ fontSize: 48, lineHeight: 1.05, margin: "24px 0 12px" }}>AndyAI Visual Studio Public SaaS Beta</h1>
      <p style={{ maxWidth: 780, fontSize: 18, lineHeight: 1.7 }}>
        v2.0.0 locks the transition from MVP build to public beta foundation. The product now has a public story,
        demo path, workspace flow, export layer, deploy proof, and launch proof pages.
      </p>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 14, marginTop: 30 }}>
        {pillars.map((pillar) => (
          <article key={pillar} style={{ border: "1px solid #ddd", borderRadius: 18, padding: 18 }}>
            <strong>🟢 {pillar}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}
