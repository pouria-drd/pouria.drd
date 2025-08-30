"use client";

import { useLocale } from "next-intl";
import InstrumentItem from "./InstrumentItem";

interface Props {
	instruments: Instrument[];
}

function InstrumentList({ instruments }: Props) {
	if (!instruments.length) return null;

	const locale = useLocale();

	return (
		<div
			className="grid grid-cols-1 sm:grid-cols-2
			md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
			{instruments.map((item) => (
				<InstrumentItem key={item.symbol} item={item} locale={locale} />
			))}
		</div>
	);
}

export default InstrumentList;
