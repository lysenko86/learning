// source: https://www.udemy.com/course/nodejs-full-guide
// documentation: https://nodejs.org/dist/latest-v14.x/docs/api/path.html

// Основная необходимость модуля PATH - кросс-платформенность, т.е. решение проблемы с разницей в слэшах между виндой и юниксом
// Плюс решение проблем с относительными и абсолютными путями

const path = require("path"); // модуль для роботи з шляхами в node.js

console.log(path.basename(__filename)); // отримати ім'я робочого файлу
console.log(path.dirname(__filename)); // отримати шлях до робочого каталогу
console.log(path.extname(__filename)); // отримати розширення робочого файлу

console.log(path.parse(__filename)); // отримати об'єкт з інфою про робочий файл
console.log(path.parse(__filename).ext);

console.log(path.join(__dirname, "..", "index.js")); // об'єднує декілька стрінг і генерує шлях

console.log(path.resolve(__dirname, "..", "/index.js")); // об'єднує декілька стрінг і генерує коректний шлях
// виведе тільки /index.js оскільки цим параметром задано абсолютний шлях, бо з слеша починається, інші параметри відкине
