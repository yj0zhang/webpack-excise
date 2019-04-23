var cleanWebpackPlugin = require('clean-webpack-plugin');
var vueLoaderPlugin = require('vue-loader/lib/plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

module.exports = {
    entry: {
        index: path.join(__dirname, '../src/index.js')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.join(__dirname, '../src')]
              },     
              {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[ext]'
                }
              },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'image/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(),
        new vueLoaderPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}