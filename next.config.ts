/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn1.youla.io", "avatars.mds.yandex.net"], // Add allowed external hosts
  },
};

module.exports = nextConfig;
