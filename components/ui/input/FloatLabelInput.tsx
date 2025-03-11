"use client";

import { cn } from "@/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    uniqueId: string;
    error?: string;
    dir?: "ltr" | "rtl"; // Allows setting text direction (left-to-right or right-to-left)
}

const FloatLabelInput = ({
    uniqueId,
    label,
    error,
    className,
    dir = "ltr",
    ...inputProps
}: InputProps) => {
    return (
        <div
            className={cn(
                "flex flex-col gap-1 w-full relative",
                dir === "rtl" ? "text-right" : "text-left"
            )}>
            {/* Input field */}
            <input
                {...inputProps} // Spread remaining input properties
                id={uniqueId} // Set unique ID for accessibility
                dir={dir} // Apply text direction
                className={cn(
                    `peer drd-float-input
                    ${
                        error
                            ? `drd-float-input-error`
                            : `drd-float-input-normal`
                    }`,
                    className
                )}
                placeholder=" " // Keeps the label floating
            />

            {/* Floating label */}
            {label && (
                <label
                    htmlFor={uniqueId}
                    className={cn(
                        `absolute px-1 text-xs transition-all
                        bg-white
                        
                        border-x
                        peer-placeholder-shown:border-transparent
                       
                        top-px -translate-y-1/2
                        
                        peer-placeholder-shown:top-1/2 
                        peer-placeholder-shown:text-xs
                        peer-placeholder-shown:text-drd-neutral-400
                        
                        peer-focus:top-px
                        peer-focus:text-xs
                        peer-focus:border-x
                        peer-focus:rounded-none

                        ${
                            error
                                ? `peer-placeholder-shown:top-[20px] border-red-200
                                peer-focus:border-red-600 text-red-400 peer-focus:text-red-600`
                                : `peer-focus:border-drd-primary
                                border-drd-primary-100 text-drd-primary-300 peer-focus:text-drd-primary-500`
                        }
                                
                        ${dir === "rtl" ? "right-2" : "left-2"}`
                    )}>
                    {label}
                </label>
            )}

            {/* Error message */}
            {error && (
                <span className={`text-xs text-red-500 px-1`}>{error}</span>
            )}
        </div>
    );
};

export default FloatLabelInput;
