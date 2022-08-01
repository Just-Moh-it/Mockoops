const path = require("path");
const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@import "_theme.scss";`,
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  reactStrictMode: false,
  images: {
    domains: [
      "api.producthunt.com",
      "pbs.twimg.com",
      "unavatar.io",
      "mohitya.dev",
    ],
  },
});

module.exports = nextConfig;
