import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import CurriculoSection from "@/components/CurriculoSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <CurriculoSection />

      <section
        id="sobre"
        className="min-h-[40vh] flex items-center justify-center px-6 py-20 border-t border-zinc-100"
      >
        <p className="text-zinc-300 text-sm tracking-widest uppercase font-medium">
          Sobre — em breve
        </p>
      </section>

      <section
        id="contato"
        className="min-h-[40vh] flex items-center justify-center px-6 py-20 border-t border-zinc-100"
      >
        <p className="text-zinc-300 text-sm tracking-widest uppercase font-medium">
          Contato — em breve
        </p>
      </section>
    </>
  );
}
