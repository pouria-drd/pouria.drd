import "../assets/styles/globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui";
import { ThemeProvider } from "@/context";
import { NextIntlClientProvider } from "next-intl";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer, Navigation } from "@/components/layouts";
import { getLocale, getTranslations } from "next-intl/server";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const peyda = localFont({
	src: [
		{
			weight: "100",
			style: "normal",
			path: "../assets/fonts/Peyda/woff2/PeydaWebFaNum-Thin.woff2",
		},
		{
			weight: "200",
			style: "normal",
			path: "../assets/fonts/Peyda/woff2/PeydaWebFaNum-ExtraLight.woff2",
		},
		{
			weight: "300",
			style: "normal",
			path: "../assets/fonts/Peyda/woff2/PeydaWebFaNum-Light.woff2",
		},
		{
			weight: "400",
			style: "normal",
			path: "../assets/fonts/Peyda/woff2/PeydaWebFaNum-Regular.woff2",
		},
		{
			weight: "500",
			style: "normal",
			path: "../assets/fonts/Peyda/woff2/PeydaWebFaNum-Medium.woff2",
		},
		{
			weight: "600",
			style: "normal",
			path: "../assets/fonts/Peyda/woff2/PeydaWebFaNum-SemiBold.woff2",
		},
		{
			weight: "700",
			style: "normal",
			path: "../assets/fonts/Peyda/woff2/PeydaWebFaNum-Bold.woff2",
		},
		{
			weight: "800",
			style: "normal",
			path: "../assets/fonts/Peyda/woff2/PeydaWebFaNum-ExtraBold.woff2",
		},
		{
			weight: "900",
			style: "normal",
			path: "../assets/fonts/Peyda/woff2/PeydaWebFaNum-Black.woff2",
		},
	],
	variable: "--font-peyda",
});

const iranYekanX = localFont({
	src: [
		{
			weight: "normal",
			style: "normal",
			path: "../assets/fonts/IRANYekanX/IRANYekanX-Regular.woff",
		},
		{
			weight: "bold",
			style: "normal",
			path: "../assets/fonts/IRANYekanX/IRANYekanX-Bold.woff",
		},
	],
	variable: "--font-iran-yekan-x",
});

export async function generateMetadata(): Promise<Metadata> {
	const locale = await getLocale();
	const ogLocale = locale === "fa" ? "fa_IR" : "en_US";
	const t = await getTranslations("Pages.RootPage.layout");

	return {
		applicationName: "Pouria Darandi",
		metadataBase: new URL("https://pouria-drd.ir"),
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
		authors: [
			{
				name: "Pouria Darandi",
				url: "https://pouria-drd.ir",
			},
		],
		openGraph: {
			locale: ogLocale,
			type: "website",
			siteName: "Pouria DRD",
			url: "https://pouria-drd.ir",
			title: {
				default: t("title"),
				template: `%s | ${t("title")}`,
			},
			description: t("description"),
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
		},
		alternates: {
			canonical: "https://pouria-drd.ir",
		},
		robots: {
			index: true,
			follow: true,
		},
		// Structured Data (JSON-LD) for SEO
		other: {
			"ld+json": JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Person",
				name: "Pouria Darandi",
				url: "https://pouria-drd.ir",
				jobTitle: "Full-Stack Developer",
				description:
					"Full-Stack Developer with expertise in React, Next.js, Vue.js, Django, Django REST, and Unity. Explore my projects and skills.",
				image: "https://pouria-drd.ir/assets/images/profile.jpg",
				sameAs: [
					"https://github.com/pouria-drd/",
					"https://twitter.com/pouria_drd/",
					"https://t.me/pouria_drd/",
					"https://www.instagram.com/pouria.drd/",
				],
				contactPoint: {
					"@type": "ContactPoint",
					email: "poruiadrd@gmail.com",
					contactType: "customer support",
					availableLanguage: ["Persian", "English"],
				},
			}),
		},
	};
}

interface RootLayoutProps {
	children: React.ReactNode;
}

async function RootLayout({ children }: Readonly<RootLayoutProps>) {
	const locale = await getLocale();
	const dir = locale === "fa" ? "rtl" : "ltr";

	return (
		<html
			lang={locale}
			suppressHydrationWarning
			dir={dir}
			data-scroll-behavior="smooth">
			<body
				className={`${peyda.variable} ${iranYekanX.variable}
                    ${geistSans.variable} ${geistMono.variable} antialiased
                    flex flex-col min-h-dvh
                    ${
						locale === "fa"
							? "!font-iran-yekan-x ss02"
							: "!font-sans"
					} `}>
				<NextIntlClientProvider locale={locale}>
					<ThemeProvider attribute="class" defaultTheme="system">
						<Navigation />
						<Toaster position="top-center" />
						{children}
						<Footer />
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}

export default RootLayout;
