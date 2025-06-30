"use client";

// This utility ensures that image paths work correctly in both development 
// and when deployed to GitHub Pages

export function getImagePath(path: string): string {
  // Use placeholder for empty paths
  if (!path) {
    return '/placeholder.jpg';
  }
  
  // External URLs or data URIs are returned as is
  if (path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }

  // Check if we're running in a browser
  const isClient = typeof window !== 'undefined';
  
  if (isClient) {
    // First, check if there's a base tag we can use for path resolution
    const baseTag = document.querySelector('base');
    
    if (baseTag && baseTag.href) {
      try {
        // Parse the base URL to get just the path portion
        const baseUrl = new URL(baseTag.href);
        const basePath = baseUrl.pathname;
        
        // Clean the path by removing leading slash if present
        const cleanPath = path.startsWith('/') ? path.substring(1) : path;
        
        // Combine base path with image path, avoiding double slashes
        // If basePath ends with /, we don't need another slash
        const needsSlash = !basePath.endsWith('/');
        
        return `${basePath}${needsSlash ? '/' : ''}${cleanPath}`;
      } catch (e) {
        console.error('Error parsing base tag:', e);
        // Fall back to default behavior if URL parsing fails
      }
    }
    
    // If we're on GitHub Pages but no base tag found
    if (window.location.hostname.includes('github.io')) {
      // Get the repository name from the pathname
      const pathParts = window.location.pathname.split('/');
      const repoName = pathParts[1] || '';
      
      // If there's a repo name, add it to the path
      if (repoName && !path.includes(repoName)) {
        // Make sure we don't double up on slashes
        const cleanPath = path.startsWith('/') ? path.substring(1) : path;
        return `/${repoName}/${cleanPath}`;
      }
    }
  }
  
  // For local development or server-side rendering, use absolute paths
  return path.startsWith('/') ? path : `/${path}`;
}
