import Image from "next/image";
import { ContactInfoLink } from "@/components/shared";
import { ContactMeForm } from "@/components/features";
import { InstagramIcon, TelegramIcon2, TwitterIcon } from "@/components/icons";

function ContactMePage() {
    return (
        <div className="flex flex-col items-center justify-center gap-12 sm:gap-24 py-4 sm:py-12">
            <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-12 sm:gap-8 w-full">
                <div className="w-full">
                    <Image
                        width={570}
                        height={428}
                        loading="lazy"
                        alt="ContactMeImage"
                        src="/images/contact-me-image.png"
                        className="w-full max-w-80 md:max-w-[500px] mx-auto"
                    />
                </div>

                <div className="flex flex-col items-start justify-start text-start gap-4 r2l h-full w-full">
                    <h1 className="title-small w-full">با من در ارتباط باش!</h1>
                    <p className="text-p-small text-justify w-full max-w-full sm:max-w-sm">
                        اگه سوالی داری یا می‌خوای در مورد پروژه‌ها و کارهایی که
                        انجام میدم بیشتر بدونی، من اینجا هستم تا باهم گپ بزنیم.
                        از طریق فرم زیر یا صفحات اجتماعی با من در تماس باش، سعی
                        می‌کنم خیلی زود به پیامت جواب بدم!
                    </p>

                    <div className="flex flex-col items-center justify-between gap-4 w-full max-w-sm">
                        <ContactInfoLink
                            href="https://instagram.com/pouria.drd"
                            icon={<InstagramIcon className="w-full" />}
                            label="آدرس اینستاگرام:">
                            <span className="font-bold text-base md:text-lg">
                                pouria.drd@
                            </span>
                        </ContactInfoLink>
                        <ContactInfoLink
                            href="https://t.me/pouria_drd"
                            icon={<TelegramIcon2 className="w-full" />}
                            label="آدرس تلگرام:">
                            <span className="font-bold text-base md:text-lg">
                                pouria_drd@
                            </span>
                        </ContactInfoLink>
                        <ContactInfoLink
                            href="https://twitter.com/pouria_drd/"
                            icon={<TwitterIcon className="w-full" />}
                            label="آدرس توییتر:">
                            <span className="font-bold text-base md:text-lg">
                                pouria_drd@
                            </span>
                        </ContactInfoLink>
                    </div>
                </div>
            </div>

            <ContactMeForm />
        </div>
    );
}

export default ContactMePage;
