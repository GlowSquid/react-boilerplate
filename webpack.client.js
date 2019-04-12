const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  target: "node",
  entry: "./client/src/index.js",
  output: {
    path: path.resolve(__dirname, "build/public"),
    publicPath: "/build/public",
    filename: "client_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules",
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [new CopyPlugin([{ from: "./client/src/img/favicon.ico" }])]
};
