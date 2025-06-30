#!/bin/bash

# Clean up previous build artifacts
rm -rf .next out

# Build the Next.js app
echo "🔨 Building Next.js app..."
npx --no-install next build

# Check if the build succeeded
if [ ! -d "out" ]; then
  echo "❌ Build failed! The 'out' directory was not created."
  exit 1
fi

echo "✅ Build successful! The 'out' directory was created."

# Create a CNAME file if needed for a custom domain
# echo "yourdomain.com" > out/CNAME

# For GitHub Pages user/org sites, copy images to the root
echo "📋 Copying all images from public directory to root of out directory..."
cp -v public/*.jpg public/*.png public/*.svg out/

echo "🚀 Deployment ready! You can now push the 'out' directory to GitHub."
echo "✨ After pushing, your images should be accessible at https://shazlimekrani.github.io/image.jpg"
