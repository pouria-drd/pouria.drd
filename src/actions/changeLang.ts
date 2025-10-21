"use server";

import { cookies } from "next/headers";

/**
 * Update the locale cookie
 * @param locale the new locale to set
 * @returns void
 */
async function changeLang(locale: string) {
	(
		await // Update the locale cookie
		cookies()
	).set("NEXT_LOCALE", locale);
}

export default changeLang;
