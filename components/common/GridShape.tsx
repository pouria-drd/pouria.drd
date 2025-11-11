import Image from "next/image";

function GridShape() {
	return (
		<>
			<div className="absolute right-0 top-0 -z-1 w-full max-w-[350px] xl:max-w-[450px]">
				<Image
					alt="grid"
					src="/images/shape/grid-01.svg"
					width={0}
					height={0}
					loading="eager"
					className="w-[540px] h-[254px]"
					style={{ width: "100%", height: "auto" }}
				/>
			</div>

			<div className="absolute bottom-0 left-0 -z-1 w-full max-w-[350px] rotate-180 xl:max-w-[450px]">
				<Image
					alt="grid"
					src="/images/shape/grid-01.svg"
					width={0}
					height={0}
					loading="eager"
					className="w-[540px] h-[254px]"
					style={{ width: "100%", height: "auto" }}
				/>
			</div>
		</>
	);
}

export default GridShape;
