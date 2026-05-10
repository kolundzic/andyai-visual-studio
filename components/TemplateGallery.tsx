"use client";

import Link from "next/link";
import { categories, templates } from "@/lib/templates";
import { useMemo, useState } from "react";

export function TemplateGallery() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return templates.filter((template) => {
      const matchesCategory = category === "All" || template.category === category;
      const haystack = [template.id, template.name, template.category, template.summary, template.useCase, ...template.tags].join(" ").toLowerCase();
      return matchesCategory && (!normalized || haystack.includes(normalized));
    });
  }, [query, category]);

  return (
    <div>
      <div className="search-row">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by template ID, keyword, category, or use case" />
        <select value={category} onChange={(event) => setCategory(event.target.value)}>
          <option>All</option>
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="gallery-grid">
        {filtered.map((template) => (
          <Link href={`/templates/${template.id}`} className="card" key={template.id}>
            <div className="template-preview">{template.id}</div>
            <div className="card-top">
              <h3>{template.name}</h3>
              <span className="badge">{template.level}</span>
            </div>
            <p>{template.summary}</p>
            <span className="status ok">{template.category}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
