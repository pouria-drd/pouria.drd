"use client";

import { cn } from "@/utils";
import { XMarkIcon } from "@/components/icons";

interface CloseButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const CloseButton = (props: CloseButtonProps) => {
    return (
        <button
            {...props}
            className={cn("text-drd-neutral-500", props.className)}>
            <XMarkIcon />
        </button>
    );
};

export default CloseButton;
