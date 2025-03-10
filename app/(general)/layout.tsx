import type { Metadata } from "next";
import { Footer, Navigation } from "@/components/layouts";

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

function GeneralLayout(props: Readonly<RootLayoutProps>) {
    return (
        <div className="flex flex-col min-h-dvh">
            <Navigation />
            <main className="grow app-px">{props.children}</main>
            <Footer />
        </div>
    );
}

export default GeneralLayout;
