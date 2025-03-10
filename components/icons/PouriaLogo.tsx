import Link from "next/link";
import { cn } from "@/utils";
import { PdIcon } from "@/components/icons";

interface PouriaLogoProps {
    className?: string;
}

const PouriaLogo = (props: PouriaLogoProps) => {
    return (
        <Link
            href="/"
            className={cn("flex items-center truncate", props.className)}>
            <PdIcon className="text-drd-primary-500" />

            <h3
                className="hidden sm:block text-xl sm:text-2xl uppercase 
                font-bold font-sans text-drd-neutral-950 ml-2">
                Pouria DRD
            </h3>
        </Link>
    );
};

export default PouriaLogo;
