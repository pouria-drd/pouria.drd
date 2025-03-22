"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageChangerProps {
    images: string[];
    interval?: number; // Optional prop for flexibility
}

const ImageChanger = ({ images, interval = 3000 }: ImageChangerProps) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return; // Prevent interval when only one image exists

        const imageInterval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(imageInterval);
    }, [images, interval]);

    return (
        <div className="bg-white relative size-72 sm:size-80 rounded-full overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, x: 50, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.1, x: -50, rotate: 10 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                    }}
                    className="absolute inset-0">
                    <Image
                        fill
                        priority
                        src={images[index]}
                        alt="Pouria Darandi"
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ImageChanger;
