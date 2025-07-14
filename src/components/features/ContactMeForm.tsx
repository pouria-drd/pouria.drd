"use client";

import { PdIcon } from "../icons";
import { useActionState } from "react";
import { contactMeAction } from "@/actions";
import { useTranslations } from "next-intl";
// import { useActionState, useEffect } from "react";
// import { useToast } from "@/context/ToastContext";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Button,
    Input,
    Textarea,
    Label,
} from "@/components/ui";

const ContactMeForm = () => {
    // const { addToast } = useToast();
    const t = useTranslations("Forms.ContactMe");

    const [state, formAction, isPending] = useActionState(
        contactMeAction,
        undefined
    );

    // const showToast = (message: string, type: "success" | "error" | "info") => {
    //     addToast(message, type, {
    //         duration: 7000, // Auto-dismiss after 7 seconds
    //         position: "bottom-right",
    //     });
    // };

    // useEffect(() => {
    //     if (state?.success) {
    //         showToast(state.success, "success");
    //     }

    //     if (state?.serverError) {
    //         showToast(state.serverError, "error");
    //     }
    // }, [state]);

    return (
        <Card className="w-full max-w-sm">
            <CardHeader className="flex flex-col items-center justify-center gap-2">
                <PdIcon className="text-primary size-12" animation={false} />
                <CardTitle className="mt-2">{t("title")}</CardTitle>
                <CardDescription>{t("description")}</CardDescription>
            </CardHeader>

            <CardContent>
                <form action={formAction} id="contact-me-form">
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="fullName">
                                {t("labels.fullName")}
                            </Label>
                            <Input
                                // required
                                // minLength={2}
                                name="fullName"
                                autoComplete="name"
                                placeholder={t("placeholders.fullName")}
                            />

                            {state?.errors?.fullName && (
                                <span className="text-xs text-destructive">
                                    {state?.errors?.fullName}
                                </span>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">{t("labels.email")}</Label>
                            <Input
                                // required
                                name="email"
                                // minLength={5}
                                autoComplete="email"
                                placeholder={t("placeholders.email")}
                            />
                            {state?.errors?.email && (
                                <span className="text-xs text-destructive">
                                    {state?.errors?.email}
                                </span>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="subject">
                                {t("labels.subject")}
                            </Label>
                            <Input
                                // required
                                // minLength={3}
                                name="subject"
                                placeholder={t("placeholders.subject")}
                            />
                            {state?.errors?.subject && (
                                <span className="text-xs text-destructive">
                                    {state?.errors?.subject}
                                </span>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="message">
                                {t("labels.message")}
                            </Label>

                            <Textarea
                                // required
                                // minLength={5}
                                name="message"
                                placeholder={t("placeholders.message")}
                            />

                            {state?.errors?.message && (
                                <span className="text-xs text-destructive">
                                    {state?.errors?.message}
                                </span>
                            )}
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center gap-2">
                <Button
                    type="submit"
                    variant={"default"}
                    disabled={isPending}
                    form="contact-me-form"
                    className="w-full">
                    {t("title")}
                </Button>

                {state?.success && (
                    <span className="text-xs text-center text-chart-2">
                        {state.success}
                    </span>
                )}
            </CardFooter>
        </Card>
    );
};

export default ContactMeForm;
