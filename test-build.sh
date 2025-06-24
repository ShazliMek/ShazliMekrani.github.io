#!/bin/bash
# Simple script to test the build process locally

echo "Removing old next.config.ts if it exists"
rm -f next.config.ts

echo "Building Next.js site..."
npm run build

echo "Checking if out directory exists:"
if [ -d "./out" ]; then
    echo "Success! Out directory exists. Contents:"
    ls -la ./out
else
    echo "ERROR: Out directory does not exist after build."
    exit 1
fi

echo "Build completed successfully!"
