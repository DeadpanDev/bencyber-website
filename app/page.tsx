import Hero from "@/components/hero";
import Project from "@/components/project";
import Testimonials from "@/components/testistimonials";
import Contact from "@/components/contact";
import { FloatingNav } from "@/components/ui/floating-nav";
import { navItems } from "@/data";
import About from "@/components/about";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center w-full bg-slate-950">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Project />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}
