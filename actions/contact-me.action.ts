"use server";

import { getTranslations } from "next-intl/server";

import { EmailService } from "@/services";
import { ApiResult, ContactMeFormData } from "@/types";

const emailService = new EmailService();

export async function contactMeAction(
	data: ContactMeFormData,
): Promise<ApiResult<{ message: string }>> {
	try {
		const t = await getTranslations("SeverActions.ContactMeAction");

		// send email with template
		await emailService.sendEmail({
			subject: data.subject,
			templateName: "contact-me",
			templateData: data,
		});
		return {
			data: {
				message: t("messages.success"),
			},
			success: true,
			message: t("messages.success"),
		};
	} catch (error: unknown) {
		if (process.env.NODE_ENV === "development") {
			console.error("[contactMeAction]", error);
		}

		return {
			success: false,
			type: "Internal",
			statusCode: 500,
			message: "Internal server error occurred.",
		};
	}
}
