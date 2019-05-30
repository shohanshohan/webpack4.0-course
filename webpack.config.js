const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	//devtool: 'inline-cheap-module-evel-source-map',
	entry: {
		main: './src/index.js'
		//avatar: './src/avatar.js'
	},
	output: {
		//publicPath: '/',
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	devServer: {
		contentBase: './dist', //访问的目录
		open: true, //自动打开页面
		hot: true //开启热更
	},
	module: {
		rules: [
			/* {
				test: /\.(jpg|png|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]', //规定打包后的名称
					  outputPath: 'images/' //打包后的存放路径 /dist/images
					}
				}
			}, */
			{
				test: /\.js$/,
				exclude: /node_modules/,  //在node_modules中的代码不做处理
				loader: 'babel-loader',
				options: {
					presets: [['@babel/preset-env', {
						useBuiltIns:'usage'
					}]]
				}
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'images/',
						limit: 1024*2 //当超过2kb时打包到 /dist/images/目录下
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader', 
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,//这个表示在用css-loader打包时还要经过两个loader,就是下面的两个，因为执行顺序是从后往前的
							//modules: true //加入这一句，表明css-loader打包时可使用模块化
						}
					}, 
					'sass-loader', 
					'postcss-loader',
				]
			},
			{
				test: /\.(eot|ttf|svg|woff)$/,
				use: 'file-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin() //开启热更插件
	]
}