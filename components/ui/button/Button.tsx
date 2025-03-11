"use client";

import { cn } from "@/utils";
import Link from "next/link";
import { Spinner } from "../spinner";

interface BaseButtonProps {
    isBusy?: boolean;
    fullWidth?: boolean;
    className?: string;
    children?: React.ReactNode;
    btnType?: "primary" | "dark" | "light";
    outline?: boolean;
}

interface LinkProps
    extends BaseButtonProps,
        React.AnchorHTMLAttributes<HTMLAnchorElement> {}
interface ButtonProps
    extends BaseButtonProps,
        React.ButtonHTMLAttributes<HTMLButtonElement> {}
type Props = (LinkProps | ButtonProps) & { href?: string };

const Button = ({
    isBusy = false,
    btnType = "primary",
    fullWidth = false,
    outline = false,
    className,
    children,
    href,
    ...rest
}: Props) => {
    const baseStyles = `flex items-center justify-center
    transition-all text-base rounded px-6 h-9 min-h-9 min-w-24 cursor-pointer`;

    const outlineStyles = {
        primary: `border border-drd-primary-500 hover:border-none
        bg-transparent text-drd-primary-500 hover:text-white
        hover:bg-gradient-to-b hover:from-drd-primary-500 hover:to-drd-primary-700`,

        dark: `border border-zinc-800 hover:border-none
        bg-transparent text-zinc-800 hover:text-white
        hover:bg-gradient-to-b hover:from-zinc-600 hover:to-zinc-800`,

        light: `border border-zinc-300 hover:border-none
        bg-transparent text-zinc-700 hover:text-black hover:bg-zinc-100`,
    };

    const filledStyles = {
        primary: `bg-gradient-to-b from-drd-primary-500 to-drd-primary-700
        disabled:from-drd-primary-400 disabled:to-drd-primary-700
        hover:from-drd-primary-500 hover:to-drd-primary-800 text-drd-primary-50`,

        dark: `bg-gradient-to-b from-zinc-600 to-zinc-800
        disabled:from-zinc-600 disabled:to-zinc-800
        hover:from-zinc-700 hover:to-zinc-800 text-drd-primary-50`,

        light: `bg-zinc-100 hover:bg-zinc-200 disabled:hover:bg-zinc-100 text-zinc-700`,
    };

    const buttonType = outline ? outlineStyles[btnType] : filledStyles[btnType];

    if (href) {
        return (
            <Link
                href={href}
                className={cn(
                    `${baseStyles} ${buttonType} ${
                        isBusy ? "cursor-not-allowed" : "cursor-pointer"
                    } ${fullWidth ? "w-full" : "w-auto"}`,
                    className
                )}
                {...(rest as LinkProps)}>
                {isBusy ? (
                    <Spinner borderSize="1.75" className="w-[21.5px] mx-auto" />
                ) : (
                    children
                )}
            </Link>
        );
    }

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
