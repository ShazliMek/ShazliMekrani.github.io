/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // For GitHub Pages deployment
  // We're using dynamic path resolution in the browser
  // so we don't need these settings to be hardcoded
  basePath: '',
  // We're handling asset paths through our utility function
  // Adding / at the end of URLs helps with path resolution
  trailingSlash: true,
  // Make images work with static export
  images: {
    unoptimized: true,
  },
  // This ensures we can see the exported files in /out and helps when debugging
  distDir: process.env.NODE_ENV === 'development' ? '.next' : 'out',
};

export default nextConfig;


