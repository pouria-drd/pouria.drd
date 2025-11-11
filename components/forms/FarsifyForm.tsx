"use client";

import { useLocale } from "next-intl";
import { Copy, RefreshCcw, Trash2 } from "lucide-react";

import { useFarsifyForm } from "@/hooks";
import {
	Button,
	Card,
	CardHeader,
	CardContent,
	CardFooter,
	CardTitle,
	Textarea,
	Label,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui";

const FarsifyForm = () => {
	const locale = useLocale();
	const {
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
	} = useFarsifyForm();

	return (
		<Card>
			<CardHeader>
				<CardTitle>{t("title")}</CardTitle>
			</CardHeader>

			<CardContent>
				<Tabs
					className="w-full"
					defaultValue={mode}
					onValueChange={handleModeChange}>
					<TabsList
						className={`grid grid-cols-2 w-full ${
							locale === "fa" ? "r2l" : "l2r"
						}`}>
						<TabsTrigger value="encode" className="cursor-pointer">
							{t("tabs.encode")}
						</TabsTrigger>
						<TabsTrigger value="decode" className="cursor-pointer">
							{t("tabs.decode")}
						</TabsTrigger>
					</TabsList>

					<TabsContent
						value={mode}
						className={`space-y-4 mt-4 ${
							locale === "fa" ? "r2l" : "l2r"
						}`}>
						<div className="grid gap-2">
							<Label>
								{mode === "encode"
									? t("inputLabel.encode")
									: t("inputLabel.decode")}
							</Label>
							<Textarea
								value={input}
								onChange={(e) => {
									setInput(e.target.value);

									const params = new URLSearchParams(
										searchParams.toString(),
									);
									params.set("input", e.target.value);
									router.replace(`?${params.toString()}`);
								}}
								placeholder={t("placeholders.input")}
								className="resize-none min-h-[100px]"
							/>
						</div>

						<div className="grid gap-2">
							<Button onClick={handleConvert} disabled={!input}>
								{t("convert")}
								<RefreshCcw className="w-4 h-4" />
							</Button>
							<Button
								variant="outline"
								onClick={() => {
									setInput("");
									setOutput("");

									const params = new URLSearchParams(
										searchParams.toString(),
									);
									params.delete("input");
									router.replace(`?${params.toString()}`);
								}}>
								{t("clear")}
								<Trash2 className="w-4 h-4" />
							</Button>
						</div>

						<div className="grid gap-2">
							<Label htmlFor="output">{t("outputLabel")}</Label>
							<Textarea
								readOnly
								name="output"
								value={output}
								className="resize-none min-h-[100px]"
							/>
							{output && (
								<Button
									variant="outline"
									size="sm"
									className="mt-2"
									onClick={handleCopy}>
									<Copy className="w-4 h-4 mr-1" />
									{t("copy")}
								</Button>
							)}
						</div>
					</TabsContent>
				</Tabs>
			</CardContent>

			<CardFooter className="flex flex-col items-center justify-center text-center gap-2 text-muted-foreground text-xs">
				<p>{t("note")}</p>
			</CardFooter>
		</Card>
	);
};

export default FarsifyForm;
