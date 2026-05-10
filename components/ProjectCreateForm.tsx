"use client";

import { useMemo, useState } from "react";
import { createProjectFromTemplateAction } from "@/app/actions/project-actions";
import type { AvsTemplate } from "@/lib/data";

type ProjectCreateFormProps = {
  template: AvsTemplate;
};

export function ProjectCreateForm({ template }: ProjectCreateFormProps) {
  const [title, setTitle] = useState(`${template.title} Project`);
  const [description, setDescription] = useState(template.description);
  const [tapPrompt, setTapPrompt] = useState(template.tapPrompt);

  const promptStats = useMemo(() => {
    const words = tapPrompt.trim().split(/\s+/).filter(Boolean).length;
    return {
      words,
      characters: tapPrompt.length
    };
  }, [tapPrompt]);

  return (
    <form action={createProjectFromTemplateAction} className="avs-panel avs-stack">
      <input type="hidden" name="templateId" value={template.id} />

      <div className="avs-section-kicker">TAP Editor</div>
      <h1>Create project from template</h1>
      <p className="avs-muted">
        Open a reusable visual template, edit the TAP prompt, save it as a user project, and preview the result inside the workspace.
      </p>

      <div className="avs-grid avs-grid-2">
        <label className="avs-field">
          <span>Project title</span>
          <input name="title" value={title} onChange={(event) => setTitle(event.target.value)} />
        </label>

        <label className="avs-field">
          <span>Source template</span>
          <input value={template.title} readOnly />
        </label>
      </div>

      <label className="avs-field">
        <span>Project description</span>
        <textarea name="description" rows={3} value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>

      <label className="avs-field">
        <span>Editable TAP prompt</span>
        <textarea name="tapPrompt" rows={12} value={tapPrompt} onChange={(event) => setTapPrompt(event.target.value)} />
      </label>

      <div className="avs-inline-proof">
        <span>{promptStats.words} words</span>
        <span>{promptStats.characters} characters</span>
        <span>Save target: Projects workspace</span>
      </div>

      <div className="avs-actions">
        <button className="avs-button-primary" type="submit">
          Save project
        </button>
        <a className="avs-button-secondary" href={`/templates/${template.id}`}>
          Back to template
        </a>
      </div>
    </form>
  );
}
