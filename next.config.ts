export default {
  // experimental: {
  //   ppr: true,
  //   inlineCss: true,
  //   useCache: true,
  //   reactOwnerStack: true,
  //   newDevOverlay: true
  // },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
    ],
  },
};
