const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const adminRouter = require("./routes/admin.route");
const { errorResponse } = require("./controller/admin.controller");

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", adminRouter); // Fix: Use "/api/v1" instead of "api/v1"

app.get("/", (req, res) => {
  res.send("Working");
});

app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
  });
});

module.exports = app;
