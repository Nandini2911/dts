import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Use an absolute path for turbopack.root to satisfy Next.js.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
