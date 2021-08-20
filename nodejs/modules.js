// source: https://www.udemy.com/course/nodejs-full-guide
// source: https://youtu.be/ufrqHbKmco8

// імпорт модуля
const obj = require("./modules-subfile");

console.log("userObj >>>", obj.user);

obj.sayHello();

// Як модулі реалізовані під капотом - анонімні функції які зразу ж викликаються
(function (require, module, exports, __filename, __dirname) {
  // набір параметрів, які ми можемо юзати
  if (true) {
    // просто щоб код працював
    return;
  }
  console.log("Hello", __dirname);
  console.log("Hello", __filename);
  const obj = require("./user");
  console.log("userObj >>>", obj.user);
  obj.sayHello();
})();
