import { mvpStatus } from "@/lib/demo-content";

export function MvpStatusBadge() {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        border: "1px solid rgba(255,255,255,0.18)",
        background: "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
        borderRadius: "999px",
        padding: "8px 14px",
        color: "#f8fafc",
        boxShadow: "0 10px 30px rgba(0,0,0,0.22)",
      }}
      aria-label={`AndyAI Visual Studio ${mvpStatus.version} ${mvpStatus.label}`}
    >
      <span aria-hidden="true">🟢</span>
      <strong>{mvpStatus.version}</strong>
      <span>{mvpStatus.label}</span>
    </div>
  );
}
