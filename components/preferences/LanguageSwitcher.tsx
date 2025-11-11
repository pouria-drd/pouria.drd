"use client";

import { useState } from "react";
import { LanguagesIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { LocaleType } from "@/types";
import { LANGUAGES } from "@/constants";
import { changeLocaleAction } from "@/actions";

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

interface Props {
	className?: string;
	withAnimation?: boolean;
}

function LanguageSwitcher({ className, withAnimation = true }: Props) {
	const t = useTranslations("Components.LanguageSwitcher");

	const currentLocale = useLocale() as LocaleType;
	const [selectedLocale, setSelectedLocale] =
		useState<LocaleType>(currentLocale);

	const handleChangeLang = async (locale: LocaleType) => {
		if (locale === selectedLocale) return;
		setSelectedLocale(locale);
		await changeLocaleAction(locale);
	};

	const currentLang = LANGUAGES.find((l) => l.code === selectedLocale);

	return (
		<DropdownMenu dir={currentLang?.direction}>
			<DropdownMenuTrigger asChild>
				<Button
					size="icon-sm"
					variant="outline"
					className={cn(
						"group flex items-center gap-2 aspect-square size-[33px] overflow-hidden rounded-full border border-border text-sm font-medium justify-start text-primary px-2 py-1.5",
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

			<DropdownMenuContent className="w-44">
				<DropdownMenuLabel className="text-center tracking-wide">
					{t("title")}
				</DropdownMenuLabel>
				<DropdownMenuSeparator />

				<DropdownMenuRadioGroup
					value={selectedLocale}
					className="space-y-0.5"
					onValueChange={(v) => handleChangeLang(v as LocaleType)}>
					{LANGUAGES.map((lang) => (
						<DropdownMenuRadioItem
							key={lang.code}
							value={lang.code}
							className="cursor-pointer 
							data-[state=checked]:bg-accent
							data-[state=checked]:text-primary
							data-[state=checked]:dark:bg-accent
							data-[state=checked]:dark:text-accent-foreground
							">
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
