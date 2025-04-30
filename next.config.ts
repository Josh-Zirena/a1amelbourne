import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [], // Add any external domains if you're using external images
    unoptimized: false, // Enable image optimization
  },
};

export default nextConfig;
