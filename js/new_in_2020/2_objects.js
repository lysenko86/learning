/*
	source: https://youtu.be/7TpAN4FISeI?t=556
*/

console.log('START');

const person = {
	name: 'Max',
	age: 30
};



// вся інфа по даному полю "age"
// {value: 30, writable: true, enumerable: true, configurable: true}
console.log(Object.getOwnPropertyDescriptor(person, 'age'));

// вся інфа по всіх полях об'єкта
console.log(Object.getOwnPropertyDescriptors(person));



// трансформує об'єкт в масив
console.log(Object.entries(person));
console.log(Object.fromEntries([['name', 'Max'], ['age', 30]]));
console.log(Object.fromEntries(Object.entries(person)));

// використання
for (const [key, value] of Object.entries(person)) {
	console.log(key, value);
	console.log(`${JSON.stringify(key)}: ${JSON.stringify(value)}`);
}



// Вертає масив із значень об'єкту
console.log(Object.values(person));

// Вертає масив із ключів об'єкту
console.log(Object.keys(person));
