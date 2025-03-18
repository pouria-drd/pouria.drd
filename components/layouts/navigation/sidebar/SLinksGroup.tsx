"use client";

import SLink from "./SLink";
import { cn, isLinkActive } from "@/utils";
import { usePathname } from "next/navigation";
import { motion, Variants } from "framer-motion";

interface NavigationLinksProps {
    className?: string;
    onClick?: () => void;
}

const SLinkGroup = (props: NavigationLinksProps) => {
    const pathname = usePathname();

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
                type: "ease",
                delayChildren: 0.35,
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
                خانه
            </SLink>

            <SLink
                href="/blog"
                onClick={handleClick}
                isActive={isLinkActive(pathname, "/blog")}>
                بلاگ
            </SLink>

            <SLink
                href="/projects"
                onClick={handleClick}
                isActive={isLinkActive(pathname, "/projects")}>
                پروژه‌ها
            </SLink>

            <SLink
                href="/contact-me"
                onClick={handleClick}
                isActive={isLinkActive(pathname, "/contact-me")}>
                ارتباط‌با‌من
            </SLink>
        </motion.div>
    );
};

export default SLinkGroup;
