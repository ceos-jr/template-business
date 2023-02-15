/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 350],
    deviceSizes: [375, 640, 750, 1080, 1400, 1920, 3840],
    domains: ["images.unsplash.com"],
  },
}
