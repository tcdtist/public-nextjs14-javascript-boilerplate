/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['lodash', 'react-icons'],
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}',
      preventFullImport: true,
    },
  },
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ['storage.googleapis.com', 'g-9vfu2gc8cya.vusercontent.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'torage.googleapis.com',
        port: '',
        pathname: '/**', 
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'g-9vfu2gc8cya.vusercontent.net',
        port: '',
        pathname: '/**', 
        search: '',
      },
    ]
  },
}

export default nextConfig
