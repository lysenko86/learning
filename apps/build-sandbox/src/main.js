/*
	source: https://www.udemy.com/course/pro-react-redux
	stack: babel, npx
	npx - команда, яка дозволяє запустити як скрипт один з встановлених пакетів в package.json

	установка babel: npm install --save-dev @babel/core @babel/cli
	установка плагінів babel (звичайні npm-пакети): npm install --save-dev @babel/plugin-transform-template-literals

	робимо білд: npx babel src --out-dir build
		запускаємо babel, src - звідки беремо файли, --out-dir build - ключ і сама папка куди складати збілджені файли
	робимо білд з плагінами: npx babel src --out-dir build --plugins @babel/plugin-transform-template-literals,@babel/plugin-transform-classes,@babel/plugin-transform-block-scoping

	babel-плагін @babel/plugin-transform-template-literals
		`Hello ${name}` >>>>> "Hello ".concat(name)
	babel-плагін @babel/plugin-transform-classes
		class >>>>> function
	babel-плагін @babel/plugin-transform-block-scoping
		const >>>>> var

	Якщо плагіни вказати в конф-файлі .babelrc тоді не треба в командному їх писати

	Пресети (presets) - готовий набір плагінів - звичайні npm-пакети
		npm install --save-dev @babel/preset-env - пресет для підтримки найсвіжішої версії EcmaScript
		npm install --save-dev @babel/preset-react - трансформує JSX в JS
		для пресета можна вказати набір браузерів для підтримки - поле "targets"
		поле "debug": true - дозволяє вивести в консоль додаткову інфу по білду
		"modules": false - перестає заміняти import на require()

	npm install core-js - пакет для роботи з поліфілами
		"corejs": 3 - підключаємо бібліотеку версії 3 до babel
		"useBuiltIns": "usage" - babel спробує знайти в коді місця де використувуються нові ф-ції JS і підключити тільки ці ф-ції, якщо вказати "useBuiltIns": "entry" - то підключить всі поліфіли
*/

/*class App {
	run() {
		const name = 'World';
		console.log(`Hello ${name}`);
	}
}

const app = new App();
app.run(); */

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<App />, document.getElementById('root'));
