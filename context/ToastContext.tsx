"use client";

import { Toast } from "@/components/ui";
import { AnimatePresence } from "framer-motion";
import { createContext, useContext, useState } from "react";

type ToastType = {
    id: string;
    message: string;
    duration: number;
    type: "success" | "error" | "info";
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

/**
 * Toast Context Type definition for managing global toast notifications.
 *
 * @method addToast - Method for adding a new toast notification.
 */
interface ToastContextType {
    addToast: (
        message: string,
        type: "success" | "error" | "info",
        options?: {
            duration?: number;
            position?:
                | "top-left"
                | "top-right"
                | "bottom-left"
                | "bottom-right";
        }
    ) => void;
}

/**
 * Create ToastContext to provide toast functionality across the app.
 */
const ToastContext = createContext<ToastContextType | undefined>(undefined);

/**
 * Hook to access the Toast context.
 *
 * @returns ToastContextType - Context value for toast management.
 */
export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};

/**
 * ToastProvider component wraps the application to manage global toast notifications.
 *
 * @param {React.ReactNode} children - Components wrapped by ToastProvider.
 * @returns The ToastProvider component with toast functionality.
 */
export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const [toasts, setToasts] = useState<ToastType[]>([]);

    /**
     * Adds a toast to the list of displayed toasts.
     *
     * @param {string} message - The message to display in the toast.
     * @param {("success" | "error" | "info")} type - The type of toast.
     * @param {object} options - Additional options like duration
     */
    const addToast = (
        message: string,
        type: "success" | "error" | "info",
        options: {
            duration?: number;
            position?:
                | "top-left"
                | "top-right"
                | "bottom-left"
                | "bottom-right";
        } = {}
    ) => {
        const id = Date.now().toString();
        const { duration = 5000, position } = options;

        const toast: ToastType = {
            id,
            message,
            duration,
            position: position || "top-right",
            type,
        };

        // Add the toast to the list
        setToasts((prevToasts) => [...prevToasts, toast]);

        setTimeout(() => dismissToast(id), duration); // Dismiss the toast after the specified duration
    };

    /**
     * Dismisses a toast by id.
     *
     * @param {string} id - The id of the toast to dismiss.
     */
    const dismissToast = (id: string) => {
        setToasts((prevToasts) =>
            prevToasts.filter((toast) => toast.id !== id)
        );
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            <AnimatePresence>
                {toasts.map((toast) => (
                    <Toast
                        id={toast.id}
                        key={toast.id}
                        type={toast.type}
                        message={toast.message}
                        duration={toast.duration}
                        position={toast.position}
                        onDismiss={() => dismissToast(toast.id)}
                    />
                ))}
            </AnimatePresence>
            {children}
        </ToastContext.Provider>
    );
};
