/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  compiler: {
    // Disable SWC and use Babel instead
    removeConsole: false,
  },
  experimental: {
    // Force use of Babel instead of SWC
    forceSwcTransforms: false,
  },
};

export default nextConfig;