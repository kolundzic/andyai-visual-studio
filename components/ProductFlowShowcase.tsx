import { demoRoutes, mvpProductFlow } from "@/lib/demo-content";

export function ProductFlowShowcase() {
  return (
    <section style={{ marginTop: "56px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <p style={{ color: "#f59e0b", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          MVP Product Flow
        </p>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.02, margin: "10px 0 18px" }}>
          From visual idea to reusable artifact package.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "14px",
            marginTop: "24px",
          }}
        >
          {mvpProductFlow.map((step, index) => (
            <div
              key={step}
              style={{
                border: "1px solid rgba(15,23,42,0.1)",
                borderRadius: "22px",
                padding: "20px",
                background: "#ffffff",
                boxShadow: "0 18px 50px rgba(15,23,42,0.08)",
              }}
            >
              <div style={{ color: "#dc2626", fontWeight: 800, marginBottom: "10px" }}>
                {String(index + 1).padStart(2, "0")}
              </div>
              <div style={{ color: "#0f172a", fontSize: "18px", fontWeight: 750 }}>{step}</div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "14px",
            marginTop: "34px",
          }}
        >
          {demoRoutes.map((route) => (
            <a
              key={route.path}
              href={route.path}
              style={{
                textDecoration: "none",
                color: "#0f172a",
                border: "1px solid rgba(15,23,42,0.1)",
                borderRadius: "20px",
                padding: "18px",
                background: "#f8fafc",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
                <strong>{route.label}</strong>
                <span style={{ color: route.readiness === "locked" ? "#16a34a" : "#ca8a04", fontSize: "13px" }}>
                  {route.readiness}
                </span>
              </div>
              <p style={{ color: "#475569", marginBottom: 0 }}>{route.purpose}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
