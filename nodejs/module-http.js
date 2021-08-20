// source: https://www.udemy.com/course/nodejs-full-guide
// documentation: https://nodejs.org/dist/latest-v14.x/docs/api/http.html

const http = require("http"); // модуль для роботи з HTTP в node.js, дозволяє створювати власні HTTP-сервери

// створюємо сервер за допомогою http.createServer
// параметром передаємо функцію, яка буде викликатись, коли наш сервер будуть слатись реквести
// ця функція називається handler
const server = http.createServer((req, res) => {
  // handler отримує 2 параметра: request -> req та response -> res
  console.log(req.url); // показуємо url звідки прийшов реквест
  res.write("<h1>Hello from NodeJS</h1>"); // задаємо контент для респонса
  res.write("<h2>Hello from NodeJS</h2>");
  // Респонс має закритись в кінці, інакше браузер буде в процесі очікування відповіді весь час
  // Можна нічого не передавати, а можна передати текст / html - це також буде працювати як частина контенту
  res.end(`
    <div style="background: #f00; border: 1px solid #000;">
      <h1>Test</h1>
    </div>
  `);
});

// На даний момент сервер створено у змінній server, тепер можемо його запустити
// Перший параметр - номер порта, другий - функція, що викличется, коли сервер буде запущено
server.listen(3000, () => {
  console.log("Server is running...");
});
