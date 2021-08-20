/*
	source: https://www.udemy.com/course/pro-react-redux
	stack: webpack, webpack-cli

	установка webpack: npm install --save-dev webpack webpack-cli
		webpack -ядро
		webpack-cli - обгортка, що дозволяє запускати webpack з командного рядка

	запуск: npx webpack --mode development
		запустить в режимі development - не буде мініфікувати, працює швидше
		запустить в режимі production - створює оптимізований білд
		передаємо змінні в функцію створення конфігурації >>>>> webpack --env.mode=production --env.theme=dark

	лодери для webpack - звичайні пакети npm, вміють обробляти різні типи файлів, конфігуруємо лоадери в блокі "module" - працюють з конкретним файлом або модулем
		npm install --save-dev file-loader
			- дозволяє підключати будь-які файли >>>>> import img from './react.png';
			- копіює файл в потрібну папку і замінює ім'я на хеш
		npm install --save-dev babel-loader
			- підключає JS-файли а також JSX-файли
		npm install --save-dev css-loader
			- підключає CSS-файли до проекту, але не на сторінку >>>>> import css from './main.css';
		npm install --save-dev style-loader
			- підключає CSS-текст на сторінку в <style> в <head>
		npm install --save-dev node-sass
			- сам двіжок який перероблює SCSS в CSS
		npm install --save-dev sass-loader
			- підключає SCSS-файли до проекту

	плагіни для webpack - звичайні пакети npm, дозволяють виконувати дії стосовно всього проекту, конфігуруємо лоадери в блокі "plugins"
		npm install --save-dev html-webpack-plugin
			- створює файл index.html в папці dist за конфігурацією new HtmlWebpackPlugin({})
			- підключить самостійно тег <script> з актуальним JS-кодом
			- дозволяє юзать шаблони <%= htmlWebpackPlugin.options.title %>
		npm install --save-dev mini-css-extract-plugin
			- видобуває CSS-код в окремі файли і потім додає ссилки на ці файли в HTML
			- використовують для production білдів, для розробки достатньо лодера style-loader

	утиліта npm install --save-dev webpack-dev-server
		- окрема утиліта, яка самостійно запускає webpack білд
		- слідкує за змінами в файловій системі
		- в package.json в scripts додати "start": "webpack-dev-server"
		- запускаємо npm start
		- файли в папці dist не створює, все тримає в оперативці
*/

/*
import Calc from './calc';
import Log from './log';
import img from './react.png';

const calc = new Calc();
const log = new Log();

log.log(calc.add(1, 2, 3));

const el = document.createElement('img');
el.src = img;
document.body.appendChild(el);
*/

import React from 'react';
import ReactDOM from 'react-dom';
//import './main.css';
import './main.scss';

const App = () => <p>Hello, World!</p>;

ReactDOM.render(<App />, document.getElementById('root'));
