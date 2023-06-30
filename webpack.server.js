const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const serverConfig = {
  mode: "development",
  target: "node",
  entry: "./src/server/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
};

module.exports = merge(baseConfig, serverConfig);
