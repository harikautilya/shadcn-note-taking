/** @type {import('next').NextConfig} */



const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, context) => {
    // Enable polling based on env variable being set
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 500,
      ignored: "**/node_modules"
    }
    return config;
  },
}

export default nextConfig;
