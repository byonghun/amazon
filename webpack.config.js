var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: ['./src/index.js'],
	output: {
		path: __dirname + "/public/",
		filename: "bundle.js"
	},
	module: {
		rules: [
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}
		]
	},
	resolve: {
		extensions: ['.jsx', '.js']
	}
}