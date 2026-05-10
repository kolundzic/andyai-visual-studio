import { mvpMilestones, mvpStatus } from "@/lib/demo-content";

export default function StatusPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#0f172a", color: "#f8fafc", padding: "56px 24px" }}>
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>
        <p style={{ color: "#f59e0b", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          MVP Status
        </p>
        <h1 style={{ fontSize: "clamp(40px, 7vw, 76px)", lineHeight: 0.98, letterSpacing: "-0.05em", margin: "10px 0 18px" }}>
          {mvpStatus.product} / {mvpStatus.version}
        </h1>
        <p style={{ color: "#cbd5e1", fontSize: "20px", lineHeight: 1.7 }}>{mvpStatus.oneLiner}</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "14px",
            marginTop: "34px",
          }}
        >
          {mvpMilestones.map((milestone) => (
            <div
              key={milestone.version}
              style={{
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.06)",
                borderRadius: "22px",
                padding: "20px",
              }}
            >
              <div style={{ color: "#f59e0b", fontWeight: 900 }}>{milestone.version}</div>
              <h2 style={{ fontSize: "22px", margin: "10px 0" }}>{milestone.title}</h2>
              <p style={{ color: "#cbd5e1", lineHeight: 1.6 }}>{milestone.proof}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: "32px", color: "#94a3b8" }}>
          Status: 🟢 MVP product lock. Public demo ready. Vercel deploy checklist prepared.
        </p>
      </div>
    </main>
  );
}
