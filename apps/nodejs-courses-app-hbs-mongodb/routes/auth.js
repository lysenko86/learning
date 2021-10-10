const { Router } = require("express");
const bcrypt = require("bcryptjs");
const crypto = require("crypto"); // стандартна ліба як і fs
const { validationResult } = require("express-validator");
// пакет для різних перевірок, просто обгортка пакету validator.js для express
// https://github.com/express-validator/express-validator
// https://github.com/validatorjs/validator.js
const mailgun = require("mailgun-js");
const User = require("../models/user");
const keys = require("../keys");
const regEmail = require("../emails/registration");
const resetEmail = require("../emails/reset");
const { registerValidators } = require("../utils/validators");
// імпортуємо наші валідатори, юзаємо як мідлвер
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

router.post("/register", registerValidators, async (req, res) => {
  // юзаємо валідатор як мідлВер, перед останнім параметром - може бути скільки хоч параметрів-мідлВарів
  try {
    const { email, password, confirm, name } = req.body;
    const candidate = await User.findOne({ email });

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // цей метод видає true, якщо помилок немає
      // якщо помилки є, то метод array() поверне масив помилок
      req.flash("registerError", errors.array()[0].msg);
      return res.status(422).redirect("/auth/login#register"); // 422 - Звичайний HTTP статус який вказує на помилки валідації
    }

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

router.get("/reset", (req, res) => {
  res.render("auth/reset", {
    title: "Забули пароль?",
    error: req.flash("error"),
  });
});

router.post("/reset", (req, res) => {
  try {
    // Генерує токен довжиною 32 символи
    crypto.randomBytes(32, async (err, buffer) => {
      if (err) {
        req.flash("error", "Щось пішло не так, спробуйте пізніше ще раз");
        return res.redirect("/auth/reset");
      }

      const token = buffer.toString("hex");
      const candidate = await User.findOne({ email: req.body.email });

      if (candidate) {
        candidate.resetToken = token;
        candidate.resetTokenExp = Date.now() + 60 * 60 * 1000;
        await candidate.save();
        sendMail(resetEmail(candidate.email, token));
        res.redirect("/auth/login");
      } else {
        req.flash("error", "Такого email нема");
        res.redirect("/auth/reset");
      }
    });
  } catch (e) {
    console.log(e);
  }
});

router.get("/password/:token", async (req, res) => {
  if (!req.params.token) {
    return res.redirect("/auth/login");
  }

  try {
    const user = await User.findOne({
      resetToken: req.params.token,
      resetTokenExp: { $gt: Date.now() },
      // $gt - https://metanit.com/nosql/mongodb/2.8.php
    });

    if (!user) {
      return res.redirect("/auth/login");
    } else {
      res.render("auth/password", {
        title: "Відновити доступ",
        error: req.flash("error"),
        userId: user._id.toString(),
        token: req.params.token,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/password", async (req, res) => {
  try {
    const user = await User.findOne({
      _id: req.body.userId,
      resetToken: req.body.token,
      resetTokenExp: { $gt: Date.now() },
    });

    if (user) {
      user.password = await bcrypt.hash(req.body.password, 10);
      user.resetToken = undefined;
      user.resetTokenExp = undefined;
      await user.save();
      res.redirect("/auth/login");
    } else {
      req.flash("loginError", "Час актуальності токена вичерпано");
      res.redirect("/auth/login");
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
