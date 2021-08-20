const keys = require("../keys");

module.exports = function (email) {
  return {
    to: email,
    from: keys.EMAIL_FROM,
    subject: "Аккаунт створено",
    html: `
      <h1>Ласкаво просимо до нашого магазину</h1>
      <p>Ви успішно створили аккаунт с Email - ${email}</p>
      <hr />
      <a href="${keys.BASE_URL}">Магазин курсів</a>
    `,
  };
};
