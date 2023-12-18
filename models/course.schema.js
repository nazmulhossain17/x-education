const mongoose = require("mongoose");

// Define the schema for the course
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  topics: {
    type: [String],
    required: true,
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
      required: true,
    },
    classTime: {
      type: String,
      required: true,
    },
  },
});

// Create a Course model using the schema
const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
