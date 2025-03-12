"use client";

import { useScroll } from "@/hooks";
import { motion } from "framer-motion";
import NavlinksGroup from "./NavlinksGroup";
import { SidebarButton } from "@/components/ui";
import { PouriaLogo } from "@/components/icons";

interface NavbarProps {
    onOpenSidebar: () => void;
}

const Navbar = (props: NavbarProps) => {
    const [isScrolled, isScrollingDown] = useScroll(50, 50);

    function handleSidebarButtonClick() {
        props.onOpenSidebar();
    }

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{
                y: isScrollingDown ? "-100%" : 0,
                backgroundColor: isScrolled
                    ? "rgba(239, 244, 255, 0.95)" // dark background with opacity 0.9 when scrolled
                    : "rgba(239, 244, 255, 0)", // transparent background when not scrolled
            }}
            transition={{
                type: "ease-in-out",
                stiffness: 300,
                damping: 25,
            }}
            className={`sticky top-0 z-10 glass-effect app-px 
            flex items-center justify-between p-4`}>
            {/* Logo */}
            <PouriaLogo />

            {/* Navigation Links */}
            <NavlinksGroup className="hidden sm:flex flex-row-reverse gap-6" />

            <SidebarButton
                className="sm:hidden"
                onClick={handleSidebarButtonClick}
            />
        </motion.nav>
    );
};

export default Navbar;
