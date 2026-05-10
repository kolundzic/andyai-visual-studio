export default function MobilePreviewPage() {
  const checks = ["Readable hero copy", "Single-column fallback", "Tap-friendly cards", "Short route labels", "No hidden product path"];
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 18px" }}>
      <p style={{ fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>v1.7.0</p>
      <h1 style={{ fontSize: "clamp(32px, 8vw, 48px)", lineHeight: 1.05 }}>Mobile responsive polish</h1>
      <p style={{ fontSize: 18, lineHeight: 1.7 }}>
        The public beta should explain itself clearly on a phone before expecting users to explore deeper flows.
      </p>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 14, marginTop: 28 }}>
        {checks.map((check) => (
          <article key={check} style={{ border: "1px solid #ddd", borderRadius: 18, padding: 18 }}>
            <strong>🟢 {check}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}
