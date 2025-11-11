"use client";

import Link from "next/link";
import { ComponentType } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { CONTACT_ME_LINKS } from "@/constants";

interface ContactLinksProps {
	className?: string;
}

const ContactLinks = ({ className }: ContactLinksProps) => {
	const t = useTranslations("Pages.ContactMePage");

	return (
		<div
			className={cn(
				"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto",
				className,
			)}>
			{CONTACT_ME_LINKS.map((item) => (
				<ContactLink
					key={item.href}
					href={item.href}
					icon={item.icon}
					label={t(item.tKey)}>
					<span className="font-medium text-sm text-muted-foreground">
						{item.username}
					</span>
				</ContactLink>
			))}
		</div>
	);
};

export default ContactLinks;

interface ContactInfoLinkProps {
	href?: string;
	label: string;
	icon?: ComponentType<{ className?: string }>;
	children?: React.ReactNode;
}

export const ContactLink = ({
	href,
	label,
	icon: Icon,
	children,
}: ContactInfoLinkProps) => {
	return (
		<Link
			target="_blank"
			href={(href as "/") || "#"}
			className={cn(
				"group flex items-center justify-between p-4 rounded-2xl border border-border bg-card shadow-sm transition-all duration-200",
				"hover:shadow-md hover:border-primary/40 hover:scale-[1.02]",
			)}>
			<div className="flex items-center gap-3">
				<div
					className={cn(
						"flex items-center justify-center rounded-full border border-border size-10 p-2",
						"group-hover:border-primary/60 group-hover:bg-primary/5 transition-colors",
					)}>
					{Icon && <Icon className="size-5 text-primary" />}
				</div>
				<div className="flex flex-col">
					<span className="text-sm font-semibold text-foreground">
						{label}
					</span>
					{children}
				</div>
			</div>
		</Link>
	);
};
