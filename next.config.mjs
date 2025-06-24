/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // For GitHub Pages username.github.io repositories
  // If this is deployed to https://username.github.io/
  // we don't need a basePath
  basePath: '',
  // Make sure to add this to fix images
  assetPrefix: '.',
  // Make images work with static export
  images: {
    unoptimized: true,
  },
  // Helps with GitHub Pages serving
  trailingSlash: true,
};

export default nextConfig;
