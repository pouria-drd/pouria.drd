"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { motion, Variants } from "framer-motion";

interface NavLinkProps {
	href: string;
	isActive: boolean;
	children?: React.ReactNode;
	onClick?: () => void;
}

const SLink = (props: NavLinkProps) => {
	const locale = useLocale();

	const itemVariants: Variants = {
		hidden: {
			y: 30,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				damping: 20,
				type: "spring",
				stiffness: 200,
				duration: 0.15,
			},
		},
	};

	const activeClass = props.isActive
		? `text-primary bg-accent border-primary px-2 ${
				locale === "fa"
					? "rounded-r-none border-r-2"
					: "rounded-l-none border-l-2"
		  }`
		: "text-muted-foreground hover:text-primary hover:bg-accent border-transparent px-4";

	return (
		<motion.div
			variants={itemVariants}
			className="flex items-center w-full">
			<Link
				href={props.href as any}
				onClick={props.onClick}
				className={`rounded-md transition-colors w-full py-2 ${activeClass}`}>
				{props.children}
			</Link>
		</motion.div>
	);
};

export default SLink;
