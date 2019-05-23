const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

module.exports = merge(baseConfig, {
    mode: "development",
    devServer: {
        hot: true,
        port: 9000,
        proxy: {
            '/api': {
                target: "http://0.0.0.0:8888",
                changeOrigin: true
            }
        },
        historyApiFallback: true,
    },
    module: {
        rules: []
    },
    plugins: []
})