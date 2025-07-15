"use client";

import { useLocale, useTranslations } from "next-intl";
import { Copy, RefreshCcw, Trash2 } from "lucide-react";
import { encodeConfigToSms, decodeSmsToConfig } from "@/lib";

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
import { useEffect, useState } from "react";

const FarsifyForm = () => {
    const locale = useLocale();
    const t = useTranslations("Forms.V2Farsify");

    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [mode, setMode] = useState<"encode" | "decode">("encode");

    useEffect(() => {
        setInput("");
        setOutput("");
    }, [mode]);

    const handleConvert = () => {
        try {
            const result =
                mode === "encode"
                    ? encodeConfigToSms(input)
                    : decodeSmsToConfig(input);
            setOutput(result);
        } catch (err) {
            alert(t("error"));
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(output);
        alert(t("copied"));
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>{t("title")}</CardTitle>
            </CardHeader>

            <CardContent>
                <Tabs
                    className="w-full"
                    defaultValue="encode"
                    onValueChange={(val) => setMode(val as any)}>
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
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={t("placeholders.input")}
                                className="resize-none min-h-[100px]"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Button onClick={handleConvert}>
                                {t("convert")}
                                <RefreshCcw className="w-4 h-4" />
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setInput("");
                                    setOutput("");
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
