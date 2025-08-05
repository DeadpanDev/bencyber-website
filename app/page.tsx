import Hero from "@/components/hero";
import Project from "@/components/project";
import Testimonials from "@/components/testistimonials";
import Contact from "@/components/contact";
import About from "@/components/about";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center w-full bg-slate-950">
        <Hero />
        <About />
        <Project />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}
