/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
