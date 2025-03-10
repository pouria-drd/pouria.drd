"use client";

import SLink from "./SLink";
import { cn, isLinkActive } from "@/utils";
import { usePathname } from "next/navigation";

interface NavigationLinksProps {
    className?: string;
}

const SLinkGroup = (props: NavigationLinksProps) => {
    const pathname = usePathname();

    return (
        <div className={cn("flex flex-col gap-4 w-full", props.className)}>
            <SLink href="/" isActive={isLinkActive(pathname, "/")}>
                خانه
            </SLink>

            <SLink
                href="/services"
                isActive={isLinkActive(pathname, "/services")}>
                خدمات
            </SLink>

            <SLink
                href="/contact-me"
                isActive={isLinkActive(pathname, "/contact-me")}>
                تماس
            </SLink>
        </div>
    );
};

export default SLinkGroup;
