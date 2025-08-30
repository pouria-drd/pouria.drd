"use client";

import { useLocale, useTranslations } from "next-intl";
import { Coins, Bitcoin, DollarSign, Stars } from "lucide-react";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui";

const categoryIcons = {
	gold: <Stars className="w-5 h-5 text-current" />,
	coin: <Coins className="w-5 h-5 text-current" />,
	crypto: <Bitcoin className="w-5 h-5 text-current" />,
	currency: <DollarSign className="w-5 h-5 text-current" />,
};

interface Props {
	category: InstrumentCategory;
	onChange: (value: InstrumentCategory) => void;
}

function CategorySelect({ category, onChange }: Props) {
	const locale = useLocale();
	const t = useTranslations("ArzWatch");

	return (
		<Select value={category} onValueChange={onChange}>
			<SelectTrigger
				className="w-40"
				dir={locale === "fa" ? "rtl" : "ltr"}>
				<SelectValue placeholder={t("selectCategory")} />
			</SelectTrigger>
			<SelectContent dir={locale === "fa" ? "rtl" : "ltr"}>
				<SelectItem value="gold">
					{categoryIcons.gold} {t("categories.gold")}
				</SelectItem>
				<SelectItem value="coin">
					{categoryIcons.coin} {t("categories.coin")}
				</SelectItem>
				<SelectItem value="currency">
					{categoryIcons.currency} {t("categories.currency")}
				</SelectItem>
				<SelectItem value="crypto">
					{categoryIcons.crypto} {t("categories.crypto")}
				</SelectItem>
			</SelectContent>
		</Select>
	);
}

export default CategorySelect;
