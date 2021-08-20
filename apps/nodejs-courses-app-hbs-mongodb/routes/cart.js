const { Router } = require("express");
const Course = require("../models/course");
const auth = require("../middleware/auth");
const router = Router();

function mapCartItems(cart) {
  return cart.items.map((c) => ({
    // щоб вибрати тільки потрібні поля без купи метадати, звертаємось не просто до .courseId а до поля courseId._doc
    ...c.courseId._doc,
    id: c.courseId.id, // треба додати явно це поле, щоб отримати трансформовані дані
    count: c.count,
  }));
}

function computePrice(courses) {
  return courses.reduce(
    (total, course) => total + course.price * course.count,
    0
  );
}

router.post("/add", auth, async (req, res) => {
  const course = await Course.findById(req.body.id);
  await req.user.addToCart(course);
  res.redirect("/cart");
});

router.delete("/remove/:id", auth, async (req, res) => {
  await req.user.removeFromCart(req.params.id);
  const user = await req.user.populate("cart.items.courseId").execPopulate();
  const courses = mapCartItems(user.cart);
  const cart = {
    courses,
    price: computePrice(courses),
  };
  res.status(200).json(cart);
});

router.get("/", auth, async (req, res) => {
  // через .populate() вказуємо не просто назву проперті а і шлях до неї
  const user = await req.user.populate("cart.items.courseId").execPopulate();
  // Після цього в полі courseId вже буде лежати не айдішка а все те,
  // що ми запопулейтили, треба це перетворити в нормальний вигляд
  // створимо для цього ф-цію-хелпер
  const courses = mapCartItems(user.cart);
  res.render("cart", {
    title: "Кошик",
    isCart: true,
    courses: courses,
    price: computePrice(courses),
  });
});

module.exports = router;
