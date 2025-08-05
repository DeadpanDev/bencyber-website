import { BackgroundGradient } from "./ui/background-gradient";

const Contact = () => {
  return (
    <section
      className="w-full py-20 px-4 flex flex-col items-center justify-center"
      id="contact"
    >
      <div className="w-full flex flex-col items-center justify-center max-w-4xl">
        <BackgroundGradient
          containerClassName="h-full rounded-3xl"
          className="bg-slate-950 p-4 rounded-3xl"
        >
          <h2 className="text-2xl font-bold text-foreground text-center w-full">
            Contact Email Coming Soon ...
          </h2>
        </BackgroundGradient>
      </div>
    </section>
  );
};

export default Contact;
