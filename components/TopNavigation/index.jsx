import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion, useAnimation, AnimatePresence } from "framer-motion";

import {
    FadeContainer,
    hamFastFadeContainer,
    mobileNavItemSideways,
    popUp,
} from 'content/FramerMotionVariants';
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { navigationRoutes } from 'constant/route';

// declare var isDarkMode: any

const TopNavigation = () => {
    const router = useRouter();
    const navRef = useRef<HTMLInputElement | null>(null);
    const control = useAnimation();
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Shadow backdrop to navbar on scroll
    const addShadow = useCallback(() => {
        if (window.pageYOffset > 10) {
            navRef.current?.classList.add(
                ...[
                    "shadow",
                    "backdrop-blur-xl",
                    "bg-white/70",
                    "dark:bg-darkSecondary/70",
                ]
            );
            control.start("visible");
        } else {
            navRef.current?.classList.remove(
                ...[
                    "shadow",
                    "backdrop-blur-xl",
                    "bg-white/70",
                    "dark:bg-darkSecondary/70",
                ]
            );
            control.start("hidden");
        }
    }, [control, navRef]);

    useEffect(() => {
        window.addEventListener("scroll", addShadow);
        return () => {
            window.removeEventListener("scroll", addShadow);
        };
    }, [addShadow]);

    // scroll lock when mobilenav is open
    function scrollLock() {
        const root = document.getElementsByTagName("html")[0];
        root.classList.toggle("scroll-lock");
    }

    // lock scroll when mobile nav is open
    function handleClick() {
        setIsNavOpen(!isNavOpen);
        scrollLock();
    }

  function changeDarkMode() {
    throw new Error('Function not implemented.');
  }

    return (
        <nav className='fixed top-0 flex items-center
         justify-between w-full px-4 dark:text-white 
         py-[10px] sm:p-4 sm:px-6 z-50 print:hidden' ref={navRef}>
            {/* Mobile Navigation Hamburger and MobileMenu */}
            <Hamburger open={isNavOpen} handleClick={handleClick} />
            <AnimatePresence>
                {isNavOpen && (
                    <MobileMenu links={navigationRoutes} handleClick={handleClick} />
                )}
            </AnimatePresence>

            <Link href='/' passHref>
                <div className='z-50 flex items-center gap-2 cursor-pointer'>
                    <motion.a
                     initial='hidden'
                     animate='visible'
                     variants={popUp}
                     className='relative hidden mr-3 sm:inline-flex'>
                        <h1 className='text-xl font-sarina'>TC</h1>
                    </motion.a>
                    <motion.p 
                     initial='hidden'
                     animate={control}
                     variants={{
                        hidden: { opacity: 0, scale: 1, display: "none" },
                        visible: { opacity: 1, scale: 1, display: "inline-flex" },
                     }} 
                     className='absolute sm:!hidden w-fit left-0 right-0 mx-auto'>
                        Teshane Crawford
                    </motion.p>
                </div>
            </Link>
            {/* Top Nav List */}
            <motion.nav className='z-10 hidden sm:flex md:absolute md:inset-0 md:justify-center'>
                <motion.div
                 initial='hidden'
                 animate='visible'
                 variants={FadeContainer}
                 className='flex items-center md:gap-2'>
                    {navigationRoutes.slice(0, 7).map((link, index) => {
                        return (
                            <NavItem
                             key={index}
                             href={`/${link}`}
                             text={link}
                             router={router}
                             />
                        )
                    })}
                </motion.div>
            </motion.nav>
            
            {/* Theme Toggle */}
            <motion.div 
             initial='hidden'
             animate='visible'
             variants={popUp}
             className='z-30 transition rounded cursor-pointer-full active:scale-75'
             title='Toggle Theme'
             onClick={() => changeDarkMode(!isDarkMode)}>
                {isDarkMode ? (
                    <HiOutlineMoon className='w-6 h-6 transition select-none sm:h-7 sm:w-7 active:scale-75' />
                ) : (
                    <HiOutlineSun className='w-6 h-6 transition select-none sm:h-7 sm:w-7 active:scale-75' />
                )}
            </motion.div>
        </nav>
    )
}

export default TopNavigation

// NavItem Container
function NavItem({ href, text, router }) {
    const isActive = router.asPath === (href === "/home" ? "/" : href);
    return (
      <Link href={href === "/home" ? "/" : href} passHref>
        <motion.a
          variants={popUp}
          className={`${
            isActive
              ? "font-bold text-gray-800 dark:text-gray-100"
              : " text-gray-600 dark:text-gray-300"
          } sm:inline-block transition-all text-[17px] hidden px-2 md:px-3 py-[3px] hover:bg-gray-100 dark:hover:bg-neutral-700/50 rounded-md`}
        >
          <span className="capitalize">{text}</span>
        </motion.a>
      </Link>
    );
  }
  
  // Hamburger Button
function Hamburger({ open, handleClick}) {
    return (
        <motion.div
      style={{ zIndex: 1000 }}
      initial="hidden"
      animate="visible"
      variants={popUp}
      className="sm:hidden"
    >
      {!open ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 duration-300 transform rounded-md cursor-pointer select-none active:scale-50"
          onClick={handleClick}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 duration-300 transform rounded-md cursor-pointer select-none active:scale-50"
          onClick={handleClick}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </motion.div>
    )
}

// interface MobileMenu {
//     links: string[];
//     handleClick: () => void;
// }
// Mobile navigation menu
const MobileMenu = ({ links, handleClick }) => {
    return (
      <motion.div
        className="absolute top-0 left-0 z-10 w-screen h-screen font-normal bg-white dark:bg-darkPrimary sm:hidden"
        variants={hamFastFadeContainer}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.nav className="flex flex-col mx-8 mt-28">
          {links.map((link, index) => {
            const navlink =
              link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`;
            return (
              <Link href={navlink} key={`mobileNav-${index}`} passHref>
                <motion.a
                  href={navlink}
                  className="flex w-auto py-4 text-base font-semibold text-gray-900 capitalize border-b border-gray-300 cursor-pointer dark:border-gray-700 dark:text-gray-100"
                  variants={mobileNavItemSideways}
                  onClick={handleClick}
                >
                  {link === "rss" ? link.toUpperCase() : link}
                </motion.a>
              </Link>
            );
          })}
        </motion.nav>
      </motion.div>
    );
  };