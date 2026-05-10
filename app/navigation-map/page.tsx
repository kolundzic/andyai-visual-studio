import { NavigationHardeningMap } from "../../components/NavigationHardeningMap";

export default function NavigationMapPage() {
  return (
    <main style={{ maxWidth: 1040, margin: "0 auto", padding: "48px 20px" }}>
      <p style={{ fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>v1.3.0</p>
      <h1 style={{ fontSize: 42, marginBottom: 12 }}>UX polish & navigation hardening</h1>
      <p style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 760 }}>
        This route is a human-readable navigation proof map for the public MVP and beta path.
      </p>
      <NavigationHardeningMap />
    </main>
  );
}
