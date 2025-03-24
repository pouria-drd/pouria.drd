"use client";

import { useState } from "react";
import { projects } from "@/data";
import { SearchIcon } from "@/components/icons";
import { ProjectCard } from "@/components/shared";

function ProjectsPage() {
    const [searchQuery, setSearchQuery] = useState("");

    // Filter projects based on the search query (title and tech stack)
    const filteredProjects = projects.filter((project) => {
        const query = searchQuery.toLowerCase();
        return (
            project.title.toLowerCase().includes(query) ||
            project.techStack.some((tech) => tech.toLowerCase().includes(query))
        );
    });

    return (
        <div className="min-h-dvh py-4 sm:py-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-drd-primary-900">
                    پروژه‌های من
                </h1>
                <p className="text-center text-drd-neutral-600 mt-2 r2l">
                    جدید ترین پروژه هایی که انجام دادم یا درحال توسعه اونها
                    هستم.
                </p>

                {/* Search Input */}
                <div className="mt-8 mb-6">
                    <div className="relative flex items-center w-full max-w-full sm:max-w-lg mx-auto">
                        <input
                            type="text"
                            value={searchQuery}
                            placeholder="بر اساس اسم یا تکنولوژی: بانکت، React"
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="drd-input drd-input-normal r2l"
                        />
                        <SearchIcon className="absolute left-2 text-drd-neutral-500" />
                    </div>
                </div>

                {/* Display filtered projects */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {filteredProjects.length === 0 ? (
                        <p className="text-center text-drd-neutral-500 sm:col-cols-2 md:col-span-3 r2l">
                            هیچ پروژه‌ای پیدا نشد.
                        </p>
                    ) : (
                        filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;
