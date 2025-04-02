import { cn } from "@/utils";

interface Props {
    className?: string;
    children?: React.ReactNode;
    badgeType?: "info" | "success" | "warning" | "error" | "light" | "dark";
}

const Badge = ({ className, children, badgeType = "info" }: Props) => {
    // Define color classes based on badgeType
    let badgeColorClass = "";

    switch (badgeType) {
        case "success":
            badgeColorClass = "bg-emerald-100 text-emerald-600";
            break;

        case "warning":
            badgeColorClass = "bg-orange-100 text-orange-600";
            break;

        case "error":
            badgeColorClass = "bg-rose-100 text-rose-600";
            break;

        case "info":
            badgeColorClass = "bg-blue-100 text-blue-600";
            break;

        case "light":
            badgeColorClass = "bg-zinc-100 text-zinc-800";
            break;

        case "dark":
            badgeColorClass = "bg-zinc-700 text-white";
            break;
    }

    return (
        <div className={cn(`drd-badge ${badgeColorClass}`, className)}>
            {children}
        </div>
    );
};

export default Badge;
