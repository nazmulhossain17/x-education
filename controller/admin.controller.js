const Course = require("../models/course.schema");

const createCourse = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      duration,
      level,
      topics,
      schedule: { startDate, endDate, classDays, classTime },
    } = req.body;

    // Create a new course instance using the Course model
    const newCourse = new Course({
      name,
      description,
      price,
      duration,
      level,
      topics,
      schedule: {
        startDate,
        endDate,
        classDays,
        classTime,
      },
    });

    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const products = await Course.find();
    res.status(201).json({ message: "All Courses", products });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { createCourse, getAllCourses };
