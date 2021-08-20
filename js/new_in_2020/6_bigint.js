/*
	source: https://youtu.be/7TpAN4FISeI?t=2232
*/

console.log('START');



// bigint - новий тип даних
console.log('Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER); // Максимальний integer з яктм ми можемо працювати
console.log(9007199254740991); // Ок
console.log(90071992547409919999); // Останні цифри заміняє нулями

console.log(typeof 10); // number
// в кінці чисел bigint завжди літера n
console.log(typeof 10n); // bigint
console.log(90071992547409919999n); // працює
console.log(-90071992547409919999n); // працює

// bigint може працювати тільки з bigint
console.log(90071992547409919999n - 1000n); // працює
//console.log(90071992547409919999n - 1000); // помилка
console.log(parseInt(10n) - 4); // працює
console.log(10n - BigInt(4)); // працює

console.log(5n / 2n); // результат 2n - дробова частина просто відкидається
console.log(6n / 5n); // 1n
//console.log(5.42n); // помилка
