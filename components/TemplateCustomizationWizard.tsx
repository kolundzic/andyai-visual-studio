import { customizationPrinciples, customizationSteps } from "../lib/template-customization-wizard";

export default function TemplateCustomizationWizard() {
  return (
    <section className="studio-panel">
      <p className="eyebrow">v4.2.0 · Template Customization Wizard</p>
      <h1>Guided template customization</h1>
      <p className="muted">A wizard model for turning marketplace templates into user-specific visual workflows.</p>
      <div className="grid two">
        {customizationSteps.map((step, index) => (
          <article className="card" key={step.id}>
            <p className="eyebrow">Step {index + 1}</p>
            <h3>{step.title}</h3>
            <p>Status: {step.status}</p>
          </article>
        ))}
      </div>
      <div className="card">
        <h2>Principles</h2>
        <ul>{customizationPrinciples.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </section>
  );
}
