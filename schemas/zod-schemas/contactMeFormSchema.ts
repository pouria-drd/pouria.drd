import { z } from "zod";

const contactMeFormSchema = z.object({
    fullName: z
        .string()
        .min(2, { message: "نام باید حداقل 2 کاراکتر باشد" })
        .trim(),

    email: z
        .string()
        .email({ message: "آدرس ایمیل باید معتبر باشد" })
        .min(5, { message: "آدرس ایمیل باید حداقل 5 کاراکتر باشد" }),

    subject: z
        .string()
        .min(3, { message: "موضوع باید حداقل 3 کاراکتر باشد" })
        .trim(),

    message: z
        .string()
        .min(5, { message: "پیام باید حداقل 5 کاراکتر باشد" })
        .trim(),
});

export default contactMeFormSchema;
