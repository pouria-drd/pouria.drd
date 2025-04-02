import { JSX } from "react";
import Link from "next/link";
import { cn } from "@/utils";

interface SocialLinkProps {
    href: string;
    icon: JSX.Element;
    className?: string;
}

const SocialLink = (props: SocialLinkProps) => {
    return (
        <Link
            href={props.href}
            className={cn(
                `text-drd-neutral-400
                hover:text-drd-primary-500
                border-drd-neutral-200
                cursor-pointer transition-colors duration-200`,
                props.className
            )}
            target="_blank">
            {props.icon}
        </Link>
    );
};

export default SocialLink;
