import TemplateGallery from "@/components/TemplateGallery";
import { listTemplatesWithSource } from "@/lib/data";

export default async function GalleryPage() {
  const { templates, status } = await listTemplatesWithSource();

  return (
    <main className="avs-page">
      <section className="avs-hero compact">
        <p className="avs-kicker">Live data-ready gallery</p>
        <h1>Visual Template Gallery</h1>
        <p>
          Browse reusable AndyAI visual templates. The gallery now reads through the product data adapter and can switch from local mock data to live Supabase.
        </p>
        <div className="avs-status-card">
          <strong>Data source:</strong> {status.source} · <strong>Mode:</strong> {status.requestedMode} · <strong>Fallback:</strong> {status.fallbackUsed ? "yes" : "no"}
          <p>{status.message}</p>
        </div>
      </section>

      <TemplateGallery templates={templates} />
    </main>
  );
}
