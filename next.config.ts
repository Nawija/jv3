import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        deviceSizes: [640, 768, 1024, 1280, 1700],
        imageSizes: [16, 32, 48, 64, 96],
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.datocms-assets.com",
            },
        ],
    },
};

export default nextConfig;
