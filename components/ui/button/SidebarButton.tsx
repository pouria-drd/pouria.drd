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
                `ring ring-drd-neutral-200 hover:ring-drd-primary-100 hover:bg-drd-primary-100
                transition-all text-drd-primary-500 cursor-pointer p-1 rounded-lg`,
                props.className
            )}>
            <SquaresIcon />
        </button>
    );
};

export default SidebarButton;
