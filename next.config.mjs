/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.thecocktaildb.com",
      },
    ],
  },
};

export default nextConfig;
