"use client";

import { cn } from "@/utils";
import { Overlay } from "../overlay";
import { CloseButton } from "../button";
import { AnimatePresence, motion } from "framer-motion";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    className?: string;
    children?: React.ReactNode;
    modalRef: React.RefObject<HTMLDivElement | null>;
}

const Modal = (props: ModalProps) => {
    return (
        <AnimatePresence>
            {props.isOpen && (
                <Overlay onClick={props.onClose}>
                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 flex items-center justify-center p-4 z-50">
                        <div
                            className={cn(
                                `bg-white flex flex-col items-center gap-4
                                rounded-lg shadow-lg p-6 w-full max-w-full sm:max-w-sm`,
                                props.className
                            )}
                            ref={props.modalRef}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                            role="dialog"
                            aria-modal="true">
                            <div className="flex items-center justify-between gap-1 w-full">
                                {/* Modal Title */}
                                {props.title && (
                                    <h2
                                        className="text-drd-neutral-900 text-lg sm:text-xl
                                        font-semibold truncate">
                                        {props.title}
                                    </h2>
                                )}

                                {/* Close Button */}
                                <CloseButton
                                    onClick={props.onClose}
                                    aria-label="Close modal"
                                />
                            </div>

                            {/* Modal Content */}
                            <div className="flex flex-col items-center gap-4">
                                {props.children}
                            </div>
                        </div>
                    </motion.div>
                </Overlay>
            )}
        </AnimatePresence>
    );
};

export default Modal;
