import { premiumTemplateMetadata } from "@/lib/premium-template-metadata";

export default function PremiumTemplatesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">v3.3.0 Premium Metadata</p>
        <h1 className="mt-3 text-4xl font-black text-slate-950">Premium Template Metadata</h1>
        <p className="mt-4 text-slate-600">
          Premium marketplace entries require clear tier, commercial-use, export, and proof metadata.
        </p>
        <div className="mt-8 grid gap-4">
          {premiumTemplateMetadata.map((item) => (
            <article key={item.templateId} className="rounded-2xl border border-slate-200 p-5">
              <h2 className="text-xl font-bold">{item.templateId}</h2>
              <p className="mt-2 text-sm text-slate-600">
                Tier: {item.tier} · Proof: {item.proofLevel} · Commercial: {item.commercialUse ? "yes" : "no"}
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Source prompt: {item.includesSourcePrompt ? "included" : "not included"} · Export package: {item.includesExportPackage ? "included" : "not included"}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
