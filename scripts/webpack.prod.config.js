const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: "production",
    output: {
        publicPath: "https://cdn.zyj.com/"//静态文件路径，一般是静态服务器的地址
    },
    plugins: [],
    optimization: {
        minimizer: [
            new UglifyJsPlugin(),
            new OptimizeCSSAssetsPlugin()
        ]
    }
})