const express = require("express");
const { admin, createCourse } = require("../controller/admin.controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("2working");
});

router.post("/create-course", createCourse);

module.exports = router;
