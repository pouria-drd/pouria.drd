"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui";
import { useTheme } from "next-themes";
import { ArrowTopRightOnSquareIcon } from "../icons";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { theme } = useTheme();

    return (
        <div className="bg-white dark:bg-drd-neutral-950 rounded-xl shadow-lg overflow-hidden">
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-48">
                    <Image
                        width={1920}
                        height={1080}
                        loading="lazy"
                        quality={100}
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full aspect-video"
                    />
                </div>
                <div className="p-4 mt-4">
                    <div className="flex items-center justify-between text-drd-primary-800 dark:text-drd-primary r2l">
                        <h3 className="text-xl font-semibold">
                            {project.title}
                        </h3>
                        <span>
                            <ArrowTopRightOnSquareIcon />
                        </span>
                    </div>
                    <p className="text-drd-neutral text-sm text-justify mt-2 line-clamp-3 r2l">
                        {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <Badge
                                key={tech}
                                badgeType={theme === "dark" ? "dark" : "info"}>
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            </Link>

            {/* Display the repository link if available */}
            {project.repoLink && (
                <div className="text-center pb-3">
                    <Link
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-drd-primary hover:underline text-xs">
                        سورس کد
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
