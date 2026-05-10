import { TemplateGallery } from "@/components/TemplateGallery";
import { getProductDataAdapter, withDataFallback } from "@/lib/data";

export default async function GalleryPage() {
  const templates = await withDataFallback(
    async (adapter) => adapter.listTemplates(),
    async (fallbackAdapter) => fallbackAdapter.listTemplates()
  );

  const source = getProductDataAdapter().getSourceState();

  return (
    <main className="avs-page-shell">
      <section className="avs-hero-small">
        <div className="avs-section-kicker">Gallery</div>
        <h1>Reusable AI visual templates</h1>
        <p>
          Browse the template catalog, open a template in the TAP Editor, edit the prompt, and save it as a user-owned project.
        </p>
        <div className="avs-inline-proof">
          <span>Data mode: {source.mode}</span>
          <span>{source.reason}</span>
        </div>
      </section>

      <TemplateGallery templates={templates} />
    </main>
  );
}
