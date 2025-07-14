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
                "flex items-center justify-center gap-3",
                props.className
            )}>
            <SocialLink
                href="https://twitter.com/pouria_drd/"
                icon={<TwitterIcon />}
            />

            <div className="w-0.5 h-5 bg-border" />

            <SocialLink
                href="https://www.instagram.com/pouria.drd?igsh=..."
                icon={<InstagramIcon />}
            />

            <div className="w-0.5 h-5 bg-border" />

            <SocialLink
                href="https://t.me/pouria_drd/"
                icon={<TelegramIcon />}
            />

            <div className="w-0.5 h-5 bg-border" />

            <SocialLink
                href="https://github.com/pouria-drd/"
                icon={<GithubIcon />}
            />
        </div>
    );
};

export default SocialGroup;
