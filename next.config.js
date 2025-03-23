/**
 * @type {import('next').NextConfig}
 */
// Update your sassOptions to include prependData

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    prependData: '@use "@styles/index" as *;',
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
