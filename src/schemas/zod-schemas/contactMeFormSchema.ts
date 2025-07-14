import { z } from "zod";

function contactMeFormSchema(t: (key: string) => string) {
    return z.object({
        fullName: z
            .string()
            .min(2, { message: t("zodErrors.fullName.min") })
            .trim(),

        email: z
            .email({ message: t("zodErrors.email.valid") })
            .min(5, { message: t("zodErrors.email.min") }),
        // .refine((val) => /^\S+@\S+\.\S+$/.test(val), {
        //     message: t("zodErrors.email.valid"),
        // }),
        subject: z
            .string()
            .min(3, { message: t("zodErrors.subject.min") })
            .trim(),

        message: z
            .string()
            .min(5, { message: t("zodErrors.message.min") })
            .trim(),
    });
}

export default contactMeFormSchema;
