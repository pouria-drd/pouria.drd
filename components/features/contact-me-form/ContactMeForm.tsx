"use client";

import { PdIcon } from "@/components/icons";
import { Button, Input, TextArea } from "@/components/ui";

const ContactMeForm = () => {
    return (
        <div className="bg-white rounded-lg shadow px-4 py-6 w-full max-w-full sm:max-w-80 space-y-4">
            <div className="flex flex-col items-center justify-center w-full gap-4">
                <PdIcon
                    className="text-drd-primary-600 w-12"
                    animation={false}
                />

                <div className="text-center space-y-2">
                    <h1 className="title-form">ارسال پیام</h1>
                    <p className="text-p-form">
                        لطفا برای ارتباط بیشتر، موارد زیر را وارد کنید
                    </p>
                </div>
            </div>
            <form className="space-y-4">
                <Input
                    dir="rtl"
                    autoFocus
                    label="نام"
                    name="name"
                    uniqueId="name"
                    placeholder="نام کامل خود را وارد کنید"
                    // value={formState.name}
                    // onChange={handleChange}
                    // error={errors.name?.[0]}
                />
                <Input
                    dir="rtl"
                    label="ایمیل"
                    name="email"
                    uniqueId="email"
                    placeholder="ایمیل خود را وارد کنید"
                    // value={formState.email}
                    // onChange={handleChange}
                    // error={errors.email?.[0]}
                />
                <TextArea
                    dir="rtl"
                    name="message"
                    uniqueId="message"
                    label="پیام"
                    placeholder="پیام خود را وارد کنید"
                    // value={formState.message}
                    // onChange={handleChange}
                    // error={errors.message?.[0]}
                />
                <Button type="submit" fullWidth>
                    ارسال
                </Button>
            </form>
        </div>
    );
};

export default ContactMeForm;
