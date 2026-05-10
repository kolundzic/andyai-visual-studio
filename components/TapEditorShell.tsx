"use client";

import { useMemo, useState } from "react";
import type { VisualTemplate } from "@/lib/data";

type TapEditorShellProps = {
  templates?: VisualTemplate[];
};

export default function TapEditorShell({ templates = [] }: TapEditorShellProps) {
  const [selectedTemplateId, setSelectedTemplateId] = useState(templates[0]?.template_id ?? "");
  const [userIntent, setUserIntent] = useState("Create a premium AndyAI visual artifact for a technical SaaS workflow.");

  const selectedTemplate = useMemo(() => {
    return templates.find((template) => template.template_id === selectedTemplateId) ?? templates[0] ?? null;
  }, [selectedTemplateId, templates]);

  const generatedPrompt = useMemo(() => {
    if (!selectedTemplate) {
      return "Choose a template to generate an editable prompt package.";
    }

    return [
      `TEMPLATE: ${selectedTemplate.template_id} — ${selectedTemplate.title}`,
      `CATEGORY: ${selectedTemplate.category}`,
      "",
      "USER INTENT:",
      userIntent,
      "",
      "BASE PROMPT:",
      selectedTemplate.prompt,
      "",
      "WORKFLOW STEPS:",
      ...selectedTemplate.workflow_steps.map((step, index) => `${index + 1}. ${step}`),
      "",
      "OUTPUT RULES:",
      "- Use a clean professional AndyAI visual style.",
      "- Keep labels readable and evidence-friendly.",
      "- Return a prompt that can be copied into an image/video/diagram generation workflow.",
    ].join("\n");
  }, [selectedTemplate, userIntent]);

  return (
    <section className="avs-section avs-editor-shell">
      <div>
        <p className="avs-kicker">TAP Editor</p>
        <h1>Turn a visual template into an editable prompt package</h1>
        <p>
          v0.5.0 wires the editor to the data adapter. It can read from live Supabase templates or safely fall back to local mock data.
        </p>
      </div>

      <div className="avs-editor-grid">
        <div className="avs-panel">
          <label className="avs-label" htmlFor="template-select">Template</label>
          <select
            className="avs-select"
            id="template-select"
            value={selectedTemplateId}
            onChange={(event) => setSelectedTemplateId(event.target.value)}
          >
            {templates.map((template) => (
              <option key={template.template_id} value={template.template_id}>
                {template.template_id} — {template.title}
              </option>
            ))}
          </select>

          <label className="avs-label" htmlFor="intent">Intent</label>
          <textarea
            className="avs-textarea"
            id="intent"
            value={userIntent}
            onChange={(event) => setUserIntent(event.target.value)}
          />
        </div>

        <div className="avs-panel">
          <div className="avs-panel-header">
            <p className="avs-kicker">Prompt export preview</p>
            <strong>{selectedTemplate?.template_id ?? "No template"}</strong>
          </div>
          <pre className="avs-code-block">{generatedPrompt}</pre>
        </div>
      </div>
    </section>
  );
}
