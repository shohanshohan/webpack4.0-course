const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js'); //配置文件
const compiler = webpack(config); //webpack编译器

const app = express();
app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath //这个先在webpack.config.js 中的output项中配置好 publicPath: '/'
}))

app.listen(3000, () => {
	console.log('server is running');
})