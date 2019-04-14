const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

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
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.js(x)?$/,
        exclude: "/node_modules",
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|svg|jp(e*)g|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            limit: 8000,
            outputPath: "static/",
            publicPath: "static/"
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([{ from: "./client/src/static/favicon.ico" }])
  ]
};
