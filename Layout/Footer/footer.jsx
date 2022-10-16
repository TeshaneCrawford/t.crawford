import Link from "next/link";
import Image from "next/image";
import socialMedia from "/content/socialMedia";
import { FadeContainer, popUp } from "/content/FramerMotionVariants";
import { navigationRoutes } from "/constant/route";
import { motion } from "framer-motion";

export default function Footer() {

  return (
    <footer className="text-gray-600 dark:text-gray-400/50 w-screen font-inter mb-20 print:hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl p-5 border-t-2 border-gray-200  dark:border-gray-400/10 mx-auto text-sm sm:text-base flex flex-col gap-5"
      >
        <div>

          <div></div>
        </div>

        <section className="grid grid-cols-3 gap-10">
          <div className="flex flex-col gap-4 capitalize">
            {navigationRoutes.slice(0, 4).map((text, index) => {
              return (
                <FooterLink key={index} id={index} route={text} text={text} />
              );
            })}
          </div>
          <div className="flex flex-col gap-4 capitalize">
            {navigationRoutes
              .slice(4, navigationRoutes.length)
              .map((route, index) => {
                let text = route;
                if (route === "rss") text = "RSS";
                return <FooterLink key={index} route={route} text={text} />;
              })}
          </div>
          <div className="flex flex-col gap-4 capitalize">
            {socialMedia.slice(0, 4).map((platform, index) => {
              return (
                <Link key={index} href={platform.url} passHref>
                  <motion.a
                    className="hover:text-black dark:hover:text-white w-fit"
                    variants={popUp}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={platform.url}
                  >
                    {platform.title}
                  </motion.a>
                </Link>
              );
            })}
          </div>
        </section>
      </motion.div>
    </footer>
  );
}

function FooterLink({ route, text }) {
  return (
    <Link href={`/${route}`} passHref>
      <motion.a
        className="hover:text-black dark:hover:text-white w-fit"
        variants={popUp}
        href={`/${route}`}
      >
        {text}
      </motion.a>
    </Link>
  );
}