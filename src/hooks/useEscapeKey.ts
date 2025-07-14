import { useEffect } from "react";

/**
 * Custom hook to detect and handle the Escape key press event.
 *
 * @param callback - Function to execute when Escape key is pressed.
 */
function useEscapeKey(callback: () => void) {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                callback();
            }
        };

        // Attach event listener
        document.addEventListener("keydown", handleKeyDown);

        // Cleanup listener on component unmount
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [callback]);
}

export default useEscapeKey;
