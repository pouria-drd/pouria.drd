"use client";

import { contactMeAction } from "@/actions";
import { useActionState, useEffect } from "react";
import { useToast } from "@/context/ToastContext";
import {
    Button,
    FormBody,
    FormCard,
    FormDescription,
    FormHeader,
    FormIcon,
    FormTextContainer,
    FormTitle,
    Input,
    TextArea,
} from "@/components/ui";

interface ContactMeFormProps {
    className?: string;
}

const ContactMeForm = (props: ContactMeFormProps) => {
    const { addToast } = useToast();

    const [state, formAction, isPending] = useActionState(
        contactMeAction,
        undefined
    );

    const showToast = (message: string, type: "success" | "error" | "info") => {
        addToast(message, type, {
            duration: 7000, // Auto-dismiss after 7 seconds
        });
    };

    useEffect(() => {
        if (state?.success) {
            showToast(state.success, "success");
        }

        if (state?.serverError) {
            showToast(state.serverError, "error");
        }
    }, [state]);

    return (
        <FormCard className={props.className}>
            <FormHeader>
                <FormIcon />
                <FormTextContainer>
                    <FormTitle>ارسال پیام</FormTitle>
                    <FormDescription>
                        برای برقراری ارتباط، اطلاعات زیر را وارد کنید
                    </FormDescription>
                </FormTextContainer>
            </FormHeader>

            <FormBody action={formAction}>
                <Input
                    required
                    dir="rtl"
                    label="نام"
                    minLength={2}
                    name="fullName"
                    uniqueId="name"
                    error={state?.errors?.fullName}
                    placeholder="نام کامل خود را وارد کنید"
                />

                <Input
                    required
                    dir="rtl"
                    name="email"
                    label="ایمیل"
                    minLength={5}
                    uniqueId="email"
                    className="mt-2.5"
                    error={state?.errors?.email}
                    placeholder="ایمیل خود را وارد کنید"
                />

                <Input
                    required
                    dir="rtl"
                    label="موضوع"
                    minLength={3}
                    name="subject"
                    className="mt-2.5"
                    uniqueId="subject"
                    error={state?.errors?.subject}
                    placeholder="موضوع خود را وارد کنید"
                />

                <TextArea
                    required
                    dir="rtl"
                    label="پیام"
                    minLength={5}
                    name="message"
                    className="mt-2.5"
                    uniqueId="message"
                    error={state?.errors?.message}
                    placeholder="پیام خود را وارد کنید"
                />

                <Button type="submit" fullWidth isBusy={isPending}>
                    ارسال
                </Button>
            </FormBody>
        </FormCard>
    );
};

export default ContactMeForm;
