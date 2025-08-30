"use client";

import { useState } from "react";
import { useArzWatch } from "@/hooks";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import CategorySelect from "./CategorySelect";
import InstrumentList from "./InstrumentList";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Button,
} from "@/components/ui";

const ArzWatch = () => {
	const t = useTranslations("ArzWatch");
	const [category, setCategory] = useState<InstrumentCategory>("gold");
	const { instruments, isLoading, fetchInstruments } = useArzWatch(category);

	return (
		<Card className="w-full max-w-4xl">
			<CardHeader className="flex flex-col items-center justify-center gap-4">
				<CardTitle>{t("marketInstruments")}</CardTitle>

				<div className="flex items-center gap-4">
					<CategorySelect
						category={category}
						onChange={setCategory}
					/>
					<Button
						onClick={fetchInstruments}
						disabled={isLoading}
						variant="outline">
						{isLoading ? (
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
						) : (
							t("refresh")
						)}
					</Button>
				</div>
			</CardHeader>
			<CardContent className="flex flex-col items-center justify-between gap-4">
				{isLoading && (
					<div className="flex justify-center items-center py-8">
						<Loader2 className="h-8 w-8 animate-spin text-primary" />
					</div>
				)}

				{!isLoading && instruments.length === 0 && (
					<div className="text-center py-8 text-gray-500">
						{t("noInstruments")}
					</div>
				)}

				{!isLoading && instruments.length > 0 && (
					<InstrumentList instruments={instruments} />
				)}
			</CardContent>
		</Card>
	);
};

export default ArzWatch;
