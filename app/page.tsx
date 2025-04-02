import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";
import { SkillsWriter } from "@/components/shared";

const Homepage = () => {
    const skills = ["Vue.js", "React", "Next-js", "Django", "Unity"];

    return (
        <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 w-full py-4">
            <div
                className="bg-gradient-to-b from-white to-emerald-50/50
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
            </div>

            <div className="flex flex-col items-center text-center gap-2 w-full mt-4">
                <h1
                    className="text-drd-neutral-950 text-3xl
                    sm:text-3xl md:text-4xl lg:text-4xl font-bold">
                    پوریا دارندی
                </h1>
                <SkillsWriter skills={skills} />
                <p className="relative text-p-medium text-center leading-relaxed max-w-full sm:max-w-2xl r2l">
                    متولد ۱۴ بهمن ۱۳۸۰ 🎂🥳
                    <br />
                    در حال تولید باگ از دی ۱۳۹۹ 🐛💻
                    <br />
                    اولش به صورت خودآموز با پایتون شروع کردم و بعدش ++C و Django
                    رو تو مجتمع فنی تهران یاد گرفتم 🔥🎯
                    <br />
                    از اسفند ۱۴۰۱ تا اردیبهشت ۱۴۰۳ توی فراییت با React، Vue،
                    Next.js و Django کار کردم. حالا از مرداد ۱۴۰۳ در{" "}
                    <Link
                        target="_blank"
                        href="https://asredanesh.com/"
                        className="text-drd-primary-500 hover:underline mx-1 z10">
                        عصردانش‌افزار
                    </Link>
                    مشغولم!🚀
                </p>
            </div>

            <div className="mb-2.5 mt-1.5 flex flex-col items-center gap-2">
                <Button outlined>
                    <Link href="/contact-me">ارسال پیام</Link>
                </Button>
            </div>
        </div>
    );
};

export default Homepage;
