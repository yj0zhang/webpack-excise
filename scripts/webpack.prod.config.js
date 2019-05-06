const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: "production",
    output: {
        publicPath: "./"
    },
    plugins: [],
    optimization: {
        minimizer: [
            new UglifyJsPlugin(),
            new OptimizeCSSAssetsPlugin()
        ]
    }
})