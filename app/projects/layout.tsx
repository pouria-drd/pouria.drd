import { Fragment } from "react";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
	const locale = await getLocale();
	const ogLocale = locale === "fa" ? "fa_IR" : "en_US";
	const t = await getTranslations("Pages.ProjectsPage.layout");

	return {
		applicationName: "Pouria Darandi | Projects",

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

		openGraph: {
			locale: ogLocale,
			type: "website",
			siteName: "Pouria DRD Projects",
			url: "https://pouria-drd.ir/projects",
			title: {
				default: t("title"),
				template: `%s | ${t("title")}`,
			},
			description: t("description"),
			images: [
				{
					width: 600,
					height: 315,
					alt: "Pouria Darandi's projects",
					url: "https://pouria-drd.ir/images/og/projects-opengraph-image.png",
					secureUrl:
						"https://pouria-drd.ir/images/og/projects-opengraph-image.png",
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
					alt: "Pouria Darandi's projects",
					url: "https://pouria-drd.ir/images/tw/projects-twitter-image.png",
					secureUrl:
						"https://pouria-drd.ir/images/tw/projects-twitter-image.png",
				},
			],
		},

		alternates: {
			canonical: "https://pouria-drd.ir/projects",
		},

		robots: {
			index: true,
			follow: true,
		},

		// Structured Data (JSON-LD) for SEO
		other: {
			"ld+json": JSON.stringify({
				"@context": "https://schema.org",
				"@type": "CollectionPage",
				name: "Pouria Darandi Projects",
				url: "https://pouria-drd.ir/projects",
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

interface ProjectsLayoutProps {
	children: React.ReactNode;
}

function ProjectsLayout({ children }: ProjectsLayoutProps) {
	return <Fragment>{children}</Fragment>;
}

export default ProjectsLayout;
