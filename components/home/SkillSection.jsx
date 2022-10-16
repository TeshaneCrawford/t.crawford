import { FadeContainer, popUp } from "../../content/FramerMotionVariants";
import { HomeHeading } from "../../pages";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiGit,
  SiMysql,
  SiAngular,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { useDarkMode } from "@context/darkModeContext";
import * as WindowsAnimation from "@lib/windowsAnimation";

export default function SkillSection({ skills }) {
  const { isDarkMode } = useDarkMode();

  return (
    <section className="mx-5">
      <HomeHeading title="My Top Skills" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="grid grid-cols-3 gap-4 my-10"
      >
        {skills.map((skill, index) => {
          const Icon = chooseIcon(skill.name.toLowerCase());
          return (
            <motion.div
              variants={popUp}
              key={index}
              title={skill.name}
              onMouseMove={(e) =>
                WindowsAnimation.showHoverAnimation(e, isDarkMode)
              }
              onMouseLeave={(e) => WindowsAnimation.removeHoverAnimation(e)}
              className="flex items-center justify-center gap-4 p-4 origin-center transform border border-gray-300 rounded-sm sm:justify-start bg-gray-50 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary dark:border-neutral-700 md:origin-top group"
            >
              <div className="relative transition pointer-events-none select-none group-hover:scale-110 sm:group-hover:scale-100">
                <Icon className="w-8 h-8" />
              </div>
              <p className="hidden text-sm font-semibold pointer-events-none select-none sm:inline-flex md:text-base">
                {skill.name}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

function chooseIcon(title) {
  let Icon;
  switch (title) {
    case "python":
      Icon = SiPython;
      break;
    case "javascript":
      Icon = SiJavascript;
      break;
    case "html":
      Icon = SiHtml5;
      break;
    case "css":
      Icon = SiCss3;
      break;
    case "next.js":
      Icon = SiNextdotjs;
      break;
    case "react.js":
      Icon = FaReact;
      break;
    case "tailwind css":
      Icon = SiTailwindcss;
      break;
    case "angular":
      Icon = SiAngular;
      break;
    case "git":
      Icon = SiGit;
      break;
    case "git":
      Icon = SiGit;
      break;
    case "mysql":
      Icon = SiMysql;
      break;
    default:
      break;
  }
  return Icon;
}