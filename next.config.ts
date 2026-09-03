import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // Force Turbopack to use the directory where next.config.ts lives
    root: path.join(__dirname),
  },

  allowedDevOrigins: ['10.0.0.189'],
  
};

export default nextConfig;
