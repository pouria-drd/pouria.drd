import { FarsifyForm } from "@/components/forms";
import { getTranslations } from "next-intl/server";

async function FarsifyPage() {
    const t = await getTranslations("Pages.FarsifyPage");

    return (
        <main className="grow app-px flex flex-col items-center justify-center">
            {/* Hero Section */}
            <div className="text-center space-y-3">
                <h1 className="text-3xl sm:text-4xl font-extrabold">
                    {t("title")}
                </h1>
                <p className="text-muted-foreground text-base sm:text-lg max-w-md">
                    {t("description")}
                </p>

                {/* Optional Hero Image */}
                {/* <div className="mt-6 max-w-xl mx-auto rounded-xl overflow-hidden shadow-sm">
                    <Image
                        src="/images/v2farsify-banner.webp"
                        alt="V2Ray SMS Encoder/Decoder"
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover rounded-xl"
                        priority
                    />
                </div> */}
            </div>

            <div className="container py-10 max-w-sm mx-auto">
                <FarsifyForm />
            </div>
        </main>
    );
}

export default FarsifyPage;
