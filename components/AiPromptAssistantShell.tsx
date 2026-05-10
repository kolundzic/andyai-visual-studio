import { aiPromptAssistantChecklist, aiPromptAssistantModes } from "../lib/ai-prompt-assistant";

export default function AiPromptAssistantShell() {
  return (
    <section className="studio-panel">
      <p className="eyebrow">v4.1.0 · AI Prompt Assistant Shell</p>
      <h1>Prompt assistant for guided visual production</h1>
      <p className="muted">
        A structured assistant shell that helps users move from rough idea to reusable visual prompt.
      </p>
      <div className="grid three">
        {aiPromptAssistantModes.map((mode) => (
          <article className="card" key={mode.id}>
            <h3>{mode.title}</h3>
            <p>{mode.description}</p>
          </article>
        ))}
      </div>
      <div className="card">
        <h2>Prompt quality checklist</h2>
        <ul>
          {aiPromptAssistantChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
