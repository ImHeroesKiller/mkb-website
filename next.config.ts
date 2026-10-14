import type { NextConfig } from "next";

const repoName = "mkb-website";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
