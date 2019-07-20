const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const js = {
	test: /\.(js|jsx)$/,
	use: ['babel-loader']
};

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
		{
			loader: MiniCssExtractPlugin.loader,
		},
		'css-loader',
		'postcss-loader'
	]
};

const scss = {
	test: /\.(scss|sass)$/,
	exclude: /js/,
	use: [
		MiniCssExtractPlugin.loader,
		'css-loader', // translates CSS into CommonJS
		'postcss-loader',
		'resolve-url-loader',
		'sass-loader' // compiles Sass to CSS, using Node Sass by default
	]
};

const scssModules = {
	test: /\.(scss|sass)$/,
	exclude: /base/,
	use: [
		MiniCssExtractPlugin.loader,
		CSSModuleLoader, // translates CSS into CommonJS
		'postcss-loader',
		'resolve-url-loader',
		'sass-loader' // compiles Sass to CSS, using Node Sass by default
	]
};

const optimization = {
	minimizer: [new UglifyJsPlugin()],
};

const config = {
	mode: 'production',
	devtool: 'source-map',
	module: {
		rules: [js,scssModules,scss,css]
	},
	optimization: optimization,
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css'
		})
	]
}


module.exports = merge(common, config);