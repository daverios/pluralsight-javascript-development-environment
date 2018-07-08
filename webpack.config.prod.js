import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	debug: true,
	devtool: 'source-map',
	noInfo: false,
	entry: [
		path.resolve(__dirname, 'source/index')
	],
	target: 'web',
	output: {
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template:'source/index.html',
			inject: true
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	],
	module: {
	loaders: [
		{test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
		{test: /\.css$/, loaders: ['style','css']}
	]
	}
}