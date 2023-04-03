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
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org"
      },
      {
        protocol: "https",
        hostname: "philosophy.redzambala.com"
      },
      {
        protocol: "https",
        hostname: "cdn.britannica.com",
      },
      {
        protocol: "https",
        hostname: "www.art-prints-on-demand.com",
      },
      {
        protocol: "https",
        hostname: "pt.wikipedia.org",
      },
      {
        protocol: "https",
        hostname: "static.todamateria.com.br",
      }
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 350],
    deviceSizes: [375, 640, 750, 1080, 1400, 1920, 3840],
  },
}
