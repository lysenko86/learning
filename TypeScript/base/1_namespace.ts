// source: https://www.youtube.com/watch?v=5Eap2h9AffA&list=PLNkWIWHIRwMEm1FgiLjHqSky27x5rXvQa

// Простір імен - інкапсулює всі, оголошені в ній сутності
namespace Utils {
    const SECRET: string = '123321';
    export const PI: number = 3.14;   // буде доступне
    export const getPass = (name: string, age: number): string => `${name}${age}`;   // буде доступне
    const isEmpty = <T>(data: T): boolean => !data;
}

console.log(Utils.PI);
//
//console.log(Utils.SECRET); // Помилка
const SECRET = 'TEST'; // помилки немає, бо ця змінна інкапсульована в Utils



// імпортувати неймспейчи в інших файлах слід так:

/// <reference path="Utils.ts" />
const var1 = Utils.getPass('pass1', 35);


//але давно вже всі використовують модулі і слід також так робити:
// файл Utils.ts:
// export const SECRET: string = '123321';
// export const PI: number = 3.14;
// імпортуємо в інших файлах:
// import { SECRET, PI } from './Utils.ts';
// const var1 = SECRET;
