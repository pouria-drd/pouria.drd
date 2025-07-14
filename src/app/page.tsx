import Link from "next/link";
// import Image from "next/image";
import { Button } from "@/components/ui";
import { getTranslations } from "next-intl/server";
import { ImageChanger, SkillsWriter } from "@/components/common";

async function RootPage() {
    const t = await getTranslations("Pages.RootPage");
    const skills = ["Vue.js", "React", "Next-js", "Django", "Unity"];

    const images = [
        "/images/pouria/pouria.png",
        "/images/pouria/pouria-2.png",
        "/images/pouria/pouria-3.png",
    ];

    return (
        <main className="grow app-px flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 w-full py-4">
                {/* <div
                    className="bg-gradient-to-b from-white to-emerald-50/50
                    dark:from-zinc-900 dark:to-emerald-50/15
                    relative rounded-[50%] overflow-hidden shadow-xl
                    aspect-square size-68 sm:size-80 min-w-68 min-h-68">
                    <Image
                        fill
                        loading="eager"
                        draggable={false}
                        alt="Pouria Darandi"
                        src="/images/pouria/pouria.png"
                        className="object-cover w-full"
                    />
                </div> */}

                <ImageChanger images={images} interval={7500} />
                <div className="flex flex-col items-center text-center gap-2 w-full mt-4">
                    <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold">
                        {t("title")}
                    </h1>
                    <SkillsWriter skills={skills} />
                    <p className="relative text-center leading-relaxed max-w-full sm:max-w-2xl text-muted-foreground">
                        {t("birth")}
                        <br />
                        {t("start")}
                        <br />
                        {t("education")}
                        <br />
                        {t.rich("work", {
                            company: (chunks) => (
                                <Link
                                    target="_blank"
                                    href="https://asredanesh.com/"
                                    className="text-primary hover:underline mx-1 z-10 cursor-pointer">
                                    {chunks}
                                </Link>
                            ),
                        })}
                    </p>
                </div>

                <div className="mb-2.5 mt-1.5 flex flex-col items-center gap-2">
                    <Button variant={"outline"}>
                        <Link href="/contact-me">{t("sendMessage")}</Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}

export default RootPage;
