import { VisualTemplateMarketplaceLockBadge } from "@/components/VisualTemplateMarketplaceLockBadge";

const lockedLayers = [
  "Template Marketplace Structure",
  "Categories + Tags + Search v2",
  "Premium Template Metadata",
  "Visual Canon Template Packs",
  "Prompt-to-Template Generator Spec",
  "Template Preview Renderer",
  "Template Rating/Favorite Model",
  "Admin Template Publishing Flow",
  "Marketplace QA + Governance"
];

export default function VisualTemplateMarketplaceLockPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <VisualTemplateMarketplaceLockBadge />
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8">
        <h1 className="text-4xl font-black text-slate-950">v4.0.0 Marketplace Lock</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          AndyAI Visual Studio now has a marketplace-ready product layer for reusable visual templates.
        </p>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {lockedLayers.map((layer) => (
            <div key={layer} className="rounded-2xl border border-slate-200 p-4 text-sm font-semibold text-slate-800">
              🟢 {layer}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
