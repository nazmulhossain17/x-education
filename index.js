const mongoose = require("mongoose");
const app = require("./app");
const { port, dbURL } = require("./config");

async function connectDB() {
  try {
    await mongoose.connect(dbURL);
    console.log("Database connected");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

connectDB();
