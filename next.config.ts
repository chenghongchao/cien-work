import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: { tsconfigPath: "tsconfig.next.json" },
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: "/projects/:slug", destination: "/results", permanent: true },
    ];
  },
};

export default nextConfig;
