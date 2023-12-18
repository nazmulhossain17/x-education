const express = require("express");
const {
  createCourse,
  getAllCourses,
} = require("../controller/admin.controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("2working");
});

router.post("/create-course", createCourse);
router.get("/all-courses", getAllCourses);

module.exports = router;
