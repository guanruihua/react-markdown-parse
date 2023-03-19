const path = require('path')
const webpackConfig = require('./webpack.base.js')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

require('./env/tsconfig/index')('dev')

const config = {
	mode: 'development',
	output: {
		path: path.resolve(__dirname, '../docs'),
		publicPath: '/',
		filename: '[name].[fullhash].js',
		clean: true,
	},
	plugins: [].concat(webpackConfig.plugins, [
		new ESLintPlugin({
			context: path.resolve(__dirname, '../src'),
			files: ['**/*.ts', '**/*.js', '**/*.tsx'],
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, '../src'),
					to: path.resolve(__dirname, '../docs'),
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

module.exports = { ...webpackConfig, ...config }
