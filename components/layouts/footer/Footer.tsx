import { cn } from "@/utils";
import { SocialGroup } from "@/components/layouts/social";

interface Props {
    className?: string;
}

const Footer = (props: Props) => {
    return (
        <footer
            id="footer"
            className={cn(
                `font-mono flex flex-col gap-4 app-px`,
                props.className
            )}>
            <SocialGroup />
            <span
                className="text-[var(--color-drd-neutral-600)] text-xs text-center
                border-t border-[var(--color-drd-neutral-200)] w-full py-4">
                &#169; Copyright Pouria Darandi. All rights reserved 2024
            </span>
        </footer>
    );
};

export default Footer;
