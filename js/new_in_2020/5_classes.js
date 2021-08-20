/*
	source: https://youtu.be/7TpAN4FISeI?t=1863
*/

console.log('START');



// Новий синтаксис задання полів
// Приватні поля - допоможуть реалізувати геттери і сеттери
class Person{
	static type = 'HUMAN'
	static #area = 'EARTH'

	name = 'unknown name'    // Новий синтаксис
	#year = 1993   // приватне поле

	constructor(name) {
		this.name = name;
	}

	static printArea() {
		return Person.#area === 'EARTH' ? 'Земля' : 'Марс';
	}

	get age() {
		return new Date().getFullYear() - this.#year;
	}

	set age(age) {
		if (age > 0) {
			this.#year = new Date().getFullYear() - age;
		}
	}
};

const person = new Person('Maxim');
console.log(person.name);
//console.log(person.year);   // undefined
//console.log(person.#year);   // error
console.log(person.age);
person.age = 26;
console.log(person.age);

console.log(Person.type);
console.log(Person.printArea());
