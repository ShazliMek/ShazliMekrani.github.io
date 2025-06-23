import type { NextConfig } from "next";

// GitHub Pages will be served from /<repository-name>
// Set basePath to your repository name if you're using a custom domain
// or leave it empty if you're using <username>.github.io as your repo name
const repoName = process.env.GITHUB_REPOSITORY 
  ? process.env.GITHUB_REPOSITORY.split('/')[1] 
  : '';

// If the repo is <username>.github.io, we don't need a basePath
const basePath = repoName.endsWith('.github.io') ? '' : `/${repoName}`;

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  // Disable image optimization because GitHub Pages doesn't support it
  // and enable webpack support for handling image paths correctly
  webpack: (config) => {
    return config;
  },
  // This ensures image paths are correct for static export
  trailingSlash: true,
};

export default nextConfig;
