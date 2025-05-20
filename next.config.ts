import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        deviceSizes: [640, 768],
        domains: ["*.cdninstagram.com"],
    },
};

export default nextConfig;
