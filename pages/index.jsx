// import type { NextPage } from 'next'

import Image from 'next/image'
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { Ripples } from 'react-ripples';
import MetaData from '../components/MetaData';
import pageMeta from '..content/meta.js'
import { homeProfileImage } from 'constant/utils';
import AnimatedHeading from '../components/AnimateHeading';
import {
  FadeContainer,
  headingFromLeft,
  opacityVariant,
  popUp,
} from '../content/FramerMotionVariants';
import { getSkills } from 'lib/dataFetch'


export default function Home({ blogs, skills }) {
  return (
    <>
      <MetaData
        description={pageMeta.home.description}
        previewImage={pageMeta.home.image}
        keywords={pageMeta.home.keywords}
      />

<div className="relative max-w-4xl mx-auto dark:bg-darkPrimary dark:text-gray-100 2xl:max-w-5xl 3xl:max-w-7xl">
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={FadeContainer}
          viewport={{ once: true }}
          className="grid min-h-screen py-20 place-content-center"
        >
          <div className="relative flex flex-col items-center w-full gap-10 mx-auto">
            <motion.div
              variants={popUp}
              className="relative flex items-center justify-center p-3 rounded-full w-44 h-44 xs:w-52 xs:h-52 before:absolute before:inset-0 before:border-t-4 before:border-b-4 before:border-black before:dark:border-white before:rounded-full before:animate-photo-spin"
            >
              <Image
                src={homeProfileImage}
                className="rounded-full shadow filter saturate-0"
                width={400}
                height={400}
                alt="cover Profile Image"
                quality={75}
                priority={true}
              />
            </motion.div>

            <div className="flex flex-col w-full gap-3 p-5 text-center select-none ">
              <div className="flex flex-col gap-1">
                <motion.h1
                  variants={opacityVariant}
                  className="text-5xl font-bold lg:text-6xl font-sarina"
                >
                  Jatin Sharma
                </motion.h1>
                <motion.p
                  variants={opacityVariant}
                  className="text-xs font-medium text-gray-500 md:text-sm lg:text-lg"
                >
                  React Developer, Competitive Programmer
                </motion.p>
              </div>

              <motion.p
                variants={opacityVariant}
                className="text-sm font-medium text-center text-slate-500 dark:text-gray-300 md:text-base"
              >
                I am currently perusing my Bachelor Degree in Computer Science.
                I can code in Python, C, C++, etc.
              </motion.p>
            </div>

            <motion.div className="overflow-hidden rounded-md" variants={popUp}>
              <Ripples className="w-full" color="rgba(0, 0, 0, 0.5)">
                <button
                  className="flex items-center gap-2 px-5 py-2 border border-gray-500 rounded-md outline-none select-none dark:border-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800"
                  onClick={() => window.open("/resume")}
                >
                  <FiDownload />
                  <p>Resume</p>
                </button>
              </Ripples>
            </motion.div>
          </div>
        </motion.section>
        </div>
      
    </>
  )
}

export function HomeHeading({ title }) {
  return (
    <AnimatedHeading
      className="w-full my-2 text-3xl font-bold text-left font-inter"
      variants={headingFromLeft}
    >
      {title}
    </AnimatedHeading>
  );
}

export async function getStaticProps() {
  const skills = await getSkills();

  return {
    props: {
      skills,
    },
  }
}
