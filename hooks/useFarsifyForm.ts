"use client";

import {
	// useEffect,
	useState,
} from "react";
import { useTranslations } from "next-intl";
import { useSearchParams, useRouter } from "next/navigation";

import { toast } from "sonner";
import { encodeConfigToSms, decodeSmsToConfig } from "@/lib/utils";

function useFarsifyForm() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const t = useTranslations("Forms.FarsifyForm");

	const initialModeParam = searchParams.get("mode");
	const initialInputParam = searchParams.get("input");

	const [mode, setMode] = useState<"encode" | "decode">(
		initialModeParam === "decode" ? "decode" : "encode",
	);
	const [input, setInput] = useState(initialInputParam || "");
	const [output, setOutput] = useState("");

	// useEffect(() => {
	// 	setOutput("");
	// }, [mode, input]);

	const handleConvert = () => {
		try {
			const result =
				mode === "encode"
					? encodeConfigToSms(input)
					: decodeSmsToConfig(input);
			setOutput(result);
		} catch (err: unknown) {
			if (process.env.NODE_ENV === "development") {
				console.error("Error in handleConvert:", err);
			}
			toast.error(t("error"));
		}
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(output);
		toast.success(t("copied"));
	};

	const handleModeChange = (val: string) => {
		const newMode = val === "decode" ? "decode" : "encode";
		setMode(newMode);

		const params = new URLSearchParams(searchParams.toString());
		params.set("mode", newMode);
		router.replace(`?${params.toString()}`);
	};

	return {
		t,
		mode,
		input,
		output,
		searchParams,
		router,
		setInput,
		setOutput,
		handleConvert,
		handleCopy,
		handleModeChange,
	};
}

export default useFarsifyForm;
