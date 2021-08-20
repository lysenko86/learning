/*
	source: https://youtu.be/7TpAN4FISeI?t=72
*/

console.log('START');

const emulate = (id, ms) => new Promise(resolve => {
	setTimeout(() => resolve(id), ms);
});

const promises = [
	emulate(1, 250),
	emulate(2, 1500),
	emulate(3, 500)
];

// Завдання: зробити ітерацію по цьому масиву промісів, але тільки тоді, коли вони всі завершаться

// Рішення без нового синтаксису
async function old() {
	for (const promise of await Promise.all(promises)) {
		console.log('Old:', promise);
	}
};
//old();

// Рішення з новим синтаксисом
async function modern() {
	for await (const promise of promises) {
		console.log('modern:', promise);
	}
};
modern();
