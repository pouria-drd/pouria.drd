import { IResult as UAResult } from "ua-parser-js";

/**
 * Determines the general device type (Mobile, Tablet, PC, Bot, Unknown)
 * based on the parsed User-Agent result and the raw User-Agent string.
 *
 * @param uaResult - The parsed User-Agent result from UAParser
 * @param userAgent - The raw User-Agent string
 * @returns An object with a standardized device_type string
 */
function determineDeviceType(
	uaResult: UAResult,
	userAgent: string,
): {
	device_type: DeviceInfo["device_type"];
} {
	const type = uaResult.device.type;

	// If UAParser detects mobile or tablet, use that directly
	if (type === "mobile") return { device_type: "Mobile" };
	if (type === "tablet") return { device_type: "Tablet" };

	// Basic regex to detect bots, crawlers, scrapers, etc.
	const botRegex = /bot|crawl|slurp|spider|crawler|curl|wget/i;
	if (botRegex.test(userAgent)) return { device_type: "Bot" };

	// If the device type is undefined and not a bot, we assume it's a PC
	if (!type) return { device_type: "PC" };

	// Fallback for any unhandled types
	return { device_type: "Unknown" };
}

export default determineDeviceType;
