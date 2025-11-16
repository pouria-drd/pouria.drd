"use client";

import Link from "next/link";
import { ComponentType } from "react";
import { VisuallyHidden } from "radix-ui";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { LocaleType } from "@/types";
import { PdImage } from "@/components/icons";
import { PUBLIC_NAV_LINKS } from "@/constants";
import { cn, isLinkActive } from "@/lib/utils";
import { AppVersion, SocialLinks } from "@/components/common";
import {
	Button,
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui";

function Sidebar() {
	const locale = useLocale() as LocaleType;

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant="outline"
					size={"icon-sm"}
					className="aspect-square size-7 rounded">
					<MenuIcon className="size-4" />
				</Button>
			</SheetTrigger>
			<SheetContent side={locale === "fa" ? "right" : "left"}>
				{/* Header */}
				<SheetHeader className="flex flex-row items-center justify-between">
					{/* <PdIcon className="text-primary" /> */}
					<Link href={"/"} className="size-8">
						<PdImage />
					</Link>
					<SheetClose className="cursor-pointer hover:bg-accent size-7 p-0.5 rounded">
						<XIcon className="text-muted-foreground size-full" />
					</SheetClose>
					<VisuallyHidden.Root>
						<SheetTitle />
						<SheetDescription />
					</VisuallyHidden.Root>
				</SheetHeader>

				{/* Navigation Links */}
				<div>
					<SidebarLinks />
				</div>

				{/* Footer */}
				<SheetFooter>
					<SocialLinks />
					<AppVersion />
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}

export default Sidebar;

interface SidebarLinksProps {
	className?: string;
}

export const SidebarLinks = ({ className }: SidebarLinksProps) => {
	const pathname = usePathname();

	const t = useTranslations("Components.Navigation.NavigationLinks");

	return (
		<div className={cn("flex flex-col items-start gap-4", className)}>
			{PUBLIC_NAV_LINKS.map((pLink) => (
				<div key={pLink.href} className="px-2 w-full">
					<SidebarLink
						href={pLink.href}
						icon={pLink.icon}
						isActive={isLinkActive(pathname, pLink.href)}>
						{t(pLink.tKey)}
					</SidebarLink>
				</div>
			))}
		</div>
	);
};

interface SidebarLinkProps {
	href: string;
	isActive: boolean;
	className?: string;
	children?: React.ReactNode;
	icon?: ComponentType<{ className?: string }>;
}

export const SidebarLink = (props: SidebarLinkProps) => {
	return (
		<SheetTrigger asChild>
			<Link
				href={props.href as "/"}
				className={cn(
					`flex items-center gap-3 px-3 py-2 rounded-md
				hover:bg-accent transition-colors
				dark:text-accent-foreground
				text-muted-foreground hover:text-primary w-full
				${props.isActive ? "bg-accent text-primary" : ""}
				`,
				)}>
				{props.icon && <props.icon className="size-5 text-current" />}
				{props.children}
			</Link>
		</SheetTrigger>
	);
};
