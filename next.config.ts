import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/domain-report-1",
        destination: "/domain-report-1.html",
      },
      {
        source: "/domain-report-2",
        destination: "/domain-report-2.html",
      },
      {
        source: "/domain-report-3",
        destination: "/domain-report-3.html",
      },
    ];
  },
};

export default nextConfig;
