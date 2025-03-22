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

export const metadata: Metadata = {
    applicationName: "Pouria Darandi",

    metadataBase: new URL("https://pouria-drd.ir"),

    title: {
        default: "Pouria Darandi",
        template: "%s | Pouria Darandi",
    },

    description:
        "Pouria Darandi is a Full-Stack Developer specializing in React, Next.js, Vue.js, Django, Django REST, and Unity. Explore my portfolio, projects, and expertise in web and software development.",

    keywords: [
        // General Keywords
        "Pouria Darandi",
        "پوریا دارندی",
        "pouria drd",
        "پوریا drd",
        "Darandi",
        "دارندی",

        // Development & Tech Skills
        "Full-Stack Developer",
        "Full Stack Developer",
        "Web Developer",
        "Front-End Developer",
        "Back-End Developer",
        "Software Engineer",
        "Programmer",
        "Django Developer",
        "React Developer",
        "Next.js Developer",
        "Vue.js Developer",
        "Django REST",
        "REST API",
        "Next.js",
        "Vue.js",
        "React",
        "Django",
        "Unity",

        // Freelance & Portfolio
        "Portfolio",
        "Freelance Developer",
        "Hire Developer",
        "Freelancer",
        "Remote Developer",
        "Custom Web Development",
        "Web Application Developer",

        // Persian Keywords
        "برنامه نویس",
        "توسعه دهنده وب",
        "برنامه نویس فول استک",
        "برنامه نویس فرانت اند",
        "برنامه نویس بک اند",
        "توسعه دهنده جنگو",
        "برنامه نویس نکست جی اس",
        "توسعه دهنده یونیتی",
        "پورتفولیو",
        "فریلنس",
    ],

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
        title: "Pouria Darandi | Full-Stack Developer & Programmer",
        description:
            "Pouria Darandi is a Full-Stack Developer specializing in React, Next.js, Vue.js, Django, Django REST, and Unity. Explore my portfolio, projects, and expertise in web and software development.",
    },

    twitter: {
        creator: "@pouriaDRD",
        creatorId: "@pouriaDRD",
        card: "summary_large_image",
        site: "@pouriaDRD",
        title: "Pouria Darandi | Full-Stack Developer & Programmer",
        description:
            "Explore my portfolio, projects, and expertise in React, Next.js, Vue.js, Django, and Unity development.",
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
