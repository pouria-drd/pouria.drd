"use server";

import { LocaleType } from "@/types";
import { cookies } from "next/headers";

/**
 * Update the locale cookie
 * @param newLocale the new locale to set
 * @returns void
 */
export async function changeLocaleAction(newLocale: LocaleType) {
	const cookieStore = await cookies();

	cookieStore.set("NEXT_LOCALE", newLocale);
}
