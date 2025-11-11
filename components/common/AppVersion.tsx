"use client";

import { LocaleType } from "@/types";
import { cn, getAppVersion } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";

interface AppVersionProps {
	className?: string;
}

const AppVersion = (props: AppVersionProps) => {
	const appVersion: string = getAppVersion();
	const locale = useLocale() as LocaleType;
	const t = useTranslations("Components.AppVersion");

	return (
		<span
			className={cn(
				`text-muted-foreground text-xs text-center w-full
                ${locale === "fa" ? "font-iran-yekan-x" : "font-mono "}
                `,
				props.className,
			)}>
			{t("version", { version: appVersion })}
		</span>
	);
};

export default AppVersion;
