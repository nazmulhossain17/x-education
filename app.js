const express = require("express");
const cors = require("cors");
const adminRouter = require("./routes/admin.route");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1", adminRouter); // Fix: Use "/api/v1" instead of "api/v1"

app.get("/", (req, res) => {
  res.send("Working");
});

module.exports = app;
