import type { Metadata } from "next";
import { Footer, Navigation } from "@/components/layouts";
import { ToastProvider } from "@/context/ToastContext";

const keywords: string[] = [
    // English Keywords
    "Pouria Darandi",
    "React",
    "Next.js",
    "Vue.js",
    "Django",
    "Django REST",
    "Unity",
    "Programmer",
    "Full-Stack Developer",
    "Full Stack Developer",
    "Web Developer",
    "Front-End Developer",
    "Back-End Developer",
    "Software Engineer",
    "freelance",
    "Pouria freelance",
    "portfolio",
    "developer",
    "Iran",
    "drd",

    // Persian Keywords
    "پوریا",
    "دارندی",
    "پوریا دارندی",
    "برنامه‌نویس",
    "برنامه‌نویس فول استک",
    "توسعه دهنده",
    "توسعه دهنده وب",
    "برنامه نویس جنگو",
    "برنامه نویس نکست جی اس",
    "یونیتی",
    "ریکت",
    "جنگو",
    "جنگو رست",
    "نکست جی اس",
    "پورتفولیو",
    "فریلنس",
];

export const metadata: Metadata = {
    applicationName: "Pouria Darandi",

    metadataBase: new URL("https://pouria-drd.ir"),

    title: {
        default: "Pouria DRD",
        template: "Pouria DRD | %s",
    },

    description:
        "Pouria Darandi is a skilled Full-Stack Developer specializing in React, Next.js, Vue.js, Django, Django REST, and Unity.",

    keywords: keywords,

    creator: "Pouria Darandi",
    publisher: "Pouria Darandi",

    authors: [
        {
            name: "Pouria Darandi",
            url: "https://pouria-drd.ir",
        },
    ],

    openGraph: {
        type: "website",
        siteName: "Pouria DRD",
        url: "https://pouria-drd.ir",
        title: "Pouria Darandi | Programmer",
        description:
            "Pouria Darandi, React, Next js, Vue js, Django, Django REST and Unity Developer",
    },

    twitter: {
        creator: "@pouriaDRD",
        creatorId: "@pouriaDRD",
        card: "summary_large_image",
        site: "https://pouria-drd.ir",
        title: "Pouria Darandi | Programmer",
        description:
            "Pouria Darandi, React, Next js, Vue js, Django, Django REST and Unity Developer",
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
            sameAs: [
                "https://github.com/pouria-drd/",
                "https://twitter.com/pouria_drd/",
                "https://t.me/pouria_drd/",
                "https://www.instagram.com/pouria.drd?igsh=OTdmZndkajBhbzF2&utm_source=qr/",
            ],
        }),
    },
};

interface RootLayoutProps {
    children: React.ReactNode;
}

function GeneralLayout(props: Readonly<RootLayoutProps>) {
    return (
        <div className="flex flex-col min-h-dvh">
            <ToastProvider>
                <Navigation />
                <main className="grow app-px">{props.children}</main>
                <Footer />
            </ToastProvider>
        </div>
    );
}

export default GeneralLayout;
