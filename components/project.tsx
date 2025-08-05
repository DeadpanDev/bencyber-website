import { FaArrowDown } from "react-icons/fa";
import { BackgroundGradient } from "./ui/background-gradient";
import { ProjectCards } from "./ui/project-cards";

const Project = () => {
  return (
    <section
      className="w-full py-40 px-4 flex flex-col items-center justify-center"
      id="projects"
    >
      <div className="w-full flex flex-col items-center justify-center max-w-4xl">
        <BackgroundGradient
          containerClassName="h-full rounded-3xl"
          className="bg-slate-950 p-4 rounded-3xl"
        >
          <div className="flex flex-col items-center justify-center p-4 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white">
              Projects <br />
              <div className="flex items-center justify-center mt-4 mb-4">
                <FaArrowDown className="text-4xl text-white animate-bounce text-center" />
              </div>
            </h2>
            <ProjectCards />
          </div>
        </BackgroundGradient>
      </div>
    </section>
  );
};

export default Project;
