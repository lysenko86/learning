const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: String,
  password: {
    type: String,
    required: true,
  },
  cart: {
    items: [
      {
        count: {
          type: Number,
          required: true,
          default: 1,
        },
        courseId: {
          type: Schema.Types.ObjectId,
          ref: "Course",
          // Посилання на іншу колекцію, хороший приклад: https://coderoad.ru/14826132/какова-реальная-цель-ref-DBRef-в-MongoDb#14826566
          // Наприклад, коли в нас є корзина і ми туди складаємо фрукти - ми додаєто просто id, а якщо в нас можуть бути також овочі, то може вийти така ситуація
          // const fruits = ['apple', 'orange']
          // const vegetables = ['cucumber', 'tomato']
          // cart = [{ id: 0 }, {id: 0}] - щоб такої біди не було і не придумувати спеціально fruitId та vegId замість id, робимо так:
          // cart = [{ id: 0, ref: 'Fruits' }, {id: 0, ref: 'Vegetables'}]
          required: true,
        },
      },
    ],
  },
});

// Ми можемо розширяти схему своїми власними методами
// Маємо обов'язково юзати function, бо нам потрібен контекст, arrow functions не можемо юзати, бо вони не мають контексту
userSchema.methods.addToCart = function (course) {
  // В даному випадку this це userSchema
  const items = [...this.cart.items];
  const idx = items.findIndex(
    (c) => c.courseId.toString() === course._id.toString()
  );
  if (idx >= 0) {
    items[idx].count = items[idx].count + 1;
  } else {
    items.push({
      courseId: course._id,
      count: 1,
    });
  }
  this.cart = { items };
  return this.save(); // Обов'язково в кінці має бути викликано, щоб зміни збереглись
};

userSchema.methods.removeFromCart = function (id) {
  let items = [...this.cart.items];
  const idx = items.findIndex((c) => c.courseId.toString() === id.toString());
  if (items[idx].count === 1) {
    items = items.filter((c) => c.courseId.toString() !== id.toString());
  } else {
    items[idx].count--;
  }
  this.cart = { items };
  return this.save();
};

userSchema.methods.clearCart = function () {
  this.cart = { items: [] };
  return this.save();
};

module.exports = model("User", userSchema);
