import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

const cards = [
  { label: "Saved projects", value: "0", detail: "Supabase project storage arrives next." },
  { label: "Exports", value: "0", detail: "Prompt export history arrives after editor wiring." },
  { label: "Templates used", value: "4", detail: "Seed gallery ready for expansion." },
  { label: "Plan", value: "Free", detail: "Stripe integration planned later." }
];

export default function DashboardPage() {
  return (
    <main>
      <Nav />
      <section className="section shell">
        <span className="kicker">Dashboard Shell</span>
        <h1>Workspace preview for future logged-in users.</h1>
        <p className="hero-text">This is the first dashboard skeleton: project status, export history, template usage, and plan state. It is ready for future auth and Supabase integration.</p>
        <div className="dashboard-grid">
          {cards.map((card) => (
            <div className="metric" key={card.label}>
              <strong>{card.value}</strong>
              <span>{card.label}</span>
              <p>{card.detail}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
