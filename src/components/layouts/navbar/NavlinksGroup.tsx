"use client";

import NavLink from "./NavLink";
import { cn, isLinkActive } from "@/utils";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { NavbarDropdown } from "@/components/ui";

interface NavigationLinksProps {
	className?: string;
}

const NavlinksGroup = (props: NavigationLinksProps) => {
	const pathname = usePathname();
	const t = useTranslations("Layouts.Navigation.NavigationLinks");

	return (
		<div className={cn("flex items-center gap-4", props.className)}>
			<NavLink href="/" isActive={isLinkActive(pathname, "/")}>
				{t("home")}
			</NavLink>

			{/* <NavLink href="/blog" isActive={isLinkActive(pathname, "/blog")}>
                بلاگ
            </NavLink> */}

			<NavLink
				href="/projects"
				isActive={isLinkActive(pathname, "/projects")}>
				{t("projects")}
			</NavLink>

			<NavLink
				href="/contact-me"
				isActive={isLinkActive(pathname, "/contact-me")}>
				{t("contact")}
			</NavLink>

			{/* Pass NavLinks as children to dropdown */}
			<NavbarDropdown
				label={t("tools")}
				options={[
					{ value: "/farsify", label: t("farsify") },
					{ value: "/arzwatch", label: t("arzwatch") },
				]}
			/>
		</div>
	);
};

export default NavlinksGroup;
