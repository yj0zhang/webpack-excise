var path = require("path");
var merge = require("webpack-merge");
var baseConfig = require("./webpack.base.config");

module.exports = merge(baseConfig, {
    mode: "development",
    entry: {
        index: path.join(__dirname, '../src/index.js'),
        login: path.join(__dirname, '../src/login/index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: []
    },
    plugins: []
})