"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import Sidebar from "./Sidebar";
import { PdImage } from "@/components/icons";
import { cn, isLinkActive } from "@/lib/utils";
import { PUBLIC_NAV_LINKS } from "@/constants";
import { LanguageSwitcher, ThemeSwitcher } from "@/components/preferences";

function Navbar() {
	return (
		<nav
			className={`bg-background/90
            sticky top-0 z-10 backdrop-blur-2xl app-px
            flex items-center justify-between px-4 py-4`}>
			{/* Navigation Links */}

			<div className="hidden sm:block">
				<NavLinks />
			</div>

			{/* Sidebar */}
			<div className="block sm:hidden">
				<Sidebar />
			</div>

			<div className="flex items-center gap-4">
				<div className="flex items-center gap-2">
					{/* Theme Toggle */}
					<ThemeSwitcher />

					{/* Language Toggle */}
					<LanguageSwitcher />
				</div>

				{/* Logo */}
				<Link href={"/"} className="size-8">
					{/* <PdIcon className="text-primary size-8" /> */}
					<PdImage />
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;

interface NavLinksProps {
	className?: string;
}

export const NavLinks = ({ className }: NavLinksProps) => {
	const pathname = usePathname();
	const t = useTranslations("Components.Navigation.NavigationLinks");

	return (
		<div className={cn("flex items-center gap-4", className)}>
			{PUBLIC_NAV_LINKS.map((link) => (
				<NavLink
					key={link.href}
					href={link.href}
					isActive={isLinkActive(pathname, link.href)}>
					{t(link.tKey)}
				</NavLink>
			))}
		</div>
	);
};

interface NavLinkProps {
	href: string;
	isActive: boolean;
	className?: string;
	children?: React.ReactNode;
}

export const NavLink = (props: NavLinkProps) => {
	return (
		<div className={cn("relative", props.className)}>
			<Link
				href={props.href as "/"}
				className={`transition-colors hover:text-primary ${
					props.isActive
						? "text-primary font-bold"
						: `text-muted-foreground`
				}`}>
				{props.children}
			</Link>

			{props.isActive && (
				<motion.span
					layoutId="drd-navlink"
					className={`bg-primary absolute block rounded-lg h-0.5 w-full top-6`}
				/>
			)}
		</div>
	);
};
