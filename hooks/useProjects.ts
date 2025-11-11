"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { getProjects } from "@/constants";

function useProjects() {
	const t = useTranslations("Projects");
	const [searchQuery, setSearchQuery] = useState("");

	const projects = getProjects(t);

	const filteredProjects = projects.filter((project) => {
		const query = searchQuery.toLowerCase();
		return (
			project.title.toLowerCase().includes(query) ||
			project.techStack.some((tech) => tech.toLowerCase().includes(query))
		);
	});

	return {
		projects,
		filteredProjects,
		searchQuery,
		setSearchQuery,
	};
}

export default useProjects;
