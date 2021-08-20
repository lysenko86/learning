function* someGenerator() {
	const helloString = yield 1;
	console.log(helloString);
	yield 2;
	yield 3;
	yield 4;
};

const generator = someGenerator();

//console.log(generator);
console.log(generator.next());
console.log(generator.next('hello'));
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
