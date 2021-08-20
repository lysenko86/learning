module.exports = {
  ifeq(a, b, options) {
    // в шаблоні юзаємо {{#ifeq param1 param2}}
    if (a == b) {
      return options.fn(this);
      // Виконається коли перевірка true
    }
    return options.inverse(this);
    // якщо є блок else - то виконається те, що там
  },
};
