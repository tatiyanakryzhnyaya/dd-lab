const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const json = require('./users.json');

const config = {
    // entry point
    watch: true, // Если true, следит за изменениями и пересобирает проект

    context: path.resolve(__dirname, 'src'),

    entry: {
        app: ['babel-polyfill', './index.js'],
    },

    // output

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[hash].js'
    },

    // tranforms

    module: {

        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use:  ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
         
        ],   
        loaders:[{
                test: /\.json$/,
                loader: 'json-loader'
            }]

    },

    plugins: [
        new CleanWebpackPlugin([
            'dist'
        ], {
            watch: true,
        }),

        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ExtractTextPlugin('styles.css'),
    ],

    devServer: {
        port: 3000
    }
}

module.exports = config;