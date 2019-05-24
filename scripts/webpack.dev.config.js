const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

module.exports = merge(baseConfig, {
    mode: "development",
    output: {
        publicPath: "/"
    },
    devtool: "#@cheap-module-eval-source-map",
    devServer: {
        //http://localhost:9000/webpack-dev-server 可以查看内存中，静态文件的目录结构
        contentBase: './',
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