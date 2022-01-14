const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {

	mode: "development", //Режим сборки

	entry: "./src/index.js", //Точка входа

	output: {
		filename: "main.js", //Имя результирующего файла
		path: path.resolve(__dirname, "dist"),//Целевой каталог всех выходных файлов
	},

	module: {//Конфигурация модулей
		rules: [
			{//Работа со стилями
				//Тип файлов, который нужно обработать
				test: /\.css$/i,
				//Какие лоадеры требуются. !!!Webpack будет применять их в обратном порядке
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.svg?/, //Загрузка SVG
				use: ["svg-inline-loader"],
			},
			{
				test: /\.(t|j)sx?$/, //транспилирование js, ts, jsx и tsx
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						},
					},
				],
				exclude: /node_modules/,
			}
		]
	},

	devServer: {//Дев-сервер только для режима РАЗРАБОТКИ
		static: {//Где нужно отслеживать изменения
			directory: path.join(__dirname, 'src'),
		},
		port: 8080,
		server: "http"
	},

	plugins: [//Подключаемые плагины
		new HtmlWebpackPlugin({//Создание HTML в целевой папке и подключение к нему JS
			title: "Webpack config",//Заголовок сайта
			showErrors: true,
		}),
	],

};