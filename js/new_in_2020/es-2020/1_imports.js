/*
	source: https://youtu.be/7TpAN4FISeI?t=2541
*/

//console.log('START');



// модулі в JS
(async () => {
	const module = await import('./module.js'); // не буде працювати з file:// помилка "CORS policy" буде - тільки з localhost://
	console.log('module', module);
	console.log('module.SECRET_KEY', module.SECRET_KEY);

	const Person = module.default;
	const person = new Person('Max';)
	console.log(person);
})();
