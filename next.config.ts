/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn1.youla.io", "avatars.mds.yandex.net", "scx2.b-cdn.net",'institutfrancais.ru','i.shgcdn.com',"www.ft.com",
      "s.yimg.com",
      "media.zenfs.com",
      "digital.ihg.com",], // Add allowed external hosts
  },
};

module.exports = nextConfig;
