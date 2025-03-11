"use server";

import { sendEmail } from "@/services";
import { contactMeFormSchema } from "@/schemas/zod-schemas";

interface Props {
    delay?: number;
}

interface RegisterPromise {
    errors?: Record<string, string[]>;
    serverError?: string;
    success?: string;
}

async function contactMeAction(
    state: any,
    formData: FormData,
    props?: Props
): Promise<RegisterPromise> {
    // set delay for testing purposes
    if (props?.delay) {
        await new Promise((resolve) => setTimeout(resolve, props.delay));
    }

    const result = contactMeFormSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        };
    }

    const fullName = result.data.fullName;
    const email = result.data.email;
    const subject = result.data.subject;
    const message = result.data.message;

    try {
        // Send email
        await sendEmail(fullName, email, subject, message);

        return {
            success: "پیام شما با موفقیت ارسال شد!",
        };
    } catch (error) {
        // Log error for debugging in development.
        if (process.env.NODE_ENV === "development") {
            console.error("Error registering user:", error);
        }

        if (error instanceof DOMException && error.name === "AbortError") {
            return {
                serverError:
                    "مدت زمان درخواست طولانی شد. لطفاً دوباره تلاش کنید.",
            };
        }

        return { serverError: "خطای غیرمنتظره‌ای رخ داد!" };
    }
}

export default contactMeAction;
