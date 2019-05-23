const CleanWebpackPlugin = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const bundleConfig = require("../vendor/bundle-config.json")//调入生成的的路径json
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const devMode = process.env.NODE_ENV === "development";

module.exports = {
  entry: {
    app: path.join(__dirname, "../src/index.js")
  },
  output: {
    filename: devMode?"[name].bundle.js":"[name].bundle.[hash:8].js",
    path: path.join(__dirname, "../dest")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      // 这样写，不会抽出样式
      // {
      //   test: /\.scss$/,
      //   use: ["vue-style-loader", "css-loader", "sass-loader"]
      // },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              //支持@import引入css
              importLoaders: 1
            }
          },
          'sass-loader'
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              //支持@import引入css
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [path.join(__dirname, "../src")]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "fonts/[name].[ext]"
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "image/[name].[ext]"
        }
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerPort: 9999
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new webpack.DllReferencePlugin({
      manifest: require("../vendor/libs-manifest.json"),
      context: __dirname
    }),
    new MiniCssExtractPlugin({filename: devMode?"[name].css":"[name].[chunkhash:8].css", allChunks: true}),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      libsJs: bundleConfig.libs.js,
      env: "development",
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        chunks: 'all',
        common: {
          test:/[\\/]src[\\/]js[\\/]/,
          minSize: 10,//要生成的块的最小大小（以字节为单位）
          minChunks: 1,//其他entry引用次数大于1
          // name: 'common',
          reuseExistingChunk: true,
          maxInitialRequests: 6,// entry文件请求的chunks不应该超过此值
          // maxAsyncRequests 异步请求的chunks不应该超过此值
          priority: 10,
        },
        vendor: {
          name: true,
          test: /[\\/]node_modules[\\/]/,
          priority: 15,
          chunks: 'all',
          reuseExistingChunk: true,
        },
        elementUI: {
          name: 'element-ui',
          test: /[\\/]node_modules[\\/]element-ui[\\/]/,
          priority: 20,
          //虽然在cacheGroups下已经写了chunks: 'all'，但是这里如果不加的话，还是会把element-ui打包进app，不知道为什么，vendor同理
          chunks: 'all',
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      vue$: "vue",
      "@": path.resolve(__dirname, '../src')
    }
  }
};
