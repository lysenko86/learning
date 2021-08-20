// source: https://youtu.be/nyIpDs2DJ_c
// source: https://www.youtube.com/watch?v=ysQb60CQB8U&list=PLNkWIWHIRwMEm1FgiLjHqSky27x5rXvQa
// Дженерік типи



const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5] // Що це за об'єкт Array і з чого він складається <number>
const arrayOfStrings: Array<string> = ['Hello', 'Vladilen']

// Щоб функції, яка працює з різними типами даних вказати корректний тип - юзаєм дженеріки
function reverse<T>(array: T[]): T[] {// Дана ф-ція працює з типом <T>, приймає параметром масив з типом T[] і повертає певний масив з типом T[]
// Такий формат дозволяє підстроюватись динамічно під ті значення, які ми передаємо
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)





// Generic class - не просто класс а дженерік класс
class User<T, K extends number> {
  constructor(public name: T, public age: K) {}
  public getPass(): string {
    return `${this.name}${this.age}`;
  }
  public getSecret(): number {
    return this.age**2;
  }
}

//const sasha = new User('Sasha', '35');  // не буде працювати бо другий аргумент має бути від типу number
const max = new User(123, 321);
const leo = new User('Leo', 321);

//sasha.getPass(); // "Sasha35"
max.getPass(); // "123321"
leo.getPass(); // "Leo321"
