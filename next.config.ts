import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
	basePath: basePath,

	output: "standalone",

	typedRoutes: true,

	reactCompiler: true,

	reactStrictMode: process.env.NODE_ENV === "development",

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "127.0.0.1",
			},
			{
				protocol: "https",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "pouria-drd.ir",
			},
		],
	},
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
