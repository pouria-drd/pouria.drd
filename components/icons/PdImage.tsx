import Image from "next/image";
import { cn } from "@/lib/utils";

interface PdImageProps {
	className?: string;
}

const PdImage = (props: PdImageProps) => {
	return (
		<Image
			width={512}
			height={512}
			alt="Pouria Darandi"
			src="/images/pouria/Pd.svg"
			className={cn(`w-full h-full object-cover`, props.className)}
		/>
	);
};

export default PdImage;
