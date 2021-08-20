// Цей МідлВер - для захисту певних роутів, які доступні тільки авторизованим юзерам

module.exports = function (req, res, next) {
  if (!req.session.isAuthenticated) {
    return res.redirect("/auth/login");
    // return пишемо, щоб завершити виконання даної ф-ції, оскільки після редіректу далі по мідлверам йти не треба
  }
  next();
};
