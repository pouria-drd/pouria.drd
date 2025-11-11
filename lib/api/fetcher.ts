"use server";

import { ApiResult, ErrorStatusMap, ErrorType } from "@/types";

async function apiFetch<T>(
	url: string,
	options: RequestInit = {},
	cache: RequestCache = "no-store",
): Promise<ApiResult<T>> {
	try {
		const response = await fetch(`${process.env.BASE_API_URL}${url}`, {
			...options,
			headers: {
				"Content-Type": "application/json",
				...options.headers,
			},
			cache: cache,
		});

		const isJson = response.headers
			.get("content-type")
			?.includes("application/json");
		const body = isJson ? await response.json().catch(() => null) : null;

		if (!response.ok) {
			const errorType =
				Object.entries(ErrorStatusMap).find(
					([, code]) => code === response.status,
				)?.[0] ?? "Internal";

			return {
				success: false,
				message:
					body?.message ||
					`Request failed with status ${response.status}`,
				statusCode: response.status,
				type: errorType as ErrorType,
			};
		}

		return {
			success: true,
			data: body as T,
			message: "Request successful",
		};
	} catch (err: unknown) {
		if (process.env.NODE_ENV === "development") {
			console.error("[apiFetch]", err);
		}

		return {
			success: false,
			statusCode: 500,
			type: "Internal",
			message: "Internal server error",
		};
	}
}

export default apiFetch;
