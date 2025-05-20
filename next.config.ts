import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        deviceSizes: [640, 768],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.cdninstagram.com",
            },
        ],
    },
};

export default nextConfig;
