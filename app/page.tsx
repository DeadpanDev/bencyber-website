import Hero from "@/components/hero";
import About from "@/components/about";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Projects from "@/components/projects";
import Work from "@/components/work";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="bg-black-100 relative flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Projects />
        <Work />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
