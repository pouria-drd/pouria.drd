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
                className={`text-right w-full ${
                    props.isActive
                        ? "text-drd-primary-500 border-r-2 bg-drd-primary-100"
                        : `text-drd-neutral-500 hover:text-drd-primary-500
                        hover:bg-drd-primary-100 hover:border-r-2`
                } rounded-l p-1.5`}>
                {props.children}
            </Link>
        </motion.div>
    );
};

export default SLink;
