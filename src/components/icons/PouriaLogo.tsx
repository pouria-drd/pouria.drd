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
			className={cn(
				"font-sans flex items-center justify-center gap-1 truncate w-fit",
				props.className,
			)}>
			<PdIcon className="text-primary" />

			{/* <span className="hidden sm:block text-xl sm:text-2xl uppercase font-bold"> */}
			<span className="hidden text-xl sm:text-2xl uppercase font-bold">
				Pouria DRD
			</span>
		</Link>
	);
};

export default PouriaLogo;
