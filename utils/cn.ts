import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

/**
 * This function is a wrapper around clsx, which allows you to use tailwind classes in a more
 * typescript-friendly way.
 * @param inputs - The tailwind classes to be combined.
 * @returns The combined tailwind classes.
 */
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default cn;
