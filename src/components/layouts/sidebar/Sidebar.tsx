"use client";

import SHeader from "./SHeader";
import SLinkGroup from "./SLinksGroup";
import { useClickOutside } from "@/hooks";
import { useTranslations } from "next-intl";
import { AppVersion } from "@/components/ui";
import { SocialGroup } from "@/components/common";
import { AnimatePresence, motion, Variants } from "framer-motion";

interface SidebarProps {
    isOpen: boolean;
    onCloseSidebar: () => void;
    fullWidth?: boolean;
    side?: "left" | "right";
}

const Sidebar = (props: SidebarProps) => {
    const t = useTranslations("Layouts.Navigation.Sidebar");

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
                // type: "ease",
                duration: 0.35,
                delayChildren: 0.2,
                staggerChildren: 0.15,
            },
        },
        exit: {
            x: props.side === "left" ? "-100%" : "100%",
            opacity: 0,
            transition: {
                duration: 0.35,
                // type: "ease-in-out",
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
                        className={`fixed top-0 sm:hidden
                        flex flex-col items-center gap-10 p-4 z-50 h-dvh                        
                        bg-background
                        ${side === "left" ? "left-0" : "right-0"}  ${
                            props.fullWidth ? "w-full" : "min-w-72 w-[60dvw]"
                        }`}>
                        <SHeader
                            side={side}
                            onCloseSidebar={props.onCloseSidebar}
                        />

                        <SLinkGroup onClick={props.onCloseSidebar} />

                        <div className="text-center absolute flex flex-col gap-2 bottom-8">
                            <span className="text-muted-foreground text-xs">
                                {t("social")}
                            </span>
                            <SocialGroup />
                        </div>

                        <AppVersion className="absolute bottom-2" />
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;
