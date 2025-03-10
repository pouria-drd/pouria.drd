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
                `text-[var(--color-drd-neutral-500)]
                hover:text-[var(--color-drd-primary-500)]
                border-[var(--color-drd-neutral-200)]
                cursor-pointer transition-colors duration-200`,
                props.className
            )}
            target="_blank">
            {props.icon}
        </Link>
    );
};

export default SocialLink;
