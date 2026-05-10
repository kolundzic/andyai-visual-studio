const routes = [
  ["Home", "/", "Public product explanation"],
  ["Gallery", "/gallery", "Template discovery"],
  ["Demo", "/demo", "MVP walkthrough"],
  ["Public Demo", "/public-demo", "Use-case scenarios"],
  ["Projects", "/projects", "Workspace"],
  ["Exports", "/exports", "Export history"],
  ["Status", "/status", "MVP status"],
  ["Production Smoke", "/production-smoke", "Deploy proof"],
];

export function NavigationHardeningMap() {
  return (
    <section style={{ display: "grid", gap: 12 }}>
      {routes.map(([label, href, purpose]) => (
        <a key={href} href={href} style={{ display: "flex", justifyContent: "space-between", gap: 16, border: "1px solid #ddd", borderRadius: 16, padding: 16, textDecoration: "none", color: "inherit" }}>
          <strong>{label}</strong>
          <span>{href}</span>
          <span style={{ opacity: 0.75 }}>{purpose}</span>
        </a>
      ))}
    </section>
  );
}
