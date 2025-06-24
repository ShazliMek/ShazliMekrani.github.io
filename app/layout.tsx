import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GradientBackground from "@/components/GradientBackground";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Creative Developer",
  description: "Personal portfolio website showcasing projects and skills in web development.",
  keywords: ["developer", "portfolio", "web development", "react", "next.js", "frontend", "backend"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script id="fix-paths-script" strategy="beforeInteractive">
          {`
            // Fix paths for GitHub Pages
            (function() {
              // Add base tag for GitHub Pages
              const baseElement = document.createElement('base');
              
              // Check if we're on GitHub Pages
              const isGitHubPages = window.location.hostname.includes('github.io');
              
              if (isGitHubPages) {
                // For username.github.io repos, we don't need a path segment
                if (window.location.hostname.split('.')[0] === window.location.hostname.split('.github.io')[0]) {
                  baseElement.href = '/';
                } else {
                  // For project repos, we need the repo name
                  const pathSegments = window.location.pathname.split('/');
                  if (pathSegments.length > 1) {
                    baseElement.href = '/' + pathSegments[1] + '/';
                  }
                }
                
                // Define a global helper for image paths
                window.__fixImagePath = function(path) {
                  if (!path || path === '/') return './placeholder.jpg';
                  if (path.startsWith('http') || path.startsWith('data:')) return path;
                  return './' + (path.startsWith('/') ? path.substring(1) : path);
                };
              } else {
                // Development environment
                baseElement.href = '/';
                window.__fixImagePath = function(path) { return path; };
              }
              
              document.head.appendChild(baseElement);
            })();
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GradientBackground />
        {children}
      </body>
    </html>
  );
}
