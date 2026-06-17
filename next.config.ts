/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    "192.168.1.14",     // Aapka current IP
    "localhost",
    "0.0.0.0"
  ],
  
  // Extra safe settings (content loading ke liye)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;