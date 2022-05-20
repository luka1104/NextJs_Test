require("dotenv").config();

module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, util: false, process: false, path: false, stream: false };

    return config;
  },
}
