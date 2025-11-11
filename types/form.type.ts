import z from "zod";
import { contactMeSchema } from "@/lib/validations";

export type ContactMeFormData = z.infer<ReturnType<typeof contactMeSchema>>;
