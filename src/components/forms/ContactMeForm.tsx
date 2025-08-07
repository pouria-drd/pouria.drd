"use client";

import { toast } from "sonner";
import { PdIcon } from "../icons";
import { contactMeAction } from "@/actions";
import { useTranslations } from "next-intl";
import { useActionState, useEffect } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Button,
	Input,
	Textarea,
	Label,
} from "@/components/ui";

const ContactMeForm = () => {
	const t = useTranslations("Forms.ContactMe");

	const [state, formAction, isPending] = useActionState(
		contactMeAction,
		undefined,
	);

	useEffect(() => {
		if (state?.success) {
			toast.success(state.success);
		}

		if (state?.serverError) {
			toast.error(state.serverError);
		}
	}, [state]);

	return (
		<Card className="w-full max-w-sm">
			<CardHeader className="flex flex-col items-center justify-center gap-2">
				<PdIcon className="text-primary size-12" animation={false} />
				<CardTitle className="mt-2">{t("title")}</CardTitle>
				<CardDescription>{t("description")}</CardDescription>
			</CardHeader>

			<CardContent>
				<form action={formAction} id="contact-me-form">
					<div className="flex flex-col gap-6">
						<div className="grid gap-2">
							<Label htmlFor="fullName">
								{t("labels.fullName")}
							</Label>
							<Input
								name="fullName"
								autoComplete="name"
								placeholder={t("placeholders.fullName")}
							/>

							{state?.errors?.fullName && (
								<span className="text-xs text-destructive">
									{state?.errors?.fullName}
								</span>
							)}
						</div>

						<div className="grid gap-2">
							<Label htmlFor="email">{t("labels.email")}</Label>
							<Input
								name="email"
								autoComplete="email"
								placeholder={t("placeholders.email")}
							/>
							{state?.errors?.email && (
								<span className="text-xs text-destructive">
									{state?.errors?.email}
								</span>
							)}
						</div>

						<div className="grid gap-2">
							<Label htmlFor="subject">
								{t("labels.subject")}
							</Label>
							<Input
								name="subject"
								placeholder={t("placeholders.subject")}
							/>
							{state?.errors?.subject && (
								<span className="text-xs text-destructive">
									{state?.errors?.subject}
								</span>
							)}
						</div>

						<div className="grid gap-2">
							<Label htmlFor="message">
								{t("labels.message")}
							</Label>

							<Textarea
								name="message"
								placeholder={t("placeholders.message")}
							/>

							{state?.errors?.message && (
								<span className="text-xs text-destructive">
									{state?.errors?.message}
								</span>
							)}
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex flex-col items-center justify-center gap-2">
				<Button
					type="submit"
					variant={"default"}
					disabled={isPending}
					form="contact-me-form"
					className="w-full">
					{t("title")}
				</Button>

				{/* {state?.success && (
					<span className="text-xs text-center text-chart-2">
						{state.success}
					</span>
				)} */}
			</CardFooter>
		</Card>
	);
};

export default ContactMeForm;
