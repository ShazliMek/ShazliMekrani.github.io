"use client";

// This utility ensures that image paths work correctly in both development 
// and when deployed to GitHub Pages

export function getImagePath(path: string): string {
  if (!path) return '/placeholder.jpg';
  if (path.startsWith('http') || path.startsWith('data:')) return path;

  // Use <base> tag if present (for GitHub Pages)
  if (typeof document !== 'undefined') {
    const baseTag = document.querySelector('base');
    if (baseTag && baseTag.getAttribute('href')) {
      const baseHref = baseTag.getAttribute('href')!;
      // Remove leading slash from path to avoid double slashes
      const cleanPath = path.startsWith('/') ? path.slice(1) : path;
      return baseHref.endsWith('/')
        ? `${baseHref}${cleanPath}`
        : `${baseHref}/${cleanPath}`;
    }
  }

  // Fallback for SSR or if no base tag
  return path.startsWith('/') ? path : `/${path}`;
}
