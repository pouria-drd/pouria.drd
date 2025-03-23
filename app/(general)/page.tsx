import Image from "next/image";
import { Button } from "@/components/ui";
import { SkillsWriter } from "@/components/shared";

const Homepage = () => {
    const skills = ["Vue.js", "React", "Next.js", "Django", "Unity"];

    return (
        <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 w-full py-4">
            <div
                className="bg-gradient-to-b from-white to-emerald-50/75
                relative rounded-[50%] overflow-hidden shadow-2xl
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

            <div className="flex flex-col items-center text-center gap-2 w-full mt-4 r2l">
                <h1
                    className="text-drd-neutral-950 text-3xl
                    sm:text-3xl md:text-4xl lg:text-4xl font-bold">
                    پوریا دارندی
                </h1>
                <SkillsWriter skills={skills} />
                <p className="relative text-p-medium text-center leading-relaxed max-w-2xl">
                    متولد ۱۴ بهمن ۱۳۸۰، برنامه‌نویسی را از دی ۱۳۹۹ به صورت
                    خودآموز با پایتون شروع کردم. سپس از تیر ۱۴۰۰ تا دی ۱۴۰۱ در
                    مجتمع فنی تهران، دوره‌های الگوریتم‌های C++ و پایتون را با
                    نمره ۱۰۰/۱۰۰ و جنگوی پیشرفته را با نمره ۹۵/۱۰۰ گذراندم. پس
                    از آن، به یادگیری تکنولوژی‌های فرانت‌اند مثل Vue.js، Next.js
                    و React پرداختم. از اسفند ۱۴۰۱ تا اردیبهشت ۱۴۰۳ در تیم
                    فراییت با Django، React، Next.js و Vue.js کار کردم و از
                    مرداد ۱۴۰۳ در شرکت عصر دانش‌افزار مشغول به کار هستم.
                </p>
            </div>

            <div className="mb-2.5 mt-1.5">
                <Button href="/contact-me" outline>
                    ارسال پیام
                </Button>
            </div>
        </div>
    );
};

export default Homepage;
