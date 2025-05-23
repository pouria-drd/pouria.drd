import { cn } from "@/utils";
import Typewriter from "./Typewriter";

interface SkillsWriterProps {
    skills: string[];
    className?: string;
}

const SkillsWriter = (props: SkillsWriterProps) => {
    return (
        <div
            className={cn(
                `transition-all text-drd-primary text-2xl sm:text-3xl`,
                props.className
            )}>
            <Typewriter texts={props.skills} />
            <h5 className="inline-block ml-2 text-drd-neutral-950 dark:text-drd-neutral-300">
                Developer
            </h5>
        </div>
    );
};

export default SkillsWriter;
