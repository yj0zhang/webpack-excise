
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log(process.env.NODE_ENV)
module.exports = merge(baseConfig, {
    mode: "production",
    output: {
        filename: '[name].bundle.[hash].js',
        path: path.join(__dirname, '../dest'),
        publicPath: "dest/"
    },
    plugins: [
        new ExtractTextPlugin({filename: "[name].[chunkhash:8].css", allChunks: true}),
        // new MiniCssExtractPlugin("[name].[contenthash].css"),
    ]
})