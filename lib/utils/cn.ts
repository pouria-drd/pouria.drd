import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export default cn;
