import { VisualProofStrip } from "../../components/VisualProofStrip";

export default function ShowcasePage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 20px" }}>
      <p style={{ fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>v1.8.0</p>
      <h1 style={{ fontSize: 44, marginBottom: 12 }}>Public showcase proof pack</h1>
      <p style={{ maxWidth: 780, fontSize: 18, lineHeight: 1.7 }}>
        A visual proof route for public beta conversations, screenshots, launch posts, and partner demos.
      </p>
      <img src="/andyai-visual-proof-card.svg" alt="AndyAI Visual Studio proof card" style={{ width: "100%", borderRadius: 24, margin: "28px 0", border: "1px solid #ddd" }} />
      <VisualProofStrip />
    </main>
  );
}
