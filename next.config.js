const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}

if (isProd) {
  nextConfig = {
    ...nextConfig,
    output: 'export',
  }
}

module.exports = nextConfig
