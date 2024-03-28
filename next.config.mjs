/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "serool-storage.s3.eu-west-2.amazonaws.com",
        port: "",
        pathname: "/next-s3-uploads/**"
      }
    ]
  }
};

export default nextConfig;
