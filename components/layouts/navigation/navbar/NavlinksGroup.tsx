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

            <NavLink
                href="/services"
                isActive={isLinkActive(pathname, "/services")}>
                خدمات
            </NavLink>

            <NavLink
                href="/contact-me"
                isActive={isLinkActive(pathname, "/contact-me")}>
                تماس
            </NavLink>
        </div>
    );
};

export default NavlinksGroup;
