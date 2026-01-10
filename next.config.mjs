import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for Vercel
  experimental: {
    // Reduce function invocations
    serverComponentsExternalPackages: ["@prisma/client"],
  },
  // Cache static assets
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default withNextIntl(nextConfig);
