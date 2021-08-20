// source: https://youtu.be/nyIpDs2DJ_c?t=2605
// source: https://www.youtube.com/watch?v=OruUd2HULaI&list=PLNkWIWHIRwMEm1FgiLjHqSky27x5rXvQa
// source: https://www.youtube.com/watch?v=wTwPThKzu-U&list=PLNkWIWHIRwMEm1FgiLjHqSky27x5rXvQa



// ------------
// Базовий приклад
// ------------
class Typescript {
    version: string = '1.0.0';   // Значення по дефолту
    private prop1: string = 'test';
    static secret: number = 12345; // Статична проперті - доступна Typescript.secret - тобто без інстансу класу

    constructor(version: string) {
        this.version = version
        this.prop1 = 'good'
    }

    set prop(value: string) {   // сеттер для проперті prop1
      this.prop1 = value;
    }

    get prop() {   // геттер для проперті prop1
      return this.prop1;
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}



// ------------
// Приклад з readonly
// ------------
class Car1 {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel // тільки в конструкторі ми можемо змінити значення readonly
    }
}

// Коротший запис
class Car2 {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {} // Зробить те саме - створить пропертю model і задасть їй значення з конструктора і це буде readonly
}



// ------------
// Модифікатори: protected, private, public. Якщо модифікатор не вказати - то ставиться по дефолту public
// protected - поля доступні для батьківського класу і всіх нащадків
// private - доступні тільки для того класу, де були заведені
// ------------
class Animal {
    protected voice: string = ''
    public color: string = 'black'

    constructor() {
        this.go()
    }

    private go() {
        console.log('Go');
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
        //this.go() // Помилка, бо private пропертя
    }
}

const cat = new Cat()
//cat.voice // Інстанс класу не має доступу до protected пропертів
cat.setVoice('test')
console.log(cat.color)


// Наслідування
class User {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getName(): string {
    return `${this.name}`;
  }
}
class Me extends User {   // Наслідування за допомогою слова extends
  constructor(age: number) {
    super('name', age); // в конструкторі нащадка треба викликати super()
  }
}
const max = new User('Max', 20);
const bax = new Me(30);



// ------------
// Абстрактні класи - потрібні на етапі розробки, щоб від них наслідуватись
// містить в собі асбтрактні методи, які мають бути реалізовані у класів, які будуть наслідуватись від цього класу
// ------------
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }
    info(): string {
        return 'This is info'
    }
}
