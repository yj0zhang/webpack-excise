/**
 * mode development production
 * entry 入口文件
 * output path filename 打包输出文件夹和文件名
 * devtool source-map
 * module rules loader
 * plugins 插件
 * devServer 开发服务器
 */

const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: resolve(__dirname, "src/app.js"),
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devtool: "source-map",
  resolveLoader: {
    modules: ["node_modules", resolve(__dirname, "loaders")], //寻找loader的路径
  },
  module: {
    rules: [
      {
        test: /\.tpl$/,
        //loader的顺序是从后到前
        use: [
          "babel-loader",
          {
            loader: "tpl-loader",
            options: {
              log: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "index.html"),
    }),
  ],
  devServer: {
    port: 3333,
  },
};
