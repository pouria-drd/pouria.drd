import Image from "next/image";
import { ContactMeForm } from "@/components/forms";
import { getTranslations } from "next-intl/server";
import { ContactInfoLink } from "@/components/common";
import { InstagramIcon, TelegramIcon2, TwitterIcon } from "@/components/icons";

async function ContactMePage() {
	const t = await getTranslations("Pages.ContactMePage");

	return (
		<main className="grow app-px flex flex-col items-center justify-center">
			<div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-8 w-full py-12">
				<div className="flex flex-col items-center justify-center text-center gap-4 h-full w-full">
					<div className="flex flex-col items-start gap-2">
						<h1 className="text-justify text-3xl sm:text-4xl font-semibold w-full">
							{t("title")}
						</h1>

						<p className="text-muted-foreground text-justify w-full max-w-full sm:max-w-sm">
							{t("description")}
						</p>
					</div>

					<div className="flex flex-col items-center justify-between gap-4 w-full max-w-sm">
						<ContactInfoLink
							href="https://instagram.com/pouria.drd"
							icon={<InstagramIcon className="w-full" />}
							label={t("instagramLabel")}>
							<span className="font-bold text-base md:text-lg l2r">
								@pouria.drd
							</span>
						</ContactInfoLink>

						<ContactInfoLink
							href="https://t.me/pouria_drd"
							icon={<TelegramIcon2 className="w-full" />}
							label={t("telegramLabel")}>
							<span className="font-bold text-base md:text-lg l2r">
								@pouria_drd
							</span>
						</ContactInfoLink>

						<ContactInfoLink
							href="https://twitter.com/pouria_drd/"
							icon={<TwitterIcon className="w-full" />}
							label={t("twitterLabel")}>
							<span className="font-bold text-base md:text-lg l2r">
								@pouria_drd
							</span>
						</ContactInfoLink>
					</div>

					<div className="flex items-center justify-center w-full mt-8 sm:mt-0">
						<Image
							priority
							quality={20}
							width={570}
							height={428}
							alt="ContactMeImage"
							src="/images/contact-me-image.png"
							className="w-full max-w-full sm:max-w-sm"
						/>
					</div>
				</div>

				<div className="flex items-center justify-center w-full">
					<ContactMeForm />
				</div>
			</div>
		</main>
	);
}

export default ContactMePage;
