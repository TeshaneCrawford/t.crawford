import React from "react";
import { popUpFromBottomForText } from "../../content/FramerMotionVariants";
import AnimatedHeading from "../FramerMotion/AnimateHeading";
import "react-toastify/dist/ReactToastify.css";

import ContactForm from "./ContactForm"; 
import AnimatedText from "../FramerMotion/AnimatedText";

export default function Contact() {
    return (
      <div id="contact" className="dark:bg-darkPrimary !relative">
        {/* Get in touch top section */}
        <section className="pt-6 text-center w-full-width dark:bg-darkPrimary dark:text-white">
          <AnimatedHeading
            variants={popUpFromBottomForText}
            className="text-4xl font-bold"
          >
            Get in touch
          </AnimatedHeading>
  
          <AnimatedText
            variants={popUpFromBottomForText}
            className="px-4 py-2 font-medium text-slate-400"
          >
            Have a little something, something you wanna talk about? Please feel
            free to get in touch anytime, whether for work or to just Hi 🙋‍♂️.
          </AnimatedText>
        </section>
  
        {/* Wrapper Container */}
        <section className="flex flex-col w-full px-5 mx-auto lg:flex-row dark:bg-darkPrimary dark:text-white lg:pb-10">
          {/* Left Contact form section */}
          <div className="w-full mx-auto mt-10">
            <AnimatedHeading
              variants={popUpFromBottomForText}
              className="w-full my-2 text-2xl font-bold text-center"
            >
              Connect with me
            </AnimatedHeading>
  
            <ContactForm />
          </div>
        </section>
      </div>
    );
  }