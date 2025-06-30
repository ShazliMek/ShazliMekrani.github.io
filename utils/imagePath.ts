"use client";

// IMPORTANT: This utility fixes image paths for GitHub Pages user sites
// For ShazliMekrani.github.io

export function getImagePath(path: string): string {
  // Handle empty paths
  if (!path) return 'placeholder.jpg'; // No leading slash
  
  // External URLs stay as-is
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  
  // CRITICAL FIX FOR GITHUB PAGES: Use relative paths without leading slash
  if (typeof window !== 'undefined') {
    // For GitHub Pages user sites (username.github.io)
    if (window.location.hostname.includes('github.io')) {
      // Remove leading slash for GitHub Pages
      return path.startsWith('/') ? path.substring(1) : path;
    }
  }
  
  // Local development: use absolute paths
  return path.startsWith('/') ? path : `/${path}`;
}
