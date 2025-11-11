import { z } from "zod";
import { Translator } from "@/types";

const contactMeSchema = (t: Translator) => {
	return z.object({
		email: z.email(t("email.invalid")),

		name: z
			.string()
			.min(2, t("name.min"))
			.max(50, t("name.max", { max: 50 })),

		subject: z
			.string()
			.min(2, t("subject.min"))
			.max(50, t("subject.max", { max: 50 })),

		message: z
			.string()
			.min(5, t("message.min"))
			.max(1000, t("message.max", { max: 1000 })),
	});
};

export default contactMeSchema;
