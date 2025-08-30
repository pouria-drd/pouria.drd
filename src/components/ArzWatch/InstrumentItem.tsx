"use client";

import Link from "next/link";
import { formatDate } from "@/utils";
import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/card";
import { Coins, Bitcoin, DollarSign, ExternalLink } from "lucide-react";

interface InstrumentItemProps {
	item: Instrument;
	locale: string;
}

const categoryIcons = {
	gold: <Coins className="w-4 h-4 text-amber-400" />,
	coin: <Coins className="w-4 h-4 text-gray-400" />,
	crypto: <Bitcoin className="w-4 h-4 text-violet-400" />,
	currency: <DollarSign className="w-4 h-4 text-green-700" />,
};

function InstrumentItem({ item, locale }: InstrumentItemProps) {
	const t = useTranslations("ArzWatch");
	const { name, faName, symbol, latestPriceTick, category, timestamp } = item;
	const { price, currency, meta } = latestPriceTick;

	const formattedPrice = new Intl.NumberFormat(
		locale === "fa" ? "fa-IR" : "en-US",
		{
			minimumFractionDigits: currency === "IRR" ? 0 : 2,
			maximumFractionDigits: currency === "IRR" ? 0 : 2,
			currency: currency === "USDT" ? "USD" : currency,
			style: "currency",
		},
	).format(price);

	// Format the timestamp using formatDate utility
	const cleanTimestamp = item.latestPriceTick.timestamp.split(".")[0] + "Z";
	const { formattedDate, formattedTime } = formatDate(cleanTimestamp, {
		isPersian: locale === "fa",
		showTime: true,
	});

	return (
		<Card
			role="article"
			className="relative group bg-arzwatch-foreground p-4 w-full
			backdrop-blur-md border-none shadow-[0_4px_12px_rgba(0,0,0,0.05)]
			hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all sm:aspect-square
			duration-300 ease-out rounded-2xl overflow-hidden hover:-translate-y-1"
			aria-label={`${locale === "fa" ? faName : name} details`}>
			<div className="flex flex-col justify-center h-full gap-4 w-full">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-1">
						{categoryIcons[category]}
						<h3 className="flex items-center justify-between gap-1.5 text-base font-semibold">
							{locale === "fa" ? faName : name}
							<span className="text-xs text-muted-foreground font-medium tracking-wide">
								({symbol})
							</span>
						</h3>
					</div>
				</div>
				<div className="flex flex-col gap-1.5">
					<div className="flex items-baseline gap-1">
						<span className="text-xl font-bold">
							{formattedPrice}
						</span>
					</div>
				</div>
				{meta.source_url && (
					<Link
						href={meta.source_url}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center text-sm hover:underline gap-0.5
						text-blue-500 font-medium transition-colors duration-200 truncate w-fit"
						title={meta.source_url}
						aria-label={t("source")}>
						<span>{t("source")}</span>
						<ExternalLink className="size-4 shrink-0" />
					</Link>
				)}

				{/* Timestamp */}
				<div className="text-xs text-muted-foreground font-medium mt-1">
					{locale === "fa" ? "آخرین بروزرسانی" : "Last updated"}:{" "}
					{formattedDate} {formattedTime}
				</div>
			</div>
		</Card>
	);
}

export default InstrumentItem;
