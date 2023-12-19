const { jwtKey } = require("../config");
const { hashPassword, comparePassword } = require("../helper/auth.helper");
const Auth = require("../models/auth.schema");
const Course = require("../models/course.schema");
const jwt = require("jsonwebtoken");

const processRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await Auth.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new Auth({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: savedUser,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.send(400).json({ message: "Email and password are required" });
    }

    const user = await Auth.findOne({ email });

    if (!user) {
      return res.send(404).json({ message: "Email not found" });
    }

    const passwordMatch = await comparePassword(password, user.password);

    if (!passwordMatch) {
      return res.send(401).json({ message: "Incorrect email or password" });
    }

    const token = jwt.sign({ user }, jwtKey);

    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json({ success: true, message: "Login successful" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const handleLogout = async (req, res) => {
  try {
    res.clearCookie("access_token");
    return res.status(200).json({ message: "Log out successful" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

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
    const courses = await Course.find();

    // Reorder each course in the array
    const reorderedCourses = courses.map((course) => ({
      _id: course._id,
      name: course.name,
      description: course.description,
      price: course.price,
      duration: course.duration,
      level: course.level,
      topics: course.topics,
      __v: course.__v,
      result: {
        schedule: course.schedule,
      },
    }));

    // Send the reordered array in the response
    res.status(200).json({
      message: "All courses data fetched",
      courses: reorderedCourses,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getSingleCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Course.findOne({ _id: id });
    if (!result) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Create a new object with properties reordered
    const reorderedResult = {
      message: "Specific course data fetched",
      _id: result._id,
      name: result.name,
      description: result.description,
      price: result.price,
      duration: result.duration,
      level: result.level,
      topics: result.topics,
      __v: result.__v,
      result: {
        schedule: result.schedule,
      },
    };

    res.status(201).json(reorderedResult);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const { description, price, duration, level, topics, schedule } = req.body;

    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      {
        description,
        price,
        duration,
        level,
        topics,
        schedule,
      },
      { new: true, runValidators: true }
    );

    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({
      message: "Course updated successfully",
      course: updatedCourse,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;

    const deletedCourse = await Course.findByIdAndDelete(courseId);

    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const errorResponse = (
  res,
  { statusCode = 500, message = "Internal Server Error" }
) => {
  return res.status(statusCode).json({
    success: false,
    message: message,
  });
};

module.exports = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
  processRegister,
  handleLogin,
  errorResponse,
  handleLogout,
};
