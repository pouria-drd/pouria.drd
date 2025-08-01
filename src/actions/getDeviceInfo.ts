"use server";

import { headers } from "next/headers";
import { UAParser } from "ua-parser-js";

async function getDeviceInfo(): Promise<DeviceInfo> {
	const headersList = headers();

	// Get IP from headers
	const forwardedFor = (await headersList).get("x-forwarded-for");
	const ip =
		forwardedFor?.split(",")[0]?.trim() ||
		(await headersList).get("x-real-ip") ||
		"Unknown";

	const userAgent = (await headersList).get("user-agent") || "Unknown";

	const parser = new UAParser(userAgent);
	const result = parser.getResult();

	return {
		ip_address: ip,
		user_agent: userAgent,
		device_type: result.device.type || "PC",
		os: result.os.name || "",
		os_version: result.os.version || "",
		browser: result.browser.name || "",
		browser_version: result.browser.version || "",
		device_brand: result.device.vendor || "Unknown",
		device_model: result.device.model || "Unknown",
	};
}
export default getDeviceInfo;
