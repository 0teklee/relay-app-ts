/** @type {import('next').NextConfig} */
const Dotenv = require("dotenv-webpack");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.plugins.push(new Dotenv({ silent: true }));
    config.resolve.preferRelative = true;
    return config;
  },
  compiler: {
    relay: {
      src: "./",
      artifactDirectory: "libs/relay/__generated__",
      language: "typescript",
    },
  },
};

module.exports = nextConfig;
