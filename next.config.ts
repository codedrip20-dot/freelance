import type { NextConfig } from "next";

const isNetlify = process.env.NETLIFY === "true";

const nextConfig: NextConfig = {
  ...(isNetlify
    ? {}
    : {
        output: "export",
      }),

  images: {
    unoptimized: true,
  },
};

export default nextConfig;