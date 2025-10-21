"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { MoonIcon, SunIcon, LaptopIcon } from "lucide-react";

function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const t = useTranslations("Components.ThemeSwitcher");

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	const nextTheme = () => {
		switch (theme) {
			case "light":
				return "dark";
			case "dark":
				return "system";
			default:
				return "light";
		}
	};

	const handleToggle = () => setTheme(nextTheme());

	const renderIcon = () => {
		switch (theme) {
			case "dark":
				return <MoonIcon className="size-4 text-foreground" />;
			case "system":
				return <LaptopIcon className="size-4 text-blue-400" />;
			default:
				return <SunIcon className="size-4 text-orange-400" />;
		}
	};

	return (
		<Button
			size="icon"
			variant="outline"
			onClick={handleToggle}
			title={`Theme: ${theme}`}
			className={`
            size-[34px]
            overflow-hidden
            rounded-full
            transition-all duration-300 ease-in-out
            px-2 py-1.5
            border border-border
            hover:border-primary/30
            hover:bg-primary/10
            text-sm font-medium
            justify-center
                `}>
			<AnimatePresence mode="wait" initial={false}>
				<motion.div
					key={theme}
					initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
					animate={{ opacity: 1, rotate: 0, scale: 1 }}
					exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
					transition={{ duration: 0.15, ease: "easeInOut" }}
					className="flex-shrink-0 flex items-center justify-center p-1">
					{renderIcon()}
				</motion.div>
			</AnimatePresence>

			<span
				className="text-sm font-medium hidden overflow-hidden whitespace-nowrap
                    transition-all duration-200 group-hover:block">
				{t("text")}
			</span>
		</Button>
	);
}

export default ThemeSwitcher;
