"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";

function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Set mounted to true once the component has been mounted on the client
    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        // if (window) {
        //     window.location.reload();
        // }
    };

    // If the component hasn't mounted yet, return null to avoid hydration mismatch
    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`p-1 rounded-md size-7 flex items-center justify-center
                bg-drd-neutral-200 text-drd-neutral-700 cursor-pointer
                dark:bg-drd-neutral-950 dark:text-white`}>
            <motion.div
                key={theme}
                initial={{
                    opacity: 0,
                    scale: 0.8,
                    y: theme === "light" ? 10 : -10, // Moon comes from bottom, Sun comes from top
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0, // Both will come to the center
                }}
                exit={{
                    opacity: 0,
                    scale: 0.8,
                    y: theme === "light" ? -10 : 10, // Moon goes to top, Sun goes to bottom
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center">
                {theme === "light" ? (
                    <MoonIcon className="w-5 h-5" />
                ) : (
                    <SunIcon className="w-5 h-5" />
                )}
            </motion.div>
        </button>
    );
}

export default ThemeToggle;
