import type { AvsTemplate } from "@/lib/data";

type TemplateGalleryProps = {
  templates: AvsTemplate[];
};

export function TemplateGallery({ templates }: TemplateGalleryProps) {
  return (
    <section className="avs-stack">
      <div className="avs-section-kicker">Template Gallery</div>
      <div className="avs-grid avs-grid-3">
        {templates.map((template) => (
          <article className="avs-card" key={template.id}>
            <div className="avs-card-topline">{template.category}</div>
            <h3>{template.title}</h3>
            <p>{template.description}</p>
            <div className="avs-tag-row">
              {template.tags.slice(0, 4).map((tag) => (
                <span className="avs-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="avs-actions">
              <a className="avs-button-secondary" href={`/templates/${template.id}`}>
                View detail
              </a>
              <a className="avs-button-primary" href={`/tap-editor?templateId=${template.id}`}>
                Open in TAP Editor
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
