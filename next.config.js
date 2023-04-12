/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/products/deleted_forever',
        destination: '/products',
        permanent: true
      }
    ]
  },

  // url 노출을과 다르게 설정할 수 있다
  async rewrites() {
    return [
      {
        source: '/wks',
        destination: '/about/'
      },
      {
        source: '/items/:slug',
        destination: '/products/:slug'
      }
    ]
  }
}

module.exports = nextConfig
