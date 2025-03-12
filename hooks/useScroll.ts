import { useState, useEffect } from "react";

/**
 * Hook to track scroll position and direction.
 *
 * @param threshold - The scroll position (in pixels) to trigger `isScrolled` (default: 50).
 * @param directionThreshold - Minimum scroll distance before detecting a direction change (default: 50).
 * @returns A tuple `[isScrolled, isScrollingDown]` where:
 *   - `isScrolled`: `true` if the user has scrolled past the threshold.
 *   - `isScrollingDown`: `true` if the user is scrolling **down**.
 *
 * @example
 * const [isScrolled, isScrollingDown] = useScroll(100, 50);
 * if (isScrolled) { console.log("User scrolled past 100px"); }
 * if (isScrollingDown) { console.log("User is scrolling down"); }
 */
function useScroll(
    threshold: number = 50,
    directionThreshold: number = 50
): readonly [boolean, boolean] {
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Detect if the user has scrolled past the threshold
            setIsScrolled(currentScrollY > threshold);

            // Detect scroll direction with a threshold
            if (Math.abs(currentScrollY - lastScrollY) >= directionThreshold) {
                setIsScrollingDown(currentScrollY > lastScrollY); // True if scrolling down
                setLastScrollY(currentScrollY);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold, directionThreshold, lastScrollY]);

    return [isScrolled, isScrollingDown] as const;
}

export default useScroll;
