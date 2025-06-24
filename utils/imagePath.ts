"use client";

// This utility ensures that image paths work correctly in both development 
// and when deployed to GitHub Pages

export function getImagePath(path: string): string {
  // If we're in browser environment, use the global helper
  if (typeof window !== 'undefined') {
    // Safe access to the global helper function
    const fixPath = (window as { __fixImagePath?: (path: string) => string }).__fixImagePath;
    if (fixPath) return fixPath(path);
  }

  // Fallback behavior when the global helper isn't available
  
  // If the path already starts with http or data:, it's an external image or data URI
  if (path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }
  
  // If this is an empty path, return a fallback image
  if (!path || path === '/') {
    return '/placeholder.jpg';
  }
  
  // For GitHub Pages, we'd want a relative path
  const isServer = typeof window === 'undefined';
  const isGitHubPages = !isServer && window.location.hostname.includes('github.io');
  
  if (isGitHubPages) {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `./${cleanPath}`;
  }

  // In all other cases, return the path as is (works for local development)
  return path;
}
