import Link from "next/link";
import { cn } from "@/utils";
import { motion } from "framer-motion";

interface NavLinkProps {
    href: string;
    isActive: boolean;
    className?: string;
    children?: React.ReactNode;
}

const NavLink = (props: NavLinkProps) => {
    return (
        <div className={cn("relative", props.className)}>
            <Link
                href={props.href}
                className={`transition-colors ${
                    props.isActive
                        ? "text-drd-primary"
                        : `text-drd-neutral 
                        hover:text-drd-neutral-700`
                }`}>
                {props.children}
            </Link>

            {props.isActive && (
                <motion.span
                    layoutId="drd-navlink"
                    className={`bg-drd-primary absolute block rounded-lg h-0.5 w-full top-6`}
                />
            )}
        </div>
    );
};

export default NavLink;
