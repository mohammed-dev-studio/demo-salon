import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: produces plain HTML in `out/`. No server required.
  output: "export",
  // Required for static export when using next/image. We use plain <img>
  // in most places, but this keeps the build safe if one is added later.
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
