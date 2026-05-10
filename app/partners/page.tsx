export default function PartnersPage() {
  const blocks = [
    ["For founders", "Turn product ideas into reusable visual production packages."],
    ["For agencies", "Create client-ready prompt artifacts and delivery bundles."],
    ["For educators", "Convert lessons and concepts into structured visual explanation prompts."],
    ["For builders", "Generate repo, README, product, and documentation visual packs."],
  ];
  return (
    <main style={{ maxWidth: 1040, margin: "0 auto", padding: "48px 20px" }}>
      <p style={{ fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>v1.5.0</p>
      <h1 style={{ fontSize: 44, marginBottom: 12 }}>Partner and pilot page</h1>
      <p style={{ maxWidth: 760, fontSize: 18, lineHeight: 1.7 }}>
        AndyAI Visual Studio is positioned for pilot users, agency workflows, and product teams that need repeatable visual prompt systems.
      </p>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginTop: 28 }}>
        {blocks.map(([title, text]) => (
          <article key={title} style={{ border: "1px solid #ddd", borderRadius: 18, padding: 18 }}>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
