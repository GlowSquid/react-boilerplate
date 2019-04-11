const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  entry: "./server/server.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/build"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules",
        options: {
          presets: [
            "@babel/preset-react",
            [
              "@babel/preset-env"
              // {
              //   targets: { browsers: ["last 2 versions"] }
              // }
            ]
          ]
        }
      }
    ]
  },
  externals: [webpackNodeExternals()]
};
