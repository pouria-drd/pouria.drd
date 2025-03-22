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
                "transition-all text-drd-primary-500 text-2xl sm:text-3xl",
                props.className
            )}>
            <h5 className="inline-block ml-2 text-drd-neutral-950">
                توسعه دهنده
            </h5>
            <Typewriter texts={props.skills} />
        </div>
    );
};

export default SkillsWriter;
