import Hero from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-nav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center h-[500vh] w-full bg-slate-950">
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
    </main>
  );
}
