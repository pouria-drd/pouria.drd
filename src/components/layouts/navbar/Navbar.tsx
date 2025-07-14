"use client";

import { motion } from "framer-motion";
import { useScrollingDown } from "@/hooks";
import NavlinksGroup from "./NavlinksGroup";
import SidebarButton from "./SidebarButton";
import { PouriaLogo } from "@/components/icons";
import { LanguageSwitcher, ThemeToggle } from "@/components/common";

interface NavbarProps {
    onOpenSidebar: () => void;
}

const Navbar = (props: NavbarProps) => {
    const isScrollingDown = useScrollingDown(75);

    function handleSidebarButtonClick() {
        props.onOpenSidebar();
    }

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{
                y: isScrollingDown ? "-100%" : 0,
            }}
            transition={{
                damping: 25,
                stiffness: 300,
            }}
            className={`bg-background/95
            sticky top-0 z-10 backdrop-blur-xl app-px l2r
            flex items-center justify-between p-4`}>
            <div className="flex items-center gap-2 sm:gap-4">
                {/* Logo */}
                <PouriaLogo />
                <div className="flex items-center gap-2">
                    {/* Theme Toggle */}
                    <ThemeToggle />
                    {/* Language Toggle */}
                    <LanguageSwitcher />
                </div>
            </div>

            {/* Navigation Links */}
            <NavlinksGroup className="hidden sm:flex flex-row-reverse gap-6" />

            {/* Sidebar Button */}
            <SidebarButton onClick={handleSidebarButtonClick} />
        </motion.nav>
    );
};

export default Navbar;
