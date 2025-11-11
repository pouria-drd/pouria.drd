"use client";

import { SearchIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { useProjects } from "@/hooks";
import { Input } from "@/components/ui";
import { GridShape, ProjectList } from "@/components/common";

function ProjectsPage() {
	const locale = useLocale();
	const t = useTranslations("Pages.ProjectsPage");
	const { filteredProjects, searchQuery, setSearchQuery } = useProjects();

	return (
		<main className="grow app-px flex flex-col items-center justify-center relative">
			<GridShape />

			<div className="py-12">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-3xl font-bold text-center">
						{t("title")}
					</h1>
					<p className="text-muted-foreground text-center mt-2">
						{t("description")}
					</p>

					<div className="mt-4 mb-12">
						<div className="relative flex items-center w-full max-w-full sm:max-w-lg mx-auto">
							<Input
								type="text"
								value={searchQuery}
								placeholder={t("searchPlaceholder")}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="drd-input drd-input-normal"
							/>
							<SearchIcon
								className={`absolute text-muted-foreground
                                    ${locale === "fa" ? "left-2" : "right-2"}`}
							/>
						</div>
					</div>

					<ProjectList filteredProjects={filteredProjects} />
				</div>
			</div>
		</main>
	);
}

export default ProjectsPage;
