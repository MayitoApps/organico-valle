/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'static1.squarespace.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/spa',
        destination: 'https://www.origencentroholisticoyspa.com/',
        permanent: true,
      },
      {
        source: '/habitaciones',
        destination: '/nuestras-habitaciones',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contacto',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/quienes-somos',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
