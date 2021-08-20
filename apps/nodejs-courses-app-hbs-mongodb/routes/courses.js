const { Router } = require("express");
const Course = require("../models/course");
const auth = require("../middleware/auth");
const router = Router();

router.get("/", async (req, res) => {
  // Course.find().select('email name') - вибере тільки окремі поля, які ми задали
  // Через те, що ми налаштували зв'язок між колекціями через ref,
  // ми можемо тільки по id отримати всі дані юзера, для цього юзати .populate('назваПроперті')
  const courses = await Course.find()
    .populate("userId", "email name")
    .select("price title img"); // другий параметр - через пробіл поля, які треба вибрати

  res.render("courses", {
    title: "Курси",
    isCourses: true,
    courses,
  });
});

router.get("/:id/edit", auth, async (req, res) => {
  if (!req.query.allow) {
    return res.redirect("/");
  }
  const course = await Course.findById(req.params.id);
  res.render("course-edit", {
    title: `Редагувати ${course.title}`,
    course,
  });
});

router.post("/edit", auth, async (req, res) => {
  const { id } = req.body;
  delete req.body.id;
  await Course.findByIdAndUpdate(id, req.body);
  res.redirect("/courses");
});

router.post("/remove", auth, async (req, res) => {
  try {
    await Course.deleteOne({ _id: req.body.id });
    res.redirect("/courses");
  } catch (e) {
    console.log(e);
  }
});

router.get("/:id", async (req, res) => {
  const course = await Course.findById(req.params.id);
  res.render("course", {
    layout: "empty",
    title: `Курс ${course.title}`,
    course,
  });
});

module.exports = router;
