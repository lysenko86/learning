// source: https://www.udemy.com/course/nodejs-full-guide
// source: https://youtu.be/0TcIslnoXCQ
// documentation: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html

const fs = require("fs"); // модуль для роботи з файловою системою в node.js
const path = require("path");

// Є синхронні методи, є асинхронні методи

//fs.mkdir(); // Асинхронно створить каталог
// рекомендується завжди користуватись асинхронними методами
// вони працюють завдяки Event Loop в JavaScript

//fs.mkdirSync(); // Синхронно створить каталог, блокує виконання

fs.mkdir(path.join(__dirname, "notes"), (err) => {
  // В ноді є конвенція (договір), завжди перший параметр - це помилка - параметр err
  if (err) {
    // так обробляються помилки в ноді
    throw new Error(err);
  }
  console.log("Каталог був створений");
});

fs.writeFile(
  // Створює файл асинхронно
  path.join(__dirname, "notes", "mynotex.txt"), // Ім'я файлу
  "Hello world", // Контент файлу
  (err) => {
    if (err) {
      throw new Error(err);
    }
    console.log("Файл був створений");

    fs.appendFile(
      // Додає контент в кінець файлу
      path.join(__dirname, "notes", "mynotex.txt"), // Ім'я файлу
      " From append file", // Контент який додастся в файл
      (err) => {
        if (err) {
          throw new Error(err);
        }
        console.log("Файл був доповнений");
      }
    );
  }
);

fs.readFile(
  // Читає файл асинхронно
  // Нода читає файли буферами, кусочками, щоб виконання було швидким
  path.join(__dirname, "notes", "mynotex.txt"),
  //'utf-8',
  (err, data) => {
    if (err) {
      throw new Error(err);
    }
    console.log("Вміст файлу:", data); // ---> Вміст файлу <Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64>
    // Варіант 1 - заюзать глобальний об'єкт Buffer
    console.log("Вміст файлу з Buffer:", Buffer.from(data).toString()); // ---> Вміст файлу Hello world
    // Варіант 2 - додати другим параметром кодування - utf-8
  }
);

fs.rename(
  // Переіменовує файл асинхронно
  path.join(__dirname, "notes", "mynotex.txt"), // Що за файл
  path.join(__dirname, "notes", "notex.txt"), // Нове ім'я файлу
  (err) => {
    if (err) {
      throw new Error(err);
    }
    console.log("Файл переіменовано");
  }
);

// fs.existsSync(path.join(__dirname, "notes", "mynotex.txt")) - поверне true/false відповідно
// fs.unlink(path.join(__dirname, "notes", "mynotex.txt")); - видалить файл
// fs.rmdir(path.join(__dirname, "notes")); - видалить каталог
