const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

// Трансформація даних, копіюємо значення з _id в id для зручності і видаляємо _id щоб не дублювались дані
courseSchema.method("toClient", function () {
  const course = this.toObject();
  course.id = course._id;
  delete course._id;
  return course;
});

module.exports = model("Course", courseSchema);
