"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface NavLinkProps {
    href: string;
    isActive: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
}

const SLink = (props: NavLinkProps) => {
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
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
                        : `text-drd-neutral-500 hover:bg-drd-primary-100`
                } rounded-l p-1.5`}>
                {props.children}
            </Link>
        </motion.div>
    );
};

export default SLink;
