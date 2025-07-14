import useEscapeKey from "./useEscapeKey";
import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to manage modal state and focus trapping.
 *
 * @returns  [isOpen, openModal, closeModal, modalRef] - A tuple containing the modal state, openModal function, closeModal function, and a reference to the modal element.
 */
function useModal() {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    /** Opens the modal */
    const openModal = () => setIsOpen(true);

    /** Closes the modal */
    const closeModal = () => setIsOpen(false);

    // Use the Escape Key Hook for closing the modal
    useEscapeKey(() => {
        if (isOpen) closeModal();
    });

    // Focus Management: Automatically focuses the first focusable element inside the modal
    useEffect(() => {
        if (!isOpen || !modalRef.current) return;

        const focusableElements =
            modalRef.current.querySelectorAll<HTMLElement>(
                "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
            );

        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    }, [isOpen]);

    return [isOpen, openModal, closeModal, modalRef] as const;
}

export default useModal;
