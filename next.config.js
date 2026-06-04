/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['fr', 'de', 'it', 'en'],
    defaultLocale: 'fr',
    localeDetection: false
  },
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
