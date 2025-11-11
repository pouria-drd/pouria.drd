import Link from "next/link";
import { ComponentType } from "react";

import { cn } from "@/lib/utils";
import { SOCIAL_LINKS } from "@/constants";

const SocialLinks = ({ className }: { className?: string }) => {
	return (
		<div
			className={cn("flex items-center justify-center gap-3", className)}>
			{SOCIAL_LINKS.map((item, idx) => {
				const Icon = item.icon;
				return (
					<div key={item.href} className="flex items-center gap-3">
						<SocialLink href={item.href} Icon={Icon} />
						{idx < SOCIAL_LINKS.length - 1 && (
							<div className="w-0.5 h-5 bg-border" />
						)}
					</div>
				);
			})}
		</div>
	);
};

export default SocialLinks;

interface SocialLinkProps {
	href: string;
	Icon: ComponentType<{ className?: string }>;
	className?: string;
}

export const SocialLink = ({ href, Icon, className }: SocialLinkProps) => {
	return (
		<Link
			href={href as "/"}
			target="_blank"
			className={cn(
				`transition-colors duration-200 cursor-pointer text-muted-foreground hover:text-primary`,
				className,
			)}>
			<Icon />
		</Link>
	);
};
