"use client";

import { cn } from "@/utils";
import Typewriter from "./Typewriter";
import { useLocale, useTranslations } from "next-intl";

interface SkillsWriterProps {
    skills: string[];
    className?: string;
}

const SkillsWriter = (props: SkillsWriterProps) => {
    const locale = useLocale();
    const t = useTranslations("Components.SkillsWriter");

    return (
        <div
            className={cn(
                `flex ${locale === "fa" ? "flex-row-reverse" : ""}
                inset-ring-accent gap-2 transition-all text-2xl sm:text-3xl`,
                props.className
            )}>
            <Typewriter className="text-primary" texts={props.skills} />
            <h5 className="inline-block">{t("text")}</h5>
        </div>
    );
};

export default SkillsWriter;
