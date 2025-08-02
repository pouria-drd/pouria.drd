"use server";

import { headers } from "next/headers";
import { UAParser } from "ua-parser-js";
import { determineDeviceType } from "@/utils";

/**
 * Retrieves detailed device information from request headers,
 * including IP, user agent, OS, browser, and device type.
 *
 * This function is meant to be used in a Next.js server action or route.
 *
 * @returns A Promise resolving to a DeviceInfo object
 */
async function getDeviceInfo(): Promise<DeviceInfo> {
	const headerList = headers();

	// Try to get IP address from common proxy headers
	const forwardedFor = (await headerList).get("x-forwarded-for");
	const realIp = (await headerList).get("x-real-ip");
	const ip = forwardedFor?.split(",")[0]?.trim() || realIp || "Unknown";

	// Extract User-Agent string
	const userAgent = (await headerList).get("user-agent") || "Unknown";

	// Parse User-Agent using UAParser
	const uaParser = new UAParser(userAgent);
	const uaResult = uaParser.getResult();

	// Determine a normalized device type (Mobile, Tablet, PC, Bot)
	const { device_type } = determineDeviceType(uaResult, userAgent);

	return {
		ip_address: ip,
		user_agent: userAgent,
		device_type,
		os: uaResult.os.name || "Unknown",
		os_version: uaResult.os.version || "Unknown",
		browser: uaResult.browser.name || "Unknown",
		browser_version: uaResult.browser.version || "Unknown",
		device_brand: uaResult.device.vendor || "Unknown",
		device_model: uaResult.device.model || "Unknown",
	};
}

export default getDeviceInfo;
