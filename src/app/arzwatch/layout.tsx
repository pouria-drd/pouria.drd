import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("Pages.ArzWatchPage.layout");

	return {
		title: {
			default: t("title"),
			template: `%s | ${t("title")}`,
		},
		description: t("description"),
		keywords: t("keywords")
			.split(",")
			.map((kw) => kw.trim()),
		creator: "Pouria Darandi",
		publisher: "Pouria Darandi",
		alternates: {
			canonical: "https://pouria-drd.ir/arzwatch",
		},
		robots: {
			index: true,
			follow: true,
		},
		openGraph: {
			type: "website",
			siteName: "Pouria DRD ArzWatch",
			url: "https://pouria-drd.ir/arzwatch",

			title: {
				default: t("title"),
				template: `%s | ${t("title")}`,
			},

			description: t("description"),

			images: [
				{
					width: 600,
					height: 315,
					alt: "Pouria DRD ArzWatch",
					url: "https://pouria-drd.ir/images/og/opengraph-image.png",
					secureUrl:
						"https://pouria-drd.ir/images/og/opengraph-image.png",
				},
			],
		},

		twitter: {
			creator: "@pouriaDRD",
			creatorId: "@pouriaDRD",
			card: "summary_large_image",
			site: "@pouriaDRD",
			title: {
				default: t("title"),
				template: `%s | ${t("title")}`,
			},
			description: t("description"),
			images: [
				{
					width: 600,
					height: 315,
					alt: "Pouria DRD ArzWatch",
					url: "https://pouria-drd.ir/images/tw/twitter-image.png",
					secureUrl:
						"https://pouria-drd.ir/images/tw/twitter-image.png",
				},
			],
		},
		// Structured Data (JSON-LD) for SEO
		other: {
			"ld+json": JSON.stringify({
				"@context": "https://schema.org",
				"@type": "CollectionPage",
				name: "Pouria Darandi ArzWatch",
				url: "https://pouria-drd.ir/arzwatch",
				title: {
					default: t("title"),
					template: `%s | ${t("title")}`,
				},
				description: t("description"),
				creator: {
					"@type": "Person",
					name: "Pouria Darandi",
					url: "https://pouria-drd.ir",
				},
			}),
		},
	};
}

interface ArzWatchLayoutProps {
	children: React.ReactNode;
}

function ArzWatchLayout({ children }: ArzWatchLayoutProps) {
	return <>{children}</>;
}

export default ArzWatchLayout;
