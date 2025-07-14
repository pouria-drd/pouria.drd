import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import { SocialGroup } from "@/components/common";

interface Props {
    className?: string;
}

function Footer(props: Props) {
    const t = useTranslations("Layouts.Footer");

    return (
        <footer
            id="footer"
            className={cn(
                "flex flex-col gap-4 text-drd-neutral",
                props.className
            )}>
            <SocialGroup />
            <span className="text-xs text-center border-t border-border w-full py-4">
                {t("copyright", { year: new Date().getFullYear() })}
            </span>
        </footer>
    );
}

export default Footer;
