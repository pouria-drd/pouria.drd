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
            <PdIcon className="text-drd-primary-500" repeat={7500} />

            <CloseButton
                onClick={props.onCloseSidebar}
                className={`bg-drd-primary-75 hover:bg-drd-primary-100 transition-all cursor-pointer
                    text-drd-primary-500 rounded-lg p-1`}
            />
        </motion.div>
    );
};

export default SHeader;
