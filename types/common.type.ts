import { ComponentType } from "react";
import { useTranslations } from "next-intl";

export type Translator = ReturnType<typeof useTranslations>;

// ============================================================================
// Navigation
// ============================================================================

export type NavLinkItem = {
	href: string;
	tKey: string;
	icon?: ComponentType<{ className?: string }>;
};

// ============================================================================
// Social
// ============================================================================

export type SocialLinkItem = {
	href: string;
	icon: ComponentType<{ className?: string }>;
};

export interface ContactLinkItem {
	href: string;
	tKey: string;
	username: string;
	icon: ComponentType<{ className?: string }>;
}

// ============================================================================
// Preferences
// ============================================================================

export type Theme = {
	value: ThemeType;
	tKey: string;
	icon: ComponentType<{ className?: string }>;
};

export const Locales = {
	fa: "fa",
	en: "en",
} as const;

export type LocaleType = keyof typeof Locales;

export type Language = {
	code: LocaleType;
	label: string;
	direction: "rtl" | "ltr";
};

export type ThemeType = "light" | "dark" | "system";

// ============================================================================
// Projects
// ============================================================================

export type Project = {
	id: number;
	link: string;
	image: string;
	title: string;
	repoLink?: string;
	techStack: string[];
	description: string;
};
