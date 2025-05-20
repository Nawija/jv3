import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        deviceSizes: [640, 768],
        domains: ["*.cdninstagram.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "scontent-waw2-2.cdninstagram.com",
            },
            {
                protocol: "https",
                hostname: "scontent-waw2-1.cdninstagram.com",
            },
            {
                protocol: "https",
                hostname: "scontent-waw1-1.cdninstagram.com",
            },
            {
                protocol: "https",
                hostname: "scontent-iad3-1.cdninstagram.com",
            },
        ],
    },
};

export default nextConfig;
