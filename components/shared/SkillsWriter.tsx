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
                `transition-all text-drd-primary-500 text-2xl sm:text-3xl 
                bg-gray-200`,
                props.className
            )}>
            <Typewriter texts={props.skills} />
            <h5 className="inline-block ml-2 text-drd-neutral-950">
                Developer
            </h5>
        </div>
    );
};

export default SkillsWriter;
