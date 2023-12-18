const express = require("express");
const {
  createCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
  processRegister,
  handleLogin,
} = require("../controller/admin.controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("2working");
});

// register user
router.post("/register", processRegister);
router.post("/login", handleLogin);

router.post("/create-course", createCourse);
router.get("/all-courses", getAllCourses);
router.get("/courses/:id", getSingleCourse);
router.patch("/update-course/:id", updateCourse);
router.delete("/delete-course/:id", deleteCourse);
module.exports = router;
