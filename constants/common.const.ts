import {
	FolderIcon,
	HomeIcon,
	LanguagesIcon,
	LaptopIcon,
	MailIcon,
	MoonIcon,
	SunIcon,
} from "lucide-react";

import {
	ContactLinkItem,
	Language,
	NavLinkItem,
	Project,
	SocialLinkItem,
	Theme,
	Translator,
} from "@/types";

import {
	GithubIcon,
	InstagramIcon,
	TelegramIcon,
	TelegramIcon2,
	TwitterIcon,
} from "@/components/icons";

// ============================================================================
// Skills
// ============================================================================

export const skills = ["Vue.js", "React", "Next-js", "Django", "Unity"];

// ============================================================================
// Social
// ============================================================================

export const SOCIAL_LINKS: SocialLinkItem[] = [
	{
		href: "https://twitter.com/pouria_drd/",
		icon: TwitterIcon,
	},
	{
		href: "https://www.instagram.com/pouria.drd?igsh=...",
		icon: InstagramIcon,
	},
	{
		href: "https://t.me/pouria_drd/",
		icon: TelegramIcon,
	},
	{
		href: "https://github.com/pouria-drd/",
		icon: GithubIcon,
	},
];

export const CONTACT_ME_LINKS: ContactLinkItem[] = [
	{
		href: "https://instagram.com/pouria.drd",
		tKey: "instagramLabel",
		icon: InstagramIcon,
		username: "@pouria.drd",
	},
	{
		href: "https://t.me/pouria_drd",
		tKey: "telegramLabel",
		icon: TelegramIcon2,
		username: "@pouria_drd",
	},
	{
		href: "https://twitter.com/pouria_drd/",
		tKey: "twitterLabel",
		icon: TwitterIcon,
		username: "@pouria_drd",
	},
	{
		href: "https://github.com/pouria-drd/",
		tKey: "githubLabel",
		icon: GithubIcon,
		username: "@pouria-drd",
	},
];

// ============================================================================
// Preferences
// ============================================================================

export const LANGUAGES: Language[] = [
	{ code: "fa", label: "فارسی", direction: "rtl" },
	{ code: "en", label: "English", direction: "ltr" },
];

export const THEMES: Theme[] = [
	{
		value: "light",
		tKey: "light",
		icon: SunIcon,
	},
	{
		value: "dark",
		tKey: "dark",
		icon: MoonIcon,
	},
	{
		value: "system",
		tKey: "system",
		icon: LaptopIcon,
	},
];

// ============================================================================
// Navigation
// ============================================================================

export const PUBLIC_NAV_LINKS: NavLinkItem[] = [
	{
		href: "/",
		tKey: "home",
		icon: HomeIcon,
	},
	{
		href: "/projects",
		tKey: "projects",
		icon: FolderIcon,
	},
	{
		href: "/contact-me",
		tKey: "contact",
		icon: MailIcon,
	},
	{
		href: "/farsify",
		tKey: "farsify",
		icon: LanguagesIcon,
	},
];

// ============================================================================
// Projects
// ============================================================================

export function getProjects(t: Translator): Project[] {
	return [
		{
			id: 1,
			title: t("1.title"),
			description: t("1.description"),
			// link: "https://t.me/arz_watch_bot",
			link: "https://t.me/GoldPriceMiner_bot",
			// techStack: ["Python", "Selenium", "Django Rest Framework"],
			techStack: ["Python", "Selenium", "BeautifulSoup"],
			image: "/images/projects/arz-watch-preview.png",
			repoLink: "https://github.com/pouria-drd/g-miner",
		},
		{
			id: 2,
			title: t("2.title"),
			description: t("2.description"),
			link: "https://banket.app",
			techStack: ["Next.js"],
			image: "/images/projects/banket-preview.png",
		},
		{
			id: 3,
			title: t("3.title"),
			description: t("3.description"),
			image: "/images/projects/online-clinic-preview.png",
			link: "https://dr-rahimi-pt.ir/",
			techStack: ["Django Rest Framework", "Next.js"],
		},
		{
			id: 4,
			title: t("4.title"),
			description: t("4.description"),
			image: "/images/projects/bazargan-preview.png",
			link: "https://bazarganinvestment.com/",
			repoLink: "https://github.com/pouria-drd/bazargan",
			techStack: ["Django Rest Framework", "Next.js"],
		},
		{
			id: 5,
			title: t("5.title"),
			description: t("5.description"),
			image: "/images/projects/zoom-clone-preview.png",
			link: "https://github.com/pouria-drd/zoom-clone-next-14",
			repoLink: "https://github.com/pouria-drd/zoom-clone-next-14",
			techStack: ["Next.js"],
		},
		{
			id: 6,
			title: t("6.title"),
			description: t("6.description"),
			image: "/images/projects/cafevand-preview.png",
			link: "https://cafevand.ir",
			repoLink: "https://github.com/pouria-drd/cafe-vand",
			techStack: ["Django Rest Framework", "Next.js"],
		},
		{
			id: 7,
			title: t("7.title"),
			description: t("7.description"),
			image: "/images/projects/vkasb-preview.png",
			link: "https://vkasb.ir",
			repoLink: "https://github.com/pouria-drd/varna-kasb",
			techStack: ["Django Rest Framework", "Next.js"],
		},
		{
			id: 8,
			title: t("8.title"),
			description: t("8.description"),
			image: "/images/projects/sitechoob-preview.png",
			link: "https://sitechoob.ir/",
			techStack: ["Next.js"],
		},
	];
}
