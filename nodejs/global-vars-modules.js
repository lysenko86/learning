// source: https://www.udemy.com/course/nodejs-full-guide
// source: https://youtu.be/xrHETaIbNpg

// В ноді немає глобального об'єкту window, але є список глобальний об'єктів різної функціональності

// Глобальний об'єкт global - доступ до таймерів, черга мікротасків, методи асинхронних зупинок
console.log("global >>>", global);
setTimeout(() => {
  // писати global.setTimeout не обов'язково
  console.log("Hello!");
}, 2000);

// Глобальні об'єкти __dirname та __filename
console.log("__dirname", __dirname); // абсолютний шлях до робочого каталогу
console.log("__filename", __filename); // абсолютний шлях до робочого файлу

// Глобальний об'єкт process - конфігурації, змінні середовища, версії
console.log("process", process);

// змінні середовиша типу dev, prod
console.log("process.env", process.env);

// масив який містить аргументи командної строки
console.log("process.argv", process.argv);
// наприклад пишемо для запуску: node console.js message=hello spec
// в результаті:
// [
//   '/home/oleksandr/.nvm/versions/node/v12.0.0/bin/node',
//   '/home/oleksandr/Projects/learning/nodejs/console.js',
//   'message=hello',   - наш параметр
//   'spec'             - наш параметр
// ]
function consoleToJSON() {
  const c = {};
  for (let i = 2; i < process.argv.length; i++) {
    const arg = process.argv[i].split("=");
    c[arg[0]] = arg[1] ? arg[1] : true;
  }
  return c;
}
console.log(consoleToJSON());

// Глобальний об'єкт url - робота з url-адресами, що отримуються сервером, парсинг
const url = new URL("https://webDev.com/path/name#test");
console.log("url.hostname", url.hostname);
console.log("url.href", url.href);
console.log("url.pathname", url.pathname);
console.log("url.hash", url.hash);
