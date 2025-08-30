"use server";

const API_URL = process.env.API_URL;
const ARZWATCH_TOKEN = process.env.ARZWATCH_TOKEN;

async function arzwatch(
	category?: InstrumentCategory,
): Promise<ApiResponse<Instrument>> {
	if (!API_URL || !ARZWATCH_TOKEN) {
		throw new Error(
			"API_URL or ARZWATCH_TOKEN is not defined in environment variables",
		);
	}

	try {
		const url = `${API_URL}/instruments/?category=${category}`;
		const response = await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Api-Key ${ARZWATCH_TOKEN}`,
			},
			//   cache: "no-store",
		});

		if (!response.ok) {
			return {
				success: false,
				error: `API request failed: ${response.statusText}`,
			};
		}

		const rawData = await response.json();

		return {
			success: true,
			data: rawData,
		};
	} catch (error) {
		return {
			success: false,
			error:
				error instanceof Error
					? error.message
					: "Unknown error occurred",
		};
	}
}

export default arzwatch;
