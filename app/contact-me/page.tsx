import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { ContactMeForm } from "@/components/forms";
import { ContactLinks, GridShape } from "@/components/common";

export default async function ContactMePage() {
	const t = await getTranslations("Pages.ContactMePage");

	return (
		<main className="grow w-full flex items-center justify-center app-px py-12 relative">
			<GridShape />
			<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
				{/* Left Section */}
				<section className="grid grid-rows-[auto_auto_auto] gap-6 text-center lg:text-start items-start">
					{/* Illustration */}
					<div className="relative mx-auto lg:mx-0 w-80">
						<Image
							priority
							quality={75}
							width={570}
							height={428}
							alt="Contact Illustration"
							src="/images/contact-me-image.png"
							className="w-full h-full object-cover rounded-lg"
						/>
					</div>

					{/* Text */}
					<div className="space-y-3">
						<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
							{t("title")}
						</h1>
						<p className="text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 text-justify">
							{t("description")}
						</p>
					</div>

					{/* Contact Links */}
					<div className="w-full">
						<ContactLinks className="grid grid-cols-1 sm:grid-cols-2 gap-4" />
					</div>
				</section>

				{/* Right Section - Form */}
				<section className="grid place-items-center">
					<div className="w-full max-w-full lg:max-w-md p-0 lg:p-6">
						<ContactMeForm />
					</div>
				</section>
			</div>
		</main>
	);
}
