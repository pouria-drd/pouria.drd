"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ExpandableTextProps {
    text: string;
}

const ExpandableText = (props: ExpandableTextProps) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="flex flex-col items-center">
            <motion.p
                className={`relative text-p-medium text-center leading-relaxed r2l max-w-2xl sm:hidden`}
                animate={{
                    height: expanded ? "auto" : "6.5rem",
                    opacity: expanded ? 1 : 0.7,
                    scaleY: expanded ? 1 : 0.98,
                }}
                initial={false}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    opacity: { duration: 0.3 },
                    scaleY: { duration: 0.4, ease: "easeOut" },
                }}
                style={{ overflow: "hidden" }}>
                {props.text}
            </motion.p>

            <p
                className={`relative text-p-medium text-center leading-relaxed r2l max-w-2xl hidden sm:block`}>
                {props.text}
            </p>

            <button
                className={`text-base sm:text-lg text-drd-primary-500 mt-2 cursor-pointer
                    transform transition-transform hover:scale-105 sm:hidden`}
                onClick={() => setExpanded(!expanded)}>
                {expanded ? "کمتر" : "بیشتر"}
            </button>
        </div>
    );
};

export default ExpandableText;
