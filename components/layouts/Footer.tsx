import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { SocialLinks } from "@/components/common";

interface Props {
	className?: string;
}

function Footer(props: Props) {
	const t = useTranslations("Components.Footer");

	return (
		<footer
			id="footer"
			className={cn(
				"flex flex-col gap-2 text-muted-foreground overflow-x-hidden",
				props.className,
			)}>
			<SocialLinks />
			<hr className="w-sm mx-auto mt-0.5" />
			<span className="text-xs text-center py-1.5">
				{t("copyright", { year: new Date().getFullYear() })}
			</span>
		</footer>
	);
}

export default Footer;
