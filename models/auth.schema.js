const mongoose = require("mongoose");

// Define the schema for the course
const authSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email Address is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Auth = mongoose.model("Auth", authSchema);

module.exports = Auth;
