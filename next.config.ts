import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  
  // Static export for Cloudflare Pages
  output: 'export',
  distDir: 'dist',
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
    // Required for static export
    unoptimized: true,
  },
}

export default nextConfig
