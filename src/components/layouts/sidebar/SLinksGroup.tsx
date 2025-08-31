"use client";

import SLink from "./SLink";
import { cn, isLinkActive } from "@/utils";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { motion, Variants } from "framer-motion";

interface NavigationLinksProps {
	className?: string;
	onClick?: () => void;
}

const SLinkGroup = (props: NavigationLinksProps) => {
	const pathname = usePathname();
	const t = useTranslations("Layouts.Navigation.NavigationLinks");

	const handleClick = () => {
		props.onClick?.();
	};

	const containerVariants: Variants = {
		hidden: {
			opacity: 0,
		},

		visible: {
			opacity: 1,
			transition: {
				// type: "ease",
				delayChildren: 0.2,
				staggerChildren: 0.15,
			},
		},
	};

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={containerVariants}
			className={cn("flex flex-col gap-4 w-full", props.className)}>
			<SLink
				href="/"
				onClick={handleClick}
				isActive={isLinkActive(pathname, "/")}>
				{t("home")}
			</SLink>

			{/* <SLink
                href="/blog"
                onClick={handleClick}
                isActive={isLinkActive(pathname, "/blog")}>
                {t("blog")}
            </SLink> */}

			<SLink
				href="/projects"
				onClick={handleClick}
				isActive={isLinkActive(pathname, "/projects")}>
				{t("projects")}
			</SLink>

			<SLink
				href="/farsify"
				onClick={handleClick}
				isActive={isLinkActive(pathname, "/farsify")}>
				{t("farsify")}
			</SLink>

			<SLink
				href="/arzwatch"
				onClick={handleClick}
				isActive={isLinkActive(pathname, "/arzwatch")}>
				{t("arzwatch")}
			</SLink>

			<SLink
				href="/contact-me"
				onClick={handleClick}
				isActive={isLinkActive(pathname, "/contact-me")}>
				{t("contact")}
			</SLink>
		</motion.div>
	);
};

export default SLinkGroup;
