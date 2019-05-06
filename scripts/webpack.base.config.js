const CleanWebpackPlugin = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const bundleConfig = require("../vendor/bundle-config.json")//调入生成的的路径json
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: path.join(__dirname, "../src/index.js")
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "../dest")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        // options: {
				// 	loaders: {
				// 		css: ExtractTextPlugin.extract({
				// 			use: 'css-loader',
				// 			fallback: 'vue-style-loader'
				// 		})
				// 	}
				// }
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
        // use: ExtractTextPlugin.extract({
				// 	fallback: "vue-style-loader",
				// 	use: [{
				// 			loader: 'css-loader',
				// 			options: {
				// 				//支持@import引入css
				// 				importLoaders: 1
				// 			}
        //     },
        //     'sass-loader'
				// 	]
				// })
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
        loader: "file-loader",
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
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new webpack.DllReferencePlugin({
      manifest: require("../vendor/vue-manifest.json"),
      context: __dirname
    }),
    new webpack.DllReferencePlugin({
      manifest: require("../vendor/element-manifest.json"),
      context: __dirname
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      elementCss: bundleConfig.element.css,
      elementJs: bundleConfig.element.js,
      vueJs: bundleConfig.vue.js,
      env: "development",
    }),
  ],
  optimization: {
    // splitChunks: {
    //   cacheGroups: {
    //     commons: {
    //       chunks: 'initial',
    //       minChunks: 2,
    //       maxInitialRequests: 2, // The default limit is too small to showcase the effect
    //       minSize: 30, // This is example is too small to create commons chunks
    //       name: 'common'
    //     }
    //   }
    // },
    runtimeChunk: "single"
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      vue$: "vue",
      "@": path.resolve(__dirname, '../src')
    }
  }
};
