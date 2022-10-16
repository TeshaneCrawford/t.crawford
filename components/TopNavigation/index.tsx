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
import { navigationRoutes } from 'constant/route';


const TopNavigation: React.FC = () => {
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
    }, [control]);

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

    return (
        <div>index</div>
    )
}

export default TopNavigation