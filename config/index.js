require("dotenv").config();

const dbURL = process.env.DB_URL;
const port = process.env.PORT;

module.exports = { dbURL, port };
