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
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
      },
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 350],
    deviceSizes: [375, 640, 750, 1080, 1400, 1920, 3840],
  },
  theme: {
    screens: {
      sm: { min: "375", max: "767px" },

      md: { min: "768px", max: "1023px" },

      lg: { min: "1024px", max: "1279px" },

      xl: { min: "1280px", max: "1535px" },

      "2xl": { min: "1536px" },
    },
  },
}
