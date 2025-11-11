"use client";

import { ThemeType } from "@/types";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/**
 * Hook to switch between light, dark, and system themes.
 */
function useThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme, resolvedTheme } = useTheme();

	const currentTheme = (theme ?? resolvedTheme) as ThemeType;

	// eslint-disable-next-line react-hooks/set-state-in-effect
	useEffect(() => setMounted(true), []);

	/**
	 * Get the next theme based on the current theme.
	 */
	const getNextTheme = () => {
		switch (theme as ThemeType) {
			case "light":
				return "dark";

			case "dark":
				return "system";

			case "system":
				return "light";

			default:
				return "light";
		}
	};

	/**
	 * Handle the theme switching.
	 */
	function handleToggle() {
		setTheme(getNextTheme());
	}

	return {
		theme,
		mounted,
		currentTheme,
		setTheme,
		handleToggle,
	};
}

export default useThemeSwitcher;
