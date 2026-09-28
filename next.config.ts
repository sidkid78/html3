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
      {
        source: "/executive-report",
        destination: "/executive-report.html",
      },
      {
        source: "/worker-1",
        destination: "/worker-1.html",
      },
      {
        source: "/worker-1-2",
        destination: "/worker-1-2.html",
      },
      {
        source: "/worker-1-3",
        destination: "/worker-1-3.html",
      },
      {
        source: "/worker-1-4",
        destination: "/worker-1-4.html",
      },
      {
        source: "/domain-correction",
        destination: "/domain-correction.html",
      },
    ];
  },
};

export default nextConfig;
