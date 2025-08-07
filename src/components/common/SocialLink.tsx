import { JSX } from "react";
import Link from "next/link";
import { cn } from "@/utils";

interface SocialLinkProps {
	href: string;
	icon: JSX.Element;
	className?: string;
}

const SocialLink = (props: SocialLinkProps) => {
	return (
		<Link
			href={props.href}
			className={cn(
				`transition-colors duration-200 cursor-pointer
                text-muted-foreground hover:text-primary`,
				props.className,
			)}
			target="_blank">
			{props.icon}
		</Link>
	);
};

export default SocialLink;
