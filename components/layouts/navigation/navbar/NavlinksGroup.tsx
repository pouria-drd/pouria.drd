"use client";

import NavLink from "./NavLink";
import { cn, isLinkActive } from "@/utils";
import { usePathname } from "next/navigation";

interface NavigationLinksProps {
    className?: string;
}

const NavlinksGroup = (props: NavigationLinksProps) => {
    const pathname = usePathname();

    return (
        <div className={cn("flex items-center gap-4", props.className)}>
            <NavLink href="/" isActive={isLinkActive(pathname, "/")}>
                خانه
            </NavLink>

            <NavLink href="/blog" isActive={isLinkActive(pathname, "/blog")}>
                بلاگ
            </NavLink>

            <NavLink
                href="/projects"
                isActive={isLinkActive(pathname, "/projects")}>
                پروژه‌ها
            </NavLink>

            <NavLink
                href="/contact-me"
                isActive={isLinkActive(pathname, "/contact-me")}>
                ارتباط‌با‌من
            </NavLink>
        </div>
    );
};

export default NavlinksGroup;
