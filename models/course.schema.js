const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    price: {
      type: String,
      required: [true, "Price is required"],
    },
    duration: {
      type: String,
      required: [true, "Duration is required"],
    },
    level: {
      type: String,
      required: [true, "Level is required"],
    },
    topics: {
      type: [String],
      required: [true, "Topics is required"],
    },
    schedule: {
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
      classDays: {
        type: [String],
        required: [true, "Class Days is required"],
      },
      classTime: {
        type: String,
        required: [true, "Class Time is required"],
      },
    },
  },
  { timestamps: true }
);

// Create a Course model using the schema
const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
