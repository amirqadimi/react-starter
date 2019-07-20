const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const js = {
	test: /\.(js|jsx)$/,
	exclude: /node_modules/,
	use: ['babel-loader']
};

const files = {
	test: /\.(jpg|png|gif|svg|woff|woff2|eot|ttf)$/,
	exclude: /svgs/,
	use: [{
		loader: 'file-loader',
		options: {
			name: '[name][hash:base64:5].[ext]',
			outputPath: './assets/',
		}
	}]
};

// sprite svg rule
const spriteSvg = {
	test: /\.svg$/,
	exclude: /images/,
	include: path.resolve(__dirname, 'assets/svgs'),
	use: [
		{
			loader: 'svg-sprite-loader',
			options: {
				extract: true,
				publicPath: '',
				spriteFilename: 'sprite.svg'
			}
		},
		'svgo-loader'
	]
};

const config = {
	entry: ['@babel/polyfill', './app/js'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	module: {
		rules: [js, files, spriteSvg]
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './app/js'),
			'app': path.resolve(__dirname, './app'),
			'scss': path.resolve(__dirname, './app/js/scss'),
			'svg': path.resolve(__dirname, './assets/svgs'),
			'assets': path.resolve(__dirname, './assets'),
		},
		extensions: ['*', '.js', '.jsx', '.scss', 'css']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		new CleanWebpackPlugin(['public']),
		new SpriteLoaderPlugin()
	]
}


module.exports = config;