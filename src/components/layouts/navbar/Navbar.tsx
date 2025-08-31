"use client";

import { motion } from "framer-motion";
import { useScrollingDown } from "@/hooks";
import NavLinkGroup from "./NavLinkGroup";
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
			className={`bg-background/90
            sticky top-0 z-10 backdrop-blur-2xl app-px
            flex items-center justify-between p-4`}>
			{/* Navigation Links */}
			<NavLinkGroup className="hidden sm:flex flex-row gap-5" />

			<div className="flex flex-row-reverse sm:flex-row items-center gap-1.5">
				<div className="flex items-center">
					{/* Theme Toggle */}
					<ThemeToggle />

					{/* Language Toggle */}
					<LanguageSwitcher />
				</div>

				{/* Logo */}
				<PouriaLogo />
			</div>

			{/* Sidebar Button */}
			<SidebarButton onClick={handleSidebarButtonClick} />
		</motion.nav>
	);
};

export default Navbar;
