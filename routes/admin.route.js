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

router.get("/", (req, res) => {
  res.send("2working");
});

// register user
router.post("/register", isLoggedOut, processRegister);
router.post("/login", isLoggedOut, handleLogin);
router.get("/logout", isLoggedIn, handleLogout);

router.post("/create-course", isLoggedIn, isAdmin, createCourse);
router.get("/all-courses", getAllCourses);
router.get("/courses/:id", isAdmin, getSingleCourse);
router.patch("/update-course/:id", isLoggedIn, isAdmin, updateCourse);
router.delete("/delete-course/:id", isLoggedIn, isAdmin, deleteCourse);
module.exports = router;
