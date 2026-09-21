import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allows the dev server (HMR/Fast Refresh) to be reached from phones on the
  // local network, e.g. http://192.168.0.x:3000, so live edits actually
  // reach mobile devices being used for testing instead of silently failing.
  allowedDevOrigins: ["192.168.0.160", "192.168.0.*"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent this site from being embedded in an iframe on another
          // origin (clickjacking protection).
          { key: "X-Frame-Options", value: "DENY" },
          // Stop browsers from MIME-sniffing responses away from the
          // declared Content-Type.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Force HTTPS for this host (and subdomains) for a year, including
          // on first visit for browsers that preload this list.
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
