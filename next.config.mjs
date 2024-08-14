
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'zaha.alwatanynews.com'
        ]
    },
    async rewrites() {
        return [
          {
            source: '/sitemap.xml',
            destination: '/api/sitemap',
          },
        ];
      },

};

export default nextConfig;
