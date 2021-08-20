// source: https://youtu.be/nyIpDs2DJ_c?t=3699
// Допоміжні оператори для роботи з типами
var key = 'name';
key = 'age';
//На виході отримаємо тип UserKeysNoMeta2 із полями 'name' | 'email'
console.log(UserKeysNoMeta1);
console.log(UserKeysNoMeta2);
var u1 = 'name';
//u1 = '_id' // Помилка, бо ми виключили це поле
//let u2: UserKeysNoMeta2 = 'name'
//u2 = '_id' // Помилка, бо ми виключили це поле
