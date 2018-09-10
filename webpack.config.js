const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/main.js'
    },
    devServer: {
        contentBase: "./",
        inline: true,
        port: 8080,
        compress: false,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css',
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}