"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";
import { ArzWatch } from "@/components/ArzWatch";

function ArzWatchPage() {
	const t = useTranslations("Pages.ArzWatchPage");

	return (
		<main className="grow app-px flex flex-col items-center justify-center gap-8 py-8">
			{/* Hero Section */}
			<div className="text-center space-y-3">
				<h1 className="text-3xl sm:text-4xl font-extrabold">
					{t("title")}
				</h1>
				<p className="flex flex-col items-center gap-1 text-muted-foreground text-base sm:text-lg max-w-md">
					{t("description")}
					<Link
						href="https://t.me/arz_watch_bot"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1 text-sm hover:underline text-center
						text-blue-500 font-medium transition-colors duration-200 truncate w-fit"
						title="arz_watch_bot"
						aria-label={t("link")}>
						<span>{t("link")}</span>
						<ExternalLink className="size-3.5" />
					</Link>
				</p>
			</div>

			<ArzWatch />
		</main>
	);
}

export default ArzWatchPage;
