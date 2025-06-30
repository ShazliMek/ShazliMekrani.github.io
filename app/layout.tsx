import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GradientBackground from "@/components/GradientBackground";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
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
        {/* GitHub Pages debugging script */}
        <Script id="github-pages-debug" strategy="beforeInteractive">
          {`
            (function() {
              // Log information useful for debugging image paths
              window.addEventListener('DOMContentLoaded', function() {
                const isGitHubPages = window.location.hostname.includes('github.io');
                console.log('Environment info:', {
                  hostname: window.location.hostname,
                  isGitHubPages: isGitHubPages,
                  pathname: window.location.pathname,
                  protocol: window.location.protocol,
                  href: window.location.href
                });
                
                if (isGitHubPages) {
                  // Add a meta tag to confirm GitHub Pages environment
                  const meta = document.createElement('meta');
                  meta.name = 'deployment-target';
                  meta.content = 'github-pages';
                  document.head.appendChild(meta);
                  
                  // Log all image paths to help with debugging
                  setTimeout(() => {
                    const images = document.querySelectorAll('img');
                    console.log('Images on page:', Array.from(images).map(img => ({
                      src: img.getAttribute('src'),
                      alt: img.getAttribute('alt'),
                      loaded: img.complete,
                      naturalWidth: img.naturalWidth
                    })));
                  }, 1000);
                }
              });
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
