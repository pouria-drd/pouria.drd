"use client";

import { XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { PdIcon } from "@/components/icons";

interface SHeaderProps {
	side: "left" | "right";
	onCloseSidebar: () => void;
}

const SHeader = (props: SHeaderProps) => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			exit="hidden"
			className={`flex w-full ${
				props.side === "right" ? "flex-row-reverse" : "flex-row"
			} items-center justify-between`}>
			{/* Logo Animation */}
			<PdIcon className="text-primary" repeat={7500} />

			<Button
				size={"icon"}
				variant={"ghost"}
				onClick={props.onCloseSidebar}
				className="p-0">
				<XIcon className="text-muted-foreground size-6" />
			</Button>
		</motion.div>
	);
};

export default SHeader;
