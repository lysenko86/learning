/*
	source: https://www.youtube.com/watch?v=b3fLcjCS-W0
	source: https://www.youtube.com/watch?v=NQSawBU-wEo
	source: https://learn.javascript.ru/indexeddb
		- indexedDB - транзакціонна база даних в браузері, асинхронне API
		- може зберігати будь-який об'єм даних
		- може містити різні типи даних: строки, числа, об'єкти, масиви, дати, файли
		- можна робити транзакції
		- Структура: БД | сховища об'єктів | Індекс | операції | транзакції | курсор
*/

console.log('START');

// Правило створення: один додаток - одна БД
document.addEventListener('DOMContentedLoaded', e => {
	// Перевірка роботи БД в браузері
	window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
	// Відкриття БД
	let request = indexedDB.open('TaskManager', 1); // Ім'я БД і версія
	// onupgradeneeded - подія, що виникає коли створюється нова БД, або відбувається оновлення існуючої ДБ
	request.onupgradeneeded = () => {
		let DB = event.target.result;
		// Перевірка існуючого об'єкту в ДБ
		if (!DB.objectStoreNames.contains('Tasks')) {
			// Створення об'єкту сховища Tasks і присвоювання значення id в якості первинного ключа
			// autoIncrement - генератор ключів, який дозволяє задать унікальне значення для кожного об'єкту
			var ObjectStore = DB.createObjectStore('Tasks', {
				keyPath: 'id',
				autoIncrement: true
			});
		}
	};
	request.onsuccess = event => {
		console.log('Success! DB has beenopened!');
	}
});
