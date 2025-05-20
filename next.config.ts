import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        deviceSizes: [640, 768, 1024, 1280, 1600],
        imageSizes: [16, 32, 48, 64, 96],
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "scontent-waw2-2.cdninstagram.com",
                port: "", // lub pomiń
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "scontent-waw2-1.cdninstagram.com",
                port: "", // lub pomiń
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "scontent-waw1-1.cdninstagram.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
