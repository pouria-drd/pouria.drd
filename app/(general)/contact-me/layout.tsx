import { Fragment } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    applicationName: "Pouria Darandi | Contact Me",

    title: {
        default: "Contact Me",
        template: "%s | Contact",
    },

    description:
        "Want to connect with Pouria Darandi? Reach out for collaborations, inquiries, or project discussions. Get in touch via email or social media.",

    keywords: [
        // English Keywords
        "contact Pouria Darandi",
        "get in touch with Pouria Darandi",
        "reach Pouria Darandi",
        "Pouria Darandi contact info",
        "email Pouria Darandi",
        "message Pouria Darandi",
        "talk to Pouria Darandi",
        "how to contact Pouria Darandi",
        "inquire about a project",
        "developer contact",
        "business inquiry",
        "freelancer contact",
        "hire a developer",
        "software engineer contact",

        // Persian Keywords
        "تماس با پوریا دارندی",
        "ارتباط با پوریا دارندی",
        "راه‌های تماس با پوریا دارندی",
        "ایمیل پوریا دارندی",
        "پیام به پوریا دارندی",
        "ارتباط با توسعه دهنده",
        "درخواست همکاری",
        "پشتیبانی نرم‌افزار",
        "مشاوره برنامه‌نویسی",
        "همکاری در پروژه",
    ],

    openGraph: {
        title: "Contact Pouria Darandi",
        description:
            "Want to connect with Pouria Darandi? Reach out for collaborations, inquiries, or project discussions. Get in touch via email or social media.",
        url: "https://pouria-drd.ir/contact-me",
        siteName: "Pouria Darandi",
        type: "website",
        images: [
            {
                url: "https://pouria-drd.ir/images/og/contact-me-opengraph-image.png",
                width: 600,
                height: 315,
            },
            {
                url: "https://pouria-drd.ir/images/og/contact-me-opengraph-image2.png",
                width: 600,
                height: 315,
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Contact Pouria Darandi",
        description:
            "Want to connect with Pouria Darandi? Reach out for collaborations, inquiries, or project discussions. Get in touch via email or social media.",
        site: "@pouriaDRD",
        images: [
            {
                url: "https://pouria-drd.ir/images/tw/contact-me-twitter-image.png",
                width: 600,
                height: 315,
            },
            {
                url: "https://pouria-drd.ir/images/tw/contact-me-twitter-image2.png",
                width: 600,
                height: 315,
            },
        ],
    },

    alternates: {
        canonical: "https://pouria-drd.ir/contact-me",
    },

    robots: {
        index: true,
        follow: true,
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

interface ContactMeLayoutProps {
    children: React.ReactNode;
}

function ContactMeLayout({ children }: ContactMeLayoutProps) {
    return <Fragment>{children}</Fragment>;
}

export default ContactMeLayout;
