const { body } = require("express-validator");

// Правильно валідатори виносити в окремий файл, чистіше код, зручніше читати

exports.registerValidators = [body("email").isEmail()];
