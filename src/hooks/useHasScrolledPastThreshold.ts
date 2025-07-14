import { useState, useEffect } from "react";

/**
 * Hook to check if the user has scrolled past a given threshold.
 *
 * @param threshold - The scroll position (in pixels) to trigger `true` (default: 50).
 * @returns `true` if the user has scrolled past the threshold, otherwise `false`.
 *
 * @example
 * const hasScrolledPastThreshold = useHasScrolledPastThreshold(100);
 * if (hasScrolledPastThreshold) { console.log("User scrolled past 100px"); }
 */
function useHasScrolledPastThreshold(threshold: number = 50): boolean {
    const [hasScrolledPastThreshold, setHasScrolledPastThreshold] =
        useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolledPastThreshold(window.scrollY > threshold);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return hasScrolledPastThreshold;
}

export default useHasScrolledPastThreshold;
