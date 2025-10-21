"use client";

import { cn } from "@/utils";
import { useState } from "react";
import { changeLang } from "@/actions";
import { LanguagesIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui";

interface Language {
	code: LanguageType;
	label: string;
	direction: "rtl" | "ltr";
}

const LANGUAGES: Language[] = [
	{ code: "fa", label: "فارسی", direction: "rtl" },
	{ code: "en", label: "English", direction: "ltr" },
];

interface Props {
	className?: string;
	withAnimation?: boolean;
}

function LanguageSwitcher({ className, withAnimation = true }: Props) {
	const currentLocale = useLocale() as LanguageType;
	const t = useTranslations("Components.LanguageSwitcher");
	const [selectedLocale, setSelectedLocale] =
		useState<LanguageType>(currentLocale);

	const handleChangeLang = async (locale: LanguageType) => {
		if (locale === selectedLocale) return;
		setSelectedLocale(locale);
		await changeLang(locale);
	};

	const currentLang = LANGUAGES.find((l) => l.code === selectedLocale);

	return (
		<DropdownMenu dir={currentLang?.direction}>
			<DropdownMenuTrigger asChild>
				<Button
					size="icon"
					variant="outline"
					className={cn(
						"group flex items-center gap-2 aspect-square size-[34px] overflow-hidden rounded-full border border-border text-sm font-medium justify-start text-primary px-2 py-1.5",
						withAnimation
							? "hover:w-[68px] transition-all duration-300 ease-in-out hover:border-primary/30 hover:bg-primary/10"
							: "w-[34px]",
						className,
					)}>
					<LanguagesIcon
						className={cn(
							"size-4 shrink-0",
							withAnimation &&
								"transition-transform duration-300",
						)}
					/>
					{withAnimation && (
						<span className="text-sm font-medium tracking-wide hidden whitespace-nowrap transition-all duration-200 group-hover:block">
							{currentLang?.code.toUpperCase()}
						</span>
					)}
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent side="bottom" align="end" className="w-44">
				<DropdownMenuLabel className="text-center tracking-wide text-muted-foreground">
					{t("title")}
				</DropdownMenuLabel>
				<DropdownMenuSeparator />

				<DropdownMenuRadioGroup
					value={selectedLocale}
					onValueChange={(v) => handleChangeLang(v as LanguageType)}>
					{LANGUAGES.map((lang) => (
						<DropdownMenuRadioItem
							key={lang.code}
							value={lang.code}
							className={cn(
								"cursor-pointer transition-colors duration-150",
								"hover:bg-accent text-muted-foreground hover:text-accent-foreground",
							)}>
							<span
								className={cn(
									"text-sm",
									lang.code === "fa"
										? "font-iran-yekan-x"
										: "font-sans",
								)}>
								{lang.label}
							</span>
						</DropdownMenuRadioItem>
					))}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default LanguageSwitcher;
