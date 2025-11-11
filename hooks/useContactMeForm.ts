"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import { contactMeAction } from "@/actions";
import { contactMeSchema } from "@/lib/validations";
import { ContactMeFormData } from "@/types/form.type";

function useContactMeForm() {
	const [isLoading, setIsLoading] = useState(false);

	// translations
	const t = useTranslations("Forms.ContactMeForm");
	const tSchema = useTranslations("Validations.ContactMeSchema");

	// form and validation schema
	const formSchema = contactMeSchema(tSchema);
	const form = useForm<ContactMeFormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	/**
	 * Handle form submission
	 * @param values - Form values
	 */
	async function onSubmit(values: ContactMeFormData) {
		setIsLoading(true);
		try {
			const response = await contactMeAction(values);
			if (response.success) {
				toast.success(response.message);
			} else {
				toast.error(response.message);
			}
		} catch (error: unknown) {
			// if in development, log the error
			if (process.env.NODE_ENV === "development") {
				console.error("Error in onSubmit:", error);
			}
			// show error message
			toast.error(t("messages.error"));
		} finally {
			// Reset form and set loading state to false
			setIsLoading(false);
			form.reset();
		}
	}

	return {
		t,
		form,
		isLoading,
		onSubmit,
	};
}

export default useContactMeForm;
