/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "perthvacatecleaning.com.au",
      },
    ],
  },
};

export default nextConfig;
