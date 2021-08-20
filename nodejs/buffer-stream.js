// Source: http://www.w3big.com/ru/nodejs/nodejs-buffer.html
// Source: http://wiki.amperka.ru/js:typedarray
// Source: https://coderoad.ru/55805843/%D0%9A%D0%B0%D0%BA%D0%BE%D0%B2-%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B9-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-Buffer-allocUnsafe-%D0%B8-Buffer-alloc
// Source: https://youtu.be/r--VL8JywyA

let a = [1, 2, 3];
let b = Buffer.from(a); // Тепер в "b" массив "a" в форматч двійкових даних
console.log('Масив "a" в форматі двійкових даних =', b);

let a2 = new Uint8Array([1, 2, 3]); // Uint8Array - масив цілих чисел від 0 до 255 (2^8−1)
console.log('Масив Uint8Array "a2" = ', a2);
let b2 = Buffer.from(a2);
console.log('Масив Uint8Array "a2" в форматі двійкових даних', b2);

let b3 = Buffer.alloc(10);
console.log("Buffer.alloc(10) =", b3);
let b4 = Buffer.allocUnsafe(10);
console.log("Buffer.allocUnsafe(10) =", b4);
// Buffer.alloc() - повертає новий ініціалізований буфер вказаного розміру. Цей метод повільніше ніж Buffer.allocUnsafe(), але
//      він гарантує, що новостворені екземпляри буфера ніколи не будуть містити старі дані.
// Buffer.allocUnsafe() - буфер НЕ ініціалізований, виділений сегмент пам'яті може містити старі дані. Використання буфера, створеного через цей метод,
//      без повного перезапису пам'яті може привести до витіку цих старих даних при читанні буферної пам'яті.
// Buffer.allocUnsafe() набагато швидше працює, але необхідно бути дуже обережним, щоб запобігти уязвімостям в безпеці програми

let buf = new Buffer("This is my pretty example"); // Створюємо буфер із строки
console.log("new Buffer =", buf);
let json = JSON.stringify(buf); // Форматуємо буфер у вигляд об'єкта { type: Buffer, data: '...' }
console.log("JSON.stringify(buf) =", json);
let buf2 = new Buffer(JSON.parse(json).data); // Створюємо новий буфер із попереднього буфера
console.log("Buffer(JSON.parse(json).data =", buf2);
console.log("buf2.toString() =", buf2.toString()); // this is my pretty example

process.stdin.setEncoding("utf8");

process.stdin.on("readable", function () {
  var input = process.stdin.read();

  if (input !== null) {
    // Ехо-вивод текста
    process.stdout.write(input);
    var command = input.trim();
    if (command == "exit") {
      process.exit(0);
    }
  }
});
