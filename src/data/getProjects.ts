function getProjects(t: (key: string) => string): Project[] {
    return [
        {
            id: 1,
            title: t("1.title"),
            description: t("1.description"),
            link: "https://t.me/arz_watch_bot",
            techStack: ["Python", "Selenium", "Django Rest Framework"],
            image: "/images/projects/arz-watch-preview.png",
            repoLink: "https://github.com/pouria-drd/arz_watch_api",
        },
        {
            id: 2,
            title: t("2.title"),
            description: t("2.description"),
            link: "https://banket.app",
            techStack: ["Next.js", "Tailwind"],
            image: "/images/projects/banket-preview.png",
        },

        {
            id: 3,
            title: t("3.title"),
            description: t("3.description"),
            image: "/images/projects/bazargan-preview.png",
            link: "https://bazarganinvestment.com/",
            repoLink: "https://github.com/pouria-drd/bazargan",
            techStack: ["Django Rest Framework", "Next.js", "Tailwind"],
        },
        {
            id: 4,
            title: t("4.title"),
            description: t("4.description"),
            image: "/images/projects/zoom-clone-preview.png",
            link: "https://github.com/pouria-drd/zoom-clone-next-14",
            repoLink: "https://github.com/pouria-drd/zoom-clone-next-14",
            techStack: ["Next.js", "Tailwind"],
        },
        {
            id: 5,
            title: t("5.title"),
            description: t("5.description"),
            image: "/images/projects/cafevand-preview.png",
            link: "https://cafevand.ir",
            repoLink: "https://github.com/pouria-drd/cafe-vand",
            techStack: ["Django Rest Framework", "Next.js", "Tailwind"],
        },
        {
            id: 6,
            title: t("6.title"),
            description: t("6.description"),
            image: "/images/projects/vkasb-preview.png",
            link: "https://vkasb.ir",
            repoLink: "https://github.com/pouria-drd/varna-kasb",
            techStack: ["Django Rest Framework", "Next.js", "Tailwind"],
        },
        {
            id: 7,
            title: t("7.title"),
            description: t("7.description"),
            image: "/images/projects/sitechoob-preview.png",
            link: "https://sitechoob.ir/",
            techStack: ["React", "Tailwind"],
        },
    ];
}

export default getProjects;
