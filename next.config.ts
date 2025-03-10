import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
    output: "standalone",
    reactStrictMode: process.env.NODE_ENV === "development",

    basePath: basePath,

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

export default nextConfig;
