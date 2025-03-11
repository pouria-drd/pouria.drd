import { Fragment } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Pouria Darandi | Get in Touch",

    description:
        "Want to contact Pouria Darandi? Here's how you can reach out for collaborations, inquiries, and more.",

    keywords:
        "contact Pouria Darandi, reach Pouria, get in touch with Pouria, Pouria Darandi contact details, connect with Pouria, تماس با پوریا دارندی, راه‌های ارتباطی پوریا دارندی, ارتباط با پوریا, تماس با پوریا",

    openGraph: {
        title: "Contact Pouria Darandi | Get in Touch",
        description:
            "Want to contact Pouria Darandi? Here's how you can reach out for collaborations, inquiries, and more.",
        url: "https://pouria-drd.ir/contact-me",
        siteName: "Pouria Darandi",
        type: "website",
        images: [
            {
                url: "https://pouria-drd.ir/images/opengraph-image",
                width: 1200,
                height: 630,
                alt: "Contact Pouria Darandi",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Contact Pouria Darandi | Get in Touch",
        description:
            "Want to contact Pouria Darandi? Here's how you can reach out for collaborations, inquiries, and more.",
        images: ["https://pouria-drd.ir/images/twitter-image.png"],
    },

    alternates: {
        canonical: "https://pouria-drd.ir/contact-me",
    },

    // Structured Data (JSON-LD) for SEO
    other: {
        "ld+json": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pouria Darandi",
            url: "https://pouria-drd.ir",
            jobTitle: "Full-Stack Developer",
            sameAs: [
                "https://github.com/pouria-drd/",
                "https://twitter.com/pouria_drd/",
                "https://t.me/pouria_drd/",
                "https://www.instagram.com/pouria.drd?igsh=OTdmZndkajBhbzF2&utm_source=qr/",
            ],
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
