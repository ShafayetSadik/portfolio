import { SectionRenderer } from "@/components/SectionRenderer";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="relative z-10">
        <SectionRenderer />
      </main>
      <Footer />
    </div>
  );
}
