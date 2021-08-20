const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = '';
const isDev = '';

// Якщо передаємо фцнкцію, то webpack викличе її, передавши туди параметри з командної строки і потім присвоїть в module.exports тей об'єкт, який поверне ця ф-ція
module.exports = (env = {}) => {
	const { mode = 'development' } = env;
	const isProd = mode === 'production';
	const isDev = mode === 'development';

	const getStyleLoaders = () => {
		return [
			isProd ? MiniCssExtractPlugin.loader : 'style-loader',
			'css-loader'
		];
	};

	const getPlugins = () => {
		const plugins = [
			new HtmlWebpackPlugin({
				title: 'Hello World',
				buildTime: new Date().toISOString(),
				template: 'index.html'
			})
		];
		if (isProd) {
			plugins.push(
				new MiniCssExtractPlugin({
					filename: 'main-[hash:8].css'      // by default - main.css
				})
			);
		}
		return plugins;
	};

	return {
		mode: isProd ? 'production' : (isDev ? 'development' : false),

		output: {
			filename: isProd ? 'main-[hash:8].js' : undefined
		},

		module: {
			rules: [

				// Loading JS, JSX
				{
					test: /\.js$/,
					exclude: /node_modules/,
					// use: [{ loader: 'babel-loader' }]
					// якщо в use пишемо тільки лоадер без конфіга - то можна замість use писати так:
					loader: 'babel-loader'
				},

				// Loading images
				{
					test: /\.(png|jpg|jpeg|gif|ico)$/,
					use: [
						{
							loader: 'file-loader',
							// source: https://www.udemy.com/course/pro-react-redux
							// source: https://webpack.js.org/loaders/file-loader/
							options: {
								outputPath: 'images',
								name: '[name]-[sha1:hash:7].[ext]'
							}
						}
					]
				},

				// Loading fonts
				{
					test: /\.(ttf|otf|eot|woff|woff2)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								outputPath: 'fonts',
								name: '[name].[ext]'
							}
						}
					]
				},

				// Loading CSS
				{
					test: /\.css$/,
					use: [                            // Порядок виконання з кінця:
						//{ loader: 'style-loader' },   // виконається другим        // style-loader - більше не потрібно, бо юзаєм MiniCssExtractPlugin
						{ loader: MiniCssExtractPlugin.loader },
						{ loader: 'css-loader' }      // виконається першим
					]
					//use: getStyleLoaders()       // юзаємо власну ф-цію, яка залежно від ENV формує відповідний масив лодерів
				},

				// Loading SASS/SCSS
				{
					test: /\.s[ca]ss$/,
					// use: [
					// 	{ loader: 'style-loader' },
					// 	{ loader: 'css-loader' },
					// 	{ loader: 'sass-loader' }
					// ]
					// якщо в use пишемо тільки лоадер без конфіга - то можна замість use писати так:
					use: [
						//'style-loader',           // style-loader - більше не потрібно, бо юзаєм MiniCssExtractPlugin
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {}
						},
						'sass-loader'
					]
				}
			]
		},

		plugins: getPlugins(),

		// source: https://webpack.js.org/configuration/dev-server/
		devServer: {
			open: true       // автоматично відкриває браузер після запуску
		}
	};
};
