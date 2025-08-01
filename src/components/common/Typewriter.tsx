"use client";

import Typed from "typed.js";
import { useRef, useEffect } from "react";

interface TypewriterProps {
	texts: string[];
	className?: string;
}

const Typewriter = ({ texts, className }: TypewriterProps) => {
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			loop: true,
			typeSpeed: 100,
			cursorChar: "|",
			strings: texts,
		});

		return () => {
			typed.destroy();
		};
	}, [texts]);

	return <span ref={el} className={className} />;
};

export default Typewriter;
