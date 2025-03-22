import { Button } from "@/components/ui";
import { ImageChanger, SkillsWriter } from "@/components/shared";

const Homepage = () => {
    const skills = ["Vue.js", "React", "Next.js", "Django", "Unity"];
    const images = ["/images/pouria/pouria.png", "/images/pouria/pouria-2.png"];

    return (
        <div className="flex flex-col items-center justify-center gap-4 w-full py-4">
            <ImageChanger images={images} interval={5000} />

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

            <div className="mb-2">
                <Button href="/contact-me">ارسال پیام</Button>
            </div>
        </div>
    );
};

export default Homepage;
