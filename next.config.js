/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
