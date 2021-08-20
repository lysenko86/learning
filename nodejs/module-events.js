// source: https://www.udemy.com/course/nodejs-full-guide
// source: https://youtu.be/RFh85sV8080
// documentation: https://nodejs.org/dist/latest-v14.x/docs/api/events.html

const EventEmitter = require("events"); // модуль для роботи з івентами в node.js

const emitter = new EventEmitter(); // створюємо інстанс класу
emitter.on("some_event", (args) => {
  // додаємо підписку на подію some_event
  // перший параметр - назва івента, другий - ф-ція для обробки
  const { id, text } = args;
  console.log(id, text);
});
emitter.emit("some_event", { id: 1, text: "Event test text!" }); // викликаємо івент
// перший параметр - назва івента, другий - данні, що передаються в ф-цію-обробник

class Logger extends EventEmitter {
  // Наслідування від EventEmitter дає зразу 2 методи ".on()" та ".emit()"
  log(message) {
    // Реалізуємо якийсь власний метод, з якимсь одним параметром "message"
    console.log("Просто виконання методу, message = ", message);
    this.emit("message", `${message} ${Date.now()}`); // звертаємось до батьківського методу - викликаємо івент
    // Перший параметр - назва івента, яку ми хочемо заемітити
    // Другий параметр - дані, які ми хочемо передати
  }
}

const logger = new Logger();

logger.on("message", (data) => {
  // звертаємось до батьківського методу - підписуємось на івент "message"
  // Перший параметр - назва івента, яку ми хочемо слухати
  // Другий параметр - дані, що передаються в методі this.emit(..., data)
  console.log("Спрацювання по підписці на подію, data:", data);
});
// Важлива послідовність - спочатку підписатись на івент, а потім викликати, інакше не спрацює

logger.log("Hello");
logger.log("Hello");
logger.log("Hello");
