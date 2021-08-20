// source: https://youtu.be/nyIpDs2DJ_c?t=451
// source: https://www.youtube.com/watch?v=MtO76yEYbxA&list=PLNkWIWHIRwMEm1FgiLjHqSky27x5rXvQa&index=2
// source: https://www.youtube.com/watch?v=MNcl1Fni4cw&list=PLNkWIWHIRwMEm1FgiLjHqSky27x5rXvQa&index=3



// ----------
// Типи даних
// ----------
const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello TypeScript'

const u: undefined = undefined;
const n: null = null; // а не object как в JS

const numberArray: number[] = [1, 1, 2, 5, 8, 13]   // Array Type
const numberArray2: Array<number> = [1, 1, 2, 5, 8, 13]   // Generic Type
const words: string[] = ['Hello', 'TypeScript']

//Tuple - масив з різних типів даних
const contact: [string, number] = ['Vladilen', 1234567]

// Any - перевизначення типу
let variable: any = 42
variable = 'New String'

// function
function sayMyName(name: string): void { // void - спец тип, означає, що ф-ція нічого не повертає
    console.log(name)
}
sayMyName('Хайзенберг')

// Never - юзаємо в двох випадках: 1) коли функція ніколи не кінчається і повертає помилку; 2) коли ф-ція дійсно працює постійно
function throwError(message: string): never { // Варіант 1
    throw new Error(message)
    // в даному випадку тут 100% буде помилка - юзаємо Never
}
function infinite(): never { // Варіант 2
    while (true) {}
}



// ----------
// Власні типи
// ----------
type Login = string
const login: Login = 'admin'
//const login2: Login = 2 // помилка

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'
//const id3: ID = true // помилка

type Person = { name: string, age: number, nickName: string, job?: string };
const user: Person = { name: 'Sasha', age: 35, nickName: 'Alex' };



// ----------
// Null та Undefined - вони є, але мало де юзаються
// ----------
type SomeType = string | null | undefined
