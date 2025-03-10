import Link from "next/link";
import { cn } from "@/utils";
import { motion } from "framer-motion";

interface NavLinkProps {
    href: string;
    isActive: boolean;
    children?: React.ReactNode;
}

const SLink = (props: NavLinkProps) => {
    return (
        <Link
            href={props.href}
            className={`text-right ${
                props.isActive
                    ? "text-drd-primary-500 border-r-2 bg-drd-neutral-100/50"
                    : `text-drd-neutral-500 hover:text-drd-neutral-600 hover:bg-drd-neutral-100/50`
            } rounded-l p-1.5 w-full`}>
            {props.children}
        </Link>
    );
};

export default SLink;
