/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["nurserylive.com"],
  },
};

module.exports = nextConfig;
