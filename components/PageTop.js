import {
    fromLeftVariant,
    opacityVariant,
  } from "../content/FramerMotionVariants";
  import AnimatedHeading from "./FramerMotion/AnimateHeading";
  import AnimatedText from "./FramerMotion/AnimatedText";
  
  export default function PageTop({ pageTitle, headingClass, children }) {
    return (
      <div className="flex flex-col w-full gap-3 py-5 mb-10 select-none">
        <AnimatedHeading
          variants={fromLeftVariant}
          className={`text-4xl  md:text-5xl font-bold text-neutral-900 dark:text-neutral-200 ${headingClass}`}
        >
          {pageTitle}
        </AnimatedHeading>
        <AnimatedText
          variants={opacityVariant}
          className="text-lg font-medium text-gray-400"
        >
          {children}
        </AnimatedText>
      </div>
    );
  }