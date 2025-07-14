"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { motion, Variants } from "framer-motion";

interface NavLinkProps {
    href: string;
    isActive: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
}

const SLink = (props: NavLinkProps) => {
    const locale = useLocale();

    const itemVariants: Variants = {
        hidden: {
            y: 30,
            opacity: 0,
        },

        visible: {
            y: 0,
            opacity: 1,
            transition: {
                damping: 20,
                type: "spring",
                stiffness: 200,
                duration: 0.15,
            },
        },
    };

    return (
        <motion.div
            variants={itemVariants}
            className="flex items-center w-full">
            <Link
                href={props.href}
                onClick={props.onClick}
                className={`rounded-md transition-colors w-full px-1 py-2 ${
                    props.isActive
                        ? "text-primary bg-muted border-primary"
                        : `text-muted-foreground hover:text-primary
                        hover:bg-muted border-transparent`
                } ${
                    locale === "fa"
                        ? "rounded-r-none border-r-2"
                        : "rounded-l-none border-l-2"
                }`}>
                {props.children}
            </Link>
        </motion.div>
    );
};

export default SLink;
