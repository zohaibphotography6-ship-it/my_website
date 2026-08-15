/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Allow LAN IPs to access dev resources (HMR, etc.) when testing on phones / other devices.
  allowedDevOrigins: ['192.168.1.104', '127.0.0.1', 'localhost'],
}

export default nextConfig
