/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo.krxweb.com",
      },
    ],
  },
};

export default nextConfig;
