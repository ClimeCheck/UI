/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
<<<<<<< HEAD

=======
  webpack5: false,
>>>>>>> 5192e39 (fix)
  experimental: { esmExternals: true },
};

module.exports = nextConfig;
