"use client";

import { createElement } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { THEMES } from "@/constants";
import { useThemeSwitcher } from "@/hooks";
import { LocaleType, ThemeType } from "@/types";

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

function ThemeSwitcher({ className, withAnimation = true }: Props) {
	const locale = useLocale() as LocaleType;
	const t = useTranslations("Components.ThemeSwitcher");

	const { mounted, theme, setTheme } = useThemeSwitcher();
	if (!mounted) return null;

	const currentThemeData =
		THEMES.find((tItem) => tItem.value === theme) ?? THEMES[0];

	return (
		<DropdownMenu dir={locale === "fa" ? "rtl" : "ltr"}>
			<DropdownMenuTrigger asChild>
				<Button
					size="icon-sm"
					variant="outline"
					className={cn(
						"group flex items-center gap-2 aspect-square size-[33px] overflow-hidden rounded-full border border-border text-sm font-medium justify-start px-2 py-1.5",
						withAnimation
							? "hover:w-[88px] transition-all duration-300 ease-in-out hover:border-primary/30 hover:bg-primary/10"
							: "w-[34px]",
						className,
					)}>
					<AnimatePresence mode="wait" initial={false}>
						<motion.div
							key={theme}
							initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
							animate={{ opacity: 1, rotate: 0, scale: 1 }}
							exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
							transition={{ duration: 0.25, ease: "easeInOut" }}
							className="shrink-0 flex items-center justify-center">
							{createElement(currentThemeData.icon, {
								className:
									theme === "light"
										? "size-4 text-amber-400"
										: theme === "dark"
										? "size-4 text-indigo-400"
										: "size-4 text-sky-400",
							})}
						</motion.div>
					</AnimatePresence>

					{withAnimation && (
						<span className="text-sm font-medium tracking-wide hidden whitespace-nowrap transition-all duration-200 group-hover:block">
							{t(currentThemeData.tKey)}
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
					value={theme}
					className="space-y-0.5"
					onValueChange={(v) => setTheme(v as ThemeType)}>
					{THEMES.map((item) => {
						const Icon = item.icon;
						return (
							<DropdownMenuRadioItem
								key={item.value}
								value={item.value}
								className="cursor-pointer 
								data-[state=checked]:bg-accent 
								data-[state=checked]:text-primary
								data-[state=checked]:dark:bg-accent
								data-[state=checked]:dark:text-accent-foreground">
								<Icon
									className={
										item.value === "light"
											? "size-4 text-amber-400"
											: item.value === "dark"
											? "size-4 text-indigo-400"
											: "size-4 text-sky-400"
									}
								/>
								<span className="text-sm font-medium">
									{t(item.tKey)}
								</span>
							</DropdownMenuRadioItem>
						);
					})}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default ThemeSwitcher;
