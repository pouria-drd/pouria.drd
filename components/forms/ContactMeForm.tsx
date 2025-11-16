"use client";

import { useContactMeForm } from "@/hooks";

import { PdImage } from "../icons";
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Spinner,
	Textarea,
} from "@/components/ui";

function ContactMeForm() {
	const { t, form, onSubmit, isLoading } = useContactMeForm();

	return (
		<Card className="w-full h-full">
			<CardHeader className="text-center">
				<PdImage className="size-14 mx-auto" />
				<CardTitle className="text-xl sm:text-2xl">
					{t("title")}
				</CardTitle>
				<CardDescription className="text-sm sm:text-base">
					{t("description")}
				</CardDescription>
			</CardHeader>

			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-6">
						{/* Name */}
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										{t("fields.name.label")}
									</FormLabel>
									<FormControl>
										<Input
											placeholder={t(
												"fields.name.placeholder",
											)}
											{...field}
											autoComplete="name"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Email */}
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										{t("fields.email.label")}
									</FormLabel>
									<FormControl>
										<Input
											placeholder={t(
												"fields.email.placeholder",
											)}
											{...field}
											autoComplete="email"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Subject */}
						<FormField
							control={form.control}
							name="subject"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										{t("fields.subject.label")}
									</FormLabel>
									<FormControl>
										<Input
											placeholder={t(
												"fields.subject.placeholder",
											)}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Message */}
						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										{t("fields.message.label")}
									</FormLabel>
									<FormControl>
										<Textarea
											className="min-h-20"
											placeholder={t(
												"fields.message.placeholder",
											)}
											{...field}
											rows={6}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Submit Button */}
						<Button
							type="submit"
							className="w-full"
							disabled={isLoading}>
							{isLoading ? <Spinner /> : t("button")}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}

export default ContactMeForm;
