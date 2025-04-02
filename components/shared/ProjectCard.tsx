import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui";
import { ArrowTopRightOnSquareIcon } from "../icons";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div
            className="bg-drd-neutral-50 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 
            hover:shadow-2xl hover:outline hover:outline-drd-primary-500 hover:scale-105 transform hover:translate-y-[-5px]">
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
                    <div className="flex items-center justify-between text-drd-primary-900 r2l">
                        <h3 className="text-xl font-semibold">
                            {project.title}
                        </h3>
                        <span>
                            <ArrowTopRightOnSquareIcon />
                        </span>
                    </div>
                    <p className="text-drd-neutral-600 text-sm text-justify mt-2 line-clamp-3 r2l">
                        {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <Badge key={tech} badgeType="info">
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
                        className="text-drd-primary-600 hover:underline text-xs">
                        سورس کد
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
