const { Router } = require("express");
const Course = require("../models/course");
const auth = require("../middleware/auth");
const router = Router();

router.get("/", auth, (req, res) => {
  // другим параметром можна передати мідлВер і тоді обробник запиту буде втретьому параметрі
  res.render("add", {
    title: "Додати курс",
    isAdd: true,
  });
});

router.post("/", auth, async (req, res) => {
  const course = new Course({
    title: req.body.title,
    price: req.body.price,
    img: req.body.img,
    userId: req.user,
  });

  try {
    await course.save();
    res.redirect("/courses");
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;