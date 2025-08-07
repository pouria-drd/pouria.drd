"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui";
import { MoonIcon, SunIcon } from "lucide-react";

function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	function toggleTheme() {
		setTheme(theme === "dark" ? "light" : "dark");
	}

	return (
		<Button
			size={"sm"}
			onClick={toggleTheme}
			variant={"ghost"}
			className="rounded-full size-8 cursor-pointer">
			<SunIcon className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" />

			<MoonIcon className="absolute rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
		</Button>
	);
}

export default ThemeToggle;
