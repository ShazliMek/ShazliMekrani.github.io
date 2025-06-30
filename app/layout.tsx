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
        {/* Advanced base path setup for GitHub Pages */}
        <Script id="base-path-script" strategy="beforeInteractive">
          {`
            (function() {
              // For GitHub Pages deployments
              if (window.location.hostname.includes('github.io')) {
                // Get the repository name from the pathname
                const pathParts = window.location.pathname.split('/');
                const repoName = pathParts[1] || '';
                
                // Add a base tag with the appropriate href
                const base = document.createElement('base');
                
                // If there's a repo name, include it in the base path
                if (repoName) {
                  base.href = '/' + repoName + '/';
                } else {
                  // We're at username.github.io directly (root)
                  base.href = '/';
                }
                
                document.head.appendChild(base);
                
                // Add meta tags to help debug
                const meta = document.createElement('meta');
                meta.name = 'github-pages-deployment';
                meta.content = 'true';
                document.head.appendChild(meta);
                
                const repoMeta = document.createElement('meta');
                repoMeta.name = 'github-pages-repo';
                repoMeta.content = repoName || 'root';
                document.head.appendChild(repoMeta);
                
                console.log('GitHub Pages environment detected. Base path set to:', base.href);
              }
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
