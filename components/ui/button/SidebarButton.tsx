"use client";

import { cn } from "@/utils";
import { SquaresIcon } from "@/components/icons";

interface SidebarButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const SidebarButton = (props: SidebarButtonProps) => {
    return (
        <button
            {...props}
            className={cn(
                `ring ring-drd-neutral-300 dark:ring-drd-neutral-950
                hover:ring-0 hover:bg-drd-primary-100 hover:dark:bg-drd-neutral-950
                text-drd-primary cursor-pointer p-1 rounded-lg`,
                props.className
            )}>
            <SquaresIcon />
        </button>
    );
};

export default SidebarButton;
