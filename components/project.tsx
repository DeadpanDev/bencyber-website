import { FaComputer } from "react-icons/fa6";
import { BackgroundGradient } from "./ui/background-gradient";

const Project = () => {
  return (
    <section
      className="w-full py-20 px-4 flex flex-col items-center justify-center"
      id="projects"
    >
      <div className="w-full flex flex-col items-center justify-center max-w-4xl">
        <BackgroundGradient
          containerClassName="h-full rounded-3xl"
          className="bg-slate-950 p-4 rounded-3xl"
        >
          <div className="flex flex-col items-center justify-center p-4 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground text-center w-full">
              Projects <br />
              Coming Soon ...
            </h3>
            {/* <ProjectsItems
                id={1}
                name="PC Builder"
                description="A PC builder website"
                link="https://pc-builder.com"
                icon={<FaComputer className="text-4xl text-blue-500" />}
                /> */}
            {/* TODO: Add projects items here when data is ready */}
          </div>
        </BackgroundGradient>
      </div>
    </section>
  );
};

export default Project;
