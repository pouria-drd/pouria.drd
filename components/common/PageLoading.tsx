"use client";

import { Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui";

function PageLoading() {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-background z-50">
			<Card className="p-6 w-full max-w-xs shadow-lg">
				<CardContent className="flex flex-col items-center justify-center gap-4 p-4">
					<Loader2 className="size-10 animate-spin text-primary" />
				</CardContent>
			</Card>
		</div>
	);
}

export default PageLoading;
