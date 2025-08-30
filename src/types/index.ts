/* eslint-disable @typescript-eslint/no-unused-vars */

type IconProps = {
	className?: string;
};

type Project = {
	id: number;
	link: string;
	image: string;
	title: string;
	repoLink?: string;
	techStack: string[];
	description: string;
};

interface IEmailFormatStrategy {
	formatMessage(
		fullName: string,
		email: string,
		subject: string,
		message: string,
	): string;
}

interface DeviceInfo {
	ip_address: string;
	user_agent: string;
	device_type: "Mobile" | "Tablet" | "PC" | "Bot" | "Unknown";
	os: string;
	os_version: string;
	browser: string;
	browser_version: string;
	device_brand: string;
	device_model: string;
}

interface ApiData<T> {
	count: number;
	next: string | null;
	previous: string | null;
	results: T[];
}

interface ApiResponse<T> {
	error?: string;
	success: boolean;
	data?: ApiData<T>;
}

type InstrumentCategory = "gold" | "coin" | "crypto" | "currency";
type InstrumentCurrency = "USD" | "EUR" | "IRR" | "USDT";

type LatestPrice = {
	price: number;
	currency: InstrumentCurrency;
	timestamp: string;
	isFallback: boolean;
	meta: {
		source_url: string;
		[key: string]: any;
	};
};

type Instrument = {
	name: string;
	faName: string;
	symbol: string;
	timestamp: string;
	category: InstrumentCategory;
	latestPriceTick: LatestPrice;
};

/* eslint-enable @typescript-eslint/no-unused-vars */
