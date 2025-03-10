import { useState, useEffect } from "react";

/**
 * Custom hook to detect the scroll position of the window.
 * It returns a boolean value indicating if the user has scrolled past a given threshold.
 *
 * @param threshold - The scroll position (in pixels) at which the background changes (default: 50).
 * @returns [isScrolled] - A boolean indicating whether the scroll position exceeds the threshold.
 *
 * @example
 * const isScrolled = useScroll(100);
 * if (isScrolled) {
 *   // The user has scrolled past 100px
 * }
 */
function useScroll(threshold: number = 50) {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        // Function to handle the scroll event and update the scroll state
        const handleScroll = () => {
            if (window.scrollY > threshold) {
                setIsScrolled(true); // Scroll position exceeds threshold
            } else {
                setIsScrolled(false); // Scroll position is below threshold
            }
        };

        // Add the scroll event listener to monitor the window scroll
        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener when the component is unmounted
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [threshold]); // The effect runs whenever the threshold changes

    // Return the scroll state as a tuple (with `as const` for type inference)
    return [isScrolled] as const;
}

export default useScroll;
