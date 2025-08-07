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
				"flex flex-col gap-2 text-muted-foreground",
				props.className,
			)}>
			<SocialGroup />
			<hr className="w-sm mx-auto mt-0.5" />
			<span className="text-xs text-center py-1.5">
				{t("copyright", { year: new Date().getFullYear() })}
			</span>
		</footer>
	);
}

export default Footer;
