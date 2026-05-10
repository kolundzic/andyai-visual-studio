import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { TemplateGallery } from "@/components/TemplateGallery";

export default function GalleryPage() {
  return (
    <main>
      <Nav />
      <section className="section shell">
        <span className="kicker">Gallery Shell</span>
        <h1>Browse templates by ID, keyword, category, and use case.</h1>
        <p className="hero-text">This is the first commercial gallery layer for AndyAI Visual Studio. It starts with seed templates and is ready for Supabase-backed catalog expansion.</p>
        <TemplateGallery />
      </section>
      <Footer />
    </main>
  );
}
