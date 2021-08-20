// Цей МідлВер - огортає просту пропертю session.user (це простий об'єкт) в
// модель Mongo, яку ми розширили нашими власними методами

const User = require("../models/user");

module.exports = async function (req, res, next) {
  if (!req.session.user) {
    return next();
  }
  req.user = await User.findById(req.session.user._id);
  next();
};
