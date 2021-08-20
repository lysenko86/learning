/*
	source: https://youtu.be/7TpAN4FISeI?t=3065
*/

console.log('START');



console.log(values.undefined || 'default undefined');
console.log(values.undefined ?? 'default undefined');

console.log(values.null || 'default null');
console.log(values.null ?? 'default null');

console.log(values.false || 'default false'); // виведе "default false"
console.log(values.false ?? 'default false'); // а тут поверне перший операнд false
// ?? - оператор який перевіряє значення не на falsy а на нормальність значення

console.log(values.zero || 'default zero'); // default zero
console.log(values.zero ?? 'default zero'); // 0

console.log(values.empty || 'default empty'); // default empty
console.log(values.empty ?? 'default empty'); //
