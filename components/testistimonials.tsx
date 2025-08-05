import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { BackgroundGradient } from "./ui/background-gradient";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Ben has been an asset not just for me but for the entire team. His dedication, extensive technical knowledge, and unmatched performance have consistently enhanced production and boosted productivity. He's also solves problems way before they become issues, with Ben around its like playing development simulator on easy mode 😂. I genuinely couldn't imagine a better person to have on the team and by our side.",
      name: "Jack",
      designation: "CEO at Mivator",
      src: "/jack.jpg",
    },
  ];
  return (
    <section
      className="w-full py-20 px-4 flex flex-col items-center justify-center"
      id="testimonials"
    >
      <div className="w-full flex flex-col items-center justify-center max-w-4xl">
        <BackgroundGradient
          containerClassName="h-full rounded-3xl"
          className="bg-slate-950 p-4 rounded-3xl"
        >
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </BackgroundGradient>
      </div>
    </section>
  );
};

export default Testimonials;
