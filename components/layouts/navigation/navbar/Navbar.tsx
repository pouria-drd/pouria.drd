"use client";

import { motion } from "framer-motion";
import { useScrollingDown } from "@/hooks";
import NavlinksGroup from "./NavlinksGroup";
import { SidebarButton } from "@/components/ui";
import { PouriaLogo } from "@/components/icons";
import { ThemeToggle } from "@/components/shared";

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
                type: "ease",
            }}
            className={`bg-drd-neutral-50/95 dark:bg-drd-dark-bg/95
            sticky top-0 z-10 glass-effect app-px
            flex items-center justify-between p-4`}>
            <div className="flex items-center gap-2">
                {/* Logo */}
                <PouriaLogo />
                {/* Theme Toggle */}
                <ThemeToggle />
            </div>

            {/* Navigation Links */}
            <NavlinksGroup className="hidden sm:flex flex-row-reverse gap-6" />

            {/* Sidebar Button */}
            <SidebarButton
                className="sm:hidden"
                onClick={handleSidebarButtonClick}
            />
        </motion.nav>
    );
};

export default Navbar;
