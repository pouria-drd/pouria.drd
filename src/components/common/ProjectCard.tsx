"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Code, EyeIcon } from "lucide-react";
import {
	AspectRatio,
	Badge,
	Card,
	CardHeader,
	CardContent,
	CardTitle,
} from "@/components/ui";

interface ProjectCardProps {
	project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	const t = useTranslations("Projects");

	return (
		<Card className="p-0">
			{/* Image */}
			<CardHeader className="p-0">
				<AspectRatio ratio={16 / 9}>
					<Image
						priority
						quality={20}
						width={1920}
						height={1080}
						loading="eager"
						src={project.image}
						alt={t(`${project.id}.title`)}
						className="object-cover w-full h-full transition-transform rounded-t-2xl"
					/>
				</AspectRatio>
			</CardHeader>

			{/* Content */}
			<CardContent className="pt-4 pb-5 px-5">
				<div className="flex items-center justify-between">
					<CardTitle className="text-lg font-semibold">
						{t(`${project.id}.title`)}
					</CardTitle>

					<div className="flex items-center gap-2.5">
						{project.repoLink && (
							<div className="flex items-center text-center gap-1">
								<Code className="w-4 h-4 text-primary" />
								<Link
									href={project.repoLink}
									target="_blank"
									rel="noopener noreferrer"
									className="text-xs hover:underline">
									{t(`${project.id}.sourceCode`)}
								</Link>
							</div>
						)}

						<div className="flex items-center text-center gap-1">
							<EyeIcon className="w-4 h-4 text-primary" />
							<Link
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="text-xs hover:underline">
								{t(`${project.id}.preview`)}
							</Link>
						</div>
					</div>
				</div>

				<p className="text-sm text-muted-foreground mt-2 line-clamp-3 text-justify">
					{t(`${project.id}.description`)}
				</p>

				<div className="mt-4 flex flex-wrap gap-2">
					{project.techStack.map((tech) => (
						<Badge
							key={tech}
							variant="ghost"
							className="font-mono text-xs">
							{tech}
						</Badge>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

export default ProjectCard;
