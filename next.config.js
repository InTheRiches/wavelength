/** @type {import('next').NextConfig} */
const nextConfig = {
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
}

module.exports = nextConfig
