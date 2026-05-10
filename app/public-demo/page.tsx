import { publicDemoScenarios } from "../../lib/public-demo-content";

export default function PublicDemoPage() {
  return (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: "48px 20px" }}>
      <p style={{ fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>AndyAI Visual Studio</p>
      <h1 style={{ fontSize: 44, lineHeight: 1.05, margin: "12px 0" }}>Public demo expansion</h1>
      <p style={{ maxWidth: 760, fontSize: 18, lineHeight: 1.7 }}>
        Three demo scenarios show how templates become editable TAP prompts, saved projects,
        export history, and downloadable artifacts.
      </p>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18, marginTop: 32 }}>
        {publicDemoScenarios.map((scenario) => (
          <article key={scenario.id} style={{ border: "1px solid #ddd", borderRadius: 20, padding: 22 }}>
            <p style={{ fontSize: 13, fontWeight: 700, opacity: 0.7 }}>{scenario.audience}</p>
            <h2 style={{ fontSize: 24, margin: "8px 0" }}>{scenario.title}</h2>
            <p>{scenario.userGoal}</p>
            <ol>
              {scenario.templateFlow.map((step) => <li key={step}>{step}</li>)}
            </ol>
            <p><strong>Export:</strong> {scenario.exportResult}</p>
            <p><strong>Proof:</strong> {scenario.proofPoint}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
