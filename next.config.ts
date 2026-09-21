import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allows the dev server (HMR/Fast Refresh) to be reached from phones on the
  // local network, e.g. http://192.168.0.x:3000, so live edits actually
  // reach mobile devices being used for testing instead of silently failing.
  allowedDevOrigins: ["192.168.0.160", "192.168.0.*"],
};

export default nextConfig;
