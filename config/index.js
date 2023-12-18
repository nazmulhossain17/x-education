require("dotenv").config();

const dbURL = process.env.DB_URL;
const port = process.env.PORT;
const jwtKey = process.env.JWT_KEY;

module.exports = { dbURL, port, jwtKey };
