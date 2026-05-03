import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/pirkkola.html", destination: "/pirkkola", permanent: true },
      { source: "/maunula.html", destination: "/maunula", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
