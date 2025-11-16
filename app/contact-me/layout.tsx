import { Fragment } from "react";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { LocaleType } from "@/types";

export async function generateMetadata(): Promise<Metadata> {
	const locale = (await getLocale()) as LocaleType;
	const ogLocale = locale === "fa" ? "fa_IR" : "en_US";
	const t = await getTranslations("Pages.ContactMePage.layout");

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
			canonical: "https://pouria-drd.ir/contact-me",
		},
		robots: {
			index: true,
			follow: true,
		},
		openGraph: {
			locale: ogLocale,
			title: {
				default: t("title"),
				template: `%s | ${t("title")}`,
			},
			description: t("description"),
			url: "https://pouria-drd.ir/contact-me",
			siteName: "Pouria Darandi",
			type: "website",
			images: [
				{
					width: 600,
					height: 315,
					alt: "Contact Pouria Darandi",
					url: "https://pouria-drd.ir/images/og/contact-me-opengraph-image.png",
					secureUrl:
						"https://pouria-drd.ir/images/og/contact-me-opengraph-image.png",
				},
			],
		},

		twitter: {
			card: "summary_large_image",
			title: {
				default: t("title"),
				template: `%s | ${t("title")}`,
			},
			description: t("description"),
			site: "@pouriaDRD",
			images: [
				{
					width: 600,
					height: 315,
					alt: "Contact Pouria Darandi",
					url: "https://pouria-drd.ir/images/tw/contact-me-twitter-image.png",
					secureUrl:
						"https://pouria-drd.ir/images/tw/contact-me-twitter-image.png",
				},
			],
		},
		other: {
			"ld+json": JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Person",
				name: "Pouria Darandi",
				url: "https://pouria-drd.ir",
				jobTitle: "Full-Stack Developer",
				email: "pouriadrd@gmail.com",
				sameAs: [
					"https://github.com/pouria-drd/",
					"https://twitter.com/pouria_drd/",
					"https://t.me/pouria_drd/",
					"https://www.instagram.com/pouria.drd",
				],
				contactPoint: {
					"@type": "ContactPoint",
					email: "pouriadrd@gmail.com",
					contactType: "customer support",
					availableLanguage: ["Persian", "English"],
				},
			}),
		},
	};
}

interface ContactMeLayoutProps {
	children: React.ReactNode;
}

function ContactMeLayout({ children }: ContactMeLayoutProps) {
	return <Fragment>{children}</Fragment>;
}

export default ContactMeLayout;
