import type { NextConfig } from "next";

// For GitHub Pages deployment
// Since your repo is ShazliMekrani.github.io, we don't need a basePath
// If it were another repo, we would set basePath to the repo name
const basePath = '';
const assetPrefix = '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,
  },
  // Disable image optimization because GitHub Pages doesn't support it
  // and enable webpack support for handling image paths correctly
  // Removed webpack config that was causing issues
  // This ensures image paths are correct for static export
  trailingSlash: true,
};

export default nextConfig;
