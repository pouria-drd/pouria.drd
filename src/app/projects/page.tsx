"use client";

import { getProjects } from "@/data";
import { Input } from "@/components/ui";
import { SearchIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { ProjectCard } from "@/components/common";
import { useLocale, useTranslations } from "next-intl";

function ProjectsPage() {
    const locale = useLocale();
    const tPage = useTranslations("Pages.ProjectsPage");
    const tProjects = useTranslations("Projects");
    const [searchQuery, setSearchQuery] = useState("");
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const data = getProjects(tProjects);
        setProjects(data);
    }, [tProjects]);

    const filteredProjects = projects.filter((project) => {
        const query = searchQuery.toLowerCase();
        return (
            project.title.toLowerCase().includes(query) ||
            project.techStack.some((tech) => tech.toLowerCase().includes(query))
        );
    });

    return (
        <main className="grow app-px flex flex-col items-center justify-center">
            <div className="py-12">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-center">
                        {tPage("title")}
                    </h1>
                    <p className="text-muted-foreground text-center mt-2">
                        {tPage("description")}
                    </p>

                    <div className="mt-4 mb-12">
                        <div className="relative flex items-center w-full max-w-full sm:max-w-lg mx-auto">
                            <Input
                                type="text"
                                value={searchQuery}
                                placeholder={tPage("searchPlaceholder")}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="drd-input drd-input-normal"
                            />
                            <SearchIcon
                                className={`absolute text-muted-foreground
                                    ${locale === "fa" ? "left-2" : "right-2"}`}
                            />
                        </div>
                    </div>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {filteredProjects.length === 0 ? (
                            <p className="text-center">{tPage("noResults")}</p>
                        ) : (
                            filteredProjects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProjectsPage;
