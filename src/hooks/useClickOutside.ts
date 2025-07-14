import { useEffect, useRef } from "react";

/**
 * Custom hook to detect clicks outside of a referenced element and trigger a callback.
 *
 * @param callback - Function to execute when a click occurs outside the referenced element.
 * @returns A ref object to be assigned to the target element.
 *
 * @example
 * const ref = useClickOutside(() => {
 *   // Do something when the click is outside the referenced element
 * });
 */
function useClickOutside<T extends HTMLElement>(callback: () => void) {
    // Reference to the target element
    const ref = useRef<T>(null);

    useEffect(() => {
        // Check if the click is outside the referenced element
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        // Add event listener when component mounts
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Cleanup: Remove event listener when component unmounts
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [callback]); // Re-run effect if the callback function changes

    return ref; // Return the reference for external use
}

export default useClickOutside;
