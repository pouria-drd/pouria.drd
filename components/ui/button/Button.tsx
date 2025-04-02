"use client";

import { cn } from "@/utils";
import { Spinner } from "../spinner";

interface BaseButtonProps {
    isBusy?: boolean;
    fullWidth?: boolean;
    className?: string;
    outlined?: boolean;
    children?: React.ReactNode;
    btnType?: "primary" | "dark" | "light";
}

interface ButtonProps
    extends BaseButtonProps,
        React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({
    isBusy = false,
    btnType = "primary",
    fullWidth = false,
    outlined = false,
    className,
    children,
    ...rest
}: ButtonProps) => {
    const baseStyles = `inline-flex items-center justify-center gap-2 
    focus:outline-none whitespace-nowrap disabled:pointer-events-none
    transition-colors text-sm rounded-md shadow px-4 py-2 h-9`;

    const filledStyles = {
        primary: `bg-drd-primary hover:bg-drd-primary/90 text-white disabled:opacity-50`,

        dark: `bg-zinc-700 hover:bg-zinc-700/90 text-white disabled:opacity-50`,

        light: `bg-zinc-100 hover:bg-zinc-200/90 text-zinc-800 disabled:opacity-50`,
    };

    const outlineStyles = {
        primary: `ring ring-drd-primary hover:ring-0 text-drd-primary hover:bg-drd-primary hover:text-white`,

        dark: `ring ring-zinc-700 hover:ring-0 text-zinc-800 hover:bg-zinc-700 hover:text-white`,

        light: `ring ring-zinc-200 hover:ring-0 text-zinc-800 hover:bg-zinc-100`,
    };

    const buttonType = outlined
        ? outlineStyles[btnType]
        : filledStyles[btnType];

    return (
        <button
            disabled={isBusy}
            className={cn(
                `${baseStyles} ${buttonType} ${
                    isBusy ? "cursor-not-allowed" : "cursor-pointer"
                } ${fullWidth ? "w-full" : "w-auto"}`,
                className
            )}
            {...(rest as ButtonProps)}>
            {isBusy ? (
                <Spinner borderSize="1.75" className="w-[21.5px] mx-auto" />
            ) : (
                children
            )}
        </button>
    );
};

export default Button;
