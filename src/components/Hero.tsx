import { BackgroundLines } from "@/components/ui/background-lines";
import { LayoutTextFlipDemo } from "./LayoutTextFlip";

import Javascript from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import ReduxLogo from "../assets/Redux.png";
import Tailwind from "../assets/Tailwind.png";
import Bootstrap from "../assets/Bootstrap.png";
import Express from "../assets/Express.png";
import NodeLogo from "../assets/NodeLogo.png";
import mongodb from "../assets/mongodb.svg";
import Photoshop from "../assets/photoshop.png";
import Nextjd from "../assets/NextJs.png";
import Nextjs2 from "../assets/nextjs2.png";
import typescreept from "../assets/typescript.png";
import { useTheme } from "@/context/theme-provider";

export function BackgroundLinesDemo() {

  const { theme } = useTheme()
  const isDark = theme === "dark"
  const skills = [
    { icon: isDark? Nextjs2 : Nextjd, name: "Next Js" },
    { icon: typescreept, name: "Typescript" },
    { icon: Javascript, name: "JavaScript" },
    { icon: ReactLogo, name: "React" },
    { icon: ReduxLogo, name: "Redux" },
    { icon: Tailwind, name: "Tailwind CSS" },
    { icon: Bootstrap, name: "Bootstrap" },
    { icon: Express, name: "Express.js" },
    { icon: NodeLogo, name: "Node.js" },
    { icon: mongodb, name: "MongoDB" },
    { icon: Photoshop, name: "Photoshop" },
  ];

  return (
    <>
      {/* Hero Section */}
      <BackgroundLines className="relative flex min-h-[80vh] w-full flex-col items-center justify-center px-4 md:px-8 lg:px-16">
        <h1 className="relative z-20 max-w-5xl text-center font-sans text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-transparent dark:from-neutral-200 dark:to-neutral-400">
            Hi, I’m{" "}
          </span>
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Vikas Kumar
          </span>
          <div className="mt-3">
            <LayoutTextFlipDemo />
          </div>
        </h1>

        <p className="relative z-20 mt-6 max-w-2xl text-center text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-base lg:text-lg">
          I’m a passionate{" "}
          <span className="font-medium text-neutral-900 dark:text-neutral-200">
            MERN Stack Developer
          </span>{" "}
          focused on building scalable, high-performance web applications with
          modern UI/UX and clean architecture.
        </p>

        <div className="relative z-20 mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-md bg-neutral-900 px-6 py-2 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200">
            View Projects
          </button>
          <button className="rounded-md border border-neutral-300 px-6 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800">
            Contact Me
          </button>
        </div>
      </BackgroundLines>

      {/* Skills Section: Edge-to-Edge Marquee */}
      <section className="w-full overflow-hidden mb-40">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-10">
          Skills & Expertise
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-10">
            {/* Duplicate skills for smooth infinite scroll */}
            {skills.concat(skills).map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center rounded-xl transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 md:w-24 md:h-24 lg:w-20 lg:h-20 object-contain"
                />
                <span className="mt-2  text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
