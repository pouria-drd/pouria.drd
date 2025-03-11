"use client";

import { cn } from "@/utils";

interface NormalInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    uniqueId: string;
    error?: string | string[];
    dir?: "ltr" | "rtl"; // Add 'dir' prop to handle direction
}

const Input = (props: NormalInputProps) => {
    const {
        uniqueId,
        label,
        error,
        className,
        dir = "ltr",
        ...inputProps
    } = props;

    return (
        <div
            className={`flex flex-col gap-px w-full relative ${
                dir === "rtl" ? "text-right" : "text-left"
            }`}>
            {label && (
                <label
                    htmlFor={uniqueId}
                    className={cn(
                        `text-sm px-1
                        ${dir === "rtl" ? "text-right" : "text-left"}
                        ${error ? `text-red-500` : `text-drd-neutral-700`}
                        `
                    )}>
                    {label}
                </label>
            )}
            <input
                {...inputProps} // Spread the other props but exclude uniqueId
                id={uniqueId} // Explicitly set the id to uniqueId
                dir={dir} // Set the text direction of the input
                className={cn(
                    `peer drd-input
                    ${error ? `drd-input-error` : `drd-input-normal`}`,
                    className
                )}
            />
            {error && (
                <span className={`text-xs text-red-500 px-1`}>{error}</span>
            )}
        </div>
    );
};

export default Input;
