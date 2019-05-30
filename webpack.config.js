var path = require('path');
module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
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
	}
}