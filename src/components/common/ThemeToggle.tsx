"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    function toggleTheme() {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <Button
            size={"sm"}
            onClick={toggleTheme}
            variant={"outline"}
            className="rounded-full size-8 cursor-pointer">
            <FaSun className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" />

            <FaMoon className="absolute rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
        </Button>
    );
}

export default ThemeToggle;
