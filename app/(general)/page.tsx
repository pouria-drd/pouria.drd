import { ImageChanger, SkillsWriter } from "@/components/shared";

const Homepage = () => {
    const skills = ["Vue.js", "React", "Next.js", "Django", "Unity"];
    const images = ["/images/pouria/pouria.png", "/images/pouria/pouria-2.png"];

    return (
        <div
            className="flex flex-col items-center justify-center gap-8
            w-full py-4 sm:py-8 h-[80dvh] sm:h-auto">
            <ImageChanger images={images} />

            <div className="flex flex-col items-center text-center gap-2 w-full">
                <h1 className="title-medium">پوریا دارندی</h1>
                <SkillsWriter skills={skills} />
                <p className="relative text-p-medium text-center leading-relaxed r2l max-w-2xl">
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
        </div>
    );
};

export default Homepage;
