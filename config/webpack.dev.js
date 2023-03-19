const path = require('path')
const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.base.js')
const ESLintPlugin = require('eslint-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

require('./env/tsconfig/index')('dev')

const devServer = {
	port: '3340', //默认是8080
	// client: { logging: "error" },//浏览器中设置日志级别
	compress: true, //是否启用 gzip 压缩
	open: false,
	// https: true,
	historyApiFallback: true,
	watchFiles: ['src/**/*', 'public/**/*'],
	// proxy: {
	// 	'/vr/': 'http://localhost:13000/'
	// },
};

const devConfig = {
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.[fullhash].js',
		publicPath: '/', //通常是CDN地址
		// clean: true
	},
	plugins: [].concat(webpackConfig.plugins, [
		new ESLintPlugin({
			context: path.resolve(__dirname, '../src'),
			files: ['**/*.ts', '**/*.js', '**/*.tsx'],
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					// from: path.resolve(__dirname, '../src'),
					from: 'src',
					// to: 'dist',
					// to: path.resolve(__dirname, '../public'),
					to: path.resolve(__dirname, '../dist'),
					globOptions: {
						ignore: [
							'**.tsx', '**.js', '**.ts', '**.less', '**.css', '**.module.less', '**.d.ts', '**.json', '**.md'
						]
					}
				}
			]
		}),
	]),
}

const compiler = Webpack({ ...webpackConfig, ...devConfig });
const server = new WebpackDevServer(devServer, compiler);

const runServer = async () => {
	await server.start();
};

runServer();