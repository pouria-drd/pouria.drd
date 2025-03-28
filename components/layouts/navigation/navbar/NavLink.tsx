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
                className={`${
                    props.isActive
                        ? "text-drd-primary-500"
                        : `text-drd-neutral-500 
                        hover:text-drd-neutral-600`
                } font-semibold`}>
                {props.children}
            </Link>

            {props.isActive && (
                <motion.span
                    layoutId="drd-navlink"
                    className={`bg-drd-primary-500 absolute 
                   block rounded-lg h-[2.5px] w-full top-[25px]`}
                />
            )}
        </div>
    );
};

export default NavLink;
