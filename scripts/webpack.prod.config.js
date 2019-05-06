const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(baseConfig, {
    mode: "production",
    output: {
        publicPath: "./"
    },
    plugins: [],
    optimization: {
        minimizer: [
            new UglifyJsPlugin(),
        ]
    }
})