import { demoRoutes, mvpProductFlow } from "@/lib/demo-content";

export default function DemoPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", color: "#0f172a", padding: "56px 24px" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <p style={{ color: "#dc2626", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          AndyAI Visual Studio / Public Demo
        </p>
        <h1 style={{ fontSize: "clamp(40px, 7vw, 78px)", lineHeight: 0.98, letterSpacing: "-0.05em", margin: "10px 0 18px" }}>
          One route map for the full MVP walkthrough.
        </h1>
        <p style={{ fontSize: "20px", lineHeight: 1.7, color: "#475569", maxWidth: "760px" }}>
          This page is the public demo guide: it explains what a reviewer should click, what each route proves,
          and how the visual template workflow turns into a downloadable artifact package.
        </p>

        <section style={{ marginTop: "38px" }}>
          <h2>MVP walkthrough</h2>
          <ol style={{ display: "grid", gap: "12px", paddingLeft: "22px", fontSize: "18px", lineHeight: 1.6 }}>
            {mvpProductFlow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section style={{ marginTop: "38px" }}>
          <h2>Demo routes</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
            {demoRoutes.map((route) => (
              <a
                key={route.path}
                href={route.path}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "#0f172a",
                  background: "#ffffff",
                  border: "1px solid rgba(15,23,42,0.1)",
                  borderRadius: "22px",
                  padding: "20px",
                  boxShadow: "0 18px 50px rgba(15,23,42,0.08)",
                }}
              >
                <div style={{ color: "#64748b", fontSize: "14px", marginBottom: "8px" }}>{route.path}</div>
                <strong style={{ fontSize: "20px" }}>{route.label}</strong>
                <p style={{ color: "#475569", lineHeight: 1.55 }}>{route.purpose}</p>
                <span style={{ color: route.readiness === "locked" ? "#16a34a" : "#ca8a04", fontWeight: 800 }}>
                  {route.readiness}
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
