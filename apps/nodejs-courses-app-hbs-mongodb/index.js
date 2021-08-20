// Source: https://www.udemy.com/course/nodejs-full-guide/

// node 12.0.0
// https://materializecss.com/
// https://handlebarsjs.com/guide/
// https://www.mongodb.com/
// express, express-session, connect-mongodb-session, bcryptjs, csurf, connect-flash
// mailgun-js
//     - https://www.mailgun.com/
//     - https://documentation.mailgun.com/en/latest/quickstart-sending.html#send-with-smtp-or-api

const express = require("express");
const path = require("path");
const csrf = require("csurf"); // повертає ф-цію, додаємо як мідлВер
const flash = require("connect-flash"); // повертає ф-цію, додаємо як мідлВер
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
// Пакет express-session - для роботи з сесіями в ноді
const session = require("express-session");
// Пакет connect-mongodb-session - дозволяє автоматично зберігати сесії в БД
// він синхронізує express-session з нашою БД, тому підключається він наступним чином
// спочатку створюємо інстанс express-session - session і передаємо цей інстанс параметром
// connect-mongodb-session повертає ф-цію, куди треба передати інстанс session і результатом ф-ції буде клас MongoStore
const MongoStore = require("connect-mongodb-session")(session);
// Сесії треба зберігати в БД, це підвищує захист проекту, бо сесії лежать не локально, а в БД
// також сесії в БД збережуть пам'ять, бо якщо в нас 100000 юзерів і кожний з корзиною - це дуже багато даних
const homeRoutes = require("./routes/home");
const addRoutes = require("./routes/add");
const coursesRoutes = require("./routes/courses");
const cartRoutes = require("./routes/cart");
const ordersRoutes = require("./routes/orders");
const authRoutes = require("./routes/auth");
//const User = require("./models/user");
const varMiddleware = require("./middleware/variables");
const userMiddleware = require("./middleware/user");
const keys = require("./keys");

const app = express();

const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

// використання класу MongoStore - створюємо store, в конструктор передаємо конфіг
const store = new MongoStore({
  collection: "sessions", // назва колекції, де будуть зберігатись всі сесії
  uri: keys.MONGODB_URI, // uri конекту до БД
});
// після такої ініціалізації передаємо store в сесію

// Свій власний мідлВер, важливий параметр next, він потрібен щоб після нашого мідлВеру всі інші, що йдуть нижче також відпрацювали
// Потрібен був щоб користуватись єдиним юзером з бази, захардкодивши айдішнік, тепер не актуально
// app.use(async (req, res, next) => {
//   try {
//     const user = await User.findById("60e4cde49d307989d4581123");
//     req.user = user; // Додаємо до об'єкту req нашого юзера, щоб він був доступний звідусіль
//     next(); // Потрібно викликати, щоб виконання пішло далі і виконались всі наступні мідлВари
//   } catch (e) {
//     console.log(e);
//   }
// });

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// пакет express-session для роботи з сесіями на стороні сервера в ноді
// юзається як функція мідлВару, передаємо туди різні параметр для конфігурації
// в браузері будемо бачити в куках ключ connect.sid із зашифрованим значенням сесії
app.use(
  session({
    secret: keys.SESSION_SECRET, // ключ для шифрування сесії, якась строка
    resave: false, // вказує чи треба перезберігати сесію в сховище, якщо вона не змінилась
    saveUninitialized: false, //  якщо true, то в сховище будуть попадати пусті сесії
    store, // задає store, по дефолту просто пам'ять, зараз ми задали store від MongoDB
  })
  // тепер у нас в параметрі req з'явиться доп поле session і в ньому ми можемо зберігати дані
);

// Юзається для CSRF захисту - перевіряє csrf token на POST запитах, якщо токен не валідний
// реквест стопається і пише помилку
// нам треба до кожної форми додати інпут hidden з спец іменем name="_csrf" і з значенням
// цього токену і слати в POST запиті, тільки на це ім'я дивиться цей мідлВер
// тоді цей мідлвер не буде стопатись
app.use(csrf());
// Якщо це AJAX або REST запит, тобто не POST, то юзаємо хедер headers: { "X-XSRF-TOKEN": csrf }

// Юзається для роботи з помилками, використовуючи сесію
app.use(flash());

// Юзаємо свій власний мідлВер, коли вже маємо пропертю req.session
// він по своїй суті робить щось з даними і викликає next() щоб передати виконання
// коду далі, всим наступним мідлВерам
app.use(varMiddleware);
app.use(userMiddleware);

app.use("/", homeRoutes);
app.use("/add", addRoutes);
app.use("/courses", coursesRoutes);
app.use("/cart", cartRoutes);
app.use("/orders", ordersRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
async function start() {
  try {
    await mongoose.connect(keys.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    // Створювали раніше юзера в базі, якщо не було, тепер не актуально
    // const candidate = await User.findOne();
    // if (!candidate) {
    //   const user = new User({
    //     email: "stepan@gmail.com",
    //     name: "Stepan",
    //     cart: { items: [] },
    //   });
    //   await user.save();
    // }
    app.listen(PORT, () => {
      console.log("Server was started on port", PORT);
    });
  } catch (e) {
    console.log(e);
  }
}
start();
