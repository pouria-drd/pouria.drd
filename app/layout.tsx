import "./assets/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer, Navigation } from "@/components/layouts";
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
    "Pouria Darandi",

    "React",
    "Unity",
    "Django",
    "Next.js",
    "Django REST",

    "Portfolio",
    "Programmer",

    "Full-Stack Developer",
    "Full Stack Developer",

    "Developer",
    "developer",
    "Web Developer",
    "Back End Developer",
    "Front End Developer",

    "iran",

    "drd",
    "pouria",
    "Darandi",
    "pouria drd",
    "pouria darandi",

    "freelance",
    "pouria freelance",

    "پوریا",
    "دارندی",
    "پوریا دارندی",

    "برنامه‌ نویس فول‌ استک",

    "ریکت",
    "جنگو",
    "یونیتی",
    "جنگو رست",
    "نکست‌ جی‌اس",

    "پروژه‌ نویس فول‌ استک",
    "فریلنس",
    "پوریا فریلنس",
];

export const metadata: Metadata = {
    applicationName: "Pouria Darandi",

    metadataBase: new URL("https://pouria-drd.ir"),

    title: {
        default: "Pouria DRD",
        template: "Pouria DRD | %s",
    },

    description:
        "Pouria Darandi, React, Next js, Vue js, Django, Django REST and Unity Developer",

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
};

interface RootLayoutProps {
    children: React.ReactNode;
}

function RootLayout(props: Readonly<RootLayoutProps>) {
    return (
        <html lang="fa-IR">
            <body
                className={`${peyda.variable} ${geistSans.variable} ${geistMono.variable}
                flex flex-col min-h-svh antialiased`}>
                <Navigation />
                <main className="grow app-px">{props.children}</main>
                <Footer />
            </body>
        </html>
    );
}

export default RootLayout;
