"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui";
import { MoonIcon, SunIcon } from "@/components/icons";

function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    function toggleTheme() {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <Button
            outlined
            onClick={toggleTheme}
            className="bg-zinc-200 hover:bg-zinc-200/90
            dark:bg-zinc-800 dark:hover:bg-zinc-800/90
            outline-none ring-0
            text-zinc-700 dark:text-white
            hover:text-zinc-800 dark:hover:text-zinc-200
            size-8 cursor-pointer">
            <SunIcon className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" />

            <MoonIcon className="absolute rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
        </Button>
    );
}

export default ThemeToggle;
