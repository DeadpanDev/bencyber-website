import { Timeline } from "./ui/timeline";

const about = () => {
  return (
    <section id="about">
      <h2 className="hidden md:block text-xl md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 text-center">
        About Me
      </h2>
      <Timeline
        data={[
          {
            title: "2018 - 2019 2022 - 2025",
            content: (
              <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
                <p className="text-center text-lg max-w-2xl">
                  I started my journey in 2018 as a IT student at college. I
                  learned about general IT topics. I also learned about hardware
                  and networking. I also learned about general programming and
                  web development. I also learned about cybersecurity and
                  ethical hacking.
                </p>
              </div>
            ),
          },
          {
            title: "2025 - Present",
            content: (
              <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
                <p className="text-center text-lg max-w-2xl">
                  I am currently working on projects to improve my skills.
                </p>
              </div>
            ),
          },
        ]}
      />
    </section>
  );
};

export default about;
