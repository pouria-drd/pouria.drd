"use server";

import { z } from "zod";
import { EmailServiceError } from "@/errors";
import { EmailServiceFactory } from "@/services";
import { getTranslations } from "next-intl/server";
import { contactMeFormSchema } from "@/schemas/zod-schemas";

interface Props {
    delay?: number;
}

interface ContactMePromise {
    errors?: Record<string, string[]>;
    serverError?: string;
    success?: string;
}

async function contactMeAction(
    state: any,
    formData: FormData,
    props?: Props
): Promise<ContactMePromise> {
    const t = await getTranslations("Forms.ContactMe");
    const schema = contactMeFormSchema(t);
    const result = schema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        const errorsTree = z.treeifyError(result.error);
        return {
            errors: {
                fullName: errorsTree.properties?.fullName?.errors ?? [],
                email: errorsTree.properties?.email?.errors ?? [],
                subject: errorsTree.properties?.subject?.errors ?? [],
                message: errorsTree.properties?.message?.errors ?? [],
            },
        };
    }

    const { fullName, email, subject, message } = result.data;

    try {
        const emailService = EmailServiceFactory.createEmailService();
        await emailService.sendNewContactEmailToAdmins(
            fullName,
            email,
            subject,
            message
        );

        return { success: t("serverMessages.success") };
    } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
            return { serverError: t("serverMessages.timeout") };
        }
        if (error instanceof EmailServiceError) {
            return { serverError: t("serverMessages.emailError") };
        }
        return { serverError: t("serverMessages.unexpectedError") };
    }
}

export default contactMeAction;
