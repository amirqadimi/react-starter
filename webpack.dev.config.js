const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.config.js');

const CSSModuleLoader = {
	loader: 'css-loader',
	options: {
		modules: true,
		sourceMap: true,
		localIdentName: '[local]__[hash:base64:5]'
	}
}

const css = {
	test: /\.css$/,
	use: [
		'style-loader',
		'css-loader'
	]
};

const scss = {
	test: /\.(scss|sass)$/,
	exclude: /js/,
	use: [
		'style-loader',
		'css-loader', // translates CSS into CommonJS
		'resolve-url-loader',
		'sass-loader' // compiles Sass to CSS, using Node Sass by default
	]
};

const scssModules = {
	test: /\.(scss|sass)$/,
	exclude: /base/,
	use: [
		'style-loader',
		CSSModuleLoader,
		'resolve-url-loader',
		'sass-loader' // compiles Sass to CSS, using Node Sass by default
	]
};

const config = {
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		port: 8080,
		contentBase: path.resolve(__dirname, 'public'),
		open: true,
		hot: true,
	},
	module: {
		rules: [scssModules,scss,css]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}


module.exports = merge(common, config);