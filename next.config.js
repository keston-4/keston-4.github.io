const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
let nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}

if (isProd) {
  console.log('IS PROD')
  nextConfig = {
    ...nextConfig,
    output: 'export',
  }
}

// module.exports = nextConfig
