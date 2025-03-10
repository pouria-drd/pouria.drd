"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
    return (
        <div
            className="font-mono flex flex-col items-center justify-center p-4
            h-dvh text-center bg-gradient-to-b from-drd-primary-75 to-white">
            <motion.h1
                className="text-9xl font-bold text-drd-primary-900"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>
                404
            </motion.h1>
            <motion.h2
                className="title-large mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                Page Not Found
            </motion.h2>
            <motion.p
                className="text-p-medium mt-2 text-drd-neutral-600 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}>
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mt-6">
                <Button btnType="primary" outline href="/">
                    Back to Home
                </Button>
            </motion.div>
        </div>
    );
};

export default NotFoundPage;
