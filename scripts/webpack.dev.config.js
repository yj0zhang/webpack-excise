const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: "development",
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '../dest')
    },
    devServer: {
        hot: true
    },
    module: {
        rules: []
    },
    plugins: [
        new ExtractTextPlugin({filename: "[name].css", allChunks: true}),
    ]
})