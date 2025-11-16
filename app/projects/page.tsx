import { getTranslations } from "next-intl/server";
import { GridShape, Projects } from "@/components/common";

async function ProjectsPage() {
	const t = await getTranslations("Pages.ProjectsPage");

	return (
		<main className="grow app-px flex flex-col items-center justify-center relative gap-4 py-12">
			<GridShape />

			<div className="max-w-6xl">
				<h1 className="text-3xl font-bold text-center">{t("title")}</h1>
				<p className="text-muted-foreground text-center mt-2">
					{t("description")}
				</p>
			</div>

			<Projects />
		</main>
	);
}

export default ProjectsPage;
