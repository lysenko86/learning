// Source: https://www.udemy.com/course/nodejs-full-guide/

// node 12.0.0
// https://materializecss.com/
// https://handlebarsjs.com/guide/


const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars'); // підключаити двіжок для генерації HTML
const homeRoutes = require('./routes/home');
const addRoutes = require('./routes/add');
const coursesRoutes = require('./routes/courses');
const cartRoutes = require('./routes/cart');
const app = express();



const hbs = exphbs.create({ // налаштували двіжок для генерації HTML
  defaultLayout: 'main', // Основний шаблон
  extname: 'hbs', // Розширення двіжка, щоб юзати в коді
});
app.engine('hbs', hbs.engine); // Реєструємо в express двіжок (тобто, щоб express взагалі знав, що такий існує)
// app.set() - метод конфігурування змінних/проперті в express
app.set('view engine', 'hbs'); // задаємо що двіжок будемо юзати саме hbs (зареєстрований раніше)
app.set('views', 'views'); // задаємо місце, де в нас лежать в'юшки



// app.use() - метод для додавання новий мідлВерів
// Middleware - це методи/функції/операції, що виконуються між обробкою реквеста і відправкою респонса
app.use(express.static(path.join(__dirname, 'public'))); // Дали знати express що в нас є папка зі статичними ресурсами
// Задали проміжну функцію перехоплення запиту, тобто, коли приходить якийсь запит, express спочатку буде
// шукати даний файл в папці public, якщо не знайде - йде далі до обробки URLs

app.use(express.urlencoded({ extended: true }));
// express.json() та express.urlencoded() - це мідлВери, які потрібні тільки для запитів POST і PUT, для GET і DELETE вони не потрібні
// причина в тому, що у POST і PUT відправляються данні (у вигляді певного об'єкту) на сервер і ми просимо сервер прийняти або зберегти ці дані
// express.json() - юзаєм, якщо дані йдуть у вигляді об'єкту JSON - application/json
// express.urlencoded() - юзаєм, якщо дані йдуть у вигляді строки або масиву - application/x-www-form-urlencoded
// extended: true - для express.urlencoded() визначає яка ліба буде парсити дані, якщо true - qs library, інакше - querystring library
// я так розумію це потрібно коли є багато вкладених масивів / об'єктів

app.use('/', homeRoutes);
app.use('/add', addRoutes); // Першим параметром задаємо префікс роута, так на багато зрозуміліше за які шляхи відповідає роут
app.use('/courses', coursesRoutes);
app.use('/cart', cartRoutes);

/*
// app.get() - обробка GET запитів, app.post() - POST запитів
app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, 'views', 'index.html')); // просто відправити файл HTML
  res.render('index', { // render() - коли юзаємо двіжок, вказуємо тільки ім'я файлу в'юшки
    title: 'Головна сторінка',
    isHome: true,
  });
});
*/



const PORT = process.env.PORT || 3000; // значення порта пробуємо взяти з середовища
app.listen(PORT, () => { // працює по аналогії з результатом виконання http.createServer()
  console.log('Server was started on port', PORT);
});
