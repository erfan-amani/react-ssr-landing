const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const clientConfig = {
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
};

module.exports = merge(baseConfig, clientConfig);
