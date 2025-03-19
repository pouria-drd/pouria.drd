import { Fragment } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    applicationName: "Pouria Darandi | Projects",
    metadataBase: new URL("https://pouria-drd.ir/projects"),

    title: {
        default: "Projects",
        template: "%s | Projects",
    },

    description:
        "Explore a collection of professional web development projects by Pouria Darandi, featuring full-stack applications, Next.js, React, Django, and modern software engineering solutions.",

    keywords: [
        // English Keywords
        "Pouria Darandi Projects",
        "Web Development Projects",
        "Full-Stack Development",
        "Next.js Projects",
        "React Projects",
        "Django Projects",
        "Software Development Portfolio",
        "Frontend Development Projects",
        "Backend Development Projects",
        "JavaScript Projects",
        "TypeScript Projects",
        "Open Source Contributions",
        "Freelance Web Development",
        "Cloud Computing Projects",
        "REST API Development",
        "GraphQL Projects",
        "SEO Optimization Projects",
        "Mobile App Development",
        "Machine Learning Projects",
        "Cybersecurity Projects",
        "Game Development",
        "Unity Projects",
        "Software Engineering Portfolio",
        "E-commerce Website Development",
        "Portfolio Website",
        "Full-Stack Portfolio",
        "Freelance Developer Portfolio",

        // Persian Keywords
        "پروژه‌های پوریا دارندی",
        "پروژه‌های توسعه وب",
        "پروژه‌های برنامه‌نویسی",
        "پروژه‌های فول استک",
        "پروژه‌های نکست جی‌اس",
        "پروژه‌های ریکت",
        "پروژه‌های جنگو",
        "پورتفولیو برنامه‌نویسی",
        "پروژه‌های فرانت‌اند",
        "پروژه‌های بک‌اند",
        "پروژه‌های جاوااسکریپت",
        "پروژه‌های تایپ‌اسکریپت",
        "مشارکت در متن باز",
        "توسعه‌دهنده فریلنس",
        "پروژه‌های محاسبات ابری",
        "توسعه REST API",
        "پروژه‌های GraphQL",
        "پروژه‌های بهینه‌سازی سئو",
        "توسعه اپلیکیشن موبایل",
        "پروژه‌های هوش مصنوعی",
        "پروژه‌های امنیت سایبری",
        "توسعه بازی",
        "پروژه‌های یونیتی",
        "پورتفولیو توسعه نرم‌افزار",
        "ساخت سایت فروشگاهی",
        "پورتفولیو فریلنسری",
    ],

    creator: "Pouria Darandi",
    publisher: "Pouria Darandi",

    openGraph: {
        type: "website",
        siteName: "Pouria DRD Projects",
        url: "https://pouria-drd.ir/projects",
        title: "Projects | Pouria Darandi",
        description:
            "Explore a collection of professional web development projects by Pouria Darandi, featuring full-stack applications, Next.js, React, Django, and modern software engineering solutions.",
    },

    twitter: {
        creator: "@pouriaDRD",
        creatorId: "@pouriaDRD",
        card: "summary_large_image",
        site: "@pouriaDRD",
        title: "Projects | Pouria Darandi",
        description:
            "Explore a collection of professional web development projects by Pouria Darandi, featuring full-stack applications, Next.js, React, Django, and modern software engineering solutions.",
    },

    alternates: {
        canonical: "https://pouria-drd.ir/projects",
    },

    robots: {
        index: true,
        follow: true,
    },

    // Structured Data (JSON-LD) for SEO
    other: {
        "ld+json": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Pouria Darandi Projects",
            url: "https://pouria-drd.ir/projects",
            description:
                "Explore a collection of professional web development projects by Pouria Darandi, featuring full-stack applications, Next.js, React, Django, and modern software engineering solutions.",
            creator: {
                "@type": "Person",
                name: "Pouria Darandi",
                url: "https://pouria-drd.ir",
            },
        }),
    },
};

interface ProjectsLayoutProps {
    children: React.ReactNode;
}

function ProjectsLayout({ children }: ProjectsLayoutProps) {
    return <Fragment>{children}</Fragment>;
}

export default ProjectsLayout;
