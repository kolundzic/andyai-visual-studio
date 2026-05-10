import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { TapEditorShell } from "@/components/TapEditorShell";

export default function TapEditorPage() {
  return (
    <main>
      <Nav />
      <section className="section shell">
        <TapEditorShell />
      </section>
      <Footer />
    </main>
  );
}
