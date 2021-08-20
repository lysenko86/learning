/*
	source: https://youtu.be/7TpAN4FISeI?t=1590
*/

console.log('START');



// Трансформує вкладені масиви в одномірний, лінійний масив
const nested = ['a', 'b', ['c', 'd'], ['e', ['f', 'g']]];
console.log(nested.flat());
console.log(nested.flat().flat());

// параметр відповідає за вкладеність, по дефолту 1
console.log(nested.flat(2));



// Трансформує вкладені масиви в одномірний, лінійний масив
const techs = ['react redux', 'angular', 'vue', 'deno and node'];
console.log(techs.map(tech => tech.split(' ')).flat());
console.log(techs.flatMap(tech => tech.split(' ')).flat());
