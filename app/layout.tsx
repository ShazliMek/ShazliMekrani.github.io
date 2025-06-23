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
        <Script id="base-path-script" strategy="beforeInteractive">
          {`
            // Add base tag for GitHub Pages
            const baseElement = document.createElement('base');
            // Check if we're on GitHub Pages
            const isGitHubPages = window.location.hostname.includes('github.io');
            if (isGitHubPages) {
              // Get the pathname segments
              const pathSegments = window.location.pathname.split('/');
              // If the site is at username.github.io/repo-name
              if (pathSegments.length > 1) {
                baseElement.href = '/' + pathSegments[1] + '/';
              }
            }
            document.head.appendChild(baseElement);
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
