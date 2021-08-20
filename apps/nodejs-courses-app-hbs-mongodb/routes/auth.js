const { Router } = require("express");
const bcrypt = require("bcryptjs");
const mailgun = require("mailgun-js");
const User = require("../models/user");
const keys = require("../keys");
const regEmail = require("../emails/registration");
const router = Router();

function sendMail(objEmail) {
  const smtp = mailgun({
    apiKey: keys.MAILGUN_KEY,
    domain: keys.MAILGUN_DOMAIN,
  });
  smtp.messages().send(objEmail, (error, body) => {
    console.log("Mail was sent >>>", body);
  });
}

router.get("/login", async (req, res) => {
  res.render("auth/login", {
    title: "Авторизація",
    isLogin: true,
    loginError: req.flash("loginError"),
    registerError: req.flash("registerError"), // передасть в шаблон повідомлення по ключу registerError
  });
});

router.get("/logout", async (req, res) => {
  req.session.destroy(() => {
    // Видаляє всі дані сесії і викликає колбек, якщо передали параметром
    res.redirect("/auth/login#login");
  });
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const candidate = await User.findOne({ email });
    if (candidate) {
      // bcrypt.compare() - порівнює звичайну строку (перший параметр) з хешом (другий параметр), асинхронно, вертає проміс
      const areSame = await bcrypt.compare(password, candidate.password);
      if (areSame) {
        // пропертя session в параметрі req з'явилась завдяки пакету express-session і ініціалізації сесії в мідлВарі
        req.session.user = candidate;
        req.session.isAuthenticated = true;
        // тепер в сесію засетається пропертя isAuthenticated === true
        // оскільки даний роут, це ми на /login перейшли POST методом, тобто форму відправили.
        // Засовуємо редірект в колбек, бо інакше, може редіректнутись до того, як в session засетаються значення вище
        req.session.save((err) => {
          if (err) {
            // Якщо помилка - редіректа не буде
            throw err;
          }
          res.redirect("/");
        });
      } else {
        req.flash("loginError", "Не правильний пароль");
        res.redirect("/auth/login#login");
      }
    } else {
      req.flash("loginError", "Такого користувача не існує");
      res.redirect("/auth/login#login");
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/register", async (req, res) => {
  try {
    const { email, password, confirm, name } = req.body;
    const candidate = await User.findOne({ email });
    if (candidate) {
      // метод req.flash() додався внаслідок мідлВеру, першим параметром - ключ повідомлення, а другим - саме повідомлення
      // сетає значення (повідомлення) по ключу (перший параметр) в сесію, а отже, ці дані доступні між реквестами
      // повідомлення видаляються автоматично через 5-10 секунд
      req.flash("registerError", "Користувач з таким Email вже існує");
      res.redirect("/auth/login#register");
    } else {
      if (password !== confirm) {
        req.flash("registerError", "Паролі не співпадають");
        res.redirect("/auth/login#register");
      } else {
        // bcrypt.hash() - робить хеш строки, асинхронно, вертає проміс
        // першим параметром - строку для шифрування, а другим довжину salt строки
        const hashPassword = await bcrypt.hash(password, 10);
        const user = new User({
          email,
          name,
          password: hashPassword,
          cart: {
            items: [],
          },
        });
        await user.save();
        res.redirect("/auth/login#login");
        // Відправку пошти, або різні коли подібні варто робити після редіректу, щоб не тормозило
        sendMail(regEmail(email));
      }
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
