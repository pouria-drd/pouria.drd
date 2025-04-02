"use client";

import { cn } from "@/utils";

interface TextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    uniqueId: string;
    error?: string | string[];
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
            className={cn(
                `flex flex-col gap-0.5 w-full relative ${
                    dir === "rtl" ? "text-right" : "text-left"
                }`,
                className
            )}>
            <textarea
                {...textareaProps} // Spread the other props but exclude uniqueId
                id={uniqueId} // Explicitly set the id to uniqueId
                dir={dir} // Set the text direction of the textarea
                className={`peer drd-textarea
                    ${error ? `drd-textarea-error` : `drd-textarea-normal`}`}
            />

            {label && (
                <label
                    htmlFor={uniqueId}
                    className={`absolute -top-3 -translate-y-1/2 text-xs 
                    
                    ${dir === "rtl" ? " right-0" : "left-0"}

                    ${
                        error
                            ? `text-red-500`
                            : `text-drd-neutral-500
                            peer-focus:text-drd-primary-600
                            peer-disabled:text-drd-neutral-400`
                    }`}>
                    {label}
                </label>
            )}

            {error && (
                <span className={`text-[11px] text-red-500 mt-0.5`}>
                    {error}
                </span>
            )}
        </div>
    );
};

export default TextArea;
