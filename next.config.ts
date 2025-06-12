import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: "attachment",
        contentSecurityPolicy:
            "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",
            },
            {
                protocol: "http",
                hostname: "*",
            },
        ],
    },
    /* config options here */
    output: "standalone",
};

export default nextConfig;
