"use client";

import "./assets/styles/globals.css";

import Image from "next/image";
import { Button } from "@/components/ui";
import { GridShape } from "@/components/common";

interface GlobalErrorProps {
	reset: () => void;
	error: Error & { digest?: string };
}

export default function GlobalError(props: GlobalErrorProps) {
	if (process.env.NODE_ENV === "development") {
		console.error(props.error);
	}

	const handleReset = () => {
		// props.reset();
		window.location.href = "/";
	};

	return (
		<html>
			<body>
				<div className="fixed min-h-screen bg-background w-full left-0 top-0 z-1000">
					<div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1">
						<GridShape />

						<div className="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
							<Image
								alt="500 Error"
								width={0}
								height={0}
								loading="eager"
								src="/images/error/500.svg"
								className="dark:hidden w-[472px] h-[152px]"
								style={{ width: "100%", height: "auto" }}
							/>

							<Image
								alt="500 Error"
								width={0}
								height={0}
								src="/images/error/500-dark.svg"
								className="hidden dark:block w-[472px] h-[152px]"
								style={{ width: "100%", height: "auto" }}
							/>

							<p className="mt-10 mb-6 text-base sm:text-lg">
								An unexpected error occurred. Please try again.
							</p>

							<Button
								size={"lg"}
								variant={"outline"}
								onClick={handleReset}>
								Back to Home Page
							</Button>
						</div>

						<p className="font-mono absolute text-base -translate-x-1/2 bottom-6 left-1/2">
							© {new Date().getFullYear()} Pouria Darandi, All
							rights reserved.
						</p>
					</div>
				</div>
			</body>
		</html>
	);
}
