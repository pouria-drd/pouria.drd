"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaLanguage } from "react-icons/fa";
import { localeChangeAction } from "@/actions";
import { useLocale, useTranslations } from "next-intl";
import {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui";

const LANGUAGES = [
    { code: "fa", label: "فارسی" },
    { code: "en", label: "English" },
];

const LanguageSwitcher = () => {
    const router = useRouter();
    const currentLocale = useLocale();
    const t = useTranslations("Components.LanguageSwitcher");
    const [selectedLocale, setSelectedLocale] = useState(currentLocale);

    const handleLocaleChange = async (locale: string) => {
        if (locale === currentLocale) return;

        setSelectedLocale(locale);
        await localeChangeAction(locale); // sets NEXT_LOCALE cookie server-side
        router.refresh(); // reloads page with new locale
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size={"sm"}
                    className="cursor-pointer">
                    <FaLanguage />
                    {LANGUAGES.find((l) => l.code === selectedLocale)?.label}
                </Button>
            </DropdownMenuTrigger>
            {/* <DropdownMenuContent className={`${currentLocale === "fa" ? "r2l" : "l2r"} w-44`}> */}
            <DropdownMenuContent className="w-44">
                <DropdownMenuLabel className="text-center">
                    {t("title")}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                    value={selectedLocale}
                    onValueChange={handleLocaleChange}>
                    {LANGUAGES.map((lang) => (
                        <DropdownMenuRadioItem
                            className="cursor-pointer"
                            key={lang.code}
                            value={lang.code}>
                            <span
                                className={`${
                                    lang.code === "fa" && "font-iran-yekan-x"
                                }`}>
                                {lang.label}
                            </span>
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageSwitcher;
