// Створюємо свій власний мідлВер. МідлВер - це просто ф-ція
// Цей МідлВер - для додавання змінної isAuth в шаблон

module.exports = function (req, res, next) {
  // res.locals - об'єкт, поля якого будуть доступні в шаблона handleBars
  res.locals.isAuth = req.session.isAuthenticated;
  // відповідно тут ми задаємо змінну isAuth для шаблонів, значення якої беремо із сесії
  res.locals.csrf = req.csrfToken();
  // створюємо змінну csrf для шаблона, вона буде містити значення csrf токену, яке ми будемо відправляти
  // у формі з кожним POST запитом
  // метод req.csrfToken() з'явився після додавання мідлВеру app.use(csrf());
  next();
};
