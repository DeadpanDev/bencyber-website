import { FaReact } from "react-icons/fa";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  FaComputer,
  FaDatabase,
  FaDocker,
  FaNodeJs,
  FaServer,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiNginx,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";

const About = () => {
  return (
    <section className="w-full py-20 px-4" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology and constantly learning new skills
          </p>
        </div>

        <BentoGrid className="w-full max-w-6xl mx-auto">
          <BentoGridItem
            header={
              <div className="text-center p-4">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Tech Stack
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              </div>
            }
            description={
              <div className="text-base leading-relaxed text-muted-foreground">
                Full-stack web developer with expertise in modern technologies.
                I constantly strive to improve my skills and stay up-to-date
                with the latest industry trends.
              </div>
            }
            className="col-span-1 md:col-span-2 row-span-2"
            icon={
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:scale-105 transition-all duration-300">
                  <FaReact className="text-4xl text-blue-500" />
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                    React
                  </span>
                </div>
                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 hover:scale-105 transition-all duration-300">
                  <FaNodeJs className="text-4xl text-green-500" />
                  <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                    Node.js
                  </span>
                </div>
                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20 hover:scale-105 transition-all duration-300">
                  <SiNextdotjs className="text-4xl text-black dark:text-white" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Next.js
                  </span>
                </div>
                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 hover:scale-105 transition-all duration-300">
                  <SiTailwindcss className="text-4xl text-cyan-500" />
                  <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                    Tailwind
                  </span>
                </div>
                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:scale-105 transition-all duration-300">
                  <SiTypescript className="text-4xl text-blue-600" />
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                    TypeScript
                  </span>
                </div>
                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 hover:scale-105 transition-all duration-300">
                  <FaDatabase className="text-4xl text-orange-500" />
                  <span className="text-sm font-semibold text-orange-700 dark:text-orange-300">
                    MySQL
                  </span>
                </div>
                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 hover:scale-105 transition-all duration-300">
                  <SiNginx className="text-4xl text-green-500" />
                  <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                    Nginx
                  </span>
                </div>
                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:scale-105 transition-all duration-300">
                  <FaDocker className="text-4xl text-blue-500" />
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                    Docker
                  </span>
                </div>
                <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20 hover:scale-105 transition-all duration-300">
                  <SiPrisma className="text-4xl text-gray-800 dark:text-gray-200" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Prisma
                  </span>
                </div>
              </div>
            }
          />

          <BentoGridItem
            header={
              <div className="text-center p-4">
                <h2 className="text-xl font-bold text-foreground mb-2">
                  PC Builder
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
              </div>
            }
            description={
              <div className="text-base leading-relaxed text-muted-foreground">
                Custom PC building specialist with expertise in high-performance
                systems, gaming rigs, and workstation builds for friends,
                family, and clients.
              </div>
            }
            className="col-span-1 row-span-1"
            icon={
              <div className="flex justify-center p-4">
                <FaComputer className="text-4xl text-green-500 hover:scale-110 transition-transform" />
              </div>
            }
          />

          <BentoGridItem
            header={
              <div className="text-center p-4">
                <h2 className="text-xl font-bold text-foreground mb-2">
                  System Admin
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
              </div>
            }
            description={
              <div className="text-base leading-relaxed text-muted-foreground">
                Experienced in server management, network infrastructure, and
                security administration with a focus on maintaining robust and
                secure systems.
              </div>
            }
            className="col-span-1 row-span-1"
            icon={
              <div className="flex justify-center p-4">
                <FaServer className="text-4xl text-purple-500 hover:scale-110 transition-transform" />
              </div>
            }
          />
        </BentoGrid>
      </div>
    </section>
  );
};

export default About;
