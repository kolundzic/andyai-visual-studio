import { MvpStatusBadge } from "@/components/MvpStatusBadge";
import { ProductFlowShowcase } from "@/components/ProductFlowShowcase";
import { mvpStatus } from "@/lib/demo-content";

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", color: "#0f172a" }}>
      <section
        style={{
          background:
            "radial-gradient(circle at 10% 10%, rgba(245,158,11,0.25), transparent 30%), radial-gradient(circle at 90% 20%, rgba(220,38,38,0.2), transparent 34%), linear-gradient(135deg, #020617, #111827 52%, #1f2937)",
          color: "#f8fafc",
          padding: "86px 24px 72px",
        }}
      >
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <MvpStatusBadge />
          <h1
            style={{
              fontSize: "clamp(44px, 8vw, 92px)",
              lineHeight: 0.96,
              letterSpacing: "-0.06em",
              margin: "28px 0 22px",
              maxWidth: "920px",
            }}
          >
            AndyAI Visual Studio is now an MVP product shell.
          </h1>
          <p style={{ fontSize: "clamp(18px, 2.3vw, 24px)", lineHeight: 1.55, color: "#cbd5e1", maxWidth: "780px" }}>
            {mvpStatus.oneLiner}
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "32px" }}>
            <a
              href="/demo"
              style={{
                background: "#f59e0b",
                color: "#111827",
                padding: "14px 20px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 800,
              }}
            >
              Open public demo
            </a>
            <a
              href="/gallery"
              style={{
                background: "rgba(255,255,255,0.1)",
                color: "#f8fafc",
                padding: "14px 20px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 800,
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              Browse templates
            </a>
            <a
              href="/status"
              style={{
                color: "#f8fafc",
                padding: "14px 20px",
                textDecoration: "none",
                fontWeight: 800,
              }}
            >
              View MVP status →
            </a>
          </div>
        </div>
      </section>
      <ProductFlowShowcase />
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 24px 86px" }}>
        <div
          style={{
            borderRadius: "28px",
            padding: "30px",
            background: "#111827",
            color: "#f8fafc",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          <div>
            <strong style={{ color: "#f59e0b" }}>Public Demo Readiness</strong>
            <h2 style={{ fontSize: "34px", margin: "10px 0" }}>Locked for first serious review.</h2>
          </div>
          <p style={{ color: "#cbd5e1", lineHeight: 1.7, margin: 0 }}>
            v1.0.0 adds the launch-facing layer: polished home, demo route, route QA, Vercel deployment checklist,
            MVP status badge, and release documentation. The product can now be shown as a coherent early SaaS story.
          </p>
        </div>
      </section>
    </main>
  );
}
