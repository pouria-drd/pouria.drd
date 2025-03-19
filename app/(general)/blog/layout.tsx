import { Fragment } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    applicationName: "Pouria Darandi | Blog",

    title: {
        default: "Blog",
        template: "%s | Blog",
    },

    description:
        "Explore articles on web development, full-stack programming, React, Next.js, Django, and the latest tech trends by Pouria Darandi.",

    keywords: [
        // English Keywords
        "Pouria Darandi Blog",
        "Web Development Blog",
        "Programming Articles",
        "Full-Stack Development",
        "Next.js Blog",
        "React Blog",
        "Django Blog",
        "Software Engineering",
        "Coding Tutorials",
        "Web App Development",
        "Tech Blog",
        "JavaScript Trends",
        "Frontend Development",
        "Backend Development",
        "Software Development",
        "Cloud Computing",
        "SEO for Developers",
        "Next.js SEO",
        "React SEO",
        "Django Tips",
        "Full Stack Developer Blog",
        "JavaScript Blog",
        "TypeScript Blog",
        "API Development",
        "DevOps",
        "Web Performance Optimization",
        "Cybersecurity",
        "Artificial Intelligence",
        "Machine Learning",

        // Persian Keywords
        "وبلاگ پوریا دارندی",
        "مقالات برنامه‌نویسی",
        "وبلاگ توسعه وب",
        "برنامه‌نویسی فول استک",
        "آموزش نکست جی‌اس",
        "آموزش ریکت",
        "آموزش جنگو",
        "نکات توسعه نرم‌افزار",
        "توسعه دهنده وب",
        "نکات توسعه فرانت‌اند",
        "نکات توسعه بک‌اند",
        "سئو برای برنامه‌نویسان",
        "بهینه‌سازی وب‌سایت",
        "برنامه‌نویسی جاوااسکریپت",
        "آموزش تایپ‌اسکریپت",
        "آموزش برنامه‌نویسی وب",
        "آموزش API نویسی",
        "امنیت سایبری",
        "هوش مصنوعی",
        "یادگیری ماشین",
        "برنامه نویسی فول استک",
        "فریمورک‌های جاوااسکریپت",
        "پرفورمنس و بهینه‌سازی وب",
        "توسعه وب با نکست جی اس",
    ],

    creator: "Pouria Darandi",
    publisher: "Pouria Darandi",

    openGraph: {
        type: "website",
        siteName: "Pouria DRD Blog",
        url: "https://pouria-drd.ir/blog",
        title: "Blog | Pouria Darandi",
        description:
            "Explore articles on web development, full-stack programming, React, Next.js, Django, and the latest tech trends by Pouria Darandi.",

        images: [
            {
                url: "https://pouria-drd.ir/images/og/blog-opengraph-image.png",
                width: 600,
                height: 315,
            },
        ],
    },

    twitter: {
        creator: "@pouriaDRD",
        creatorId: "@pouriaDRD",
        card: "summary_large_image",
        site: "@pouriaDRD",
        title: "Blog | Pouria Darandi",
        description:
            "Explore articles on web development, full-stack programming, React, Next.js, Django, and the latest tech trends by Pouria Darandi.",

        images: [
            {
                url: "https://pouria-drd.ir/images/tw/blog-twitter-image.png",
                width: 600,
                height: 315,
            },
        ],
    },

    alternates: {
        canonical: "https://pouria-drd.ir/blog",
    },

    robots: {
        index: true,
        follow: true,
    },
};

interface BlogLayoutProps {
    children: React.ReactNode;
}

function BlogLayout({ children }: BlogLayoutProps) {
    return <Fragment>{children}</Fragment>;
}

export default BlogLayout;
