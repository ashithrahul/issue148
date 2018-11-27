const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: ["babel-polyfill","./src/index.js"],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
          query: {
            modules: true,
          }
        }, {
          loader: "sass-loader",
        }],
      },{
        test: /\.css/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
          query: {
            modules: true,
          }
        }],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  node: {
    fs: "empty"
  }
};
