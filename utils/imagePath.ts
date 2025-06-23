"use client";

// This utility ensures that image paths work correctly in both development 
// and when deployed to GitHub Pages

export function getImagePath(path: string): string {
  // If the path already starts with http or data:, it's an external image or data URI
  if (path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }

  // For local images, check if we're in a browser environment
  if (typeof window !== 'undefined') {
    // Get the base path from the HTML base tag if it exists
    const baseElement = document.querySelector('base');
    const basePath = baseElement ? baseElement.getAttribute('href') || '' : '';

    // If the path already starts with the base path, return it as is
    if (path.startsWith(basePath)) {
      return path;
    }

    // Otherwise, join the base path with the image path
    // First, remove any leading slash from the image path
    const imagePath = path.startsWith('/') ? path.substring(1) : path;
    return `${basePath}/${imagePath}`;
  }

  // If we're in a server environment or can't determine, return the path as is
  return path;
}
