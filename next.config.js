/**
 * @type {import('next').NextConfig}
 */
// Update your sassOptions to include prependData
const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: '@use "@styles/variables" as *;',
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
