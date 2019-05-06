const path = require("path");
const webpack = require("webpack");
const dllUtil = require("./dll-util");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AssetsPlugin = require("assets-webpack-plugin"); // 生成文件名，配合HtmlWebpackPlugin增加打包后dll的缓存

module.exports = {
  mode: "production",
  entry: { ...dllUtil.libs },
  output: {
    path: path.join(__dirname, "../vendor"),
    filename: "[name].vendor.[chunkhash:8].js",
    library: "[name]"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: "../", //同extract-text-webpack-plugin一样,与url-loader里的outputPath对应
              filename: "[name].[contenthash:8].css"
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        query: {
          limit: 10000,
          name: "img/[name].[hash:8].[ext]"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        query: {
          limit: 10000,
          name: "fonts/[name].[hash:8].[ext]"
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: path.join(__dirname, "../vendor", "[name]-manifest.json"),
      name: "[name]",
      context: __dirname
    }),
    new MiniCssExtractPlugin("[name].[hash:8].css"),
    new AssetsPlugin({
      filename: "bundle-config.json",
      path: "./vendor"
    })
  ]
};
