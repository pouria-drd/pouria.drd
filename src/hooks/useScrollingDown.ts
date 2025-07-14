import { useState, useEffect } from "react";

/**
 * Hook to detect if the user is scrolling down.
 *
 * @param directionThreshold - Minimum scroll distance before detecting a direction change (default: 50).
 * @returns `true` if the user is scrolling **down**, otherwise `false`.
 *
 * @example
 * const scrollingDown = useScrollingDown(50);
 * if (scrollingDown) { console.log("User is scrolling down"); }
 */
function useScrollingDown(directionThreshold: number = 50): boolean {
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (Math.abs(currentScrollY - lastScrollY) >= directionThreshold) {
                setIsScrollingDown(currentScrollY > lastScrollY);
                setLastScrollY(currentScrollY);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [directionThreshold, lastScrollY]);

    return isScrollingDown;
}

export default useScrollingDown;
