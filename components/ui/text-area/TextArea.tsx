"use client";

import { cn } from "@/utils";

interface TextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    uniqueId: string;
    error?: string;
    dir?: "ltr" | "rtl"; // Add 'dir' prop to handle direction
}

const TextArea = (props: TextAreaProps) => {
    const {
        uniqueId,
        label,
        error,
        className,
        dir = "ltr",
        ...textareaProps
    } = props;

    return (
        <div
            className={`flex flex-col gap-1 w-full relative ${
                dir === "rtl" ? "text-right" : "text-left"
            }`}>
            {label && (
                <label
                    htmlFor={uniqueId}
                    className={cn(
                        `text-sm px-1
                        ${dir === "rtl" ? "text-right" : "text-left"}
                        ${error ? `text-red-500` : `text-drd-neutral-700`}`
                    )}>
                    {label}
                </label>
            )}
            <textarea
                {...textareaProps} // Spread the other props but exclude uniqueId
                id={uniqueId} // Explicitly set the id to uniqueId
                dir={dir} // Set the text direction of the textarea
                className={cn(
                    `peer drd-textarea
                    ${error ? `drd-textarea-error` : `drd-textarea-normal`}`,
                    className
                )}
            />
            {error && (
                <span className={`text-xs text-red-500 px-1`}>{error}</span>
            )}
        </div>
    );
};

export default TextArea;
