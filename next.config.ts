import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Optimize for Vercel deployment
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
