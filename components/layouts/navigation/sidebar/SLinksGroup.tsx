"use client";

import SLink from "./SLink";
import { motion } from "framer-motion";
import { cn, isLinkActive } from "@/utils";
import { usePathname } from "next/navigation";

interface NavigationLinksProps {
    className?: string;
    onClick?: () => void;
}

const SLinkGroup = (props: NavigationLinksProps) => {
    const pathname = usePathname();

    const handleClick = () => {
        props.onClick?.();
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
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
                href="/services"
                onClick={handleClick}
                isActive={isLinkActive(pathname, "/services")}>
                خدمات
            </SLink>

            <SLink
                href="/contact-me"
                onClick={handleClick}
                isActive={isLinkActive(pathname, "/contact-me")}>
                تماس
            </SLink>
        </motion.div>
    );
};

export default SLinkGroup;
