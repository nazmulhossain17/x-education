const express = require("express");
const {
  createCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
  processRegister,
  handleLogin,
  handleLogout,
} = require("../controller/admin.controller");
const { isLoggedOut, isAdmin, isLoggedIn } = require("../middleware/index");

const router = express.Router();
// testing route
router.get("/", (req, res) => {
  res.send("2working");
});

// register user
router.post("/register", isLoggedOut, processRegister);
// login user
router.post("/login", isLoggedOut, handleLogin);
// log out user
router.get("/logout", isLoggedIn, handleLogout);

// create course
router.post("/create-course", isLoggedIn, isAdmin, createCourse);
// all course data
router.get("/all-course", getAllCourses);
// get single course data
router.get("/all-course/:id", getSingleCourse);
// update course
router.patch("/update-course/:id", isLoggedIn, isAdmin, updateCourse);
// delete course
router.delete("/delete-course/:id", isLoggedIn, isAdmin, deleteCourse);

module.exports = router;
