import Image from "next/image";

const GridShape = () => {
    return (
        <>
            <div className="absolute right-0 top-0 -z-1 w-full max-w-[250px] xl:max-w-[450px]">
                <Image
                    alt="grid"
                    width={540}
                    height={254}
                    src="/images/shape/grid-01.svg"
                />
            </div>
            <div className="absolute bottom-0 left-0 -z-1 w-full max-w-[250px] rotate-180 xl:max-w-[450px]">
                <Image
                    alt="grid"
                    width={540}
                    height={254}
                    src="/images/shape/grid-01.svg"
                />
            </div>
        </>
    );
};

export default GridShape;
