"use client";

import { Button } from "@/components/ui";
import { SquaresIcon } from "@/components/icons";

interface SidebarButtonProps {
    onClick?: () => void;
}

const SidebarButton = (props: SidebarButtonProps) => {
    return (
        <Button
            size={"icon"}
            variant={"outline"}
            onClick={props.onClick}
            className="text-primary hover:text-primary p-0
            flex items-center justify-center gap-1 sm:hidden">
            <SquaresIcon className="size-6" />
        </Button>
    );
};

export default SidebarButton;
