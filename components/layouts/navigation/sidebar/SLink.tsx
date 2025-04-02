"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface NavLinkProps {
    href: string;
    isActive: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
}

const SLink = (props: NavLinkProps) => {
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
                className={`transition-colors text-right w-full ${
                    props.isActive
                        ? "text-drd-primary border-r-2 bg-drd-primary-75"
                        : `text-drd-neutral hover:text-drd-primary
                        hover:bg-drd-primary-75 border-r-2 border-transparent`
                } rounded-lg rounded-r-none px-1 py-2`}>
                {props.children}
            </Link>
        </motion.div>
    );
};

export default SLink;
