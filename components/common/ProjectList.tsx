"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Code, EyeIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge, Card, CardContent, CardTitle } from "@/components/ui";

export type Project = {
	id: number;
	link: string;
	image: string;
	title: string;
	repoLink?: string;
	techStack: string[];
	description: string;
};

interface ProjectListProps {
	className?: string;
	filteredProjects: Project[];
}

export default function ProjectList({
	filteredProjects,
	className,
}: ProjectListProps) {
	if (!filteredProjects.length) {
		return (
			<p className="text-center text-muted-foreground mt-8">Not found</p>
		);
	}

	return (
		<div
			className={cn(
				"mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8",
				className,
			)}>
			{filteredProjects.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	);
}

interface ProjectCardProps {
	project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
	const t = useTranslations("Projects");

	return (
		<Card className="flex flex-col md:flex-row group hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden p-0 gap-2">
			{/* Image Left */}
			<div className="shrink-0 w-full md:w-1/3 aspect-video relative overflow-hidden rounded-l-2xl">
				<Image
					fill
					sizes="512"
					loading="eager"
					src={project.image}
					alt={t(`${project.id}.title`)}
					className="object-cover size-full transition-transform duration-300 group-hover:scale-105"
				/>
			</div>

			{/* Content Right */}
			<CardContent className="flex flex-col justify-between p-4 md:w-2/3">
				<div>
					<CardTitle className="text-lg font-semibold">
						{t(`${project.id}.title`)}
					</CardTitle>
					<p className="text-sm text-muted-foreground mt-2 line-clamp-4 text-justify">
						{t(`${project.id}.description`)}
					</p>

					{/* Tech Stack */}
					<div className="mt-4 flex flex-wrap gap-2">
						{project.techStack.map((tech) => (
							<Badge
								key={tech}
								variant="secondary"
								className="font-mono text-xs px-2 py-1">
								{tech}
							</Badge>
						))}
					</div>
				</div>

				{/* Links */}
				<div className="mt-4 flex items-center gap-4">
					{project.repoLink && (
						<Link
							href={project.repoLink as "/"}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-sm text-primary hover:underline">
							<Code className="w-4 h-4" />
							{t(`${project.id}.sourceCode`)}
						</Link>
					)}
					<Link
						href={project.link as "/"}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1 text-sm text-primary hover:underline">
						<EyeIcon className="w-4 h-4" />
						{t(`${project.id}.preview`)}
					</Link>
				</div>
			</CardContent>
		</Card>
	);
}
