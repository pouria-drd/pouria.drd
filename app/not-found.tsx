"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui";
import { GridShape } from "@/components/common";

function NotFoundPage() {
	const t = useTranslations("Pages.NotFoundPage");

	return (
		<div className="fixed min-h-screen bg-background w-full left-0 top-0 z-1000">
			<div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1">
				<GridShape />
				<div className="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
					{/* <h1 className="mb-8 font-bold text-4xl sm:text-6xl">
						{t("title")}
					</h1> */}

					<Image
						alt="404"
						width={0}
						height={0}
						loading="eager"
						src="/images/error/404.svg"
						className="dark:hidden w-[472px] h-[152px]"
						style={{ width: "100%", height: "auto" }}
					/>
					<Image
						alt="404"
						width={0}
						height={0}
						src="/images/error/404-dark.svg"
						className="hidden dark:block w-[472px] h-[152px]"
						style={{ width: "100%", height: "auto" }}
					/>

					<p className="mt-10 mb-6 text-base  sm:text-lg">
						{t("description")}
					</p>
					<Link href={"/"}>
						<Button size={"lg"} variant={"outline"}>
							{t("button")}
						</Button>
					</Link>
				</div>
				{/* <!-- Footer --> */}
				<p className="font-mono absolute text-base -translate-x-1/2 bottom-6 left-1/2">
					{t("copyright", { year: new Date().getFullYear() })}
				</p>
			</div>
		</div>
	);
}

export default NotFoundPage;
