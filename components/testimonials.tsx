import { AnimatedTestimonials } from "./ui/animated-testimonials";

const Testimonials = () => {
  return (
    <section id="testimonials" className="mt-10">
      <h2 className="hidden md:block text-xl md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 text-center">
        Testimonials
      </h2>
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "Coming Soon",
            name: "Jack",
            designation: "Mivator CEO",
            src: "https://cdn.discordapp.com/avatars/1068868597398650971/8a357794253da9e32704b4711a0b366b.webp?size=240",
          },
        ]}
      />
    </section>
  );
};

export default Testimonials;
