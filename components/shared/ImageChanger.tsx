"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils";

interface ImageChangerProps {
    images: string[];
    interval?: number; // Optional prop for flexibility
    className?: string;
}

const ImageChanger = (props: ImageChangerProps) => {
    const { images, interval = 5000 } = props;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return; // Prevent interval when only one image exists

        const imageInterval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(imageInterval);
    }, [images, interval]);

    return (
        <div
            className={cn(
                `bg-gradient-to-b from-white to-drd-primary-75
                relative size-72 sm:size-80 min-w-72 min-h-72
                rounded-[50%] overflow-hidden shadow-2xl aspect-square`,
                props.className
            )}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, x: 50, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.1, x: -50, rotate: 10 }}
                    transition={{
                        duration: 0.5,
                        damping: 15,
                        type: "spring",
                        stiffness: 100,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-0 w-full">
                    <Image
                        fill
                        priority
                        src={images[index]}
                        alt="Pouria Darandi"
                        className="object-cover w-full"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ImageChanger;
