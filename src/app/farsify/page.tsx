"use client";

import { useTranslations } from "next-intl";
import { FarsifyForm } from "@/components/forms";

function FarsifyPage() {
	const t = useTranslations("Pages.FarsifyPage");

	return (
		<main className="grow app-px flex flex-col items-center justify-center pt-8">
			{/* Hero Section */}
			<div className="text-center space-y-3">
				<h1 className="text-3xl sm:text-4xl font-extrabold">
					{t("title")}
				</h1>
				<p className="text-muted-foreground text-base sm:text-lg max-w-md">
					{t("description")}
				</p>
			</div>

			<div className="container max-w-full sm:max-w-sm mx-auto px-4 py-8">
				<FarsifyForm />
			</div>
		</main>
	);
}

export default FarsifyPage;
