const mongoose = require("mongoose");
const { format } = require("date-fns");

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: false,
    },
    description: {
      type: String,
      require: true,
      unique: false,
    },
    author: {
      type: String,
      require: false,
      unique: false,
    },
    createdBy: {
      type: String,
      require: true,
      unique: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
