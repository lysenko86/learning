// Source: https://www.udemy.com/course/nodejs-full-guide

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, {
      // Задати заголовки, перший параметр - статус відповіді, другий - об'єктом набір заголовків
      "Content-Type": "text/html",
    });
    res.end(`
      <h1>Form</h1>
      <form method="post" action="/">
        <input name="title" type="text" />
        <button type="submit">Send</button>
      </form>
    `);
  } else if (req.method === "POST") {
    res.writeHead(200, {
      // додамо charset=utf-8 до значення заголовку Content-Type щоб норм відображало кирилицю
      "Content-Type": "text/html; charset=utf-8",
    });
    // Проблема в том, що в респонс дані передаються буферами, тобто частинами (чанками), щоб оптимізувати роботу (файл 100мб наприклад)
    const body = [];
    req.on("data", (data) => {
      // Підпишемось на подію "отримування даних", буде викликатись при отриманні кожної нової частини даних
      body.push(Buffer.from(data)); // складаємо всі частини даних в масив
    });
    req.on("end", () => {
      // Також підпишемось на подію закінчення завантаження всіх даних (всіх кусків (чанків))
      const paramsStr = body.toString(); // отримаємо з масиву, що містить в собі буфер, відправлені дані - Buffer.from(data).toString()
      console.log("paramsStr >>>", paramsStr); // Виведе "paramsStr >>> title=1122"
      const message = paramsStr.split("=")[1];
      res.end(`
        <h1>Ваше повідомлення: ${message}</h1>
      `);
    });
  }
});

server.listen(3000, () => {
  console.log("Server is running...");
});
