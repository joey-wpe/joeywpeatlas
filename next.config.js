const { withFaust } = require('@faustwp/core');
const { withAtlasConfig } = require('@wpengine/atlas-next');
const { getWpHostname } = require('@faustwp/core');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['node_modules'],
  },
  images: {
    domains: [getWpHostname()],
  },
//  i18n: {
//    locales: ['en'],
   // defaultLocale: 'en',
 // },
};

// Combine the configurations using both `withFaust` and `withAtlasConfig`
module.exports = withFaust(withAtlasConfig(nextConfig));
