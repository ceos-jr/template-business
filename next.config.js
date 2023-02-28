/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lever-client-logos.s3.us-west-2.amazonaws.com",
        port: "",
        pathname: "/7f79646a-e11b-4235-a63b-8b22e5034eac-1626955700749.png",
      },
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 350],
    deviceSizes: [375, 640, 750, 1080, 1400, 1920, 3840],
  },
}
