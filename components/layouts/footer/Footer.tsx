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
                `font-mono flex flex-col gap-4 text-drd-neutral`,
                props.className
            )}>
            <SocialGroup />
            <span
                className="text-xs text-center
                border-t border-drd-neutral-200 w-full py-4">
                &#169; Copyright Pouria Darandi. All rights reserved 2025
            </span>
        </footer>
    );
};

export default Footer;
