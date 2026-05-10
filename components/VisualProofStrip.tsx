export function VisualProofStrip() {
  const proof = ["MVP lock", "Deploy pack", "Demo routes", "Template catalog", "Export package", "Beta path"];
  return (
    <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
      {proof.map((item) => (
        <div key={item} style={{ border: "1px solid #ddd", borderRadius: 16, padding: 16, fontWeight: 700 }}>
          🟢 {item}
        </div>
      ))}
    </section>
  );
}
