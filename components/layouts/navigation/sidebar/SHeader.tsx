"use client";

import { motion } from "framer-motion";
import { PdIcon } from "@/components/icons";
import { CloseButton } from "@/components/ui";

interface SHeaderProps {
    side: "left" | "right";
    onCloseSidebar: () => void;
}

const SHeader = (props: SHeaderProps) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={`flex w-full ${
                props.side === "right" ? "flex-row-reverse" : "flex-row"
            } items-center justify-between`}>
            {/* Logo Animation */}
            <PdIcon className="text-drd-primary" repeat={7500} />

            <CloseButton
                onClick={props.onCloseSidebar}
                className={`bg-drd-primary-100 hover:bg-drd-primary-200
                    dark:bg-drd-neutral-950/50 dark:hover:bg-drd-neutral-950
                    transition-colors cursor-pointer text-drd-primary rounded-lg p-1`}
            />
        </motion.div>
    );
};

export default SHeader;
