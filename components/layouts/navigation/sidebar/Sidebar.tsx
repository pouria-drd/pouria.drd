"use client";

import SHeader from "./SHeader";
import SLinkGroup from "./SLinksGroup";
import { useClickOutside } from "@/hooks";
import { AppVersion } from "@/components/ui";
import { AnimatePresence, motion, Variants } from "framer-motion";

interface SidebarProps {
    isOpen: boolean;
    onCloseSidebar: () => void;
    fullWidth?: boolean;
    side?: "left" | "right";
}

const Sidebar = (props: SidebarProps) => {
    const side = props.side || "right";

    // Attach the click-outside hook to the wrapper element
    const sidebarRef = useClickOutside<HTMLDivElement>(props.onCloseSidebar);

    const containerVariants: Variants = {
        initial: {
            x: props.side === "left" ? "-100%" : "100%",
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "ease",
                duration: 0.25,
                delayChildren: 0.2,
                staggerChildren: 0.15,
            },
        },
        exit: {
            x: props.side === "left" ? "-100%" : "100%",
            opacity: 0,
            transition: {
                duration: 0.25,
            },
        },
    };

    return (
        <AnimatePresence>
            {props.isOpen && (
                <>
                    {!props.fullWidth && (
                        <motion.div
                            className={`fixed top-0 left-0 right-0 bottom-0 bg-black/75 z-10`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    )}
                    <motion.aside
                        ref={sidebarRef}
                        variants={containerVariants}
                        initial="initial"
                        animate="visible"
                        exit="exit"
                        className={`fixed top-0 
                        bg-zinc-50
                        px-4 py-5 z-20 h-svh

                        ${side === "left" ? "left-0" : "right-0"}  ${
                            props.fullWidth ? "w-full" : "min-w-72 w-[60dvw]"
                        } flex flex-col items-center gap-8`}>
                        <SHeader
                            side={side}
                            onCloseSidebar={props.onCloseSidebar}
                        />

                        <SLinkGroup />

                        <AppVersion className="absolute bottom-2" />
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;
