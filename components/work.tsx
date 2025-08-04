import { ExpandableCard } from "./ui/expandable-card";

const Work = () => {
  return (
    <section id="work" className="mt-10">
      <h2 className="hidden md:block text-xl md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 text-center mb-10">
        Work Experience
      </h2>
      <ExpandableCard />
    </section>
  );
};

export default Work;
