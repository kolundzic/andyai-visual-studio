import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { getTemplateById, templates } from "@/lib/templates";

export function generateStaticParams() {
  return templates.map((template) => ({ templateId: template.id }));
}

export default async function TemplateDetailPage({ params }: { params: Promise<{ templateId: string }> }) {
  const { templateId } = await params;
  const template = getTemplateById(templateId);

  if (!template) {
    return (
      <main>
        <Nav />
        <section className="section shell">
          <span className="kicker">Template not found</span>
          <h1>Unknown template ID.</h1>
          <p>Return to the gallery and choose one of the available seed templates.</p>
          <Link className="primary" href="/gallery">Back to Gallery</Link>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Nav />
      <section className="section shell">
        <span className="kicker">{template.id} · {template.category}</span>
        <div className="hero">
          <div className="hero-card">
            <h1>{template.name}</h1>
            <p className="hero-text">{template.summary}</p>
            <div className="cta-row">
              <Link className="primary" href={`/tap-editor?template=${template.id}`}>Open in TAP Editor</Link>
              <Link className="secondary" href="/gallery">Back to Gallery</Link>
            </div>
          </div>
          <div className="panel">
            <div className="template-preview">{template.id}</div>
            <span className="status ok">{template.level}</span>
            <h3>Use case</h3>
            <p>{template.useCase}</p>
          </div>
        </div>
        <div className="card">
          <span className="kicker">Prompt seed</span>
          <p>{template.promptSeed}</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
