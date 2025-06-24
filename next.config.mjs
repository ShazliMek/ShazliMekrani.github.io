/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // No basePath needed for username.github.io repos
  // basePath: '',
  // Make images work with static export
  images: {
    unoptimized: true,
  },
  // Helps with GitHub Pages serving
  trailingSlash: true,
};

export default nextConfig;
