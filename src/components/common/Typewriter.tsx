"use client";

import Typed from "typed.js";
import { useRef, useEffect } from "react";

interface TypewriterProps {
    texts: string[];
    className?: string;
}

const Typewriter = (typewriterProps: TypewriterProps) => {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            loop: true,
            typeSpeed: 100,
            cursorChar: "|",
            strings: typewriterProps.texts,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return <span ref={el} className={typewriterProps.className} />;
};

export default Typewriter;
