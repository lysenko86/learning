/*
	source: https://youtu.be/7TpAN4FISeI?t=979
*/

console.log('START');



const start = '        Hello Youtube  ';
const end = 'This is new JavaScript features         ';

// trimStart, trimEnd
console.log(start.trimStart() + end.trimEnd());
console.log((start + end).trim());



// Доповнення строки спочатку, або з кінця. По дефолту - пробіли
console.log('vk'.padStart(6));
console.log('vk'.padStart(6, 'www.'));
console.log('vk'.padStart(16, 'www.'));
console.log('vk'.padStart(2, 'www.'));
console.log('vk'.padEnd(6, '.com'));
console.log('vk'.padEnd(16, '!'));



// Додатковий синтаксис для строк, можна валідувати, обробляти параметри
function tag(strings, name, age) {
	const [s1, s2, s3] = strings;
	const ageStr = age > 42 ? 'старший' : 'младший';
	return `${s1}${name}${s2}${ageStr}${s3}`;
};

const person = {
	name: 'Максим',
	age: 30
};

const output = tag`Человек по имени ${person.name} является ${person.age} в семье!`;

console.log(output);
