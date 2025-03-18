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

    useEffect(() => {
        const showToast = (
            message: string,
            type: "success" | "error" | "info"
        ) => {
            addToast(message, type, {
                duration: 5000, // Auto-dismiss after 5 seconds
            });
        };

        if (state?.success) {
            showToast(state.success, "success");
        }

        if (state?.serverError) {
            showToast(state.serverError, "error");
        }
    }, [state, addToast]);

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
                    autoFocus
                    dir="rtl"
                    label="نام"
                    name="fullName"
                    minLength={2}
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
                    error={state?.errors?.email}
                    placeholder="ایمیل خود را وارد کنید"
                />

                <Input
                    required
                    dir="rtl"
                    name="subject"
                    label="موضوع"
                    minLength={3}
                    uniqueId="subject"
                    error={state?.errors?.subject}
                    placeholder="موضوع خود را وارد کنید"
                />

                <TextArea
                    required
                    dir="rtl"
                    label="پیام"
                    name="message"
                    minLength={5}
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
