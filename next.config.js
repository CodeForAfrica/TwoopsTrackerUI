module.exports = {
  images: {
    domains: process.env.NEXT_PUBLIC_IMAGE_DOMAINS.split(", "),
  },
  reactStrictMode: false,
  webpack: function webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: [
          "@svgr/webpack",
          {
            loader: "svg-url-loader",
            options: {},
          },
        ],
      },
      {
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
        // options: { mode: ["html"] },
      }
    );
    return config;
  },
};
