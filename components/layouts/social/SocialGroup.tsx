import { cn } from "@/utils";
import SocialLink from "./SocialLink";
import {
    GithubIcon,
    InstagramIcon,
    TelegramIcon,
    TwitterIcon,
} from "@/components/icons";

interface SocialCardProps {
    className?: string;
}

const SocialGroup = (props: SocialCardProps) => {
    return (
        <div
            className={cn(
                `flex items-center justify-center gap-3.5`,
                props.className
            )}>
            <SocialLink
                className="border-r-2 pr-2.5"
                href="https://twitter.com/pouria_drd/"
                icon={<TwitterIcon />}
            />
            <SocialLink
                className="border-r-2 pr-2.5"
                href="https://www.instagram.com/pouria.drd?igsh=OTdmZndkajBhbzF2&utm_source=qr/"
                icon={<InstagramIcon />}
            />
            <SocialLink
                className="border-r-2 pr-2.5"
                href="https://t.me/pouria_drd/"
                icon={<TelegramIcon />}
            />
            <SocialLink
                href="https://github.com/pouria-drd/"
                icon={<GithubIcon />}
            />
        </div>
    );
};

export default SocialGroup;
