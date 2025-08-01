function getIPv4FromHeader(headerValue: string | null): string {
	if (!headerValue) return "Unknown";
	const ipList = headerValue.split(",").map((ip) => ip.trim());
	const ipv4 = ipList.find((ip) =>
		/^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$/.test(ip),
	);
	return ipv4 || "Unknown";
}

export default getIPv4FromHeader;
