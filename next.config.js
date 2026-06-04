/**
 * @type {import('next').NextConfig}
 *
 * The Next.js configuration enables modern features like the App Router
 * and server actions. Internationalisation (i18n) is configured to
 * support French (default), German, Italian and English locales. Image
 * optimisation is turned off because this project uses manually
 * provided assets rather than relying on the built‑in optimisation
 * pipeline. Feel free to adjust these settings before deploying to
 * production.
 */
const nextConfig = {
  experimental: {
    // Enable server actions which allow writing server‑side logic
    // directly in your React components. See
    // https://nextjs.org/docs/app/api-reference/functions/use-server for details.
    serverActions: true
  },
  i18n: {
    locales: ['fr', 'de', 'it', 'en'],
    defaultLocale: 'fr',
    localeDetection: true
  },
  images: {
    // Disable the image optimisation pipeline. Next.js will serve
    // imported images at their original resolution. You can enable
    // optimisation later if you add external domains or a custom loader.
    unoptimized: true
  }
};

module.exports = nextConfig;