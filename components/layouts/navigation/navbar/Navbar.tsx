"use client";

import { useScroll } from "@/hooks";
import NavlinksGroup from "./NavlinksGroup";
import { SidebarButton } from "@/components/ui";
import { PouriaLogo } from "@/components/icons";

interface NavbarProps {
    onOpenSidebar: () => void;
}

const Navbar = (props: NavbarProps) => {
    const [isScrolled] = useScroll(50);

    function handleSidebarButtonClick() {
        props.onOpenSidebar();
    }

    return (
        <nav
            className={`sticky top-0 z-10 ${
                isScrolled
                    ? "bg-drd-primary-75 bg-opacity-90 glass-effect"
                    : "bg-transparent"
            } flex items-center justify-between app-px p-4`}>
            {/* Logo */}
            <PouriaLogo />

            {/* Navigation Links */}
            <NavlinksGroup className="hidden sm:flex flex-row-reverse gap-6" />

            <SidebarButton
                className="sm:hidden"
                onClick={handleSidebarButtonClick}
            />
        </nav>
    );
};

export default Navbar;
