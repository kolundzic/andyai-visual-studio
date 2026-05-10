"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { VisualTemplate } from "@/lib/data";

type TemplateGalleryProps = {
  templates?: VisualTemplate[];
};

export default function TemplateGallery({ templates = [] }: TemplateGalleryProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(templates.map((template) => template.category))).sort()];
  }, [templates]);

  const filteredTemplates = useMemo(() => {
    const normalizedQuery = query.toLowerCase().trim();

    return templates.filter((template) => {
      const matchesCategory = category === "All" || template.category === category;
      const searchable = [
        template.template_id,
        template.title,
        template.category,
        template.summary,
        ...template.tags,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [category, query, templates]);

  return (
    <section className="avs-section">
      <div className="avs-section-header">
        <div>
          <p className="avs-kicker">Template gallery</p>
          <h2>Browse reusable visual production systems</h2>
          <p>
            Search by template ID, category, keyword, or workflow intent. Each template can become an editable TAP prompt package.
          </p>
        </div>
      </div>

      <div className="avs-control-row">
        <input
          aria-label="Search templates"
          className="avs-input"
          placeholder="Search AVTS-001, architecture, evidence..."
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <select
          aria-label="Filter by category"
          className="avs-select"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="avs-card-grid">
        {filteredTemplates.map((template) => (
          <article className="avs-card" key={template.template_id}>
            <div className="avs-card-meta">
              <span>{template.template_id}</span>
              <span>{template.category}</span>
            </div>
            <h3>{template.title}</h3>
            <p>{template.summary}</p>
            <div className="avs-tag-row">
              {template.tags.slice(0, 4).map((tag) => (
                <span className="avs-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="avs-card-actions">
              <Link href={`/templates/${template.slug}`}>Open detail</Link>
              <Link href={`/tap-editor?template=${template.template_id}`}>Use in TAP Editor</Link>
            </div>
          </article>
        ))}
      </div>

      {filteredTemplates.length === 0 ? (
        <div className="avs-empty-state">No templates match this search yet.</div>
      ) : null}
    </section>
  );
}
