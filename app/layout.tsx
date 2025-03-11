import "./assets/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";

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
            path: "./assets/fonts/Peyda/woff2/PeydaWebFaNum-Thin.woff2",
        },
        {
            weight: "200",
            style: "normal",
            path: "./assets/fonts/Peyda/woff2/PeydaWebFaNum-ExtraLight.woff2",
        },
        {
            weight: "300",
            style: "normal",
            path: "./assets/fonts/Peyda/woff2/PeydaWebFaNum-Light.woff2",
        },
        {
            weight: "400",
            style: "normal",
            path: "./assets/fonts/Peyda/woff2/PeydaWebFaNum-Regular.woff2",
        },
        {
            weight: "500",
            style: "normal",
            path: "./assets/fonts/Peyda/woff2/PeydaWebFaNum-Medium.woff2",
        },
        {
            weight: "600",
            style: "normal",
            path: "./assets/fonts/Peyda/woff2/PeydaWebFaNum-SemiBold.woff2",
        },
        {
            weight: "700",
            style: "normal",
            path: "./assets/fonts/Peyda/woff2/PeydaWebFaNum-Bold.woff2",
        },
        {
            weight: "800",
            style: "normal",
            path: "./assets/fonts/Peyda/woff2/PeydaWebFaNum-ExtraBold.woff2",
        },
        {
            weight: "900",
            style: "normal",
            path: "./assets/fonts/Peyda/woff2/PeydaWebFaNum-Black.woff2",
        },
    ],
    variable: "--font-peyda",
});

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
            "Pouria Darandi is a skilled Full-Stack Developer specializing in React, Next.js, Vue.js, Django, Django REST, and Unity.",
    },

    twitter: {
        creator: "@pouriaDRD",
        creatorId: "@pouriaDRD",
        card: "summary_large_image",
        site: "https://pouria-drd.ir",
        title: "Pouria Darandi | Programmer",
        description:
            "Pouria Darandi is a skilled Full-Stack Developer specializing in React, Next.js, Vue.js, Django, Django REST, and Unity.",
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

function RootLayout(props: Readonly<RootLayoutProps>) {
    return (
        <html lang="fa-IR">
            <body
                className={`${peyda.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
                {props.children}
            </body>
        </html>
    );
}

export default RootLayout;
