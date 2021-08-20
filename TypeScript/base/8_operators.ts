// source: https://youtu.be/nyIpDs2DJ_c?t=3699
// https://www.youtube.com/watch?v=Qf_WJGJf4yw&list=PLNkWIWHIRwMEm1FgiLjHqSky27x5rXvQa
// Допоміжні оператори для роботи з типами



// ------------
// keyof - пробігається по пропертям типу
// ------------
interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // На виході в типі PersonKeys будемо мати наступні значення: 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'

//key = 'job' // Помилка, оскільки в типі PersonKeys немає такого значення



// ------------
// Exclude - видаляє із результуючого типу вказані проперті
// Pick - забирає (пікає) до результуючого типу вказані проперті
// ------------
type User = {
    _id: number // метадані
    name: string
    email: string
    createdAt: Date // метадані
}

// Створюємо новий тип з окремими пропертями типу User (без метаданих)
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // Виключає із User поля '_id' та 'createdAt'
//На виході отримаємо тип UserKeysNoMeta1 із полями 'name' | 'email'

// Інший спосіб отримання того самого
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // Бере (пікає) із User потрібні поля: 'name' та 'email'
//На виході отримаємо тип UserKeysNoMeta2 із полями 'name' | 'email'

// Інший спосіб отримання того самого
type UserKeysNoMeta3 = Omit<User, 'name' | 'email'> // Видаляє із User вказані поля: 'name' та 'email'
//На виході отримаємо тип UserKeysNoMeta3 із полями '_id' | 'createdAt'

let u1: UserKeysNoMeta1 = 'name'
//u1 = '_id' // Помилка, бо ми виключили це поле

let u2: UserKeysNoMeta2 = {
    name: 'test',
    email: 'test'
}
//u2 = '_id' // Помилка, бо ми виключили це поле





// Readonly<T>
interface User2 {
  name: string;
}
const user2: Readonly<User2> = {
  name: 'Sasha',
}
user2.name = 'Max'; // Error



// Required<T>
interface Props2 {
  a?: number;
  b?: string;
}
const obj2: Props2 = { a: 5 }; // OK
const obj3: Required<Props2> = { a: 5 }; // Error
