const webpack = require('webpack')
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

const config = {
	watch: true,
 context: path.resolve(__dirname, './src'),
	 entry: {
        app: './App.js',
    },
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'env','stage-2' 
						]
					}
				}
			},
			{
				test: /\.s?css$/,
                use:  ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                    	'css-loader',
                    	{
                    		loader:'postcss-loader',
                    		options:{
                    			plugins:[
                    				autoprefixer({
                    					 browsers:['ie >= 8', 'last 4 version']
                    				})
                    			]
                    		}
                    	},
                    	'sass-loader',
                    ]
                })
			}
		]
	},
	
	plugins: [
        new CleanWebpackPlugin([
            'dist'
        ],{
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

};

module.exports = config