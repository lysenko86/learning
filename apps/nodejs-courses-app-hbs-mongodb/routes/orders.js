const { Router } = require("express");
const Order = require("../models/order");
const auth = require("../middleware/auth");
const router = Router();

router.get("/", auth, async (req, res) => {
  try {
    const orders = await Order.find({ "user.userId": req.user._id }).populate(
      "user.userId"
    );
    res.render("orders", {
      isOrder: true,
      title: "Замовлення",
      orders: orders.map((o) => ({
        ...o._doc,
        price: o.courses.reduce(
          (total, c) => total + c.count * c.course.price,
          0
        ),
      })),
    });
  } catch (e) {
    console.log(e);
  }
});

router.post("/", auth, async (req, res) => {
  try {
    // Огортаємо в try catch оскільки багато роботи з асинхронними запитами
    const user = await req.user.populate("cart.items.courseId").execPopulate();
    const courses = user.cart.items.map((i) => ({
      count: i.count,
      course: { ...i.courseId._doc },
    }));
    const order = new Order({
      user: {
        name: req.user.name,
        userId: req.user,
      },
      courses,
    });
    await order.save();
    await req.user.clearCart();
    res.redirect("/orders");
  } catch (e) {
    consoe.log(e);
  }
});

module.exports = router;
