import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // @ts-expect-error - eslint config is valid but types might be outdated
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
