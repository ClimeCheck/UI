/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },

  experimental: { esmExternals: true },
};

module.exports = nextConfig;
