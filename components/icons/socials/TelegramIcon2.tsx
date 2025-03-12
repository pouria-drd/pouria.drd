import { cn } from "@/utils";

const TelegramIcon2 = (props: IconProps) => {
    return (
        <svg
            className={cn("w-5 h-5", props.className)}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.40005 4.32015L13.8901 1.49015C17.7001 0.220154 19.7701 2.30015 18.5101 6.11015L15.6801 14.6002C13.7801 20.3102 10.6601 20.3102 8.76005 14.6002L7.92005 12.0802L5.40005 11.2402C-0.309946 9.34015 -0.309946 6.23015 5.40005 4.32015Z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default TelegramIcon2;
