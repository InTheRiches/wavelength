/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()

const nextConfig = {
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  reactStrictMode: true,
  // next.config.js
  serverRuntimeConfig: {
    port: 3000
  },
  async rewrites() {
    return [
      {
        source: "/privacy",
        destination: "/html/privacy.html",
      }
    ]
  }
};

module.exports = withMDX(nextConfig);
