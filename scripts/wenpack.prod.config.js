var extractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: "production",
    plugins: [
        new extractTextWebpackPlugin('style.css'),
    ]
}