const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

module.exports = merge(baseConfig, {
    mode: "development",
    devServer: {
        hot: true,
        // contentBase: "./"
    },
    module: {
        rules: []
    },
    plugins: []
})