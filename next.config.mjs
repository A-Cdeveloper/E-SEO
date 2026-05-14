import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const cspProduction = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

/** Relaxed CSP for local `next dev` (HMR, websockets, etc.) */
const cspDevelopment = [
  "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: https: http: ws: wss:",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: http:",
  "style-src 'self' 'unsafe-inline' https:",
  "img-src 'self' data: blob: https: http:",
  "font-src 'self' data: https:",
  "connect-src 'self' https: http: ws: wss:",
  "frame-ancestors 'none'",
].join("; ");

/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["@prisma/client"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    const csp =
      process.env.NODE_ENV === "production"
        ? cspProduction
        : cspDevelopment;

    const base = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
      },
      { key: "X-DNS-Prefetch-Control", value: "on" },
      { key: "Content-Security-Policy", value: csp },
    ];

    if (
      process.env.VERCEL_ENV === "production" ||
      process.env.ENABLE_HSTS === "true"
    ) {
      base.push({
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      });
    }

    return [{ source: "/:path*", headers: base }];
  },
};

export default withNextIntl(nextConfig);
