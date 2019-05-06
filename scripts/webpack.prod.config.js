
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(baseConfig, {
    mode: "production",
    output: {
        filename: '[name].bundle.[hash:8].js',
        path: path.join(__dirname, '../dest'),
        publicPath: "./"
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "[name].[chunkhash:8].css", allChunks: true})
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin(),
        ]
    }
})