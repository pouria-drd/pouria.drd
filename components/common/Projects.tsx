"use client";

import { useLocale } from "next-intl";
import { SearchIcon } from "lucide-react";

import { LocaleType } from "@/types";
import { useProjects } from "@/hooks";
import { Input } from "@/components/ui";
import ProjectList from "./ProjectList";

function Projects() {
	const locale = useLocale() as LocaleType;
	const { filteredProjects, searchQuery, setSearchQuery } = useProjects();

	return (
		<div>
			<div className="relative flex items-center w-full max-w-full sm:max-w-lg mx-auto mb-16">
				<Input
					type="text"
					value={searchQuery}
					placeholder={"Next js, Django and ..."}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="drd-input drd-input-normal"
				/>
				<SearchIcon
					className={`absolute text-muted-foreground
                                    ${locale === "fa" ? "left-2" : "right-2"}`}
				/>
			</div>
			<ProjectList filteredProjects={filteredProjects} />
		</div>
	);
}

export default Projects;
