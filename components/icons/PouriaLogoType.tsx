import Link from "next/link";
import { cn } from "@/lib/utils";
import { PdIcon } from "@/components/icons";

interface PouriaLogoProps {
	className?: string;
}

const PouriaLogoType = (props: PouriaLogoProps) => {
	return (
		<Link
			href="/"
			className={cn(
				"font-sans flex items-center justify-center gap-1 truncate w-fit",
				props.className,
			)}>
			<PdIcon className="text-primary size-8" />

			<span className="text-xl sm:text-2xl uppercase font-bold">
				Pouria DRD
			</span>
		</Link>
	);
};

export default PouriaLogoType;
