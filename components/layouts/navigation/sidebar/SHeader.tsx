"use client";

import { CloseButton } from "@/components/ui";
import { PouriaLogo } from "@/components/icons";

interface SHeaderProps {
    side: "left" | "right";
    onCloseSidebar: () => void;
}

const SHeader = (props: SHeaderProps) => {
    return (
        <div
            className={`flex w-full
                ${props.side === "right" ? "flex-row-reverse" : "flex-row"}
                items-center justify-between`}>
            {/* Logo */}
            <div
                className={`flex 
            ${
                props.side === "right" ? "flex-row" : "flex-row-reverse"
            } items-center gap-1`}>
                <PouriaLogo />
            </div>
            <CloseButton
                onClick={props.onCloseSidebar}
                className={`bg-drd-neutral-100/50 hover:bg-drd-neutral-100/75 
                transition-all cursor-pointer rounded-lg p-1`}
            />
        </div>
    );
};

export default SHeader;
