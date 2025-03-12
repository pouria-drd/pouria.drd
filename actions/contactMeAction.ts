"use server";

import { EmailServiceError } from "@/errors";
import { EmailServiceFactory } from "@/services";
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
    // Simulate delay for testing purposes.
    if (props?.delay) {
        await new Promise((resolve) => setTimeout(resolve, props.delay));
    }

    // Validate form data using Zod schema.
    const result = contactMeFormSchema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
        return { errors: result.error.flatten().fieldErrors };
    }

    const { fullName, email, subject, message } = result.data;

    try {
        // Use the Factory to create an EmailService instance
        const emailService = EmailServiceFactory.createEmailService();

        await emailService.sendNewContactEmailToAdmins(
            fullName,
            email,
            subject,
            message
        );

        return { success: "پیام شما با موفقیت ارسال شد!" };
    } catch (error) {
        // Log error for debugging in development.
        if (process.env.NODE_ENV === "development") {
            console.error("Error sending email:", error);
        }

        // Handle specific errors for user feedback.
        if (error instanceof DOMException && error.name === "AbortError") {
            return {
                serverError:
                    "مدت زمان درخواست طولانی شد. لطفاً دوباره تلاش کنید.",
            };
        }

        if (error instanceof EmailServiceError) {
            return { serverError: "خطای سرویس ایمیل رخ داده است!" };
        }

        return {
            serverError: "خطای غیرمنتظره‌ای رخ داده است!",
        };
    }
}

export default contactMeAction;
