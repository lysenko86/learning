// source: https://www.youtube.com/watch?v=1-lWrocbnK8&list=PLNkWIWHIRwMEm1FgiLjHqSky27x5rXvQa


// Є основні 4 типи декоратора: класа, проперті, метода і аксесора (геттера/сеттера)



// Декоратор для класу
const logClass = (constructor: Function) => {
  console.log(constructor);
}

@logClass   // застосувати декоратор до класу
class User1 {
  constructor(public name: string, public age: number) {}
  public getPass(): string {
    return `${this.name}${this.age}`;
  }
};



// Декоратор для проперті
const logProperty = (target: Object, propertyKey: string | symbol) => {
  console.log(propertyKey);
}

class User2 {
  @logProperty   // застосувати декоратор до проперті
  secret: number;
  constructor(public name: string, public age: number, secret: number) {
    this.secret = secret;
  }
  public getPass(): string {
    return `${this.name}${this.age}`;
  }
};



// Декоратор для метода
const logMethod = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  console.log(propertyKey);
}

class User3 {
  constructor(public name: string, public age: number) {}
  @logMethod   // застосувати декоратор до методу
  public getPass(): string {
    return `${this.name}${this.age}`;
  }
};



// Декоратор для аксесора (геттера/сеттера)
const logSet = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  console.log(propertyKey);
}

class User4 {
  constructor(public name: string, public age: number) {}
  @logSet   // застосувати декоратор до аксесора
  set myAge(age: number) {
    this.age = age;
  }
};
