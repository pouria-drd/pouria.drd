import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("Pages.FarsifyPage.layout");

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
            canonical: "https://pouria-drd.ir/farsify",
        },
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            type: "website",
            siteName: "Pouria DRD Farsify",
            url: "https://pouria-drd.ir/farsify",

            title: {
                default: t("title"),
                template: `%s | ${t("title")}`,
            },

            description: t("description"),

            images: [
                {
                    width: 600,
                    height: 315,
                    alt: "Pouria DRD Farsify",
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
                    alt: "Pouria DRD Farsify",
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
                name: "Pouria Darandi Farsify",
                url: "https://pouria-drd.ir/farsify",
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

interface FarsifyLayoutProps {
    children: React.ReactNode;
}

function FarsifyLayout({ children }: FarsifyLayoutProps) {
    return <>{children}</>;
}

export default FarsifyLayout;
