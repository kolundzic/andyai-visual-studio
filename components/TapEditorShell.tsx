"use client";

import { templates } from "@/lib/templates";
import { useMemo, useState } from "react";

export function TapEditorShell() {
  const [templateId, setTemplateId] = useState(templates[0]?.id ?? "AVS-001");
  const [goal, setGoal] = useState("Create a premium product hero visual for AndyAI Visual Studio.");
  const selected = useMemo(() => templates.find((template) => template.id === templateId) ?? templates[0], [templateId]);
  const output = `TEMPLATE: ${selected.id} — ${selected.name}\nCATEGORY: ${selected.category}\nGOAL: ${goal}\n\nPROMPT SEED:\n${selected.promptSeed}\n\nTAP STRUCTURE:\n1. Define audience and purpose.\n2. Preserve AndyAI academic sci-fi style.\n3. Add labels, visual hierarchy, and proof-friendly layout.\n4. Export as reusable prompt/workflow.\n5. Verify that output matches the selected template intent.`;

  return (
    <div className="editor-layout">
      <div className="editor-panel">
        <span className="kicker">🤜💥 TAP Editor Skeleton</span>
        <h2>Turn a template into an editable production prompt.</h2>
        <p>Select a visual template, describe the goal, and generate a structured prompt/workflow draft ready for future save, export, and generation actions.</p>
        <label className="small">Template</label>
        <select value={templateId} onChange={(event) => setTemplateId(event.target.value)}>
          {templates.map((template) => (
            <option key={template.id} value={template.id}>{template.id} — {template.name}</option>
          ))}
        </select>
        <br />
        <br />
        <label className="small">User goal</label>
        <textarea value={goal} onChange={(event) => setGoal(event.target.value)} />
      </div>
      <div className="editor-panel">
        <span className="kicker">🟢 Prompt Export Preview</span>
        <h2>Structured output</h2>
        <p>This is the first editable shell. Later versions wire this to Supabase, accounts, exports, and generation providers.</p>
        <div className="output-box">{output}</div>
      </div>
    </div>
  );
}
