/*
	source: https://www.youtube.com/watch?v=3-bZ7gLVSzo
	source: https://www.youtube.com/watch?v=NQSawBU-wEo
		- localStorage - тільки в браузері, це браузерний API
		- дані доступні після перезавантаження сторінки
		- працює тільки для конткретного домену
		- працює тільки з строками
		- відмінність від Cookie №1 --- об'єм даних для зберігання до 5Мб, це набагато більше ніж Cookie
		- відмінність від Cookie №2 --- Cookie відправляються на сервер на відміну від LocalStorage а це не дуже безпечно, бо сервер може щось робити з тими данними
		- LocalStorage - не має часу життя, зберігає дані після закриття браузера, SessionStorage - очищається після закриття браузера
		- sessionStorage - коли міняємо/видаляємо дані на одній вкладці, то на інших - дані не змінюються, навідміну від LocalStorage
*/

const myNumber = 42;

localStorage.removeItem('number');
console.log(localStorage.getItem('number'));

localStorage.setItem('number', myNumber)
// перетворить число на строку автоматично і запише строку
console.log(localStorage.getItem('number'));

//localStorage.clear();



const myObj = {
	name: 'Max',
	age: 20
};

localStorage.setItem('person', myObj); // перетворить у строку за допомогою .toString() і в результаті буде збережене [object Object]

localStorage.setItem('person_correct', JSON.stringify(myObj));  // так правильно
const raw = localStorage.getItem('person_correct');  // так правильно
const correctObj = JSON.parse(raw);  // так правильно

console.log('correctObj', correctObj);


// прослуховування подій для синхронізації роботи в різних вкладках
window.addEventListener('storage', event => {
// викликається, коли щось записується в localStorage ТІЛЬКИ В ІНШІЙ ВКЛАДЦІ
	console.log(event);
	//alert('LocalStorage was updated');
});




localStorage.setItem('LocalStorageTestItem', 'test');
console.log('Data has been initialized in LocalStorage');
sessionStorage.setItem('SessionStorageTestItem', 'test');
console.log('Data has been initialized in SessionStorage');

const btn = document.getElementsByTagName('button').item(0);

btn.addEventListener('click', e => {
	localStorage.setItem('LocalStorageTestItem', 'NEW test');
	console.log('data has been changed in LocalStorage');
	sessionStorage.setItem('SessionStorageTestItem', 'NEW test');
	console.log('data has been changed in SessionStorage');
});

// Зберігаємо дані в формі (поле інпут) після перегрузки сторінки
const input = document.getElementsByTagName('input').item(0);
input.value = localStorage.getItem('LocalStorageTestInput');
input.addEventListener('keyup', e => {
	console.log('Value of input was saved in LocalStorage');
	localStorage.setItem('LocalStorageTestInput', e.target.value);
});
