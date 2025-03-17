/**
 * @type {import('next').NextConfig}
 */
const path = require('path');
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  experimental: {
    appDir: true,
    serverActions: true,
  },
};
