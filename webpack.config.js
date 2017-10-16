var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry:path.resolve(__dirname,'./app/index.js'),
	output:{
		path:path.resolve(__dirname,'./build'),
		filename:'bundle.js'
	},
	module:{
		loaders:[
			/*babel编译es6和jsx*/
			{
				test: /\.js$/,
				exclude: /node_modules/,
      			loaders: ['babel-loader?presets[]=es2015,presets[]=react']
			},
			/*css loader*/
			{ 
				test: /\.css$/, 
			  	exclude: /node_modules/, 
			  	loader: 'style-loader!css-loader' 
			},
			/*less loader*/
			{ 
				test: /\.less$/,
			 	exclude: /node_modules/, 
			 	loader: 'style-loader!css-loader!less-loader' 
			},
			/*url loader*/
			{ 
				test:/\.(png|gif|jpg|jpeg|bmp)$/i, 
				exclude: /node_modules/, 
				loader:'url-loader?limit=50000' 
			}
		]
	},
	plugins: [
        // 打开浏览器
        new openBrowserWebpackPlugin({
          // url: 'http://localhost:8080'
        }),
        // ,
        // //自动生成html
        new htmlWebpackPlugin()
    ]
}
