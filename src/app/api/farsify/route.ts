import { NextResponse } from "next/server";
import { encodeConfigToSms, decodeSmsToConfig } from "@/lib";

export async function POST(req: Request) {
	try {
		const { mode, input } = await req.json();

		if (!mode || !input) {
			return NextResponse.json(
				{ error: "Missing mode or input" },
				{ status: 400 },
			);
		}

		let result = "";
		if (mode === "encode") {
			result = encodeConfigToSms(input);
		} else if (mode === "decode") {
			result = decodeSmsToConfig(input);
		} else {
			return NextResponse.json(
				{ error: "Invalid mode, must be 'encode' or 'decode'" },
				{ status: 400 },
			);
		}

		return NextResponse.json({ result });
	} catch (error: any) {
		return NextResponse.json(
			{ error: error.message || "Internal Server Error" },
			{ status: 500 },
		);
	}
}
