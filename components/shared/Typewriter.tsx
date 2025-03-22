"use client";

import Typed from "typed.js";
import { useRef, useEffect } from "react";

interface TypewriterProps {
    texts: string[];
}

const Typewriter = (typewriterProps: TypewriterProps) => {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: typewriterProps.texts,
            typeSpeed: 100,
            loop: true,
            cursorChar: "|",
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return <span ref={el} className="truncate" />;
};

export default Typewriter;
