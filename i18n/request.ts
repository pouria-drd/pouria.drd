import { LocaleType } from "@/types";
import { cookies, headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
	// Priority 1: Get locale from the 'NEXT_LOCALE' cookie
	const cookieStore = cookies();
	const cookieLocale = (await cookieStore).get("NEXT_LOCALE")?.value;

	// Priority 2: Get locale from the Accept-Language header
	const acceptLang = (await headers()).get("accept-language");
	const headerLocale = acceptLang?.split(",")?.[0]?.split("-")?.[0]; // e.g., 'en-US' -> 'en'

	// Fallback to default locale
	const locale = cookieLocale || headerLocale || ("fa" as LocaleType);

	// Optional: Log the resolved locale (useful for debugging)
	// console.log("Resolved locale:", locale);

	return {
		locale,
		messages: (await import(`../messages/${locale}.json`)).default,
	};
});
