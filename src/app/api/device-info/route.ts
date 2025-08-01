import { UAParser } from "ua-parser-js";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	// Get IP from headers
	const forwardedFor = req.headers.get("x-forwarded-for");
	const ip =
		forwardedFor?.split(",")[0]?.trim() ||
		req.headers.get("x-real-ip") ||
		"Unknown";

	const userAgent = req.headers.get("user-agent") || "Unknown";

	const parser = new UAParser(userAgent);
	const result = parser.getResult();

	return NextResponse.json({
		ip_address: ip,
		user_agent: userAgent,
		device_type: result.device.type || "PC",
		os: result.os.name || "",
		os_version: result.os.version || "",
		browser: result.browser.name || "",
		browser_version: result.browser.version || "",
		device_brand: result.device.vendor || "Unknown",
		device_model: result.device.model || "Unknown",
	});
}

// export async function GET(req: NextRequest) {
// 	const forwarded = req.headers.get("x-forwarded-for");
// 	const realIp =
// 		getIPv4FromHeader(forwarded) ||
// 		req.headers.get("x-real-ip") ||
// 		"Unknown";

// 	const userAgent = req.headers.get("user-agent") || "Unknown";
// 	const parser = new UAParser(userAgent);
// 	const result = parser.getResult();

// 	return NextResponse.json({
// 		ip_address: realIp,
// 		user_agent: userAgent,
// 		device_type: result.device.type || "PC",
// 		os: result.os.name || "",
// 		os_version: result.os.version || "",
// 		browser: result.browser.name || "",
// 		browser_version: result.browser.version || "",
// 		device_brand: result.device.vendor || "Unknown",
// 		device_model: result.device.model || "Unknown",
// 	});
// }
