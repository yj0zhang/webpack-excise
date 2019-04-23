var path = require("path");
var merge = require("webpack-merge");
var baseConfig = require("./webpack.base.config");
var webpack = require("webpack")

module.exports = merge(baseConfig, {
    mode: "development",
    devServer: {
        hot: true
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: []
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin()
    ]
})